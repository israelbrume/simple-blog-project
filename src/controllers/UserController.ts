import { Request, Response } from 'express';
import Joi, { Schema } from '@hapi/joi';
import { registerUser, loginUser } from '../services/UserService';
import User from '../models/User';
import jwt from 'jsonwebtoken';

const userValidationSchema: Schema = Joi.object({
  fullname: Joi.string().required(),
  email: Joi.string().email().required(),
  password: Joi.string().min(6).required(),
});

const userLoginValidationSchema: Schema = Joi.object({
  email: Joi.string().email().required(),
  password: Joi.string().min(6).required(),
});

export const register = async (req: Request, res: Response) => {
  try {
    const { error } = userValidationSchema.validate(req.body);
    if (error) {
      return res.status(400).json({ success: false, message: 'Validation error', error: error.details });
    }

    await registerUser(req.body);

    res.status(201).json({ success: true, message: 'User registered successfully' });
  } catch (error: any) {
    res.status(500).json({ success: false, message: 'User registration failed', error });
  }
};

export const login = async (req: Request, res: Response) => {
  try {
    const { error } = userLoginValidationSchema.validate(req.body);
    if (error) {
      return res.status(400).json({ success: false, message: 'Validation error', error });
    }

    const user = await loginUser(req.body);

    const token = jwt.sign({ UserId: user.id }, 'your-secret-key', { expiresIn: '1h' });

    res.status(200).json({ success: true, message: 'User logged in successfully', token });
  } catch (error: any) {
    res.status(401).json({ success: false, message: 'Login failed', error: error.message });
  }
};
