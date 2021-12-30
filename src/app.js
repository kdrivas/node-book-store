import express from 'express';
import config from './config';
import loaders from './api/loaders';

const app = express();

await loaders(app);

app.listen(config.port, () => {
  console.log(`Listening at port ${config.port}`);
});
