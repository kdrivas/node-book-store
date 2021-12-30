import mongoose from 'mongoose';
import config from '../../config';

export default async () => {
  await mongoose.connect(config.databaseUrl, {
    serverSelectionTimeoutMS: 5000
  })
}