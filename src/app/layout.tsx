/**
 * 🏗️ Root Layout
 *
 * Este é o layout principal da aplicação (Next.js App Router).
 * Ele envolve TODAS as páginas do sistema.
 *
 * Responsabilidades:
 * - Configuração de Fontes (Next/Font) otimizadas.
 * - Estrutura HTML/Body base.
 * - Componentes Globais (Header, Footer).
 * - Injeção de CSS Global.
 */

import type { Metadata } from 'next';
import { Cinzel } from 'next/font/google';
import '@/app/styles/global.css';
import Header from '@/ui/Header/Header';
import Footer from '@/ui/Footer/Footer';

// ----------------------------------------------------------------------
// 🔤 Font Optimization
// ----------------------------------------------------------------------
// Carrega a fonte Cinzel (Google Fonts) com subsetting e swap strategy.
// A variável CSS '--font-cinzel-sans' permite uso via Tailwind config.

const cinzel = Cinzel({
  variable: '--font-cinzel-sans',
  subsets: ['latin'],
  display: 'swap', // Melhora perceived performance
});

// ----------------------------------------------------------------------
// 📢 Global Metadata
// ----------------------------------------------------------------------
// SEO padrão para páginas que não sobrescrevem a metadata.

export const metadata: Metadata = {
  title: {
    template: '%s | L2 Server', // Padrão: "Página | L2 Server"
    default: 'L2 Server - Lineage 2 High Five', // Fallback
  },
  description: 'Lineage 2 Private Server High Five. Join us today!',
};

// ----------------------------------------------------------------------
// 🚀 Layout Component
// ----------------------------------------------------------------------

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang='en' className={cinzel.variable}>
      {/* 
        Aplica a classe 'antialiased' para renderização de fonte mais suave.
        Body estruturado com Header fixo e Footer no final.
      */}
      <body className={`antialiased min-h-screen flex flex-col font-cinzel`}>
        <Header />

        {/* Main com padding-top (pt-16) para compensar o Header Fixed (se houver) */}
        <main className='pt-16'>{children}</main>

        <Footer />
      </body>
    </html>
  );
}
