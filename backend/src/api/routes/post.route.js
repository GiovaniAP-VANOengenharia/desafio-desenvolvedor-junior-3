const { Router } = require('express');
const postController = require('../controllers/post.controller');
const { validateToken } = require('../middleware/login.validation');
const validatePost = require('../middleware/post.validation');

const postRouter = Router();

postRouter.post('/create', validateToken, validatePost, postController.createPost);

postRouter.get('/all', validateToken, postController.getAllPosts);
postRouter.get('/:id', validateToken, postController.getPostById);

postRouter.put('/update/:id', validateToken, validatePost, postController.updatePost);

postRouter.delete('/delete/:id', validateToken, postController.deletePost);

module.exports = {
  postRouter,
};
