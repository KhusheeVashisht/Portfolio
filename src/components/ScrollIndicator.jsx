import { motion } from 'framer-motion';
import { FiArrowDown } from 'react-icons/fi';

const ScrollIndicator = () => {
  return (
    <motion.div
      animate={{ y: [0, 10, 0] }}
      transition={{ duration: 2, repeat: Infinity }}
      className="flex flex-col items-center gap-2 text-neon-cyan"
    >
      <span className="text-sm font-medium">Scroll to explore</span>
      <FiArrowDown size={24} />
    </motion.div>
  );
};

export default ScrollIndicator;
