import { useRef } from 'react';
import { motion } from 'framer-motion';
import { useScrollAnimation } from '../hooks/useCustom';

const Achievements = ({ portfolio }) => {
  const sectionRef = useRef(null);
  useScrollAnimation(sectionRef);

  const stats = portfolio?.stats || {};
  const topLanguages = stats.topLanguages || [];

  return (
    <section ref={sectionRef} id="achievements" className="min-h-screen flex items-center py-20 relative">
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 w-full">
        <motion.div initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }} transition={{ duration: 0.8 }} className="mb-10">
          <div className="inline-flex items-center rounded-full border border-neon-cyan/20 bg-neon-cyan/10 px-4 py-2 text-xs font-semibold uppercase tracking-[0.25em] text-neon-cyan mb-5">
            GitHub Statistics
          </div>
          <h2 className="text-4xl md:text-5xl font-bold font-['Poppins'] mb-4">
            <span className="gradient-text">Repository Activity & Reach</span>
          </h2>
          <div className="w-20 h-1 rounded-full bg-gradient-to-r from-neon-cyan to-neon-blue"></div>
          <p className="mt-4 max-w-3xl text-gray-400">
            This section is derived directly from the public GitHub profile and gives recruiters a quick view of project volume, language spread, and active maintenance.
          </p>
        </motion.div>

        <div className="grid gap-4 md:grid-cols-2 xl:grid-cols-4">
          {[
            { label: 'Public repos', value: stats.totalRepositories || 0 },
            { label: 'Languages used', value: stats.languagesUsed || 0 },
            { label: 'Active repos', value: stats.activeRepositories || 0 },
            { label: 'Featured technologies', value: stats.featuredTechnologies?.length || 0 },
          ].map((item) => (
            <div key={item.label} className="rounded-2xl border border-dark-border/50 bg-dark-card/50 p-6">
              <p className="text-sm text-gray-400">{item.label}</p>
              <p className="mt-2 text-4xl font-bold text-white">{item.value}</p>
            </div>
          ))}
        </div>

        <div className="mt-8 grid gap-6 lg:grid-cols-[1.3fr_0.7fr]">
          <div className="rounded-2xl border border-dark-border/50 bg-dark-card/40 p-6">
            <h3 className="text-xl font-bold text-white mb-4">Recent activity</h3>
            <p className="text-gray-300 mb-4">{stats.activeRepositories ? `${stats.activeRepositories} repositories were updated in the last 90 days.` : 'Recent activity data is not available yet.'}</p>
            <div className="flex flex-wrap gap-2">
              {(stats.activeRepositoryNames || []).map((name) => (
                <span key={name} className="rounded-full border border-neon-cyan/20 bg-neon-cyan/10 px-3 py-1 text-sm text-neon-cyan">
                  {name}
                </span>
              ))}
            </div>
          </div>

          <div className="rounded-2xl border border-dark-border/50 bg-dark-card/40 p-6">
            <h3 className="text-xl font-bold text-white mb-4">Top languages</h3>
            <div className="space-y-3">
              {topLanguages.length > 0 ? topLanguages.slice(0, 4).map((language) => (
                <div key={language.name} className="flex items-center justify-between gap-3 text-sm">
                  <span className="text-gray-300">{language.name}</span>
                  <span className="text-neon-cyan">{language.percentage}%</span>
                </div>
              )) : (
                <p className="text-sm text-gray-400">Language distribution will appear once repositories are loaded.</p>
              )}
            </div>
          </div>
        </div>

        <motion.div initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }} transition={{ delay: 0.2 }} className="mt-8 rounded-2xl border border-dark-border/50 bg-dark-card/40 p-6">
          <h3 className="text-xl font-bold text-white mb-4">Portfolio signals</h3>
          <div className="flex flex-wrap gap-2">
            {(stats.featuredTechnologies || []).map((technology) => (
              <span key={technology} className="rounded-full border border-neon-cyan/20 bg-neon-cyan/10 px-3 py-1 text-sm text-neon-cyan">
                {technology}
              </span>
            ))}
          </div>
        </motion.div>
      </div>
    </section>
  );
};

export default Achievements;
