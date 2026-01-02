export interface Service {
  slug: string;
  title: string;
  shortDescription: string;
  fullDescription: string;
  features: string[];
  color: 'cyan' | 'magenta' | 'yellow' | 'black';
  icon: string;
  heroImage?: string;
  gallery?: string[];
}

export const services: Service[] = [
  {
    slug: 'fachadas-acm',
    title: 'Fachadas em ACM',
    shortDescription: 'Fachadas modernas e duráveis em alumínio composto.',
    fullDescription: 'Transforme a identidade visual do seu negócio com fachadas em ACM (Alumínio Composto). Material de alta durabilidade, resistente às intempéries e com acabamento premium que valoriza qualquer empreendimento comercial.',
    features: [
      'Material de alta durabilidade',
      'Resistente a intempéries',
      'Acabamento premium',
      'Diversas opções de cores',
      'Instalação profissional',
      'Garantia de qualidade',
    ],
    color: 'cyan',
    icon: 'building',
  },
  {
    slug: 'letras-caixa',
    title: 'Letras Caixa',
    shortDescription: 'Letras em acrílico, metal e PVC iluminadas ou não.',
    fullDescription: 'Destaque sua marca com letras caixa personalizadas. Fabricamos em diversos materiais como acrílico, metal, PVC e MDF, com opções de iluminação interna ou externa para máximo impacto visual.',
    features: [
      'Acrílico, metal, PVC ou MDF',
      'Iluminação LED opcional',
      'Corte a laser de precisão',
      'Pintura automotiva',
      'Instalação inclusa',
      'Projeto personalizado',
    ],
    color: 'magenta',
    icon: 'text',
  },
  {
    slug: 'envelopamento-veicular',
    title: 'Envelopamento Veicular',
    shortDescription: 'Transforme seu veículo em mídia móvel.',
    fullDescription: 'Transforme seu veículo em uma poderosa ferramenta de marketing. Envelopamento total ou parcial com vinil de alta performance, proteção da pintura original e visual impactante que leva sua marca para onde você for.',
    features: [
      'Vinil de alta performance',
      'Proteção da pintura original',
      'Envelopamento total ou parcial',
      'Design personalizado',
      'Durabilidade de 3-5 anos',
      'Remoção sem danos',
    ],
    color: 'yellow',
    icon: 'car',
  },
  {
    slug: 'adesivos-vitrines',
    title: 'Adesivos & Vitrines',
    shortDescription: 'Adesivos perfurados, jateados e decorativos.',
    fullDescription: 'Valorize suas vitrines e espaços comerciais com adesivos de alta qualidade. Oferecemos adesivos perfurados, jateados, decorativos e de segurança para transformar qualquer superfície em comunicação visual.',
    features: [
      'Adesivo perfurado (visão interna)',
      'Jateado para privacidade',
      'Recorte eletrônico',
      'Impressão digital HD',
      'Aplicação profissional',
      'Diversos acabamentos',
    ],
    color: 'black',
    icon: 'window',
  },
  {
    slug: 'outdoors-paineis',
    title: 'Outdoors & Painéis',
    shortDescription: 'Impressão de lona e painéis para grandes formatos.',
    fullDescription: 'Maximize a visibilidade da sua marca com outdoors e painéis de grande formato. Impressão em lona com qualidade fotográfica, estruturas metálicas resistentes e instalação em locais estratégicos.',
    features: [
      'Impressão em lona frontlight/backlight',
      'Qualidade fotográfica',
      'Estruturas metálicas',
      'Grandes formatos',
      'Instalação completa',
      'Manutenção preventiva',
    ],
    color: 'cyan',
    icon: 'billboard',
  },
  {
    slug: 'tapumes',
    title: 'Tapumes',
    shortDescription: 'Tapumes personalizados para obras.',
    fullDescription: 'Aproveite o espaço dos tapumes de obra para comunicar sua marca. Tapumes personalizados com impressão de alta qualidade, transformando isolamento de obra em mídia publicitária.',
    features: [
      'Impressão em lona ou adesivo',
      'Instalação em estrutura metálica',
      'Proteção contra vandalismo',
      'Comunicação institucional',
      'Fácil substituição',
      'Projeto sob medida',
    ],
    color: 'magenta',
    icon: 'construction',
  },
  {
    slug: 'panfletos-politicos',
    title: 'Panfletos Políticos',
    shortDescription: 'Materiais gráficos para campanhas eleitorais.',
    fullDescription: 'Materiais gráficos de alta qualidade para sua campanha política. Produzimos panfletos, santinhos, adesivos, bandeiras e todo material necessário para fortalecer sua presença nas eleições, seguindo as normas do TSE.',
    features: [
      'Santinhos e panfletos',
      'Adesivos de campanha',
      'Bandeiras e faixas',
      'Cavaletes e placas',
      'Material de acordo com TSE',
      'Entrega em grande volume',
    ],
    color: 'yellow',
    icon: 'megaphone',
  },
];

export function getServiceBySlug(slug: string): Service | undefined {
  return services.find((service) => service.slug === slug);
}

export function getAllServiceSlugs(): string[] {
  return services.map((service) => service.slug);
}
