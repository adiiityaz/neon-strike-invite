import { motion } from 'framer-motion';
import { MessageCircle } from 'lucide-react';

export const WhatsAppShare = () => {
  const message = encodeURIComponent(
    `🎉 You're invited to Aditya's Birthday Bash!\n\n` +
    `📅 Date: 04 January 2026\n` +
    `🎳 Activity: Bowling Night\n` +
    `📍 Venue: Amoeba Gaming Zone, Galaxy Blue Sapphire Plaza, Gaur City, Sector-4\n\n` +
    `Let's roll, strike & celebrate! 🎳✨\n\n` +
    `${typeof window !== 'undefined' ? window.location.href : ''}`
  );

  const whatsappUrl = `https://wa.me/?text=${message}`;

  return (
    <motion.a
      href={whatsappUrl}
      target="_blank"
      rel="noopener noreferrer"
      className="fixed bottom-6 right-6 z-50 p-4 bg-green-500 rounded-full shadow-lg hover:bg-green-600 transition-colors"
      initial={{ scale: 0, opacity: 0 }}
      animate={{ scale: 1, opacity: 1 }}
      transition={{ delay: 2, type: 'spring' }}
      whileHover={{ scale: 1.1 }}
      whileTap={{ scale: 0.95 }}
    >
      <motion.div
        animate={{ y: [0, -5, 0] }}
        transition={{ duration: 1.5, repeat: Infinity }}
      >
        <MessageCircle className="w-6 h-6 text-white" fill="white" />
      </motion.div>
      
      {/* Tooltip */}
      <span className="absolute right-full mr-3 top-1/2 -translate-y-1/2 bg-card px-3 py-2 rounded-lg text-sm font-medium whitespace-nowrap opacity-0 hover:opacity-100 pointer-events-none transition-opacity glass-card">
        Share on WhatsApp
      </span>
    </motion.a>
  );
};
