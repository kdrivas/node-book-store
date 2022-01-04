import postModel from "../models/post";

export default class PostService {
  constructor() {

  }

  async getPosts() {
    const posts = await postModel.find({});
    return posts
  }

  async getPostsById(id) {
    const posts = await postModel.find({ id });
    return posts
  }
}