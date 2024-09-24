import config from './config.json';
import dotenv from 'dotenv';

dotenv.config();

export type Environment='TEST'|'PROD'|'CI'

export function getBaseUrl(): string {
    const env =  process.env.environment || 'TEST';
    return config[env].baseUrl;
}

export function getEnv(): Environment {
    const env =  process.env.environment || 'TEST';
    return config[env].env;
}

export function getAccessCode(): string {
    const env =  process.env.environment || 'TEST';
    return config[env].accessCode;
}
