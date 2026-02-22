import { useState, useRef, useCallback, useEffect } from 'react';

/**
 * Returns transform values for a 3D tilt effect based on mouse position.
 * Inspired by immersive interactive experiences (e.g. Vibrant Wellness).
 * @param {Object} options
 * @param {number} options.maxTilt - Max rotation in degrees (default 12)
 * @param {number} options.perspective - CSS perspective in px (default 800)
 * @param {number} options.ease - Lerp factor 0–1 for smoothing (default 0.12)
 */
export function useMouseTilt({ maxTilt = 12, perspective = 800, ease = 0.12 } = {}) {
  const ref = useRef(null);
  const [transform, setTransform] = useState({ rotateX: 0, rotateY: 0 });
  const targetRef = useRef({ rotateX: 0, rotateY: 0 });
  const rafRef = useRef(null);

  const handleMouseMove = useCallback(
    (e) => {
      const el = ref.current;
      if (!el) return;

      const rect = el.getBoundingClientRect();
      const x = (e.clientX - rect.left) / rect.width - 0.5;
      const y = (e.clientY - rect.top) / rect.height - 0.5;

      targetRef.current = {
        rotateX: -y * maxTilt,
        rotateY: x * maxTilt,
      };
    },
    [maxTilt]
  );

  const handleMouseLeave = useCallback(() => {
    targetRef.current = { rotateX: 0, rotateY: 0 };
  }, []);

  useEffect(() => {
    const animate = () => {
      const { rotateX: tx, rotateY: ty } = targetRef.current;
      setTransform((prev) => ({
        rotateX: prev.rotateX + (tx - prev.rotateX) * ease,
        rotateY: prev.rotateY + (ty - prev.rotateY) * ease,
      }));
      rafRef.current = requestAnimationFrame(animate);
    };
    rafRef.current = requestAnimationFrame(animate);
    return () => cancelAnimationFrame(rafRef.current);
  }, [ease]);

  useEffect(() => {
    const el = ref.current;
    if (!el) return;
    el.addEventListener('mousemove', handleMouseMove);
    el.addEventListener('mouseleave', handleMouseLeave);
    return () => {
      el.removeEventListener('mousemove', handleMouseMove);
      el.removeEventListener('mouseleave', handleMouseLeave);
    };
  }, [handleMouseMove, handleMouseLeave]);

  const style = {
    transformStyle: 'preserve-3d',
    transform: `perspective(${perspective}px) rotateX(${transform.rotateX}deg) rotateY(${transform.rotateY}deg)`,
    willChange: 'transform',
  };

  return [ref, style];
}
