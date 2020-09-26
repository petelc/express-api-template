/* eslint-disable linebreak-style */
import dontenv from 'dotenv';

dontenv.config();
export const testEnvironmentVariable = process.env.TEST_ENV_VARIABLE;
export const connectionString = process.env.CONNECTION_STRING;
