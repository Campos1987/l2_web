// 1. Importe o prisma (certifique-se de ter criado o arquivo lib/db.ts como falamos antes)
import { db } from "@/lib/db";

// 2. Transforme o componente em ASYNC
export default async function NewsSection() {
  // 3. Busque os dados do banco
  const newsList = await db.gk_news.findMany({
    orderBy: {
      id: 'desc', // Mostra as notícias mais novas primeiro
    },
  });

  return (
    <section className='news-section'>
      <div className='section-header'>
        <span className='icon-deco'>⚔️</span>
        <h2>Latest News</h2>
      </div>

      <div className='news-container'>
        {/* 4. Mapeie os dados do banco para o HTML */}
        {newsList.map(news => (
          <article key={news.id} className='news-card type-update'>
            <div className='news-content'>
              {/* Título vindo do Banco */}
              <h3 className='news-title'>{news.title}</h3>

              {/* Conteúdo vindo do Banco */}
              <p className='news-excerpt'>{news.content}</p>
            </div>

            {/* Como sua tabela ainda não tem data, vou deixar estático por enquanto */}
            <div className='news-date'>HOJE</div>
          </article>
        ))}

        {/* Se não tiver notícias, mostre um aviso */}
        {newsList.length === 0 && (
          <p style={{ color: '#aaa' }}>Nenhuma notícia encontrada.</p>
        )}
      </div>
    </section>
  );
}
