import { Router } from 'express';
import isAuth from '../middlewars/isAuth';
import { getPosts } from '../controllers/post';

const router = Router();

export default (app) =>{
  app.use('/posts', router);

  router.get('/', isAuth, async (req, res, next) => {
    try {
      const posts = await getPosts(req);
      res.status(200).json({ posts });
    } catch(e) {
      next(e);
    }
  });

  router.get('/:id', isAuth, async (req, res, next) => {
    try {
      const posts = await getPosts(req);
      res.status(200).json({'message': 'hola mundo'});
    } catch(e) {
      next(e);
    }
  });
};
