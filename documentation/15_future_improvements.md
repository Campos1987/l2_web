# 15. Melhorias Futuras (Future Improvements)

Backlog técnico focado em elevação de nível de qualidade, Developer Experience
(DX) e otimizações de longo prazo.

## 🏗️ Refatoração & Reusabilidade

### 1. Componente Genérico de Lista (`ContentList`)

Atualmente, `EventList` (Home), `EventList` (Page) e `NewsList` compartilham 90%
da estrutura HTML/CSS.

- **Proposta:** Criar um componente `CardGrid` ou `ContentList` que aceite:
  - `data`: Array de items.
  - `variant`: 'featured' (com imagem grande) | 'compact' (news).
  - `renderItem`: Render props para customização.

### 2. Sistema de Variantes de Botão

O componente `Button.tsx` usa verificação de string
`props.className === 'btnHero'`.

- **Proposta:** Utilizar **Class Variance Authority (CVA)** ou padrão de prop
  `variant='primary' | 'hero' | 'outline'`.
- **Ganho:** Tipagem segura e facilidade de manutenção de estilos.

### 3. Unificação de Markdown Rendering

Repetição de lógica `ReactMarkdown + remarkGfm` em todas as páginas de detalhe
(slug).

- **Proposta:** Criar `@/ui/MarkdownViewer.tsx` centralizado com estilos `prose`
  configurados globalmente.

## 🚀 Performance & SEO

### 4. Geração Dinâmica de Metadata (SEO)

Páginas como `[slug]` já possuem dados, mas a função `generateMetadata` não está
implementada.

- **Proposta:** Implementar `generateMetadata` em `layout.tsx` ou `page.tsx` das
  rotas dinâmicas para injetar Open Graph Tags corretas (Imagem, Título,
  Descrição) dos eventos/notícias.

### 5. Otimização de Imagens (Carousel)

O `Carousel.tsx` carrega muitas imagens grandes.

- **Proposta:** Implementar `sizes` attributes mais agressivos e preloading
  apenas do primeiro slide (LCP).

## 🎨 UI/UX & Acessibilidade

### 6. Acessibilidade do Carrossel

O componente atual é funcional mas carece de atributos ARIA.

- **Proposta:** Adicionar `role="region"`, `aria-label`, e suporte a navegação
  por teclado (setas).

### 7. Feedback de Formulários

Melhorar a experiência de erro nos formulários (`LoginForm`, `RegisterForm`).

- **Proposta:** Exibir mensagens de erro inline (`field error`) ao invés de
  apenas validação visual ou toasters genéricos.
