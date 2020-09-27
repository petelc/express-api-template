/* eslint-disable class-methods-use-this */
/* eslint-disable func-names */
/* eslint-disable new-cap */
/* eslint-disable no-console */
/* eslint-disable no-plusplus */
import { dbconfig } from '../config/dbconfig';

const sql = require('mssql');
require('msnodesqlv8');

class Model {
  constructor(table) {
    this.table = table;
  }

  async queryDb(columns) {
    // console.log(dbconfig);
    const data = [];
    const pool = await sql.connect(dbconfig);
    const result = await pool.request()
      .query(`select ${columns} from ${this.table}`);

    for (let i = 0; i < result.rowsAffected; i++) {
      data.push(result.recordset[i]);
    }

    return data;
  }

  async createEmployee(columns, values) {
    const pool = await sql.connect(dbconfig);
    const transaction = new sql.Transaction(pool);
    await transaction.begin(err => {
      if (err) {
        console.log(err);
      }
      const request = new sql.Request(transaction);
      request.query(
        `INSERT INTO ${this.table}(${columns})
                VALUES (${values})`, (err2, result) => {
          if (err2) {
            console.log(err2);
          }
          transaction.commit(err3 => {
            if (err3) {
              console.log(err3);
            }
            console.log('Transaction committed');
          });
          return result;
        }
      );
    });
  }
}

export default Model;
