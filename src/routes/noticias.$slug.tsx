import { createFileRoute, Link, notFound } from "@tanstack/react-router";
import { PageHero } from "@/components/layout/PageHero";
import { news, formatDate } from "@/lib/site-data";
import { ArrowLeft, ArrowRight, Share2 } from "lucide-react";

export const Route = createFileRoute("/noticias/$slug")({
  head: ({ params }) => {
    const item = news.find((n) => n.slug === params.slug);
    const title = item ? `${item.title} — Instituto Raízes do Futuro` : "Notícia — Instituto Raízes do Futuro";
    return {
      meta: [
        { title },
        { name: "description", content: item?.excerpt ?? "Notícia do Instituto" },
        { property: "og:title", content: title },
        { property: "og:description", content: item?.excerpt ?? "" },
        { property: "og:type", content: "article" },
        { property: "og:url", content: `/noticias/${params.slug}` },
        ...(item?.cover ? [{ property: "og:image", content: item.cover }] : []),
      ],
      links: [{ rel: "canonical", href: `/noticias/${params.slug}` }],
    };
  },
  loader: ({ params }) => {
    const item = news.find((n) => n.slug === params.slug);
    if (!item) throw notFound();
    return item;
  },
  component: NoticiaPage,
  notFoundComponent: () => (
    <div className="container-narrow py-20 text-center">
      <h1 className="font-display text-3xl font-bold text-[color:var(--forest)]">Notícia não encontrada</h1>
      <Link to="/noticias" className="mt-4 inline-block text-[color:var(--moss)] underline">Voltar às notícias</Link>
    </div>
  ),
});

function NoticiaPage() {
  const item = Route.useLoaderData();
  const idx = news.findIndex((n) => n.slug === item.slug);
  const prev = news[idx - 1];
  const next = news[idx + 1];
  const related = news.filter((n) => n.slug !== item.slug && n.category === item.category).slice(0, 3);

  return (
    <>
      <PageHero
        eyebrow={item.category}
        title={item.title}
        description={item.subtitle}
        image={item.cover}
        crumbs={[{ to: "/", label: "Início" }, { to: "/noticias", label: "Notícias" }, { label: item.title }]}
      />
      <article className="section-y">
        <div className="container-narrow max-w-3xl">
          <p className="text-sm text-muted-foreground">{formatDate(item.date)} · Por {item.author}</p>
          <img src={item.cover} alt={item.title} className="mt-6 w-full rounded-2xl object-cover aspect-[16/9]" />
          <div className="prose prose-neutral mt-8 max-w-none">
            {item.body.map((p, i) => (
              <p key={i} className="mt-4 text-base leading-relaxed text-foreground/90">{p}</p>
            ))}
          </div>
          <div className="mt-8 flex flex-wrap items-center gap-3">
            <span className="text-xs font-semibold uppercase tracking-widest text-muted-foreground">Tags:</span>
            {item.tags.map((t) => <span key={t} className="rounded-full bg-[color:var(--leaf)] text-[color:var(--forest)] px-3 py-1 text-xs font-semibold">#{t}</span>)}
          </div>
          <div className="mt-6 flex flex-wrap gap-2">
            <button type="button" onClick={() => { if (navigator.share) navigator.share({ title: item.title, url: location.href }).catch(()=>{}); else navigator.clipboard.writeText(location.href); }} className="inline-flex items-center gap-2 rounded-full border px-4 py-2 text-sm font-semibold hover:bg-secondary">
              <Share2 className="h-4 w-4" /> Compartilhar
            </button>
          </div>

          <div className="mt-10 flex items-center justify-between gap-3 border-t pt-6">
            {prev ? (
              <Link to="/noticias/$slug" params={{ slug: prev.slug }} className="inline-flex items-center gap-1 text-sm font-semibold text-[color:var(--forest)]">
                <ArrowLeft className="h-4 w-4" /> Anterior
              </Link>
            ) : <span />}
            <Link to="/noticias" className="text-sm font-semibold text-muted-foreground hover:text-[color:var(--forest)]">Todas as notícias</Link>
            {next ? (
              <Link to="/noticias/$slug" params={{ slug: next.slug }} className="inline-flex items-center gap-1 text-sm font-semibold text-[color:var(--forest)]">
                Próxima <ArrowRight className="h-4 w-4" />
              </Link>
            ) : <span />}
          </div>
        </div>
      </article>

      {related.length > 0 && (
        <section className="section-y bg-[color:var(--paper)]">
          <div className="container-narrow">
            <h2 className="font-display text-2xl font-bold text-[color:var(--forest)]">Notícias relacionadas</h2>
            <div className="mt-6 grid gap-6 md:grid-cols-3">
              {related.map((n) => (
                <Link key={n.slug} to="/noticias/$slug" params={{ slug: n.slug }} className="group overflow-hidden rounded-2xl border bg-card shadow-sm hover:shadow-md transition">
                  <div className="aspect-[16/10] overflow-hidden"><img src={n.cover} alt={n.title} className="h-full w-full object-cover transition group-hover:scale-105" loading="lazy" /></div>
                  <div className="p-5">
                    <p className="text-xs text-muted-foreground">{formatDate(n.date)}</p>
                    <p className="mt-2 font-semibold text-[color:var(--forest)] line-clamp-2">{n.title}</p>
                  </div>
                </Link>
              ))}
            </div>
          </div>
        </section>
      )}
    </>
  );
}
