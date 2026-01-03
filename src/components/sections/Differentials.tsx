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
  black: 'text-white',
};

const borderColorMap = {
  cyan: 'border-[#00D4FF]',
  magenta: 'border-[#FF00FF]',
  yellow: 'border-[#FFEB00]',
  black: 'border-white',
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
          <div className="p-4">
            <div className="flex justify-center mb-3">
              <svg className="w-10 h-10" fill="none" stroke="white" strokeWidth="1.5" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" d="M9.594 3.94c.09-.542.56-.94 1.11-.94h2.593c.55 0 1.02.398 1.11.94l.213 1.281c.063.374.313.686.645.87.074.04.147.083.22.127.325.196.72.257 1.075.124l1.217-.456a1.125 1.125 0 0 1 1.37.49l1.296 2.247a1.125 1.125 0 0 1-.26 1.431l-1.003.827c-.293.241-.438.613-.43.992a7.723 7.723 0 0 1 0 .255c-.008.378.137.75.43.991l1.004.827c.424.35.534.955.26 1.43l-1.298 2.247a1.125 1.125 0 0 1-1.369.491l-1.217-.456c-.355-.133-.75-.072-1.076.124a6.47 6.47 0 0 1-.22.128c-.331.183-.581.495-.644.869l-.213 1.281c-.09.543-.56.94-1.11.94h-2.594c-.55 0-1.019-.398-1.11-.94l-.213-1.281c-.062-.374-.312-.686-.644-.87a6.52 6.52 0 0 1-.22-.127c-.325-.196-.72-.257-1.076-.124l-1.217.456a1.125 1.125 0 0 1-1.369-.49l-1.297-2.247a1.125 1.125 0 0 1 .26-1.431l1.004-.827c.292-.24.437-.613.43-.991a6.932 6.932 0 0 1 0-.255c.007-.38-.138-.751-.43-.992l-1.004-.827a1.125 1.125 0 0 1-.26-1.43l1.297-2.247a1.125 1.125 0 0 1 1.37-.491l1.216.456c.356.133.751.072 1.076-.124.072-.044.146-.086.22-.128.332-.183.582-.495.644-.869l.214-1.28Z" />
                <path strokeLinecap="round" strokeLinejoin="round" d="M15 12a3 3 0 1 1-6 0 3 3 0 0 1 6 0Z" />
              </svg>
            </div>
            <h4 className="font-semibold text-white mb-2">Equipamentos Próprios</h4>
            <p className="text-sm text-gray-400">Corte a laser, router CNC e impressão digital de última geração.</p>
          </div>
          <div className="p-4">
            <div className="flex justify-center mb-3">
              <svg className="w-10 h-10" fill="none" stroke="white" strokeWidth="1.5" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" d="M15 19.128a9.38 9.38 0 0 0 2.625.372 9.337 9.337 0 0 0 4.121-.952 4.125 4.125 0 0 0-7.533-2.493M15 19.128v-.003c0-1.113-.285-2.16-.786-3.07M15 19.128v.106A12.318 12.318 0 0 1 8.624 21c-2.331 0-4.512-.645-6.374-1.766l-.001-.109a6.375 6.375 0 0 1 11.964-3.07M12 6.375a3.375 3.375 0 1 1-6.75 0 3.375 3.375 0 0 1 6.75 0Zm8.25 2.25a2.625 2.625 0 1 1-5.25 0 2.625 2.625 0 0 1 5.25 0Z" />
              </svg>
            </div>
            <h4 className="font-semibold text-white mb-2">Equipe Especializada</h4>
            <p className="text-sm text-gray-400">Profissionais qualificados em todas as etapas do projeto.</p>
          </div>
          <div className="p-4">
            <div className="flex justify-center mb-3">
              <svg className="w-10 h-10" fill="none" stroke="white" strokeWidth="1.5" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" d="M9 12.75 11.25 15 15 9.75m-3-7.036A11.959 11.959 0 0 1 3.598 6 11.99 11.99 0 0 0 3 9.749c0 5.592 3.824 10.29 9 11.623 5.176-1.332 9-6.03 9-11.622 0-1.31-.21-2.571-.598-3.751h-.152c-3.196 0-6.1-1.248-8.25-3.285Z" />
              </svg>
            </div>
            <h4 className="font-semibold text-white mb-2">Garantia Total</h4>
            <p className="text-sm text-gray-400">Garantimos qualidade em materiais e instalação.</p>
          </div>
        </div>
      </div>
    </section>
  );
}
