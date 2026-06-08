import { useMemo, useState } from 'react';
import { motion } from 'framer-motion';
import { FiSearch } from 'react-icons/fi';
import GitHubRepoCard from '../components/GitHubRepoCard';
import Modal from '../components/Modal';
import { DISPLAY_CATEGORY_ORDER, filterRepositories, getDisplayCategories, sortRepositories } from '../utils/githubPortfolio';

const GitHubProjects = ({ portfolio, portfolioError, usingCache }) => {
  const [selectedCategory, setSelectedCategory] = useState('All Projects');
  const [searchQuery, setSearchQuery] = useState('');
  const [selectedRepo, setSelectedRepo] = useState(null);

  const repositories = portfolio?.repositories || [];

  const filteredRepositories = useMemo(() => {
    const filtered = filterRepositories(repositories, {
      category: selectedCategory,
      search: searchQuery,
    });

    return sortRepositories(filtered, { search: searchQuery, sortBy: 'newest' });
  }, [repositories, selectedCategory, searchQuery]);

  const explorerStats = portfolio?.stats || {};
  const categoryCounts = portfolio?.displayCategoryCounts || {};

  return (
    <section id="explorer" className="py-20 relative">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 w-full">
        <motion.div initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }} transition={{ duration: 0.8 }} className="mb-10">
          <div className="inline-flex items-center rounded-full border border-neon-cyan/20 bg-neon-cyan/10 px-4 py-2 text-xs font-semibold uppercase tracking-[0.25em] text-neon-cyan mb-5">
            GitHub Projects
          </div>
          <h2 className="text-4xl md:text-5xl font-bold font-['Poppins'] mb-4">
            <span className="gradient-text">Repository Explorer</span>
          </h2>
          <div className="w-20 h-1 bg-gradient-to-r from-neon-cyan to-neon-blue rounded-full"></div>
          <p className="mt-4 max-w-3xl text-gray-400">
            All public repositories are loaded from GitHub, categorized automatically, and searchable so recruiters can explore the full project history.
          </p>
        </motion.div>

        {portfolio?.stats && (
          <div className="mb-10 grid gap-4 md:grid-cols-4">
            {[
              { label: 'Repositories', value: explorerStats.publicRepositoryCount ?? explorerStats.totalRepositories ?? 0 },
              { label: 'Languages', value: explorerStats.languagesUsed || 0 },
              { label: 'Active in 90 days', value: explorerStats.activeRepositories || 0 },
              { label: 'Technologies detected', value: explorerStats.featuredTechnologies?.length || 0 },
            ].map((item) => (
              <div key={item.label} className="rounded-2xl border border-dark-border/50 bg-dark-card/50 p-5">
                <p className="text-sm text-gray-400">{item.label}</p>
                <p className="mt-2 text-3xl font-bold text-white">{item.value}</p>
              </div>
            ))}
          </div>
        )}

        <div className="mb-8">
          <label htmlFor="repo-search" className="sr-only">Search repositories</label>
          <div className="relative max-w-xl">
            <FiSearch className="absolute left-4 top-1/2 -translate-y-1/2 text-gray-500" size={18} />
            <input
              id="repo-search"
              type="search"
              value={searchQuery}
              onChange={(event) => setSearchQuery(event.target.value)}
              placeholder="Search by name, technology, category, or description..."
              className="w-full rounded-xl border border-dark-border/60 bg-dark-card/50 py-3 pl-12 pr-4 text-sm text-white placeholder:text-gray-500 focus:border-neon-cyan/50 focus:outline-none focus:ring-1 focus:ring-neon-cyan/30"
            />
          </div>
        </div>

        <div className="flex flex-wrap gap-3 mb-10">
          {DISPLAY_CATEGORY_ORDER.map((category) => {
            const count = category === 'All Projects'
              ? explorerStats.publicRepositoryCount ?? explorerStats.totalRepositories ?? 0
              : categoryCounts[category] || 0;

            if (category !== 'All Projects' && count === 0) {
              return null;
            }

            return (
              <motion.button
                key={category}
                whileHover={{ scale: 1.03 }}
                whileTap={{ scale: 0.97 }}
                onClick={() => setSelectedCategory(category)}
                className={`rounded-full px-5 py-2 text-sm font-medium transition-all ${
                  selectedCategory === category
                    ? 'bg-gradient-to-r from-neon-cyan to-neon-blue text-dark-bg shadow-lg shadow-neon-cyan/30'
                    : 'border border-dark-border bg-dark-card/40 text-gray-300 hover:border-neon-cyan/40 hover:text-neon-cyan'
                }`}
              >
                {category}
                {category !== 'All Projects' && (
                  <span className="ml-2 opacity-70">({count})</span>
                )}
              </motion.button>
            );
          })}
        </div>

        {(portfolioError || usingCache) && (
          <div className="mb-8 rounded-2xl border border-yellow-500/30 bg-yellow-500/10 px-6 py-5 text-sm text-yellow-100">
            {portfolioError || 'Showing cached GitHub data while live updates are unavailable.'}
          </div>
        )}

        {filteredRepositories.length > 0 && (
          <motion.div
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            transition={{ staggerChildren: 0.08 }}
            className="grid gap-6 md:grid-cols-2 xl:grid-cols-3"
          >
            {filteredRepositories.map((repo, index) => (
              <GitHubRepoCard
                key={repo.id || repo.name}
                repo={repo}
                index={index}
                onViewDetails={() => setSelectedRepo(repo)}
              />
            ))}
          </motion.div>
        )}

        {filteredRepositories.length === 0 && (
          <div className="rounded-2xl border border-dark-border/50 bg-dark-card/40 px-6 py-10 text-center text-gray-400">
            {repositories.length === 0
              ? 'No repositories could be loaded from GitHub right now. Please try again later.'
              : 'No repositories matched this search or category filter.'}
          </div>
        )}
      </div>

      <Modal isOpen={!!selectedRepo} onClose={() => setSelectedRepo(null)} title={selectedRepo?.name}>
        {selectedRepo && (
          <motion.div initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} className="space-y-6">
            <div className="space-y-3">
              <div className="flex flex-wrap items-center gap-2">
                {selectedRepo.statusBadge && (
                  <span className={`inline-flex items-center gap-1.5 rounded-full border px-3 py-1 text-xs font-semibold ${selectedRepo.statusBadge.className}`}>
                    {selectedRepo.statusBadge.emoji && selectedRepo.statusBadge.emoji.length <= 2 && <span aria-hidden="true">{selectedRepo.statusBadge.emoji}</span>}
                    {selectedRepo.statusBadge.label}
                  </span>
                )}
                <span className="text-sm uppercase tracking-[0.25em] text-neon-cyan">{getDisplayCategories(selectedRepo)[0] || selectedRepo.category}</span>
              </div>
              <h3 className="text-3xl font-bold text-white">{selectedRepo.name}</h3>
              <p className="text-lg leading-8 text-gray-300">{selectedRepo.story || selectedRepo.description}</p>
              <p className="text-sm text-gray-500">Last updated: {selectedRepo.lastUpdatedLabel || 'Unknown'}</p>
            </div>

            <div className="flex flex-wrap gap-2">
              {getDisplayCategories(selectedRepo).map((category) => (
                <span key={category} className="rounded-full border border-neon-cyan/30 bg-neon-cyan/10 px-3 py-1 text-xs text-neon-cyan">
                  {category}
                </span>
              ))}
            </div>

            <div>
              <h4 className="mb-3 text-lg font-bold text-white">Technology Stack</h4>
              <div className="flex flex-wrap gap-2">
                {(selectedRepo.technologies || []).map((technology) => (
                  <span key={technology} className="rounded-full border border-dark-border/60 bg-dark-bg/40 px-3 py-1 text-sm text-gray-300">
                    {technology}
                  </span>
                ))}
              </div>
            </div>

            <div className="flex flex-wrap gap-4 pt-6 border-t border-dark-border">
              {selectedRepo.githubUrl && (
                <a href={selectedRepo.githubUrl} target="_blank" rel="noopener noreferrer" className="rounded-lg border border-neon-cyan/40 px-5 py-3 font-medium text-neon-cyan transition-colors hover:bg-neon-cyan/10">
                  GitHub Repository
                </a>
              )}
              {selectedRepo.showLiveDemo && selectedRepo.liveUrl && (
                <a href={selectedRepo.liveUrl} target="_blank" rel="noopener noreferrer" className="rounded-lg bg-gradient-to-r from-neon-cyan to-neon-blue px-5 py-3 font-medium text-dark-bg">
                  Live Demo
                </a>
              )}
            </div>
          </motion.div>
        )}
      </Modal>
    </section>
  );
};

export default GitHubProjects;
