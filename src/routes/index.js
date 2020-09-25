/* eslint-disable linebreak-style */
import express from 'express';

import { indexPage, aboutPage } from '../controllers';

const indexRouter = express.Router();

indexRouter.get('/', indexPage);

indexRouter.get('/about', aboutPage);

export default indexRouter;
