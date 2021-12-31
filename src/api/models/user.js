import mongoose from 'mongoose';

const userSchema = mongoose.Schema({
  username: String,
  password: String,
  email: String
});
const userModel = mongoose.model('Users', userSchema);

export default userModel;