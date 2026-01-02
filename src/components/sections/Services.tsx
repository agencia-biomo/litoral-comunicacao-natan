'use client';

import Link from 'next/link';

interface ServiceCardProps {
  title: string;
  description: string;
  href: string;
  color: 'cyan' | 'magenta' | 'yellow' | 'black';
  icon: React.ReactNode;
}

function ServiceCard({ title, description, href, color, icon }: ServiceCardProps) {
  const colorMap = {
    cyan: 'border-l-[#00D4FF]',
    magenta: 'border-l-[#FF00FF]',
    yellow: 'border-l-[#FFEB00]',
    black: 'border-l-[#1A1A1A]',
  };

  return (
    <Link href={href} className="group">
      <div className={`bg-white border-l-2 ${colorMap[color]} p-6 hover:shadow-lg transition-all duration-300`}>
        <div className="w-10 h-10 mb-4 text-gray-400 group-hover:text-[#1A1A1A] transition-colors">
          {icon}
        </div>
        <h3 className="text-lg font-semibold text-[#1A1A1A] mb-2">
          {title}
        </h3>
        <p className="text-sm text-gray-500 mb-4">
          {description}
        </p>
        <span className="text-sm font-medium text-gray-400 group-hover:text-[#1A1A1A] transition-colors inline-flex items-center gap-1">
          Saiba mais
          <svg className="w-4 h-4 group-hover:translate-x-1 transition-transform" fill="none" stroke="currentColor" viewBox="0 0 24 24">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
          </svg>
        </span>
      </div>
    </Link>
  );
}

const services: ServiceCardProps[] = [
  {
    title: 'Fachadas em ACM',
    description: 'Fachadas modernas e duráveis em alumínio composto.',
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
    description: 'Letras em acrílico, metal e PVC iluminadas ou não.',
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
    description: 'Transforme seu veículo em mídia móvel.',
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
    description: 'Adesivos perfurados, jateados e decorativos.',
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
    description: 'Impressão de lona e painéis para grandes formatos.',
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
    description: 'Tapumes personalizados para obras.',
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
    <section className="py-20 lg:py-28 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Header */}
        <div className="max-w-2xl mb-12">
          <p className="text-sm font-medium text-gray-400 uppercase tracking-wider mb-3">
            Serviços
          </p>
          <h2 className="text-3xl lg:text-4xl font-bold text-[#1A1A1A] mb-4">
            Soluções completas em comunicação visual
          </h2>
          <p className="text-gray-600">
            Transformamos sua marca em referência no mercado com qualidade e tecnologia.
          </p>
        </div>

        {/* Services Grid */}
        <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-px bg-gray-100">
          {services.map((service) => (
            <ServiceCard key={service.href} {...service} />
          ))}
        </div>
      </div>
    </section>
  );
}
