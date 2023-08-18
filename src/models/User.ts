import { Model, DataTypes, Sequelize } from 'sequelize';
import sequelize from '../db';

class User extends Model {
  id!: number;
  email!: string;
  fullname!: string;
  password!: string;
}

User.init(
  {
    fullname: {
      type: DataTypes.STRING,
      allowNull: false,
    },
    email: {
      type: DataTypes.STRING,
      allowNull: false,
    },
    password: {
      type: DataTypes.STRING,
      allowNull: false,
    },
  },
  {
    sequelize,
    modelName: 'User',
    timestamps: false,
  }
);

export default User;

