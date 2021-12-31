import { Router } from 'express';
import { signIn, signUp } from '../controllers/auth'

const router = Router();

export default (app) => {
  app.use('/users', router);

  router.get('/', (req, res) => {
    res.status(200).json({'message': 'hola mundo'});
  });

  router.post('/signup', async (req, res, next) => {
    try {
      const token = await signUp(req.body);
      res.status(200).json({ token });
    } catch (e) {
      console.log(`My custom Error: ${e}`);
      next(e);
    }
  });

  router.post('/signin', async (req, res, next) => {
    try {
      const token = await signIn(req.body);
      res.status(200).json({ token })
    } catch (e) {
      next(e)
    }
  })

  router.post('/logout', async (req, res) => {

  })
};
