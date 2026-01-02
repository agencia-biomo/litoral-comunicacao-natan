'use client';

import Link from 'next/link';
import { CropMarks, CMYKGradientOverlay, RegistrationMark, CMYKColorBar } from '../graphics';

interface StatProps {
  value: string;
  label: string;
  color: 'cyan' | 'magenta' | 'yellow' | 'black';
}

function Stat({ value, label, color }: StatProps) {
  const colorMap = {
    cyan: 'border-[#00D4FF]',
    magenta: 'border-[#FF00FF]',
    yellow: 'border-[#FFEB00]',
    black: 'border-[#1A1A1A]',
  };

  return (
    <div className={`text-center p-4 border-l-4 ${colorMap[color]} bg-white/80 backdrop-blur-sm rounded-r-lg shadow-sm`}>
      <div className="flex items-center justify-center gap-1 mb-1">
        <RegistrationMark size={12} color="#9CA3AF" />
        <span className="text-2xl lg:text-3xl font-bold text-[#1A1A1A]">{value}</span>
      </div>
      <span className="text-xs lg:text-sm text-gray-600 uppercase tracking-wider">{label}</span>
    </div>
  );
}

export function Hero() {
  return (
    <section className="relative min-h-screen flex items-center pt-20 overflow-hidden">
      {/* Background */}
      <div className="absolute inset-0 bg-gradient-to-br from-gray-50 via-white to-gray-100" />

      {/* CMYK Gradient Overlay */}
      <CMYKGradientOverlay />

      {/* Halftone Pattern - subtle */}
      <div
        className="absolute inset-0 opacity-[0.03]"
        style={{
          backgroundImage: `radial-gradient(circle, #00D4FF 1px, transparent 1px)`,
          backgroundSize: '20px 20px',
        }}
      />

      {/* Content */}
      <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12 lg:py-20">
        <div className="grid lg:grid-cols-2 gap-12 lg:gap-16 items-center">
          {/* Left - Text Content */}
          <div>
            <CropMarks className="inline-block mb-8">
              <span className="px-4 py-2 bg-white border border-gray-200 rounded-full text-sm font-medium text-gray-600">
                <span className="inline-flex gap-1 mr-2">
                  <span className="w-2 h-2 rounded-full bg-[#00D4FF]" />
                  <span className="w-2 h-2 rounded-full bg-[#FF00FF]" />
                  <span className="w-2 h-2 rounded-full bg-[#FFEB00]" />
                  <span className="w-2 h-2 rounded-full bg-[#1A1A1A]" />
                </span>
                Desde 2011 em Balneário Camboriú
              </span>
            </CropMarks>

            <h1 className="text-4xl sm:text-5xl lg:text-6xl font-bold leading-tight mb-6">
              <span className="text-[#1A1A1A]">Comunicação</span>
              <br />
              <span className="text-[#1A1A1A]">Visual que</span>
              <br />
              <span
                className="bg-gradient-to-r from-[#00D4FF] via-[#FF00FF] to-[#FFEB00] bg-clip-text text-transparent"
                style={{ backgroundSize: '200% 200%' }}
              >
                Transforma
              </span>
            </h1>

            <p className="text-lg lg:text-xl text-gray-600 mb-8 max-w-lg">
              Especialistas em fachadas, letras caixa, envelopamento veicular e muito mais.
              Transformamos sua marca em referência visual.
            </p>

            {/* CTAs */}
            <div className="flex flex-col sm:flex-row gap-4 mb-12">
              <Link
                href="/portfolio"
                className="px-8 py-4 bg-[#1A1A1A] text-white font-bold rounded-full hover:bg-gray-800 transition-colors text-center"
              >
                Ver Portfólio
              </Link>
              <Link
                href="/contato"
                className="px-8 py-4 bg-gradient-to-r from-[#00D4FF] via-[#FF00FF] to-[#FFEB00] text-black font-bold rounded-full hover:shadow-xl hover:scale-105 transition-all duration-300 text-center animate-gradient-shift"
                style={{ backgroundSize: '200% 200%' }}
              >
                Orçamento Grátis
              </Link>
            </div>

            {/* Stats */}
            <div className="grid grid-cols-2 lg:grid-cols-4 gap-4">
              <Stat value="14+" label="Anos" color="cyan" />
              <Stat value="500+" label="Projetos" color="magenta" />
              <Stat value="200+" label="Clientes" color="yellow" />
              <Stat value="12x" label="Parcelamento" color="black" />
            </div>
          </div>

          {/* Right - Visual Element */}
          <div className="relative hidden lg:block">
            <CropMarks size="lg" className="p-8">
              {/* Placeholder for hero image/visual */}
              <div className="relative aspect-square bg-gradient-to-br from-gray-100 to-gray-200 rounded-2xl overflow-hidden">
                {/* CMYK Circles Animation */}
                <div className="absolute inset-0 flex items-center justify-center">
                  <div className="relative w-64 h-64">
                    {/* Cyan circle */}
                    <div
                      className="absolute w-32 h-32 rounded-full bg-[#00D4FF]/30 blur-xl animate-float"
                      style={{ top: '0', left: '20%', animationDelay: '0s' }}
                    />
                    {/* Magenta circle */}
                    <div
                      className="absolute w-40 h-40 rounded-full bg-[#FF00FF]/30 blur-xl animate-float"
                      style={{ bottom: '10%', right: '10%', animationDelay: '1s' }}
                    />
                    {/* Yellow circle */}
                    <div
                      className="absolute w-28 h-28 rounded-full bg-[#FFEB00]/30 blur-xl animate-float"
                      style={{ bottom: '0', left: '10%', animationDelay: '2s' }}
                    />
                  </div>
                </div>

                {/* Center content */}
                <div className="absolute inset-0 flex items-center justify-center">
                  <div className="text-center">
                    <div className="w-24 h-24 mx-auto mb-4">
                      <svg viewBox="0 0 100 100" className="w-full h-full">
                        <path d="M 50 10 A 40 40 0 0 1 90 50" fill="none" stroke="#00D4FF" strokeWidth="8" strokeLinecap="round" />
                        <path d="M 90 50 A 40 40 0 0 1 50 90" fill="none" stroke="#FF00FF" strokeWidth="8" strokeLinecap="round" />
                        <path d="M 50 90 A 40 40 0 0 1 10 50" fill="none" stroke="#FFEB00" strokeWidth="8" strokeLinecap="round" />
                        <path d="M 10 50 A 40 40 0 0 1 50 10" fill="none" stroke="#1A1A1A" strokeWidth="8" strokeLinecap="round" />
                      </svg>
                    </div>
                    <p className="text-sm text-gray-500 font-mono">
                      A arte da impressão
                    </p>
                  </div>
                </div>

                {/* Registration marks in corners */}
                <RegistrationMark size={20} color="#BDBDBD" className="absolute top-4 left-4" />
                <RegistrationMark size={20} color="#BDBDBD" className="absolute top-4 right-4" />
                <RegistrationMark size={20} color="#BDBDBD" className="absolute bottom-4 left-4" />
                <RegistrationMark size={20} color="#BDBDBD" className="absolute bottom-4 right-4" />
              </div>
            </CropMarks>

            {/* Color bar below */}
            <div className="mt-4 px-8">
              <CMYKColorBar variant="full" height="h-2" className="rounded-full overflow-hidden" />
            </div>
          </div>
        </div>
      </div>

      {/* Bottom Color Bar */}
      <div className="absolute bottom-0 left-0 right-0">
        <CMYKColorBar variant="compact" height="h-1" />
      </div>
    </section>
  );
}
