import { useRevealOnScroll } from '../hooks/useIntersectionObserver';
import GlassDivider from './GlassDivider';

const cards = [
  {
    title: 'Junior Privacy Lawyer',
    org: 'Legal IT Group',
    period: 'Sep 2025 – Present',
    content: [
      'GDPR & data protection compliance for IT clients in USA and UAE',
      'Drafting privacy policies, DPAs, and compliance documentation',
      'Legal research on emerging tech regulations',
    ],
    tags: ['GDPR', 'DPA Drafting', 'Privacy Law', 'US & UAE', 'Tech Regulation'],
  },
  {
    title: 'Legal Consultant',
    org: 'FinUA (Volunteer)',
    period: 'Jun–Sep 2024',
    content: [
      'Facilitated Finnish–Ukrainian legal communication for incoming refugees',
      'Documentation, case analysis, strategic problem-solving',
    ],
    tags: ['Pro Bono', 'Immigration', 'Legal Aid', 'Ukrainian'],
  },
  {
    title: 'Event & Content Manager',
    org: 'Association of Lawyers of Ukraine',
    period: 'Sep 2019 – Dec 2022',
    content: ['Organized legal events for major law firms and students'],
    tags: ['Legal Events', 'Content Strategy'],
  },
  {
    title: 'Lawyer Assistant',
    org: 'Petryk I.Y., Ukraine',
    period: '2019 – 2022',
    content: [
      'Conducted client consultations and assisted with legal documentation',
      'Analyzed cases and provided strategic problem-solving recommendations',
    ],
    tags: ['Client Consultations', 'Legal Documentation', 'Case Analysis', 'Strategic Advisory'],
  },
];

const skills = [
  'Policy Drafting',
  'Legal Research',
  'Regulatory Compliance',
  'Document Management',
];

const articles = [
  {
    title: 'Key Data Privacy Regulations in the USA: From CCPA to HIPAA in 2026',
    url: 'https://legalitgroup.com/klyuchovi-regulyuvannya-zahystu-personalnyh-danyh-v-ssha-vid-ccpa-do-hipaa-u-2026-roczi/',
    org: 'Legal IT Group',
    tags: ['CCPA', 'CPRA', 'HIPAA', 'US Privacy Law'],
  },
  {
    title: 'GDPR Implementation in Ukraine: Why Ukrainian Companies Pursue Compliance',
    url: 'https://legalitgroup.com/implementacziya-gdpr-v-ukrayini-chomu-ukrayinski-kompaniyi-roblyat-komplayens/',
    org: 'Legal IT Group',
    tags: ['GDPR', 'Ukraine', 'Compliance'],
  },
];

export default function LegalSection({ asPage = false }) {
  const [ref, isVisible] = useRevealOnScroll();

  return (
    <>
      {!asPage && <GlassDivider />}
      <section id="legal" ref={ref} className={isVisible ? 'visible' : ''}>
        <div className="reveal reveal-header">
          <div className="accent-line" style={{ background: 'var(--accent-legal)' }} />
          <h2 className="section-title">Legal</h2>
          <p className="section-subtitle">Privacy Law · GDPR Compliance · Legal Research</p>
        </div>

        <div style={{ maxWidth: 760, margin: '0 auto' }}>
          {cards.map((card, i) => (
            <div
              key={card.org}
              className="glass-deep section-legal reveal"
              style={{
                padding: 28,
                borderRadius: 16,
                marginBottom: 20,
                position: 'relative',
                animationDelay: `${i * 0.1}s`,
              }}
            >
              <h3 style={{ fontFamily: 'var(--font-accent)', fontSize: 18, fontWeight: 600, letterSpacing: '0.04em', marginBottom: 4 }}>
                {card.title} · {card.org}
              </h3>
              <p style={{ fontSize: 14, color: 'var(--text-muted)', marginBottom: 16 }}>{card.period}</p>
              <ul style={{ marginBottom: 16, paddingLeft: 20, color: 'var(--text-secondary)', lineHeight: 1.7 }}>
                {card.content.map((line) => (
                  <li key={line}>{line}</li>
                ))}
              </ul>
              <div style={{ display: 'flex', flexWrap: 'wrap', gap: 8 }}>
                {card.tags.map((tag) => (
                  <span key={tag} className="tag-chip" style={{ borderColor: 'color-mix(in srgb, var(--accent-legal) 50%, transparent)' }}>
                    {tag}
                  </span>
                ))}
              </div>
            </div>
          ))}

          <div className="glass reveal" style={{ padding: 20, borderRadius: 16, marginBottom: 24 }}>
            <div style={{ display: 'flex', flexWrap: 'wrap', gap: 10, justifyContent: 'center' }}>
              {skills.map((s) => (
                <span key={s} className="tag-chip" style={{ borderColor: 'color-mix(in srgb, var(--accent-legal) 50%, transparent)' }}>
                  {s}
                </span>
              ))}
            </div>
          </div>

          <p style={{ fontSize: 14, color: 'var(--text-muted)', marginBottom: 16, textAlign: 'center' }}>
            Articles & Publications
          </p>
          {articles.map((article) => (
            <a
              key={article.url}
              href={article.url}
              target="_blank"
              rel="noopener noreferrer"
              className="glass-deep section-legal reveal"
              style={{
                display: 'block',
                padding: 28,
                borderRadius: 16,
                marginBottom: 20,
                textDecoration: 'none',
                color: 'inherit',
              }}
            >
              <h3 style={{ fontFamily: 'var(--font-accent)', fontSize: 18, fontWeight: 600, letterSpacing: '0.04em', marginBottom: 8 }}>
                {article.title}
              </h3>
              <p style={{ fontSize: 14, color: 'var(--text-muted)', marginBottom: 12 }}>{article.org}</p>
              <div style={{ display: 'flex', flexWrap: 'wrap', gap: 8 }}>
                {article.tags.map((tag) => (
                  <span key={tag} className="tag-chip" style={{ borderColor: 'color-mix(in srgb, var(--accent-legal) 50%, transparent)' }}>
                    {tag}
                  </span>
                ))}
              </div>
              <span style={{ fontSize: 13, color: 'var(--accent-legal)', marginTop: 12, display: 'inline-block' }}>Read article →</span>
            </a>
          ))}
        </div>
      </section>
    </>
  );
}
