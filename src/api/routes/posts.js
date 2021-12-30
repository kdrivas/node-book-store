import {Router} from 'express';

const router = Router();

export default (app) =>{
  app.use('/posts', router);

  router.get('/', (req, res) => {
    res.status(200).json({'message': 'hola mundo'});
  });
};
