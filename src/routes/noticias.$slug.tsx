import { createFileRoute, Link, notFound } from "@tanstack/react-router";
import { useState } from "react";
import { news, formatDate, type NewsItem, type NewsPhoto } from "@/lib/site-data";
import { Lightbox } from "@/components/ui/Lightbox";
import {
  ArrowRight,
  ChevronRight,
  Clock,
  Copy,
  Facebook,
  Linkedin,
  Mail,
  MessageCircle,
  Share2,
  User,
} from "lucide-react";

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
    <div className="container-narrow py-32 text-center">
      <h1 className="font-display text-3xl font-bold text-[color:var(--forest)]">Notícia não encontrada</h1>
      <Link to="/noticias" className="mt-4 inline-block text-[color:var(--moss)] underline">
        Voltar às notícias
      </Link>
    </div>
  ),
});

function estimateReadingTime(paragraphs: string[]) {
  const words = paragraphs.join(" ").split(/\s+/).length;
  return Math.max(1, Math.round(words / 200));
}

function NoticiaPage() {
  const item = Route.useLoaderData() as NewsItem;

  
  const readingTime = estimateReadingTime(item.body);
  const [lb, setLb] = useState<number | null>(null);
  const [copied, setCopied] = useState(false);

  const shareUrl = typeof window !== "undefined" ? window.location.href : "";
  const shareTitle = item.title;

  const copyLink = async () => {
    try {
      await navigator.clipboard.writeText(shareUrl);
      setCopied(true);
      window.setTimeout(() => setCopied(false), 2000);
    } catch {
      /* noop */
    }
  };

  return (
    <>
      {/* Hero editorial em degradê ambiental */}
      <section className="relative isolate overflow-hidden">
        <div
          className="absolute inset-0 -z-10"
          style={{
            background:
              "linear-gradient(160deg, oklch(0.86 0.05 145) 0%, oklch(0.48 0.07 140) 45%, oklch(0.32 0.06 155) 100%)",
          }}
        />
        {/* fotografia integrada ao fundo */}
        <img
          src={item.cover}
          alt=""
          aria-hidden
          className="absolute inset-0 -z-10 h-full w-full object-cover opacity-20 mix-blend-luminosity"
        />
        {/* formas orgânicas grandes */}
        <svg
          aria-hidden
          className="pointer-events-none absolute -top-24 -right-24 h-[520px] w-[520px] text-white/10"
          viewBox="0 0 200 200"
        >
          <path
            d="M100 10 C 150 30 180 70 170 120 C 160 170 110 190 60 170 C 20 150 10 100 30 60 C 50 25 80 5 100 10 Z"
            fill="currentColor"
          />
        </svg>
        <svg
          aria-hidden
          className="pointer-events-none absolute -bottom-24 -left-16 h-[380px] w-[380px] text-white/8"
          viewBox="0 0 200 200"
        >
          <ellipse cx="100" cy="100" rx="90" ry="70" fill="currentColor" />
        </svg>

        <div className="container-narrow relative pt-28 md:pt-32 pb-14 md:pb-16 text-[color:var(--paper)]">
          <nav aria-label="Breadcrumb" className="text-xs text-[color:var(--paper)]/85">
            <ol className="flex flex-wrap items-center gap-1">
              <li>
                <Link to="/" className="hover:underline">
                  Início
                </Link>
              </li>
              <ChevronRight className="h-3 w-3 opacity-70" />
              <li>
                <Link to="/noticias" className="hover:underline">
                  Notícias
                </Link>
              </li>
              <ChevronRight className="h-3 w-3 opacity-70" />
              <li aria-current="page" className="opacity-90 line-clamp-1">
                {item.title}
              </li>
            </ol>
          </nav>

          <p className="mt-6 text-xs font-semibold uppercase tracking-[0.28em] text-[color:var(--ochre)]">
            {item.category}
          </p>
          <h1 className="mt-3 max-w-3xl font-display text-3xl md:text-5xl font-bold leading-tight">
            {item.title}
          </h1>
          {item.subtitle && (
            <p className="mt-4 max-w-2xl text-lg text-[color:var(--paper)]/90">{item.subtitle}</p>
          )}
          <div className="mt-6 flex flex-wrap items-center gap-x-5 gap-y-2 text-sm text-[color:var(--paper)]/85">
            <span className="inline-flex items-center gap-1.5">
              <User className="h-4 w-4" /> {item.author}
            </span>
            <span>{formatDate(item.date)}</span>
            <span className="inline-flex items-center gap-1.5">
              <Clock className="h-4 w-4" /> {readingTime} min de leitura
            </span>
          </div>
        </div>

        {/* Curva orgânica inferior — silhueta de folha */}
        <svg
          viewBox="0 0 1440 90"
          className="block w-full h-12 md:h-16 -mt-1 text-background"
          aria-hidden
          preserveAspectRatio="none"
        >
          <path
            d="M0 60 C 180 20 360 80 540 55 C 720 30 900 90 1080 60 C 1260 30 1380 70 1440 45 L 1440 90 L 0 90 Z"
            fill="currentColor"
          />
        </svg>
      </section>

      {/* Faixa de compartilhamento */}
      <section className="border-b bg-background">
        <div className="container-narrow flex flex-wrap items-center justify-between gap-3 py-4">
          <p className="text-xs font-semibold uppercase tracking-widest text-muted-foreground">
            <Share2 className="inline h-3.5 w-3.5 mr-1" aria-hidden /> Compartilhe este conteúdo
          </p>
          <div className="flex flex-wrap items-center gap-2">
            <a
              aria-label="Compartilhar no Facebook"
              href={`https://www.facebook.com/sharer/sharer.php?u=${encodeURIComponent(shareUrl)}`}
              target="_blank"
              rel="noreferrer"
              className="rounded-full border p-2.5 hover:bg-secondary"
            >
              <Facebook className="h-4 w-4" />
            </a>
            <a
              aria-label="Compartilhar no LinkedIn"
              href={`https://www.linkedin.com/sharing/share-offsite/?url=${encodeURIComponent(shareUrl)}`}
              target="_blank"
              rel="noreferrer"
              className="rounded-full border p-2.5 hover:bg-secondary"
            >
              <Linkedin className="h-4 w-4" />
            </a>
            <a
              aria-label="Compartilhar no WhatsApp"
              href={`https://wa.me/?text=${encodeURIComponent(shareTitle + " " + shareUrl)}`}
              target="_blank"
              rel="noreferrer"
              className="rounded-full border p-2.5 hover:bg-secondary"
            >
              <MessageCircle className="h-4 w-4" />
            </a>
            <a
              aria-label="Compartilhar por e-mail"
              href={`mailto:?subject=${encodeURIComponent(shareTitle)}&body=${encodeURIComponent(shareUrl)}`}
              className="rounded-full border p-2.5 hover:bg-secondary"
            >
              <Mail className="h-4 w-4" />
            </a>
            <button
              type="button"
              onClick={copyLink}
              aria-label="Copiar link"
              className="inline-flex items-center gap-1 rounded-full border px-3 py-2 text-xs font-semibold hover:bg-secondary"
            >
              <Copy className="h-3.5 w-3.5" /> {copied ? "Link copiado" : "Copiar link"}
            </button>
          </div>
        </div>
      </section>

      {/* Corpo */}
      <article className="section-y">
        <div className="container-narrow max-w-3xl">
          <figure>
            <img
              src={item.cover}
              alt={item.title}
              className="w-full rounded-2xl object-cover aspect-[16/9]"
            />
            {(item.coverCaption || item.coverCredit) && (
              <figcaption className="mt-2 text-xs text-muted-foreground">
                {item.coverCaption}
                {item.coverCredit && <span className="ml-2 text-muted-foreground/70">{item.coverCredit}</span>}
              </figcaption>
            )}
          </figure>

          <div className="prose prose-neutral mt-8 max-w-none">
            {item.body.map((p, i) => (
              <p key={i} className="mt-4 text-base leading-relaxed text-foreground/90">
                {p}
              </p>
            ))}
          </div>

          <div className="mt-8 flex flex-wrap items-center gap-2">
            <span className="text-xs font-semibold uppercase tracking-widest text-muted-foreground">Tags:</span>
            {item.tags.map((t) => (
              <span
                key={t}
                className="rounded-full bg-[color:var(--leaf)] text-[color:var(--forest)] px-3 py-1 text-xs font-semibold"
              >
                #{t}
              </span>
            ))}
          </div>
        </div>
      </article>

      {/* Galeria — Registros desta ação */}
      {item.gallery && item.gallery.length > 0 && (
        <section className="section-y bg-[color:var(--paper)] paper-texture">
          <div className="container-narrow">
            <p className="text-xs font-semibold uppercase tracking-[0.24em] text-[color:var(--moss)]">Galeria</p>
            <h2 className="mt-2 font-display text-2xl md:text-3xl font-bold text-[color:var(--forest)]">
              Galeria de fotos
            </h2>
            <p className="mt-2 max-w-2xl text-sm text-muted-foreground">
              Confira alguns momentos registrados durante a realização desta atividade.
            </p>

            <div className="mt-8 grid gap-3 grid-cols-2 md:grid-cols-3 lg:grid-cols-4">
              {item.gallery.map((p: NewsPhoto, i: number) => (
                <button
                  key={i}
                  type="button"
                  onClick={() => setLb(i)}
                  className="group aspect-square overflow-hidden rounded-2xl border bg-background focus:outline-none focus-visible:ring-2 focus-visible:ring-[color:var(--moss)]"
                  aria-label={`Abrir foto ${i + 1} de ${item.gallery!.length}${p.caption ? ` — ${p.caption}` : ""}`}
                >
                  <img
                    src={p.src}
                    alt={p.caption ?? `${item.title} — foto ${i + 1}`}
                    className="h-full w-full object-cover transition duration-500 group-hover:scale-105"
                    loading="lazy"
                  />
                </button>
              ))}
            </div>
          </div>
          <Lightbox
            photos={item.gallery}
            index={lb}
            title={item.title}
            onClose={() => setLb(null)}
            onIndexChange={setLb}
          />
        </section>
      )}

      {/* Últimas notícias */}
      {(() => {
        const latest = news
          .filter((n) => n.slug !== item.slug)
          .slice()
          .sort((a, b) => b.date.localeCompare(a.date))
          .slice(0, 3);
        if (latest.length === 0) return null;
        return (
          <section className="section-y">
            <div className="container-narrow">
              <div className="flex items-end justify-between gap-4">
                <div>
                  <p className="text-xs font-semibold uppercase tracking-[0.24em] text-[color:var(--moss)]">Fique por dentro</p>
                  <h2 className="mt-2 font-display text-2xl md:text-3xl font-bold text-[color:var(--forest)]">Últimas notícias</h2>
                </div>
                <Link to="/noticias" className="text-sm font-semibold text-[color:var(--forest)] hover:underline">
                  Ver todas
                </Link>
              </div>
              <div className="mt-6 grid gap-6 md:grid-cols-3">
                {latest.map((n) => (
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
                        <span className="mt-4 inline-flex items-center gap-1 text-sm font-semibold text-[color:var(--moss)]">
                          Leia mais <ArrowRight className="h-3.5 w-3.5" />
                        </span>
                      </div>
                    </Link>
                  </article>
                ))}
              </div>
            </div>
          </section>
        );
      })()}


      {/* Navegação inferior */}
      <section className="section-y bg-[color:var(--paper)]">
        <div className="container-narrow flex flex-wrap items-center justify-between gap-3">
          {prev ? (
            <Link
              to="/noticias/$slug"
              params={{ slug: prev.slug }}
              className="inline-flex items-center gap-2 text-sm font-semibold text-[color:var(--forest)] hover:underline"
            >
              <ArrowLeft className="h-4 w-4" /> Notícia anterior
            </Link>
          ) : (
            <span />
          )}
          <Link
            to="/noticias"
            className="inline-flex items-center gap-2 rounded-full bg-[color:var(--forest)] px-5 py-2.5 text-sm font-semibold text-[color:var(--paper)] hover:bg-[color:var(--moss)]"
          >
            Voltar para Notícias
          </Link>
          {next ? (
            <Link
              to="/noticias/$slug"
              params={{ slug: next.slug }}
              className="inline-flex items-center gap-2 text-sm font-semibold text-[color:var(--forest)] hover:underline"
            >
              Próxima notícia <ArrowRight className="h-4 w-4" />
            </Link>
          ) : (
            <span />
          )}
        </div>
      </section>
    </>
  );
}
