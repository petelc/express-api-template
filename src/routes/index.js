/* eslint-disable linebreak-style */
import express from 'express';

import {
  indexPage,
  aboutPage,
  employeePage,
  addEmployee
} from '../controllers';

const indexRouter = express.Router();

indexRouter.get('/', indexPage);

indexRouter.get('/about', aboutPage);

indexRouter.get('/employees', employeePage);

indexRouter.post('/employees', addEmployee);

export default indexRouter;
