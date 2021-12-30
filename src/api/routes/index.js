import {Router} from 'express';
import posts from './posts';
import users from './users';

const app = Router();

export default () => {
  posts(app);
  users(app);

  return app;
};
