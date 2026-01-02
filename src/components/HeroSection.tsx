import { motion } from 'framer-motion';
import { useEffect, useState } from 'react';
import Confetti from 'react-confetti';
import { FloatingParticles } from './FloatingParticles';
import heroBg from '@/assets/hero-bg.jpg';

interface HeroSectionProps {
  guestName?: string;
}

export const HeroSection = ({ guestName }: HeroSectionProps) => {
  const [showConfetti, setShowConfetti] = useState(false);
  const [windowSize, setWindowSize] = useState({ width: 0, height: 0 });

  useEffect(() => {
    setWindowSize({ width: window.innerWidth, height: window.innerHeight });
    
    const handleResize = () => {
      setWindowSize({ width: window.innerWidth, height: window.innerHeight });
    };
    
    window.addEventListener('resize', handleResize);
    
    const timer = setTimeout(() => setShowConfetti(true), 2000);
    const hideTimer = setTimeout(() => setShowConfetti(false), 7000);
    
    return () => {
      window.removeEventListener('resize', handleResize);
      clearTimeout(timer);
      clearTimeout(hideTimer);
    };
  }, []);

  return (
    <section className="relative min-h-screen flex flex-col items-center justify-center px-4 overflow-hidden">
      {/* Hero Background Image */}
      <div 
        className="absolute inset-0 bg-cover bg-center bg-no-repeat"
        style={{ backgroundImage: `url(${heroBg})` }}
      />
      {/* Dark overlay for text readability */}
      <div className="absolute inset-0 bg-gradient-to-b from-background/70 via-background/50 to-background" />
      <div 
        className="absolute inset-0 opacity-40"
        style={{ background: 'var(--gradient-hero)' }}
      />
      
      <FloatingParticles />
      
      {showConfetti && (
        <Confetti
          width={windowSize.width}
          height={windowSize.height}
          recycle={false}
          numberOfPieces={200}
          colors={['#a855f7', '#ec4899', '#06b6d4', '#eab308']}
        />
      )}

      {/* Guest Greeting */}
      {guestName && (
        <motion.div
          className="text-center mb-6"
          initial={{ opacity: 0, y: -20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.3 }}
        >
          <span className="text-lg md:text-xl text-neon-pink">
            Hey {guestName} 👋
          </span>
          <p className="text-muted-foreground">You're invited!</p>
        </motion.div>
      )}

      {/* Main Title */}
      <motion.div
        className="text-center z-10"
        initial={{ opacity: 0, scale: 0.9 }}
        animate={{ opacity: 1, scale: 1 }}
        transition={{ duration: 0.8, ease: 'easeOut' }}
      >
        <motion.h1 
          className="text-5xl md:text-7xl lg:text-8xl font-display font-bold mb-6"
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.2, duration: 0.8 }}
        >
          <span 
            className="inline-block bg-gradient-to-r from-neon-purple via-neon-pink to-neon-blue bg-clip-text text-transparent drop-shadow-lg"
            style={{ filter: 'drop-shadow(0 0 30px hsl(260 100% 65% / 0.7)) drop-shadow(0 0 60px hsl(330 100% 60% / 0.5))' }}
          >
            Aditya's
          </span>
          <br />
          <span 
            className="text-foreground drop-shadow-lg"
            style={{ textShadow: '0 0 40px hsl(0 0% 100% / 0.3)' }}
          >
            Birthday Bash
          </span>
          <motion.span 
            className="inline-block ml-3"
            animate={{ rotate: [0, 15, -15, 0] }}
            transition={{ duration: 0.5, delay: 1.5, repeat: 3 }}
          >
            🎉
          </motion.span>
        </motion.h1>

        <motion.p
          className="text-xl md:text-2xl shimmer-text font-medium"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 0.8 }}
        >
          Let's roll, strike & celebrate!
        </motion.p>
      </motion.div>

      {/* Decorative bowling emoji */}
      <motion.div
        className="text-6xl md:text-8xl mt-8 z-10"
        initial={{ opacity: 0, scale: 0 }}
        animate={{ opacity: 1, scale: 1 }}
        transition={{ delay: 1, type: 'spring' }}
      >
        🎳
      </motion.div>

      {/* Scroll Indicator */}
      <motion.div
        className="absolute bottom-8 left-1/2 -translate-x-1/2"
        animate={{ y: [0, 10, 0] }}
        transition={{ duration: 2, repeat: Infinity }}
      >
        <div className="w-6 h-10 border-2 border-muted-foreground/50 rounded-full flex justify-center pt-2">
          <motion.div
            className="w-1.5 h-3 bg-neon-pink rounded-full"
            animate={{ y: [0, 12, 0], opacity: [1, 0.5, 1] }}
            transition={{ duration: 2, repeat: Infinity }}
          />
        </div>
      </motion.div>
    </section>
  );
};
