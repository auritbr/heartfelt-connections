import { createFileRoute, Link } from "@tanstack/react-router";
import { useMemo, useState } from "react";
import { PageHero } from "@/components/layout/PageHero";
import { news, formatDate, newsCategories } from "@/lib/site-data";
import { ArrowRight, Search, X, Filter } from "lucide-react";

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

  const featured = filtered[0];
  const rest = filtered.slice(1);
  const totalPages = Math.max(1, Math.ceil(rest.length / PAGE));
  const shown = rest.slice(0, page * PAGE);

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

          {/* Busca */}
          <div className="mt-8">
            <label htmlFor="noticias-busca" className="sr-only">
              Buscar notícias
            </label>
            <div className="relative">
              <Search className="pointer-events-none absolute left-4 top-1/2 -translate-y-1/2 h-5 w-5 text-[color:var(--moss)]" aria-hidden />
              <input
                id="noticias-busca"
                value={q}
                onChange={(e) => {
                  setQ(e.target.value);
                  setPage(1);
                }}
                placeholder="Buscar por título, assunto ou palavra-chave"
                className="w-full rounded-full border border-[color:var(--moss)]/30 bg-card pl-12 pr-12 py-4 text-base shadow-sm focus:border-[color:var(--forest)] focus:ring-2 focus:ring-[color:var(--moss)]/30 focus:outline-none"
              />
              {q && (
                <button
                  type="button"
                  onClick={() => {
                    setQ("");
                    setPage(1);
                  }}
                  aria-label="Limpar busca"
                  className="absolute right-3 top-1/2 -translate-y-1/2 rounded-full p-2 text-muted-foreground hover:bg-secondary hover:text-[color:var(--forest)]"
                >
                  <X className="h-4 w-4" />
                </button>
              )}
            </div>
          </div>

          {/* Filtros */}
          <div className="mt-6 flex flex-col gap-4 lg:flex-row lg:items-start lg:justify-between">
            <div
              role="tablist"
              aria-label="Filtrar por categoria"
              className="-mx-1 flex flex-wrap gap-2 overflow-x-auto px-1 lg:flex-wrap"
            >
              {(["Todas", ...newsCategories] as string[]).map((c) => {
                const active = c === cat;
                return (
                  <button
                    key={c}
                    type="button"
                    role="tab"
                    aria-selected={active}
                    onClick={() => {
                      setCat(c);
                      setPage(1);
                    }}
                    className={`whitespace-nowrap rounded-full border px-4 py-2 text-sm font-semibold transition focus-visible:outline focus-visible:outline-2 focus-visible:outline-[color:var(--moss)] ${
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

            <div className="flex flex-wrap items-center gap-3 shrink-0">
              <label className="flex items-center gap-2">
                <span className="text-xs font-semibold uppercase tracking-widest text-muted-foreground">
                  <Filter className="inline h-3.5 w-3.5 mr-1" aria-hidden /> Ano
                </span>
                <select
                  value={year}
                  onChange={(e) => {
                    setYear(e.target.value);
                    setPage(1);
                  }}
                  className="rounded-full border border-[color:var(--moss)]/30 bg-card px-3 py-2 text-sm font-semibold text-[color:var(--forest)] focus:outline-none focus:ring-2 focus:ring-[color:var(--moss)]/30"
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
                  className="inline-flex items-center gap-1 rounded-full border border-transparent px-3 py-2 text-sm font-semibold text-[color:var(--moss)] hover:bg-[color:var(--leaf)]/40"
                >
                  <X className="h-3.5 w-3.5" /> Limpar filtros
                </button>
              )}
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

          {/* Destaque */}
          {featured && (
            <article className="mt-12 overflow-hidden rounded-3xl border bg-card shadow-sm">
              <div className="grid gap-0 md:grid-cols-2">
                <Link
                  to="/noticias/$slug"
                  params={{ slug: featured.slug }}
                  className="group block aspect-[16/10] md:aspect-auto overflow-hidden"
                >
                  <img
                    src={featured.cover}
                    alt={featured.title}
                    className="h-full w-full object-cover transition duration-700 group-hover:scale-105"
                  />
                </Link>
                <div className="flex flex-col justify-center p-6 md:p-10">
                  <div className="flex items-center gap-2 text-xs">
                    <span className="rounded-full bg-[color:var(--forest)] px-3 py-1 font-semibold text-[color:var(--paper)]">
                      Destaque
                    </span>
                    <span className="rounded-full bg-[color:var(--leaf)] px-3 py-1 font-semibold text-[color:var(--forest)]">
                      {featured.category}
                    </span>
                    <span className="text-muted-foreground">{formatDate(featured.date)}</span>
                  </div>
                  <h3 className="mt-4 font-display text-2xl md:text-3xl font-bold text-[color:var(--forest)]">
                    <Link to="/noticias/$slug" params={{ slug: featured.slug }} className="hover:underline">
                      {featured.title}
                    </Link>
                  </h3>
                  <p className="mt-3 text-muted-foreground">{featured.excerpt}</p>
                  <div className="mt-6">
                    <Link
                      to="/noticias/$slug"
                      params={{ slug: featured.slug }}
                      className="inline-flex items-center gap-2 rounded-full bg-[color:var(--forest)] px-5 py-2.5 text-sm font-semibold text-[color:var(--paper)] hover:bg-[color:var(--moss)]"
                    >
                      Leia a notícia <ArrowRight className="h-4 w-4" />
                    </Link>
                  </div>
                </div>
              </div>
            </article>
          )}

          {/* Grade */}
          {shown.length > 0 && (
            <div className="mt-10 grid gap-6 md:grid-cols-2 lg:grid-cols-3">
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

          {page < totalPages && (
            <div className="mt-10 text-center">
              <button
                type="button"
                onClick={() => setPage((p) => p + 1)}
                className="inline-flex items-center gap-2 rounded-full border px-5 py-2.5 text-sm font-semibold hover:bg-secondary"
              >
                Carregar mais notícias
              </button>
            </div>
          )}
        </div>
      </section>

      {/* CTA institucional final */}
      <section className="section-y bg-[color:var(--forest)] text-[color:var(--paper)]">
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
