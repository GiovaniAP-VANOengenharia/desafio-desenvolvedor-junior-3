const postService = require('../services/post.service');
const userService = require('../services/user.service');

const response = (post, userName, status, method) => ({
  method,
  status,
  message: 'Post created',
  result: {
    id: post.id,
    title: post.title,
    content: post.content,
    published: post.published,
    updated: post.updated,
    userId: post.userId,
    userName,
  },
});

const createPost = async (req, res) => {
  const { title, content, userId } = req.body;

  const date = new Date();

  const newPost = await postService.createPost({
    title, content, userId, updated: date, published: date
  });

  const user = await userService.getUserById(newPost.userId);

  return res.status(201).json(response(newPost, user.name, 201, 'POST'));
};

const getAllPosts = async (_req, res) => {
  const posts = await postService.getAllPosts();

  const postList = [];

  for (let i = 0; i < posts.length; i += 1) {
    const user = await userService.getUserById(posts[i].userId);
    postList.push(response(posts[i], user.name, 200, 'GET'));
  }

  return res.status(200).json(postList);
};

const getPostById = async (req, res) => {
  const { id } = req.params;

  const hasPost = await postService.getPostById(id);
  
  if (!hasPost) {
    return res.status(404).json({
      hasToken: false,
      method: 'POST',
      status: 404,
      message: 'Post não encontrado!',
    });
  }
  
  const user = await userService.getUserById(hasPost.userId);

  return res.status(200).json(response(hasPost, user.name, 200, 'GET'));
};

const updatePost = async (req, res) => {
  const { id } = req.params;
  const { title, content, userId } = req.body;

  let hasPost = await postService.getPostById(id);

  if (!hasPost) {
    return res.status(404).json({
      hasToken: false,
      method: 'POST',
      status: 404,
      message: 'Post não encontrado!',
    });
  }

  const updatedPost = await postService.updatePost({ id, title, content });
  
  const user = await userService.getUserById(userId);

  return res.status(200).json(response(updatedPost, user.name, 200, 'POST'));
};

const deletePost = async (req, res) => {
  const { id } = req.params;

  let hasPost = await postService.getPostById(id);

  if (!hasPost) {
    return res.status(404).json({
      hasToken: false,
      method: 'POST',
      status: 404,
      message: 'Post não encontrado!',
    });
  }
  
  await postService.deletePost(id);

  return res.status(204).json();
};


module.exports = {
  createPost,
  getAllPosts,
  getPostById,
  updatePost,
  deletePost,
};