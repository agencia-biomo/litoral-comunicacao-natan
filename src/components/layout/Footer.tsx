import Link from 'next/link';
import Image from 'next/image';
import { CMYKColorBar } from '../graphics';

const services = [
  { href: '/servicos/fachadas-acm', label: 'Fachadas em ACM' },
  { href: '/servicos/letras-caixa', label: 'Letras Caixa' },
  { href: '/servicos/envelopamento-veicular', label: 'Envelopamento' },
  { href: '/servicos/adesivos-vitrines', label: 'Adesivos & Vitrines' },
  { href: '/servicos/outdoors-paineis', label: 'Outdoors & Painéis' },
];

const links = [
  { href: '/portfolio', label: 'Portfólio' },
  { href: '/sobre', label: 'Sobre' },
  { href: '/contato', label: 'Contato' },
];

export function Footer() {
  return (
    <footer>
      {/* White strip so black in CMYK bar is visible */}
      <div className="bg-white h-2">
        <CMYKColorBar variant="compact" height="h-2" />
      </div>
      <div className="bg-[#1A1A1A] text-white">

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-12">
          {/* Brand */}
          <div className="md:col-span-1">
            <Link href="/">
              <Image
                src="/images/logo.png"
                alt="Litoral Comunicação Visual"
                width={160}
                height={44}
                className="h-10 w-auto"
              />
            </Link>
            <p className="mt-4 text-sm text-gray-400 leading-relaxed">
              Desde 2011 transformando marcas em Balneário Camboriú.
            </p>
          </div>

          {/* Services */}
          <div>
            <h4 className="font-medium mb-4 text-sm uppercase tracking-wider text-gray-500">
              Serviços
            </h4>
            <ul className="space-y-2">
              {services.map((item) => (
                <li key={item.href}>
                  <Link href={item.href} className="text-sm text-gray-400 hover:text-white transition-colors">
                    {item.label}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Links */}
          <div>
            <h4 className="font-medium mb-4 text-sm uppercase tracking-wider text-gray-500">
              Links
            </h4>
            <ul className="space-y-2">
              {links.map((item) => (
                <li key={item.href}>
                  <Link href={item.href} className="text-sm text-gray-400 hover:text-white transition-colors">
                    {item.label}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Contact */}
          <div>
            <h4 className="font-medium mb-4 text-sm uppercase tracking-wider text-gray-500">
              Contato
            </h4>
            <ul className="space-y-2 text-sm text-gray-400">
              <li>Rua 3146, 178 - Centro</li>
              <li>Balneário Camboriú - SC</li>
              <li className="pt-2">
                <a href="tel:+554733631990" className="hover:text-white transition-colors">
                  (47) 3363-1990
                </a>
              </li>
              <li>
                <a href="https://wa.me/5547996505700" className="hover:text-white transition-colors">
                  (47) 99650-5700
                </a>
              </li>
            </ul>
          </div>
        </div>

        {/* Bottom */}
        <div className="mt-12 pt-8 border-t border-gray-800 flex flex-col md:flex-row items-center justify-between gap-4">
          <p className="text-sm text-gray-500">
            © {new Date().getFullYear()} Litoral Comunicação Visual
          </p>
          <p className="text-sm text-gray-500">
            Desenvolvido por{' '}
            <a href="https://agenciabiomo.com.br" target="_blank" rel="noopener noreferrer" className="hover:text-white transition-colors">
              Agência Biomo
            </a>
          </p>
        </div>
      </div>
      </div>
    </footer>
  );
}
