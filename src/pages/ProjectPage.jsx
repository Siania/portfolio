import { useParams, Link } from 'react-router-dom';
import { eventProjects, marketingProjects } from '../data/projects';

export default function ProjectPage() {
  const { slug } = useParams();
  const project = eventProjects[slug] || marketingProjects[slug];
  const section = project?.section || 'events';
  const backHref = `/#${section}`;
  const backLabel = section === 'marketing' ? 'Back to Marketing' : 'Back to Events';
  const sectionClass = section === 'marketing' ? 'section-marketing' : 'section-events';
  const accentBorder = section === 'marketing' ? 'color-mix(in srgb, var(--accent-marketing) 50%, transparent)' : 'color-mix(in srgb, var(--accent-events) 50%, transparent)';

  if (!project) {
    return (
      <div className="scroll-container" style={{ padding: 100, textAlign: 'center' }}>
        <h2>Project not found</h2>
        <Link to="/#events" className="glass pill" style={{ display: 'inline-block', marginTop: 24, padding: '12px 24px', textDecoration: 'none', color: 'inherit' }}>
          ← Back to Events
        </Link>
      </div>
    );
  }

  return (
    <div className="scroll-container" style={{ paddingTop: 100, paddingBottom: 100 }}>
      <div style={{ maxWidth: 720, margin: '0 auto' }}>
        <Link to={backHref} className="glass pill" style={{ display: 'inline-flex', alignItems: 'center', gap: 8, marginBottom: 32, padding: '10px 20px', textDecoration: 'none', color: 'inherit', fontSize: 14 }}>
          ← {backLabel}
        </Link>

        <div className={`glass-deep ${sectionClass}`} style={{ padding: 32, borderRadius: 20, marginBottom: 24 }}>
          <h1 style={{ fontFamily: 'var(--font-accent)', fontSize: 'clamp(1.5rem, 4vw, 2rem)', fontWeight: 700, letterSpacing: '0.04em', marginBottom: 8 }}>
            {project.title} · {project.org}
          </h1>
          {(project.eventName || project.eventDate) && (
            <p style={{ fontSize: 14, color: 'var(--text-muted)', marginBottom: 8 }}>
              {project.eventName}
              {project.eventName && project.eventDate && ' · '}
              {project.eventDate}
              {project.location && !project.signatory && ` · ${project.location}`}
            </p>
          )}
          <p style={{ fontSize: 14, color: 'var(--text-muted)', marginBottom: 24 }}>{project.period}</p>

          {project.image && (
            <div style={{ marginBottom: 32, borderRadius: 16, overflow: 'hidden', boxShadow: '0 8px 32px var(--glass-shadow-dark)', aspectRatio: '16/9' }}>
              <img
                src={project.image}
                alt={project.imageAlt || project.title}
                style={{ width: '100%', height: '100%', display: 'block', objectFit: 'cover' }}
              />
            </div>
          )}

          {(project.responsibilities || project.content) && (
            <div style={{ marginBottom: 32 }}>
              <h3 style={{ fontFamily: 'var(--font-accent)', fontSize: 16, fontWeight: 600, marginBottom: 12, letterSpacing: '0.04em' }}>
                {project.responsibilities ? 'Responsibilities' : 'What I Did'}
              </h3>
              <ul style={{ paddingLeft: 20, color: 'var(--text-secondary)', lineHeight: 1.8 }}>
                {(project.responsibilities || project.content).map((item) => (
                  <li key={item}>{item}</li>
                ))}
              </ul>
            </div>
          )}

          {project.images && project.images.length > 0 && (
            <div style={{ marginBottom: 32 }}>
              <div style={{ display: 'grid', gridTemplateColumns: 'repeat(2, 1fr)', gap: 12 }}>
                {project.images.slice(0, 2).map((img, i) => (
                  <div key={i} style={{ aspectRatio: '4/3', borderRadius: 12, overflow: 'hidden', boxShadow: '0 4px 16px var(--glass-shadow-dark)' }}>
                    <img
                      src={img.src}
                      alt={img.alt || ''}
                      style={{ width: '100%', height: '100%', display: 'block', objectFit: 'cover' }}
                    />
                  </div>
                ))}
              </div>
            </div>
          )}

          {project.certificate && (
            <div style={{ marginBottom: 32 }}>
              <h3 style={{ fontFamily: 'var(--font-accent)', fontSize: 16, fontWeight: 600, marginBottom: 16, letterSpacing: '0.04em' }}>
                Certificate of Recognition
              </h3>
              <img
                src={project.certificate}
                alt="Slush 2025 Volunteer Certificate"
                style={{ width: '100%', maxWidth: 480, height: 'auto', display: 'block', margin: '0 auto', borderRadius: 12, border: '1px solid var(--glass-border)', boxShadow: '0 8px 32px var(--glass-shadow-dark)' }}
              />
            </div>
          )}

          {project.testimonial && (
            <div style={{ marginBottom: 32, padding: 20, borderRadius: 12, background: section === 'marketing' ? 'color-mix(in srgb, var(--accent-marketing) 8%, transparent)' : 'color-mix(in srgb, var(--accent-events) 8%, transparent)', borderLeft: `4px solid ${section === 'marketing' ? 'var(--accent-marketing)' : 'var(--accent-events)'}` }}>
              <blockquote style={{ fontFamily: 'var(--font-display)', fontStyle: 'italic', fontSize: 15, lineHeight: 1.7, color: 'var(--text-secondary)', margin: 0 }}>
                "{project.testimonial}"
              </blockquote>
            </div>
          )}

          {project.images && project.images.length > 2 && (
            <div style={{ marginBottom: 32 }}>
              <div style={{ display: 'grid', gridTemplateColumns: 'repeat(2, 1fr)', gap: 12 }}>
                {project.images.slice(2).map((img, i) => (
                  <div key={i} style={{ aspectRatio: '4/3', borderRadius: 12, overflow: 'hidden', boxShadow: '0 4px 16px var(--glass-shadow-dark)' }}>
                    <img
                      src={img.src}
                      alt={img.alt || ''}
                      style={{ width: '100%', height: '100%', display: 'block', objectFit: 'cover' }}
                    />
                  </div>
                ))}
              </div>
            </div>
          )}

          {project.aboutSlush && (
            <p style={{ fontSize: 15, color: 'var(--text-secondary)', lineHeight: 1.7, marginBottom: 24 }}>
              {project.aboutSlush}
            </p>
          )}

          {project.highlight && (
            <p style={{ fontFamily: 'var(--font-numbers)', fontSize: 28, fontWeight: 600, color: 'var(--accent-events)', marginBottom: 24 }}>
              {project.highlight}
            </p>
          )}

          {project.signatory && (
            <p style={{ fontSize: 14, color: 'var(--text-muted)', marginBottom: 16 }}>
              {project.location} · {project.signatory}
            </p>
          )}

          <div style={{ display: 'flex', flexWrap: 'wrap', gap: 8, marginBottom: project.linkedIn ? 24 : 0 }}>
            {project.tags?.map((tag) => (
              <span key={tag} className="tag-chip" style={{ borderColor: accentBorder }}>
                {tag}
              </span>
            ))}
          </div>

          {project.linkedIn && (
            <a
              href={project.linkedIn}
              target="_blank"
              rel="noopener noreferrer"
              className="glass pill"
              style={{ display: 'inline-flex', alignItems: 'center', gap: 8, padding: '12px 20px', textDecoration: 'none', color: 'inherit', fontSize: 14 }}
            >
              Read full post on LinkedIn →
            </a>
          )}
        </div>
      </div>
    </div>
  );
}
