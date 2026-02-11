/**
 * ℹ️ About Page
 *
 * Página estática institucional "Sobre".
 * Apresenta informações do servidor, rates, diferenciais e informações textuais.
 * Utiliza dados do arquivo de configuração JSON para manter consistência.
 */

import config from '@/json/configServer.json';

const AboutPage = () => {
  return (
    <div className='max-w-5xl mx-auto space-y-12 min-h-screen py-12 px-6'>
      {/* Título */}
      <h1>About</h1>
      <p className='mt-3 max-w-2xl'>
        Bem-vindo ao mundo épico de
        <span className='font-semibold pr-2'> {config.serverName}</span>um
        servidor Lineage 2 Java PvP
        <span className='font-semibold pr-2'> {config.expRate}</span> criado
        para oferecer batalhas intensas, jogabilidade dinâmica e uma comunidade
        vibrante de jogadores apaixonados por ação. Aqui, cada dia é uma nova
        oportunidade para provar sua força, estratégia e conquistar glória nos
        campos de batalha.
      </p>

      {/*<!-- Destaques --> */}
      {/* TODO: Componentizar estes blocos se forem reused */}
      <div className='grid gap-6 md:grid-cols-2'>
        <div className='rounded-2xl container'>
          <h2>O que nos torna únicos</h2>
          <ul className='list-disc marker:text-violet-500 marker:text-2xl pl-4'>
            <li className='py-2'>
              <span className='font-semibold pr-2'>Arenas diárias:</span>
              combates constantes para quem busca adrenalina e competição.
            </li>
            <li className='py-2'>
              <span className='font-semibold pr-2'>Sistema de Olympiad:</span>
              Lute por honra e conquiste seu lugar entre os melhores.
            </li>
            <li className='py-2'>
              <span className='font-semibold pr-2'>Arena of Trials:</span>
              Entre na arena definitiva: 10 estágios de pura brutalidade, onde
              apenas estratégia e força definem o vencedor. Somente os mais
              fortes alcançarão o topo.
            </li>
            <li className='py-2'>
              <span className='font-semibold pr-2'>Recursos exclusivos:</span>
              inovações que simplificam o gameplay, tornando tudo mais acessível
              e conveniente para todos.
            </li>
            <li className='py-2'>
              <span className='font-semibold pr-2'>
                Ambiente online massivo:
              </span>
              o mundo de {config.serverName} está sempre vivo, repleto de
              aventuras, alianças e rivalidades lendárias.
            </li>
          </ul>
        </div>
        <div className='rounded-2xl container'>
          <h2>Nossa missão</h2>
          <span className='pt-2'>
            Nosso objetivo é proporcionar a melhor experiência PvP possível, com
            eventos diários, suporte ativo e constante inovação. Se você busca
            um servidor onde habilidade e tática definem o vencedor, seu lugar é
            aqui.
          </span>
          <div className='mt-6 grid grid-cols-2 gap-4'>
            <div className='rounded-2xl container'>
              <p className='text-sm '>Rates</p>
              <p className='mt-1 text-lg font-semibold '>
                PvP {config.expRate}
              </p>
            </div>
            <div className='rounded-2xl container'>
              <p className='text-sm '>Eventos</p>
              <p className='mt-1 text-lg font-semibold '>Diários</p>
            </div>
            <div className='rounded-2xl container'>
              <p className='text-sm '>Instâncias</p>
              <p className='mt-1 text-lg font-semibold '>Arena of Trials</p>
            </div>
            <div className='rounded-2xl container'>
              <p className='text-sm '>Comunidade</p>
              <p className='mt-1 text-lg font-semibold '>Ativa e acolhedora</p>
            </div>
          </div>
        </div>
      </div>
      {/*<!-- Call to Action -->*/}
      <section className='mx-auto w-full px-6 pb-16 pt-4'>
        <div className='rounded-2xl border border-neutral-800 p-8'>
          <div className='flex flex-col items-start justify-between gap-6 md:flex-row md:items-center'>
            <div>
              <h3 className='text-2xl font-semibold pr-2'>
                Junte-se à batalha. Torne-se uma lenda.
              </h3>
              <p className='mt-2 max-w-2xl '>
                O mundo de {config.serverName} é feito de grandes histórias,
                alianças e duelos épicos. Mostre sua força, domine as arenas e
                alcance o topo.
              </p>
            </div>
            <div className='flex gap-3'>
              <a
                href='#registrar'
                className='inline-flex items-center justify-center rounded-lg bg-violet-600 px-5 py-3 text-sm font-semibold  shadow-sm transition hover:bg-violet-500 focus:outline-none focus:ring-2 focus:ring-violet-400'
              >
                Começar agora
              </a>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default AboutPage;
