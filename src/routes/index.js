/* eslint-disable linebreak-style */
import express from 'express';

import { indexPage, aboutPage, messagePage } from '../controllers';

const indexRouter = express.Router();

indexRouter.get('/', indexPage);

indexRouter.get('/about', aboutPage);

indexRouter.get('/messages', messagePage);

export default indexRouter;
