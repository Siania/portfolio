import { useEffect } from 'react';
import ContactForm from './ContactForm';
import { useContactModal } from '../context/ContactModalContext';

export default function ContactFloatingButton() {
  const { isOpen, openContactForm, closeContactForm } = useContactModal();

  useEffect(() => {
    if (!isOpen) return;
    const handler = (e) => e.key === 'Escape' && closeContactForm();
    document.addEventListener('keydown', handler);
    return () => document.removeEventListener('keydown', handler);
  }, [isOpen, closeContactForm]);

  return (
    <>
      <button
        type="button"
        onClick={openContactForm}
        className="contact-fab glass pill"
        aria-label="Open contact form"
      >
        <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
          <path d="M21 15a2 2 0 0 1-2 2H7l-4 4V5a2 2 0 0 1 2-2h14a2 2 0 0 1 2 2z" />
        </svg>
        <span>Contact</span>
      </button>

      {isOpen && (
        <div
          className="contact-modal-overlay"
          onClick={closeContactForm}
          role="presentation"
        >
          <div
            className="glass-deep contact-modal"
            onClick={(e) => e.stopPropagation()}
          >
            <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', marginBottom: 24 }}>
              <h2 style={{ fontFamily: 'var(--font-accent)', fontSize: 20, fontWeight: 600, letterSpacing: '0.06em' }}>
                Get in touch
              </h2>
              <button
                type="button"
                onClick={closeContactForm}
                aria-label="Close"
                style={{
                  background: 'none',
                  border: 'none',
                  padding: 8,
                  cursor: 'pointer',
                  color: 'var(--text-muted)',
                  fontSize: 24,
                  lineHeight: 1,
                }}
              >
                ×
              </button>
            </div>
            <ContactForm compact onSuccess={closeContactForm} />
            <div style={{ display: 'flex', flexWrap: 'wrap', gap: 12, marginTop: 20, justifyContent: 'center' }}>
              <a href="mailto:oksana.kozhan.fi@gmail.com" className="glass pill tag-chip" style={{ padding: '10px 16px', textDecoration: 'none', color: 'inherit', fontSize: 13 }}>
                Email
              </a>
              <a href="tel:+358452756660" className="glass pill tag-chip" style={{ padding: '10px 16px', textDecoration: 'none', color: 'inherit', fontSize: 13 }}>
                Call
              </a>
              <a href="https://www.linkedin.com/in/oksana-kozhan/" target="_blank" rel="noopener noreferrer" className="glass pill tag-chip" style={{ padding: '10px 16px', textDecoration: 'none', color: 'inherit', fontSize: 13 }}>
                LinkedIn
              </a>
            </div>
          </div>
        </div>
      )}
    </>
  );
}
