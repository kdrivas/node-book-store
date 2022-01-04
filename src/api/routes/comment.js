import { Router } from "express";

const router = Router();

export default (app) => {
  app.use('/comments', router);

  app.get('/', (req, res, next) => {
    return res.send(200);
  })
}
