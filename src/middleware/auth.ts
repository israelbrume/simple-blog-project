import { Request, Response, NextFunction } from 'express';
import jwt from 'jsonwebtoken';

interface DecodedToken {
  UserId: number;
}

declare global {
  namespace Express {
    interface Request {
      UserId?: number;
    }
  }
}

export const authMiddleware = (req: Request, res: Response, next: NextFunction) => {
  const token = req.header('Authorization')?.replace('Bearer ', '');

  if (!token) {
    return res.status(401).json({ success: false, message: 'Authorization token missing' });
  }

  try {
    const decoded = jwt.verify(token, 'your-secret-key') as DecodedToken;
    req.UserId = decoded.UserId;
    next();
  } catch (error) {
    res.status(401).json({ success: false, message: 'Invalid token' });
  }
};
