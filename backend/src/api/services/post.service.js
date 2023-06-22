const { Post } = require('../../database/models');

const createPost = async (post) => {
  const newPost = await Post.create(post);
  return newPost;
};

const getAllPosts = async () => {
  const posts = await Post.findAll();
  return posts;
};

const getPost = async (id, userId) => {
  const post = await Post.findOne({ where: { id, userId } });
  return post;
};

const getPostById = async (id) => {
  const post = await Post.findByPk(id);
  return post;
};

const updatePost = async ({ id, title, content, updated }) => {
  const post = await Post.update({ title, content, updated }, { where: { id } });
  return post;
};

const deletePost = async (id) => {  
  await Post.destroy({ where: { id } });
};

module.exports = {
  getPost,
  createPost,
  getAllPosts,
  getPostById,
  updatePost,
  deletePost,
};