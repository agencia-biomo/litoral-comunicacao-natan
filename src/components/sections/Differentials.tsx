'use client';

import { RegistrationMark } from '../graphics';

const differentials = [
  {
    number: '14+',
    title: 'Anos de Experiência',
    description: 'Desde 2011 transformando marcas em Balneário Camboriú e região.',
    color: 'cyan',
  },
  {
    number: '500+',
    title: 'Projetos Realizados',
    description: 'Fachadas, letras caixa, envelopamentos e muito mais entregues.',
    color: 'magenta',
  },
  {
    number: '200+',
    title: 'Clientes Satisfeitos',
    description: 'Empresas que confiam em nosso trabalho e voltam a nos procurar.',
    color: 'yellow',
  },
  {
    number: '12x',
    title: 'Parcelamento',
    description: 'Facilitamos o pagamento para realizar seu projeto sem aperto.',
    color: 'black',
  },
];

const colorMap = {
  cyan: 'text-[#00D4FF]',
  magenta: 'text-[#FF00FF]',
  yellow: 'text-[#FFEB00]',
  black: 'text-[#1A1A1A]',
};

const borderColorMap = {
  cyan: 'border-[#00D4FF]',
  magenta: 'border-[#FF00FF]',
  yellow: 'border-[#FFEB00]',
  black: 'border-[#1A1A1A]',
};

export function Differentials() {
  return (
    <section className="py-20 lg:py-28 bg-[#1A1A1A] relative overflow-hidden">
      {/* Subtle pattern */}
      <div
        className="absolute inset-0 opacity-[0.03]"
        style={{
          backgroundImage: `radial-gradient(#fff 1px, transparent 1px)`,
          backgroundSize: '24px 24px',
        }}
      />

      <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Header */}
        <div className="text-center mb-16">
          <div className="flex justify-center mb-4">
            <RegistrationMark size={20} color="#444" />
          </div>
          <p className="text-sm font-medium text-gray-500 uppercase tracking-wider mb-3">
            Por que nos escolher
          </p>
          <h2 className="text-3xl lg:text-4xl font-bold text-white mb-4">
            Qualidade que se destaca
          </h2>
          <p className="text-gray-400 max-w-2xl mx-auto">
            Combinamos experiência, tecnologia e dedicação para entregar projetos que superam expectativas.
          </p>
        </div>

        {/* Differentials Grid */}
        <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-8">
          {differentials.map((item, index) => (
            <div
              key={index}
              className={`text-center p-6 border-t-2 ${borderColorMap[item.color as keyof typeof borderColorMap]} bg-white/5 backdrop-blur-sm`}
            >
              <div className={`text-4xl lg:text-5xl font-bold ${colorMap[item.color as keyof typeof colorMap]} mb-2`}>
                {item.number}
              </div>
              <h3 className="text-lg font-semibold text-white mb-2">
                {item.title}
              </h3>
              <p className="text-sm text-gray-400">
                {item.description}
              </p>
            </div>
          ))}
        </div>

        {/* Additional features */}
        <div className="mt-16 grid sm:grid-cols-3 gap-8 text-center">
          {[
            { icon: '⚙️', title: 'Equipamentos Próprios', desc: 'Corte a laser, router CNC e impressão digital de última geração.' },
            { icon: '👥', title: 'Equipe Especializada', desc: 'Profissionais qualificados em todas as etapas do projeto.' },
            { icon: '✓', title: 'Garantia Total', desc: 'Garantimos qualidade em materiais e instalação.' },
          ].map((feature, index) => (
            <div key={index} className="p-4">
              <div className="text-3xl mb-3">{feature.icon}</div>
              <h4 className="font-semibold text-white mb-2">{feature.title}</h4>
              <p className="text-sm text-gray-400">{feature.desc}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
