// import { Request, Response } from 'express';
// import Joi from '@hapi/joi';
// import dbConnection from '../db';
// import { createPostTable } from '../models/Post';
// import {
//   createPost,
//   getPostsWithUserId,
//   getAllPosts,
//   updatePost,
//   removePost,
// } from '../services/PostService';

// const postValidationSchema: Joi.ObjectSchema = Joi.object({
//   userId: Joi.number().required(),
//   title: Joi.string().required(),
//   content: Joi.string().required(),
// });

// export const create = async (req: Request, res: Response) => {
//   try {
//     const { error } = postValidationSchema.validate(req.body);
    
//     if (error) {
//       return res.status(400).json({ success: false, message: 'Validation error', error });
//     }

//     const connection = await dbConnection();
//     await createPostTable(connection);
//     await createPost(connection, req.body);

//     res.status(201).json({ success: true, message: 'Post created successfully' });
//   } catch (error: any) {
//     res.status(500).json({ success: false, message: 'Post creation failed', error: error.message });
//   }
// };

// export const getPostsByUserId = async (req: Request, res: Response) => {
//   try {
//     const userId = parseInt(req.params.userId);
//     const connection = await dbConnection();
//     const posts = await getPostsWithUserId(connection, userId);

//     res.status(200).json({ success: true, message: 'Posts fetched successfully', data: posts });
//   } catch (error: any) {
//     res.status(500).json({ success: false, message: 'Error fetching posts', error: error.message });
//   }
// };

// export const getAll = async (req: Request, res: Response) => {
//   try {
//     const connection = await dbConnection();
//     const posts = await getAllPosts(connection);

//     res.status(200).json({ success: true, message: 'Posts fetched successfully', data: posts });
//   } catch (error: any) {
//     res.status(500).json({ success: false, message: 'Error fetching posts', error: error.message });
//   }
// };

// export const update = async (req: Request, res: Response) => {
//   try {
//     const postId = parseInt(req.params.postId);
//     const { error } = postValidationSchema.validate(req.body);
//     if (error) {
//       return res.status(400).json({ success: false, message: 'Validation error', error });
//     }

//     const connection = await dbConnection();
//     await updatePost(connection, postId, req.body);

//     res.status(200).json({ success: true, message: 'Post updated successfully' });
//   } catch (error: any) {
//     res.status(500).json({ success: false, message: 'Post update failed', error: error.message });
//   }
// };

// export const remove = async (req: Request, res: Response) => {
//   try {
//     const postId = parseInt(req.params.postId);
//     const connection = await dbConnection();
//     await removePost(connection, postId);

//     res.status(200).json({ success: true, message: 'Post deleted successfully' });
//   } catch (error: any) {
//     res.status(500).json({ success: false, message: 'Post deletion failed', error: error.message });
//   }
// };


import { Request, Response } from 'express';
import Joi from '@hapi/joi';
import dbConnection from '../db';
import { createPostTable } from '../models/Post';
import {
  createPost,
  getPostsWithUserId,
  getAllPosts,
  updatePost,
  removePost,
} from '../services/PostService';

const postValidationSchema: Joi.ObjectSchema = Joi.object({
  title: Joi.string().required(),
  content: Joi.string().required(),
});

export const newPost = async (req: Request, res: Response) => {
  try {
    const { error } = postValidationSchema.validate(req.body);

    if (error) {
      return res.status(400).json({ success: false, message: 'Validation error', error });
    }

    const connection = await dbConnection();
    await createPostTable(connection);
    await createPost(connection, req.body);

    res.status(201).json({ success: true, message: 'Post created successfully' });
  } catch (error: any) {
    res.status(500).json({ success: false, message: 'Post creation failed', error: error.message });
  }
};

export const getPostsByUserId = async (req: Request, res: Response) => {
  try {
    const userId = parseInt(req.params.userId);
    const connection = await dbConnection();
    const posts = await getPostsWithUserId(connection, userId);
    res.status(200).json({ success: true, message: 'Posts fetched successfully', data: posts });
  } catch (error: any) {
    res.status(500).json({ success: false, message: 'Error fetching posts', error: error.message });
  }
};

export const getAll = async (req: Request, res: Response) => {
  try {
    const connection = await dbConnection();
    const posts = await getAllPosts(connection);

    res.status(200).json({ success: true, message: 'Posts fetched successfully', data: posts });
  } catch (error: any) {
    res.status(500).json({ success: false, message: 'Error fetching posts', error: error.message });
  }
};

export const editPost = async (req: Request, res: Response) => {
  try {
    const postId = parseInt(req.params.postId);
    const { error } = postValidationSchema.validate(req.body);
    if (error) {
      return res.status(400).json({ success: false, message: 'Validation error', error });
    }

    const connection = await dbConnection();
    await updatePost(connection, postId, req.body);

    res.status(200).json({ success: true, message: 'Post updated successfully' });
  } catch (error: any) {
    res.status(500).json({ success: false, message: 'Post update failed', error: error.message });
  }
};

export const deletePost = async (req: Request, res: Response) => {
  try {
    const postId = parseInt(req.params.postId);
    const connection = await dbConnection();
    await removePost(connection, postId);

    res.status(200).json({ success: true, message: 'Post deleted successfully' });
  } catch (error: any) {
    res.status(500).json({ success: false, message: 'Post deletion failed', error: error.message });
  }
};
