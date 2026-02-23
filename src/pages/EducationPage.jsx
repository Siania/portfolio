import { useParams, Link } from 'react-router-dom';
import { getCourseBySlug, getInstitutionBySlug } from '../data/education';

export default function EducationPage() {
  const { slug } = useParams();
  const course = getCourseBySlug(slug);
  const institution = getInstitutionBySlug(slug);
  if (course) {
    return (
      <div className="scroll-container" style={{ paddingTop: 100, paddingBottom: 100 }}>
        <div style={{ maxWidth: 640, margin: '0 auto' }}>
          <Link to="/#about" className="glass pill" style={{ display: 'inline-flex', alignItems: 'center', gap: 8, marginBottom: 32, padding: '10px 20px', textDecoration: 'none', color: 'inherit', fontSize: 14 }}>
            ← Back to About
          </Link>
          <div className="glass-deep section-legal" style={{ padding: 32, borderRadius: 20, borderLeft: '4px solid var(--accent-legal)' }}>
            <h1 style={{ fontFamily: 'var(--font-accent)', fontSize: 'clamp(1.25rem, 3.5vw, 1.75rem)', fontWeight: 700, letterSpacing: '0.04em', marginBottom: 8 }}>{course.name}</h1>
            {course.nameFi && <p style={{ fontSize: 14, color: 'var(--text-muted)', marginBottom: 8 }}>{course.nameFi}</p>}
            <p style={{ fontSize: 14, color: 'var(--text-muted)', marginBottom: 24 }}>{course.institution} · {course.period}</p>
            <div style={{ display: 'flex', flexWrap: 'wrap', gap: 12 }}>
              <span className="tag-chip" style={{ borderColor: 'color-mix(in srgb, var(--accent-legal) 50%, transparent)' }}>{course.credits} cr</span>
              {course.date && <span className="tag-chip" style={{ borderColor: 'color-mix(in srgb, var(--accent-legal) 50%, transparent)' }}>{course.date}</span>}
              {course.code && <span className="tag-chip" style={{ borderColor: 'color-mix(in srgb, var(--accent-legal) 50%, transparent)' }}>{course.code}</span>}
            </div>
            {course.note && <p style={{ fontSize: 13, color: 'var(--text-muted)', marginTop: 16 }}>Completed at: {course.note}</p>}
          </div>
        </div>
      </div>
    );
  }

  if (institution) {
    return (
      <div className="scroll-container" style={{ paddingTop: 100, paddingBottom: 100 }}>
        <div style={{ maxWidth: 720, margin: '0 auto' }}>
          <Link to="/#about" className="glass pill" style={{ display: 'inline-flex', alignItems: 'center', gap: 8, marginBottom: 32, padding: '10px 20px', textDecoration: 'none', color: 'inherit', fontSize: 14 }}>
            ← Back to About
          </Link>
          <div className="glass-deep section-legal" style={{ padding: 32, borderRadius: 20, borderLeft: '4px solid var(--accent-legal)', marginBottom: 24 }}>
            <h1 style={{ fontFamily: 'var(--font-accent)', fontSize: 'clamp(1.25rem, 3.5vw, 1.75rem)', fontWeight: 700, letterSpacing: '0.04em', marginBottom: 8 }}>{institution.name}</h1>
            <p style={{ fontSize: 14, color: 'var(--text-muted)', marginBottom: institution.description ? 12 : 24 }}>
              {institution.period}
              {institution.programme && ` · ${institution.programme}`}
            </p>
            {institution.description && <p style={{ fontSize: 15, color: 'var(--text-secondary)', lineHeight: 1.7, marginBottom: 24 }}>{institution.description}</p>}
            <h3 style={{ fontFamily: 'var(--font-accent)', fontSize: 16, fontWeight: 600, marginBottom: 16 }}>Courses ({institution.courses.length})</h3>
            <div style={{ display: 'flex', flexWrap: 'wrap', gap: 12 }}>
              {institution.courses.map((c) => (
                <Link
                  key={c.slug}
                  to={`/education/${c.slug}`}
                  className="glass"
                  style={{ padding: '12px 16px', borderRadius: 12, textDecoration: 'none', color: 'inherit', display: 'inline-block', border: '1px solid var(--glass-border)' }}
                >
                  <span style={{ fontWeight: 600, fontSize: 14 }}>{c.name}</span>
                  <span style={{ fontSize: 12, color: 'var(--text-muted)', display: 'block', marginTop: 4 }}>{c.credits} cr</span>
                  <span style={{ fontSize: 11, color: 'var(--accent-legal)', marginTop: 4, display: 'block' }}>View →</span>
                </Link>
              ))}
            </div>
          </div>
        </div>
      </div>
    );
  }

  return (
    <div className="scroll-container" style={{ padding: 100, textAlign: 'center' }}>
      <h2>Not found</h2>
      <Link to="/#about" className="glass pill" style={{ display: 'inline-block', marginTop: 24, padding: '12px 24px', textDecoration: 'none', color: 'inherit' }}>
        ← Back to About
      </Link>
    </div>
  );
}
