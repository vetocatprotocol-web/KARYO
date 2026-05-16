-- Create tables for KARYOGIT platform
-- Run this migration with: npx supabase migration new [migration-name]

-- Enable UUID extension
CREATE EXTENSION IF NOT EXISTS "uuid-ossp";
CREATE EXTENSION IF NOT EXISTS "pg_trgm"; -- For full-text search

-- Table: developers
CREATE TABLE developers (
  id UUID PRIMARY KEY DEFAULT gen_random_uuid(),
  name TEXT NOT NULL,
  username TEXT UNIQUE NOT NULL,
  email TEXT,
  avatar_url TEXT,
  bio TEXT,
  city TEXT,
  province TEXT,
  github_url TEXT,
  website_url TEXT,
  skills TEXT[],
  is_open_collab BOOLEAN DEFAULT false,
  is_open_hire BOOLEAN DEFAULT false,
  github_id TEXT UNIQUE,
  total_projects INT DEFAULT 0,
  total_downloads INT DEFAULT 0,
  created_at TIMESTAMP DEFAULT NOW(),
  updated_at TIMESTAMP DEFAULT NOW()
);

-- Table: projects
CREATE TABLE projects (
  id UUID PRIMARY KEY DEFAULT gen_random_uuid(),
  name TEXT NOT NULL,
  slug TEXT UNIQUE NOT NULL,
  description TEXT,
  long_description TEXT,
  tags TEXT[],
  category TEXT,
  repo_url TEXT,
  demo_url TEXT,
  download_url TEXT,
  thumbnail_url TEXT,
  screenshots TEXT[],
  author_id UUID REFERENCES developers(id) ON DELETE CASCADE,
  license TEXT DEFAULT 'MIT',
  language TEXT,
  version TEXT,
  stars INT DEFAULT 0,
  downloads INT DEFAULT 0,
  forks INT DEFAULT 0,
  status TEXT DEFAULT 'pending',
  is_verified BOOLEAN DEFAULT false,
  badge_tier TEXT DEFAULT 'registered',
  created_at TIMESTAMP DEFAULT NOW(),
  updated_at TIMESTAMP DEFAULT NOW(),
  last_synced_at TIMESTAMP
);

-- Table: releases
CREATE TABLE releases (
  id UUID PRIMARY KEY DEFAULT gen_random_uuid(),
  project_id UUID REFERENCES projects(id) ON DELETE CASCADE,
  version TEXT NOT NULL,
  release_notes TEXT,
  file_url TEXT NOT NULL,
  file_size BIGINT,
  file_type TEXT,
  downloads INT DEFAULT 0,
  is_latest BOOLEAN DEFAULT false,
  created_at TIMESTAMP DEFAULT NOW()
);

-- Table: blog_posts
CREATE TABLE blog_posts (
  id UUID PRIMARY KEY DEFAULT gen_random_uuid(),
  title TEXT NOT NULL,
  slug TEXT UNIQUE NOT NULL,
  content TEXT,
  excerpt TEXT,
  author_id UUID REFERENCES developers(id) ON DELETE CASCADE,
  tags TEXT[],
  upvotes INT DEFAULT 0,
  is_published BOOLEAN DEFAULT false,
  is_featured BOOLEAN DEFAULT false,
  created_at TIMESTAMP DEFAULT NOW(),
  updated_at TIMESTAMP DEFAULT NOW()
);

-- Table: follows
CREATE TABLE follows (
  follower_id UUID REFERENCES developers(id) ON DELETE CASCADE,
  following_id UUID REFERENCES developers(id) ON DELETE CASCADE,
  created_at TIMESTAMP DEFAULT NOW(),
  PRIMARY KEY (follower_id, following_id)
);

-- Table: project_stars
CREATE TABLE project_stars (
  developer_id UUID REFERENCES developers(id) ON DELETE CASCADE,
  project_id UUID REFERENCES projects(id) ON DELETE CASCADE,
  created_at TIMESTAMP DEFAULT NOW(),
  PRIMARY KEY (developer_id, project_id)
);

-- Table: notifications
CREATE TABLE notifications (
  id UUID PRIMARY KEY DEFAULT gen_random_uuid(),
  user_id UUID REFERENCES developers(id) ON DELETE CASCADE,
  type TEXT NOT NULL,
  title TEXT,
  message TEXT,
  related_project_id UUID REFERENCES projects(id) ON DELETE SET NULL,
  is_read BOOLEAN DEFAULT false,
  created_at TIMESTAMP DEFAULT NOW()
);

-- Create indexes for better query performance
CREATE INDEX idx_projects_author ON projects(author_id);
CREATE INDEX idx_projects_status ON projects(status);
CREATE INDEX idx_projects_tags ON projects USING GIN(tags);
CREATE INDEX idx_projects_slug ON projects(slug);
CREATE INDEX idx_releases_project ON releases(project_id);
CREATE INDEX idx_blog_posts_author ON blog_posts(author_id);
CREATE INDEX idx_blog_posts_slug ON blog_posts(slug);
CREATE INDEX idx_follows_follower ON follows(follower_id);
CREATE INDEX idx_follows_following ON follows(following_id);
CREATE INDEX idx_project_stars_developer ON project_stars(developer_id);
CREATE INDEX idx_project_stars_project ON project_stars(project_id);
CREATE INDEX idx_notifications_user ON notifications(user_id);

-- Enable full-text search
CREATE INDEX idx_projects_search ON projects USING GIN(
  to_tsvector('indonesian', name || ' ' || description)
);

-- Create updated_at trigger function
CREATE OR REPLACE FUNCTION update_updated_at_column()
RETURNS TRIGGER AS $$
BEGIN
  NEW.updated_at = NOW();
  RETURN NEW;
END;
$$ LANGUAGE plpgsql;

-- Apply updated_at trigger
CREATE TRIGGER update_projects_updated_at
BEFORE UPDATE ON projects
FOR EACH ROW
EXECUTE FUNCTION update_updated_at_column();

CREATE TRIGGER update_blog_posts_updated_at
BEFORE UPDATE ON blog_posts
FOR EACH ROW
EXECUTE FUNCTION update_updated_at_column();

CREATE TRIGGER update_developers_updated_at
BEFORE UPDATE ON developers
FOR EACH ROW
EXECUTE FUNCTION update_updated_at_column();
