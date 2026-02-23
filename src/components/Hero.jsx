import { useTypewriter } from '../hooks/useTypewriter';
import { useRevealOnScroll } from '../hooks/useIntersectionObserver';

const roles = ['Junior Privacy Lawyer', 'Event Manager', 'Marketing Strategist', 'BBA Student'];

export default function Hero({ ctaText = 'Explore My Work ↓', onCtaClick }) {
  const displayRole = useTypewriter(roles);
  const [ref, isVisible] = useRevealOnScroll({ threshold: 0.2 });

  return (
    <section
      id="hero"
      ref={ref}
      className={`hero-section ${isVisible ? 'visible' : ''}`}
      style={{
        minHeight: '100vh',
        display: 'flex',
        flexDirection: 'column',
        alignItems: 'center',
        justifyContent: 'center',
        textAlign: 'center',
        padding: '140px 24px 80px',
      }}
    >
      <h1
        className="reveal reveal-header"
        style={{
          fontFamily: 'var(--font-accent)',
          fontSize: 'clamp(2.75rem, 9vw, 4.5rem)',
          fontWeight: 700,
          marginBottom: 16,
          lineHeight: 1.08,
        }}
      >
        <span>Oksana</span>{' '}
        <span>Kozhan</span>
      </h1>

      <p
        className="reveal reveal-header"
        style={{
          fontSize: 'clamp(1rem, 2.5vw, 1.35rem)',
          color: 'var(--text-secondary)',
          minHeight: 32,
          marginBottom: 24,
        }}
      >
        <span>{displayRole}</span>
        <span style={{ opacity: 0.6 }}>|</span>
      </p>

      <p
        className="reveal"
        style={{
          maxWidth: 480,
          fontSize: 16,
          color: 'var(--text-secondary)',
          lineHeight: 1.7,
          marginBottom: 28,
        }}
      >
        Multidisciplinary professional combining Law (LL.B.), Digital Marketing, and Event
        Management — bridging legal compliance, creative campaigns, and community-building.
      </p>

      <div
        className="reveal"
        style={{
          display: 'flex',
          gap: 12,
          flexWrap: 'wrap',
          justifyContent: 'center',
          marginBottom: 40,
        }}
      >
        {['Law', 'Events', 'Marketing'].map((tag) => (
          <span key={tag} className="glass pill tag-chip" style={{ padding: '8px 18px' }}>
            {tag}
          </span>
        ))}
      </div>

      <button
        type="button"
        onClick={onCtaClick}
        className="glass pill reveal"
        style={{
          display: 'inline-block',
          padding: '14px 32px',
          fontFamily: 'var(--font-accent)',
          fontWeight: 600,
          letterSpacing: '0.08em',
          color: 'inherit',
          background: 'none',
          border: '1px solid color-mix(in srgb, var(--accent-neutral) 50%, transparent)',
          boxShadow: '0 0 24px color-mix(in srgb, var(--accent-neutral) 25%, transparent)',
          cursor: 'pointer',
        }}
      >
        {ctaText}
      </button>

      {/* Stats row */}
      <div
        className="reveal"
        style={{
          display: 'flex',
          gap: 24,
          marginTop: 64,
          flexWrap: 'wrap',
          justifyContent: 'center',
        }}
      >
        {[
          { value: '1.7M+', label: 'Social Media Views' },
          { value: '€100,000+', label: 'Funds Raised' },
          { value: '4+', label: 'Languages Spoken' },
        ].map((stat) => (
          <div key={stat.label} className="glass glass-deep" style={{ padding: '20px 32px', borderRadius: 16 }}>
            <div style={{ fontFamily: 'var(--font-numbers)', fontSize: '2rem', fontWeight: 600, letterSpacing: '0.06em', marginBottom: 6 }}>
              {stat.value}
            </div>
            <div style={{ fontFamily: 'var(--font-accent)', fontSize: 12, fontWeight: 600, letterSpacing: '0.08em', textTransform: 'uppercase', color: 'var(--text-secondary)' }}>
              {stat.label}
            </div>
          </div>
        ))}
      </div>
    </section>
  );
}
