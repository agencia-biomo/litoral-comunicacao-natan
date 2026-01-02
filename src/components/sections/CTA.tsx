'use client';

import Link from 'next/link';
import { RegistrationMark, CMYKColorBar, CutLine } from '../graphics';

export function CTA() {
  return (
    <section className="py-20 lg:py-28 bg-[#1A1A1A] relative overflow-hidden">
      {/* CMYK Orbs */}
      <div className="absolute inset-0 pointer-events-none">
        {/* Cyan orb */}
        <div
          className="absolute w-72 h-72 rounded-full bg-[#00D4FF]/10 blur-3xl animate-float"
          style={{ top: '10%', left: '5%', animationDelay: '0s' }}
        />
        {/* Magenta orb */}
        <div
          className="absolute w-96 h-96 rounded-full bg-[#FF00FF]/10 blur-3xl animate-float"
          style={{ bottom: '10%', right: '5%', animationDelay: '2s' }}
        />
        {/* Yellow orb */}
        <div
          className="absolute w-64 h-64 rounded-full bg-[#FFEB00]/10 blur-3xl animate-float"
          style={{ top: '50%', left: '50%', transform: 'translate(-50%, -50%)', animationDelay: '4s' }}
        />
      </div>

      {/* Cut Line Top */}
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 mb-12">
        <CutLine />
      </div>

      <div className="relative z-10 max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
        {/* Registration marks */}
        <div className="flex justify-center gap-4 mb-8">
          <RegistrationMark size={20} color="#6B7280" />
          <RegistrationMark size={20} color="#6B7280" />
          <RegistrationMark size={20} color="#6B7280" />
        </div>

        <h2 className="text-3xl sm:text-4xl lg:text-5xl font-bold text-white mb-6">
          Pronto para{' '}
          <span className="bg-gradient-to-r from-[#00D4FF] via-[#FF00FF] to-[#FFEB00] bg-clip-text text-transparent">
            Transformar
          </span>
          <br />
          sua Marca?
        </h2>

        <p className="text-lg text-gray-400 mb-10 max-w-2xl mx-auto">
          Solicite um orçamento gratuito e sem compromisso.
          Nossa equipe está pronta para criar a comunicação visual perfeita para o seu negócio.
        </p>

        {/* CTAs */}
        <div className="flex flex-col sm:flex-row gap-4 justify-center items-center mb-10">
          <Link
            href="/contato"
            className="px-10 py-4 bg-gradient-to-r from-[#00D4FF] via-[#FF00FF] to-[#FFEB00] text-black font-bold text-lg rounded-full hover:shadow-2xl hover:shadow-[#FF00FF]/30 hover:scale-105 transition-all duration-300 animate-gradient-shift"
            style={{ backgroundSize: '200% 200%' }}
          >
            Solicitar Orçamento Agora
          </Link>
        </div>

        {/* WhatsApp */}
        <p className="text-gray-500">
          Ou chame no WhatsApp:{' '}
          <a
            href="https://wa.me/5547996505700"
            className="text-white hover:text-[#FFEB00] transition-colors font-medium"
          >
            (47) 99650-5700
          </a>
        </p>

        {/* Registration marks */}
        <div className="flex justify-center gap-4 mt-12">
          <RegistrationMark size={20} color="#6B7280" />
          <RegistrationMark size={20} color="#6B7280" />
          <RegistrationMark size={20} color="#6B7280" />
        </div>
      </div>

      {/* Cut Line Bottom */}
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 mt-12">
        <CutLine />
      </div>

      {/* Color Bar */}
      <div className="mt-12">
        <CMYKColorBar variant="compact" height="h-2" />
      </div>
    </section>
  );
}
