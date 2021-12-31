import {Router} from 'express';
import posts from './posts';
import users from './auth';

const app = Router();

export default () => {
  posts(app);
  users(app);

  return app;
};
