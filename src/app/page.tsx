import {
  Hero,
  Services,
  Differentials,
  PortfolioPreview,
  Testimonials,
  Clients,
  CTA
} from '@/components/sections';

export default function Home() {
  return (
    <>
      {/* 1. AWARENESS - Hero com proposta de valor */}
      <Hero />

      {/* 2. INTEREST - Serviços oferecidos */}
      <Services />

      {/* 3. CONSIDERATION - Por que nos escolher */}
      <Differentials />

      {/* 4. EVALUATION - Portfólio de projetos */}
      <PortfolioPreview />

      {/* 5. TRUST - Depoimentos de clientes */}
      <Testimonials />

      {/* 6. SOCIAL PROOF - Logos de clientes */}
      <Clients />

      {/* 7. CONVERSION - CTA final */}
      <CTA />
    </>
  );
}
