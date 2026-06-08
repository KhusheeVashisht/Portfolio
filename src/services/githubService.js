import { GITHUB_USERNAME } from '../config/featuredProjects';
import {
  buildEmptyPortfolioModel,
  buildPortfolioModel,
  normalizeRepository,
} from '../utils/githubPortfolio';

const PORTFOLIO_CACHE_KEY = 'portfolio_github_cache_v4';
const PORTFOLIO_CACHE_TTL_MS = 1000 * 60 * 30;
const REPOSITORY_BATCH_SIZE = 5;

export { PORTFOLIO_CACHE_KEY, PORTFOLIO_CACHE_TTL_MS };

export function getGitHubHeaders() {
  const headers = {
    Accept: 'application/vnd.github+json',
    'X-GitHub-Api-Version': '2022-11-28',
  };

  const token = typeof import.meta !== 'undefined' ? import.meta.env?.VITE_GITHUB_TOKEN : null;
  if (token) {
    headers.Authorization = `Bearer ${token}`;
  }

  return headers;
}

export async function fetchJson(url) {
  const response = await fetch(url, { headers: getGitHubHeaders() });

  if (response.status === 403) {
    const error = new Error('GitHub API rate limit reached');
    error.code = 'RATE_LIMIT';
    throw error;
  }

  if (!response.ok) {
    throw new Error(`GitHub request failed: ${response.status}`);
  }

  return response.json();
}

export async function fetchText(url) {
  const response = await fetch(url, {
    headers: {
      ...getGitHubHeaders(),
      Accept: 'application/vnd.github.raw',
    },
  });

  if (!response.ok) {
    return '';
  }

  return response.text();
}

export function loadCachedPortfolio() {
  if (typeof window === 'undefined') return null;

  try {
    const raw = localStorage.getItem(PORTFOLIO_CACHE_KEY);
    if (!raw) return null;

    const parsed = JSON.parse(raw);
    if (!parsed?.data || !parsed?.timestamp) return null;

    const isFresh = Date.now() - parsed.timestamp < PORTFOLIO_CACHE_TTL_MS;
    return { data: parsed.data, isFresh };
  } catch {
    return null;
  }
}

export function saveCachedPortfolio(portfolio) {
  if (typeof window === 'undefined' || !portfolio) return;

  try {
    localStorage.setItem(
      PORTFOLIO_CACHE_KEY,
      JSON.stringify({ data: portfolio, timestamp: Date.now() })
    );
  } catch {
    // Ignore storage quota or privacy mode errors.
  }
}

export async function enrichRepositorySafely(username, repo) {
  try {
    const [languages, readmeText] = await Promise.all([
      fetchJson(repo.languages_url).catch(() => ({})),
      fetchText(`https://api.github.com/repos/${username}/${repo.name}/readme`).catch(() => ''),
    ]);

    return normalizeRepository(repo, readmeText, languages);
  } catch {
    return normalizeRepository(repo, '', {});
  }
}

export async function fetchUserRepositories(username) {
  const repositories = await fetchJson(
    `https://api.github.com/users/${username}/repos?per_page=100&sort=updated&direction=desc`
  );

  return Array.isArray(repositories) ? repositories : [];
}

export async function fetchUserProfile(username) {
  return fetchJson(`https://api.github.com/users/${username}`);
}

export async function fetchPortfolioData(username = GITHUB_USERNAME) {
  const [profileData, repositoriesData] = await Promise.all([
    fetchUserProfile(username),
    fetchUserRepositories(username),
  ]);

  const enrichedRepositories = [];

  for (let index = 0; index < repositoriesData.length; index += REPOSITORY_BATCH_SIZE) {
    const batch = repositoriesData.slice(index, index + REPOSITORY_BATCH_SIZE);
    const results = await Promise.all(batch.map((repo) => enrichRepositorySafely(username, repo)));
    enrichedRepositories.push(...results);
  }

  return buildPortfolioModel(profileData, enrichedRepositories);
}

export { buildEmptyPortfolioModel, GITHUB_USERNAME };
