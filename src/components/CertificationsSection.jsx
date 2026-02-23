import { useState, useEffect } from 'react';
import { useRevealOnScroll } from '../hooks/useIntersectionObserver';
import GlassDivider from './GlassDivider';

const STORAGE_KEY = 'oksana-certifications-v2';

const initialCerts = [
  { id: '1', name: 'Bachelor of Law', institution: 'Ivan Franko National University of Lviv', year: '2023', link: '/certificates/bachelor-of-law.pdf' },
  { id: '5', name: 'SMM Certification', institution: 'Certificate', year: '—', link: '/certificates/oksana-kozhan-certificate.pdf' },
  { id: '2', name: 'Exchange — Law', institution: 'University of Turku', year: '2023', link: '' },
  { id: '3', name: 'BBA (In Progress)', institution: 'Metropolia University of Applied Sciences', year: '2024–Current', link: '' },
  { id: '4', name: 'Business & Law Courses', institution: 'Aalto University Open University', year: '2022–Current', link: '' },
];

export default function CertificationsSection({ asPage = false }) {
  const [ref, isVisible] = useRevealOnScroll();
  const [certs, setCerts] = useState(() => {
    try {
      const stored = localStorage.getItem(STORAGE_KEY);
      if (stored) return JSON.parse(stored);
    } catch (e) {}
    return initialCerts;
  });

  useEffect(() => {
    localStorage.setItem(STORAGE_KEY, JSON.stringify(certs));
  }, [certs]);

  return (
    <>
      {!asPage && <GlassDivider />}
      <section id="certifications" ref={ref} className={isVisible ? 'visible' : ''}>
        <div className="reveal reveal-header">
          <div className="accent-line" style={{ background: 'var(--accent-neutral)' }} />
          <h2 className="section-title">Certifications & Credentials</h2>
        </div>

        <div
          style={{
            display: 'grid',
            gridTemplateColumns: 'repeat(auto-fill, minmax(280px, 1fr))',
            gap: 20,
            maxWidth: 1000,
            margin: '0 auto',
          }}
        >
          {certs.map((cert, i) => (
            <div
              key={cert.id}
              className="glass-deep reveal"
              style={{
                padding: 24,
                borderRadius: 16,
                position: 'relative',
                animationDelay: `${i * 0.1}s`,
              }}
            >
              <div className="glass" style={{ width: 48, height: 48, borderRadius: '50%', display: 'flex', alignItems: 'center', justifyContent: 'center', marginBottom: 16, fontSize: 18 }}>
                {cert.institution[0]}
              </div>
              <h3 style={{ fontFamily: 'var(--font-accent)', fontSize: 16, fontWeight: 600, letterSpacing: '0.03em', marginBottom: 6 }}>{cert.name}</h3>
              <p style={{ fontSize: 14, color: 'var(--text-secondary)', marginBottom: 12 }}>{cert.institution}</p>
              <span className="tag-chip" style={{ marginBottom: 16, display: 'inline-block' }}>{cert.year}</span>
              {cert.link ? (
                <a href={cert.link} target="_blank" rel="noopener noreferrer" className="glass pill" style={{ display: 'inline-block', padding: '8px 16px', fontSize: 13, color: 'inherit', textDecoration: 'none' }}>
                  View Certificate →
                </a>
              ) : (
                <span className="glass pill" style={{ display: 'inline-block', padding: '8px 16px', fontSize: 13, color: 'var(--text-muted)' }}>
                  View Certificate →
                </span>
              )}
            </div>
          ))}
        </div>
      </section>
    </>
  );
}
