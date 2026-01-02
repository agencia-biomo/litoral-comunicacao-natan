import { notFound } from 'next/navigation';
import { services, getServiceBySlug, getAllServiceSlugs } from '@/lib/services';
import { ServicePageContent } from './ServicePageContent';

// Generate static params for all services
export function generateStaticParams() {
  return getAllServiceSlugs().map((slug) => ({
    slug,
  }));
}

// Generate metadata for each service
export function generateMetadata({ params }: { params: { slug: string } }) {
  const service = getServiceBySlug(params.slug);

  if (!service) {
    return {
      title: 'Serviço não encontrado | Litoral Comunicação Visual',
    };
  }

  return {
    title: `${service.title} | Litoral Comunicação Visual`,
    description: service.fullDescription,
  };
}

interface ServicePageProps {
  params: { slug: string };
}

export default function ServicePage({ params }: ServicePageProps) {
  const service = getServiceBySlug(params.slug);

  if (!service) {
    notFound();
  }

  const currentIndex = services.findIndex((s) => s.slug === service.slug);
  const prevService = services[currentIndex - 1] || null;
  const nextService = services[currentIndex + 1] || null;

  return (
    <ServicePageContent
      service={service}
      prevService={prevService}
      nextService={nextService}
    />
  );
}
