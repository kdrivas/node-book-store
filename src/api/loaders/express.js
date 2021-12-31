import express from 'express';
import config from '../../config';
import routes from '../routes';

export default (app) => {
  app.use(express.json());
  app.use(express.urlencoded({extended: true}));

  app.get('/status', (req, res) => {
    res.status(200).end();
  })

  app.use(config.apiPath, routes());

  app.use((err, req, res, next) => {
    res.status(err.status || 500);
    console.log(err)
    res.json({'message': err.message});
  });
};
