import express from 'express';
import { asyncHandler } from '../middleware/errorHandler.js';
import { optionalAuth } from '../middleware/auth.js';
import * as supabaseService from '../services/supabase.js';

const router = express.Router();

// Get all projects with filters
router.get('/', optionalAuth, asyncHandler(async (req, res) => {
  const { status = 'active', tags, search, category, limit = 20, offset = 0 } = req.query;

  const projects = await supabaseService.getProjects({
    status,
    tags: tags ? tags.split(',') : undefined,
    search,
    category,
    limit: parseInt(limit),
    offset: parseInt(offset)
  });

  res.json({
    data: projects,
    total: projects.length,
    limit,
    offset
  });
}));

// Get trending projects
router.get('/trending', asyncHandler(async (req, res) => {
  const projects = await supabaseService.getProjects({
    status: 'active',
    limit: 10
  });

  // Sort by downloads and stars
  const trending = projects.sort((a, b) => {
    const scoreA = (a.downloads || 0) + (a.stars || 0) * 2;
    const scoreB = (b.downloads || 0) + (b.stars || 0) * 2;
    return scoreB - scoreA;
  });

  res.json({ data: trending });
}));

// Get project by slug
router.get('/:slug', asyncHandler(async (req, res) => {
  const project = await supabaseService.getProjectBySlug(req.params.slug);

  if (!project) {
    return res.status(404).json({ error: 'Project not found' });
  }

  res.json({ data: project });
}));

// Create new project
router.post('/', asyncHandler(async (req, res) => {
  if (!req.user) {
    return res.status(401).json({ error: 'Unauthorized' });
  }

  const { name, slug, description, category, tags, repo_url, demo_url } = req.body;

  if (!name || !slug || !description) {
    return res.status(400).json({ error: 'Missing required fields' });
  }

  const project = await supabaseService.createProject(
    {
      name,
      slug,
      description,
      category,
      tags,
      repo_url,
      demo_url
    },
    req.user.id
  );

  res.status(201).json({ data: project });
}));

// Update project
router.put('/:projectId', asyncHandler(async (req, res) => {
  if (!req.user) {
    return res.status(401).json({ error: 'Unauthorized' });
  }

  const project = await supabaseService.getProjectById(req.params.projectId);

  if (!project) {
    return res.status(404).json({ error: 'Project not found' });
  }

  if (project.author_id !== req.user.id) {
    return res.status(403).json({ error: 'Forbidden' });
  }

  const updated = await supabaseService.updateProject(req.params.projectId, req.body);

  res.json({ data: updated });
}));

// Download project file
router.post('/:projectId/download', asyncHandler(async (req, res) => {
  const project = await supabaseService.getProjectById(req.params.projectId);

  if (!project) {
    return res.status(404).json({ error: 'Project not found' });
  }

  // Increment download counter
  await supabaseService.incrementProjectDownloads(req.params.projectId);

  // Redirect to actual file URL
  res.json({
    download_url: project.download_url,
    file_name: project.name + '.zip'
  });
}));

export default router;
