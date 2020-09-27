import {
  dbServerName,
  dbUserName,
  dbPassword,
  db
} from '../settings';

export const dbconfig = {
  user: dbUserName,
  password: dbPassword,
  server: dbServerName,
  driver: 'msnodesqlv8',
  database: db,
  port: 1433,
  options: {
    enableArithAbort: true,
    trustedConnection: true
  }
};
