import { useState, useRef, useEffect } from 'react';
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

const ANIMATION_TIME = 600;
const P_COUNT = 12;
const TIME_VARIANCE = 300;
const COLORS = [1, 2, 3, 1, 2, 3, 1, 4];

function scrollToSection(id) {
  const el = document.getElementById(id);
  if (el) el.scrollIntoView({ behavior: 'smooth', block: 'start' });
  window.history.replaceState(null, '', id === 'hero' ? '/' : `/#${id}`);
}

function noise(n = 1) {
  return n / 2 - Math.random() * n;
}

function getXY(distance, pointIndex, totalPoints) {
  const x = distance * Math.cos(((360 + noise(8)) / totalPoints) * pointIndex * (Math.PI / 180));
  const y = distance * Math.sin(((360 + noise(8)) / totalPoints) * pointIndex * (Math.PI / 180));
  return [x, y];
}

function createParticle(i, t, d, r) {
  const minD = d[0];
  const maxD = d[1];
  const rotate = noise(r / 10);
  return {
    start: getXY(minD, P_COUNT - i, P_COUNT),
    end: getXY(maxD + noise(7), P_COUNT - i, P_COUNT),
    time: t,
    scale: 1 + noise(0.2),
    color: COLORS[Math.floor(Math.random() * COLORS.length)],
    rotate: rotate > 0 ? (rotate + r / 20) * 10 : (rotate - r / 20) * 10,
  };
}

export default function Nav() {
  const activeSection = useActiveSection();
  const navRef = useRef(null);
  const effectFilterRef = useRef(null);
  const effectTextRef = useRef(null);
  const liRefs = useRef({});
  const [effectText, setEffectText] = useState('HOME');

  const updateEffectPosition = (el) => {
    if (!el || !effectFilterRef.current || !effectTextRef.current) return;
    const pos = el.getBoundingClientRect();
    const styles = {
      left: `${pos.x}px`,
      top: `${pos.y}px`,
      width: `${pos.width}px`,
      height: `${pos.height}px`,
    };
    Object.assign(effectFilterRef.current.style, styles);
    Object.assign(effectTextRef.current.style, styles);
    effectTextRef.current.classList.remove('hidden');
  };

  const makeParticles = () => {
    const $el = effectFilterRef.current;
    if (!$el) return;

    const d = [90, 10];
    const r = 100;
    const bubbleTime = ANIMATION_TIME * 2 + TIME_VARIANCE;
    $el.style.setProperty('--time', `${bubbleTime}ms`);

    $el.classList.remove('active');
    $el.querySelectorAll('.particle').forEach((p) => p.remove());

    for (let i = 0; i < P_COUNT; i++) {
      const t = ANIMATION_TIME * 2 + noise(TIME_VARIANCE * 2);
      const p = createParticle(i, t, d, r);

      setTimeout(() => {
        const particle = document.createElement('span');
        const point = document.createElement('span');
        particle.className = 'particle';
        particle.style.cssText = `
          --start-x: ${p.start[0]}px;
          --start-y: ${p.start[1]}px;
          --end-x: ${p.end[0]}px;
          --end-y: ${p.end[1]}px;
          --time: ${p.time}ms;
          --scale: ${p.scale};
          --color: var(--color-${p.color}, var(--cream));
          --rotate: ${p.rotate}deg;
        `;
        point.className = 'point';
        particle.append(point);
        $el.append(particle);

        requestAnimationFrame(() => $el.classList.add('active'));

        setTimeout(() => {
          try {
            particle.remove();
          } catch (e) {}
        }, t);
      }, 30);
    }
  };

  const activate = (id, label, el) => {
    if (!el) return;
    updateEffectPosition(el);
    setEffectText(label);

    const nav = navRef.current;
    if (nav) {
      nav.querySelectorAll('li').forEach((li) => li.classList.remove('active'));
      const li = el.closest('li');
      if (li) li.classList.add('active');
    }

    effectTextRef.current?.classList.remove('active');
    setTimeout(() => {
      effectTextRef.current?.classList.add('active');
    }, 100);

    makeParticles();
  };

  useEffect(() => {
    const activeId = activeSection || 'hero';
    const li = liRefs.current[activeId];
    const link = links.find((l) => l.id === activeId);
    if (li && link) {
      updateEffectPosition(li);
      setEffectText(link.label);
      effectTextRef.current?.classList.add('active');
    }
  }, [activeSection]);

  useEffect(() => {
    const ro = new ResizeObserver(() => {
      const activeId = activeSection || 'hero';
      const li = liRefs.current[activeId];
      if (li) updateEffectPosition(li);
    });
    ro.observe(document.body);
    return () => ro.disconnect();
  }, [activeSection]);

  useEffect(() => {
    const run = () => {
      const activeId = activeSection || 'hero';
      const li = liRefs.current[activeId];
      const link = links.find((l) => l.id === activeId);
      if (li && link) {
        updateEffectPosition(li);
        setEffectText(link.label);
        effectTextRef.current?.classList.remove('hidden');
        effectTextRef.current?.classList.add('active');
      }
    };
    run();
    const t = setTimeout(run, 100);
    return () => clearTimeout(t);
  }, []);

  /* Initial particle burst on load (like original CodePen) */
  useEffect(() => {
    const t = setTimeout(() => {
      const li = liRefs.current['hero'];
      if (li) activate('hero', 'HOME', li);
    }, 250);
    return () => clearTimeout(t);
  }, []);

  return (
    <>
      <nav ref={navRef} className="nav-frosted" aria-label="Main navigation">
        <ul>
          {links.map(({ id, label }) => {
            const isActive = (activeSection || 'hero') === id;
            return (
              <li
                key={id}
                ref={(node) => { liRefs.current[id] = node; }}
                className={isActive ? 'active' : ''}
              >
                <button
                  type="button"
                  onClick={() => {
                    scrollToSection(id);
                    const li = liRefs.current[id];
                    if (li) activate(id, label, li);
                  }}
                  onKeyDown={(e) => {
                    if ((e.key === 'Enter' || e.key === ' ') && e.currentTarget.closest('li')) {
                      e.preventDefault();
                      activate(id, label, e.currentTarget.closest('li'));
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

      {/* Gooey effect layer - positioned over active nav item */}
      <span
        ref={effectFilterRef}
        className="effect filter"
        aria-hidden="true"
      />
      <span
        ref={effectTextRef}
        className="effect text active hidden"
        aria-hidden="true"
      >
        {effectText}
      </span>
    </>
  );
}
