# This is the base dockerfile. Here the base image is pulled and the ras setup is done for the project.
# Make sure to include the base setup for lerna here.
FROM node:16 as base
COPY ./package.json ./
RUN yarn install
COPY ./lerna.json ./
# Package back
FROM base as back-build
WORKDIR /app/packages/back
# Here the dependencies will be installed and the local required packages bootstrapped.
# The --slim flag will cause the package json to only include the dependencies, so not all changes to the package json cause docker to reinstall all packages.
COPY  packages/back/package-slim.json package.json
WORKDIR /app/
RUN npx lerna bootstrap --scope=back --includeDependencies
WORKDIR /app/packages/back
# The normal package.json should be copied after the install into the container
COPY  packages/back/package.json ./
# This will only add the command to the dockerfile if the build script exists in the package otherwise its ignored.
RUN yarn run build
# Package front
FROM base as front-build
WORKDIR /app/packages/front
# Here the dependencies will be installed and the local required packages bootstrapped.
# The --slim flag will cause the package json to only include the dependencies, so not all changes to the package json cause docker to reinstall all packages.
COPY  packages/front/package-slim.json package.json
WORKDIR /app/
RUN npx lerna bootstrap --scope=front --includeDependencies
WORKDIR /app/packages/front
# The normal package.json should be copied after the install into the container
COPY  packages/front/package.json ./
# This will only add the command to the dockerfile if the build script exists in the package otherwise its ignored.
RUN yarn run build
# final stage
FROM base
COPY --from=back-build /app/packages/back /app/packages/back
COPY --from=front-build /app/packages/front /app/packages/front