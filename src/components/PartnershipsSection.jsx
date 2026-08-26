import { Link } from 'react-router-dom';
import { useRevealOnScroll } from '../hooks/useIntersectionObserver';
import { useContactModal } from '../context/ContactModalContext';
import GlassDivider from './GlassDivider';

const currentRole = {
  slug: 'atas',
  title: 'Partner Relations & Success Manager',
  org: 'ATAS',
  period: '2026 – Current',
  content: [
    'Affiliate program managed end to end — from partner intake to long-term account growth',
    'Individual growth strategies per partner, built on performance data',
    'Commercial terms negotiated across CPA, revenue share, and hybrid structures',
    'Reporting and internal documentation kept accurate, automated where possible',
  ],
  tags: ['Affiliate Program', 'Partner Success', 'Deal Structuring', 'Performance Analytics'],
};

const lifecycle = [
  { stage: '01', title: 'Recruit', desc: 'Partners vetted for audience fit, traffic quality, and compliance.' },
  { stage: '02', title: 'Onboard', desc: 'Tracking, creatives, and terms delivered clearly, so traffic starts fast.' },
  { stage: '03', title: 'Optimize', desc: 'Conversion and cost reviewed weekly; effort follows the data.' },
  { stage: '04', title: 'Grow', desc: 'Proven partners scaled into new geos, formats, and better terms.' },
];

const dealModels = [
  { name: 'CPA', desc: 'Predictable acquisition cost — ideal for testing new partners.' },
  { name: 'Revenue Share', desc: 'Long-term alignment; rewards player quality over volume.' },
  { name: 'Hybrid', desc: 'Covers partner upfront cost while keeping retention shared.' },
  { name: 'Flat / Tenancy', desc: 'Premium placement, measured against the traffic it delivers.' },
];

const metrics = [
  'FTDs & deposit conversion',
  'Click → Registration → Deposit',
  'CPA & payback period',
  'NGR per partner',
  'Retention & churn',
  'Traffic quality',
  'Geo & source segmentation',
];

export default function PartnershipsSection({ asPage = false }) {
  const [ref, isVisible] = useRevealOnScroll();
  const { openContactForm } = useContactModal();

  const accent = 'var(--accent-partners)';

  return (
    <>
      {!asPage && <GlassDivider />}
      <section id="partnerships" ref={ref} className={isVisible ? 'visible' : ''}>
        <div className="reveal reveal-header">
          <div className="accent-line" style={{ background: accent }} />
          <h2 className="section-title">Partnerships & Affiliates</h2>
          <p className="section-subtitle">Affiliate Programs · Partner Success · Performance Analytics</p>
        </div>

        <div style={{ maxWidth: 900, margin: '0 auto' }}>
          {/* Current role */}
          <Link
            to={`/projects/${currentRole.slug}`}
            className="glass-deep section-partners reveal"
            style={{ display: 'block', padding: 28, borderRadius: 16, marginBottom: 32, textDecoration: 'none', color: 'inherit' }}
          >
            <div style={{ display: 'flex', alignItems: 'center', justifyContent: 'space-between', gap: 16, flexWrap: 'wrap', marginBottom: 16 }}>
              <span className="tag-chip" style={{ borderColor: `color-mix(in srgb, ${accent} 60%, transparent)` }}>
                Current role
              </span>
              <span style={{ background: '#fff', borderRadius: 10, padding: '10px 16px', display: 'inline-flex', border: '1px solid rgba(0, 0, 0, 0.08)' }}>
                <img src="/projects/atas/logo.png" alt="ATAS" style={{ height: 22, width: 'auto', display: 'block' }} />
              </span>
            </div>
            <h3 style={{ fontFamily: 'var(--font-accent)', fontSize: 20, fontWeight: 600, letterSpacing: '0.04em', marginBottom: 4 }}>
              {currentRole.title} · {currentRole.org}
            </h3>
            <p style={{ fontSize: 14, color: 'var(--text-muted)', marginBottom: 16 }}>{currentRole.period}</p>
            <ul style={{ marginBottom: 16, paddingLeft: 20, color: 'var(--text-secondary)', lineHeight: 1.75 }}>
              {currentRole.content.map((line) => <li key={line}>{line}</li>)}
            </ul>
            <div style={{ display: 'flex', flexWrap: 'wrap', gap: 8 }}>
              {currentRole.tags.map((tag) => (
                <span key={tag} className="tag-chip" style={{ borderColor: `color-mix(in srgb, ${accent} 50%, transparent)` }}>{tag}</span>
              ))}
            </div>
            <p style={{ marginTop: 14, fontSize: 13, color: accent }}>View role →</p>
          </Link>

          {/* Lifecycle */}
          <h3 style={{ fontFamily: 'var(--font-accent)', fontSize: 20, fontWeight: 600, letterSpacing: '0.05em', marginBottom: 16 }}>
            Partner Lifecycle
          </h3>
          <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(200px, 1fr))', gap: 16, marginBottom: 32 }}>
            {lifecycle.map((step) => (
              <div key={step.stage} className="glass-deep section-partners reveal" style={{ padding: 22, borderRadius: 16 }}>
                <p style={{ fontFamily: 'var(--font-numbers)', fontSize: 12, letterSpacing: '0.12em', color: accent, marginBottom: 8 }}>{step.stage}</p>
                <h4 style={{ fontFamily: 'var(--font-accent)', fontSize: 15, fontWeight: 600, letterSpacing: '0.04em', marginBottom: 8 }}>{step.title}</h4>
                <p style={{ fontSize: 14, color: 'var(--text-secondary)', lineHeight: 1.65, margin: 0 }}>{step.desc}</p>
              </div>
            ))}
          </div>

          {/* Commercial models */}
          <h3 style={{ fontFamily: 'var(--font-accent)', fontSize: 20, fontWeight: 600, letterSpacing: '0.05em', marginBottom: 16 }}>
            Commercial Models
          </h3>
          <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(200px, 1fr))', gap: 16, marginBottom: 32 }}>
            {dealModels.map((model) => (
              <div key={model.name} className="glass-deep section-partners reveal" style={{ padding: 22, borderRadius: 16 }}>
                <h4 style={{ fontFamily: 'var(--font-accent)', fontSize: 16, fontWeight: 600, letterSpacing: '0.06em', color: accent, marginBottom: 8 }}>{model.name}</h4>
                <p style={{ fontSize: 14, color: 'var(--text-secondary)', lineHeight: 1.65, margin: 0 }}>{model.desc}</p>
              </div>
            ))}
          </div>

          {/* Metrics */}
          <h3 style={{ fontFamily: 'var(--font-accent)', fontSize: 20, fontWeight: 600, letterSpacing: '0.05em', marginBottom: 16 }}>
            Metrics
          </h3>
          <div className="glass reveal" style={{ padding: 24, borderRadius: 16, marginBottom: 32 }}>
            <div style={{ display: 'flex', flexWrap: 'wrap', gap: 10, justifyContent: 'center' }}>
              {metrics.map((m) => (
                <span key={m} className="tag-chip" style={{ borderColor: `color-mix(in srgb, ${accent} 50%, transparent)` }}>{m}</span>
              ))}
            </div>
          </div>

          {/* Compliance edge */}
          <div className="glass-deep section-partners reveal" style={{ padding: 28, borderRadius: 16, marginBottom: 32 }}>
            <h3 style={{ fontFamily: 'var(--font-accent)', fontSize: 18, fontWeight: 600, letterSpacing: '0.04em', marginBottom: 8 }}>
              Compliance Built In
            </h3>
            <p style={{ fontSize: 15, color: 'var(--text-secondary)', lineHeight: 1.75, marginBottom: 14 }}>
              An LL.B. and privacy-law practice behind every partner decision — risk caught at onboarding, not at audit.
            </p>
            <div style={{ display: 'flex', flexWrap: 'wrap', gap: 8 }}>
              {['GDPR', 'Responsible Advertising', 'Licensing & Geo', 'Contracts & DPAs'].map((tag) => (
                <span key={tag} className="tag-chip" style={{ borderColor: `color-mix(in srgb, ${accent} 50%, transparent)` }}>{tag}</span>
              ))}
            </div>
          </div>

          <div
            role="button"
            tabIndex={0}
            onClick={openContactForm}
            onKeyDown={(e) => (e.key === 'Enter' || e.key === ' ') && openContactForm()}
            className="glass reveal"
            style={{
              padding: 28,
              borderRadius: 16,
              border: `2px solid color-mix(in srgb, ${accent} 50%, transparent)`,
              backgroundColor: `color-mix(in srgb, ${accent} 12%, transparent)`,
              textAlign: 'center',
              cursor: 'pointer',
              maxWidth: 320,
              margin: '0 auto',
            }}
          >
            <p style={{ fontSize: 15, color: 'var(--text-primary)', fontWeight: 600 }}>Hiring for affiliate or partner growth?</p>
            <p style={{ fontSize: 13, color: accent, marginTop: 6 }}>Let&rsquo;s talk →</p>
          </div>
        </div>
      </section>
    </>
  );
}
