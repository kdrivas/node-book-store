import { Router } from 'express';
import isAuth from '../middlewars/isAuth';
import { getPosts, createPost, updatePost, deletePost } from '../controllers/post';

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
      //const post = 1;
      res.status(200).json({ post });
    } catch(e) {
      next(e);
    }
  });

  router.delete('/:id', isAuth, async (req, res, next) => {
    try {
      await deletePost(req);
      res.status.json({'message': 'Post deleted'})
    } catch(e) {
      next(e);
    }
  });
};
