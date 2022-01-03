import { Router } from 'express';
import isAuth from '../middlewars/isAuth';
import postModel from '../models/post';

const router = Router();

export default (app) =>{
  app.use('/posts', router);

  router.get('/', async (req, res, next) => {
    try {
      const posts = 
      res.status(200).json({'message': 'hola mundo'});
    } catch(e) {
      next(e);
    }
  });
};
