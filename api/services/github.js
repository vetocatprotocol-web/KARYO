import axios from 'axios';

const GITHUB_API = 'https://api.github.com';

export const getGitHubUserData = async (username, token) => {
  try {
    const response = await axios.get(`${GITHUB_API}/users/${username}`, {
      headers: {
        Authorization: `Bearer ${token}`,
        Accept: 'application/vnd.github.v3+json'
      }
    });

    return {
      id: response.data.id,
      username: response.data.login,
      name: response.data.name,
      avatar_url: response.data.avatar_url,
      bio: response.data.bio,
      url: response.data.html_url,
      public_repos: response.data.public_repos,
      followers: response.data.followers
    };
  } catch (error) {
    throw new Error(`Failed to fetch GitHub user data: ${error.message}`);
  }
};

export const getGitHubRepoData = async (owner, repo, token) => {
  try {
    const response = await axios.get(`${GITHUB_API}/repos/${owner}/${repo}`, {
      headers: {
        Authorization: `Bearer ${token}`,
        Accept: 'application/vnd.github.v3+json'
      }
    });

    return {
      name: response.data.name,
      description: response.data.description,
      url: response.data.html_url,
      stars: response.data.stargazers_count,
      forks: response.data.forks_count,
      language: response.data.language,
      license: response.data.license?.name,
      updated_at: response.data.updated_at,
      is_fork: response.data.fork
    };
  } catch (error) {
    throw new Error(`Failed to fetch GitHub repo data: ${error.message}`);
  }
};

export const getGitHubLatestRelease = async (owner, repo, token) => {
  try {
    const response = await axios.get(
      `${GITHUB_API}/repos/${owner}/${repo}/releases/latest`,
      {
        headers: {
          Authorization: `Bearer ${token}`,
          Accept: 'application/vnd.github.v3+json'
        }
      }
    );

    return {
      version: response.data.tag_name,
      release_notes: response.data.body,
      assets: response.data.assets,
      published_at: response.data.published_at
    };
  } catch (error) {
    if (error.response?.status === 404) {
      return null; // No releases found
    }
    throw new Error(`Failed to fetch GitHub release data: ${error.message}`);
  }
};
