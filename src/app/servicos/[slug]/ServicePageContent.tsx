'use client';

import { useState } from 'react';
import Link from 'next/link';
import { Service } from '@/lib/services';
import { ServiceModal } from '@/components/ui';
import { RegistrationMark, CMYKColorBar } from '@/components/graphics';

const colorMap = {
  cyan: { border: 'border-[#00D4FF]', bg: 'bg-[#00D4FF]', text: 'text-[#00D4FF]' },
  magenta: { border: 'border-[#FF00FF]', bg: 'bg-[#FF00FF]', text: 'text-[#FF00FF]' },
  yellow: { border: 'border-[#FFEB00]', bg: 'bg-[#FFEB00]', text: 'text-[#FFEB00]' },
  black: { border: 'border-[#1A1A1A]', bg: 'bg-[#1A1A1A]', text: 'text-[#1A1A1A]' },
};

const iconMap: Record<string, React.ReactNode> = {
  building: (
    <svg fill="none" stroke="currentColor" viewBox="0 0 24 24" className="w-full h-full">
      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M19 21V5a2 2 0 00-2-2H7a2 2 0 00-2 2v16m14 0h2m-2 0h-5m-9 0H3m2 0h5M9 7h1m-1 4h1m4-4h1m-1 4h1m-5 10v-5a1 1 0 011-1h2a1 1 0 011 1v5m-4 0h4" />
    </svg>
  ),
  text: (
    <svg fill="none" stroke="currentColor" viewBox="0 0 24 24" className="w-full h-full">
      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M4 6h16M4 12h8m-8 6h16" />
    </svg>
  ),
  car: (
    <svg fill="none" stroke="currentColor" viewBox="0 0 24 24" className="w-full h-full">
      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M8 7h12m0 0l-4-4m4 4l-4 4m0 6H4m0 0l4 4m-4-4l4-4" />
    </svg>
  ),
  window: (
    <svg fill="none" stroke="currentColor" viewBox="0 0 24 24" className="w-full h-full">
      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M4 16l4.586-4.586a2 2 0 012.828 0L16 16m-2-2l1.586-1.586a2 2 0 012.828 0L20 14m-6-6h.01M6 20h12a2 2 0 002-2V6a2 2 0 00-2-2H6a2 2 0 00-2 2v12a2 2 0 002 2z" />
    </svg>
  ),
  billboard: (
    <svg fill="none" stroke="currentColor" viewBox="0 0 24 24" className="w-full h-full">
      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M9 17V7m0 10a2 2 0 01-2 2H5a2 2 0 01-2-2V7a2 2 0 012-2h2a2 2 0 012 2m0 10a2 2 0 002 2h2a2 2 0 002-2M9 7a2 2 0 012-2h2a2 2 0 012 2m0 10V7m0 10a2 2 0 002 2h2a2 2 0 002-2V7a2 2 0 00-2-2h-2a2 2 0 00-2 2" />
    </svg>
  ),
  construction: (
    <svg fill="none" stroke="currentColor" viewBox="0 0 24 24" className="w-full h-full">
      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M12 15v2m-6 4h12a2 2 0 002-2v-6a2 2 0 00-2-2H6a2 2 0 00-2 2v6a2 2 0 002 2zm10-10V7a4 4 0 00-8 0v4h8z" />
    </svg>
  ),
  megaphone: (
    <svg fill="none" stroke="currentColor" viewBox="0 0 24 24" className="w-full h-full">
      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M11 5.882V19.24a1.76 1.76 0 01-3.417.592l-2.147-6.15M18 13a3 3 0 100-6M5.436 13.683A4.001 4.001 0 017 6h1.832c4.1 0 7.625-1.234 9.168-3v14c-1.543-1.766-5.067-3-9.168-3H7a3.988 3.988 0 01-1.564-.317z" />
    </svg>
  ),
};

interface ServicePageContentProps {
  service: Service;
  prevService: Service | null;
  nextService: Service | null;
}

export function ServicePageContent({ service, prevService, nextService }: ServicePageContentProps) {
  const [isModalOpen, setIsModalOpen] = useState(false);
  const colors = colorMap[service.color];

  return (
    <>
      <main className="min-h-screen bg-[#F8FAFC]">
        {/* Hero */}
        <section className="relative py-20 lg:py-28 bg-white overflow-hidden">
          {/* Subtle pattern */}
          <div
            className="absolute inset-0 opacity-[0.015]"
            style={{
              backgroundImage: `radial-gradient(#1A1A1A 1px, transparent 1px)`,
              backgroundSize: '24px 24px',
            }}
          />

          <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="grid lg:grid-cols-2 gap-12 lg:gap-20 items-center">
              {/* Content */}
              <div>
                {/* Breadcrumb */}
                <nav className="flex items-center gap-2 text-sm text-gray-400 mb-8">
                  <Link href="/" className="hover:text-[#1A1A1A] transition-colors">
                    Home
                  </Link>
                  <span>/</span>
                  <Link href="/servicos" className="hover:text-[#1A1A1A] transition-colors">
                    Serviços
                  </Link>
                  <span>/</span>
                  <span className="text-[#1A1A1A]">{service.title}</span>
                </nav>

                {/* Header */}
                <div className="flex items-start gap-4">
                  <RegistrationMark size={16} color="#E5E5E5" className="mt-2 hidden sm:block" />
                  <div>
                    <div className={`inline-block w-12 h-1 ${colors.bg} mb-4`} />
                    <h1 className="text-4xl lg:text-5xl font-bold text-[#1A1A1A] mb-6">
                      {service.title}
                    </h1>
                    <p className="text-lg text-gray-600 mb-8">
                      {service.fullDescription}
                    </p>

                    {/* CTAs */}
                    <div className="flex flex-wrap gap-4">
                      <Link
                        href="/contato"
                        className="px-6 py-3 bg-[#1A1A1A] text-white font-medium rounded-full hover:bg-gray-800 transition-colors"
                      >
                        Solicitar Orçamento
                      </Link>
                      <button
                        onClick={() => setIsModalOpen(true)}
                        className="px-6 py-3 border-2 border-[#1A1A1A] text-[#1A1A1A] font-medium rounded-full hover:bg-[#1A1A1A] hover:text-white transition-colors inline-flex items-center gap-2"
                      >
                        <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 6h16M4 12h16M4 18h16" />
                        </svg>
                        Ver Todos os Serviços
                      </button>
                    </div>
                  </div>
                </div>
              </div>

              {/* Visual */}
              <div className="flex justify-center">
                <div className="relative">
                  {/* Registration marks */}
                  <RegistrationMark size={12} color="#E5E5E5" className="absolute -top-6 -left-6" />
                  <RegistrationMark size={12} color="#E5E5E5" className="absolute -top-6 -right-6" />
                  <RegistrationMark size={12} color="#E5E5E5" className="absolute -bottom-6 -left-6" />
                  <RegistrationMark size={12} color="#E5E5E5" className="absolute -bottom-6 -right-6" />

                  {/* Icon container */}
                  <div className={`w-48 h-48 lg:w-64 lg:h-64 border-2 ${colors.border} rounded-2xl flex items-center justify-center bg-white shadow-lg`}>
                    <div className="w-24 h-24 lg:w-32 lg:h-32 text-gray-300">
                      {iconMap[service.icon]}
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>

          <CMYKColorBar variant="compact" height="h-1" className="absolute bottom-0 left-0 right-0" />
        </section>

        {/* Features */}
        <section className="py-16 lg:py-24">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="max-w-3xl mx-auto">
              <h2 className="text-2xl lg:text-3xl font-bold text-[#1A1A1A] mb-8 text-center">
                O que oferecemos
              </h2>

              <div className="grid sm:grid-cols-2 gap-4">
                {service.features.map((feature, index) => (
                  <div
                    key={index}
                    className={`bg-white border-l-2 ${colors.border} p-4 flex items-center gap-3`}
                  >
                    <svg className={`w-5 h-5 flex-shrink-0 ${colors.text}`} fill="currentColor" viewBox="0 0 20 20">
                      <path fillRule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clipRule="evenodd" />
                    </svg>
                    <span className="text-gray-700">{feature}</span>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </section>

        {/* Process */}
        <section className="py-16 lg:py-24 bg-white">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <h2 className="text-2xl lg:text-3xl font-bold text-[#1A1A1A] mb-12 text-center">
              Como funciona
            </h2>

            <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-8">
              {[
                { step: '01', title: 'Contato', desc: 'Você entra em contato conosco pelo site ou WhatsApp.' },
                { step: '02', title: 'Briefing', desc: 'Entendemos suas necessidades e objetivos.' },
                { step: '03', title: 'Orçamento', desc: 'Enviamos uma proposta detalhada sem compromisso.' },
                { step: '04', title: 'Execução', desc: 'Produzimos e instalamos com qualidade garantida.' },
              ].map((item, index) => (
                <div key={index} className="text-center">
                  <div className="text-4xl font-bold text-gray-100 mb-2">{item.step}</div>
                  <h3 className="font-semibold text-[#1A1A1A] mb-2">{item.title}</h3>
                  <p className="text-sm text-gray-500">{item.desc}</p>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* Navigation */}
        <section className="py-8 border-t border-gray-200 bg-white">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="flex items-center justify-between">
              {prevService ? (
                <Link
                  href={`/servicos/${prevService.slug}`}
                  className="group flex items-center gap-3 text-gray-500 hover:text-[#1A1A1A] transition-colors"
                >
                  <svg className="w-5 h-5 group-hover:-translate-x-1 transition-transform" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 19l-7-7 7-7" />
                  </svg>
                  <div className="text-left">
                    <p className="text-xs text-gray-400">Anterior</p>
                    <p className="font-medium">{prevService.title}</p>
                  </div>
                </Link>
              ) : (
                <div />
              )}

              <button
                onClick={() => setIsModalOpen(true)}
                className="p-3 hover:bg-gray-100 rounded-full transition-colors"
                aria-label="Ver todos os serviços"
              >
                <svg className="w-6 h-6 text-gray-500" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 6h16M4 12h16M4 18h16" />
                </svg>
              </button>

              {nextService ? (
                <Link
                  href={`/servicos/${nextService.slug}`}
                  className="group flex items-center gap-3 text-gray-500 hover:text-[#1A1A1A] transition-colors"
                >
                  <div className="text-right">
                    <p className="text-xs text-gray-400">Próximo</p>
                    <p className="font-medium">{nextService.title}</p>
                  </div>
                  <svg className="w-5 h-5 group-hover:translate-x-1 transition-transform" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
                  </svg>
                </Link>
              ) : (
                <div />
              )}
            </div>
          </div>
        </section>

        {/* CTA */}
        <section className="py-16 lg:py-24 bg-[#1A1A1A]">
          <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
            <h2 className="text-3xl lg:text-4xl font-bold text-white mb-6">
              Pronto para começar?
            </h2>
            <p className="text-lg text-gray-400 mb-8">
              Solicite um orçamento gratuito e sem compromisso para seu projeto de {service.title.toLowerCase()}.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Link
                href="/contato"
                className="px-8 py-4 bg-white text-[#1A1A1A] font-medium rounded-full hover:bg-gray-100 transition-colors"
              >
                Solicitar Orçamento
              </Link>
              <a
                href="https://wa.me/5547996505700"
                target="_blank"
                rel="noopener noreferrer"
                className="px-8 py-4 border-2 border-white text-white font-medium rounded-full hover:bg-white hover:text-[#1A1A1A] transition-colors"
              >
                WhatsApp
              </a>
            </div>
          </div>
        </section>
      </main>

      {/* Service Modal */}
      <ServiceModal
        isOpen={isModalOpen}
        onClose={() => setIsModalOpen(false)}
        currentSlug={service.slug}
      />
    </>
  );
}
