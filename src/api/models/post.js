import mongoose from 'mongoose';

const postSchema = mongoose.Schema({
  title: String,
  body: String,
  user: {type: mongoose.Schema.Types.ObjectId, ref: 'User'},
  comments: [{type: mongoose.Schema.Types.ObjectId, ref: 'Comment'}],
});
const postModel = mongoose.model('Post', postSchema);

export default postModel;
