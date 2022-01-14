import CommentService from "../services/comment";
import PostService from "../services/post";

const createComment = (req) => {
  const { postId } = req.params
  const postService = new PostService()
  const posts = postService.getPostsByEmail(req.user.email)
  console.log(posts)
  if (posts.includes(postId)) {
    return 0
  }
  return 1
}

export {
  createComment
}