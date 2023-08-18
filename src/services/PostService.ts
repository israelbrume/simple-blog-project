import { Sequelize } from 'sequelize-typescript';
import Post from '../models/Post';

interface PostAttributes {
  UserId: number;
  title: string;
  content: string;
}

const createPost = async (data: PostAttributes) => {
  try {
    await Post.create({...data});

    return 'Post created successfully';
  } catch (error: any) {
    console.error('Post creation failed:', error.message);
    throw error;
  }
};

const getPostsWithUserId = async (userId: number) => {
  try {
    const posts = await Post.findAll({ where: { userId } });
    return posts;
  } catch (error: any) {
    console.error('Error fetching posts:', error.message);
    throw error;
  }
};

const getAllPosts = async () => {
  try {
    const posts = await Post.findAll();
    return posts;
  } catch (error: any) {
    console.error('Error fetching posts:', error.message);
    throw error;
  }
};

const updatePost = async (postId: number, data: Partial<PostAttributes>) => {
  try {
    await Post.update(data, { where: { id: postId } });

    return 'Post updated successfully';
  } catch (error: any) {
    console.error('Post update failed:', error.message);
    throw error;
  }
};

const removePost = async (postId: number) => {
  try {
    await Post.destroy({ where: { id: postId } });

    return 'Post deleted successfully';
  } catch (error: any) {
    console.error('Post deletion failed:', error.message);
    throw error;
  }
};

export { createPost, getPostsWithUserId, getAllPosts, updatePost, removePost };
