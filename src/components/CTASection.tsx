import { motion } from 'framer-motion';
import { CalendarPlus, Send } from 'lucide-react';

export const CTASection = () => {
  const handleSaveDate = () => {
    const event = {
      title: "Aditya's Birthday Bash 🎉",
      description: "Bowling Night at Amoeba Gaming Zone! Let's roll, strike & celebrate!",
      location: "Amoeba Gaming Zone, Galaxy Blue Sapphire Plaza, Gaur City, Sector-4",
      startDate: "20260104T180000",
      endDate: "20260104T230000",
    };

    const icsContent = `BEGIN:VCALENDAR
VERSION:2.0
BEGIN:VEVENT
DTSTART:${event.startDate}
DTEND:${event.endDate}
SUMMARY:${event.title}
DESCRIPTION:${event.description}
LOCATION:${event.location}
END:VEVENT
END:VCALENDAR`;

    const blob = new Blob([icsContent], { type: 'text/calendar' });
    const url = URL.createObjectURL(blob);
    const link = document.createElement('a');
    link.href = url;
    link.download = 'aditya-birthday-bash.ics';
    link.click();
    URL.revokeObjectURL(url);
  };

  return (
    <section className="py-20 px-4 relative">
      <div className="max-w-md mx-auto text-center">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="space-y-4"
        >
          {/* Primary CTA */}
          <motion.button
            onClick={handleSaveDate}
            className="w-full flex items-center justify-center gap-3 px-8 py-5 bg-gradient-to-r from-neon-purple via-neon-pink to-neon-purple bg-[length:200%_100%] rounded-xl font-display font-bold text-lg text-white transition-all duration-300"
            animate={{ 
              backgroundPosition: ['0% 50%', '100% 50%', '0% 50%'],
              boxShadow: [
                '0 0 20px hsl(260 100% 65% / 0.4)',
                '0 0 40px hsl(330 100% 60% / 0.5)',
                '0 0 20px hsl(260 100% 65% / 0.4)',
              ]
            }}
            transition={{ duration: 3, repeat: Infinity }}
            whileHover={{ scale: 1.02 }}
            whileTap={{ scale: 0.98 }}
          >
            <CalendarPlus className="w-6 h-6" />
            Save the Date 🎯
          </motion.button>

          {/* Secondary CTA */}
          <motion.button
            className="w-full flex items-center justify-center gap-3 px-8 py-4 glass-card rounded-xl font-display font-medium text-muted-foreground hover:text-foreground transition-colors cursor-not-allowed opacity-70"
            disabled
            whileHover={{ scale: 1.01 }}
          >
            <Send className="w-5 h-5" />
            RSVP Coming Soon
          </motion.button>
        </motion.div>
      </div>
    </section>
  );
};
