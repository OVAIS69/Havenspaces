import { useRef, useEffect, useState } from 'react';

interface BlurHeadlineProps {
  lines: string[];
  className?: string;
  blurPx?: number;
  mutedOpacity?: number;
  perWordMs?: number;
  staggerMs?: number;
  threshold?: number;
}

export default function BlurHeadline({
  lines,
  className = '',
  blurPx = 18,
  mutedOpacity = 0.12,
  perWordMs = 900,
  staggerMs = 110,
  threshold = 0.4,
}: BlurHeadlineProps) {
  const containerRef = useRef<HTMLDivElement>(null);
  const wordsRef = useRef<(HTMLSpanElement | null)[]>([]);
  const [triggered, setTriggered] = useState(false);

  useEffect(() => {
    const el = containerRef.current;
    if (!el || triggered) return;

    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setTriggered(true);
          observer.disconnect();
        }
      },
      { threshold: [0.15, threshold] }
    );

    observer.observe(el);

    // Immediate fallback check in case already scrolled into view
    const rect = el.getBoundingClientRect();
    if (rect.top < window.innerHeight * 0.85) {
      setTriggered(true);
      observer.disconnect();
    }

    return () => observer.disconnect();
  }, [triggered, threshold]);

  useEffect(() => {
    if (triggered) {
      wordsRef.current.forEach((wordEl, index) => {
        if (!wordEl) return;
        const delay = index * staggerMs;
        wordEl.style.transition = `filter ${perWordMs}ms cubic-bezier(0.22, 1, 0.36, 1) ${delay}ms, opacity ${perWordMs}ms cubic-bezier(0.22, 1, 0.36, 1) ${delay}ms`;
        requestAnimationFrame(() => {
          wordEl.style.filter = 'blur(0px)';
          wordEl.style.opacity = '1';
        });
      });
    }
  }, [triggered, perWordMs, staggerMs]);

  let wordCounter = 0;

  return (
    <div ref={containerRef} className={className}>
      {lines.map((line, lineIdx) => {
        const words = line.split(' ');
        return (
          <div key={lineIdx} className="block">
            {words.map((word, wordIdx) => {
              const currentIdx = wordCounter++;
              return (
                <span key={`${lineIdx}-${wordIdx}`} className="inline">
                  <span
                    ref={(el) => {
                      if (el) wordsRef.current[currentIdx] = el;
                    }}
                    className="inline-block will-change-[filter,opacity]"
                    style={{
                      filter: `blur(${blurPx}px)`,
                      opacity: mutedOpacity,
                    }}
                  >
                    {word}
                  </span>
                  {wordIdx < words.length - 1 ? ' ' : ''}
                </span>
              );
            })}
          </div>
        );
      })}
    </div>
  );
}
