import { Model, DataTypes, Sequelize } from 'sequelize';
import sequelize from '../db';

class Post extends Model {
  id!: number;
  UserId!: number;
  title!: string;
  content!: string;
}

Post.init(
  {
    UserId: {
      type: DataTypes.INTEGER,
      allowNull: false,
    },
    title: {
      type: DataTypes.STRING,
      allowNull: false,
    },
    content: {
      type: DataTypes.TEXT,
      allowNull: false,
    },
  },
  {
    sequelize,
    modelName: 'Post',
    timestamps: false,
  }
);

export default Post;
