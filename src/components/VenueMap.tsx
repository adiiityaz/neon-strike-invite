import { motion } from 'framer-motion';
import { MapPin, ExternalLink } from 'lucide-react';

export const VenueMap = () => {
  const mapUrl = "https://www.google.com/maps/search/?api=1&query=Galaxy+Blue+Sapphire+Plaza+Gaur+City+Sector+4";
  
  return (
    <section className="py-20 px-4 relative">
      <div className="max-w-4xl mx-auto">
        <motion.h2
          className="text-3xl md:text-5xl font-display font-bold text-center mb-12"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
        >
          <span className="gradient-text">Find Us Here</span>
        </motion.h2>

        <motion.div
          className="glass-card p-6 md:p-8 relative overflow-hidden"
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
        >
          {/* Decorative map background */}
          <div className="relative h-64 md:h-80 rounded-xl overflow-hidden bg-muted/30 mb-6">
            {/* Abstract map representation */}
            <div className="absolute inset-0 opacity-30">
              <div className="absolute top-1/4 left-1/4 w-32 h-32 border border-neon-blue/30 rounded-lg rotate-12" />
              <div className="absolute top-1/2 right-1/3 w-24 h-48 border border-neon-purple/30 rounded-lg -rotate-6" />
              <div className="absolute bottom-1/4 left-1/3 w-40 h-20 border border-neon-pink/30 rounded-lg rotate-3" />
              
              {/* Road lines */}
              <div className="absolute top-0 left-1/2 w-1 h-full bg-gradient-to-b from-neon-blue/20 via-neon-purple/20 to-neon-pink/20" />
              <div className="absolute top-1/2 left-0 w-full h-1 bg-gradient-to-r from-neon-pink/20 via-neon-purple/20 to-neon-blue/20" />
            </div>

            {/* Pin marker with pulse */}
            <motion.div
              className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2"
              initial={{ scale: 0 }}
              whileInView={{ scale: 1 }}
              viewport={{ once: true }}
              transition={{ type: 'spring', delay: 0.3 }}
            >
              {/* Pulse rings */}
              <motion.div
                className="absolute inset-0 w-20 h-20 -translate-x-1/2 -translate-y-1/2 border-2 border-neon-pink rounded-full"
                animate={{ scale: [1, 2.5], opacity: [0.8, 0] }}
                transition={{ duration: 2, repeat: Infinity }}
              />
              <motion.div
                className="absolute inset-0 w-20 h-20 -translate-x-1/2 -translate-y-1/2 border-2 border-neon-pink rounded-full"
                animate={{ scale: [1, 2.5], opacity: [0.8, 0] }}
                transition={{ duration: 2, repeat: Infinity, delay: 0.5 }}
              />
              
              {/* Pin icon */}
              <motion.div
                className="relative z-10 bg-neon-pink rounded-full p-4 shadow-lg neon-glow-pink"
                animate={{ y: [0, -5, 0] }}
                transition={{ duration: 2, repeat: Infinity }}
              >
                <MapPin className="w-8 h-8 text-white" />
              </motion.div>
            </motion.div>

            {/* Venue label */}
            <motion.div
              className="absolute top-1/2 left-1/2 translate-x-8 -translate-y-1/2 glass-card px-4 py-2"
              initial={{ opacity: 0, x: 50 }}
              whileInView={{ opacity: 1, x: 8 }}
              viewport={{ once: true }}
              transition={{ delay: 0.6 }}
            >
              <p className="text-sm font-medium text-foreground">Amoeba Gaming Zone</p>
            </motion.div>
          </div>

          {/* Location text */}
          <div className="text-center mb-6">
            <p className="text-muted-foreground">
              Galaxy Blue Sapphire Plaza, Gaur City, Sector-4
            </p>
          </div>

          {/* CTA Button */}
          <motion.a
            href={mapUrl}
            target="_blank"
            rel="noopener noreferrer"
            className="flex items-center justify-center gap-2 w-full md:w-auto md:mx-auto px-8 py-4 bg-gradient-to-r from-neon-purple to-neon-pink rounded-xl font-medium text-white neon-glow-purple transition-all duration-300 hover:scale-105"
            whileHover={{ boxShadow: '0 0 40px hsl(260 100% 65% / 0.5)' }}
            whileTap={{ scale: 0.98 }}
          >
            <ExternalLink className="w-5 h-5" />
            Open in Maps
          </motion.a>
        </motion.div>
      </div>
    </section>
  );
};
