import { Connection } from 'mysql2/promise';

interface Post {
  id: number;
  userId: number;
  title: string;
  content: string;
}

const createPost = async (connection: Connection, data: Post) => {
  try {
    const { userId, title, content } = data;

    await connection.query('INSERT INTO posts (userId, title, content) VALUES (?, ?, ?)', [
      userId,
      title,
      content,
    ]);

    return 'Post created successfully';
  } catch (error: any) {
    console.error('Post creation failed:', error.message);
    throw error;
  }
};

const getPostsWithUserId = async (connection: Connection, userId: number) => {
  try {
    const [rows] = await connection.query('SELECT * FROM posts WHERE userId = ?', [userId]);
    return rows as Post[];
  } catch (error: any) {
    console.error('Error fetching posts:', error.message);
    throw error;
  }
};

const getAllPosts = async (connection: Connection) => {
  try {
    const [rows] = await connection.query('SELECT * FROM posts');
    return rows as Post[];
  } catch (error: any) {
    console.error('Error fetching posts:', error.message);
    throw error;
  }
};

const updatePost = async (connection: Connection, postId: number, data: Partial<Post>) => {
  try {
    const { title, content } = data;
    await connection.query('UPDATE posts SET title = ?, content = ? WHERE id = ?', [
      title,
      content,
      postId,
    ]);

    return 'Post updated successfully';
  } catch (error: any) {
    console.error('Post update failed:', error.message);
    throw error;
  }
};

const removePost = async (connection: Connection, postId: number) => {
  try {
    await connection.query('DELETE FROM posts WHERE id = ?', [postId]);
    return 'Post deleted successfully';
  } catch (error: any) {
    console.error('Post deletion failed:', error.message);
    throw error;
  }
};

export { createPost, getPostsWithUserId, getAllPosts, updatePost, removePost };
