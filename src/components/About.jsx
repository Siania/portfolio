import { useRevealOnScroll } from '../hooks/useIntersectionObserver';

const education = [
  { name: 'Ivan Franko, Lviv', degree: 'Bachelor of Law', period: '2019–2023' },
  { name: 'University of Turku', degree: 'Exchange', period: '2022–2023' },
  { name: 'Aalto Open University', degree: 'Business & Law', period: '2022–Current' },
  { name: 'Metropolia', degree: 'BBA European Business', period: '2024–Current' },
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
            Law graduate from Ivan Franko National University of Lviv with exchange experience at the
            University of Turku. Currently pursuing BBA at Metropolia and business courses at Aalto
            Open University. Combines legal expertise with digital marketing and event management —
            from GDPR compliance to fundraising campaigns and social media strategy.
          </p>
          <div style={{ display: 'flex', flexWrap: 'wrap', gap: 10 }}>
            {education.map((edu) => (
              <span
                key={edu.name}
                className="glass pill tag-chip"
                style={{ fontSize: 11 }}
                title={`${edu.degree} · ${edu.period}`}
              >
                {edu.name} — {edu.degree}
              </span>
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
