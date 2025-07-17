import jwt from 'jsonwebtoken';
import User from '../models/User.js';

// Middleware to protect routes (require login)
export const protect = async (req, res, next) => {
  let token = req.headers.authorization?.split(' ')[1];

  if (!token) {
    return res.status(401).json({ message: 'Not authorized, no token' });
  }

  try {
    const decoded = jwt.verify(token, process.env.JWT_SECRET);
    req.user = await User.findById(decoded.id).select('-password');
    next(); // move to next middleware/route
  } catch (error) {
    console.error('Token verification failed:', error);
    res.status(401).json({ message: 'Not authorized, token failed' });
  }
};

// Middleware to check admin role
export const admin = (req, res, next) => {
  if (req.user && req.user.role === 'admin') {
    next(); // allow access
  } else {
    res.status(403).json({ message: 'Not authorized as an admin' });
  }
};
