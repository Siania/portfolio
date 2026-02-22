import { useState } from 'react';

const subjects = ['Legal Inquiry', 'Event Collaboration', 'Marketing Project', 'General'];

export default function ContactForm({ onSuccess, compact = false }) {
  const [form, setForm] = useState({ name: '', email: '', subject: '', message: '' });

  const handleSubmit = (e) => {
    e.preventDefault();
    const subject = encodeURIComponent(form.subject || 'General');
    const body = encodeURIComponent(`Name: ${form.name}\nEmail: ${form.email}\n\n${form.message}`);
    window.location.href = `mailto:oksana.kozhan.fi@gmail.com?subject=${subject}&body=${body}`;
    onSuccess?.();
  };

  return (
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
        rows={compact ? 3 : 4}
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
  );
}
