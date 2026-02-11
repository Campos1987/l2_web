# 16. Próximos Passos (Roadmap)

Estratégia sugerida para as próximas iterações de desenvolvimento.

## 🟢 Fase 1: Estabilidade E Infraestrutura (Imediato)

1.  **Resolver Correções Críticas:**
    - Priorizar a implementação da **Login Action** real.
    - Corrigir os nomes dos componentes de **Lista vs Detalhe**.
2.  **Validar Fluxos de Usuário:**
    - Testar registro -> login -> sessão (manualmente ou E2E simples).
3.  **Configuração de Ambiente:**
    - Garantir que `.env` esteja documentado e validado (Zod env validation).

## 🟡 Fase 2: Funcionalidades Core (Curto Prazo)

1.  **Painel do Usuário (User Dashboard):**
    - Criar rota protegida `/account`.
    - Exibir status da conta, personagens (se conectado ao game server DB) e
      histórico.
2.  **Sistema de Downloads:**
    - Melhorar a página de downloads com checagem de integridade (MD5/SHA) ou
      botões mais atrativos.
3.  **Integração com Game Server (Opcional/Avançado):**
    - Configurar conexão segura (API ou DB Read-Only) para exibir status do
      servidor (Online/Offline, Players Count) em tempo real no Header/Footer.

## 🔵 Fase 3: Comunidade & Monetização (Médio Prazo)

1.  **Sistema de Doação/Loja:**
    - Integração com gateway de pagamento.
    - Entrega automática de itens/moedas no jogo.
2.  **Rankings & Estatísticas:**
    - Página de Top PvP, PK, Clan, Castle Siege.
    - Consumo de dados cacheados do servidor de jogo (High Performance).

## 🟣 Fase 4: Polimento Final (Longo Prazo)

1.  **Internacionalização (i18n):**
    - Suporte real a EN/ES além do PT-BR (preparação de estrutura feita no
      Header).
2.  **PWA (Progressive Web App):**
    - Permitir "instalar" o site como app companion para notícias e gestão de
      conta.
