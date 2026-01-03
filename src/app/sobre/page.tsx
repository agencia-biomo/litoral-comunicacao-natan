import Image from 'next/image';
import Link from 'next/link';
import { RegistrationMark, CMYKColorBar } from '@/components/graphics';

const timeline = [
  { year: '2011', title: 'Fundação', description: 'Iniciamos nossas atividades em Balneário Camboriú com foco em comunicação visual.' },
  { year: '2014', title: 'Expansão', description: 'Ampliamos nossa estrutura com novos equipamentos e equipe especializada.' },
  { year: '2018', title: 'Tecnologia', description: 'Investimento em corte a laser e router CNC para maior precisão.' },
  { year: '2022', title: 'Referência', description: 'Nos tornamos referência em fachadas ACM na região.' },
  { year: '2026', title: 'Inovação', description: 'Continuamos inovando e expandindo nossos serviços.' },
];

const values = [
  { title: 'Qualidade', description: 'Materiais de primeira linha e acabamento impecável em todos os projetos.', color: 'cyan' },
  { title: 'Compromisso', description: 'Cumprimos prazos e mantemos comunicação transparente com nossos clientes.', color: 'magenta' },
  { title: 'Inovação', description: 'Acompanhamos as tendências e investimos em tecnologia de ponta.', color: 'yellow' },
  { title: 'Excelência', description: 'Buscamos superar expectativas em cada projeto que realizamos.', color: 'black' },
];

const colorMap: Record<string, string> = {
  cyan: 'bg-[#00D4FF]',
  magenta: 'bg-[#FF00FF]',
  yellow: 'bg-[#FFEB00]',
  black: 'bg-[#1A1A1A]',
};

export default function SobrePage() {
  return (
    <main className="min-h-screen bg-white pt-20">
      {/* Header */}
      <section className="py-16 lg:py-24 bg-[#F8FAFC]">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          {/* Breadcrumb */}
          <nav className="flex items-center gap-2 text-sm text-gray-500 mb-8">
            <Link href="/" className="hover:text-[#1A1A1A]">Home</Link>
            <span>/</span>
            <span className="text-[#1A1A1A]">Sobre</span>
          </nav>

          <div className="grid lg:grid-cols-2 gap-12 items-center">
            <div>
              <div className="flex items-center gap-3 mb-6">
                <RegistrationMark size={20} color="#E5E5E5" />
                <span className="text-sm text-gray-500 uppercase tracking-wider">Nossa História</span>
              </div>
              <h1 className="text-4xl lg:text-5xl font-bold text-[#1A1A1A] mb-6">
                Desde 2011 transformando{' '}
                <span className="bg-gradient-to-r from-[#00D4FF] via-[#FF00FF] to-[#FFEB00] bg-clip-text text-transparent">
                  marcas
                </span>
              </h1>
              <p className="text-lg text-gray-600 mb-6 leading-relaxed">
                A Litoral Comunicação Visual nasceu da paixão por transformar ideias em realidade visual.
                Com mais de 14 anos de experiência em Balneário Camboriú e região, nos especializamos
                em criar soluções que destacam sua marca.
              </p>
              <p className="text-gray-600 leading-relaxed">
                Nossa equipe combina criatividade, tecnologia e compromisso para entregar projetos
                que superam expectativas. De fachadas em ACM a envelopamentos veiculares, cada
                trabalho é tratado com a mesma dedicação e excelência.
              </p>
            </div>
            <div className="relative aspect-[4/3] rounded-2xl overflow-hidden">
              <Image
                src="/images/placeholder/equipe-1.jpg"
                alt="Equipe Litoral Comunicação Visual"
                fill
                className="object-cover"
              />
              {/* CMYK border accent */}
              <div className="absolute bottom-0 left-0 right-0 h-2 flex">
                <div className="flex-1 bg-[#00D4FF]" />
                <div className="flex-1 bg-[#FF00FF]" />
                <div className="flex-1 bg-[#FFEB00]" />
                <div className="flex-1 bg-[#1A1A1A]" />
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Stats */}
      <section className="py-16 bg-[#1A1A1A]">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-8">
            <div className="text-center">
              <div className="text-5xl lg:text-6xl font-bold text-[#00D4FF] mb-2">14+</div>
              <div className="text-gray-400 uppercase tracking-wider text-sm">Anos de Experiência</div>
            </div>
            <div className="text-center">
              <div className="text-5xl lg:text-6xl font-bold text-[#FF00FF] mb-2">500+</div>
              <div className="text-gray-400 uppercase tracking-wider text-sm">Projetos Realizados</div>
            </div>
            <div className="text-center">
              <div className="text-5xl lg:text-6xl font-bold text-[#FFEB00] mb-2">200+</div>
              <div className="text-gray-400 uppercase tracking-wider text-sm">Clientes Satisfeitos</div>
            </div>
            <div className="text-center">
              <div className="text-5xl lg:text-6xl font-bold text-white mb-2">12x</div>
              <div className="text-gray-400 uppercase tracking-wider text-sm">Parcelamento</div>
            </div>
          </div>
        </div>
      </section>

      {/* Values */}
      <section className="py-16 lg:py-24">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h2 className="text-3xl lg:text-4xl font-bold text-[#1A1A1A] mb-4">
              Nossos Valores
            </h2>
            <p className="text-gray-600 max-w-2xl mx-auto">
              Princípios que guiam cada projeto e relacionamento com nossos clientes.
            </p>
          </div>

          <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-6">
            {values.map((value, index) => (
              <div key={index} className="p-6 bg-white border border-gray-100 rounded-xl hover:shadow-lg transition-shadow">
                <div className={`w-12 h-12 ${colorMap[value.color]} rounded-xl flex items-center justify-center mb-4`}>
                  <svg className="w-6 h-6 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                  </svg>
                </div>
                <h3 className="text-xl font-bold text-[#1A1A1A] mb-2">{value.title}</h3>
                <p className="text-gray-600 text-sm">{value.description}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Timeline */}
      <section className="py-16 lg:py-24 bg-[#F8FAFC]">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h2 className="text-3xl lg:text-4xl font-bold text-[#1A1A1A] mb-4">
              Nossa Trajetória
            </h2>
          </div>

          <div className="relative">
            {/* Timeline line */}
            <div className="absolute left-8 top-0 bottom-0 w-0.5 bg-gray-200" />

            <div className="space-y-12">
              {timeline.map((item, index) => (
                <div key={index} className="relative pl-20">
                  {/* Year dot */}
                  <div className="absolute left-0 w-16 h-16 bg-white border-4 border-[#1A1A1A] rounded-full flex items-center justify-center font-bold text-sm">
                    {item.year}
                  </div>
                  <div className="bg-white p-6 rounded-xl border border-gray-100">
                    <h3 className="text-xl font-bold text-[#1A1A1A] mb-2">{item.title}</h3>
                    <p className="text-gray-600">{item.description}</p>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* Equipment */}
      <section className="py-16 lg:py-24">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid lg:grid-cols-2 gap-12 items-center">
            <div>
              <h2 className="text-3xl lg:text-4xl font-bold text-[#1A1A1A] mb-6">
                Equipamentos de Ponta
              </h2>
              <p className="text-gray-600 mb-8 leading-relaxed">
                Investimos constantemente em tecnologia para garantir a melhor qualidade
                em todos os nossos projetos. Contamos com equipamentos próprios de última geração.
              </p>
              <ul className="space-y-4">
                <li className="flex items-center gap-3">
                  <span className="w-2 h-2 bg-[#00D4FF] rounded-full" />
                  <span className="text-gray-700">Corte a Laser de alta precisão</span>
                </li>
                <li className="flex items-center gap-3">
                  <span className="w-2 h-2 bg-[#FF00FF] rounded-full" />
                  <span className="text-gray-700">Router CNC para cortes complexos</span>
                </li>
                <li className="flex items-center gap-3">
                  <span className="w-2 h-2 bg-[#FFEB00] rounded-full" />
                  <span className="text-gray-700">Impressora digital de grande formato</span>
                </li>
                <li className="flex items-center gap-3">
                  <span className="w-2 h-2 bg-[#1A1A1A] rounded-full" />
                  <span className="text-gray-700">Equipamentos de dobra e acabamento</span>
                </li>
              </ul>
            </div>
            <div className="relative aspect-video rounded-2xl overflow-hidden">
              <Image
                src="/images/placeholder/escritorio-1.jpg"
                alt="Equipamentos Litoral"
                fill
                className="object-cover"
              />
            </div>
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="py-16 bg-[#1A1A1A]">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="text-3xl font-bold text-white mb-4">
            Pronto para transformar sua marca?
          </h2>
          <p className="text-gray-400 mb-8">
            Entre em contato e descubra como podemos ajudar seu negócio.
          </p>
          <div className="flex flex-wrap justify-center gap-4">
            <Link
              href="/contato"
              className="inline-flex items-center gap-2 px-8 py-4 bg-white text-[#1A1A1A] font-semibold rounded-full hover:bg-gray-100 transition-colors"
            >
              Fale Conosco
              <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 8l4 4m0 0l-4 4m4-4H3" />
              </svg>
            </Link>
            <Link
              href="/portfolio"
              className="inline-flex items-center gap-2 px-8 py-4 border-2 border-white text-white font-semibold rounded-full hover:bg-white hover:text-[#1A1A1A] transition-colors"
            >
              Ver Portfólio
            </Link>
          </div>
        </div>
      </section>
      <CMYKColorBar variant="compact" height="h-2" />
    </main>
  );
}
