import bcrypt from 'bcrypt';
import User from '../models/User';
import { Schema } from '@hapi/joi';

interface UserAttributes {
  fullname: string;
  email: string;
  password: string;
}

const registerUser = async (data: UserAttributes) => {
  try {
    const { fullname, email, password } = data;
    const hashedPassword = await bcrypt.hash(password, 10);

    await User.create({
      fullname,
      email,
      password: hashedPassword,
    });

    return 'User registered successfully';
  } catch (error: any) {
    console.error('User registration failed:', error.message);
    throw error;
  }
};

const loginUser = async (data: UserAttributes) => {
  try {
    const { email, password } = data;
    const user = await User.findOne({ where: { email } });

    if (!user) {
      throw new Error('User not found');
    }

    const passwordMatch = await bcrypt.compare(password, user.password);

    if (!passwordMatch) {
      throw new Error('Invalid password');
    }

    return user;
  } catch (error: any) {
    console.error('Login failed:', error.message);
    throw error;
  }
};

export { registerUser, loginUser };
