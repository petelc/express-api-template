/* eslint-disable no-plusplus */
/* eslint-disable no-console */
import Model from '../models/model';

const sql = require('mssql');
require('msnodesqlv8');

const employeeModel = new Model('Employees');

export const employeePage = async (req, res) => {
  await employeeModel.queryDb('FirstName, LastName, Title').then(result => {
    res.status(200).json({ employees: result });
  }).catch(err => {
    sql.close();
    console.log(err);
    res.status(200).json({ employees: err.stack });
  });
};

export const addEmployee = async (req, res) => {
  const {
    FirstName,
    LastName,
    Title,
    HireDate,
    PerformanceRating,
    Phone,
    Manager
  } = req.body;
  const columns = 'FirstName, LastName, Title, HireDate, PerformanceRating, Phone, Manager';
  const values = `
  '${FirstName}',
  '${LastName}',
  '${Title}',
  '${HireDate}',
  '${PerformanceRating}',
  '${Phone}',
  '${Manager}'
  `;

  await employeeModel.createEmployee(columns, values).then(result => {
    res.status(200).json({ employees: result });
  }).catch(err => {
    sql.close();
    console.log(err);
    res.status(200).json({ employees: err.stack });
  });
};
