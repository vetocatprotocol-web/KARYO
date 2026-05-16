import { createClient } from '@supabase/supabase-js';
import axios from 'axios';

const supabase = createClient(
  process.env.SUPABASE_URL,
  process.env.SUPABASE_SERVICE_ROLE_KEY
);

const GITHUB_API = 'https://api.github.com';

async function syncGitHubMetadata() {
  try {
    console.log('🔄 Starting GitHub metadata sync...');

    // Get all projects from database
    const { data: projects, error } = await supabase
      .from('projects')
      .select('id, repo_url, slug, author_id');

    if (error) {
      console.error('❌ Error fetching projects:', error);
      return;
    }

    console.log(`📊 Found ${projects.length} projects to sync`);

    let synced = 0;
    for (const project of projects) {
      if (!project.repo_url) continue;

      try {
        // Extract owner and repo from GitHub URL
        const match = project.repo_url.match(/github\.com\/(.+?)\/(.+?)(?:\.git)?$/);
        if (!match) continue;

        const [, owner, repo] = match;

        // Fetch GitHub repo data
        const response = await axios.get(`${GITHUB_API}/repos/${owner}/${repo}`, {
          headers: {
            Authorization: `Bearer ${process.env.GITHUB_TOKEN}`,
            Accept: 'application/vnd.github.v3+json'
          }
        });

        const { stargazers_count, forks_count, language, license } = response.data;

        // Update project with GitHub data
        const { error: updateError } = await supabase
          .from('projects')
          .update({
            stars: stargazers_count,
            forks: forks_count,
            language,
            license: license?.name || project.license,
            last_synced_at: new Date().toISOString()
          })
          .eq('id', project.id);

        if (!updateError) {
          synced++;
          console.log(`✓ Synced: ${project.slug}`);
        }

        // Rate limiting
        await new Promise(resolve => setTimeout(resolve, 500));
      } catch (error) {
        console.log(`⚠️ Error syncing ${project.slug}:`, error.message);
      }
    }

    console.log(`✅ Sync complete! Updated ${synced} projects`);
  } catch (error) {
    console.error('❌ Sync error:', error);
  }
}

// Run sync
syncGitHubMetadata();
