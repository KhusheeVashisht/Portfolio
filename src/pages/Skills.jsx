import { useMemo, useRef, useState } from 'react';
import { motion } from 'framer-motion';
import { useScrollAnimation } from '../hooks/useCustom';

const Skills = ({ portfolio }) => {
  const sectionRef = useRef(null);
  useScrollAnimation(sectionRef);
  const [selectedCategory, setSelectedCategory] = useState('All Skills');

  const skillGroups = portfolio?.skills?.groups || [];

  const categories = useMemo(() => ['All Skills', ...skillGroups.map((group) => group.title)], [skillGroups]);

  const displayedGroups = selectedCategory === 'All Skills'
    ? skillGroups
    : skillGroups.filter((group) => group.title === selectedCategory);

  const highlightedTechnologies = portfolio?.skills?.allSkills || [];

  return (
    <section ref={sectionRef} id="skills" className="min-h-screen flex items-center py-20 relative">
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 w-full">
        <motion.div initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }} transition={{ duration: 0.8 }} className="mb-10">
          <div className="inline-flex items-center rounded-full border border-neon-cyan/20 bg-neon-cyan/10 px-4 py-2 text-xs font-semibold uppercase tracking-[0.25em] text-neon-cyan mb-5">
            Skills Overview
          </div>
          <h2 className="text-4xl md:text-5xl font-bold font-['Poppins'] mb-4">
            <span className="gradient-text">Generated From Repositories</span>
          </h2>
          <div className="w-20 h-1 rounded-full bg-gradient-to-r from-neon-cyan to-neon-blue"></div>
          <p className="mt-4 max-w-3xl text-gray-400">
            These skill groups are inferred from repository languages, READMEs, topics, and deployment details rather than a manually maintained list.
          </p>
        </motion.div>

        <motion.div initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }} transition={{ delay: 0.1 }} className="flex flex-wrap gap-3 mb-10">
          {categories.map((category) => (
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
            </motion.button>
          ))}
        </motion.div>

        <div className="grid gap-6 md:grid-cols-2 xl:grid-cols-3">
          {displayedGroups.map((group, index) => (
            <motion.div
              key={group.title}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ delay: index * 0.08 }}
              className="group rounded-2xl border border-dark-border/50 bg-dark-card/40 p-6 backdrop-blur transition-all hover:border-neon-cyan/50 hover:bg-dark-card/60"
            >
              <h3 className="text-xl font-bold text-white group-hover:text-neon-cyan transition-colors mb-4">{group.title}</h3>
              <div className="flex flex-wrap gap-2">
                {group.skills.map((skill) => (
                  <span key={skill} className="rounded-full border border-neon-cyan/20 bg-neon-cyan/10 px-3 py-1 text-sm text-neon-cyan">
                    {skill}
                  </span>
                ))}
              </div>
            </motion.div>
          ))}
        </div>

        {highlightedTechnologies.length > 0 && (
          <motion.div initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }} transition={{ delay: 0.2 }} className="mt-12 rounded-2xl border border-dark-border/50 bg-dark-card/30 p-6">
            <h3 className="text-lg font-bold text-white mb-4">Most visible technologies</h3>
            <div className="flex flex-wrap gap-2">
              {highlightedTechnologies.map((technology) => (
                <span key={technology} className="rounded-full border border-dark-border/60 bg-dark-bg/40 px-3 py-1 text-sm text-gray-300">
                  {technology}
                </span>
              ))}
            </div>
          </motion.div>
        )}
      </div>
    </section>
  );
};

export default Skills;
