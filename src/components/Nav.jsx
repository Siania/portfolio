import { useNavigate } from 'react-router-dom';
import { useActiveSection } from '../hooks/useIntersectionObserver';

const links = [
  { id: 'hero', label: 'HOME' },
  { id: 'about', label: 'ABOUT' },
  { id: 'certifications', label: 'CERTS' },
  { id: 'partnerships', label: 'PARTNERS' },
  { id: 'ai', label: 'AI' },
  { id: 'marketing', label: 'MARKETING' },
  { id: 'events', label: 'EVENTS' },
  { id: 'legal', label: 'LEGAL' },
  { id: 'contact', label: 'CONTACT' },
];

export default function Nav() {
  const navigate = useNavigate();
  const activeSection = useActiveSection();

  const goToSection = (id) => {
    if (id === 'hero') {
      navigate('/', { replace: true });
      requestAnimationFrame(() => {
        document.getElementById('hero')?.scrollIntoView({ behavior: 'smooth', block: 'start' });
      });
      return;
    }
    navigate({ pathname: '/', hash: id }, { replace: true });
    requestAnimationFrame(() => {
      document.getElementById(id)?.scrollIntoView({ behavior: 'smooth', block: 'start' });
    });
  };

  return (
    <nav className="nav-frosted" aria-label="Main navigation">
      <ul>
        {links.map(({ id, label }) => {
          const isActive = (activeSection || 'hero') === id;
          return (
            <li key={id} className={isActive ? 'active' : ''}>
              <button
                type="button"
                onClick={() => goToSection(id)}
                onKeyDown={(e) => {
                  if (e.key === 'Enter' || e.key === ' ') {
                    e.preventDefault();
                    goToSection(id);
                  }
                }}
                style={{
                  background: 'none',
                  border: 'none',
                  padding: 0,
                  font: 'inherit',
                  color: 'inherit',
                  cursor: 'pointer',
                  textDecoration: 'none',
                  display: 'block',
                  width: '100%',
                  textAlign: 'inherit',
                }}
              >
                {label}
              </button>
            </li>
          );
        })}
      </ul>
    </nav>
  );
}
