import { useEffect } from 'react';
import Hero from '../components/Hero';
import About from '../components/About';
import LegalSection from '../components/LegalSection';
import EventsSection from '../components/EventsSection';
import MarketingSection from '../components/MarketingSection';
import CertificationsSection from '../components/CertificationsSection';
import ContactSection from '../components/ContactSection';

function scrollToSection(id) {
  const el = document.getElementById(id);
  if (el) {
    el.scrollIntoView({ behavior: 'smooth', block: 'start' });
  }
}

export default function HomePage() {
  useEffect(() => {
    const hash = window.location.hash.slice(1);
    if (hash) {
      const el = document.getElementById(hash);
      if (el) {
        setTimeout(() => el.scrollIntoView({ behavior: 'smooth', block: 'start' }), 100);
      }
    }
  }, []);

  return (
    <div className="scroll-container">
      <Hero onCtaClick={() => scrollToSection('about')} ctaText="Explore My Work ↓" />
      <About />
      <LegalSection asPage={false} />
      <EventsSection asPage={false} />
      <MarketingSection asPage={false} />
      <CertificationsSection asPage={false} />
      <ContactSection asPage={false} />
    </div>
  );
}
