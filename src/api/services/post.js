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
    return posts
  }

  async create(title, body) {
    const post = await postModel.create({title, body});
    return post;
  }

  async update(id, title, body) {
    const post = await postModel.updateOne({ id }, {$set: {title, body}});
    return post;
  }
}