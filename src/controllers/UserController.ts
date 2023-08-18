import { Request, Response } from 'express';
import Joi, { Schema } from '@hapi/joi';
import dbConnection from '../db';
import { createUserTable } from '../models/User';
import { registerUser, loginUser } from '../services/UserService';

const userValidationSchema: Schema = Joi.object({
  email: Joi.string().email().required(),
  password: Joi.string().min(6).required(),
});

export const register = async (req: Request, res: Response) => {
  try {
    const { error } = userValidationSchema.validate(req.body);
    if (error) {
      return res.status(400).json({ success: false, message: 'Validation error', error: error.details });
    }

    const connection = await dbConnection();
    await createUserTable(connection);
    await registerUser(connection, req.body);

    res.status(201).json({ success: true, message: 'User registered successfully' });
  } catch (error: any) {
    res.status(500).json({ success: false, message: 'User registration failed', error: error.message });
  }
};

export const login = async (req: Request, res: Response) => {
  try {
    const { error } = userValidationSchema.validate(req.body);
    if (error) {
      return res.status(400).json({ success: false, message: 'Validation error', error });
    }

    const connection = await dbConnection();
    const result = await loginUser(connection, req.body);

    res.status(200).json({ success: true, message: result });
  } catch (error: any) {
    res.status(401).json({ success: false, message: 'Login failed', error: error.message });
  }
};
