'use client';

import { RegistrationMark } from '../graphics';

const testimonials = [
  {
    quote: 'A Litoral transformou completamente a fachada da nossa loja. O resultado superou nossas expectativas e já notamos um aumento no fluxo de clientes.',
    author: 'Carlos Silva',
    company: 'Loja Fashion BC',
    service: 'Fachada em ACM',
    color: 'cyan',
  },
  {
    quote: 'Profissionalismo do início ao fim. As letras caixa iluminadas ficaram perfeitas e o atendimento foi excepcional. Recomendo a todos!',
    author: 'Ana Paula Mendes',
    company: 'Clínica Estética Viva',
    service: 'Letras Caixa',
    color: 'magenta',
  },
  {
    quote: 'O envelopamento da nossa frota de veículos foi um investimento excelente. A qualidade do material e do trabalho é impecável.',
    author: 'Roberto Ferreira',
    company: 'Transportadora RF',
    service: 'Envelopamento Veicular',
    color: 'yellow',
  },
  {
    quote: 'Trabalham com muita seriedade e competência. Fizemos toda a comunicação visual da nossa empresa com eles. Nota 10!',
    author: 'Mariana Costa',
    company: 'Escritório MC Advocacia',
    service: 'Comunicação Visual',
    color: 'black',
  },
];

const colorMap = {
  cyan: 'border-l-[#00D4FF]',
  magenta: 'border-l-[#FF00FF]',
  yellow: 'border-l-[#FFEB00]',
  black: 'border-l-[#1A1A1A]',
};

export function Testimonials() {
  return (
    <section className="py-20 lg:py-28 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Header */}
        <div className="text-center mb-16">
          <div className="flex justify-center mb-4">
            <RegistrationMark size={20} color="#E5E5E5" />
          </div>
          <p className="text-sm font-medium text-gray-400 uppercase tracking-wider mb-3">
            Depoimentos
          </p>
          <h2 className="text-3xl lg:text-4xl font-bold text-[#1A1A1A] mb-4">
            O que nossos clientes dizem
          </h2>
          <p className="text-gray-600 max-w-2xl mx-auto">
            A satisfação dos nossos clientes é a nossa maior recompensa.
          </p>
        </div>

        {/* Testimonials Grid */}
        <div className="grid md:grid-cols-2 gap-6">
          {testimonials.map((testimonial, index) => (
            <div
              key={index}
              className={`bg-[#FAFAFA] border-l-2 ${colorMap[testimonial.color as keyof typeof colorMap]} p-8`}
            >
              {/* Quote */}
              <div className="mb-6">
                <svg className="w-8 h-8 text-gray-200 mb-4" fill="currentColor" viewBox="0 0 24 24">
                  <path d="M14.017 21v-7.391c0-5.704 3.731-9.57 8.983-10.609l.995 2.151c-2.432.917-3.995 3.638-3.995 5.849h4v10h-9.983zm-14.017 0v-7.391c0-5.704 3.748-9.57 9-10.609l.996 2.151c-2.433.917-3.996 3.638-3.996 5.849h3.983v10h-9.983z" />
                </svg>
                <p className="text-gray-700 leading-relaxed">
                  {testimonial.quote}
                </p>
              </div>

              {/* Author */}
              <div className="flex items-center justify-between">
                <div>
                  <p className="font-semibold text-[#1A1A1A]">
                    {testimonial.author}
                  </p>
                  <p className="text-sm text-gray-500">
                    {testimonial.company}
                  </p>
                </div>
                <span className="text-xs font-medium text-gray-400 px-3 py-1 bg-white rounded-full border border-gray-200">
                  {testimonial.service}
                </span>
              </div>
            </div>
          ))}
        </div>

        {/* Google Reviews CTA */}
        <div className="mt-12 text-center">
          <div className="inline-flex items-center gap-2 text-sm text-gray-500">
            <div className="flex">
              {[1, 2, 3, 4, 5].map((star) => (
                <svg key={star} className="w-5 h-5 text-yellow-400" fill="currentColor" viewBox="0 0 20 20">
                  <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z" />
                </svg>
              ))}
            </div>
            <span>4.9 de média no Google</span>
          </div>
        </div>
      </div>
    </section>
  );
}
