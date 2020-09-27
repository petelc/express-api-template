/* eslint-disable linebreak-style */
import express from 'express';

import {
  indexPage, aboutPage, messagePage, addMessage
} from '../controllers';
import { modifyMessage, performAsyncAction } from '../middleware';

const indexRouter = express.Router();

indexRouter.get('/', indexPage);

indexRouter.get('/about', aboutPage);

indexRouter.get('/messages', messagePage);

indexRouter.post('/messages', modifyMessage, performAsyncAction, addMessage);

export default indexRouter;
