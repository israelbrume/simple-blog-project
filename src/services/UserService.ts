import { Connection } from 'mysql2/promise';
import bcrypt from 'bcrypt';
import { Schema, ValidationResult } from '@hapi/joi';

interface User {
  id: number;
  email: string;
  password: string;
}

const registerUser = async (connection: Connection, data: User) => {
  try {
    const { email, password } = data;
    const hashedPassword = await bcrypt.hash(password, 10); // Using saltRounds = 10

    await connection.query('INSERT INTO users (email, password) VALUES (?, ?)', [
      email,
      hashedPassword,
    ]);

    return 'User registered successfully';
  } catch (error: any) {
    console.error('User registration failed:', error.message);
    throw error;
  }
};

const loginUser = async (connection: Connection, data: User) => {
  try {
    const { email, password } = data;
    const [rows] = await connection.query('SELECT * FROM users WHERE email = ?', [email]);
    
    if (rows) {
      throw new Error('User not found');
    }

    const user = rows[0] as User;
    const passwordMatch = await bcrypt.compare(password, user.password);

    if (!passwordMatch) {
      throw new Error('Invalid password');
    }

    return 'User logged in successfully';
  } catch (error: any) {
    console.error('Login failed:', error.message);
    throw error;
  }
};

export { registerUser, loginUser };
