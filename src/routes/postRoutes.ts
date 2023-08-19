import express from 'express';
import { authMiddleware } from '../middleware/auth';
import { newPost, editPost, deletePost, getAll, getPostsByUserId } from '../controllers/PostController';

const postRouter = express.Router();
/**
 * @swagger
 * components:
 *   schemas:
 *     Post:
 *       type: object
 *       required:
 *         - title
 *         - content
 *         - UserId
 *       properties:
 *         id:
 *           type: string
 *           description: The auto-generated id of the Post
 *         title:
 *           type: string
 *           description: The title of the Post
 *         content:
 *           type: string
 *           description: The Post content
 *         UserId:
 *           type: integer
 *           description: ID of the user who made the Post
 *         createdAt:
 *           type: string
 *           format: date
 *           description: The date the post was added
 *     
 */

/**
 * @swagger
 * /posts/create:
 *   post:
 *     summary: Create a new post
 *     tags: [Posts]
 *     requestBody:
 *       required: true
 *       content:
 *         application/json:
 *           schema:
 *             type: object
 *             properties:
 *               userId:
 *                 type: integer
 *                 description: ID of the user creating the post
 *               title:
 *                 type: string
 *                 description: Title of the post
 *               content:
 *                 type: string
 *                 description: Content of the post
 *     responses:
 *       201:
 *         description: Post created successfully
 *       400:
 *         description: Validation error or bad request
 *       500:
 *         description: Server error
 */
postRouter.post('/create', authMiddleware, newPost);

/**
 * @swagger
 * /posts:
 *   get:
 *     summary: Get all posts
 *     tags: [Posts]
 *     responses:
 *       200:
 *         description: Posts fetched successfully
 *       500:
 *         description: Server error
 */
postRouter.get('/', getAll);

/**
 * @swagger
 * /posts:
 *   get:
 *     summary: Get posts for a user
 *     tags: [Posts]
 *     responses:
 *       200:
 *         description: Posts fetched successfully
 *       500:
 *         description: Server error
 */
postRouter.get('/:userId', getPostsByUserId);

/**
 * @swagger
 * /posts/{id}:
 *   put:
 *     summary: Update a post
 *     tags: [Posts]
 *     parameters:
 *       - in: path
 *         name: id
 *         required: true
 *         schema:
 *           type: integer
 *         description: ID of the post to update
 *     requestBody:
 *       required: true
 *       content:
 *         application/json:
 *           schema:
 *             type: object
 *             properties:
 *               userId:
 *                 type: integer
 *                 description: ID of the user updating the post
 *               title:
 *                 type: string
 *                 description: Updated title of the post
 *               content:
 *                 type: string
 *                 description: Updated content of the post
 *     responses:
 *       200:
 *         description: Post updated successfully
 *       400:
 *         description: Validation error or bad request
 *       500:
 *         description: Server error
 */
postRouter.put('/:id', authMiddleware, editPost);

/**
 * @swagger
 * /posts/{id}:
 *   delete:
 *     summary: Delete a post
 *     tags: [Posts]
 *     parameters:
 *       - in: path
 *         name: id
 *         required: true
 *         schema:
 *           type: integer
 *         description: ID of the post to delete
 *     responses:
 *       200:
 *         description: Post deleted successfully
 *       500:
 *         description: Server error
 */
postRouter.delete('/:postId', authMiddleware, deletePost);

export default postRouter;
