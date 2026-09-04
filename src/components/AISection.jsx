import { useRevealOnScroll } from '../hooks/useIntersectionObserver';
import GlassDivider from './GlassDivider';

const useCases = [
  { title: 'Partner reporting', desc: 'Performance exports turned into per-partner summaries automatically.' },
  { title: 'Partner communication', desc: 'Personalised outreach drafted from each partner’s own numbers.' },
  { title: 'Performance analysis', desc: 'Segmentation and anomaly detection across geo, source, and cohort.' },
  { title: 'Content & creatives', desc: 'First drafts and localisation at speed, edited to brand standard.' },
  { title: 'Compliance checks', desc: 'First-pass review of terms and creatives against a defined checklist.' },
  { title: 'Team enablement', desc: 'Documented workflows that shorten onboarding for new managers.' },
];

const principles = ['Automate the real bottleneck', 'Human review before anything ships', 'Data kept inside sanctioned tools', 'Measured in hours returned'];

const credentials = [
  { name: 'Claude Code in Action', issuer: 'Anthropic Education', year: 'Jun 2026', link: 'https://verify.skilljar.com/c/u9tvqzam8coc' },
  { name: 'AI and Digital Transformation in Government', issuer: 'Saïd Business School, Oxford', year: '2026', link: 'https://certify.sbs.ox.ac.uk/1455bbec-b60d-4933-97ca-aa49db77a990' },
  { name: 'AI, Justice, and the Rule of Law', issuer: 'Saïd Business School, Oxford', year: 'May 2026', link: '/certificates/ai-justice-rule-of-law.pdf' },
  { name: 'Forward', issuer: 'McKinsey.org', year: 'Jun 2026', link: '/certificates/mckinsey-forward.pdf' },
  { name: 'What is design thinking?', issuer: 'IBM SkillsBuild', year: '2026', link: 'https://skills.yourlearning.ibm.com/certificate/share/e0c94b9605ewogICJvYmplY3RUeXBlIiA6ICJBQ1RJVklUWSIsCiAgImxlYXJuZXJDTlVNIiA6ICI4ODIxMjg3UkVHIiwKICAib2JqZWN0SWQiIDogIkFMTS1DT1VSU0VfNDA2NzU1NiIKfQbe95d154cb-10' },
];

const stack = ['Claude', 'Claude Code', 'ChatGPT', 'Google Analytics 4', 'Meta Business Suite', 'Notion', 'Microsoft 365'];

export default function AISection({ asPage = false }) {
  const [ref, isVisible] = useRevealOnScroll();
  const accent = 'var(--accent-ai)';

  return (
    <>
      {!asPage && <GlassDivider />}
      <section id="ai" ref={ref} className={isVisible ? 'visible' : ''}>
        <div className="reveal reveal-header">
          <div className="accent-line" style={{ background: accent }} />
          <h2 className="section-title">AI & Process Optimization</h2>
          <p className="section-subtitle">Automating the work that shouldn&rsquo;t need a human</p>
        </div>

        <div style={{ maxWidth: 900, margin: '0 auto' }}>
          <div className="glass-deep section-ai reveal" style={{ padding: 28, borderRadius: 16, marginBottom: 32 }}>
            <p style={{ fontSize: 16, color: 'var(--text-secondary)', lineHeight: 1.8, margin: 0 }}>
              Reporting, repetitive outreach, and manual checks take most of a partner team&rsquo;s week. I build AI-assisted
              workflows that absorb them — returning the time to partner strategy and negotiation.
            </p>
          </div>

          <h3 style={{ fontFamily: 'var(--font-accent)', fontSize: 20, fontWeight: 600, letterSpacing: '0.05em', marginBottom: 16 }}>
            Applied To
          </h3>
          <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(240px, 1fr))', gap: 16, marginBottom: 32 }}>
            {useCases.map((uc) => (
              <div key={uc.title} className="glass-deep section-ai reveal" style={{ padding: 22, borderRadius: 16 }}>
                <h4 style={{ fontFamily: 'var(--font-accent)', fontSize: 15, fontWeight: 600, letterSpacing: '0.04em', marginBottom: 8 }}>{uc.title}</h4>
                <p style={{ fontSize: 14, color: 'var(--text-secondary)', lineHeight: 1.65, margin: 0 }}>{uc.desc}</p>
              </div>
            ))}
          </div>

          <h3 style={{ fontFamily: 'var(--font-accent)', fontSize: 20, fontWeight: 600, letterSpacing: '0.05em', marginBottom: 16 }}>
            Principles
          </h3>
          <div className="glass reveal" style={{ padding: 24, borderRadius: 16, marginBottom: 32 }}>
            <div style={{ display: 'flex', flexWrap: 'wrap', gap: 10, justifyContent: 'center' }}>
              {principles.map((p) => (
                <span key={p} className="tag-chip" style={{ borderColor: `color-mix(in srgb, ${accent} 50%, transparent)` }}>{p}</span>
              ))}
            </div>
          </div>

          <h3 style={{ fontFamily: 'var(--font-accent)', fontSize: 20, fontWeight: 600, letterSpacing: '0.05em', marginBottom: 16 }}>
            AI Credentials
          </h3>
          <div className="grid-2up" style={{ marginBottom: 32 }}>
            {credentials.map((c) => (
              <a
                key={c.name}
                href={c.link}
                target="_blank"
                rel="noopener noreferrer"
                className="glass-deep section-ai reveal"
                style={{ padding: 20, borderRadius: 16, textDecoration: 'none', color: 'inherit', display: 'block' }}
              >
                <h4 style={{ fontFamily: 'var(--font-accent)', fontSize: 15, fontWeight: 600, letterSpacing: '0.03em', marginBottom: 6 }}>{c.name}</h4>
                <p style={{ fontSize: 13, color: 'var(--text-secondary)', marginBottom: 8 }}>{c.issuer}</p>
                <span className="tag-chip" style={{ borderColor: `color-mix(in srgb, ${accent} 50%, transparent)` }}>{c.year}</span>
                <p style={{ fontSize: 13, color: accent, marginTop: 10 }}>Verify →</p>
              </a>
            ))}
          </div>

          <h3 style={{ fontFamily: 'var(--font-accent)', fontSize: 20, fontWeight: 600, letterSpacing: '0.05em', marginBottom: 16 }}>
            Stack
          </h3>
          <div className="glass reveal" style={{ padding: 24, borderRadius: 16 }}>
            <div style={{ display: 'flex', flexWrap: 'wrap', gap: 12, justifyContent: 'center' }}>
              {stack.map((t) => (
                <span key={t} className="tag-chip" style={{ borderColor: `color-mix(in srgb, ${accent} 50%, transparent)` }}>{t}</span>
              ))}
            </div>
          </div>
        </div>
      </section>
    </>
  );
}
