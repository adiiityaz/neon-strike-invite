import { motion } from 'framer-motion';
import { QRCodeSVG } from 'qrcode.react';

export const QRCodeSection = () => {
  const currentUrl = typeof window !== 'undefined' ? window.location.href : 'https://aditya-birthday.lovable.app';

  return (
    <section className="py-20 px-4 relative">
      <div className="max-w-md mx-auto">
        <motion.div
          className="glass-card p-8 text-center relative overflow-hidden"
          initial={{ opacity: 0, scale: 0.9 }}
          whileInView={{ opacity: 1, scale: 1 }}
          viewport={{ once: true }}
        >
          {/* Glow effect */}
          <div className="absolute inset-0 bg-gradient-to-br from-neon-purple/10 via-transparent to-neon-pink/10" />
          
          <motion.h3
            className="text-2xl font-display font-bold mb-6 gradient-text"
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            viewport={{ once: true }}
          >
            Scan to Join the Party 🎉
          </motion.h3>

          <motion.div
            className="inline-block p-4 bg-white rounded-2xl relative"
            animate={{ boxShadow: [
              '0 0 20px hsl(260 100% 65% / 0.4)',
              '0 0 40px hsl(330 100% 60% / 0.4)',
              '0 0 20px hsl(195 100% 50% / 0.4)',
              '0 0 20px hsl(260 100% 65% / 0.4)',
            ]}}
            transition={{ duration: 3, repeat: Infinity }}
          >
            <QRCodeSVG
              value={currentUrl}
              size={180}
              level="H"
              includeMargin={false}
              bgColor="white"
              fgColor="#0f172a"
            />
          </motion.div>

          <p className="text-muted-foreground mt-6 text-sm">
            Share with friends and family!
          </p>
        </motion.div>
      </div>
    </section>
  );
};
