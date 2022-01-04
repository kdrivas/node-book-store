import { Router } from 'express';
import isAuth from '../middlewars/isAuth';
import { getPosts, createPost, updatePost } from '../controllers/post';

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

  router.post('/', isAuth, async (req, res, next) => {
    try {
      const post = await createPost(req);
      res.status(200).json({ post });
    } catch(e) {
      next(e);
    }
  });

  router.put('/:id', isAuth, async (req, res, next) => {
    try {
      const post = await updatePost(req);
      res.status.json({ post });
    } catch(e) {
      next(e);
    }
  });
};
