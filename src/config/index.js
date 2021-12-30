import dotenv from 'dotenv';

dotenv.config();
process.env.NODE_ENV = process.env.NODE_ENV || 'development';

export default {
  port: process.env.PORT || 3000,
  databaseUrl: process.env.MONGODB_URI,
};
