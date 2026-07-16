## Escopo

Refinar 4 páginas existentes (Notícias index, Notícia interna, Galeria, Transparência), ajustar Header para transparência sobre heros, e criar composições distintas em Quem Somos e Contato — sem recriar o projeto.

## Arquivos a editar / criar

**1. `src/lib/site-data.ts`** — expandir dados de mock:
- `newsCategories`: array com as 10 categorias solicitadas.
- Adicionar `gallery: string[]` (com legendas) em cada notícia.
- Adicionar `documents` (transparência): 10 categorias × múltiplos docs com `{name, type, size, year, url, cover?}`.
- Adicionar `institutionalData` e `policies` para Transparência.

**2. `src/components/ui/Lightbox.tsx`** (novo) — lightbox acessível reutilizável (ESC, setas, contador, legenda, trap de scroll). Usado tanto na Galeria quanto na notícia interna.

**3. `src/routes/noticias.index.tsx`** — reescrita:
- Hero fotográfico (mantém).
- Busca ampla com lupa, botão limpar, contador de resultados.
- Chips de categorias (11 chips) + select de ano + botão "Limpar filtros" condicional.
- Notícia mais recente em destaque (layout editorial grande).
- Grade das demais + paginação (carregar mais).
- Estado vazio com CTA "Limpar filtros".
- CTA institucional final.

**4. `src/routes/noticias.$slug.tsx`** — reescrita:
- Novo hero editorial em degradê verde com curva orgânica inferior (SVG).
- Header transparente controlado por scroll (via classe no body ou context — usar scroll listener local aplicando classe ao Header via CSS custom prop).
- Faixa de compartilhamento (Facebook, LinkedIn, WhatsApp, e-mail, copiar link).
- Tempo estimado de leitura calculado do body.
- Legenda/crédito da imagem principal.
- Galeria "Registros desta ação" — grid 4/3/2/1 col com lightbox reutilizável.
- Tags, relacionadas, anterior/próxima, voltar.

**5. `src/routes/galeria.index.tsx`** — ajustar:
- Reduzir botões de ano (h-10, px-4, text-sm, semibold, rounded-full, aria-selected).
- Rolagem horizontal em mobile.
- Manter abertura de álbuns na mesma página.
- Trocar lightbox local pelo novo componente.

**6. `src/routes/quem-somos.transparencia.tsx`** — reescrita completa:
- Fundo claro (bege muito suave) com detalhe topográfico discreto.
- Cabeçalho centralizado com eyebrow "TRANSPARÊNCIA" + "Acervo institucional" + subtítulo.
- Busca + filtro categoria + filtro ano + limpar.
- Accordions grandes brancos arredondados (rounded-3xl, padding generoso, ícone circular à esquerda, contador, chevron).
- Somente 1 aberto por vez, aria-expanded/aria-controls.
- Documentos como linhas com ícone tipo, nome, tipo·tamanho·ano, botões Visualizar / Baixar.
- Destaque "Relatório Anual 2025" dentro da categoria Relatórios (2 colunas: texto institucional + capa com moldura verde).
- Seção "Dados institucionais" em grade.
- Seção final "Políticas e compromissos" com cards discretos.

**7. `src/routes/quem-somos.index.tsx`** — ajuste da abertura:
- Hero imersivo com fotografia de paisagem + overlay verde-petróleo.
- Missão / Visão em molduras finas com aba de título (não cards brancos).
- Valores em duas colunas com ícones lineares.
- Preservar restante da página.

**8. `src/routes/contato.tsx`** — composição dividida:
- Coluna esquerda (info) sobre imagem/faixa ambiental; coluna direita formulário.
- Manter demais componentes.

**9. `src/components/layout/Header.tsx`** — modo transparente:
- Prop/estado detectando `data-hero="photo"` no `<main>` (ou rota atual) — usar `useEffect` + `IntersectionObserver` sobre `[data-hero]` ou simples scroll listener.
- Enquanto no topo e em rota com hero fotográfico: fundo transparente, texto claro.
- Após scroll (>40px) ou rotas sem hero fotográfico: fundo sólido (branco/bege) + sombra sutil.
- Mobile menu sempre com fundo sólido.

**10. `src/styles.css`** — utilitários novos:
- `.header-over-hero` (transparente + texto paper) e `.header-solid`.
- Curva orgânica reutilizável (classe helper).
- Nada que quebre o design system existente.

## Comportamentos técnicos

- Todos os filtros (busca + categoria + ano) client-side com `useMemo`, sem recarregar rota; contador de resultados exibido.
- Lightbox: portal-less, `role="dialog"`, `aria-modal`, foco no botão fechar, `document.body.style.overflow = 'hidden'` ao abrir, listeners de teclado ESC/←/→, cleanup ao fechar.
- Header transparente: hook simples que lê `window.scrollY` + flag por rota (`useMatches` do TanStack). Rotas com hero fotográfico: `/`, `/quem-somos`, `/quem-somos/equipe`, `/noticias`, `/noticias/$slug`, `/galeria`, `/contato`.
- Preservar SEO, VLibras, cookies, WhatsApp, acessibilidade.
- Sem novas dependências. Ícones existentes do lucide-react.

## Não incluído

- Não recriar Home, Footer, AccessibilityPanel, CookieBanner, FloatingButtons.
- Não alterar rotas/route tree.
- Não mexer em `politica-*`, `termos-*`, `quem-somos.equipe.tsx` além do mínimo (nenhuma edição planejada).
- Não criar página `/projetos` — não existe no route tree atual; se o usuário quiser depois, é escopo separado.
