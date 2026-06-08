/**
 * Featured Projects Configuration
 * --------------------------------
 * GitHub remains the source of truth for all repository metadata
 * (descriptions, stars, languages, topics, last updated, URLs).
 *
 * This file only controls:
 *   1. Which repositories appear in the "Flagship Projects" section
 *   2. Display order (top to bottom)
 *   3. Optional presentation overrides (badges, live demo URLs, status)
 *
 * HOW TO ADD A FEATURED PROJECT
 *   1. Push the repository to https://github.com/KhusheeVashisht
 *   2. Add the exact repository name to FEATURED_PROJECTS below
 *   3. Optionally add an entry to FEATURED_PROJECT_METADATA
 *
 * HOW TO REMOVE A FEATURED PROJECT
 *   Delete (or comment out) the repository name from FEATURED_PROJECTS.
 *
 * HOW TO REORDER
 *   Rearrange names in FEATURED_PROJECTS — order in the array = display order.
 */

export const GITHUB_USERNAME = 'KhusheeVashisht';

/** Repositories excluded from the portfolio explorer (e.g. this website). */
export const EXCLUDED_REPOSITORIES = ['Portfolio'];

/**
 * Featured projects shown in the Flagship Projects section.
 * Order in this array determines display order.
 */
export const FEATURED_PROJECTS = [
  'MindPulse',
  'Navixis',
  'BookHive',
  'Quetie_MBG',
  'Translator_Bot',
];

/** Repositories allowed to show a public Live Demo button. */
export const LIVE_DEMO_REPOS = ['MindPulse'];

/**
 * Optional presentation overrides per featured repository.
 * GitHub API data still provides descriptions, stars, topics, and dates.
 */
export const FEATURED_PROJECT_METADATA = {
  MindPulse: {
    liveUrl: 'https://mindpulse-1-532q.onrender.com',
    backendUrl: 'https://mindpulse-980f.onrender.com/',
    badge: 'Flagship',
    status: 'Active Development',
  },
  Navixis: {
    badge: 'Academic',
    status: 'Academic Project',
  },
  BookHive: {
    badge: 'Academic',
    status: 'Academic Project',
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
