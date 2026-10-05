import React, { useEffect, useRef, useState } from 'react';

interface RevealProps {
  children: React.ReactNode;
  className?: string;
  delayMs?: number;
  durationMs?: number;
}

export default function Reveal({
  children,
  className = '',
  delayMs = 0,
  durationMs = 800,
}: RevealProps) {
  const ref = useRef<HTMLSpanElement>(null);
  const [visible, setVisible] = useState(false);

  useEffect(() => {
    const el = ref.current;
    if (!el) return;

    let active = true;
    let lastVal: boolean | null = null;
    const update = (isIn: boolean) => {
      if (!active || lastVal === isIn) return;
      lastVal = isIn;
      setVisible(isIn);
    };

    const observer = new IntersectionObserver(
      ([entry]) => update(entry.isIntersecting),
      { threshold: 0.15 }
    );
    observer.observe(el);

    const check = () => {
      if (!active) return;
      const rect = el.getBoundingClientRect();
      const h = window.innerHeight;
      update(rect.top < 0.95 * h && rect.bottom > 0.05 * h);
      requestAnimationFrame(check);
    };
    const id = requestAnimationFrame(check);

    return () => {
      active = false;
      cancelAnimationFrame(id);
      observer.disconnect();
    };
  }, []);

  return (
    <span ref={ref} className={`block overflow-hidden ${className}`} style={{ lineHeight: 'inherit' }}>
      <span
        className="block"
        style={{
          transform: visible ? 'translateY(0)' : 'translateY(110%)',
          transition: `transform ${durationMs}ms cubic-bezier(0.22, 1, 0.36, 1)`,
          transitionDelay: `${delayMs}ms`,
          willChange: 'transform',
        }}
      >
        {children}
      </span>
    </span>
  );
}
