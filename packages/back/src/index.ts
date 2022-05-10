import runtimeVars from './config/runtimeVars';

import makeApp from './app';

const port = runtimeVars.PORT;

makeApp()
    .then((app) => {
        app.set('port', port || 7000);

        app.listen(port, async () => {
            console.info(`🚀 server up on http://localhost:${port}`);
        });
    })
    .catch((err) => console.error('Fatal server error', err));
