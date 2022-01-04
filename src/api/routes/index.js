import {Router} from 'express';
import posts from './post';
import users from './auth';
import comments from './comment';

const app = Router();

export default () => {
  users(app);
  posts(app);
  comments(app);

  return app;
};
