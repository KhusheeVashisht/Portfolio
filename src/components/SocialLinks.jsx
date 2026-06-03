import { motion } from 'framer-motion';
import { FiGithub, FiLinkedin, FiMail } from 'react-icons/fi';
import { FaTwitch, FaInstagram } from 'react-icons/fa';
import { socialLinks } from '../utils/constants';

const SocialLinks = ({ variant = 'default' }) => {
  const socials = [
    { icon: FiGithub, href: socialLinks.github, label: 'GitHub' },
    { icon: FiLinkedin, href: socialLinks.linkedin, label: 'LinkedIn' },
    { icon: FaTwitch, href: socialLinks.twitch, label: 'Twitch' },
    { icon: FaInstagram, href: socialLinks.instagram, label: 'Instagram' },
    { icon: FiMail, href: `mailto:${socialLinks.gmail}`, label: 'Gmail' },
  ];

  return (
    <div className="flex gap-4">
      {socials.map((social, i) => {
        const Icon = social.icon;
        return (
          <motion.a
            key={social.label}
            href={social.href}
            target={social.href.startsWith('mailto:') ? undefined : '_blank'}
            rel={social.href.startsWith('mailto:') ? undefined : 'noopener noreferrer'}
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ delay: i * 0.1 }}
            whileHover={{ scale: 1.2, color: '#06b6d4' }}
            whileTap={{ scale: 0.95 }}
            className={`p-3 rounded-lg border transition-all duration-300 ${
              variant === 'footer'
                ? 'border-dark-border/30 bg-dark-card/30 text-gray-400 hover:bg-dark-card hover:text-neon-cyan'
                : 'border-neon-cyan/30 bg-neon-cyan/5 text-neon-cyan hover:bg-neon-cyan/10'
            }`}
            title={social.label}
            aria-label={social.label}
          >
            <Icon size={24} />
          </motion.a>
        );
      })}
    </div>
  );
};

export default SocialLinks;
