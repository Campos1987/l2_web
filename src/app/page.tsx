/**
 * 🏠 Home Page
 *
 * Página inicial da aplicação (Landing Page).
 * Composição modular de seções independentes.
 *
 * Estrutura:
 * 1. Hero: Banner principal, CTA.
 * 2. EventServer: Status do servidor ou próximos eventos (Server Component).
 * 3. AboutHome: Breve introdução ao servidor.
 * 4. News: Últimas notícias.
 */

import AboutHome from './home/About';
import EventServer from './home/EventServer';
import Hero from './home/hero';
import News from './home/News';
import { Metadata } from 'next';

// SEO específico da Home
export const metadata: Metadata = {
  title: 'Home',
  description: 'Bem-vindo ao melhor servidor de Lineage 2 High Five.',
};

export default function Home() {
  return (
    <>
      <Hero />
      <EventServer />
      <AboutHome />
      <News />
    </>
  );
}
