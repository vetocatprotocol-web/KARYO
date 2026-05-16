import { createClient } from '@supabase/supabase-js';

const supabase = createClient(
  process.env.SUPABASE_URL,
  process.env.SUPABASE_SERVICE_ROLE_KEY || process.env.SUPABASE_ANON_KEY
);

export const getProjects = async (filters = {}) => {
  let query = supabase.from('projects').select('*');

  if (filters.status) {
    query = query.eq('status', filters.status);
  }

  if (filters.tags && filters.tags.length > 0) {
    query = query.contains('tags', filters.tags);
  }

  if (filters.search) {
    query = query.ilike('name', `%${filters.search}%`);
  }

  if (filters.category) {
    query = query.eq('category', filters.category);
  }

  if (filters.limit) {
    query = query.limit(filters.limit);
  }

  if (filters.offset) {
    query = query.range(filters.offset, filters.offset + (filters.limit || 10) - 1);
  }

  const { data, error } = await query;
  if (error) throw error;
  return data;
};

export const getProjectBySlug = async (slug) => {
  const { data, error } = await supabase
    .from('projects')
    .select('*, developer:developers(*), releases(*)')
    .eq('slug', slug)
    .single();

  if (error) throw error;
  return data;
};

export const getProjectById = async (id) => {
  const { data, error } = await supabase
    .from('projects')
    .select('*')
    .eq('id', id)
    .single();

  if (error) throw error;
  return data;
};

export const createProject = async (projectData, userId) => {
  const { data, error } = await supabase
    .from('projects')
    .insert([
      {
        ...projectData,
        author_id: userId,
        status: 'pending'
      }
    ])
    .select();

  if (error) throw error;
  return data[0];
};

export const updateProject = async (projectId, updates) => {
  const { data, error } = await supabase
    .from('projects')
    .update(updates)
    .eq('id', projectId)
    .select();

  if (error) throw error;
  return data[0];
};

export const incrementProjectDownloads = async (projectId) => {
  const { data, error } = await supabase.rpc('increment_downloads', {
    project_id: projectId
  });

  if (error) throw error;
  return data;
};
