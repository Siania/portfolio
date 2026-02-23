import { Link } from 'react-router-dom';
import { useRevealOnScroll } from '../hooks/useIntersectionObserver';
import { useContactModal } from '../context/ContactModalContext';
import GlassDivider from './GlassDivider';

const cards = [
  {
    slug: 'nordic-summit',
    title: 'Co-Organizer',
    org: 'Nordic Ukraine Advocacy Summit',
    period: '2025',
    image: '/projects/nordic-summit/group-hall.png',
    imageAlt: 'Nordic Ukraine Advocacy Summit',
    content: [
      'Co-organized a summit dedicated to fostering dialogue and strengthening advocacy efforts for Ukraine within the Nordic region',
      'Brought together CSO representatives from across the Nordic countries to discuss strategies and share insights',
      'Focused on supporting Ukraine\'s sovereignty, democracy, and economic development',
    ],
    tags: ['Advocacy', 'Nordic', 'CSOs', 'Ukraine', 'Summit'],
  },
  {
    slug: 'fundraising',
    title: 'Fundraising & Partnerships',
    org: 'Ukrainalaisten yhdistys Suomessa',
    period: 'May 2024 – May 2025',
    highlight: '€100,000+',
    image: 'https://images.unsplash.com/photo-1528605248644-14dd04022da1?w=800&q=80',
    imageAlt: 'Fundraising and community events',
    content: [
      'Fundraising campaign: raised €100,000+',
      'Partnerships: Helsingin Sanomat, Helsinki Book Fair, Maailma kylässä, Finnish Parliament',
      'Kamina Keräys campaign, MobilePay, published in Ilta-Sanomat',
    ],
    tags: ['Fundraising', '€100K+', 'Government Relations', 'Helsinki', 'Partnerships'],
  },
  {
    slug: 'cultural-events',
    title: 'Cultural Event Coordination',
    org: 'Ukrainalaisten yhdistys Suomessa',
    period: 'May 2024 – May 2025',
    image: 'https://images.unsplash.com/photo-1528605248644-14dd04022da1?w=800&q=80',
    imageAlt: 'Cultural event at Helsinki Cathedral',
    content: [
      'Shchedryk Ukrainian Youth Choir concert at Helsinki Cathedral',
      'Event logistics, venue coordination, promotion',
      'Community engagement for cultural and advocacy events',
    ],
    tags: ['Cultural Events', 'Concert', 'Logistics', 'Community'],
  },
  {
    slug: 'slush',
    title: 'Info Team Volunteer',
    org: 'Slush',
    period: 'Nov 2025',
    image: 'https://images.unsplash.com/photo-1573164713988-8665fc963095?w=800&q=80',
    imageAlt: 'Slush startup event',
    content: [
      'Info team volunteer at Slush 2025 — world\'s leading founder-focused startup event',
      'Guided hundreds of international attendees, critical problem solving, AI-tools for customer support',
      'Process improvement and feedback for 1,600 person event',
    ],
    tags: ['Slush', 'Startup', 'International', 'Volunteer'],
  },
  {
    slug: 'vpeb-music',
    title: 'Marketing Lead',
    org: 'VPEB Music',
    period: 'Jun–Sep 2025',
    image: '/projects/vpeb-music/live-show.png',
    imageAlt: 'Your Mother, Always live acoustic show',
    content: [
      'Event marketing campaigns, social media schedules, sponsor communication, ticketing',
    ],
    tags: ['Music Events', 'Ticketing', 'Sponsor Relations'],
  },
  {
    slug: 'lawyers-association',
    title: 'Event & Content Manager',
    org: 'Association of Lawyers of Ukraine',
    period: 'Sep 2019 – Dec 2022',
    image: 'https://images.unsplash.com/photo-1589829545856-d10d557cf95f?w=800&q=80',
    imageAlt: 'Legal professional event',
    content: ['Legal events for law firms and students, venue and speaker coordination'],
    tags: ['Legal Events', 'Speakers', 'Coordination'],
  },
];

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
                {card.content.map((line) => (
                  <li key={line}>{line}</li>
                ))}
              </ul>
              <div style={{ display: 'flex', flexWrap: 'wrap', gap: 8 }}>
                {card.tags.map((tag) => (
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
