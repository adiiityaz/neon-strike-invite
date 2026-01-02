import { useEffect, useState } from 'react';
import { HeroSection } from '@/components/HeroSection';
import { CountdownTimer } from '@/components/CountdownTimer';
import { EventDetails } from '@/components/EventDetails';
import { VenueMap } from '@/components/VenueMap';
import { WhatsAppShare } from '@/components/WhatsAppShare';
import { MusicToggle } from '@/components/MusicToggle';
import { ThemeToggle } from '@/components/ThemeToggle';
import { Footer } from '@/components/Footer';

const Index = () => {
  const [guestName, setGuestName] = useState<string | undefined>();

  useEffect(() => {
    // Get guest name from URL parameter
    const params = new URLSearchParams(window.location.search);
    const name = params.get('guest') || params.get('name');
    if (name) {
      setGuestName(decodeURIComponent(name));
    }

    // Set page title
    document.title = "Aditya's Birthday Bash 🎉 | 04 January 2026";
  }, []);

  return (
    <main className="relative min-h-screen overflow-x-hidden">
      {/* Fixed UI Elements */}
      <ThemeToggle />
      <MusicToggle />
      <WhatsAppShare />

      {/* Main Content */}
      <HeroSection guestName={guestName} />
      
      <section className="py-16 px-4 relative">
        <CountdownTimer />
      </section>

      <EventDetails />
      <VenueMap />
      <Footer />

      {/* SEO Meta Tags */}
      <meta name="description" content="You're invited to Aditya's Birthday Bash! Join us for an epic bowling night at Amoeba Gaming Zone on 04 January 2026." />
      <meta property="og:title" content="Aditya's Birthday Bash 🎉" />
      <meta property="og:description" content="Let's roll, strike & celebrate! Join the party on 04 January 2026 at Amoeba Gaming Zone." />
      <meta property="og:type" content="website" />
    </main>
  );
};

export default Index;
