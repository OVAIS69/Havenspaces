import { useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';

export interface ProjectDetail {
  id: string;
  title: string;
  subtitle: string;
  role: string;
  year: string;
  tags: string[];
  description: string;
  heroImage: string;
  highlights: string[];
  screens?: string[];
  illustrations?: string[];
  videoSrc?: string;
}

export const projectsData: Record<string, ProjectDetail> = {
  alfafrens: {
    id: 'alfafrens',
    title: 'AlfaFrens',
    subtitle: 'Social subscriptions powered by real-time streaming tokens',
    role: 'Staff Product Designer',
    year: '2024',
    tags: ['Subscriptions', 'SocialFi', 'Superfluid', 'Web3 Mobile', 'Base'],
    description:
      'A social subscriptions app that helps creators get paid for their content, rewards subscribers with AF tokens, and lets speculators earn a share of channel revenue through staking cashback. Built on Base with real-time money streaming.',
    heroImage: '/img/AlfaFrens/cover.png',
    highlights: [
      'Engineered complete mobile-first UX with instant stream setup and zero-gas onboarding via Biconomy account abstraction.',
      'Designed subscription channels, staking pools, and real-time token yield dashboards.',
      'Crafted full illustration set and branding language for gamified social tokenomics.',
    ],
    screens: [
      '/img/AlfaFrens/Mobile1/1.png',
      '/img/AlfaFrens/Mobile1/2.png',
      '/img/AlfaFrens/Mobile1/3.png',
      '/img/AlfaFrens/Mobile1/4.png',
      '/img/AlfaFrens/Mobile1/5.png',
      '/img/AlfaFrens/Mobile1/6.png',
      '/img/AlfaFrens/Mobile1/7.png',
    ],
    illustrations: [
      '/img/AlfaFrens/Brand/illustrations/hands-coin.png',
      '/img/AlfaFrens/Brand/illustrations/sparks.png',
      '/img/AlfaFrens/Brand/illustrations/eye.png',
      '/img/AlfaFrens/Brand/illustrations/wallet.png',
      '/img/AlfaFrens/Brand/illustrations/whale.png',
      '/img/AlfaFrens/Brand/illustrations/yay.png',
      '/img/AlfaFrens/Brand/illustrations/clock.png',
      '/img/AlfaFrens/Brand/illustrations/ai-agent.png',
    ],
  },
  superboring: {
    id: 'superboring',
    title: 'SuperBoring',
    subtitle: 'Stream-powered dollar-cost-averaging protocol',
    role: 'Staff Product Designer',
    year: '2023 - 2024',
    tags: ['DCA', 'Trading', 'DeFi', 'Multi-chain', 'Continuous Execution'],
    description:
      'Superboring is a stream-powered dollar-cost-averaging (DCA) platform for crypto assets. Tokens are streamed on-chain every second into target assets, enabling continuous buys with much more frequent execution and minimal slippage compared to traditional interval DCA.',
    heroImage: '/img/SuperBoring/sb-hero.png',
    highlights: [
      'Eliminated periodic batch execution by creating smooth second-by-second streaming DCA.',
      'Multi-chain deployment across Arbitrum, Optimism, Base, Polygon, Avalanche, and Ethereum.',
      'Intuitive visual charts tracking live dollar stream accumulation and accrued cost basis.',
    ],
    screens: [
      '/img/SuperBoring/screens-flow/1.png',
      '/img/SuperBoring/screens-flow/2.png',
      '/img/SuperBoring/screens-flow/3.png',
      '/img/SuperBoring/screens-flow/4.png',
      '/img/SuperBoring/screens-monthly/1.png',
      '/img/SuperBoring/screens-monthly/2.png',
      '/img/SuperBoring/screens-rewards/1.png',
      '/img/SuperBoring/screens-rewards/2.png',
    ],
  },
  superfluid: {
    id: 'superfluid',
    title: 'Superfluid Claim App',
    subtitle: 'SUP token claim, governance, and staking infrastructure',
    role: 'Staff Product Designer',
    year: '2023',
    tags: ['Token Management', 'Governance', 'Staking', 'Protocol UX'],
    description:
      'SUP token claim app that lets holders claim, manage, stake, and earn SUP, built to support the Superfluid Foundation’s token distribution, multi-epoch vesting schedule, and ecosystem engagement strategy.',
    heroImage: '/img/Superfluid/cover.jpg',
    highlights: [
      'Designed frictionless multi-round airdrop verification and claim flows.',
      'Created clear visual vesting charts showing stream rates, locked vs unlocked tokens.',
      'Seamless staking mechanisms that reward long-term community participation.',
    ],
    screens: [
      '/img/Superfluid/screens-daily-claim/1.png',
      '/img/Superfluid/screens-daily-claim/2.png',
      '/img/Superfluid/screens-daily-claim/3.png',
      '/img/Superfluid/screens-daily-claim/4.png',
      '/img/Superfluid/screens-onboarding/1.png',
      '/img/Superfluid/screens-onboarding/2.png',
      '/img/Superfluid/screens-onboarding/3.png',
      '/img/Superfluid/screens-onboarding/6.png',
    ],
  },
  luv: {
    id: 'luv',
    title: 'LUV Electric Vehicle',
    subtitle: 'The world’s smallest urban electric car UX',
    role: 'Lead UX Designer',
    year: '2021 - 2023',
    tags: ['Automotive', 'Physical UX', 'Ergonomics', 'Hardware'],
    description:
      'The world’s smallest urban electric car. I led the team behind its full control system, dashboard, steering wheel ergonomics, and door controls, all designed with no touchscreens to ensure tactile safety, quick muscle memory, and distraction-free urban navigation.',
    heroImage: '/img/LUV/card.png',
    videoSrc: '/img/LUV/7mLv_pzJTiM_720.mp4',
    highlights: [
      'Pioneered physical-only tactile dashboard interface eliminating hazardous touchscreen distractions while driving.',
      'Iterated steering wheel button ergonomics and thumb-reach zones tested with 50+ drivers.',
      'Integrated door mechanisms, intuitive digital cluster readouts, and minimalist energy indicators.',
    ],
    screens: [
      '/img/LUV/UI/screen-963.png',
      '/img/LUV/UI/screen-964.png',
      '/img/LUV/UI/screen-965.png',
      '/img/LUV/UI/screen-966.png',
      '/img/LUV/UI/screen-967.png',
      '/img/LUV/UI/screen-969.png',
      '/img/LUV/UI/screen-971.png',
      '/img/LUV/UI/screen-972.png',
    ],
  },
};

interface CaseStudyModalProps {
  projectId: string | null;
  onClose: () => void;
}

export default function CaseStudyModal({ projectId, onClose }: CaseStudyModalProps) {
  const project = projectId ? projectsData[projectId] : null;

  useEffect(() => {
    if (project) {
      const prev = document.body.style.overflow;
      document.body.style.overflow = 'hidden';

      const lenis = (window as any).__lenis;
      if (lenis?.stop) lenis.stop();

      const handleKeyDown = (e: KeyboardEvent) => {
        if (e.key === 'Escape') {
          onClose();
        }
      };
      window.addEventListener('keydown', handleKeyDown);

      return () => {
        document.body.style.overflow = prev;
        if (lenis?.start) lenis.start();
        window.removeEventListener('keydown', handleKeyDown);
      };
    }
  }, [project, onClose]);

  return (
    <AnimatePresence>
      {project && (
        <motion.div
          key="modal-backdrop"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          exit={{ opacity: 0 }}
          transition={{ duration: 0.3 }}
          onClick={onClose}
          className="fixed inset-0 z-50 overflow-y-auto bg-black/85 backdrop-blur-xl flex justify-center p-4 sm:p-6 md:p-10"
        >
          <motion.div
            key="modal-content"
            initial={{ opacity: 0, y: 40, scale: 0.98 }}
            animate={{ opacity: 1, y: 0, scale: 1 }}
            exit={{ opacity: 0, y: 30, scale: 0.98 }}
            transition={{ duration: 0.4, ease: [0.22, 1, 0.36, 1] }}
            onClick={(e) => e.stopPropagation()}
            className="relative w-full max-w-5xl bg-[#0e0e12] border border-white/15 rounded-3xl overflow-hidden text-white shadow-2xl my-auto"
          >
            {/* Close button */}
            <button
              type="button"
              onClick={onClose}
              aria-label="Close modal"
              className="absolute top-6 right-6 z-30 flex items-center justify-center w-11 h-11 rounded-full bg-white/10 hover:bg-white/20 text-white backdrop-blur-md transition-all hover:scale-105 active:scale-95 cursor-pointer"
            >
              <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round">
                <line x1="18" y1="6" x2="6" y2="18" />
                <line x1="6" y1="6" x2="18" y2="18" />
              </svg>
            </button>

            {/* Hero Cover Image */}
            <div className="relative w-full aspect-[16/9] sm:aspect-[21/9] overflow-hidden bg-black/40">
              <img
                src={project.heroImage}
                alt={project.title}
                className="w-full h-full object-cover"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-[#0a0a0c] via-transparent to-transparent opacity-95" />
            </div>

            {/* Content Body */}
            <div className="p-6 sm:p-10 md:p-14">
              {/* Tags & meta */}
              <div className="flex flex-wrap items-center gap-2 mb-6">
                {project.tags.map((tag) => (
                  <span
                    key={tag}
                    className="font-archia text-[11px] tracking-[0.06em] uppercase rounded-full px-3 py-1 bg-white/10 text-white/80 border border-white/10"
                  >
                    {tag}
                  </span>
                ))}
                <span className="font-archia text-[12px] text-white/40 ml-auto">
                  {project.role} · {project.year}
                </span>
              </div>

              {/* Title & Subtitle */}
              <h1 className="font-sans font-[500] text-3xl sm:text-5xl text-white tracking-tight leading-[1.1] mb-4">
                {project.title}
              </h1>
              <p className="font-archia text-lg sm:text-xl text-white/70 leading-relaxed mb-8 max-w-3xl">
                {project.subtitle}
              </p>

              {/* Video preview if available */}
              {project.videoSrc && (
                <div className="mb-10 rounded-2xl overflow-hidden border border-white/15 bg-black">
                  <video
                    src={project.videoSrc}
                    controls
                    autoPlay
                    muted
                    loop
                    className="w-full h-auto max-h-[500px] object-contain"
                  />
                </div>
              )}

              {/* Description */}
              <div className="border-t border-white/10 pt-8 mb-10">
                <h3 className="font-archia text-sm uppercase tracking-wider text-white/40 mb-3">
                  Overview
                </h3>
                <p className="font-sans font-[400] text-[16px] sm:text-[17px] text-white/80 leading-[1.7] max-w-3xl">
                  {project.description}
                </p>
              </div>

              {/* Key Highlights */}
              <div className="border-t border-white/10 pt-8 mb-10">
                <h3 className="font-archia text-sm uppercase tracking-wider text-white/40 mb-4">
                  Key Design Contributions
                </h3>
                <ul className="grid grid-cols-1 md:grid-cols-3 gap-6">
                  {project.highlights.map((item, idx) => (
                    <li
                      key={idx}
                      className="p-5 rounded-2xl bg-white/[0.04] border border-white/10 flex flex-col justify-between"
                    >
                      <span className="font-archia text-xs text-white/30 mb-2">0{idx + 1}</span>
                      <p className="font-sans text-[15px] text-white/80 leading-relaxed">{item}</p>
                    </li>
                  ))}
                </ul>
              </div>

              {/* Preview Screens */}
              {project.screens && project.screens.length > 0 && (
                <div className="border-t border-white/10 pt-8 mb-10">
                  <h3 className="font-archia text-sm uppercase tracking-wider text-white/40 mb-4">
                    Interface Screens
                  </h3>
                  <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 gap-4">
                    {project.screens.map((screen, sIdx) => (
                      <div
                        key={sIdx}
                        className="rounded-xl overflow-hidden border border-white/10 bg-black/40 aspect-[9/16] relative shadow-lg"
                      >
                        <img
                          src={screen}
                          alt={`${project.title} screen ${sIdx + 1}`}
                          className="w-full h-full object-cover"
                          loading="lazy"
                        />
                      </div>
                    ))}
                  </div>
                </div>
              )}

              {/* Illustrations if available */}
              {project.illustrations && project.illustrations.length > 0 && (
                <div className="border-t border-white/10 pt-8 mb-8">
                  <h3 className="font-archia text-sm uppercase tracking-wider text-white/40 mb-4">
                    Custom Brand Illustrations
                  </h3>
                  <div className="grid grid-cols-2 sm:grid-cols-4 gap-4">
                    {project.illustrations.map((ill, iIdx) => (
                      <div
                        key={iIdx}
                        className="rounded-xl p-4 flex items-center justify-center border border-white/10 bg-white/[0.02]"
                      >
                        <img
                          src={ill}
                          alt="Illustration"
                          className="max-h-24 object-contain"
                          loading="lazy"
                        />
                      </div>
                    ))}
                  </div>
                </div>
              )}

              {/* Modal footer CTA */}
              <div className="border-t border-white/10 pt-8 flex items-center justify-between">
                <button
                  type="button"
                  onClick={onClose}
                  className="font-sans text-[15px] text-white/60 hover:text-white transition-colors cursor-pointer"
                >
                  ← Back to Portfolio
                </button>
                <a
                  href="mailto:joanna.szymd@gmail.com"
                  className="inline-flex items-center gap-1.5 bg-white text-black font-sans font-[500] text-[15px] px-6 py-3 rounded-full hover:bg-white/85 transition-colors"
                >
                  Get in touch
                  <svg width="16" height="16" viewBox="0 0 16 16" fill="none">
                    <path
                      d="M3 8h10M9 4l4 4-4 4"
                      stroke="#0a0a0a"
                      strokeWidth="1.5"
                      strokeLinecap="round"
                      strokeLinejoin="round"
                    />
                  </svg>
                </a>
              </div>
            </div>
          </motion.div>
        </motion.div>
      )}
    </AnimatePresence>
  );
}
