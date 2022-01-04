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

const createPost = async (req) => {
  const { title, body } = req.body;
  const postService = new PostService();
  const post = await postService.create(title, body);
  return post;
}

const updatePost = async (req) => {
  const { id, title, body } = req.params;
  const postService = new PostService();
  const postsByUser = postService.getPostsByEmail(req.user.email);
  if (postsByUser.includes(id)) {
    const updatedPost = postService.update(id, title, body);
    console.log(updatedPost);
    return 1
  }
  else {
    throw new Error('User not authorized to edit post')
  }
}

export {
  getPosts,
  createPost,
  updatePost
}