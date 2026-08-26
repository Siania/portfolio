import { Link } from 'react-router-dom';
import { useRevealOnScroll } from '../hooks/useIntersectionObserver';
import { useContactModal } from '../context/ContactModalContext';
import GlassDivider from './GlassDivider';
import { eventProjects, eventOrder } from '../data/projects';

const cards = eventOrder.map((slug) => eventProjects[slug]);

export default function EventsSection({ asPage = false }) {
  const [ref, isVisible] = useRevealOnScroll();
  const { openContactForm } = useContactModal();

  return (
    <>
      {!asPage && <GlassDivider />}
      <section id="events" ref={ref} className={isVisible ? 'visible' : ''}>
        <div className="reveal reveal-header">
          <div className="accent-line" style={{ background: 'var(--accent-events)' }} />
          <h2 className="section-title">Event Management</h2>
          <p className="section-subtitle">Large-Scale Events · Sponsorships · Community</p>
        </div>

        <div style={{ maxWidth: 760, margin: '0 auto' }}>
          {cards.map((card) => (
            <Link
              key={card.slug}
              to={`/projects/${card.slug}`}
              className="glass-deep section-events reveal"
              style={{
                padding: 0,
                borderRadius: 16,
                marginBottom: 20,
                position: 'relative',
                overflow: 'hidden',
                display: 'block',
                textDecoration: 'none',
                color: 'inherit',
              }}
            >
              <div style={{ width: '100%', height: 200, overflow: 'hidden', marginBottom: 0 }}>
                <img
                  src={card.image}
                  alt={card.imageAlt}
                  loading="lazy"
                  style={{
                    width: '100%',
                    height: '100%',
                    objectFit: 'cover',
                    display: 'block',
                  }}
                />
              </div>
              <div style={{ padding: 28 }}>
              <h3 style={{ fontFamily: 'var(--font-accent)', fontSize: 18, fontWeight: 600, letterSpacing: '0.04em', marginBottom: 4 }}>
                {card.title} · {card.org}
              </h3>
              <p style={{ fontSize: 14, color: 'var(--text-muted)', marginBottom: card.highlight ? 8 : 16 }}>
                {card.period}
              </p>
              {card.highlight && (
                <p style={{ fontFamily: 'var(--font-numbers)', fontSize: 28, fontWeight: 600, letterSpacing: '0.04em', color: 'var(--accent-events)', marginBottom: 16 }}>
                  {card.highlight}
                </p>
              )}
              <ul style={{ marginBottom: 16, paddingLeft: 20, color: 'var(--text-secondary)', lineHeight: 1.7 }}>
                {card.summary.map((line) => (
                  <li key={line}>{line}</li>
                ))}
              </ul>
              <div style={{ display: 'flex', flexWrap: 'wrap', gap: 8 }}>
                {card.tags.slice(0, 5).map((tag) => (
                  <span key={tag} className="tag-chip" style={{ borderColor: 'color-mix(in srgb, var(--accent-events) 50%, transparent)' }}>
                    {tag}
                  </span>
                ))}
              </div>
              <p style={{ marginTop: 12, fontSize: 13, color: 'var(--accent-events)' }}>View project →</p>
              </div>
            </Link>
          ))}

          <div className="glass glass-deep reveal" style={{ padding: 24, borderRadius: 16, textAlign: 'center', marginBottom: 32, borderColor: 'color-mix(in srgb, var(--accent-events) 40%, transparent)' }}>
            <p style={{ color: 'var(--text-secondary)', fontSize: 15 }}>
              Multiple major partnerships · €100K+ raised · 1000s of attendees managed
            </p>
          </div>

          <p style={{ fontSize: 14, color: 'var(--text-muted)', marginBottom: 16, textAlign: 'center' }}>
            Event Projects
          </p>
          <div role="button" tabIndex={0} onClick={openContactForm} onKeyDown={(e) => (e.key === 'Enter' || e.key === ' ') && openContactForm()} className="glass reveal" style={{ padding: 40, borderRadius: 16, border: '2px dashed color-mix(in srgb, var(--accent-events) 50%, transparent)', textAlign: 'center', cursor: 'pointer', maxWidth: 200, margin: '0 auto' }}>
            <span style={{ fontSize: 32, color: 'var(--text-muted)' }}>+</span>
            <p style={{ fontSize: 13, color: 'var(--text-muted)', marginTop: 8 }}>Add Event Project</p>
          </div>
        </div>
      </section>
    </>
  );
}
