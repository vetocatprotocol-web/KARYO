import express from 'express';
import { asyncHandler } from '../middleware/errorHandler.js';
import { authMiddleware } from '../middleware/auth.js';

const router = express.Router();

// Get all developers
router.get('/', asyncHandler(async (req, res) => {
  const { city, province, skills, limit = 20, offset = 0 } = req.query;

  // TODO: Implement developer fetching from Supabase
  res.json({
    data: [],
    message: 'Developers endpoint - under construction'
  });
}));

// Get developer by username
router.get('/:username', asyncHandler(async (req, res) => {
  // TODO: Implement get developer by username
  res.json({
    data: null,
    message: 'Developer profile endpoint - under construction'
  });
}));

// Update developer profile
router.put('/:developerId', authMiddleware, asyncHandler(async (req, res) => {
  // TODO: Implement developer profile update
  res.json({
    data: null,
    message: 'Developer update endpoint - under construction'
  });
}));

// Get developer statistics
router.get('/:developerId/stats', asyncHandler(async (req, res) => {
  // TODO: Implement developer stats
  res.json({
    data: null,
    message: 'Developer stats endpoint - under construction'
  });
}));

export default router;
