const express2 = require('express');
const postRouter = express2.Router();
const { newPost, editPost, deletePost, getAll, getPostsByUserId } = require('../controllers/PostController');

// Create a new post (requires authentication)
postRouter.post('/create', newPost);

// Get posts
postRouter.get('/', getAll);

// Update a post (requires authentication and ownership)
postRouter.put('/:id', editPost);

// Delete a post (requires authentication and ownership)
postRouter.delete('/:id', deletePost);

module.exports = postRouter;
