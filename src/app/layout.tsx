import type { Metadata } from "next";
import { Space_Grotesk, Inter } from "next/font/google";
import { Header, Footer, WhatsAppButton } from "@/components/layout";
import "./globals.css";

const spaceGrotesk = Space_Grotesk({
  variable: "--font-heading",
  subsets: ["latin"],
  display: "swap",
});

const inter = Inter({
  variable: "--font-body",
  subsets: ["latin"],
  display: "swap",
});

export const metadata: Metadata = {
  metadataBase: new URL("https://litoralcomunicacao.com.br"),
  title: {
    default: "Fachadas em ACM e Comunicação Visual | Balneário Camboriú - Litoral",
    template: "%s | Litoral Comunicação Visual",
  },
  description: "Especialistas em fachadas ACM, letras caixa e envelopamento veicular em Balneário Camboriú desde 2011. Parcelamos em até 12x. Orçamento grátis!",
  keywords: [
    "comunicação visual",
    "fachadas ACM",
    "letras caixa",
    "envelopamento veicular",
    "Balneário Camboriú",
    "adesivos",
    "outdoors",
    "painéis",
    "tapumes",
  ],
  authors: [{ name: "Litoral Comunicação Visual" }],
  creator: "Agência Biomo",
  openGraph: {
    type: "website",
    locale: "pt_BR",
    url: "https://litoralcomunicacao.com.br",
    siteName: "Litoral Comunicação Visual",
    title: "Fachadas em ACM e Comunicação Visual | Balneário Camboriú",
    description: "Especialistas em fachadas ACM, letras caixa e envelopamento veicular em Balneário Camboriú desde 2011.",
    images: [
      {
        url: "/og-image.jpg",
        width: 1200,
        height: 630,
        alt: "Litoral Comunicação Visual",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: "Fachadas em ACM e Comunicação Visual | Balneário Camboriú",
    description: "Especialistas em fachadas ACM, letras caixa e envelopamento veicular em Balneário Camboriú desde 2011.",
    images: ["/og-image.jpg"],
  },
  robots: {
    index: true,
    follow: true,
    googleBot: {
      index: true,
      follow: true,
      "max-video-preview": -1,
      "max-image-preview": "large",
      "max-snippet": -1,
    },
  },
  verification: {
    google: "your-google-verification-code",
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="pt-BR">
      <head>
        <link rel="icon" href="/favicon.ico" sizes="any" />
        <link rel="apple-touch-icon" href="/apple-touch-icon.png" />
        <meta name="theme-color" content="#1A1A1A" />
      </head>
      <body
        className={`${spaceGrotesk.variable} ${inter.variable} font-body antialiased bg-white text-[#1A1A1A]`}
      >
        <Header />
        <main>{children}</main>
        <Footer />
        <WhatsAppButton />
      </body>
    </html>
  );
}
