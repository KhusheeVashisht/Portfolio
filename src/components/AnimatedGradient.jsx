import { useEffect } from 'react';
import { motion, useAnimation } from 'framer-motion';
import { useScrollAnimation } from '../hooks/useCustom';

const AnimatedGradient = () => {
  return (
    <div className="fixed inset-0 -z-10 overflow-hidden pointer-events-none">
      {/* Primary gradient blob */}
      <motion.div
        animate={{
          x: [0, 100, -100, 0],
          y: [0, 100, -100, 0],
        }}
        transition={{
          duration: 20,
          repeat: Infinity,
          ease: 'linear',
        }}
        className="absolute top-0 left-0 w-96 h-96 bg-gradient-to-r from-neon-blue/20 to-neon-cyan/20 rounded-full blur-3xl"
      />

      {/* Secondary gradient blob */}
      <motion.div
        animate={{
          x: [100, -100, 100, 0],
          y: [100, -100, 100, 0],
        }}
        transition={{
          duration: 25,
          repeat: Infinity,
          ease: 'linear',
        }}
        className="absolute bottom-0 right-0 w-96 h-96 bg-gradient-to-r from-neon-purple/20 to-neon-blue/20 rounded-full blur-3xl"
      />
    </div>
  );
};

export default AnimatedGradient;
