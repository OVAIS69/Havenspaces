import { useRef, useEffect } from 'react';
import BlurHeadline from './BlurHeadline';

interface CardRevealProps {
  children: React.ReactNode;
  className?: string;
  offsetY?: number;
  revealFrom?: number;
  revealTo?: number;
}

function CardReveal({
  children,
  className = '',
  offsetY = 120,
  revealFrom = 0,
  revealTo = 0.4,
}: CardRevealProps) {
  const outerRef = useRef<HTMLDivElement>(null);
  const innerRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const outer = outerRef.current;
    const inner = innerRef.current;
    if (!outer || !inner) return;

    let rafId: number | null = null;
    const update = () => {
      rafId = null;
      const rect = outer.getBoundingClientRect();
      const h = window.innerHeight;
      const rawProgress = Math.min(1, Math.max(0, (h - rect.top) / rect.height));
      const span = Math.max(0.0001, revealTo - revealFrom);
      const clamped = Math.min(1, Math.max(0, (rawProgress - revealFrom) / span));
      const hermite = clamped * clamped * (3 - 2 * clamped);
      const transY = offsetY * (1 - hermite);
      inner.style.transform = `translate3d(0, ${transY.toFixed(2)}px, 0)`;
      inner.style.opacity = String(Math.min(1, 1.5 * clamped));
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
  }, [offsetY, revealFrom, revealTo]);

  return (
    <div ref={outerRef} className={className}>
      <div
        ref={innerRef}
        style={{
          opacity: 0,
          transform: `translate3d(0, ${offsetY}px, 0)`,
          willChange: 'transform, opacity',
        }}
      >
        {children}
      </div>
    </div>
  );
}

function ParallaxContainer({
  children,
  className = '',
  speed = 10,
}: {
  children: React.ReactNode;
  className?: string;
  speed?: number;
}) {
  const ref = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const el = ref.current;
    if (!el) return;

    let rafId: number | null = null;
    const update = () => {
      rafId = null;
      const rect = el.getBoundingClientRect();
      const h = window.innerHeight;
      const offset = -((rect.top + rect.height / 2 - h / 2) / h) * speed * 10;
      el.style.transform = `translate3d(0, ${offset.toFixed(2)}px, 0)`;
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
  }, [speed]);

  return (
    <div ref={ref} className={className} style={{ willChange: 'transform' }}>
      {children}
    </div>
  );
}

interface WorkCardsProps {
  onSelectProject?: (projectId: string) => void;
}

export default function WorkCards({ onSelectProject }: WorkCardsProps) {
  const handleProjectClick = (e: React.MouseEvent, id: string) => {
    if (onSelectProject) {
      e.preventDefault();
      onSelectProject(id);
    }
  };

  return (
    <section id="work" className="relative max-w-[1720px] mx-auto px-4 md:px-6 pb-24 md:pb-32 lg:pb-40 scroll-mt-24">
      {/* Sticky background headline that blurs into view */}
      <div className="sticky top-0 h-screen z-0 pointer-events-none">
        <div className="h-full flex items-center justify-center px-6">
          <div className="hidden md:block">
            <BlurHeadline
              lines={[
                'I define strategy,',
                'talk with the users and',
                'ship things that move the business',
              ]}
              blurPx={18}
              mutedOpacity={0.12}
              perWordMs={900}
              staggerMs={110}
              threshold={0.4}
              className="font-sans font-[700] text-black text-center leading-[1.02] tracking-[-0.02em] text-[clamp(2rem,5.6vw,5.25rem)] max-w-[1500px]"
            />
          </div>
          <div className="md:hidden">
            <BlurHeadline
              lines={[
                'I define strategy, talk with the users and ship things that move the business',
              ]}
              blurPx={14}
              mutedOpacity={0.18}
              perWordMs={800}
              staggerMs={90}
              threshold={0.3}
              className="font-sans font-[700] text-black text-center leading-[1.05] tracking-[-0.02em] text-[clamp(1.75rem,7vw,2.75rem)] px-2"
            />
          </div>
        </div>
      </div>

      <div className="h-[30vh]" aria-hidden="true" />
      <div id="work-cards" aria-hidden="true" className="scroll-mt-28" />

      {/* Grid of 4 Work Cards with parallax and reveal physics */}
      <ParallaxContainer speed={10} className="relative">
        <div className="grid grid-cols-1 md:grid-cols-12 gap-y-16 md:gap-y-20 lg:gap-y-24 md:gap-x-8 lg:gap-x-14 mt-12 md:mt-16 items-start">
          {/* Card 1: AlfaFrens */}
          <CardReveal className="relative z-10 md:col-span-6 md:px-[15px]" offsetY={120} revealFrom={0} revealTo={0.4}>
            <a
              href="/work/alfafrens"
              onClick={(e) => handleProjectClick(e, 'alfafrens')}
              className="group relative block rounded-3xl overflow-hidden border border-[var(--color-border)] transition-all duration-500 hover:scale-[1.005] hover:shadow-2xl hover:shadow-black/[0.08] cursor-pointer"
            >
              {/* Arrow circle button */}
              <div
                className="absolute top-5 right-5 z-10 inline-flex items-center justify-center w-11 h-11 rounded-full transition-all duration-300 group-hover:scale-105 bg-black text-white shadow-[0_8px_24px_rgba(0,0,0,0.15)]"
                aria-hidden="true"
              >
                <svg
                  width="16"
                  height="16"
                  viewBox="0 0 16 16"
                  fill="none"
                  className="transition-transform duration-300 group-hover:translate-x-0.5 group-hover:-translate-y-0.5"
                >
                  <path d="M4 12L12 4M12 4H6M12 4v6" stroke="currentColor" strokeWidth="1.6" strokeLinecap="round" strokeLinejoin="round" />
                </svg>
              </div>

              {/* Cover preview with tag pills */}
              <div className="relative w-full overflow-hidden" style={{ aspectRatio: '16/9' }}>
                <img
                  src="/img/AlfaFrens/cover.png"
                  alt="AlfaFrens"
                  className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-[1.03]"
                />
                <div className="absolute left-4 right-4 bottom-3 flex flex-wrap gap-2 justify-end">
                  <span className="font-archia text-[11px] tracking-[0.06em] uppercase rounded-full px-2.5 py-1 backdrop-blur-md bg-white/70 text-black border border-white/50">
                    Subscriptions
                  </span>
                  <span className="font-archia text-[11px] tracking-[0.06em] uppercase rounded-full px-2.5 py-1 backdrop-blur-md bg-white/70 text-black border border-white/50">
                    SocialFi
                  </span>
                </div>
              </div>

              {/* Details footer */}
              <div className="bg-[#ffffff] px-6 pt-5 pb-4 md:px-8 md:pt-6 md:pb-4 flex flex-col">
                <div className="flex items-center justify-between">
                  <div className="relative h-10 w-40 flex items-center">
                    <img
                      src="/img/AlfaFrens/logo.png"
                      alt="AlfaFrens logo"
                      className="max-h-full max-w-full object-contain object-left"
                    />
                  </div>
                  <span className="font-archia text-[13px] font-[400] text-right text-black/55">
                    Staff Product Designer
                  </span>
                </div>
                <p className="font-sans font-[450] text-[14.5px] leading-[1.5] text-black/60 mt-3">
                  A social subscriptions app that helps creators get paid for their content, rewards subscribers with AF tokens, and lets speculators earn a share of channel revenue through staking cashback.
                </p>
              </div>
            </a>
          </CardReveal>

          {/* Card 2: Superboring */}
          <CardReveal className="relative z-10 md:col-span-6 md:px-[15px]" offsetY={120} revealFrom={0.5} revealTo={0.9}>
            <a
              href="/work/superboring"
              onClick={(e) => handleProjectClick(e, 'superboring')}
              className="group relative block rounded-3xl overflow-hidden border border-black/40 transition-all duration-500 hover:scale-[1.005] hover:shadow-2xl hover:shadow-black/[0.08] cursor-pointer"
            >
              <div
                className="absolute top-5 right-5 z-10 inline-flex items-center justify-center w-11 h-11 rounded-full transition-all duration-300 group-hover:scale-105 bg-white text-black shadow-[0_8px_24px_rgba(0,0,0,0.25)]"
                aria-hidden="true"
              >
                <svg
                  width="16"
                  height="16"
                  viewBox="0 0 16 16"
                  fill="none"
                  className="transition-transform duration-300 group-hover:translate-x-0.5 group-hover:-translate-y-0.5"
                >
                  <path d="M4 12L12 4M12 4H6M12 4v6" stroke="currentColor" strokeWidth="1.6" strokeLinecap="round" strokeLinejoin="round" />
                </svg>
              </div>

              <div className="relative w-full overflow-hidden" style={{ aspectRatio: '16/9' }}>
                <img
                  src="/img/SuperBoring/sb-hero.png"
                  alt="Superboring"
                  className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-[1.03]"
                />
                <div className="absolute left-4 right-4 bottom-3 flex flex-wrap gap-2 justify-end">
                  <span className="font-archia text-[11px] tracking-[0.06em] uppercase rounded-full px-2.5 py-1 backdrop-blur-md bg-black/55 text-white border border-white/20">
                    DCA
                  </span>
                  <span className="font-archia text-[11px] tracking-[0.06em] uppercase rounded-full px-2.5 py-1 backdrop-blur-md bg-black/55 text-white border border-white/20">
                    Trading
                  </span>
                </div>
              </div>

              <div className="bg-[#0a0a0a] px-6 pt-5 pb-4 md:px-8 md:pt-6 md:pb-4 flex flex-col">
                <div className="flex items-center justify-between">
                  <div className="relative h-10 w-40 flex items-center">
                    <img
                      src="/img/SuperBoring/logo.png"
                      alt="Superboring logo"
                      className="max-h-full max-w-full object-contain object-left invert brightness-200"
                    />
                  </div>
                  <span className="font-archia text-[13px] font-[400] text-right text-white/55">
                    Staff Product Designer
                  </span>
                </div>
                <p className="font-sans font-[450] text-[14.5px] leading-[1.5] text-white/65 mt-3">
                  Superboring is a stream-powered dollar-cost-averaging (DCA) platform for crypto assets. Tokens are streamed on-chain every second into target assets, enabling continuous buys with much more frequent execution than typical DCA.
                </p>
              </div>
            </a>
          </CardReveal>

          {/* Card 3: Superfluid */}
          <CardReveal className="relative z-10 md:col-span-6 md:px-[15px]" offsetY={120} revealFrom={0} revealTo={0.4}>
            <a
              href="/work/superfluid"
              onClick={(e) => handleProjectClick(e, 'superfluid')}
              className="group relative block rounded-3xl overflow-hidden border border-[var(--color-border)] transition-all duration-500 hover:scale-[1.005] hover:shadow-2xl hover:shadow-black/[0.08] cursor-pointer"
            >
              <div
                className="absolute top-5 right-5 z-10 inline-flex items-center justify-center w-11 h-11 rounded-full transition-all duration-300 group-hover:scale-105 bg-black text-white shadow-[0_8px_24px_rgba(0,0,0,0.15)]"
                aria-hidden="true"
              >
                <svg
                  width="16"
                  height="16"
                  viewBox="0 0 16 16"
                  fill="none"
                  className="transition-transform duration-300 group-hover:translate-x-0.5 group-hover:-translate-y-0.5"
                >
                  <path d="M4 12L12 4M12 4H6M12 4v6" stroke="currentColor" strokeWidth="1.6" strokeLinecap="round" strokeLinejoin="round" />
                </svg>
              </div>

              <div className="relative w-full overflow-hidden" style={{ aspectRatio: '16/9' }}>
                <img
                  src="/img/Superfluid/cover.jpg"
                  alt="Superfluid Claim App"
                  className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-[1.03]"
                />
                <div className="absolute left-4 right-4 bottom-3 flex flex-wrap gap-2 justify-end">
                  <span className="font-archia text-[11px] tracking-[0.06em] uppercase rounded-full px-2.5 py-1 backdrop-blur-md bg-black/55 text-white border border-white/20">
                    Token management
                  </span>
                  <span className="font-archia text-[11px] tracking-[0.06em] uppercase rounded-full px-2.5 py-1 backdrop-blur-md bg-black/55 text-white border border-white/20">
                    Governance
                  </span>
                </div>
              </div>

              <div className="bg-[#ffffff] px-6 pt-5 pb-4 md:px-8 md:pt-6 md:pb-4 flex flex-col">
                <div className="flex items-center justify-between">
                  <div className="relative h-10 w-40 flex items-center">
                    <img
                      src="/img/Superfluid/logo.png"
                      alt="Superfluid Claim App logo"
                      className="max-h-full max-w-full object-contain object-left"
                    />
                  </div>
                  <span className="font-archia text-[13px] font-[400] text-right text-black/55">
                    Staff Product Designer
                  </span>
                </div>
                <p className="font-sans font-[450] text-[14.5px] leading-[1.5] text-black/60 mt-3">
                  SUP token claim app that lets holders claim, manage, stake, and earn SUP, built to support the Foundation’s token distribution and engagement strategy.
                </p>
              </div>
            </a>
          </CardReveal>

          {/* Card 4: LUV */}
          <CardReveal className="relative z-10 md:col-span-6 md:px-[15px]" offsetY={120} revealFrom={0.5} revealTo={0.9}>
            <a
              href="/work/luv"
              onClick={(e) => handleProjectClick(e, 'luv')}
              className="group relative block rounded-3xl overflow-hidden border border-[var(--color-border)] transition-all duration-500 hover:scale-[1.005] hover:shadow-2xl hover:shadow-black/[0.08] cursor-pointer"
            >
              <div
                className="absolute top-5 right-5 z-10 inline-flex items-center justify-center w-11 h-11 rounded-full transition-all duration-300 group-hover:scale-105 bg-black text-white shadow-[0_8px_24px_rgba(0,0,0,0.15)]"
                aria-hidden="true"
              >
                <svg
                  width="16"
                  height="16"
                  viewBox="0 0 16 16"
                  fill="none"
                  className="transition-transform duration-300 group-hover:translate-x-0.5 group-hover:-translate-y-0.5"
                >
                  <path d="M4 12L12 4M12 4H6M12 4v6" stroke="currentColor" strokeWidth="1.6" strokeLinecap="round" strokeLinejoin="round" />
                </svg>
              </div>

              <div className="relative w-full overflow-hidden" style={{ aspectRatio: '16/9' }}>
                <img
                  src="/img/LUV/card.png"
                  alt="LUV"
                  className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-[1.03]"
                />
                <div className="absolute left-4 right-4 bottom-3 flex flex-wrap gap-2 justify-end">
                  <span className="font-archia text-[11px] tracking-[0.06em] uppercase rounded-full px-2.5 py-1 backdrop-blur-md bg-white/70 text-black border border-white/50">
                    Automotive
                  </span>
                  <span className="font-archia text-[11px] tracking-[0.06em] uppercase rounded-full px-2.5 py-1 backdrop-blur-md bg-white/70 text-black border border-white/50">
                    Physical UX
                  </span>
                </div>
              </div>

              <div className="bg-[#ffffff] px-6 pt-5 pb-4 md:px-8 md:pt-6 md:pb-4 flex flex-col">
                <div className="flex items-center justify-between">
                  <div className="relative h-10 w-40 flex items-center">
                    <span className="font-sans font-[600] text-[26px] tracking-tight text-black">
                      LUV
                    </span>
                  </div>
                  <span className="font-archia text-[13px] font-[400] text-right text-black/55">
                    Lead UX Designer
                  </span>
                </div>
                <p className="font-sans font-[450] text-[14.5px] leading-[1.5] text-black/60 mt-3">
                  The world’s smallest urban electric car. I led the team behind its full control system, dashboard, steering wheel ergonomics, and door controls, all with no touchscreen.
                </p>
              </div>
            </a>
          </CardReveal>
        </div>
      </ParallaxContainer>
    </section>
  );
}
