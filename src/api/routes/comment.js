import { Router } from "express";
import isAuth from "../middlewars/isAuth";

const router = Router();

export default (app) => {
  app.use('/comments', router);

  app.get('/', (req, res, next) => {
    return res.send(200);
  })

  app.post('/:postId', isAuth, async (req, res, next) => {
    try {
      const comment = await createComment(req)
      res.status(200).json({ comment })
    } catch (e) {
      next(e)
    }
  })
}
