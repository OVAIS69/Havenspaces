import { useRef, useEffect } from 'react';

export default function CircularTransition() {
  const maskRef = useRef<HTMLDivElement>(null);
  const innerRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const mask = maskRef.current;
    const inner = innerRef.current;
    if (!mask || !inner) return;

    let rafId: number | null = null;
    const update = () => {
      rafId = null;
      const aboutEl = document.getElementById('about');
      if (!aboutEl) return;

      const vh = window.innerHeight;
      const vw = window.innerWidth;
      const aboutTop = aboutEl.getBoundingClientRect().top;

      const progress = Math.min(1, Math.max(0, (vh - aboutTop) / vh));
      const hermite = progress * progress * (3 - 2 * progress);
      const radius = hermite * (Math.hypot(vw / 2, vh) + 40);

      const clipVal = `circle(${radius}px at 50% 100%)`;
      mask.style.clipPath = clipVal;
      (mask.style as any).webkitClipPath = clipVal;

      const h2 = aboutEl.querySelector('h2');
      const h2Top = h2 ? h2.getBoundingClientRect().top : aboutTop;
      inner.style.transform = `translate3d(0, ${Math.min(0, h2Top - 90).toFixed(2)}px, 0)`;
    };

    const onScroll = () => {
      if (rafId === null) {
        rafId = requestAnimationFrame(update);
      }
    };

    update();
    window.addEventListener('scroll', onScroll, { passive: true });
    window.addEventListener('resize', update);

    return () => {
      window.removeEventListener('scroll', onScroll);
      window.removeEventListener('resize', update);
      if (rafId !== null) cancelAnimationFrame(rafId);
    };
  }, []);

  return (
    <div
      ref={maskRef}
      aria-hidden="true"
      className="fixed inset-0 pointer-events-none z-[15] bg-black overflow-hidden"
      style={{
        clipPath: 'circle(0px at 50% 100%)',
        WebkitClipPath: 'circle(0px at 50% 100%)',
        willChange: 'clip-path',
      }}
    >
      <div ref={innerRef} className="absolute inset-0" />
    </div>
  );
}
