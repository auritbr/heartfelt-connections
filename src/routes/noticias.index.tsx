import { createFileRoute, Link } from "@tanstack/react-router";
import { useMemo, useState } from "react";
import { PageHero } from "@/components/layout/PageHero";
import { news, formatDate } from "@/lib/site-data";
import { ArrowRight, Search } from "lucide-react";

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
const cats = Array.from(new Set(news.map((n) => n.category)));
const years = Array.from(new Set(news.map((n) => n.date.slice(0, 4)))).sort((a, b) => b.localeCompare(a));

function NoticiasPage() {
  const [q, setQ] = useState("");
  const [cat, setCat] = useState("");
  const [year, setYear] = useState("");
  const [page, setPage] = useState(1);

  const filtered = useMemo(() => {
    return news
      .filter((n) =>
        (!q || n.title.toLowerCase().includes(q.toLowerCase()) || n.excerpt.toLowerCase().includes(q.toLowerCase())) &&
        (!cat || n.category === cat) &&
        (!year || n.date.startsWith(year)),
      )
      .sort((a, b) => b.date.localeCompare(a.date));
  }, [q, cat, year]);

  const totalPages = Math.max(1, Math.ceil(filtered.length / PAGE));
  const shown = filtered.slice(0, page * PAGE);

  return (
    <>
      <PageHero
        eyebrow="Comunicação"
        title="Notícias"
        description="Acompanhe projetos, oficinas, encontros, mobilizações e acontecimentos que fazem parte da nossa atuação."
        image="https://images.unsplash.com/photo-1500673922987-e212871fec22?w=2000&q=80&auto=format&fit=crop"
        crumbs={[{ to: "/", label: "Início" }, { label: "Notícias" }]}
      />

      <section className="section-y">
        <div className="container-narrow">
          <div className="grid gap-3 md:grid-cols-[1fr_auto_auto] items-end">
            <label className="block">
              <span className="text-xs font-semibold uppercase tracking-widest text-muted-foreground">Buscar</span>
              <div className="mt-1 relative">
                <Search className="absolute left-3 top-1/2 -translate-y-1/2 h-4 w-4 text-muted-foreground" />
                <input value={q} onChange={(e) => { setQ(e.target.value); setPage(1); }} placeholder="Buscar por título ou conteúdo..." className="w-full rounded-md border bg-background pl-9 pr-3 py-2.5 text-sm" />
              </div>
            </label>
            <label>
              <span className="text-xs font-semibold uppercase tracking-widest text-muted-foreground">Categoria</span>
              <select value={cat} onChange={(e) => { setCat(e.target.value); setPage(1); }} className="mt-1 rounded-md border bg-background px-3 py-2.5 text-sm">
                <option value="">Todas</option>{cats.map((c) => <option key={c}>{c}</option>)}
              </select>
            </label>
            <label>
              <span className="text-xs font-semibold uppercase tracking-widest text-muted-foreground">Ano</span>
              <select value={year} onChange={(e) => { setYear(e.target.value); setPage(1); }} className="mt-1 rounded-md border bg-background px-3 py-2.5 text-sm">
                <option value="">Todos</option>{years.map((y) => <option key={y}>{y}</option>)}
              </select>
            </label>
          </div>

          {shown.length === 0 ? (
            <p className="mt-10 text-center text-sm text-muted-foreground">Nenhuma notícia encontrada.</p>
          ) : (
            <div className="mt-8 grid gap-6 md:grid-cols-2 lg:grid-cols-3">
              {shown.map((n) => (
                <article key={n.slug} className="group overflow-hidden rounded-2xl border bg-card shadow-sm transition hover:-translate-y-0.5 hover:shadow-md">
                  <Link to="/noticias/$slug" params={{ slug: n.slug }}>
                    <div className="aspect-[16/10] overflow-hidden">
                      <img src={n.cover} alt={n.title} className="h-full w-full object-cover transition group-hover:scale-105" loading="lazy" />
                    </div>
                    <div className="p-5">
                      <div className="flex items-center gap-2 text-xs text-muted-foreground">
                        <span className="rounded-full bg-[color:var(--leaf)] text-[color:var(--forest)] px-2 py-0.5 font-semibold">{n.category}</span>
                        <span>{formatDate(n.date)}</span>
                      </div>
                      <h3 className="mt-3 font-display text-lg font-semibold text-[color:var(--forest)] line-clamp-2">{n.title}</h3>
                      <p className="mt-1.5 text-sm text-muted-foreground line-clamp-3">{n.excerpt}</p>
                      <span className="mt-4 inline-flex items-center gap-1 text-sm font-semibold text-[color:var(--moss)]">Leia mais <ArrowRight className="h-3.5 w-3.5" /></span>
                    </div>
                  </Link>
                </article>
              ))}
            </div>
          )}

          {page < totalPages && (
            <div className="mt-10 text-center">
              <button type="button" onClick={() => setPage((p) => p + 1)} className="inline-flex items-center gap-2 rounded-full border px-5 py-2.5 text-sm font-semibold hover:bg-secondary">
                Carregar mais
              </button>
            </div>
          )}
        </div>
      </section>
    </>
  );
}
