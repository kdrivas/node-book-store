import mongoose from 'mongoose';

const commentSchema = mongoose.Schema({
  description: String,
  post: {type: mongoose.Schema.Types.ObjectId, ref: 'Post'}
});
const commentModel = mongoose.model('Comment', commentSchema);

export default commentModel;
