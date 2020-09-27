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
}

export default Model;
