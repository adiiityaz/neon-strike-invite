import { motion } from 'framer-motion';

const highlights = [
  {
    emoji: '🎳',
    title: 'Bowling Fun',
    description: 'Strike your way to victory',
    gradient: 'from-neon-purple to-neon-pink',
  },
  {
    emoji: '🕹️',
    title: 'Arcade Games',
    description: 'Endless gaming excitement',
    gradient: 'from-neon-blue to-neon-purple',
  },
  {
    emoji: '🎉',
    title: 'Party Vibes',
    description: 'Music, dance & celebration',
    gradient: 'from-neon-pink to-neon-yellow',
  },
];

export const HighlightsSection = () => {
  return (
    <section className="py-20 px-4 relative overflow-hidden">
      {/* Background glow */}
      <div className="absolute inset-0 opacity-20">
        <div className="absolute top-1/2 left-1/4 w-64 h-64 bg-neon-purple rounded-full blur-3xl" />
        <div className="absolute top-1/2 right-1/4 w-64 h-64 bg-neon-pink rounded-full blur-3xl" />
      </div>

      <div className="max-w-4xl mx-auto relative z-10">
        <motion.h2
          className="text-3xl md:text-5xl font-display font-bold text-center mb-12"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
        >
          <span className="gradient-text">Join Here</span>
        </motion.h2>

        <div className="grid md:grid-cols-3 gap-6">
          {highlights.map((item, index) => (
            <motion.div
              key={item.title}
              className="glass-card p-8 text-center group relative overflow-hidden"
              initial={{ opacity: 0, scale: 0.8 }}
              whileInView={{ opacity: 1, scale: 1 }}
              viewport={{ once: true }}
              transition={{ delay: index * 0.15, type: 'spring' }}
              whileHover={{ y: -10 }}
            >
              {/* Hover gradient overlay */}
              <div className={`absolute inset-0 bg-gradient-to-br ${item.gradient} opacity-0 group-hover:opacity-10 transition-opacity duration-300`} />
              
              <motion.div
                className="text-5xl md:text-6xl mb-4 inline-block"
                animate={{ y: [0, -10, 0] }}
                transition={{ duration: 2, repeat: Infinity, delay: index * 0.3 }}
              >
                {item.emoji}
              </motion.div>
              
              <h3 className="text-xl font-display font-bold mb-2 text-foreground">
                {item.title}
              </h3>
              
              <p className="text-muted-foreground text-sm">
                {item.description}
              </p>
            </motion.div>
          ))}
        </div>

        {/* Cafe timing */}
        <motion.div
          className="mt-12 glass-card p-6 text-center"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ delay: 0.4 }}
        >
          <span className="text-2xl mb-3 inline-block">☕🍰</span>
          <p className="text-lg shimmer-text font-medium">
            Cafe TGH - Bar & Terrace Dining | 11 AM onwards
          </p>
        </motion.div>

      </div>
    </section>
  );
};
