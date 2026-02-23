import { useRevealOnScroll } from '../hooks/useIntersectionObserver';
import { useContactModal } from '../context/ContactModalContext';
import GlassDivider from './GlassDivider';

const marketingTypes = {
  posterDesign: {
    title: 'Poster Design',
    subtitle: 'Event & film promotional materials',
    posters: [
      { name: 'Soldiers of Song', event: 'Film screening', date: '27.04', venue: 'Cinema Orion, Helsinki', tagline: 'Music is our answer to the darkness' },
      { name: 'Ukrainalaisen Elokuvan Päivät', event: 'Ukrainian Film Days', date: '7–10.11.2024', venue: 'Cinema Orion, Helsinki' },
      { name: 'Shchedryk', event: 'Ukrainian Shchedryk Youth Choir concert', date: '20.11', venue: 'Helsinki Cathedral' },
      { name: 'The Rainbow / Raiduha', event: 'Film screening', date: '10.11', venue: 'Cinema Orion, Helsinki' },
    ],
  },
  digitalContent: {
    title: 'Digital Content Strategy',
    cards: [
      {
        org: 'Ukrainalaisten yhdistys Suomessa',
        period: 'May 2024 – May 2025',
        highlight: '1.7M views on Facebook, 396K on Instagram',
        content: [
          'Digital content strategy driving 1.7M views on Facebook, 396K on Instagram',
          'Community engagement and advocacy content',
          'Targeted advertising, optimized posting schedule, interactive content',
        ],
        tags: ['Social Media', '1.7M Views', 'Facebook', 'Instagram', 'Content Strategy'],
      },
    ],
  },
  fundraising: {
    title: 'Fundraising & Campaign Marketing',
    cards: [
      {
        org: 'Ukrainalaisten yhdistys Suomessa',
        period: 'May 2024 – May 2025',
        highlight: '€100,000+ raised',
        content: [
          'Kamina Keräys fundraising campaign',
          'Published in Ilta-Sanomat newspaper',
          'Presented at Helsingin Kirjamessut (Helsinki Book Fair)',
          'MobilePay campaign coordination',
        ],
        tags: ['Fundraising', '€100K+', 'Kamina Keräys', 'Media', 'Partnerships'],
      },
    ],
  },
  visualBrand: {
    title: 'Visual & Brand Design',
    cards: [
      {
        org: 'Ukrainalaisten yhdistys Suomessa',
        period: 'May 2024 – May 2025',
        content: [
          'Poster design for Shchedryk Ukrainian Youth Choir concert at Helsinki Cathedral',
          'Movie posters and promotional materials for marketing campaigns',
          'Brand visuals and social media graphics',
        ],
        tags: ['Poster Design', 'Branding', 'Visuals', 'UGC'],
      },
    ],
  },
  coordination: {
    title: 'Marketing Coordination',
    cards: [
      {
        org: 'VPEB Music',
        period: 'Jun–Sep 2025',
        content: [
          'Coordinate event marketing campaigns',
          'Social media promotion schedules',
          'Community engagement strategies',
        ],
        tags: ['Event Marketing', 'Social Media', 'Community'],
      },
    ],
  },
};

const academic = [
  { title: 'Market Entry Strategy — Rhode Skin into Finland', desc: 'Full marketing plan for US beauty brand entering Finnish market. Competitor analysis, target demographics, digital marketing tactics.', tags: ['Market Research', 'Brand Strategy', 'Finland', 'Beauty Industry'] },
  { title: 'Sustainability Strategy — Nova Post', desc: 'Comprehensive ESG framework presentation aligned with EU sustainability standards.', tags: ['ESG', 'Sustainability', 'Corporate Strategy', 'EU Standards'] },
  { title: 'Applied Project — Visiontech Solutions', desc: 'Business process improvements for multinational operations.', tags: ['Operations', 'Multinational', 'Process Design'] },
];

const tools = [
  'Canva', 'Midjourney', 'DALL-E', 'Kling', 'Runway', 'Social Analytics',
  'MS Office Suite', 'Meta Business', 'Community Management',
];

function SubsectionHeader({ title, subtitle, first }) {
  return (
    <div style={{ marginTop: first ? 0 : 40, marginBottom: 16 }}>
      <h3 style={{ fontFamily: 'var(--font-accent)', fontSize: 20, fontWeight: 600, letterSpacing: '0.05em', color: 'var(--text-primary)', marginBottom: 4 }}>
        {title}
      </h3>
      {subtitle && (
        <p style={{ fontSize: 13, color: 'var(--text-muted)', letterSpacing: '0.04em' }}>{subtitle}</p>
      )}
    </div>
  );
}

export default function MarketingSection({ asPage = false }) {
  const [ref, isVisible] = useRevealOnScroll();
  const { openContactForm } = useContactModal();

  return (
    <>
      {!asPage && <GlassDivider />}
      <section id="marketing" ref={ref} className={isVisible ? 'visible' : ''}>
        <div className="reveal reveal-header">
          <div className="accent-line" style={{ background: 'var(--accent-marketing)' }} />
          <h2 className="section-title">Marketing</h2>
          <p className="section-subtitle">Digital Strategy · Social Media · Brand Growth</p>
        </div>

        <div style={{ maxWidth: 900, margin: '0 auto' }}>
          {/* Poster Design — Designs showcase */}
          <SubsectionHeader title={marketingTypes.posterDesign.title} subtitle={marketingTypes.posterDesign.subtitle} first />
          <div className="glass-deep section-marketing reveal" style={{ padding: 0, borderRadius: 16, marginBottom: 24, overflow: 'hidden' }}>
            <img
              src="/poster-designs.png"
              alt="Poster design portfolio: Soldiers of Song, Ukrainian Film Days, Shchedryk concert, The Rainbow"
              style={{ width: '100%', display: 'block' }}
            />
            <div style={{ padding: 24 }}>
              <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(200px, 1fr))', gap: 16 }}>
                {marketingTypes.posterDesign.posters.map((p) => (
                  <div key={p.name} style={{ fontSize: 14, color: 'var(--text-secondary)' }}>
                    <strong style={{ color: 'var(--text-primary)', display: 'block', marginBottom: 4 }}>{p.name}</strong>
                    <span style={{ color: 'var(--text-muted)' }}>{p.event}</span>
                    <br />
                    <span>{p.date} · {p.venue}</span>
                  </div>
                ))}
              </div>
            </div>
          </div>

          {/* Digital Content Strategy */}
          <SubsectionHeader title={marketingTypes.digitalContent.title} />
          {marketingTypes.digitalContent.cards.map((card, i) => (
            <div key={i} className="glass-deep section-marketing reveal" style={{ padding: 28, borderRadius: 16, marginBottom: 20 }}>
              <h4 style={{ fontFamily: 'var(--font-accent)', fontSize: 16, fontWeight: 600, letterSpacing: '0.04em', marginBottom: 4 }}>{card.org}</h4>
              {card.period && <p style={{ fontSize: 14, color: 'var(--text-muted)', marginBottom: card.highlight ? 8 : 12 }}>{card.period}</p>}
              {card.highlight && (
                <p style={{ fontFamily: 'var(--font-display)', fontSize: 24, fontStyle: 'italic', color: 'var(--accent-marketing)', marginBottom: 12 }}>{card.highlight}</p>
              )}
              <ul style={{ marginBottom: 16, paddingLeft: 20, color: 'var(--text-secondary)', lineHeight: 1.7 }}>
                {card.content.map((line) => <li key={line}>{line}</li>)}
              </ul>
              <div style={{ display: 'flex', flexWrap: 'wrap', gap: 8 }}>
                {card.tags.map((tag) => (
                  <span key={tag} className="tag-chip" style={{ borderColor: 'color-mix(in srgb, var(--accent-marketing) 50%, transparent)' }}>{tag}</span>
                ))}
              </div>
            </div>
          ))}

          {/* Fundraising & Campaign Marketing */}
          <SubsectionHeader title={marketingTypes.fundraising.title} />
          {marketingTypes.fundraising.cards.map((card, i) => (
            <div key={i} className="glass-deep section-marketing reveal" style={{ padding: 28, borderRadius: 16, marginBottom: 20 }}>
              <h4 style={{ fontFamily: 'var(--font-accent)', fontSize: 16, fontWeight: 600, letterSpacing: '0.04em', marginBottom: 4 }}>{card.org}</h4>
              {card.period && <p style={{ fontSize: 14, color: 'var(--text-muted)', marginBottom: card.highlight ? 8 : 12 }}>{card.period}</p>}
              {card.highlight && (
                <p style={{ fontFamily: 'var(--font-display)', fontSize: 24, fontStyle: 'italic', color: 'var(--accent-marketing)', marginBottom: 12 }}>{card.highlight}</p>
              )}
              <ul style={{ marginBottom: 16, paddingLeft: 20, color: 'var(--text-secondary)', lineHeight: 1.7 }}>
                {card.content.map((line) => <li key={line}>{line}</li>)}
              </ul>
              <div style={{ display: 'flex', flexWrap: 'wrap', gap: 8 }}>
                {card.tags.map((tag) => (
                  <span key={tag} className="tag-chip" style={{ borderColor: 'color-mix(in srgb, var(--accent-marketing) 50%, transparent)' }}>{tag}</span>
                ))}
              </div>
            </div>
          ))}

          {/* Visual & Brand Design */}
          <SubsectionHeader title={marketingTypes.visualBrand.title} />
          {marketingTypes.visualBrand.cards.map((card, i) => (
            <div key={i} className="glass-deep section-marketing reveal" style={{ padding: 28, borderRadius: 16, marginBottom: 20 }}>
              <h4 style={{ fontFamily: 'var(--font-accent)', fontSize: 16, fontWeight: 600, letterSpacing: '0.04em', marginBottom: 4 }}>{card.org}</h4>
              {card.period && <p style={{ fontSize: 14, color: 'var(--text-muted)', marginBottom: 12 }}>{card.period}</p>}
              <ul style={{ marginBottom: 16, paddingLeft: 20, color: 'var(--text-secondary)', lineHeight: 1.7 }}>
                {card.content.map((line) => <li key={line}>{line}</li>)}
              </ul>
              <div style={{ display: 'flex', flexWrap: 'wrap', gap: 8 }}>
                {card.tags.map((tag) => (
                  <span key={tag} className="tag-chip" style={{ borderColor: 'color-mix(in srgb, var(--accent-marketing) 50%, transparent)' }}>{tag}</span>
                ))}
              </div>
            </div>
          ))}

          {/* Marketing Coordination */}
          <SubsectionHeader title={marketingTypes.coordination.title} />
          {marketingTypes.coordination.cards.map((card, i) => (
            <div key={i} className="glass-deep section-marketing reveal" style={{ padding: 28, borderRadius: 16, marginBottom: 20 }}>
              <h4 style={{ fontFamily: 'var(--font-accent)', fontSize: 16, fontWeight: 600, letterSpacing: '0.04em', marginBottom: 4 }}>{card.org}</h4>
              {card.period && <p style={{ fontSize: 14, color: 'var(--text-muted)', marginBottom: 12 }}>{card.period}</p>}
              <ul style={{ marginBottom: 16, paddingLeft: 20, color: 'var(--text-secondary)', lineHeight: 1.7 }}>
                {card.content.map((line) => <li key={line}>{line}</li>)}
              </ul>
              <div style={{ display: 'flex', flexWrap: 'wrap', gap: 8 }}>
                {card.tags.map((tag) => (
                  <span key={tag} className="tag-chip" style={{ borderColor: 'color-mix(in srgb, var(--accent-marketing) 50%, transparent)' }}>{tag}</span>
                ))}
              </div>
            </div>
          ))}

          <SubsectionHeader title="Academic Projects" />
          {academic.map((item) => (
            <div key={item.title} className="glass-deep section-marketing reveal" style={{ padding: 28, borderRadius: 16, marginBottom: 20 }}>
              <h4 style={{ fontFamily: 'var(--font-accent)', fontSize: 16, fontWeight: 600, letterSpacing: '0.03em', marginBottom: 8 }}>{item.title}</h4>
              <p style={{ color: 'var(--text-secondary)', lineHeight: 1.7, marginBottom: 12 }}>{item.desc}</p>
              <div style={{ display: 'flex', flexWrap: 'wrap', gap: 8 }}>
                {item.tags.map((tag) => (
                  <span key={tag} className="tag-chip" style={{ borderColor: 'color-mix(in srgb, var(--accent-marketing) 50%, transparent)' }}>{tag}</span>
                ))}
              </div>
            </div>
          ))}

          <SubsectionHeader title="Tools" />
          <div className="glass reveal" style={{ padding: 24, borderRadius: 16, marginBottom: 32 }}>
            <div style={{ display: 'flex', flexWrap: 'wrap', gap: 12, justifyContent: 'center' }}>
              {tools.map((t) => (
                <span key={t} className="tag-chip" style={{ borderColor: 'color-mix(in srgb, var(--accent-marketing) 50%, transparent)' }}>{t}</span>
              ))}
            </div>
          </div>

          <p style={{ fontSize: 14, color: 'var(--text-muted)', marginBottom: 16, textAlign: 'center' }}>Marketing Projects</p>
          <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(200px, 1fr))', gap: 16, maxWidth: 500, margin: '0 auto' }}>
            {[1, 2].map((n) => (
              <div key={n} role="button" tabIndex={0} onClick={openContactForm} onKeyDown={(e) => (e.key === 'Enter' || e.key === ' ') && openContactForm()} className="glass reveal" style={{ padding: 40, borderRadius: 16, border: '2px dashed var(--glass-border)', textAlign: 'center', cursor: 'pointer' }}>
                <span style={{ fontSize: 32, color: 'var(--text-muted)' }}>+</span>
                <p style={{ fontSize: 13, color: 'var(--text-muted)', marginTop: 8 }}>Add Marketing Project</p>
              </div>
            ))}
          </div>
        </div>
      </section>
    </>
  );
}
