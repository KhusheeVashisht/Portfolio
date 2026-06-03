export const GITHUB_USERNAME = 'KhusheeVashisht';

export const FEATURED_REPO_ORDER = ['MindPulse', 'Quetie_MBG', 'Translator_Bot'];

/** Only MindPulse may show a public Live Demo button. */
export const LIVE_DEMO_REPOS = ['MindPulse'];

export const FEATURED_REPO_METADATA = {
  MindPulse: {
    liveUrl: 'https://mindpulse-1-532q.onrender.com',
    backendUrl: 'https://mindpulse-980f.onrender.com/',
    badge: 'Flagship',
    status: 'Active Development',
  },
  Quetie_MBG: {
    badge: 'Production',
    status: 'Production Use',
  },
  Translator_Bot: {
    badge: 'Production',
    status: 'Production Use',
  },
};

export const STATUS_BADGES = {
  'Active Development': { emoji: '🟢', label: 'Active Development', className: 'border-green-400/30 bg-green-400/10 text-green-300' },
  'Production Use': { emoji: '🟢', label: 'Production Use', className: 'border-green-400/30 bg-green-400/10 text-green-300' },
  'Academic Project': { emoji: '🔵', label: 'Academic Project', className: 'border-blue-400/30 bg-blue-400/10 text-blue-300' },
  'Experimental Project': { emoji: '🟡', label: 'Experimental Project', className: 'border-yellow-400/30 bg-yellow-400/10 text-yellow-300' },
};

export const CATEGORY_ORDER = [
  'All Projects',
  'Artificial Intelligence & Machine Learning',
  'Generative AI',
  'Full Stack Development',
  'Backend Development',
  'Web Development',
  'Mobile Development',
  'Automation & Bots',
  'Database Projects',
  'Systems Programming',
  'C Programming',
  'C++ Programming',
  'Academic Projects',
  'Experimental Projects',
  'Learning & Practice Projects',
];

export const DISPLAY_CATEGORY_ORDER = [
  'All Projects',
  'Featured Projects',
  'AI & Machine Learning',
  'Full Stack Development',
  'Backend & Automation',
  'Mobile Development',
  'Academic & Learning Projects',
];

const DISPLAY_CATEGORY_ALIASES = {
  'Generative AI': 'AI & Machine Learning',
  'Artificial Intelligence & Machine Learning': 'AI & Machine Learning',
  'Full Stack Development': 'Full Stack Development',
  'Web Development': 'Full Stack Development',
  'Backend Development': 'Backend & Automation',
  'Automation & Bots': 'Backend & Automation',
  'Database Projects': 'Backend & Automation',
  'Mobile Development': 'Mobile Development',
  'Systems Programming': 'Academic & Learning Projects',
  'C Programming': 'Academic & Learning Projects',
  'C++ Programming': 'Academic & Learning Projects',
  'Academic Projects': 'Academic & Learning Projects',
  'Experimental Projects': 'Academic & Learning Projects',
  'Learning & Practice Projects': 'Academic & Learning Projects',
};

const CATEGORY_RULES = [
  {
    name: 'Generative AI',
    keywords: ['generative ai', 'prompt', 'hugging face', 'openai', 'llm', 'transformer', 'transformers', 'semantic search', 'bias', 'question answering', 'summarization', 'faiss', 'gpt'],
    languages: ['python'],
  },
  {
    name: 'Artificial Intelligence & Machine Learning',
    keywords: ['machine learning', 'ml ', 'model', 'prediction', 'predict', 'scikit-learn', 'regression', 'classification', 'clustering', 'burnout', 'neural', 'tensorflow', 'pytorch'],
    languages: ['python', 'java'],
  },
  {
    name: 'Full Stack Development',
    keywords: ['full stack', 'fullstack', 'frontend', 'backend', 'dashboard', 'auth', 'authentication', 'web app', 'render', 'deployment', 'react', 'vite'],
    languages: ['javascript', 'typescript', 'python', 'java'],
  },
  {
    name: 'Backend Development',
    keywords: ['spring boot', 'jwt', 'rest api', 'fastapi', 'express', 'server', 'api endpoint', 'microservice'],
    languages: ['java', 'python', 'javascript'],
  },
  {
    name: 'Web Development',
    keywords: ['react', 'vite', 'tailwind', 'html', 'css', 'ui', 'frontend', 'website', 'portfolio'],
    languages: ['javascript', 'typescript'],
  },
  {
    name: 'Mobile Development',
    keywords: ['android', 'firebase', 'kotlin', 'mobile', 'ios'],
    languages: ['kotlin', 'java'],
  },
  {
    name: 'Automation & Bots',
    keywords: ['bot', 'automation', 'twitch', 'queue', 'oauth', 'stream', 'translator'],
    languages: ['python', 'javascript'],
  },
  {
    name: 'Database Projects',
    keywords: ['database', 'dbms', 'sql', 'sqlite', 'mysql', 'mariadb', 'postgres', 'mongodb', 'schema', 'query'],
    languages: ['java', 'python', 'sql'],
  },
  {
    name: 'Systems Programming',
    keywords: ['systems', 'operating system', 'kernel', 'memory', 'process', 'thread', 'socket', 'low-level'],
    languages: ['c', 'c++', 'rust'],
  },
  {
    name: 'C Programming',
    keywords: ['c programming', 'c-program', 'programing-codes', 'automata'],
    languages: ['c'],
  },
  {
    name: 'C++ Programming',
    keywords: ['c++', 'qt', 'graph', 'routing', 'cpp'],
    languages: ['c++'],
  },
  {
    name: 'Learning & Practice Projects',
    keywords: ['practice', 'training', 'learning', 'lab', 'tutorial', 'exercise', 'coursework', 'assignment'],
    languages: ['java', 'python', 'c++', 'c', 'javascript'],
  },
  {
    name: 'Academic Projects',
    keywords: ['academic', 'final year', 'bca', 'mca', 'university', 'college', 'semester'],
    languages: ['java', 'python', 'c++', 'c'],
  },
  {
    name: 'Experimental Projects',
    keywords: ['experiment', 'experimental', 'prototype', 'demo', 'sandbox', 'playground'],
    languages: ['python', 'javascript'],
  },
];

const TECHNOLOGY_RULES = [
  { label: 'React', patterns: ['react'], group: 'Frontend Technologies' },
  { label: 'Vite', patterns: ['vite'], group: 'Frontend Technologies' },
  { label: 'Tailwind CSS', patterns: ['tailwind'], group: 'Frontend Technologies' },
  { label: 'Framer Motion', patterns: ['framer motion'], group: 'Frontend Technologies' },
  { label: 'HTML/CSS', patterns: ['html', 'css'], group: 'Frontend Technologies' },
  { label: 'Node.js', patterns: ['node.js', 'nodejs', 'node'], group: 'Backend Technologies' },
  { label: 'Express', patterns: ['express'], group: 'Backend Technologies' },
  { label: 'FastAPI', patterns: ['fastapi'], group: 'Backend Technologies' },
  { label: 'Spring Boot', patterns: ['spring boot'], group: 'Backend Technologies' },
  { label: 'Flask', patterns: ['flask'], group: 'Backend Technologies' },
  { label: 'JWT', patterns: ['jwt'], group: 'Authentication & Security' },
  { label: 'bcrypt', patterns: ['bcrypt'], group: 'Authentication & Security' },
  { label: 'OAuth', patterns: ['oauth'], group: 'Authentication & Security' },
  { label: 'SQLite', patterns: ['sqlite'], group: 'Databases' },
  { label: 'MySQL / MariaDB', patterns: ['mysql', 'mariadb'], group: 'Databases' },
  { label: 'PostgreSQL', patterns: ['postgres', 'postgresql'], group: 'Databases' },
  { label: 'MongoDB', patterns: ['mongodb'], group: 'Databases' },
  { label: 'Firebase', patterns: ['firebase'], group: 'Databases' },
  { label: 'DBMS', patterns: ['database', 'dbms', 'sql'], group: 'Databases' },
  { label: 'Android', patterns: ['android'], group: 'Frontend Technologies' },
  { label: 'Kotlin', patterns: ['kotlin'], group: 'Programming Languages' },
  { label: 'Python', patterns: ['python'], group: 'Programming Languages' },
  { label: 'Java', patterns: ['java'], group: 'Programming Languages' },
  { label: 'JavaScript', patterns: ['javascript'], group: 'Programming Languages' },
  { label: 'TypeScript', patterns: ['typescript'], group: 'Programming Languages' },
  { label: 'C++', patterns: ['c++'], group: 'Programming Languages' },
  { label: 'C', patterns: ['c programming', 'c language'], group: 'Programming Languages' },
  { label: 'Qt', patterns: ['qt'], group: 'Software Engineering Concepts' },
  { label: 'PyTorch', patterns: ['pytorch'], group: 'AI & Machine Learning' },
  { label: 'Scikit-learn', patterns: ['scikit-learn', 'sklearn'], group: 'AI & Machine Learning' },
  { label: 'Machine Learning', patterns: ['machine learning', 'ml model'], group: 'AI & Machine Learning' },
  { label: 'Transformers', patterns: ['transformer', 'transformers'], group: 'Generative AI' },
  { label: 'Hugging Face', patterns: ['hugging face', 'huggingface'], group: 'Generative AI' },
  { label: 'FAISS', patterns: ['faiss'], group: 'Generative AI' },
  { label: 'Sentence Transformers', patterns: ['sentence-transformers'], group: 'Generative AI' },
  { label: 'OpenAI', patterns: ['openai', 'gpt'], group: 'Generative AI' },
  { label: 'TwitchIO', patterns: ['twitchio', 'twitch'], group: 'APIs & Integrations' },
  { label: 'REST APIs', patterns: ['rest api', 'restful'], group: 'APIs & Integrations' },
  { label: 'GraphQL', patterns: ['graphql'], group: 'APIs & Integrations' },
  { label: 'Render', patterns: ['render.com', 'onrender'], group: 'Deployment & Cloud' },
  { label: 'Docker', patterns: ['docker'], group: 'Deployment & Cloud' },
  { label: 'GitHub Actions', patterns: ['github actions', 'ci/cd'], group: 'Deployment & Cloud' },
  { label: 'Graph Algorithms', patterns: ['graph', 'routing', 'dijkstra', 'bfs', 'dfs'], group: 'Software Engineering Concepts' },
  { label: 'Data Structures', patterns: ['data structure', 'linked list', 'tree', 'heap'], group: 'Software Engineering Concepts' },
  { label: 'OOP', patterns: ['object oriented', 'oop'], group: 'Software Engineering Concepts' },
];

const SKILL_GROUP_ORDER = [
  'Programming Languages',
  'Frontend Technologies',
  'Backend Technologies',
  'Databases',
  'AI & Machine Learning',
  'Generative AI',
  'APIs & Integrations',
  'Authentication & Security',
  'Deployment & Cloud',
  'Software Engineering Concepts',
];

const PORTFOLIO_CACHE_KEY = 'portfolio_github_cache_v2';
const PORTFOLIO_CACHE_TTL_MS = 1000 * 60 * 30;

function normalizeText(value) {
  return String(value || '').toLowerCase();
}

function dedupe(items) {
  return Array.from(new Set(items.filter(Boolean)));
}

export function getDisplayCategories(repository = {}) {
  const sourceCategories = repository.categories || (repository.category ? [repository.category] : []);
  const mappedCategories = sourceCategories.map((category) => DISPLAY_CATEGORY_ALIASES[category] || category);

  if (repository.featured) {
    mappedCategories.unshift('Featured Projects');
  }

  return dedupe(mappedCategories).filter((category) => DISPLAY_CATEGORY_ORDER.includes(category));
}

export function formatDate(value) {
  if (!value) return 'Unknown';
  const date = new Date(value);
  if (Number.isNaN(date.getTime())) return 'Unknown';
  return date.toLocaleDateString(undefined, {
    year: 'numeric',
    month: 'short',
    day: 'numeric',
  });
}

export function isValidHttpUrl(value) {
  if (!value || typeof value !== 'string') return false;
  try {
    const url = new URL(value);
    return url.protocol === 'http:' || url.protocol === 'https:';
  } catch {
    return false;
  }
}

export function isFeaturedRepo(name) {
  return FEATURED_REPO_ORDER.includes(name);
}

export function getFeaturedMeta(name) {
  return FEATURED_REPO_METADATA[name] || null;
}

export function shouldShowLiveDemo(name) {
  return LIVE_DEMO_REPOS.includes(name);
}

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

export function extractReadmeSummary(readmeText) {
  const chunks = String(readmeText || '')
    .replace(/```[\s\S]*?```/g, ' ')
    .split(/\n{2,}/)
    .map((chunk) => chunk.replace(/^[#*>\-\s]+/gm, '').trim())
    .filter(Boolean);

  return chunks.find((chunk) => chunk.length > 80) || chunks[0] || '';
}

export function inferCategory(repo, readmeText = '') {
  const text = normalizeText([
    repo.name,
    repo.description,
    readmeText,
    (repo.topics || []).join(' '),
    repo.language,
  ].join(' '));

  const scores = CATEGORY_RULES.map((rule) => {
    let score = 0;

    for (const keyword of rule.keywords) {
      if (text.includes(keyword)) score += 3;
    }

    for (const language of rule.languages || []) {
      if (normalizeText(repo.language) === language) score += 2;
      if (text.includes(language)) score += 1;
    }

    if (rule.name === 'Generative AI' && (text.includes('transformer') || text.includes('hugging face') || text.includes('openai'))) score += 5;
    if (rule.name === 'C++ Programming' && normalizeText(repo.language) === 'c++') score += 4;
    if (rule.name === 'C Programming' && normalizeText(repo.language) === 'c') score += 4;
    if (rule.name === 'Automation & Bots' && (text.includes('bot') || text.includes('twitch'))) score += 4;
    if (rule.name === 'Database Projects' && /database|sql|sqlite|mysql|dbms/.test(text)) score += 4;
    if (rule.name === 'Learning & Practice Projects' && /practice|training|learning|lab|assignment/.test(text)) score += 4;
    if (rule.name === 'Academic Projects' && /academic|final year|bca|mca|university/.test(text)) score += 4;
    if (rule.name === 'Experimental Projects' && /experiment|demo|prototype|sandbox/.test(text)) score += 3;

    return { name: rule.name, score };
  });

  const ranked = scores.sort((left, right) => right.score - left.score);
  const primary = ranked[0]?.score > 0 ? ranked[0].name : 'Learning & Practice Projects';
  const secondary = ranked.filter((item) => item.score > 3 && item.name !== primary).map((item) => item.name);

  return {
    primary,
    categories: dedupe([primary, ...secondary]),
  };
}

export function inferStatus(repo, readmeText = '', categoryInfo = {}) {
  const featuredMeta = getFeaturedMeta(repo.name);
  if (featuredMeta?.status) {
    return featuredMeta.status;
  }

  const text = normalizeText([repo.name, repo.description, readmeText, (repo.topics || []).join(' ')].join(' '));
  const primary = categoryInfo.primary || '';

  if (primary === 'Experimental Projects' || /experiment|prototype|sandbox/.test(text)) {
    return 'Experimental Project';
  }

  if (primary === 'Academic Projects' || primary === 'Learning & Practice Projects' || /academic|assignment|coursework|bca|mca/.test(text)) {
    return 'Academic Project';
  }

  const daysSincePush = repo.pushed_at
    ? (Date.now() - new Date(repo.pushed_at).getTime()) / (1000 * 60 * 60 * 24)
    : Infinity;

  if (daysSincePush <= 60) {
    return 'Active Development';
  }

  if (primary === 'Automation & Bots' || primary === 'Full Stack Development' || primary === 'Backend Development') {
    return 'Production Use';
  }

  return 'Academic Project';
}

export function inferTechnologies(repo, readmeText = '', languages = {}) {
  const text = normalizeText([
    repo.name,
    repo.description,
    readmeText,
    (repo.topics || []).join(' '),
    repo.language,
    ...Object.keys(languages || {}),
  ].join(' '));

  const techs = [];

  if (repo.language) {
    const langMap = {
      JavaScript: 'JavaScript',
      TypeScript: 'TypeScript',
      Python: 'Python',
      Java: 'Java',
      'C++': 'C++',
      C: 'C',
      Kotlin: 'Kotlin',
    };
    techs.push(langMap[repo.language] || repo.language);
  }

  for (const [languageName] of Object.entries(languages || {})) {
    techs.push(languageName);
  }

  for (const techRule of TECHNOLOGY_RULES) {
    if (techRule.patterns.some((pattern) => text.includes(pattern))) {
      techs.push(techRule.label);
    }
  }

  return dedupe(techs).slice(0, 12);
}

export function buildLanguageStats(languages = {}) {
  const entries = Object.entries(languages || {});
  const total = entries.reduce((sum, [, bytes]) => sum + bytes, 0);

  if (!total) {
    return [];
  }

  return entries
    .sort((left, right) => right[1] - left[1])
    .map(([name, bytes]) => ({
      name,
      bytes,
      percentage: Math.round((bytes / total) * 1000) / 10,
    }))
    .filter((item) => item.bytes > 0)
    .slice(0, 4);
}

export function generateDescription(repo, readmeText = '') {
  const normalizedDescription = String(repo.description || '').trim();
  if (normalizedDescription) {
    return normalizedDescription;
  }

  const readmeSummary = extractReadmeSummary(readmeText);
  if (readmeSummary) {
    return readmeSummary.length > 200 ? `${readmeSummary.slice(0, 197)}...` : readmeSummary;
  }

  const { primary } = inferCategory(repo, readmeText);
  const language = repo.language || 'software';

  const fallbacks = {
    'Automation & Bots': `A ${language}-based automation project focused on workflow control, interaction handling, and practical operations.`,
    'Artificial Intelligence & Machine Learning': `An exploratory ${language} project focused on intelligent features, experimentation, and practical model-driven workflows.`,
    'Generative AI': `A ${language} project exploring generative AI workflows, prompt engineering, and model-driven features.`,
    'Full Stack Development': `A ${language}-powered full-stack application with product-oriented workflows and a user-facing interface.`,
    'Backend Development': `A ${language} backend service focused on APIs, data handling, and server-side logic.`,
    'Mobile Development': `A mobile application project built around ${language} and cloud-backed workflows.`,
    'Database Projects': `A ${language} project centered on database design, queries, and data management.`,
    'C++ Programming': `A ${language} desktop or systems project focused on algorithms, structure, and interactive behavior.`,
    'C Programming': `A foundational ${language} project demonstrating core programming concepts and problem solving.`,
  };

  return fallbacks[primary] || `A ${language}-based project that demonstrates iteration, practical problem solving, and software development fundamentals.`;
}

export function generateRepositoryStory(repo, readmeText = '') {
  const summary = extractReadmeSummary(readmeText);
  return summary || generateDescription(repo, readmeText);
}

export function normalizeRepository(repo, readmeText = '', languages = {}) {
  const categoryInfo = inferCategory(repo, readmeText);
  const technologies = inferTechnologies(repo, readmeText, languages);
  const languageStats = buildLanguageStats(languages);
  const featuredMeta = getFeaturedMeta(repo.name);
  const description = generateDescription(repo, readmeText);
  const story = generateRepositoryStory(repo, readmeText);
  const status = inferStatus(repo, readmeText, categoryInfo);
  const githubUrl = isValidHttpUrl(repo.html_url) ? repo.html_url : `https://github.com/${GITHUB_USERNAME}/${repo.name}`;
  const liveUrl = featuredMeta?.liveUrl && isValidHttpUrl(featuredMeta.liveUrl) ? featuredMeta.liveUrl : null;
  const backendUrl = featuredMeta?.backendUrl && isValidHttpUrl(featuredMeta.backendUrl) ? featuredMeta.backendUrl : null;
  const showLiveDemo = shouldShowLiveDemo(repo.name) && Boolean(liveUrl);

  return {
    id: repo.id,
    name: repo.name,
    description,
    shortDescription: description.length > 160 ? `${description.slice(0, 157)}...` : description,
    story,
    githubUrl,
    liveUrl: showLiveDemo ? liveUrl : null,
    backendUrl,
    showLiveDemo,
    lastUpdated: repo.updated_at,
    lastUpdatedLabel: formatDate(repo.updated_at),
    pushedAt: repo.pushed_at,
    language: repo.language || 'Unknown',
    languageStats,
    category: categoryInfo.primary,
    categories: categoryInfo.categories,
    displayCategories: getDisplayCategories({ categories: categoryInfo.categories, category: categoryInfo.primary, featured: isFeaturedRepo(repo.name) }),
    technologies,
    status,
    statusBadge: STATUS_BADGES[status] || STATUS_BADGES['Academic Project'],
    topics: dedupe([...(repo.topics || []), ...technologies].map((item) => String(item).trim())),
    featured: isFeaturedRepo(repo.name),
    featuredBadge: featuredMeta?.badge || null,
    isFork: Boolean(repo.fork),
    openIssues: repo.open_issues_count || 0,
    stars: repo.stargazers_count || 0,
    forks: repo.forks_count || 0,
    homepage: repo.homepage || null,
    size: repo.size || 0,
  };
}

export function buildSkillsFromRepositories(repositories = []) {
  const techCounts = new Map();
  const techGroups = new Map();

  for (const repository of repositories) {
    (repository.technologies || []).forEach((tech) => {
      techCounts.set(tech, (techCounts.get(tech) || 0) + 1);

      const rule = TECHNOLOGY_RULES.find((item) => item.label === tech);
      const group = rule?.group || 'Software Engineering Concepts';
      if (!techGroups.has(group)) {
        techGroups.set(group, new Set());
      }
      techGroups.get(group).add(tech);
    });
  }

  const groups = SKILL_GROUP_ORDER
    .map((title) => ({
      title,
      skills: Array.from(techGroups.get(title) || [])
        .sort((left, right) => (techCounts.get(right) || 0) - (techCounts.get(left) || 0))
        .slice(0, 10),
    }))
    .filter((group) => group.skills.length > 0);

  const allSkills = dedupe(
    Array.from(techCounts.entries())
      .sort((left, right) => right[1] - left[1])
      .map(([tech]) => tech)
  );

  return { groups, allSkills };
}

export function buildPortfolioStats(profile = {}, repositories = []) {
  const languageBytes = new Map();

  for (const repository of repositories) {
    (repository.languageStats || []).forEach((stat) => {
      languageBytes.set(stat.name, (languageBytes.get(stat.name) || 0) + stat.bytes);
    });

    if (repository.language && repository.language !== 'Unknown') {
      languageBytes.set(repository.language, (languageBytes.get(repository.language) || 0) + 1);
    }
  }

  const totalBytes = Array.from(languageBytes.values()).reduce((sum, value) => sum + value, 0);
  const topLanguages = Array.from(languageBytes.entries())
    .sort((left, right) => right[1] - left[1])
    .slice(0, 6)
    .map(([name, bytes]) => ({
      name,
      percentage: totalBytes ? Math.round((bytes / totalBytes) * 1000) / 10 : 0,
    }));

  const languages = dedupe(repositories.map((repository) => repository.language).filter((lang) => lang && lang !== 'Unknown'));
  const activeRepos = repositories.filter((repository) => {
    if (!repository.pushedAt) return false;
    const daysSince = (Date.now() - new Date(repository.pushedAt).getTime()) / (1000 * 60 * 60 * 24);
    return daysSince <= 90;
  });

  const techFrequency = new Map();
  repositories.forEach((repository) => {
    (repository.technologies || []).forEach((tech) => {
      techFrequency.set(tech, (techFrequency.get(tech) || 0) + 1);
    });
  });

  return {
    totalRepositories: repositories.length || profile.public_repos || 0,
    languagesUsed: languages.length,
    topLanguages,
    activeRepositories: activeRepos.length,
    activeRepositoryNames: activeRepos.slice(0, 6).map((repository) => repository.name),
    featuredTechnologies: Array.from(techFrequency.entries())
      .sort((left, right) => right[1] - left[1])
      .slice(0, 10)
      .map(([tech]) => tech),
    liveDemoCount: repositories.filter((repository) => repository.showLiveDemo).length,
  };
}

export function buildStoryTimeline(repositories = []) {
  const names = new Set(repositories.map((repository) => repository.name));
  const has = (name) => names.has(name);
  const hasAny = (list) => list.some((name) => names.has(name));

  return [
    {
      stage: 'Programming Fundamentals',
      title: 'Core logic, syntax, and problem solving',
      description: 'Started with foundational programming exercises and algorithmic thinking before moving into structured software projects.',
      evidence: ['C-programing-codes', 'Automata-Practice-Codes', 'TechnicalTrainingPrograms'],
      complete: hasAny(['C-programing-codes', 'Automata-Practice-Codes', 'TechnicalTrainingPrograms']),
    },
    {
      stage: 'C & C++',
      title: 'Low-level programming and algorithm implementation',
      description: 'Built C and C++ repositories around automata, graph algorithms, and systems-style problem solving.',
      evidence: ['C-programing-codes', 'Navixis', 'Automata-Practice-Codes'],
      complete: has('Navixis') || has('C-programing-codes'),
    },
    {
      stage: 'Software Development',
      title: 'Application structure, OOP, and modular design',
      description: 'Moved into structured software systems with BookHive, StudentNotesApp, EmployeeApp, and other application projects.',
      evidence: ['BookHive', 'StudentNotesApp', 'EmployeeApp', 'AdvancedInternetPrograming'],
      complete: hasAny(['BookHive', 'StudentNotesApp', 'EmployeeApp']),
    },
    {
      stage: 'Database Systems',
      title: 'Schema design, queries, and persistence layers',
      description: 'Applied database concepts through projects involving SQLite, MySQL/MariaDB, and backend data models.',
      evidence: ['BookHive', 'MindPulse', 'EmployeeApp'],
      complete: hasAny(['BookHive', 'MindPulse', 'EmployeeApp']),
    },
    {
      stage: 'Machine Learning',
      title: 'Prediction, modeling, and applied ML workflows',
      description: 'Worked on practical machine learning flows and model-driven applications such as MindPulse and ml-practice-projects.',
      evidence: ['MindPulse', 'ml-practice-projects'],
      complete: has('MindPulse') || has('ml-practice-projects'),
    },
    {
      stage: 'Generative AI',
      title: 'Prompting, summarization, search, and bias analysis',
      description: 'Explored generative AI workflows, semantic retrieval, and experimental prompt-based evaluation in dedicated lab repos.',
      evidence: ['generative-ai-projects'],
      complete: has('generative-ai-projects'),
    },
    {
      stage: 'Full Stack Applications',
      title: 'User-facing apps with APIs, auth, and deployment',
      description: 'Shipped user-facing apps with authentication, dashboards, APIs, and deployment-aware architecture.',
      evidence: ['MindPulse', 'Quetie_MBG', 'Translator_Bot'],
      complete: hasAny(['MindPulse', 'Quetie_MBG', 'Translator_Bot']),
    },
    {
      stage: 'Production-Oriented Systems',
      title: 'Deployment, monitoring, and operational resilience',
      description: 'Focused on health endpoints, live services, token handling, fallback behavior, and deployment instructions for real-world use.',
      evidence: ['Quetie_MBG', 'Translator_Bot', 'MindPulse'],
      complete: hasAny(['Quetie_MBG', 'Translator_Bot', 'MindPulse']),
    },
  ];
}

export function buildPhilosophyPoints(repositories = []) {
  const production = repositories
    .filter((repository) => repository.status === 'Production Use' || repository.status === 'Active Development')
    .map((repository) => repository.name);
  const experimental = repositories
    .filter((repository) => repository.category === 'Experimental Projects' || repository.category === 'Generative AI')
    .map((repository) => repository.name);

  return [
    {
      title: 'Software is never truly finished',
      description: 'Every repository in this portfolio is treated as a living system that can be improved through iteration, feedback, and new requirements.',
    },
    {
      title: 'GitHub is the source of truth',
      description: production.length
        ? `Projects such as ${production.slice(0, 3).join(', ')} are loaded directly from GitHub so the portfolio stays current without manual updates.`
        : 'Repositories are loaded directly from GitHub so the portfolio stays current without manual content maintenance.',
    },
    {
      title: 'Exploration still counts',
      description: experimental.length
        ? `Repositories like ${experimental.slice(0, 3).join(', ')} show curiosity, experimentation, and growth into newer technologies.`
        : 'Experimental repositories remain visible because they show progress and technical curiosity.',
    },
  ];
}

export function filterRepositories(repositories = [], { category = 'All Projects', search = '' } = {}) {
  const query = normalizeText(search.trim());

  return repositories.filter((repository) => {
    const matchesCategory = category === 'All Projects'
      || (repository.categories || [repository.category]).includes(category);
    const matchesDisplayCategory = category === 'All Projects'
      || getDisplayCategories(repository).includes(category);

    if (!matchesCategory && !matchesDisplayCategory) return false;
    if (!query) return true;

    const haystack = normalizeText([
      repository.name,
      repository.description,
      repository.story,
      repository.category,
      ...(repository.categories || []),
      ...(getDisplayCategories(repository) || []),
      ...(repository.technologies || []),
      ...(repository.topics || []),
      repository.language,
      repository.status,
    ].join(' '));

    return haystack.includes(query);
  });
}

export function sortRepositories(repositories = [], { search = '', sortBy = 'newest' } = {}) {
  const query = normalizeText(search.trim());
  const sorted = [...repositories];

  if (query) {
    sorted.sort((left, right) => scoreRepositoryRelevance(right, query) - scoreRepositoryRelevance(left, query));
    return sorted;
  }

  if (sortBy === 'name') {
    return sorted.sort((left, right) => left.name.localeCompare(right.name));
  }

  if (sortBy === 'stars') {
    return sorted.sort((left, right) => (right.stars || 0) - (left.stars || 0));
  }

  return sorted.sort((left, right) => {
    if (left.featured && !right.featured) return -1;
    if (!left.featured && right.featured) return 1;
    return new Date(right.lastUpdated || 0).getTime() - new Date(left.lastUpdated || 0).getTime();
  });
}

function scoreRepositoryRelevance(repository, query) {
  let score = 0;
  const name = normalizeText(repository.name);
  const description = normalizeText(repository.description);
  const technologies = normalizeText((repository.technologies || []).join(' '));
  const categories = normalizeText((repository.categories || [repository.category]).join(' '));

  if (name === query) score += 100;
  if (name.includes(query)) score += 50;
  if (description.includes(query)) score += 20;
  if (technologies.includes(query)) score += 15;
  if (categories.includes(query)) score += 10;

  if (repository.featured) score += 5;

  return score;
}

export function buildPortfolioModel(profile, rawRepositories = []) {
  const repositories = sortRepositories(rawRepositories, { sortBy: 'newest' });

  const featuredRepositories = FEATURED_REPO_ORDER
    .map((name) => repositories.find((repository) => repository.name === name))
    .filter(Boolean)
    .map((repository) => ({
      ...repository,
      featuredBadge: FEATURED_REPO_METADATA[repository.name]?.badge || 'Featured',
      status: FEATURED_REPO_METADATA[repository.name]?.status || repository.status,
      statusBadge: STATUS_BADGES[FEATURED_REPO_METADATA[repository.name]?.status || repository.status] || repository.statusBadge,
    }));

  const categoryCounts = CATEGORY_ORDER.reduce((accumulator, category) => {
    accumulator[category] = 0;
    return accumulator;
  }, {});

  const displayCategoryCounts = DISPLAY_CATEGORY_ORDER.reduce((accumulator, category) => {
    accumulator[category] = 0;
    return accumulator;
  }, {});

  for (const repository of repositories) {
    for (const category of repository.categories || [repository.category]) {
      if (category in categoryCounts) {
        categoryCounts[category] += 1;
      }
    }

    for (const category of getDisplayCategories(repository)) {
      if (category in displayCategoryCounts) {
        displayCategoryCounts[category] += 1;
      }
    }
  }

  const stats = buildPortfolioStats(profile, repositories);
  const skills = buildSkillsFromRepositories(repositories);
  const timeline = buildStoryTimeline(repositories);
  const philosophy = buildPhilosophyPoints(repositories);

  return {
    profile,
    repositories,
    featuredRepositories,
    categoryCounts,
    displayCategoryCounts,
    stats,
    skills,
    timeline,
    philosophy,
    summary:
      profile?.bio ||
      'AI/ML student who builds practical software systems, automation tools, full-stack applications, and continuously evolving projects.',
    fetchedAt: new Date().toISOString(),
  };
}

export function buildEmptyPortfolioModel() {
  return buildPortfolioModel(
    { login: GITHUB_USERNAME, public_repos: 0, bio: '' },
    []
  );
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

export async function fetchPortfolioData(username) {
  const [profileData, repositoriesData] = await Promise.all([
    fetchJson(`https://api.github.com/users/${username}`),
    fetchJson(`https://api.github.com/users/${username}/repos?per_page=100&sort=updated`),
  ]);

  const batchSize = 5;
  const enrichedRepositories = [];

  for (let index = 0; index < repositoriesData.length; index += batchSize) {
    const batch = repositoriesData.slice(index, index + batchSize);
    const results = await Promise.all(batch.map((repo) => enrichRepositorySafely(username, repo)));
    enrichedRepositories.push(...results);
  }

  return buildPortfolioModel(profileData, enrichedRepositories);
}
