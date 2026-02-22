import { useState } from 'react';
import { useRevealOnScroll } from '../hooks/useIntersectionObserver';
import GlassDivider from './GlassDivider';

const subjects = ['Legal Inquiry', 'Event Collaboration', 'Marketing Project', 'General'];

export default function ContactSection({ asPage = false }) {
  const [ref, isVisible] = useRevealOnScroll();
  const [form, setForm] = useState({ name: '', email: '', subject: '', message: '' });

  const handleSubmit = (e) => {
    e.preventDefault();
    const subject = encodeURIComponent(form.subject || 'General');
    const body = encodeURIComponent(`Name: ${form.name}\nEmail: ${form.email}\n\n${form.message}`);
    window.location.href = `mailto:oksana.kozhan.fi@gmail.com?subject=${subject}&body=${body}`;
  };

  return (
    <>
      {!asPage && <GlassDivider />}
      <section id="contact" ref={ref} className={isVisible ? 'visible' : ''}>
        <div className="reveal reveal-header">
          <h2 className="section-title">Contact</h2>
          <p className="section-subtitle">Get in touch — Legal, Events, or Marketing</p>
        </div>

        <div
          className="glass-deep reveal"
          style={{
            maxWidth: 560,
            margin: '0 auto',
            padding: 40,
            borderRadius: 20,
          }}
        >
          <form onSubmit={handleSubmit}>
            <input
              className="glass-input"
              placeholder="Name"
              value={form.name}
              onChange={(e) => setForm((f) => ({ ...f, name: e.target.value }))}
              required
              style={{ marginBottom: 16 }}
            />
            <input
              className="glass-input"
              type="email"
              placeholder="Email"
              value={form.email}
              onChange={(e) => setForm((f) => ({ ...f, email: e.target.value }))}
              required
              style={{ marginBottom: 16 }}
            />
            <select
              className="glass-input"
              value={form.subject}
              onChange={(e) => setForm((f) => ({ ...f, subject: e.target.value }))}
              required
              style={{ marginBottom: 16, cursor: 'pointer' }}
            >
              <option value="">Select subject</option>
              {subjects.map((s) => (
                <option key={s} value={s}>{s}</option>
              ))}
            </select>
            <textarea
              className="glass-input"
              placeholder="Message"
              value={form.message}
              onChange={(e) => setForm((f) => ({ ...f, message: e.target.value }))}
              rows={4}
              required
              style={{ marginBottom: 24 }}
            />
            <button
              type="submit"
              className="glass pill"
              style={{
                padding: '14px 32px',
                cursor: 'pointer',
                border: 'none',
                color: 'inherit',
                fontFamily: 'var(--font-accent)',
                fontWeight: 600,
                letterSpacing: '0.06em',
                fontSize: 14,
                borderColor: 'color-mix(in srgb, var(--accent-neutral) 50%, transparent)',
                boxShadow: '0 0 24px color-mix(in srgb, var(--accent-neutral) 25%, transparent)',
              }}
            >
              Send Message →
            </button>
          </form>
        </div>

        <div className="reveal" style={{ display: 'flex', flexWrap: 'wrap', gap: 16, justifyContent: 'center', marginTop: 32 }}>
          <a href="mailto:oksana.kozhan.fi@gmail.com" className="glass pill tag-chip" style={{ padding: '12px 20px', textDecoration: 'none', color: 'inherit' }}>
            oksana.kozhan.fi@gmail.com
          </a>
          <a href="tel:+358452756660" className="glass pill tag-chip" style={{ padding: '12px 20px', textDecoration: 'none', color: 'inherit' }}>
            +358 452 756 660
          </a>
          <a href="https://www.linkedin.com/in/oksana-kozhan/" target="_blank" rel="noopener noreferrer" className="glass pill tag-chip" style={{ padding: '12px 20px', textDecoration: 'none', color: 'inherit' }}>
            LinkedIn
          </a>
        </div>
      </section>
    </>
  );
}
