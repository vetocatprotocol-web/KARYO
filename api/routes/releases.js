import express from 'express';
import { asyncHandler } from '../middleware/errorHandler.js';
import { authMiddleware } from '../middleware/auth.js';

const router = express.Router();

// Get releases for a project
router.get('/project/:projectId', asyncHandler(async (req, res) => {
  // TODO: Implement get releases by project
  res.json({
    data: [],
    message: 'Releases endpoint - under construction'
  });
}));

// Get latest release
router.get('/project/:projectId/latest', asyncHandler(async (req, res) => {
  // TODO: Implement get latest release
  res.json({
    data: null,
    message: 'Latest release endpoint - under construction'
  });
}));

// Create release
router.post('/', authMiddleware, asyncHandler(async (req, res) => {
  // TODO: Implement create release
  res.status(201).json({
    data: null,
    message: 'Create release endpoint - under construction'
  });
}));

// Download release
router.post('/:releaseId/download', asyncHandler(async (req, res) => {
  // TODO: Implement release download tracking
  res.json({
    message: 'Release download tracked',
    download_url: null
  });
}));

export default router;
