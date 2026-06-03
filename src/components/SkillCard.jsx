import { motion } from 'framer-motion';

const SkillCard = ({ skill, icon, index, total }) => {
  const isEven = index % 2 === 0;

  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      whileInView={{ opacity: 1, y: 0 }}
      transition={{ delay: (index % 3) * 0.1, duration: 0.5 }}
      whileHover={{ y: -5 }}
      className="group relative"
    >
      <div className="absolute -inset-0.5 bg-gradient-to-r from-neon-blue via-neon-cyan to-neon-purple rounded-lg opacity-0 group-hover:opacity-75 blur transition duration-300 group-hover:duration-200"></div>
      
      <div className="relative px-4 py-3 bg-dark-card rounded-lg border border-dark-border/50 group-hover:border-neon-cyan/50 transition-all duration-300">
        <div className="flex items-center gap-2">
          <span className="text-2xl">{icon?.emoji || '✨'}</span>
          <span className="text-sm font-medium text-gray-200 group-hover:text-neon-cyan transition-colors">
            {skill}
          </span>
        </div>
        
        {/* Hover glow effect */}
        <div className="absolute inset-0 bg-gradient-to-r from-neon-cyan/0 to-neon-blue/0 group-hover:from-neon-cyan/10 group-hover:to-neon-blue/10 rounded-lg transition-all duration-300"></div>
      </div>
    </motion.div>
  );
};

export default SkillCard;
