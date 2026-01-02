import { motion } from 'framer-motion';
import { Calendar, Clock, MapPin, GamepadIcon, Building2 } from 'lucide-react';

const details = [
  {
    icon: Calendar,
    label: 'Date',
    value: '04 January 2026',
    color: 'neon-purple',
  },
  {
    icon: Clock,
    label: 'Time',
    value: '11:00 AM onwards',
    color: 'neon-yellow',
  },
  {
    icon: GamepadIcon,
    label: 'Activity',
    value: 'Bowling 🎳 + Daru 🍸',
    color: 'neon-pink',
  },
  {
    icon: Building2,
    label: 'Venue',
    value: 'Amoeba Gaming Zone',
    color: 'neon-blue',
  },
  {
    icon: Building2,
    label: 'Cafe',
    value: 'Cafe TGH - Bar & Terrace Dining',
    color: 'neon-purple',
  },
  {
    icon: MapPin,
    label: 'Location',
    value: 'Galaxy Blue Sapphire Plaza, Gaur City, Sector-4',
    color: 'neon-yellow',
  },
];

const colorClasses: Record<string, string> = {
  'neon-purple': 'text-neon-purple bg-neon-purple/10 border-neon-purple/30',
  'neon-pink': 'text-neon-pink bg-neon-pink/10 border-neon-pink/30',
  'neon-blue': 'text-neon-blue bg-neon-blue/10 border-neon-blue/30',
  'neon-yellow': 'text-neon-yellow bg-neon-yellow/10 border-neon-yellow/30',
};

const glowClasses: Record<string, string> = {
  'neon-purple': 'group-hover:shadow-[0_0_30px_hsl(260_100%_65%_/_0.3)]',
  'neon-pink': 'group-hover:shadow-[0_0_30px_hsl(330_100%_60%_/_0.3)]',
  'neon-blue': 'group-hover:shadow-[0_0_30px_hsl(195_100%_50%_/_0.3)]',
  'neon-yellow': 'group-hover:shadow-[0_0_30px_hsl(50_100%_55%_/_0.3)]',
};

export const EventDetails = () => {
  return (
    <section className="py-20 px-4 relative">
      <div className="max-w-4xl mx-auto">
        <motion.h2
          className="text-3xl md:text-5xl font-display font-bold text-center mb-12"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
        >
          <span className="gradient-text">Event Details</span>
        </motion.h2>

        <div className="grid md:grid-cols-2 gap-4 md:gap-6">
          {details.map((detail, index) => (
            <motion.div
              key={detail.label}
              className={`glass-card p-6 group cursor-default transition-all duration-300 ${glowClasses[detail.color]}`}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: index * 0.1 }}
              whileHover={{ scale: 1.02, y: -5 }}
            >
              <div className="flex items-start gap-4">
                <div className={`p-3 rounded-xl border ${colorClasses[detail.color]}`}>
                  <detail.icon className="w-6 h-6" />
                </div>
                <div>
                  <p className="text-sm text-muted-foreground uppercase tracking-wider mb-1">
                    {detail.label}
                  </p>
                  <p className="text-lg md:text-xl font-medium text-foreground">
                    {detail.value}
                  </p>
                </div>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};
