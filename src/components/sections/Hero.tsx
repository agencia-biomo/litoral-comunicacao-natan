'use client';

import Link from 'next/link';
import Image from 'next/image';
import { RegistrationMark, CMYKColorBar } from '../graphics';

// Star rating component
function StarRating({ rating = 5 }: { rating?: number }) {
  return (
    <div className="flex gap-0.5">
      {[...Array(5)].map((_, i) => (
        <svg
          key={i}
          className={`w-4 h-4 ${i < rating ? 'text-[#FFEB00]' : 'text-gray-300'}`}
          fill="currentColor"
          viewBox="0 0 20 20"
        >
          <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z" />
        </svg>
      ))}
    </div>
  );
}

// Stat badge component
function StatBadge({ value, label, color }: { value: string; label: string; color: string }) {
  const bgColors: Record<string, string> = {
    cyan: 'bg-[#00D4FF]/10 border-[#00D4FF]/20',
    magenta: 'bg-[#FF00FF]/10 border-[#FF00FF]/20',
    yellow: 'bg-[#FFEB00]/10 border-[#FFEB00]/20',
    black: 'bg-[#1A1A1A]/10 border-[#1A1A1A]/20',
  };
  const textColors: Record<string, string> = {
    cyan: 'text-[#00A8CC]',
    magenta: 'text-[#CC00CC]',
    yellow: 'text-[#B8A600]',
    black: 'text-[#1A1A1A]',
  };

  return (
    <div className={`px-4 py-3 rounded-xl border ${bgColors[color]} backdrop-blur-sm`}>
      <div className={`text-2xl lg:text-3xl font-bold ${textColors[color]}`}>{value}</div>
      <div className="text-xs text-gray-500 uppercase tracking-wider">{label}</div>
    </div>
  );
}

export function Hero() {
  return (
    <section className="relative min-h-screen flex items-center overflow-hidden">
      {/* Background Image with Overlay */}
      <div className="absolute inset-0">
        <Image
          src="/images/placeholder/hero-1.jpg"
          alt="Fachada comercial moderna"
          fill
          className="object-cover"
          priority
        />
        {/* Gradient overlay */}
        <div className="absolute inset-0 bg-gradient-to-r from-white via-white/95 to-white/70 lg:to-transparent" />
        {/* CMYK gradient accent */}
        <div className="absolute inset-0 bg-gradient-to-br from-[#00D4FF]/5 via-transparent to-[#FF00FF]/5" />
      </div>

      {/* Subtle halftone pattern */}
      <div
        className="absolute inset-0 opacity-[0.02]"
        style={{
          backgroundImage: `radial-gradient(#1A1A1A 1px, transparent 1px)`,
          backgroundSize: '20px 20px',
        }}
      />

      {/* Content */}
      <div className="relative z-10 w-full max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-20 lg:py-32">
        <div className="max-w-2xl">
          {/* Badge with rating */}
          <div className="inline-flex items-center gap-3 px-4 py-2 bg-white/80 backdrop-blur-sm border border-gray-200 rounded-full mb-8">
            <StarRating rating={5} />
            <span className="text-sm font-medium text-gray-700">4.9</span>
            <span className="w-px h-4 bg-gray-300" />
            <span className="flex gap-1">
              <span className="w-1.5 h-1.5 rounded-full bg-[#00D4FF]" />
              <span className="w-1.5 h-1.5 rounded-full bg-[#FF00FF]" />
              <span className="w-1.5 h-1.5 rounded-full bg-[#FFEB00]" />
              <span className="w-1.5 h-1.5 rounded-full bg-[#1A1A1A]" />
            </span>
            <span className="text-sm text-gray-500">Desde 2011</span>
          </div>

          {/* Heading */}
          <h1 className="text-4xl sm:text-5xl lg:text-6xl xl:text-7xl font-bold leading-[1.05] mb-6">
            <span className="text-[#1A1A1A]">Comunicação</span>
            <br />
            <span className="text-[#1A1A1A]">Visual que</span>
            <br />
            <span className="bg-gradient-to-r from-[#00D4FF] via-[#FF00FF] to-[#FFEB00] bg-clip-text text-transparent">
              Transforma
            </span>
          </h1>

          {/* Description */}
          <p className="text-lg lg:text-xl text-gray-600 mb-8 max-w-lg leading-relaxed">
            Fachadas em ACM, letras caixa, envelopamento veicular e soluções completas
            em comunicação visual para sua empresa em <strong>Balneário Camboriú</strong>.
          </p>

          {/* CTAs */}
          <div className="flex flex-wrap gap-4 mb-12">
            <Link
              href="/contato"
              className="group px-8 py-4 bg-[#1A1A1A] text-white font-semibold rounded-full hover:bg-gray-800 transition-all hover:shadow-xl hover:shadow-black/20 flex items-center gap-2"
            >
              Solicitar Orçamento
              <svg className="w-5 h-5 group-hover:translate-x-1 transition-transform" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 8l4 4m0 0l-4 4m4-4H3" />
              </svg>
            </Link>
            <Link
              href="/portfolio"
              className="px-8 py-4 bg-white/80 backdrop-blur-sm border-2 border-[#1A1A1A] text-[#1A1A1A] font-semibold rounded-full hover:bg-[#1A1A1A] hover:text-white transition-all"
            >
              Ver Portfólio
            </Link>
          </div>

          {/* Stats */}
          <div className="flex flex-wrap gap-4">
            <StatBadge value="14+" label="Anos" color="cyan" />
            <StatBadge value="500+" label="Projetos" color="magenta" />
            <StatBadge value="200+" label="Clientes" color="yellow" />
            <StatBadge value="12x" label="Parcelamos" color="black" />
          </div>

          {/* Trust badges */}
          <div className="mt-10 flex items-center gap-6 text-sm text-gray-500">
            <div className="flex items-center gap-2">
              <svg className="w-5 h-5 text-green-500" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12l2 2 4-4m5.618-4.016A11.955 11.955 0 0112 2.944a11.955 11.955 0 01-8.618 3.04A12.02 12.02 0 003 9c0 5.591 3.824 10.29 9 11.622 5.176-1.332 9-6.03 9-11.622 0-1.042-.133-2.052-.382-3.016z" />
              </svg>
              <span>Garantia Total</span>
            </div>
            <div className="flex items-center gap-2">
              <svg className="w-5 h-5 text-[#00D4FF]" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 10V3L4 14h7v7l9-11h-7z" />
              </svg>
              <span>Entrega Rápida</span>
            </div>
            <div className="flex items-center gap-2">
              <svg className="w-5 h-5 text-[#FF00FF]" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9.663 17h4.673M12 3v1m6.364 1.636l-.707.707M21 12h-1M4 12H3m3.343-5.657l-.707-.707m2.828 9.9a5 5 0 117.072 0l-.548.547A3.374 3.374 0 0014 18.469V19a2 2 0 11-4 0v-.531c0-.895-.356-1.754-.988-2.386l-.548-.547z" />
              </svg>
              <span>Equipe Própria</span>
            </div>
          </div>
        </div>
      </div>

      {/* Decorative elements */}
      <div className="absolute top-20 right-20 hidden xl:block">
        <RegistrationMark size={24} color="rgba(0,0,0,0.1)" />
      </div>
      <div className="absolute bottom-40 right-40 hidden xl:block">
        <RegistrationMark size={20} color="rgba(0,0,0,0.08)" />
      </div>

      {/* Bottom color bar */}
      <div className="absolute bottom-0 left-0 right-0">
        <CMYKColorBar variant="compact" height="h-1" />
      </div>

      {/* Print info */}
      <div className="absolute bottom-6 left-6 hidden lg:flex items-center gap-3 text-[10px] font-mono text-gray-400">
        <RegistrationMark size={10} color="rgba(0,0,0,0.2)" />
        <span>LITORAL-2026</span>
        <span>•</span>
        <span>CMYK</span>
      </div>

      <div className="absolute bottom-6 right-6 hidden lg:block text-[10px] font-mono text-gray-400">
        300 DPI • FOGRA39
      </div>
    </section>
  );
}
