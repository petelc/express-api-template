/* eslint-disable linebreak-style */
import dontenv from 'dotenv';

dontenv.config();
export const testEnvironmentVariable = process.env.TEST_ENV_VARIABLE;
export const dbServerName = process.env.MS_SERVER;
export const dbUserName = process.env.MS_USER;
export const dbPassword = process.env.MS_PASSWORD;
export const db = process.env.MS_DATABASE;
