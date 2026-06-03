import { useMemo, useRef, useState } from 'react';
import { motion } from 'framer-motion';
import ProjectCard from '../components/ProjectCard';
import Modal from '../components/Modal';
import { useScrollAnimation } from '../hooks/useCustom';
import { FEATURED_REPO_ORDER } from '../utils/githubPortfolio';

const Projects = ({ portfolio }) => {
  const sectionRef = useRef(null);
  useScrollAnimation(sectionRef);
  const [selectedProject, setSelectedProject] = useState(null);

  const featuredRepos = useMemo(() => {
    const repositories = portfolio?.featuredRepositories || [];
    const ordered = FEATURED_REPO_ORDER
      .map((name) => repositories.find((repository) => repository.name === name))
      .filter(Boolean);

    return ordered.length > 0 ? ordered : repositories.slice(0, 3);
  }, [portfolio]);

  const liveDemoCount = featuredRepos.filter((repo) => repo.showLiveDemo).length;

  return (
    <section ref={sectionRef} id="projects" className="min-h-screen flex items-center py-20 relative">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 w-full">
        <motion.div initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }} transition={{ duration: 0.8 }} className="mb-10">
          <div className="inline-flex items-center rounded-full border border-neon-cyan/20 bg-neon-cyan/10 px-4 py-2 text-xs font-semibold uppercase tracking-[0.25em] text-neon-cyan mb-5">
            Featured Projects
          </div>
          <h2 className="text-4xl md:text-5xl font-bold font-['Poppins'] mb-4">
            <span className="gradient-text">Flagship Projects</span>
          </h2>
          <div className="w-20 h-1 bg-gradient-to-r from-neon-cyan to-neon-blue rounded-full"></div>
          <p className="mt-4 max-w-3xl text-gray-400">
            These three projects are pinned in a fixed order so recruiters immediately see the strongest product work — sourced directly from GitHub with verified repository links.
          </p>
        </motion.div>

        {featuredRepos.length > 0 ? (
          <div className="grid gap-8 lg:grid-cols-3">
            {featuredRepos.map((project, index) => (
              <ProjectCard
                key={project.name}
                repo={project}
                index={index}
                onViewDetails={() => setSelectedProject(project)}
              />
            ))}
          </div>
        ) : (
          <div className="rounded-2xl border border-dark-border/50 bg-dark-card/40 px-6 py-10 text-center text-gray-400">
            Featured projects will appear here once GitHub repositories are loaded.
          </div>
        )}

        {portfolio?.stats && (
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.2 }}
            className="mt-12 grid gap-4 md:grid-cols-3"
          >
            {[
              { label: 'Repositories showcased', value: String(portfolio.stats.totalRepositories || 0) },
              { label: 'Public live demos', value: String(liveDemoCount) },
              { label: 'Core stacks represented', value: String(portfolio.stats.featuredTechnologies?.length || 0) },
            ].map((item) => (
              <div key={item.label} className="rounded-2xl border border-dark-border/50 bg-dark-card/50 p-5">
                <p className="text-sm text-gray-400">{item.label}</p>
                <p className="mt-2 text-3xl font-bold text-white">{item.value}</p>
              </div>
            ))}
          </motion.div>
        )}
      </div>

      <Modal
        isOpen={!!selectedProject}
        onClose={() => setSelectedProject(null)}
        title={selectedProject?.name}
      >
        {selectedProject && (
          <motion.div initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} className="space-y-6">
            <div className="space-y-3">
              <div className="flex flex-wrap items-center gap-2">
                {selectedProject.statusBadge && (
                  <span className={`inline-flex items-center gap-1.5 rounded-full border px-3 py-1 text-xs font-semibold ${selectedProject.statusBadge.className}`}>
                    {selectedProject.statusBadge.emoji && selectedProject.statusBadge.emoji.length <= 2 && <span aria-hidden="true">{selectedProject.statusBadge.emoji}</span>}
                    {selectedProject.statusBadge.label}
                  </span>
                )}
                <span className="text-sm uppercase tracking-[0.25em] text-neon-cyan">{selectedProject.featuredBadge || 'Featured Project'}</span>
              </div>
              <h3 className="text-3xl font-bold text-white">{selectedProject.name}</h3>
              <p className="text-gray-300 text-lg leading-8">{selectedProject.story || selectedProject.description}</p>
              <p className="text-sm text-gray-500">Last updated: {selectedProject.lastUpdatedLabel || 'Unknown'}</p>
            </div>

            <div className="flex flex-wrap gap-2">
              {(selectedProject.displayCategories || selectedProject.categories || [selectedProject.category]).map((category) => (
                <span key={category} className="rounded-full border border-neon-cyan/30 bg-neon-cyan/10 px-3 py-1 text-xs text-neon-cyan">
                  {category}
                </span>
              ))}
            </div>

            <div>
              <h4 className="mb-3 text-lg font-bold text-white">Technology Stack</h4>
              <div className="flex flex-wrap gap-2">
                {(selectedProject.technologies || []).map((technology) => (
                  <span key={technology} className="rounded-full border border-dark-border/60 bg-dark-bg/40 px-3 py-1 text-sm text-gray-300">
                    {technology}
                  </span>
                ))}
              </div>
            </div>

            <div className="flex flex-wrap gap-4 pt-6 border-t border-dark-border">
              {selectedProject.githubUrl && (
                <a href={selectedProject.githubUrl} target="_blank" rel="noopener noreferrer" className="rounded-lg border border-neon-cyan/40 px-5 py-3 font-medium text-neon-cyan transition-colors hover:bg-neon-cyan/10">
                  GitHub Repository
                </a>
              )}
              {selectedProject.showLiveDemo && selectedProject.liveUrl && (
                <a href={selectedProject.liveUrl} target="_blank" rel="noopener noreferrer" className="rounded-lg bg-gradient-to-r from-neon-cyan to-neon-blue px-5 py-3 font-medium text-dark-bg">
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

export default Projects;
