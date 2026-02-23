import { useActiveSection } from '../hooks/useIntersectionObserver';

const links = [
  { id: 'hero', label: 'HOME' },
  { id: 'about', label: 'ABOUT' },
  { id: 'legal', label: 'LEGAL' },
  { id: 'events', label: 'EVENTS' },
  { id: 'marketing', label: 'MARKETING' },
  { id: 'certifications', label: 'CERTIFICATIONS' },
  { id: 'contact', label: 'CONTACT' },
];

function scrollToSection(id) {
  const el = document.getElementById(id);
  if (el) el.scrollIntoView({ behavior: 'smooth', block: 'start' });
  window.history.replaceState(null, '', id === 'hero' ? '/' : `/#${id}`);
}

export default function Nav() {
  const activeSection = useActiveSection();

  return (
    <nav className="nav-frosted" aria-label="Main navigation">
      <ul>
        {links.map(({ id, label }) => {
          const isActive = (activeSection || 'hero') === id;
          return (
            <li key={id} className={isActive ? 'active' : ''}>
              <button
                type="button"
                onClick={() => scrollToSection(id)}
                onKeyDown={(e) => {
                  if (e.key === 'Enter' || e.key === ' ') {
                    e.preventDefault();
                    scrollToSection(id);
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
