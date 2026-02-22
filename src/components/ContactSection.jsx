import { useRevealOnScroll } from '../hooks/useIntersectionObserver';
import GlassDivider from './GlassDivider';
import ContactForm from './ContactForm';

export default function ContactSection({ asPage = false }) {
  const [ref, isVisible] = useRevealOnScroll();

  return (
    <>
      {!asPage && <GlassDivider />}
      <section id="contact" ref={ref} className={isVisible ? 'visible' : ''}>
        <div className="reveal reveal-header">
          <h2 className="section-title">Contact</h2>
          <p className="section-subtitle">Get in touch — Legal, Events, or Marketing</p>
        </div>

        <div
          className="glass-deep reveal"
          style={{
            maxWidth: 560,
            margin: '0 auto',
            padding: 40,
            borderRadius: 20,
          }}
        >
          <ContactForm />
        </div>

        <div className="reveal" style={{ display: 'flex', flexWrap: 'wrap', gap: 16, justifyContent: 'center', marginTop: 32 }}>
          <a href="mailto:oksana.kozhan.fi@gmail.com" className="glass pill tag-chip" style={{ padding: '12px 20px', textDecoration: 'none', color: 'inherit' }}>
            oksana.kozhan.fi@gmail.com
          </a>
          <a href="tel:+358452756660" className="glass pill tag-chip" style={{ padding: '12px 20px', textDecoration: 'none', color: 'inherit' }}>
            +358 452 756 660
          </a>
          <a href="https://www.linkedin.com/in/oksana-kozhan/" target="_blank" rel="noopener noreferrer" className="glass pill tag-chip" style={{ padding: '12px 20px', textDecoration: 'none', color: 'inherit' }}>
            LinkedIn
          </a>
        </div>
      </section>
    </>
  );
}
