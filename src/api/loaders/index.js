import expressLoader from "./express";
import mongoLoader from './mongo';

export default async (app) => {
  await mongoLoader();

  expressLoader(app);
}