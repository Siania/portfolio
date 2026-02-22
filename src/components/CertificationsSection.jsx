import { useState, useEffect } from 'react';
import { useRevealOnScroll } from '../hooks/useIntersectionObserver';
import GlassDivider from './GlassDivider';

const STORAGE_KEY = 'oksana-certifications';

const initialCerts = [
  { id: '1', name: 'Bachelor of Law', institution: 'Ivan Franko National University of Lviv', year: '2023', link: '/certificates/bachelor-of-law.pdf' },
  { id: '5', name: 'Oksana Kozhan Certificate', institution: 'Certificate', year: '—', link: '/certificates/oksana-kozhan-certificate.pdf' },
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
  const [showModal, setShowModal] = useState(false);
  const [form, setForm] = useState({ name: '', institution: '', year: '', link: '' });

  useEffect(() => {
    localStorage.setItem(STORAGE_KEY, JSON.stringify(certs));
  }, [certs]);

  const addCert = () => {
    if (!form.name.trim()) return;
    setCerts((prev) => [...prev, { ...form, id: Date.now().toString() }]);
    setForm({ name: '', institution: '', year: '', link: '' });
    setShowModal(false);
  };

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
          <div
            className="glass reveal"
            style={{
              padding: 40,
              borderRadius: 16,
              border: '2px dashed var(--glass-border)',
              display: 'flex',
              flexDirection: 'column',
              alignItems: 'center',
              justifyContent: 'center',
              cursor: 'pointer',
            }}
            onClick={() => setShowModal(true)}
          >
            <span style={{ fontSize: 36, color: 'var(--text-muted)', marginBottom: 12 }}>+</span>
            <p style={{ fontSize: 14, color: 'var(--text-muted)' }}>Add Certification</p>
          </div>
        </div>

        {showModal && (
          <div
            style={{
              position: 'fixed',
              inset: 0,
              zIndex: 300,
              display: 'flex',
              alignItems: 'center',
              justifyContent: 'center',
              background: 'rgba(0,0,0,0.6)',
              backdropFilter: 'blur(8px)',
            }}
            onClick={() => setShowModal(false)}
          >
            <div
              className="glass-deep"
              style={{ padding: 32, borderRadius: 20, maxWidth: 400, width: '90%' }}
              onClick={(e) => e.stopPropagation()}
            >
              <h3 style={{ marginBottom: 20, fontFamily: 'var(--font-accent)', fontWeight: 600, letterSpacing: '0.04em' }}>Add Certification</h3>
              <input className="glass-input" placeholder="Certificate Name" value={form.name} onChange={(e) => setForm((f) => ({ ...f, name: e.target.value }))} style={{ marginBottom: 12 }} />
              <input className="glass-input" placeholder="Institution" value={form.institution} onChange={(e) => setForm((f) => ({ ...f, institution: e.target.value }))} style={{ marginBottom: 12 }} />
              <input className="glass-input" placeholder="Year" value={form.year} onChange={(e) => setForm((f) => ({ ...f, year: e.target.value }))} style={{ marginBottom: 12 }} />
              <input className="glass-input" placeholder="Link (optional)" value={form.link} onChange={(e) => setForm((f) => ({ ...f, link: e.target.value }))} style={{ marginBottom: 20 }} />
              <div style={{ display: 'flex', gap: 12 }}>
                <button className="glass pill" style={{ padding: '12px 24px', cursor: 'pointer', border: 'none', color: 'inherit', flex: 1 }} onClick={() => setShowModal(false)}>Cancel</button>
                <button className="glass pill" style={{ padding: '12px 24px', cursor: 'pointer', border: 'none', color: 'inherit', flex: 1, borderColor: 'var(--accent-neutral)', boxShadow: '0 0 20px color-mix(in srgb, var(--accent-neutral) 25%, transparent)' }} onClick={addCert}>Add</button>
              </div>
            </div>
          </div>
        )}
      </section>
    </>
  );
}
