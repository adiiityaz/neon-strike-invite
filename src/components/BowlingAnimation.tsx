import { motion } from 'framer-motion';
import { useState, useEffect } from 'react';

export const BowlingAnimation = () => {
  const [isAnimating, setIsAnimating] = useState(false);
  const [showStrike, setShowStrike] = useState(false);

  useEffect(() => {
    const timer = setTimeout(() => {
      setIsAnimating(true);
    }, 500);

    const strikeTimer = setTimeout(() => {
      setShowStrike(true);
    }, 2000);

    return () => {
      clearTimeout(timer);
      clearTimeout(strikeTimer);
    };
  }, []);

  const pins = [
    { id: 1, x: 0, y: 0 },
    { id: 2, x: -20, y: -25 },
    { id: 3, x: 20, y: -25 },
    { id: 4, x: -40, y: -50 },
    { id: 5, x: 0, y: -50 },
    { id: 6, x: 40, y: -50 },
    { id: 7, x: -60, y: -75 },
    { id: 8, x: -20, y: -75 },
    { id: 9, x: 20, y: -75 },
    { id: 10, x: 60, y: -75 },
  ];

  return (
    <div className="relative w-full h-48 md:h-64 flex items-center justify-center overflow-hidden">
      {/* Bowling Lane */}
      <div className="absolute inset-0 bg-gradient-to-b from-amber-900/20 via-amber-800/10 to-transparent" />
      
      {/* Pins */}
      <div className="relative">
        {pins.map((pin, index) => (
          <motion.div
            key={pin.id}
            className="absolute"
            style={{ left: pin.x, top: pin.y }}
            initial={{ opacity: 1, y: 0, rotate: 0 }}
            animate={isAnimating ? {
              opacity: 0,
              y: [0, -20, 50],
              rotate: [-10, 20, -30, 45],
              x: (Math.random() - 0.5) * 80,
            } : {}}
            transition={{
              duration: 0.8,
              delay: 1.5 + index * 0.05,
              ease: 'easeOut',
            }}
          >
            <div className="w-4 h-8 md:w-5 md:h-10 bg-gradient-to-b from-white to-gray-300 rounded-t-full relative">
              <div className="absolute top-1/3 w-full h-1 bg-neon-pink" />
              <div className="absolute top-1/2 w-full h-1 bg-neon-pink" />
            </div>
          </motion.div>
        ))}
      </div>

      {/* Bowling Ball */}
      <motion.div
        className="absolute bottom-4 left-0"
        initial={{ x: -100, rotate: 0 }}
        animate={isAnimating ? {
          x: ['-100px', '50%'],
          rotate: [0, 720],
        } : { x: -100 }}
        transition={{
          duration: 1.5,
          ease: 'easeInOut',
        }}
      >
        <div className="w-12 h-12 md:w-16 md:h-16 rounded-full bg-gradient-to-br from-neon-purple via-neon-pink to-neon-blue relative neon-glow-purple">
          <div className="absolute top-2 left-3 w-2 h-2 rounded-full bg-black/50" />
          <div className="absolute top-4 left-5 w-2 h-2 rounded-full bg-black/50" />
          <div className="absolute top-2 left-6 w-2 h-2 rounded-full bg-black/50" />
        </div>
      </motion.div>

      {/* Strike Text */}
      <motion.div
        className="absolute inset-0 flex items-center justify-center pointer-events-none"
        initial={{ opacity: 0, scale: 0 }}
        animate={showStrike ? { opacity: 1, scale: 1 } : {}}
        transition={{ type: 'spring', stiffness: 200, damping: 10 }}
      >
        <span className="text-4xl md:text-6xl font-display font-bold gradient-text neon-text">
          STRIKE! 🎳
        </span>
      </motion.div>
    </div>
  );
};
