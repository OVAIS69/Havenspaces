import { useState, useCallback } from 'react';

const EMAIL = 'joanna.szymd@gmail.com';

async function copyToClipboard(text: string): Promise<boolean> {
  if (typeof navigator !== 'undefined' && navigator.clipboard?.writeText) {
    try {
      await navigator.clipboard.writeText(text);
      return true;
    } catch {}
  }
  if (typeof document !== 'undefined') {
    try {
      const textarea = document.createElement('textarea');
      textarea.value = text;
      textarea.style.position = 'fixed';
      textarea.style.opacity = '0';
      document.body.appendChild(textarea);
      textarea.select();
      const success = document.execCommand('copy');
      document.body.removeChild(textarea);
      return success;
    } catch {}
  }
  return false;
}

const socialLinks = [
  {
    label: 'LinkedIn',
    href: 'https://www.linkedin.com/in/joanna-szymendera/',
    icon: (
      <svg width="22" height="22" viewBox="0 0 24 24" fill="currentColor" aria-hidden="true">
        <path d="M20.45 20.45h-3.55v-5.57c0-1.33-.03-3.04-1.85-3.04-1.86 0-2.14 1.45-2.14 2.95v5.66H9.36V9h3.41v1.56h.05c.47-.9 1.63-1.85 3.35-1.85 3.59 0 4.25 2.36 4.25 5.43v6.31zM5.34 7.43a2.06 2.06 0 1 1 0-4.13 2.06 2.06 0 0 1 0 4.13zM7.12 20.45H3.56V9h3.56v11.45zM22.22 0H1.77C.79 0 0 .77 0 1.72v20.55C0 23.23.79 24 1.77 24h20.45c.98 0 1.78-.77 1.78-1.73V1.72C24 .77 23.2 0 22.22 0z" />
      </svg>
    ),
  },
  {
    label: 'Twitter',
    href: 'https://x.com/0xYoanna',
    icon: (
      <svg width="20" height="20" viewBox="0 0 24 24" fill="currentColor" aria-hidden="true">
        <path d="M18.244 2H21.5l-7.5 8.572L23 22h-7.018l-5.49-7.18L4.2 22H.944l8.08-9.232L.5 2h7.197l4.964 6.564L18.244 2zm-2.464 18.067h1.842L7.27 3.83H5.293L15.78 20.067z" />
      </svg>
    ),
  },
];

export default function Footer() {
  const [copied, setCopied] = useState(false);

  const handleCopy = useCallback(async () => {
    const success = await copyToClipboard(EMAIL);
    if (success) {
      setCopied(true);
      window.setTimeout(() => setCopied(false), 2500);
    }
  }, []);

  return (
    <footer id="footer" className="bg-black text-white pt-12 pb-10 px-4 md:px-6">
      <div className="max-w-[1400px] mx-auto">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-x-8 md:gap-x-12 gap-y-8">
          {socialLinks.map(({ label, href, icon }) => (
            <a
              key={label}
              href={href}
              target="_blank"
              rel="noopener noreferrer"
              aria-label={label}
              className="group flex items-center justify-between border-b border-white/20 pb-5 text-white hover:text-white/70 transition-colors"
            >
              <span className="flex items-center justify-center w-6 h-6">{icon}</span>
              <svg
                width="20"
                height="20"
                viewBox="0 0 24 24"
                fill="none"
                stroke="currentColor"
                strokeWidth="2"
                strokeLinecap="round"
                strokeLinejoin="round"
                className="transition-transform duration-300 group-hover:translate-x-1"
                aria-hidden="true"
              >
                <line x1="5" y1="12" x2="19" y2="12" />
                <polyline points="13 6 19 12 13 18" />
              </svg>
            </a>
          ))}

          {/* Copy Email Button */}
          <button
            type="button"
            onClick={handleCopy}
            aria-live="polite"
            aria-label={copied ? `Email ${EMAIL} copied to clipboard` : 'Copy email to clipboard'}
            className="group flex items-center justify-between border-b border-white/20 pb-5 text-white hover:text-white/70 transition-colors text-left w-full cursor-pointer"
          >
            <span className="flex items-center gap-3">
              <span className={`flex items-center justify-center w-6 h-6 transition-colors ${copied ? 'text-emerald-400' : ''}`}>
                {copied ? (
                  <svg width="22" height="22" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.4" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true">
                    <polyline points="20 6 9 17 4 12" />
                  </svg>
                ) : (
                  <svg width="22" height="22" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true">
                    <rect x="2.5" y="4.5" width="19" height="15" rx="2" />
                    <path d="m3 6 9 7 9-7" />
                  </svg>
                )}
              </span>
              <span className="font-sans font-[450] text-[15px]">
                {copied ? 'Copied!' : EMAIL}
              </span>
            </span>

            <svg
              width="20"
              height="20"
              viewBox="0 0 24 24"
              fill="none"
              stroke="currentColor"
              strokeWidth="2"
              strokeLinecap="round"
              strokeLinejoin="round"
              className="transition-transform duration-300 group-hover:-translate-y-0.5 group-hover:translate-x-0.5"
              aria-hidden="true"
            >
              <rect x="9" y="9" width="13" height="13" rx="2" />
              <path d="M5 15H4a2 2 0 0 1-2-2V4a2 2 0 0 1 2-2h9a2 2 0 0 1 2 2v1" />
            </svg>
          </button>
        </div>

        <p className="text-center font-archia text-[14px] text-white/55 mt-10">
          Designed by Joanna Szymendera <span className="text-white/25 mx-1">·</span> Made with Claude
        </p>
      </div>
    </footer>
  );
}
