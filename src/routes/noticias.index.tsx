import { createFileRoute, Link } from "@tanstack/react-router";
import { useMemo, useState } from "react";
import { PageHero } from "@/components/layout/PageHero";
import { news, formatDate, newsCategories } from "@/lib/site-data";
import { ArrowRight, Search, X, Filter, ChevronLeft, ChevronRight } from "lucide-react";

export const Route = createFileRoute("/noticias/")({
  head: () => ({
    meta: [
      { title: "Notícias — Instituto Raízes do Futuro" },
      { name: "description", content: "Projetos, oficinas, encontros e mobilizações do Instituto." },
      { property: "og:title", content: "Notícias — Instituto Raízes do Futuro" },
      { property: "og:description", content: "Notícias e acontecimentos do Ponto de Cultura." },
      { property: "og:url", content: "/noticias" },
    ],
    links: [{ rel: "canonical", href: "/noticias" }],
  }),
  component: NoticiasPage,
});

const PAGE = 6;
const allYears = Array.from(new Set(news.map((n) => n.date.slice(0, 4)))).sort((a, b) => b.localeCompare(a));
const YEAR_BUCKETS = ["2026", "2025", "2024", "2023"];

function getPageItems(current: number, total: number): (number | "…")[] {
  if (total <= 7) return Array.from({ length: total }, (_, i) => i + 1);
  const items: (number | "…")[] = [1];
  const left = Math.max(2, current - 1);
  const right = Math.min(total - 1, current + 1);
  if (left > 2) items.push("…");
  for (let i = left; i <= right; i++) items.push(i);
  if (right < total - 1) items.push("…");
  items.push(total);
  return items;
}


function NoticiasPage() {
  const [q, setQ] = useState("");
  const [cat, setCat] = useState<string>("Todas");
  const [year, setYear] = useState<string>("Todos");
  const [page, setPage] = useState(1);

  const filtered = useMemo(() => {
    const term = q.trim().toLowerCase();
    return news
      .filter((n) => {
        if (cat !== "Todas" && n.category !== cat) return false;
        if (year === "Anteriores") {
          if (YEAR_BUCKETS.includes(n.date.slice(0, 4))) return false;
        } else if (year !== "Todos" && !n.date.startsWith(year)) return false;
        if (!term) return true;
        return (
          n.title.toLowerCase().includes(term) ||
          n.excerpt.toLowerCase().includes(term) ||
          n.subtitle.toLowerCase().includes(term) ||
          n.category.toLowerCase().includes(term) ||
          n.body.join(" ").toLowerCase().includes(term) ||
          n.tags.some((t) => t.toLowerCase().includes(term))
        );
      })
      .sort((a, b) => b.date.localeCompare(a.date));
  }, [q, cat, year]);

  const hasFilters = q.trim() !== "" || cat !== "Todas" || year !== "Todos";
  const clear = () => {
    setQ("");
    setCat("Todas");
    setYear("Todos");
    setPage(1);
  };

  const totalPages = Math.max(1, Math.ceil(filtered.length / PAGE));
  const currentPage = Math.min(page, totalPages);
  const startIdx = (currentPage - 1) * PAGE;
  const shown = filtered.slice(startIdx, startIdx + PAGE);

  const goTo = (p: number) => {
    const target = Math.min(Math.max(1, p), totalPages);
    setPage(target);
    if (typeof window !== "undefined") {
      const el = document.getElementById("noticias-grid");
      if (el) el.scrollIntoView({ behavior: "smooth", block: "start" });
    }
  };

  const pageItems = getPageItems(currentPage, totalPages);

  const yearsForSelect = ["Todos", ...YEAR_BUCKETS.filter((y) => allYears.includes(y)), "Anteriores"];


  return (
    <>
      <PageHero
        eyebrow="Comunicação"
        title="Notícias"
        description="Acompanhe projetos, oficinas, encontros, mobilizações e acontecimentos que fazem parte da nossa atuação no território."
        image="https://images.unsplash.com/photo-1500673922987-e212871fec22?w=2000&q=80&auto=format&fit=crop"
        crumbs={[{ to: "/", label: "Início" }, { label: "Notícias" }]}
      />

      {/* Intro + busca */}
      <section className="section-y">
        <div className="container-narrow">
          <div className="max-w-3xl">
            <p className="text-xs font-semibold uppercase tracking-[0.24em] text-[color:var(--moss)]">Descubra</p>
            <h2 className="mt-2 font-display text-2xl md:text-3xl font-bold text-[color:var(--forest)]">
              Pesquise conteúdos por assunto, categoria ou ano
            </h2>
            <p className="mt-3 text-muted-foreground">
              Utilize a busca e os filtros abaixo para encontrar notícias, ações, projetos e registros das atividades do Instituto.
            </p>
          </div>

          {/* Busca — compacta */}
          <div className="mt-6 flex flex-wrap items-center gap-3">
            <div className="relative w-full max-w-sm">
              <label htmlFor="noticias-busca" className="sr-only">Buscar notícias</label>
              <Search className="pointer-events-none absolute left-3 top-1/2 -translate-y-1/2 h-4 w-4 text-[color:var(--moss)]" aria-hidden />
              <input
                id="noticias-busca"
                value={q}
                onChange={(e) => { setQ(e.target.value); setPage(1); }}
                placeholder="Buscar por título ou palavra-chave"
                className="w-full rounded-full border border-[color:var(--moss)]/30 bg-card pl-9 pr-9 py-2 text-sm shadow-sm focus:border-[color:var(--forest)] focus:ring-2 focus:ring-[color:var(--moss)]/30 focus:outline-none"
              />
              {q && (
                <button
                  type="button"
                  onClick={() => { setQ(""); setPage(1); }}
                  aria-label="Limpar busca"
                  className="absolute right-2 top-1/2 -translate-y-1/2 rounded-full p-1 text-muted-foreground hover:bg-secondary hover:text-[color:var(--forest)]"
                >
                  <X className="h-3.5 w-3.5" />
                </button>
              )}
            </div>

            <label className="flex items-center gap-2 ml-auto">
              <span className="text-xs font-semibold uppercase tracking-widest text-muted-foreground">
                <Filter className="inline h-3.5 w-3.5 mr-1" aria-hidden /> Ano
              </span>
              <select
                value={year}
                onChange={(e) => { setYear(e.target.value); setPage(1); }}
                className="rounded-full border border-[color:var(--moss)]/30 bg-card px-3 py-1.5 text-sm font-semibold text-[color:var(--forest)] focus:outline-none focus:ring-2 focus:ring-[color:var(--moss)]/30"
              >
                {yearsForSelect.map((y) => (
                  <option key={y} value={y}>
                    {y === "Todos" ? "Todos os anos" : y === "Anteriores" ? "Anos anteriores" : y}
                  </option>
                ))}
              </select>
            </label>
            {hasFilters && (
              <button
                type="button"
                onClick={clear}
                className="inline-flex items-center gap-1 rounded-full border border-transparent px-3 py-1.5 text-xs font-semibold text-[color:var(--moss)] hover:bg-[color:var(--leaf)]/40"
              >
                <X className="h-3 w-3" /> Limpar
              </button>
            )}
          </div>

          {/* Filtros de categoria */}
          <div className="mt-4">
            <div
              role="tablist"
              aria-label="Filtrar por categoria"
              className="-mx-1 flex flex-wrap gap-2 overflow-x-auto px-1"
            >
              {(["Todas", ...newsCategories] as string[]).map((c) => {
                const active = c === cat;
                return (
                  <button
                    key={c}
                    type="button"
                    role="tab"
                    aria-selected={active}
                    onClick={() => { setCat(c); setPage(1); }}
                    className={`whitespace-nowrap rounded-full border px-3.5 py-1.5 text-xs font-semibold transition focus-visible:outline focus-visible:outline-2 focus-visible:outline-[color:var(--moss)] ${
                      active
                        ? "border-[color:var(--forest)] bg-[color:var(--forest)] text-[color:var(--paper)] shadow-sm"
                        : "border-[color:var(--moss)]/30 bg-card text-[color:var(--forest)] hover:bg-[color:var(--leaf)]/40"
                    }`}
                  >
                    {c}
                  </button>
                );
              })}
            </div>
          </div>

          <p className="mt-4 text-sm text-muted-foreground" aria-live="polite">
            {filtered.length} {filtered.length === 1 ? "resultado encontrado" : "resultados encontrados"}
            {hasFilters ? " com os filtros aplicados." : "."}
          </p>

          {filtered.length === 0 && (
            <div className="mt-10 rounded-3xl border border-dashed border-[color:var(--moss)]/40 bg-[color:var(--paper)] p-10 text-center">
              <h3 className="font-display text-xl font-bold text-[color:var(--forest)]">Nenhuma notícia encontrada</h3>
              <p className="mt-2 text-sm text-muted-foreground">Tente utilizar outros termos ou remover alguns filtros.</p>
              <button
                type="button"
                onClick={clear}
                className="mt-5 inline-flex items-center gap-2 rounded-full bg-[color:var(--forest)] px-5 py-2.5 text-sm font-semibold text-[color:var(--paper)] hover:bg-[color:var(--moss)]"
              >
                Limpar filtros
              </button>
            </div>
          )}

          {/* Grade — todas as notícias no mesmo padrão */}
          {shown.length > 0 && (
            <div id="noticias-grid" className="mt-10 grid gap-6 md:grid-cols-2 lg:grid-cols-3">
              {shown.map((n) => (
                <article
                  key={n.slug}
                  className="group overflow-hidden rounded-2xl border bg-card shadow-sm transition hover:-translate-y-0.5 hover:shadow-md"
                >
                  <Link to="/noticias/$slug" params={{ slug: n.slug }}>
                    <div className="aspect-[16/10] overflow-hidden">
                      <img
                        src={n.cover}
                        alt={n.title}
                        className="h-full w-full object-cover transition group-hover:scale-105"
                        loading="lazy"
                      />
                    </div>
                    <div className="p-5">
                      <div className="flex items-center gap-2 text-xs text-muted-foreground">
                        <span className="rounded-full bg-[color:var(--leaf)] text-[color:var(--forest)] px-2 py-0.5 font-semibold">
                          {n.category}
                        </span>
                        <span>{formatDate(n.date)}</span>
                      </div>
                      <h3 className="mt-3 font-display text-lg font-semibold text-[color:var(--forest)] line-clamp-2">
                        {n.title}
                      </h3>
                      <p className="mt-1.5 text-sm text-muted-foreground line-clamp-3">{n.excerpt}</p>
                      <span className="mt-4 inline-flex items-center gap-1 text-sm font-semibold text-[color:var(--moss)]">
                        Leia mais <ArrowRight className="h-3.5 w-3.5" />
                      </span>
                    </div>
                  </Link>
                </article>
              ))}
            </div>
          )}

          {/* Paginação numérica */}
          {totalPages > 1 && (
            <nav aria-label="Paginação de notícias" className="mt-10 flex flex-wrap items-center justify-center gap-1.5">
              <button
                type="button"
                onClick={() => goTo(currentPage - 1)}
                disabled={currentPage === 1}
                className="inline-flex h-10 items-center gap-1 rounded-full border border-[color:var(--moss)]/30 bg-card px-3 text-xs font-semibold text-[color:var(--forest)] transition hover:bg-[color:var(--leaf)]/40 disabled:pointer-events-none disabled:opacity-40 focus-visible:outline focus-visible:outline-2 focus-visible:outline-[color:var(--moss)]"
                aria-label="Página anterior"
              >
                <ChevronLeft className="h-3.5 w-3.5" />
                <span className="hidden sm:inline">Anterior</span>
              </button>
              {pageItems.map((it, i) =>
                it === "…" ? (
                  <span key={`e-${i}`} aria-hidden className="grid h-10 w-8 place-items-center text-sm text-muted-foreground">
                    …
                  </span>
                ) : (
                  <button
                    key={it}
                    type="button"
                    onClick={() => goTo(it)}
                    aria-current={it === currentPage ? "page" : undefined}
                    className={`inline-flex h-10 min-w-10 items-center justify-center rounded-full px-3 text-sm font-semibold transition focus-visible:outline focus-visible:outline-2 focus-visible:outline-[color:var(--moss)] ${
                      it === currentPage
                        ? "bg-[color:var(--forest)] text-[color:var(--paper)] shadow-sm"
                        : "border border-[color:var(--moss)]/30 bg-card text-[color:var(--forest)] hover:bg-[color:var(--leaf)]/40"
                    }`}
                  >
                    {it}
                  </button>
                )
              )}
              <button
                type="button"
                onClick={() => goTo(currentPage + 1)}
                disabled={currentPage === totalPages}
                className="inline-flex h-10 items-center gap-1 rounded-full border border-[color:var(--moss)]/30 bg-card px-3 text-xs font-semibold text-[color:var(--forest)] transition hover:bg-[color:var(--leaf)]/40 disabled:pointer-events-none disabled:opacity-40 focus-visible:outline focus-visible:outline-2 focus-visible:outline-[color:var(--moss)]"
                aria-label="Próxima página"
              >
                <span className="hidden sm:inline">Próxima</span>
                <ChevronRight className="h-3.5 w-3.5" />
              </button>
            </nav>
          )}
        </div>
      </section>


      {/* CTA institucional final */}
      <section className="py-12 md:py-16 bg-[color:var(--forest)] text-[color:var(--paper)]">
        <div className="container-narrow grid gap-6 lg:grid-cols-[1fr_auto] lg:items-center">
          <div>
            <p className="text-xs font-semibold uppercase tracking-[0.24em] text-[color:var(--leaf)]">Faça parte</p>
            <h2 className="mt-2 font-display text-2xl md:text-3xl font-bold">
              Acompanhe nossas ações e contribua com o território
            </h2>
            <p className="mt-3 max-w-2xl text-[color:var(--paper)]/85">
              Assine nossa comunicação, participe de mutirões e conheça de perto as iniciativas que constroem cultura, educação
              ambiental e comunidade.
            </p>
          </div>
          <Link
            to="/contato"
            className="inline-flex items-center gap-2 rounded-full bg-[color:var(--paper)] px-6 py-3 text-sm font-semibold text-[color:var(--forest)] hover:bg-[color:var(--leaf)]"
          >
            Entre em contato <ArrowRight className="h-4 w-4" />
          </Link>
        </div>
      </section>
    </>
  );
}
