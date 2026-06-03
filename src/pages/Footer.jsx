import { motion } from 'framer-motion';
import { FiArrowUp } from 'react-icons/fi';
import SocialLinks from '../components/SocialLinks';
import { navLinks } from '../utils/constants';

const Footer = () => {
  const currentYear = new Date().getFullYear();

  const footerVariants = {
    hidden: { opacity: 0, y: 20 },
    visible: (index) => ({
      opacity: 1,
      y: 0,
      transition: { delay: index * 0.1 },
    }),
  };

  return (
    <footer className="relative border-t border-dark-border/20 bg-dark-bg/50 backdrop-blur py-16">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid gap-10 sm:grid-cols-2 lg:grid-cols-4 mb-12">
          <motion.div
            custom={0}
            variants={footerVariants}
            initial="hidden"
            whileInView="visible"
          >
            <h3 className="text-2xl font-bold gradient-text font-['Poppins'] mb-4">
              Khushee Vashisht
            </h3>
            <p className="text-gray-400 text-sm leading-relaxed">
              A GitHub-driven portfolio that surfaces live repositories, education, categories, and project stories for recruiters.
            </p>
          </motion.div>

          <motion.div
            custom={1}
            variants={footerVariants}
            initial="hidden"
            whileInView="visible"
          >
            <h4 className="font-bold text-white mb-4">Navigation</h4>
            <div className="space-y-2">
              {navLinks.map((link) => (
                <a
                  key={link.id}
                  href={link.href}
                  className="block text-gray-400 hover:text-neon-cyan transition-colors text-sm"
                >
                  {link.label}
                </a>
              ))}
            </div>
          </motion.div>

          <motion.div
            custom={2}
            variants={footerVariants}
            initial="hidden"
            whileInView="visible"
          >
            <h4 className="font-bold text-white mb-4">Resources</h4>
            <div className="space-y-2">
              {[
                { label: 'Downloads', href: '#resume' },
                { label: 'Projects', href: '#projects' },
                { label: 'Repository Explorer', href: '#explorer' },
                { label: 'Education', href: '#education' },
                { label: 'Skills', href: '#skills' },
                { label: 'Contact', href: '#contact' },
              ].map((link) => (
                <a
                  key={link.label}
                  href={link.href}
                  className="block text-gray-400 hover:text-neon-cyan transition-colors text-sm"
                >
                  {link.label}
                </a>
              ))}
            </div>
          </motion.div>

          <motion.div
            custom={3}
            variants={footerVariants}
            initial="hidden"
            whileInView="visible"
          >
            <h4 className="font-bold text-white mb-4">Connect</h4>
            <SocialLinks variant="footer" />
          </motion.div>
        </div>

        <div className="h-px bg-gradient-to-r from-transparent via-dark-border/50 to-transparent mb-8"></div>

        <motion.div
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          transition={{ delay: 0.4 }}
          className="flex flex-col gap-4 md:flex-row md:justify-between md:items-center text-center md:text-left"
        >
          <p className="text-gray-500 text-sm">
            Copyright {currentYear} Khushee Vashisht. All rights reserved.
          </p>
          <div className="flex flex-wrap justify-center gap-6">
            <a href="#privacy" className="text-gray-500 hover:text-neon-cyan transition-colors text-sm">
              Privacy Policy
            </a>
            <a href="#terms" className="text-gray-500 hover:text-neon-cyan transition-colors text-sm">
              Terms of Service
            </a>
          </div>
        </motion.div>

        <motion.button
          initial={{ opacity: 0, y: 10 }}
          whileInView={{ opacity: 1, y: 0 }}
          whileHover={{ y: -3 }}
          onClick={() => window.scrollTo({ top: 0, behavior: 'smooth' })}
          className="fixed bottom-8 right-8 z-40 p-3 rounded-lg bg-neon-cyan/10 border border-neon-cyan/30 text-neon-cyan hover:bg-neon-cyan/20 transition-all"
          title="Back to top"
          aria-label="Back to top"
        >
          <FiArrowUp size={20} />
        </motion.button>
      </div>
    </footer>
  );
};

export default Footer;
