import { useEffect } from 'react';
import { useLocation } from 'react-router-dom';
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
  const { pathname, hash } = useLocation();

  useEffect(() => {
    if (pathname !== '/') return;
    const id = (hash || '').replace(/^#/, '');
    if (!id) return;
    const scroll = () => {
      const el = document.getElementById(id);
      if (el) el.scrollIntoView({ behavior: 'smooth', block: 'start' });
    };
    scroll();
    const t = setTimeout(scroll, 120);
    return () => clearTimeout(t);
  }, [pathname, hash]);

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
