'use client';

import Link from 'next/link';
import { CropMarks, RegistrationMark, CMYKColorBar } from '../graphics';

interface ServiceCardProps {
  title: string;
  description: string;
  href: string;
  color: 'cyan' | 'magenta' | 'yellow' | 'black';
  icon: React.ReactNode;
}

function ServiceCard({ title, description, href, color, icon }: ServiceCardProps) {
  const colorMap = {
    cyan: {
      border: 'border-l-[#00D4FF]',
      bg: 'hover:bg-[#00D4FF]/5',
      shadow: 'hover:shadow-[#00D4FF]/20',
      bar: 'bg-[#00D4FF]',
    },
    magenta: {
      border: 'border-l-[#FF00FF]',
      bg: 'hover:bg-[#FF00FF]/5',
      shadow: 'hover:shadow-[#FF00FF]/20',
      bar: 'bg-[#FF00FF]',
    },
    yellow: {
      border: 'border-l-[#FFEB00]',
      bg: 'hover:bg-[#FFEB00]/5',
      shadow: 'hover:shadow-[#FFEB00]/20',
      bar: 'bg-[#FFEB00]',
    },
    black: {
      border: 'border-l-[#1A1A1A]',
      bg: 'hover:bg-gray-50',
      shadow: 'hover:shadow-gray-200/50',
      bar: 'bg-[#1A1A1A]',
    },
  };

  const styles = colorMap[color];

  return (
    <Link href={href} className="block group">
      <div className={`relative bg-white border-l-4 ${styles.border} rounded-r-xl p-6 shadow-md ${styles.bg} ${styles.shadow} hover:shadow-xl transition-all duration-300 hover:-translate-y-1`}>
        {/* Registration mark */}
        <RegistrationMark size={16} color="#E0E0E0" className="absolute top-3 right-3" />

        {/* Icon */}
        <div className="w-12 h-12 mb-4 text-gray-700 group-hover:scale-110 transition-transform duration-300">
          {icon}
        </div>

        {/* Content */}
        <h3 className="text-lg font-bold text-[#1A1A1A] mb-2 group-hover:text-gray-800">
          {title}
        </h3>
        <p className="text-sm text-gray-600 mb-4 line-clamp-2">
          {description}
        </p>

        {/* Link indicator */}
        <span className="inline-flex items-center text-sm font-medium text-gray-500 group-hover:text-[#1A1A1A] transition-colors">
          Saiba mais
          <svg className="w-4 h-4 ml-1 group-hover:translate-x-1 transition-transform" fill="none" stroke="currentColor" viewBox="0 0 24 24">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
          </svg>
        </span>

        {/* Color bar */}
        <div className={`absolute bottom-0 left-0 right-0 h-1 ${styles.bar} rounded-b-xl opacity-50 group-hover:opacity-100 transition-opacity`} />
      </div>
    </Link>
  );
}

const services: ServiceCardProps[] = [
  {
    title: 'Fachadas em ACM',
    description: 'Fachadas modernas e duráveis em alumínio composto com instalação profissional.',
    href: '/servicos/fachadas-acm',
    color: 'cyan',
    icon: (
      <svg fill="none" stroke="currentColor" viewBox="0 0 24 24" className="w-full h-full">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M19 21V5a2 2 0 00-2-2H7a2 2 0 00-2 2v16m14 0h2m-2 0h-5m-9 0H3m2 0h5M9 7h1m-1 4h1m4-4h1m-1 4h1m-5 10v-5a1 1 0 011-1h2a1 1 0 011 1v5m-4 0h4" />
      </svg>
    ),
  },
  {
    title: 'Letras Caixa',
    description: 'Letras em acrílico, metal e PVC iluminadas ou não para destaque da sua marca.',
    href: '/servicos/letras-caixa',
    color: 'magenta',
    icon: (
      <svg fill="none" stroke="currentColor" viewBox="0 0 24 24" className="w-full h-full">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M4 6h16M4 12h8m-8 6h16" />
      </svg>
    ),
  },
  {
    title: 'Envelopamento Veicular',
    description: 'Transforme seu veículo em mídia móvel com adesivos de alta qualidade.',
    href: '/servicos/envelopamento-veicular',
    color: 'yellow',
    icon: (
      <svg fill="none" stroke="currentColor" viewBox="0 0 24 24" className="w-full h-full">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M8 7h12m0 0l-4-4m4 4l-4 4m0 6H4m0 0l4 4m-4-4l4-4" />
      </svg>
    ),
  },
  {
    title: 'Adesivos & Vitrines',
    description: 'Adesivos perfurados, jateados e decorativos para vitrines e ambientes.',
    href: '/servicos/adesivos-vitrines',
    color: 'black',
    icon: (
      <svg fill="none" stroke="currentColor" viewBox="0 0 24 24" className="w-full h-full">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M4 16l4.586-4.586a2 2 0 012.828 0L16 16m-2-2l1.586-1.586a2 2 0 012.828 0L20 14m-6-6h.01M6 20h12a2 2 0 002-2V6a2 2 0 00-2-2H6a2 2 0 00-2 2v12a2 2 0 002 2z" />
      </svg>
    ),
  },
  {
    title: 'Outdoors & Painéis',
    description: 'Impressão de lona e painéis para outdoors e grandes formatos.',
    href: '/servicos/outdoors-paineis',
    color: 'cyan',
    icon: (
      <svg fill="none" stroke="currentColor" viewBox="0 0 24 24" className="w-full h-full">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M9 17V7m0 10a2 2 0 01-2 2H5a2 2 0 01-2-2V7a2 2 0 012-2h2a2 2 0 012 2m0 10a2 2 0 002 2h2a2 2 0 002-2M9 7a2 2 0 012-2h2a2 2 0 012 2m0 10V7m0 10a2 2 0 002 2h2a2 2 0 002-2V7a2 2 0 00-2-2h-2a2 2 0 00-2 2" />
      </svg>
    ),
  },
  {
    title: 'Tapumes',
    description: 'Tapumes personalizados para obras com impressão de alta qualidade.',
    href: '/servicos/tapumes',
    color: 'magenta',
    icon: (
      <svg fill="none" stroke="currentColor" viewBox="0 0 24 24" className="w-full h-full">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M12 15v2m-6 4h12a2 2 0 002-2v-6a2 2 0 00-2-2H6a2 2 0 00-2 2v6a2 2 0 002 2zm10-10V7a4 4 0 00-8 0v4h8z" />
      </svg>
    ),
  },
];

export function Services() {
  return (
    <section className="py-20 lg:py-28 bg-gray-50 relative overflow-hidden">
      {/* Subtle halftone pattern */}
      <div
        className="absolute inset-0 opacity-[0.02]"
        style={{
          backgroundImage: `radial-gradient(circle, #FF00FF 1px, transparent 1px)`,
          backgroundSize: '30px 30px',
        }}
      />

      <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Header */}
        <div className="text-center mb-12 lg:mb-16">
          <CropMarks size="sm" className="inline-block mb-6">
            <span className="px-4 py-2 bg-white border border-gray-200 rounded-full text-sm font-medium text-gray-600 font-mono">
              SERVIÇOS
            </span>
          </CropMarks>

          <h2 className="text-3xl lg:text-4xl font-bold text-[#1A1A1A] mb-4">
            Nossos Serviços
          </h2>
          <p className="text-lg text-gray-600 max-w-2xl mx-auto">
            Soluções completas em comunicação visual para transformar sua marca em referência no mercado.
          </p>
        </div>

        {/* Services Grid */}
        <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6 lg:gap-8">
          {services.map((service) => (
            <ServiceCard key={service.href} {...service} />
          ))}
        </div>

        {/* Color Bar */}
        <div className="mt-12 lg:mt-16 max-w-2xl mx-auto">
          <CMYKColorBar variant="full" height="h-2" className="rounded-full overflow-hidden" />
        </div>
      </div>
    </section>
  );
}
