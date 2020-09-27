/* eslint-disable linebreak-style */
import express from 'express';

import { indexPage, aboutPage, employeePage } from '../controllers';

const indexRouter = express.Router();

indexRouter.get('/', indexPage);

indexRouter.get('/about', aboutPage);

indexRouter.get('/employees', employeePage);

export default indexRouter;
