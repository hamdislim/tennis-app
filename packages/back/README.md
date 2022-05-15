# tennis App back End

This project serves to get the tennis players and games ifnormations.

[![NPM](https://img.shields.io/npm/v/@vp/care-react-c2c.svg)]() [![JavaScript Style Guide](https://img.shields.io/badge/code_style-standard-brightgreen.svg)](https://standardjs.com)
## Getting Started

These instructions will get you a copy of the project up and running on your local machine for development and testing purposes. See deployment for notes on how to deploy the project on a live system.

### Prerequisites

To start work on this project you will need to install both node and git.

```
$ /usr/bin/ruby -e "$(curl -fsSL https://raw.githubusercontent.com/Homebrew/install/master/install)"
$ brew update
$ brew doctor
$ brew install node
$ brew install git
```

### Installing

To start development you'll need to do the following.

Download the repository 

```
 git clone https://github.com/hamdislim/tennis-app.git
```

Install all the related dependencies for the project

```
cd tennis-app/packages/back
yarn add
```

Configure your local environment variables in your **.env** file. You'll need to create this local only file and add any necessary environment variables as seen below.

```
touch .env
# Add the following in your favorite editor
NODE_ENV=development
PORT=7000
HOST=http://localhost:7000
DATA_HOST=get me from github
```

You can then validate your installation by starting the server and browsing to http://localhost:7000/docs
```
yarn run start
```

## Running the tests

To run our automated testing suite, use the following commands.

```
yarn test
```

## Deployment

All merges to master will be automatically deployed to production.

## Built With

* [Github](http://www.github.com/) - Our CI/CD
* Magic

## Contributing

Please read [CONTRIBUTING.md](https://gitlab.com/vistaprint-org/care-and-design-services-technology/care/titans/channel-provider-service/blob/master/CONTRIBUTING.md) for details on our code of conduct, and the process for submitting pull requests to us.

## Versioning

We use [SemVer](http://semver.org/) for versioning. For the versions available, see the [registry](https://gitlab.com/vistaprint-org/care-and-design-services-technology/care/titans/channel-provider-service/container_registry). 

## Maintainers

* Slim

## Acknowledgments

* I died to bring you this information.


## Logs

* None

## Run Books

* None
