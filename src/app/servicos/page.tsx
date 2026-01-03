import Link from 'next/link';
import { services } from '@/lib/services';
import { RegistrationMark, CMYKColorBar } from '@/components/graphics';

export const metadata = {
  title: 'Serviços | Litoral Comunicação Visual',
  description: 'Conheça nossos serviços de comunicação visual: fachadas em ACM, letras caixa, envelopamento veicular, adesivos, outdoors, tapumes e panfletos políticos.',
};

const colorMap = {
  cyan: 'border-l-[#00D4FF]',
  magenta: 'border-l-[#FF00FF]',
  yellow: 'border-l-[#FFEB00]',
  black: 'border-l-[#1A1A1A]',
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

export default function ServicosPage() {
  return (
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
          <div className="max-w-3xl">
            {/* Breadcrumb */}
            <nav className="flex items-center gap-2 text-sm text-gray-400 mb-8">
              <Link href="/" className="hover:text-[#1A1A1A] transition-colors">
                Home
              </Link>
              <span>/</span>
              <span className="text-[#1A1A1A]">Serviços</span>
            </nav>

            {/* Header */}
            <div className="flex items-start gap-4">
              <RegistrationMark size={20} color="#E5E5E5" className="mt-2 hidden sm:block" />
              <div>
                <p className="text-sm font-medium text-gray-400 uppercase tracking-wider mb-3">
                  Nossos Serviços
                </p>
                <h1 className="text-4xl lg:text-5xl font-bold text-[#1A1A1A] mb-6">
                  Soluções completas em comunicação visual
                </h1>
                <p className="text-lg text-gray-600 max-w-2xl">
                  Desde fachadas imponentes até materiais de campanha, oferecemos tudo que sua marca precisa para se destacar no mercado.
                </p>
              </div>
            </div>
          </div>
        </div>

        <CMYKColorBar variant="compact" height="h-1" className="absolute bottom-0 left-0 right-0" />
      </section>

      {/* Services Grid */}
      <section className="py-16 lg:py-24">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
            {services.map((service) => (
              <Link
                key={service.slug}
                href={`/servicos/${service.slug}`}
                className="group"
              >
                <article className={`relative bg-white border-l-2 ${colorMap[service.color]} p-8 h-full hover:shadow-lg transition-all duration-300`}>
                  {/* Icon */}
                  <div className="w-12 h-12 mb-6 text-gray-400 group-hover:text-[#1A1A1A] transition-colors">
                    {iconMap[service.icon]}
                  </div>

                  {/* Content */}
                  <h2 className="text-xl font-semibold text-[#1A1A1A] mb-3">
                    {service.title}
                  </h2>
                  <p className="text-gray-500 mb-6">
                    {service.shortDescription}
                  </p>

                  {/* Features preview */}
                  <ul className="space-y-2 mb-6">
                    {service.features.slice(0, 3).map((feature, index) => (
                      <li key={index} className="flex items-center gap-2 text-sm text-gray-500">
                        <span className="w-1 h-1 rounded-full bg-gray-300" />
                        {feature}
                      </li>
                    ))}
                  </ul>

                  {/* CTA */}
                  <span className="inline-flex items-center gap-2 text-sm font-medium text-gray-400 group-hover:text-[#1A1A1A] transition-colors">
                    Ver detalhes
                    <svg className="w-4 h-4 group-hover:translate-x-1 transition-transform" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
                    </svg>
                  </span>
                </article>
              </Link>
            ))}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-16 lg:py-24 bg-white">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="text-3xl lg:text-4xl font-bold text-[#1A1A1A] mb-6">
            Não encontrou o que procura?
          </h2>
          <p className="text-lg text-gray-600 mb-8">
            Nossa equipe está pronta para desenvolver soluções personalizadas para sua necessidade específica.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Link
              href="/contato"
              className="px-8 py-4 bg-[#1A1A1A] text-white font-medium rounded-full hover:bg-gray-800 transition-colors"
            >
              Fale Conosco
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
    </main>
  );
}
