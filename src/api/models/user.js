import mongoose from 'mongoose';

const userSchema = mongoose.Schema({
  username: String,
  password: String,
  email: String,
  posts: [{type: mongoose.Schema.Types.ObjectId, ref: 'Post'}],
  comments: [{type: mongoose.Schema.Types.ObjectId, ref: 'Comment'}]
});
const userModel = mongoose.model('User', userSchema);

export default userModel;
