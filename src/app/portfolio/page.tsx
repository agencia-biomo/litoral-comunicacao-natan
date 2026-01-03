'use client';

import { useState } from 'react';
import Image from 'next/image';
import Link from 'next/link';
import { RegistrationMark, CMYKColorBar } from '@/components/graphics';

const categories = [
  { id: 'all', name: 'Todos', color: 'black' },
  { id: 'fachadas', name: 'Fachadas ACM', color: 'cyan' },
  { id: 'letras', name: 'Letras Caixa', color: 'magenta' },
  { id: 'envelopamento', name: 'Envelopamento', color: 'yellow' },
  { id: 'adesivos', name: 'Adesivos', color: 'black' },
  { id: 'outdoors', name: 'Outdoors', color: 'cyan' },
];

const projects = [
  { id: 1, title: 'Fachada Loja Centro', category: 'fachadas', image: '/images/placeholder/fachada-1.jpg' },
  { id: 2, title: 'Letras Iluminadas', category: 'letras', image: '/images/placeholder/loja-1.jpg' },
  { id: 3, title: 'Envelopamento Van', category: 'envelopamento', image: '/images/placeholder/veiculo-1.jpg' },
  { id: 4, title: 'Vitrine Decorada', category: 'adesivos', image: '/images/placeholder/vitrine-1.jpg' },
  { id: 5, title: 'Outdoor Rodovia', category: 'outdoors', image: '/images/placeholder/outdoor-1.jpg' },
  { id: 6, title: 'Fachada Comercial', category: 'fachadas', image: '/images/placeholder/construcao-1.jpg' },
  { id: 7, title: 'Projeto Corporativo', category: 'fachadas', image: '/images/placeholder/projeto-1.jpg' },
  { id: 8, title: 'Identidade Visual', category: 'letras', image: '/images/placeholder/projeto-2.jpg' },
  { id: 9, title: 'Frota Completa', category: 'envelopamento', image: '/images/placeholder/projeto-3.jpg' },
  { id: 10, title: 'Escritório Moderno', category: 'adesivos', image: '/images/placeholder/escritorio-1.jpg' },
  { id: 11, title: 'Equipe em Ação', category: 'fachadas', image: '/images/placeholder/equipe-1.jpg' },
  { id: 12, title: 'Projeto Hero', category: 'fachadas', image: '/images/placeholder/hero-1.jpg' },
];

const colorMap: Record<string, { bg: string; border: string; text: string }> = {
  cyan: { bg: 'bg-[#00D4FF]', border: 'border-[#00D4FF]', text: 'text-[#00D4FF]' },
  magenta: { bg: 'bg-[#FF00FF]', border: 'border-[#FF00FF]', text: 'text-[#FF00FF]' },
  yellow: { bg: 'bg-[#FFEB00]', border: 'border-[#FFEB00]', text: 'text-[#FFEB00]' },
  black: { bg: 'bg-[#1A1A1A]', border: 'border-[#1A1A1A]', text: 'text-[#1A1A1A]' },
};

export default function PortfolioPage() {
  const [activeCategory, setActiveCategory] = useState('all');
  const [selectedProject, setSelectedProject] = useState<typeof projects[0] | null>(null);

  const filteredProjects = activeCategory === 'all'
    ? projects
    : projects.filter(p => p.category === activeCategory);

  return (
    <main className="min-h-screen bg-white pt-20">
      {/* Header */}
      <section className="py-16 lg:py-24 bg-[#F8FAFC]">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          {/* Breadcrumb */}
          <nav className="flex items-center gap-2 text-sm text-gray-500 mb-8">
            <Link href="/" className="hover:text-[#1A1A1A]">Home</Link>
            <span>/</span>
            <span className="text-[#1A1A1A]">Portfólio</span>
          </nav>

          <div className="flex items-start gap-4 mb-6">
            <RegistrationMark size={20} color="#E5E5E5" />
            <div>
              <h1 className="text-4xl lg:text-5xl font-bold text-[#1A1A1A] mb-4">
                Nosso Portfólio
              </h1>
              <p className="text-lg text-gray-600 max-w-2xl">
                Mais de 500 projetos realizados em Balneário Camboriú e região.
                Confira alguns dos nossos trabalhos em comunicação visual.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Filters */}
      <section className="sticky top-16 z-30 bg-white border-b border-gray-100 py-4">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex flex-wrap gap-2">
            {categories.map((cat) => (
              <button
                key={cat.id}
                onClick={() => setActiveCategory(cat.id)}
                className={`px-4 py-2 rounded-full text-sm font-medium transition-all ${
                  activeCategory === cat.id
                    ? `${colorMap[cat.color].bg} text-white`
                    : 'bg-gray-100 text-gray-600 hover:bg-gray-200'
                }`}
              >
                {cat.name}
              </button>
            ))}
          </div>
        </div>
      </section>

      {/* Gallery Grid */}
      <section className="py-12 lg:py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6">
            {filteredProjects.map((project, index) => {
              const category = categories.find(c => c.id === project.category);
              const color = category?.color || 'black';

              return (
                <div
                  key={project.id}
                  className="group relative aspect-[4/3] rounded-xl overflow-hidden cursor-pointer"
                  onClick={() => setSelectedProject(project)}
                  style={{ animationDelay: `${index * 50}ms` }}
                >
                  <Image
                    src={project.image}
                    alt={project.title}
                    fill
                    className="object-cover transition-transform duration-500 group-hover:scale-110"
                  />
                  {/* Overlay */}
                  <div className="absolute inset-0 bg-gradient-to-t from-black/70 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity" />
                  {/* Content */}
                  <div className="absolute bottom-0 left-0 right-0 p-4 translate-y-4 group-hover:translate-y-0 opacity-0 group-hover:opacity-100 transition-all">
                    <span className={`inline-block px-2 py-0.5 text-xs font-medium rounded ${colorMap[color].bg} text-white mb-2`}>
                      {category?.name}
                    </span>
                    <h3 className="text-white font-semibold">{project.title}</h3>
                  </div>
                  {/* Border accent */}
                  <div className={`absolute bottom-0 left-0 right-0 h-1 ${colorMap[color].bg} transform scale-x-0 group-hover:scale-x-100 transition-transform origin-left`} />
                </div>
              );
            })}
          </div>

          {/* Empty state */}
          {filteredProjects.length === 0 && (
            <div className="text-center py-20">
              <p className="text-gray-500">Nenhum projeto encontrado nesta categoria.</p>
            </div>
          )}
        </div>
      </section>

      {/* CTA */}
      <section className="py-16 bg-[#1A1A1A]">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="text-3xl font-bold text-white mb-4">
            Quer ver seu projeto aqui?
          </h2>
          <p className="text-gray-400 mb-8">
            Entre em contato e solicite um orçamento sem compromisso.
          </p>
          <Link
            href="/contato"
            className="inline-flex items-center gap-2 px-8 py-4 bg-white text-[#1A1A1A] font-semibold rounded-full hover:bg-gray-100 transition-colors"
          >
            Solicitar Orçamento
            <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 8l4 4m0 0l-4 4m4-4H3" />
            </svg>
          </Link>
        </div>
      </section>
      <CMYKColorBar variant="compact" height="h-2" />

      {/* Lightbox Modal */}
      {selectedProject && (
        <div
          className="fixed inset-0 z-50 bg-black/90 flex items-center justify-center p-4"
          onClick={() => setSelectedProject(null)}
        >
          <button
            className="absolute top-4 right-4 text-white hover:text-gray-300"
            onClick={() => setSelectedProject(null)}
          >
            <svg className="w-8 h-8" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
            </svg>
          </button>
          <div className="relative max-w-4xl w-full aspect-video" onClick={(e) => e.stopPropagation()}>
            <Image
              src={selectedProject.image}
              alt={selectedProject.title}
              fill
              className="object-contain"
            />
            <div className="absolute bottom-0 left-0 right-0 p-6 bg-gradient-to-t from-black/80 to-transparent">
              <h3 className="text-2xl font-bold text-white">{selectedProject.title}</h3>
              <p className="text-gray-300 text-sm mt-1">
                {categories.find(c => c.id === selectedProject.category)?.name}
              </p>
            </div>
          </div>
        </div>
      )}
    </main>
  );
}
