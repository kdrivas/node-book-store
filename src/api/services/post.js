import postModel from "../models/post";
import userModel from "../models/user";

export default class PostService {
  constructor() {

  }

  async getPosts() {
    const posts = await postModel.find({});
    return posts
  }

  async getPostsByEmail(username) {
    const posts = await userModel.find({ username }).posts;
    const user = await userModel.find({ username })
    console.log('mi user0', user)
    return posts
  }

  async create(username, title, body) {
    const user = await userModel.findOne({ username })
    const post = await postModel.create({ title, body, user: user._id })
    const useAl = await userModel.findOne({username}).populate([{path: 'posts', model: 'Post'}])
    console.log(useAl)
    return post
  }

  async update(id, title, body) {
    const post = await postModel.updateOne({ id }, {$set: {title, body}});
    return post;
  }

  async deletePost(id) {
    await postModel.deleteOne({ id });
  }
}