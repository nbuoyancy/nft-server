import { Request, Response, NextFunction } from 'express';

const authMiddleware = (req: Request, res: Response, next: NextFunction) => {
  const authHeader = req.headers.authorization;

  if (authHeader && authHeader === `Bearer ${process.env.AUTH_TOKEN}`) {
    next();
  } else {
    res.status(401).json({ message: 'Unauthorized' });
  }
};

export default authMiddleware;
