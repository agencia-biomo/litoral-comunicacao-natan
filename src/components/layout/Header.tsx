'use client';

import { useState, useEffect, useCallback } from 'react';
import Link from 'next/link';
import Image from 'next/image';
import { services } from '@/lib/services';

const navLinks = [
  { href: '/', label: 'Home' },
  { href: '/portfolio', label: 'Portfólio' },
  { href: '/sobre', label: 'Sobre' },
  { href: '/contato', label: 'Contato' },
];

const colorMap: Record<string, string> = {
  cyan: 'bg-[#00D4FF]',
  magenta: 'bg-[#FF00FF]',
  yellow: 'bg-[#FFEB00]',
  black: 'bg-[#1A1A1A]',
};

export function Header() {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const [isServicesModalOpen, setIsServicesModalOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 20);
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const handleEscape = useCallback((e: KeyboardEvent) => {
    if (e.key === 'Escape') {
      setIsServicesModalOpen(false);
    }
  }, []);

  useEffect(() => {
    if (isServicesModalOpen) {
      document.addEventListener('keydown', handleEscape);
      document.body.style.overflow = 'hidden';
    }
    return () => {
      document.removeEventListener('keydown', handleEscape);
      document.body.style.overflow = '';
    };
  }, [isServicesModalOpen, handleEscape]);

  return (
    <>
      <header
        className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
          isScrolled
            ? 'bg-[#1A1A1A]/95 backdrop-blur-md shadow-sm'
            : 'bg-[#1A1A1A]'
        }`}
      >
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex items-center justify-between h-14 lg:h-16">
            {/* Logo */}
            <Link href="/" className="flex items-center">
              <Image
                src="/images/logo.png"
                alt="Litoral Comunicação Visual"
                width={140}
                height={38}
                className="h-8 lg:h-9 w-auto"
                priority
              />
            </Link>

            {/* Desktop Navigation */}
            <nav className="hidden lg:flex items-center gap-6">
              <Link
                href="/"
                className="relative text-sm font-medium text-gray-300 hover:text-white transition-colors"
              >
                Home
              </Link>

              {/* Services Button with Modal */}
              <button
                onClick={() => setIsServicesModalOpen(true)}
                className="relative text-sm font-medium text-gray-300 hover:text-white transition-colors flex items-center gap-1"
              >
                Serviços
                <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 9l-7 7-7-7" />
                </svg>
              </button>

              {navLinks.slice(1).map((link) => (
                <Link
                  key={link.href}
                  href={link.href}
                  className="relative text-sm font-medium text-gray-300 hover:text-white transition-colors"
                >
                  {link.label}
                </Link>
              ))}
            </nav>

            {/* CTA Button */}
            <div className="hidden lg:block">
              <Link
                href="/contato"
                className="px-6 py-2.5 bg-white text-[#1A1A1A] font-medium text-sm rounded-full hover:bg-gray-100 transition-colors"
              >
                Orçamento
              </Link>
            </div>

            {/* Mobile Menu Button */}
            <button
              className="lg:hidden p-2 text-white"
              onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
              aria-label="Menu"
            >
              <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                {isMobileMenuOpen ? (
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
                ) : (
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 6h16M4 12h16M4 18h16" />
                )}
              </svg>
            </button>
          </div>
        </div>

        {/* Mobile Menu */}
        {isMobileMenuOpen && (
          <div className="lg:hidden bg-[#1A1A1A] border-t border-gray-800">
            <nav className="max-w-7xl mx-auto px-4 py-4 space-y-1">
              <Link
                href="/"
                className="block px-4 py-3 text-gray-300 hover:text-white hover:bg-gray-800 rounded-lg transition-colors"
                onClick={() => setIsMobileMenuOpen(false)}
              >
                Home
              </Link>

              {/* Services section in mobile */}
              <div className="px-4 py-2">
                <p className="text-xs font-medium text-gray-500 uppercase tracking-wider mb-2">Serviços</p>
                <div className="grid grid-cols-2 gap-2">
                  {services.map((service) => (
                    <Link
                      key={service.slug}
                      href={`/servicos/${service.slug}`}
                      className="flex items-center gap-2 px-3 py-2 text-sm text-gray-300 hover:text-white hover:bg-gray-800 rounded-lg transition-colors"
                      onClick={() => setIsMobileMenuOpen(false)}
                    >
                      <span className={`w-2 h-2 rounded-full ${colorMap[service.color]}`} />
                      {service.title}
                    </Link>
                  ))}
                </div>
              </div>

              {navLinks.slice(1).map((link) => (
                <Link
                  key={link.href}
                  href={link.href}
                  className="block px-4 py-3 text-gray-300 hover:text-white hover:bg-gray-800 rounded-lg transition-colors"
                  onClick={() => setIsMobileMenuOpen(false)}
                >
                  {link.label}
                </Link>
              ))}
              <Link
                href="/contato"
                className="block mt-4 mx-4 py-3 bg-white text-[#1A1A1A] font-medium text-center rounded-full"
                onClick={() => setIsMobileMenuOpen(false)}
              >
                Orçamento
              </Link>
            </nav>
          </div>
        )}
      </header>

      {/* Services Modal */}
      {isServicesModalOpen && (
        <div className="fixed inset-0 z-[60]">
          {/* Backdrop */}
          <div
            className="absolute inset-0 bg-black/80 backdrop-blur-sm"
            onClick={() => setIsServicesModalOpen(false)}
          />

          {/* Modal Content */}
          <div className="relative z-10 flex items-start justify-center pt-20 px-4">
            <div className="bg-white w-full max-w-4xl rounded-2xl shadow-2xl overflow-hidden">
              {/* Header */}
              <div className="bg-[#1A1A1A] px-6 py-4 flex items-center justify-between">
                <div>
                  <p className="text-xs font-medium text-gray-400 uppercase tracking-wider">
                    Navegue pelos
                  </p>
                  <h2 className="text-xl font-bold text-white">
                    Nossos Serviços
                  </h2>
                </div>
                <button
                  onClick={() => setIsServicesModalOpen(false)}
                  className="p-2 hover:bg-gray-800 rounded-full transition-colors"
                  aria-label="Fechar menu"
                >
                  <svg className="w-6 h-6 text-gray-400" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
                  </svg>
                </button>
              </div>

              {/* Services Grid */}
              <div className="p-6">
                <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-4">
                  {services.map((service) => (
                    <Link
                      key={service.slug}
                      href={`/servicos/${service.slug}`}
                      onClick={() => setIsServicesModalOpen(false)}
                      className="group relative flex flex-col p-4 rounded-xl border-2 border-gray-100 hover:border-gray-200 hover:bg-gray-50 transition-all"
                    >
                      {/* Color indicator */}
                      <div className={`absolute left-0 top-0 bottom-0 w-1 rounded-l-xl ${colorMap[service.color]}`} />

                      {/* Content */}
                      <h3 className="font-semibold text-[#1A1A1A] group-hover:text-gray-700 transition-colors pl-2">
                        {service.title}
                      </h3>
                      <p className="text-sm text-gray-500 mt-1 pl-2 line-clamp-2">
                        {service.shortDescription}
                      </p>

                      {/* Arrow */}
                      <div className="mt-3 pl-2 flex items-center gap-1 text-sm text-gray-400 group-hover:text-[#1A1A1A] transition-colors">
                        <span>Ver detalhes</span>
                        <svg
                          className="w-4 h-4 group-hover:translate-x-1 transition-transform"
                          fill="none"
                          stroke="currentColor"
                          viewBox="0 0 24 24"
                        >
                          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
                        </svg>
                      </div>
                    </Link>
                  ))}
                </div>

                {/* View all link */}
                <div className="mt-6 text-center">
                  <Link
                    href="/servicos"
                    onClick={() => setIsServicesModalOpen(false)}
                    className="inline-flex items-center gap-2 text-sm font-medium text-gray-500 hover:text-[#1A1A1A] transition-colors"
                  >
                    Ver todos os serviços
                    <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 8l4 4m0 0l-4 4m4-4H3" />
                    </svg>
                  </Link>
                </div>
              </div>
            </div>
          </div>
        </div>
      )}
    </>
  );
}
