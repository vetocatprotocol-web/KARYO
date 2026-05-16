import express from 'express';
import { asyncHandler } from '../middleware/errorHandler.js';

const router = express.Router();

// Generate badge SVG
router.get('/:projectId', asyncHandler(async (req, res) => {
  const { tier = 'registered' } = req.query;

  const colors = {
    registered: '#4169E1',
    verified: '#32CD32',
    featured: '#FFD700'
  };

  const color = colors[tier] || colors.registered;
  const labels = {
    registered: 'Terdaftar di KARYOGIT',
    verified: 'Terverifikasi KARYOGIT',
    featured: 'Unggulan KARYOGIT'
  };

  const label = labels[tier] || labels.registered;

  const svg = `
    <svg xmlns="http://www.w3.org/2000/svg" xmlns:xlink="http://www.w3.org/1999/xlink" width="200" height="20">
      <linearGradient id="b" x2="0" y2="100%">
        <stop offset="0" stop-color="#bbb" stop-opacity=".1"/>
        <stop offset="1" stop-opacity=".1"/>
      </linearGradient>
      <g>
        <rect rx="3" width="200" height="20" fill="#555"/>
        <rect rx="3" x="130" width="70" height="20" fill="${color}"/>
        <rect rx="3" width="200" height="20" fill="url(#b)"/>
      </g>
      <g fill="#fff" text-anchor="middle" font-family="DejaVu Sans,Verdana,Geneva,sans-serif" font-size="11">
        <text x="65" y="15" fill="#010101" fill-opacity=".3">KARYOGIT</text>
        <text x="65" y="14">KARYOGIT</text>
        <text x="164" y="15" fill="#010101" fill-opacity=".3">${label}</text>
        <text x="164" y="14">${label}</text>
      </g>
    </svg>
  `;

  res.setHeader('Content-Type', 'image/svg+xml');
  res.send(svg);
}));

// Get badge markdown
router.get('/:projectId/markdown', asyncHandler(async (req, res) => {
  const { tier = 'registered' } = req.query;
  const url = `https://api.karyogit.id/badges/${req.params.projectId}?tier=${tier}`;

  const markdown = `[![Made with KARYOGIT](${url})](https://karyogit.id)`;

  res.json({
    markdown,
    html: `<a href="https://karyogit.id"><img src="${url}" alt="Made with KARYOGIT"></a>`
  });
}));

export default router;
