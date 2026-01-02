import { motion } from 'framer-motion';

export const Footer = () => {
  return (
    <footer className="py-16 px-4 relative overflow-hidden">
      {/* Background effect */}
      <div className="absolute inset-0 bg-gradient-to-t from-neon-purple/5 to-transparent" />
      
      <div className="max-w-2xl mx-auto text-center relative z-10">
        <motion.div
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          className="space-y-6"
        >
          {/* Animated bowling pins */}
          <motion.div
            className="flex justify-center gap-2 text-3xl"
            animate={{ y: [0, -5, 0] }}
            transition={{ duration: 2, repeat: Infinity }}
          >
            <span>🎳</span>
            <span className="delay-100">🎉</span>
            <span className="delay-200">✨</span>
            <span className="delay-300">🎳</span>
          </motion.div>

          <motion.p
            className="text-xl md:text-2xl font-display font-medium gradient-text"
            initial={{ opacity: 0, y: 10 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
          >
            Bring your energy — let's strike some fun together!
          </motion.p>

          <motion.p
            className="text-muted-foreground text-sm"
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            viewport={{ once: true }}
            transition={{ delay: 0.3 }}
          >
            Made with 💜 for Aditya's special day
          </motion.p>

          {/* Decorative line */}
          <div className="w-32 h-0.5 mx-auto bg-gradient-to-r from-transparent via-neon-purple to-transparent" />
        </motion.div>
      </div>

      {/* Bottom neon glow */}
      <div className="absolute bottom-0 left-1/2 -translate-x-1/2 w-[400px] h-32 bg-neon-purple/20 blur-3xl rounded-full" />
    </footer>
  );
};
