import commentModel from "../models/comment";

export default class CommentService {
  constructor() {

  }

  async getComments() {
    const comments = await commentModel.find({});
    return comments;
  }
}