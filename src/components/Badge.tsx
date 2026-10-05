import React from 'react';

interface BadgeProps {
  children: React.ReactNode;
  dark?: boolean;
}

export default function Badge({ children, dark = false }: BadgeProps) {
  return (
    <div className="flex justify-center mb-5 md:mb-6">
      <span
        className={
          dark
            ? 'inline-flex items-center font-archia text-[13px] font-[400] tracking-[0.16em] uppercase text-white/80 bg-white/[0.06] backdrop-blur-sm border border-white/15 rounded-full px-4 py-1.5'
            : 'inline-flex items-center font-archia text-[13px] font-[400] tracking-[0.16em] uppercase text-black/80 bg-white/60 backdrop-blur-sm border border-[var(--color-border)] rounded-full px-4 py-1.5'
        }
      >
        <span
          className={`${dark ? 'bg-white/70' : 'bg-black/60'} w-1.5 h-1.5 rounded-full mr-2.5`}
        />
        {children}
      </span>
    </div>
  );
}
