import PostService from "../services/post";

const getPosts = async (req) => {
  const { authorId } = req.params;
  const postService = new PostService();

  // Checking if return all the post only for a specific user
  if (!authorId) {
    const posts = await postService.getPosts();
    return posts
  } else {
    const posts = await postService.getPostsById(id);
    return posts
  }
}

export {
  getPosts,

}