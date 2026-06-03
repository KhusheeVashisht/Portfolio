import { motion } from 'framer-motion';
import { FiCalendar, FiExternalLink, FiGitBranch, FiGithub, FiLayers, FiStar } from 'react-icons/fi';

const ProjectCard = ({ project, repo, index = 0, onViewDetails }) => {
  const item = repo || project || {};
  const title = item.title || item.name || 'Untitled Project';
  const description = item.shortDescription || item.displayDescription || item.description || 'No description available.';
  const categories = item.displayCategories || item.categories || (item.category ? [item.category] : []);
  const technologies = item.technologies || item.tags || [];
  const githubUrl = item.githubUrl || item.github || '';
  const liveUrl = item.showLiveDemo ? (item.liveUrl || item.demo || '') : '';
  const featuredBadge = item.featuredBadge || null;
  const statusBadge = item.statusBadge || null;
  const lastUpdatedLabel = item.lastUpdatedLabel || null;

  return (
    <motion.article
      initial={{ opacity: 0, y: 20 }}
      whileInView={{ opacity: 1, y: 0 }}
      transition={{ delay: index * 0.08, duration: 0.45 }}
      whileHover={{ y: -8 }}
      className="group relative h-full overflow-hidden rounded-2xl border border-dark-border/50 bg-dark-card/50 backdrop-blur transition-all duration-300 hover:border-neon-cyan/50"
    >
      <div className="absolute -inset-0.5 rounded-2xl bg-gradient-to-r from-neon-blue via-neon-cyan to-neon-purple opacity-0 blur transition duration-300 group-hover:opacity-60 -z-10"></div>

      <div className="flex h-full flex-col p-6">
        <div className="flex items-start justify-between gap-4 mb-4">
          <div className="min-w-0 flex-1">
            <div className="mb-3 flex flex-wrap items-center gap-2">
              {statusBadge && (
                <span className={`inline-flex items-center gap-1.5 rounded-full border px-3 py-1 text-[11px] font-semibold ${statusBadge.className}`}>
                  {statusBadge.emoji && statusBadge.emoji.length <= 2 && <span aria-hidden="true">{statusBadge.emoji}</span>}
                  {statusBadge.label}
                </span>
              )}
              {featuredBadge && (
                <span className="inline-flex items-center rounded-full border border-neon-cyan/30 bg-neon-cyan/10 px-3 py-1 text-[11px] font-semibold uppercase tracking-[0.22em] text-neon-cyan">
                  {featuredBadge}
                </span>
              )}
            </div>
            <h3 className="text-xl font-bold text-white transition-colors group-hover:text-neon-cyan line-clamp-1">
              {title}
            </h3>
          </div>
          <div className="rounded-full border border-dark-border/60 bg-dark-bg/70 p-2 text-neon-cyan shrink-0">
            <FiLayers size={18} />
          </div>
        </div>

        <p className="mb-4 line-clamp-3 text-sm leading-6 text-gray-400 transition-colors group-hover:text-gray-300">
          {description}
        </p>

        <div className="flex flex-wrap gap-2 mb-4">
          {categories.slice(0, 2).map((category) => (
            <span
              key={category}
              className="rounded-full border border-neon-cyan/20 bg-neon-cyan/10 px-3 py-1 text-xs text-neon-cyan"
            >
              {category}
            </span>
          ))}
        </div>

        <div className="flex flex-wrap gap-2 mb-5">
          {technologies.slice(0, 5).map((technology) => (
            <span
              key={technology}
              className="rounded-full border border-dark-border/70 bg-dark-bg/40 px-3 py-1 text-[11px] uppercase tracking-[0.14em] text-gray-300"
            >
              {technology}
            </span>
          ))}
        </div>

        {item.languageStats?.length > 0 && (
          <div className="mb-5 space-y-2 rounded-xl border border-dark-border/50 bg-dark-bg/40 p-4">
            {item.languageStats.slice(0, 3).map((language) => (
              <div key={language.name} className="flex items-center justify-between gap-3 text-xs text-gray-400">
                <span>{language.name}</span>
                <span>{language.percentage}%</span>
              </div>
            ))}
          </div>
        )}

        <div className="mt-auto flex flex-wrap gap-3 pt-5 border-t border-dark-border/50">
          {githubUrl && (
            <motion.a
              href={githubUrl}
              target="_blank"
              rel="noopener noreferrer"
              whileHover={{ y: -2 }}
              className="inline-flex items-center gap-2 rounded-lg border border-dark-border/60 px-4 py-2 text-sm text-gray-300 transition-colors hover:border-neon-cyan/50 hover:text-neon-cyan"
            >
              <FiGithub size={16} />
              GitHub Repository
            </motion.a>
          )}

          {liveUrl && (
            <motion.a
              href={liveUrl}
              target="_blank"
              rel="noopener noreferrer"
              whileHover={{ y: -2 }}
              className="inline-flex items-center gap-2 rounded-lg bg-gradient-to-r from-neon-cyan to-neon-blue px-4 py-2 text-sm font-semibold text-dark-bg transition-transform"
            >
              <FiExternalLink size={16} />
              Live Demo
            </motion.a>
          )}

          {typeof onViewDetails === 'function' && (
            <motion.button
              type="button"
              whileHover={{ y: -2 }}
              onClick={onViewDetails}
              className="inline-flex items-center gap-2 rounded-lg border border-neon-purple/40 bg-neon-purple/10 px-4 py-2 text-sm text-neon-purple transition-colors hover:border-neon-purple/70 hover:bg-neon-purple/20"
            >
              View Details
            </motion.button>
          )}
        </div>

        <div className="mt-4 flex items-center justify-between text-xs text-gray-500">
          <span className="inline-flex items-center gap-1">
            {lastUpdatedLabel && (
              <>
                <FiCalendar size={12} />
                Updated {lastUpdatedLabel}
              </>
            )}
          </span>
          <div className="flex items-center gap-3">
            <span className="inline-flex items-center gap-1">
              <FiStar size={12} />
              {item.stars ?? item.stargazers_count ?? 0}
            </span>
            <span className="inline-flex items-center gap-1">
              <FiGitBranch size={12} />
              {item.forks ?? item.forks_count ?? 0}
            </span>
          </div>
        </div>
      </div>
    </motion.article>
  );
};

export default ProjectCard;
