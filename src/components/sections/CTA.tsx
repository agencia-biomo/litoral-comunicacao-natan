'use client';

import Link from 'next/link';

export function CTA() {
  return (
    <section className="py-20 lg:py-28 bg-[#FAFAFA]">
      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
        <h2 className="text-3xl sm:text-4xl lg:text-5xl font-bold text-[#1A1A1A] mb-6">
          Pronto para transformar sua marca?
        </h2>

        <p className="text-lg text-gray-600 mb-10 max-w-2xl mx-auto">
          Solicite um orçamento gratuito e sem compromisso.
          Nossa equipe está pronta para criar a comunicação visual perfeita para o seu negócio.
        </p>

        <div className="flex flex-col sm:flex-row gap-4 justify-center">
          <Link
            href="/contato"
            className="px-8 py-4 bg-[#1A1A1A] text-white font-medium rounded-full hover:bg-gray-800 transition-colors"
          >
            Solicitar Orçamento
          </Link>
          <a
            href="https://wa.me/5547996505700"
            target="_blank"
            rel="noopener noreferrer"
            className="px-8 py-4 border-2 border-[#1A1A1A] text-[#1A1A1A] font-medium rounded-full hover:bg-[#1A1A1A] hover:text-white transition-colors"
          >
            WhatsApp
          </a>
        </div>
      </div>
    </section>
  );
}
