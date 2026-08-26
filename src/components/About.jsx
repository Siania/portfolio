import { Link } from 'react-router-dom';
import { useRevealOnScroll } from '../hooks/useIntersectionObserver';

const education = [
  { name: 'Ivan Franko, Lviv', degree: 'Bachelor of Law', period: '2019–2023', slug: 'ivan-franko' },
  { name: 'University of Turku', degree: 'Exchange', period: '2022–2023', slug: 'university-of-turku' },
  { name: 'Aalto Open University', degree: 'Business & Law', period: '2022–Current', slug: 'aalto' },
  { name: 'Metropolia', degree: 'BBA European Business', period: '2024–Current', slug: 'metropolia' },
];

export default function About() {
  const [ref, isVisible] = useRevealOnScroll();

  return (
    <section id="about" ref={ref} className={isVisible ? 'visible' : ''}>
        <div className="reveal reveal-header">
        <h2 className="section-title">About</h2>
        <p className="section-subtitle">Education, background, and journey</p>
      </div>

      <div
        className="reveal about-grid"
        style={{
          display: 'grid',
          gridTemplateColumns: '1fr auto',
          gap: 48,
          alignItems: 'center',
          maxWidth: 960,
          margin: '0 auto',
        }}
      >
        <div>
          <p style={{ color: 'var(--text-secondary)', lineHeight: 1.8, marginBottom: 24, fontSize: 15, textAlign: 'right' }}>
            Partner Relations & Success Manager at ATAS — managing the affiliate program, building partner growth
            strategies, and working from performance data. Repetitive work is automated with AI, certified in Claude
            Code and Oxford&rsquo;s AI programmes. Behind it: an LL.B., privacy-law practice in GDPR and data
            protection, and a BBA in progress at Metropolia.
          </p>
          <div style={{ display: 'flex', flexWrap: 'wrap', gap: 10 }}>
            {education.map((edu) => (
              <Link
                key={edu.slug}
                to={`/education/${edu.slug}`}
                className="glass pill tag-chip"
                style={{ fontSize: 11, textDecoration: 'none', color: 'inherit' }}
                title={`${edu.degree} · ${edu.period}`}
              >
                {edu.name} — {edu.degree} →
              </Link>
            ))}
          </div>
        </div>
        <div style={{ display: 'flex', justifyContent: 'center' }}>
          <div className="profile-photo-glass reveal">
            <div className="profile-photo-frame">
              <img src="/oksana-photo.png" alt="Oksana Kozhan" />
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
