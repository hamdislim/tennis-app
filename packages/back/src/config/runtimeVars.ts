import { config } from 'dotenv';
import { slashlessUrl } from '../helpers';

config();

/* required env vars check */
const requiredRuntimeVars = ['PORT', 'DATA_HOST'];

requiredRuntimeVars.forEach((required) => {
    if (!process.env[required]) {
        console.error('required env attribute is missing:', required);
        process.exit(1);
    }
});

const runtimeVars = {
    NODE_ENV: process.env.NODE_ENV || 'development',
    PORT: process.env.PORT,
    DATA_HOST: slashlessUrl(process.env.DATA_HOST),
};

export default runtimeVars;
