/**
 * 📥 Download Page
 *
 * Página de Downloads.
 * Centraliza os links para clients, patches e launchers.
 */

import config from '@/json/configServer.json';

const DownloadPage = () => {
  return (
    <div className='max-w-5xl mx-auto space-y-12 min-h-screen py-12 px-6'>
      {/* Título */}
      <h1>Downloads</h1>
      <p className='text-center'>
        Baixe o jogo de forma rápida e sem complicações!
      </p>
      {/* Opções de Download */}
      <div className='grid gap-6 md:grid-cols-3'>
        <div className='container'>
          <h2>🕹️ Download pelo site</h2>
          <p>Baixe diretamente o cliente completo do Lineage II High Five.</p>
          <a href='#'>Baixar</a>
        </div>
        <div className='container'>
          <h2>🧲 Download via Torrent</h2>
          <p>
            Ideal para conexões instáveis ou para quem prefere gerenciadores de
            torrent.
          </p>
          <a href='#'>Baixar</a>
        </div>
        <div className='container'>
          <h2>🌐 Google Drive</h2>
          <p>Alternativa rápida e confiável para baixar o cliente.</p>
          <a href='#'>Baixar</a>
        </div>
      </div>
      {/* Launcher */}
      <div className='container'>
        <h2>🚀 Já possui o cliente?</h2>
        <p>
          🔧 Baixe nosso Launcher e execute o arquivo
          <span className='font-semibold px-1'>Play {config.serverName}</span>
          para iniciar o jogo com o patch {config.patch} - {config.chronicle}.
        </p>
        <a href='#'> Download Launcher</a>
      </div>

      {/* Instruções */}
      <div className='container'>
        <h2>📦 Instruções de Instalação</h2>
        <ol className='mt-4 list-decimal list-inside space-y-2'>
          <li>Baixe o cliente completo do Lineage II High Five.</li>
          <li>Extraia o conteúdo em seu computador.</li>
          <li>
            Baixe e descompacte o patch do servidor dentro da pasta do jogo.
          </li>
          <li>
            Execute o arquivo{' '}
            <span className='font-semibold px-1'>Play {config.serverName}</span>
            para entrar no servidor.
          </li>
        </ol>
        <p>
          Em caso de dúvidas ou problemas para logar, consulte o arquivo
          <span className='font-mono'>Leia-me.txt</span> incluído no patch ou
          visite nossa página de suporte.
        </p>
      </div>

      {/* Requisitos */}
      <div className='container'>
        <h2>🛡️ Requisitos mínimos</h2>
        <ul className='mt-4 space-y-2'>
          <li>Sistema operacional: Windows 7 ou superior</li>
          <li>Processador: Dual Core 2.0 GHz</li> <li>Memória RAM: 2 GB</li>
          <li>Espaço em disco: 10 GB</li>
          <li>Conexão com a internet estável</li>
        </ul>
      </div>

      {/* Call to Action */}

      <div className='text-center'>
        <h2 className='text-2xl font-bold'>Prepare-se para a batalha! ⚔️ </h2>
        <p className='mt-2 '>
          Faça o download, instale e entre no mundo épico de Lineage II com o
          servidor
          <span className='font-semibold px-1'>
            Play {config.serverName} - Patch {config.patch} {config.chronicle}
          </span>
          .
        </p>
      </div>
    </div>
  );
};

export default DownloadPage;
