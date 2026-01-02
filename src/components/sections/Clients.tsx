'use client';

import { RegistrationMark } from '../graphics';

// Placeholder for client logos - in production these would be actual images
const clients = [
  'Empresa ABC',
  'Loja XYZ',
  'Restaurante Sabor',
  'Clínica Saúde',
  'Auto Center',
  'Farmácia Popular',
  'Padaria Central',
  'Hotel Mar Azul',
  'Academia Fitness',
  'Ótica Visual',
  'Pet Shop Amigo',
  'Construtora BC',
];

export function Clients() {
  return (
    <section className="py-16 lg:py-20 bg-[#FAFAFA]">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Header */}
        <div className="text-center mb-12">
          <div className="flex justify-center mb-4">
            <RegistrationMark size={16} color="#E5E5E5" />
          </div>
          <p className="text-sm font-medium text-gray-400 uppercase tracking-wider mb-3">
            Clientes
          </p>
          <h2 className="text-2xl lg:text-3xl font-bold text-[#1A1A1A]">
            Empresas que confiam em nosso trabalho
          </h2>
        </div>

        {/* Client logos grid */}
        <div className="grid grid-cols-3 sm:grid-cols-4 md:grid-cols-6 gap-8">
          {clients.map((client, index) => (
            <div
              key={index}
              className="aspect-[3/2] bg-white rounded-lg border border-gray-100 flex items-center justify-center p-4 hover:border-gray-200 hover:shadow-sm transition-all"
            >
              <span className="text-xs text-gray-400 text-center font-medium">
                {client}
              </span>
            </div>
          ))}
        </div>

        {/* CTA */}
        <p className="text-center text-sm text-gray-500 mt-8">
          E mais de 200 empresas em Balneário Camboriú e região.
        </p>
      </div>
    </section>
  );
}
