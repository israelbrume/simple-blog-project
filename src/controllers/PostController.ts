import { Request, Response } from 'express';
import Joi from '@hapi/joi';
import { createPost, getPostsWithUserId, getAllPosts, updatePost, removePost } from '../services/PostService';

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

    await createPost({...req.body, UserId: req.UserId,});

    res.status(201).json({ success: true, message: 'Post created successfully' });
  } catch (error: any) {
    res.status(500).json({ success: false, message: 'Post creation failed', error: error.message });
  }
};

export const getPostsByUserId = async (req: Request, res: Response) => {
  try {
    const userId = parseInt(req.params.userId);
    const posts = await getPostsWithUserId(userId);
    res.status(200).json({ success: true, message: 'Posts fetched successfully', data: posts });
  } catch (error: any) {
    res.status(500).json({ success: false, message: 'Error fetching posts', error: error.message });
  }
};

export const getAll = async (req: Request, res: Response) => {
  try {
    const posts = await getAllPosts();

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

    await updatePost(postId, req.body);

    res.status(200).json({ success: true, message: 'Post updated successfully' });
  } catch (error: any) {
    res.status(500).json({ success: false, message: 'Post update failed', error: error.message });
  }
};

export const deletePost = async (req: Request, res: Response) => {
  try {
    const postId = parseInt(req.params.postId);
    await removePost(postId);

    res.status(200).json({ success: true, message: 'Post deleted successfully' });
  } catch (error: any) {
    res.status(500).json({ success: false, message: 'Post deletion failed', error: error.message });
  }
};
