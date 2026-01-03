'use client';

import Link from 'next/link';
import Image from 'next/image';
import { RegistrationMark, CMYKColorBar } from '../graphics';

const portfolioItems = [
  {
    title: 'Fachada Loja Fashion',
    category: 'Fachadas em ACM',
    color: 'cyan',
    image: '/images/placeholder/fachada-1.jpg',
  },
  {
    title: 'Letras Caixa Clínica',
    category: 'Letras Caixa',
    color: 'magenta',
    image: '/images/placeholder/loja-1.jpg',
  },
  {
    title: 'Envelopamento Van',
    category: 'Envelopamento',
    color: 'yellow',
    image: '/images/placeholder/veiculo-1.jpg',
  },
  {
    title: 'Vitrine Restaurante',
    category: 'Adesivos',
    color: 'black',
    image: '/images/placeholder/vitrine-1.jpg',
  },
  {
    title: 'Outdoor Campanha',
    category: 'Outdoors',
    color: 'cyan',
    image: '/images/placeholder/outdoor-1.jpg',
  },
  {
    title: 'Fachada Farmácia',
    category: 'Fachadas em ACM',
    color: 'magenta',
    image: '/images/placeholder/construcao-1.jpg',
  },
];

const colorMap = {
  cyan: 'bg-[#00D4FF]',
  magenta: 'bg-[#FF00FF]',
  yellow: 'bg-[#FFEB00]',
  black: 'bg-[#1A1A1A]',
};

export function PortfolioPreview() {
  return (
    <section className="py-20 lg:py-28 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Header */}
        <div className="flex flex-col md:flex-row md:items-end md:justify-between mb-12">
          <div className="max-w-2xl mb-6 md:mb-0">
            <div className="flex items-center gap-3 mb-4">
              <RegistrationMark size={16} color="#E5E5E5" />
              <p className="text-sm font-medium text-gray-400 uppercase tracking-wider">
                Portfólio
              </p>
            </div>
            <h2 className="text-3xl lg:text-4xl font-bold text-[#1A1A1A] mb-4">
              Projetos que transformam marcas
            </h2>
            <p className="text-gray-600">
              Conheça alguns dos nossos trabalhos realizados em Balneário Camboriú e região.
            </p>
          </div>
          <Link
            href="/portfolio"
            className="inline-flex items-center gap-2 text-[#1A1A1A] font-medium hover:gap-3 transition-all"
          >
            Ver todos os projetos
            <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 8l4 4m0 0l-4 4m4-4H3" />
            </svg>
          </Link>
        </div>

        {/* Portfolio Grid */}
        <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6">
          {portfolioItems.map((item, index) => (
            <Link
              key={index}
              href="/portfolio"
              className="group block"
            >
              <div className="relative aspect-[4/3] bg-gray-100 rounded-lg overflow-hidden mb-4">
                {/* Image */}
                <Image
                  src={item.image}
                  alt={item.title}
                  fill
                  className="object-cover transition-transform duration-500 group-hover:scale-110"
                />

                {/* Hover overlay */}
                <div className="absolute inset-0 bg-black/0 group-hover:bg-black/40 transition-colors flex items-center justify-center">
                  <span className="text-white font-medium opacity-0 group-hover:opacity-100 transition-opacity">
                    Ver projeto
                  </span>
                </div>

                {/* Color indicator */}
                <div className={`absolute bottom-0 left-0 right-0 h-1 ${colorMap[item.color as keyof typeof colorMap]}`} />
              </div>

              <h3 className="font-semibold text-[#1A1A1A] group-hover:text-gray-600 transition-colors">
                {item.title}
              </h3>
              <p className="text-sm text-gray-500">
                {item.category}
              </p>
            </Link>
          ))}
        </div>

        {/* Bottom color bar */}
        <div className="mt-16">
          <CMYKColorBar variant="compact" height="h-1" />
        </div>
      </div>
    </section>
  );
}
