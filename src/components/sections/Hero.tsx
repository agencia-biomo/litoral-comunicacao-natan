'use client';

import Link from 'next/link';
import { RegistrationMark, CMYKColorBar } from '../graphics';

// Animated CMYK Logo Component
function AnimatedCMYKLogo({ className = '' }: { className?: string }) {
  return (
    <div className={`relative ${className}`}>
      {/* Subtle glow */}
      <div className="absolute inset-0 blur-3xl opacity-20">
        <div className="absolute inset-0 bg-gradient-to-tr from-[#00D4FF] via-[#FF00FF] to-[#FFEB00] rounded-full" />
      </div>

      {/* Main Logo SVG */}
      <svg viewBox="0 0 200 200" className="w-full h-full relative z-10">
        <defs>
          <filter id="glow">
            <feGaussianBlur stdDeviation="2" result="coloredBlur"/>
            <feMerge>
              <feMergeNode in="coloredBlur"/>
              <feMergeNode in="SourceGraphic"/>
            </feMerge>
          </filter>
        </defs>

        {/* Cyan segment */}
        <path
          d="M 100 30 A 70 70 0 0 1 170 100 L 130 100 A 30 30 0 0 0 100 70 Z"
          fill="#00D4FF"
          filter="url(#glow)"
        >
          <animateTransform
            attributeName="transform"
            type="rotate"
            from="0 100 100"
            to="360 100 100"
            dur="20s"
            repeatCount="indefinite"
          />
        </path>

        {/* Yellow segment */}
        <path
          d="M 170 100 A 70 70 0 0 1 100 170 L 100 130 A 30 30 0 0 0 130 100 Z"
          fill="#FFEB00"
          filter="url(#glow)"
        >
          <animateTransform
            attributeName="transform"
            type="rotate"
            from="0 100 100"
            to="360 100 100"
            dur="20s"
            repeatCount="indefinite"
          />
        </path>

        {/* Magenta segment */}
        <path
          d="M 100 170 A 70 70 0 0 1 30 100 L 70 100 A 30 30 0 0 0 100 130 Z"
          fill="#FF00FF"
          filter="url(#glow)"
        >
          <animateTransform
            attributeName="transform"
            type="rotate"
            from="0 100 100"
            to="360 100 100"
            dur="20s"
            repeatCount="indefinite"
          />
        </path>

        {/* Black segment */}
        <path
          d="M 30 100 A 70 70 0 0 1 100 30 L 100 70 A 30 30 0 0 0 70 100 Z"
          fill="#1A1A1A"
          filter="url(#glow)"
        >
          <animateTransform
            attributeName="transform"
            type="rotate"
            from="0 100 100"
            to="360 100 100"
            dur="20s"
            repeatCount="indefinite"
          />
        </path>
      </svg>
    </div>
  );
}

// Stat item
function Stat({ value, label, color }: { value: string; label: string; color: string }) {
  const borderColors: Record<string, string> = {
    cyan: 'border-l-[#00D4FF]',
    magenta: 'border-l-[#FF00FF]',
    yellow: 'border-l-[#FFEB00]',
    black: 'border-l-[#1A1A1A]',
  };

  return (
    <div className={`border-l-2 ${borderColors[color]} pl-4`}>
      <div className="text-2xl lg:text-3xl font-bold text-[#1A1A1A]">{value}</div>
      <div className="text-xs text-gray-500 uppercase tracking-wider">{label}</div>
    </div>
  );
}

export function Hero() {
  return (
    <section className="relative min-h-screen flex items-center bg-[#FAFAFA] overflow-hidden">
      {/* Subtle background pattern */}
      <div
        className="absolute inset-0 opacity-[0.015]"
        style={{
          backgroundImage: `radial-gradient(#1A1A1A 1px, transparent 1px)`,
          backgroundSize: '24px 24px',
        }}
      />

      {/* Content */}
      <div className="relative z-10 w-full max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-20 lg:py-32">
        <div className="grid lg:grid-cols-2 gap-16 lg:gap-20 items-center">

          {/* Left - Text */}
          <div className="order-2 lg:order-1">
            {/* Badge */}
            <div className="inline-flex items-center gap-2 px-3 py-1.5 bg-white border border-gray-200 rounded-full text-xs text-gray-500 mb-8">
              <span className="flex gap-1">
                <span className="w-1.5 h-1.5 rounded-full bg-[#00D4FF]" />
                <span className="w-1.5 h-1.5 rounded-full bg-[#FF00FF]" />
                <span className="w-1.5 h-1.5 rounded-full bg-[#FFEB00]" />
                <span className="w-1.5 h-1.5 rounded-full bg-[#1A1A1A]" />
              </span>
              Desde 2011 em Balneário Camboriú
            </div>

            {/* Heading */}
            <h1 className="text-4xl sm:text-5xl lg:text-6xl font-bold leading-[1.1] mb-6">
              <span className="text-[#1A1A1A]">A Arte da</span>
              <br />
              <span className="bg-gradient-to-r from-[#00D4FF] via-[#FF00FF] to-[#FFEB00] bg-clip-text text-transparent">
                Impressão
              </span>
            </h1>

            {/* Description */}
            <p className="text-lg text-gray-600 mb-8 max-w-md">
              Especialistas em fachadas ACM, letras caixa, envelopamento veicular
              e comunicação visual completa.
            </p>

            {/* CTAs */}
            <div className="flex flex-wrap gap-4 mb-12">
              <Link
                href="/portfolio"
                className="px-6 py-3 bg-[#1A1A1A] text-white font-medium rounded-full hover:bg-gray-800 transition-colors"
              >
                Ver Portfólio
              </Link>
              <Link
                href="/contato"
                className="px-6 py-3 border-2 border-[#1A1A1A] text-[#1A1A1A] font-medium rounded-full hover:bg-[#1A1A1A] hover:text-white transition-colors"
              >
                Orçamento Grátis
              </Link>
            </div>

            {/* Stats */}
            <div className="flex flex-wrap gap-8">
              <Stat value="14+" label="Anos" color="cyan" />
              <Stat value="500+" label="Projetos" color="magenta" />
              <Stat value="200+" label="Clientes" color="yellow" />
              <Stat value="12x" label="Parcelamento" color="black" />
            </div>
          </div>

          {/* Right - Logo */}
          <div className="order-1 lg:order-2 flex justify-center">
            <div className="relative">
              {/* Registration marks nos cantos */}
              <RegistrationMark size={16} color="#E5E5E5" className="absolute -top-8 -left-8" />
              <RegistrationMark size={16} color="#E5E5E5" className="absolute -top-8 -right-8" />
              <RegistrationMark size={16} color="#E5E5E5" className="absolute -bottom-8 -left-8" />
              <RegistrationMark size={16} color="#E5E5E5" className="absolute -bottom-8 -right-8" />

              {/* Crop marks sutis */}
              <div className="absolute -top-4 left-1/2 -translate-x-1/2 w-px h-3 bg-gray-300" />
              <div className="absolute -bottom-4 left-1/2 -translate-x-1/2 w-px h-3 bg-gray-300" />
              <div className="absolute top-1/2 -left-4 -translate-y-1/2 h-px w-3 bg-gray-300" />
              <div className="absolute top-1/2 -right-4 -translate-y-1/2 h-px w-3 bg-gray-300" />

              {/* Logo */}
              <AnimatedCMYKLogo className="w-64 h-64 sm:w-80 sm:h-80 lg:w-96 lg:h-96" />

              {/* Brand name */}
              <div className="text-center mt-6">
                <h2 className="text-2xl lg:text-3xl font-bold tracking-tight text-[#1A1A1A]">
                  LITORAL
                </h2>
                <p className="text-xs text-gray-400 tracking-[0.25em] uppercase">
                  Comunicação Visual
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Bottom color bar - sutil */}
      <div className="absolute bottom-0 left-0 right-0">
        <CMYKColorBar variant="compact" height="h-1" />
      </div>

      {/* Print info - discreto */}
      <div className="absolute bottom-6 left-6 hidden lg:flex items-center gap-3 text-[10px] font-mono text-gray-300">
        <RegistrationMark size={10} color="#D4D4D4" />
        <span>LITORAL-2026</span>
        <span>•</span>
        <span>CMYK</span>
      </div>

      <div className="absolute bottom-6 right-6 hidden lg:block text-[10px] font-mono text-gray-300">
        300 DPI • FOGRA39
      </div>
    </section>
  );
}
