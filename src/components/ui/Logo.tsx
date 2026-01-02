'use client';

interface LogoProps {
  variant?: 'full' | 'icon';
  className?: string;
  size?: number;
}

export function Logo({ variant = 'full', className = '', size = 40 }: LogoProps) {
  return (
    <div className={`flex items-center gap-3 ${className}`}>
      {/* CMYK Circle Logo */}
      <div className="relative group">
        <svg
          width={size}
          height={size}
          viewBox="0 0 100 100"
          className="transition-transform duration-500 group-hover:rotate-180"
        >
          {/* Cyan arc */}
          <path
            d="M 50 10 A 40 40 0 0 1 90 50"
            fill="none"
            stroke="#00D4FF"
            strokeWidth="12"
            strokeLinecap="round"
          />
          {/* Magenta arc */}
          <path
            d="M 90 50 A 40 40 0 0 1 50 90"
            fill="none"
            stroke="#FF00FF"
            strokeWidth="12"
            strokeLinecap="round"
          />
          {/* Yellow arc */}
          <path
            d="M 50 90 A 40 40 0 0 1 10 50"
            fill="none"
            stroke="#FFEB00"
            strokeWidth="12"
            strokeLinecap="round"
          />
          {/* Black arc */}
          <path
            d="M 10 50 A 40 40 0 0 1 50 10"
            fill="none"
            stroke="#1A1A1A"
            strokeWidth="12"
            strokeLinecap="round"
          />
        </svg>
      </div>

      {/* Text */}
      {variant === 'full' && (
        <div className="flex flex-col">
          <span className="font-bold tracking-tight text-xl text-[#1A1A1A]">
            LITORAL
          </span>
          <span className="text-[10px] text-gray-400 tracking-widest uppercase">
            Comunicação Visual
          </span>
        </div>
      )}
    </div>
  );
}
