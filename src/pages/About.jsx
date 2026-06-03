import { useRef } from 'react';
import { motion } from 'framer-motion';
import { useScrollAnimation } from '../hooks/useCustom';
import { ASSET_PATHS } from '../utils/constants';

const About = ({ portfolio }) => {
  const sectionRef = useRef(null);
  const isVisible = useScrollAnimation(sectionRef);

  const profile = portfolio?.profile || {};
  const summary = portfolio?.summary || profile.bio || 'MCA student focused on AI, backend engineering, and production-ready software systems.';

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.2,
      },
    },
  };

  const itemVariants = {
    hidden: { opacity: 0, x: -20 },
    visible: {
      opacity: 1,
      x: 0,
      transition: { duration: 0.8 },
    },
  };

  return (
    <section ref={sectionRef} id="about" className="min-h-screen flex items-center py-20 relative overflow-hidden">
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 w-full">
        {/* Section Title */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          className="mb-16"
        >
          <h2 className="text-4xl md:text-5xl font-bold font-['Poppins'] mb-4">
            <span className="gradient-text">About Me</span>
          </h2>
          <div className="w-20 h-1 bg-gradient-to-r from-neon-cyan to-neon-blue rounded-full"></div>
        </motion.div>

        <motion.div
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          className="grid md:grid-cols-2 gap-12 items-center"
        >
          {/* Left - Image */}
          <motion.div
            variants={itemVariants}
            className="relative group"
          >
            <div className="absolute -inset-1 bg-gradient-to-r from-neon-blue via-neon-cyan to-neon-purple rounded-2xl opacity-75 group-hover:opacity-100 blur-xl transition duration-300"></div>
            <div className="relative w-full aspect-square rounded-2xl overflow-hidden bg-dark-card border border-dark-border/50">
              <motion.img
                src={ASSET_PATHS.profilePhoto}
                alt="Khushee Vashisht professional headshot"
                className="w-full h-full object-cover object-top"
                loading="lazy"
                whileHover={{ scale: 1.05 }}
                transition={{ duration: 0.5 }}
              />
              <div className="absolute inset-0 bg-gradient-to-t from-dark-bg/60 to-transparent"></div>
            </div>
          </motion.div>

          {/* Right - Content */}
          <motion.div variants={containerVariants}>
            <motion.p
              variants={itemVariants}
              className="text-gray-300 text-lg leading-relaxed mb-6"
            >
              {summary}
            </motion.p>

            <motion.p
              variants={itemVariants}
              className="text-gray-300 text-lg leading-relaxed mb-6"
            >
              I build around live GitHub evidence: AI/ML experiments, backend services, automation bots, and product-style full stack systems that can be reviewed directly by recruiters.
            </motion.p>

            <motion.p
              variants={itemVariants}
              className="text-gray-300 text-lg leading-relaxed mb-8"
            >
              The portfolio is designed to tell a clear progression story from programming fundamentals to machine learning, generative AI, and production-oriented systems.
            </motion.p>

            <motion.p
              variants={itemVariants}
              className="text-gray-300 text-lg leading-relaxed mb-8"
            >
              The live GitHub repositories are the source of truth, so future work appears here automatically without needing manual content updates.
            </motion.p>

            {/* Highlights */}
            <motion.div
              variants={containerVariants}
              className="grid grid-cols-2 gap-4"
            >
              {[
                { label: 'GitHub handle', value: profile.login || 'KhusheeVashisht' },
                { label: 'Public repositories', value: String(profile.public_repos || portfolio?.stats?.totalRepositories || 0) },
                { label: 'Primary focus', value: 'AI, backend, full stack' },
                { label: 'Portfolio mode', value: 'Live and self-updating' },
              ].map((item, i) => (
                <motion.div
                  key={i}
                  variants={itemVariants}
                  className="p-4 rounded-lg bg-dark-card/50 border border-dark-border/50 hover:border-neon-cyan/50 transition-all"
                >
                  <p className="text-sm text-gray-400 mb-1">{item.label}</p>
                  <p className="text-neon-cyan font-bold">{item.value}</p>
                </motion.div>
              ))}
            </motion.div>
          </motion.div>
        </motion.div>
      </div>
    </section>
  );
};

export default About;
