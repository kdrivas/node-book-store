import {Router} from 'express';

const router = Router();

export default (app) => {
  app.use('/users', router);

  router.get('/', (req, res) => {
    res.status(200).json({'message': 'hola mundo'});
  });

  router.post('/signin', (req, res) => {

  });

  router.post('/signup', (req, res) => {

  })

  router.post('/logout', (req, res) => {
    
  })
};
