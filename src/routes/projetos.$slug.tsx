import { createFileRoute, Link, notFound } from "@tanstack/react-router";
import { useMemo, useState } from "react";
import { PageHero } from "@/components/layout/PageHero";
import { LeafDivider, RiverLine, TopoRings, BranchLine } from "@/components/OrganicShapes";
import { useReveal } from "@/hooks/use-reveal";
import { projectPages, news } from "@/lib/site-data";
import { Lightbox } from "@/components/ui/Lightbox";
import { ArrowRight, Target, Users, Sparkles, Images, ChevronRight } from "lucide-react";

export const Route = createFileRoute("/projetos/$slug")({
  loader: ({ params }) => {
    const project = projectPages.find((p) => p.slug === params.slug);
    if (!project) throw notFound();
    return { project };
  },
  head: ({ loaderData }) => {
    if (!loaderData) {
      return {
        meta: [
          { title: "Projeto não encontrado — Instituto Raízes do Futuro" },
          { name: "robots", content: "noindex" },
        ],
      };
    }
    const { project } = loaderData;
    return {
      meta: [
        { title: `${project.title} — Projetos — Instituto Raízes do Futuro` },
        { name: "description", content: project.shortDescription },
        { property: "og:title", content: project.title },
        { property: "og:description", content: project.shortDescription },
        { property: "og:image", content: project.heroImage },
        { property: "og:type", content: "article" },
        { property: "og:url", content: `/projetos/${project.slug}` },
      ],
      links: [{ rel: "canonical", href: `/projetos/${project.slug}` }],
    };
  },
  component: ProjetoDetail,
  notFoundComponent: NotFoundProject,
});

function NotFoundProject() {
  return (
    <div className="container-narrow py-24 text-center">
      <h1 className="font-display text-3xl font-bold text-[color:var(--forest)]">
        Projeto não encontrado
      </h1>
      <p className="mt-3 text-muted-foreground">O projeto que você buscou não está disponível.</p>
      <Link
        to="/projetos"
        className="mt-6 inline-flex items-center rounded-full bg-[color:var(--forest)] px-5 py-3 text-sm font-semibold text-[color:var(--paper)]"
      >
        Ver todos os projetos
      </Link>
    </div>
  );
}

function ProjetoDetail() {
  useReveal();
  const { project } = Route.useLoaderData();
  const [lightbox, setLightbox] = useState<number | null>(null);

  const photos = useMemo(
    () => project.gallery.map((src, i) => ({ src, alt: `${project.title} — foto ${i + 1}` })),
    [project],
  );

  const related = useMemo(
    () =>
      projectPages.filter((p) => p.slug !== project.slug).slice(0, 2),
    [project],
  );

  const linkedNews = useMemo(
    () =>
      news
        .filter((n) =>
          [n.title, n.excerpt, ...(n.tags ?? [])]
            .join(" ")
            .toLowerCase()
            .includes(project.title.toLowerCase().split(" ")[0]),
        )
        .slice(0, 3),
    [project],
  );

  return (
    <>
      <PageHero
        eyebrow={project.eyebrow}
        title={project.title}
        description={project.shortDescription}
        image={project.heroImage}
        crumbs={[
          { to: "/", label: "Início" },
          { to: "/projetos", label: "Projetos" },
          { label: project.title },
        ]}
      />

      {/* Presentation */}
      <section className="relative bg-background">
        <div className="container-narrow py-16 md:py-20 grid gap-10 lg:grid-cols-[1fr_.9fr] items-start">
          <div className="reveal">
            <div className="flex items-center gap-3">
              <RiverLine className="h-3 w-16 text-[color:var(--ochre)]" />
              <p className="text-xs font-semibold uppercase tracking-[0.24em] text-[color:var(--moss)]">
                Apresentação
              </p>
            </div>
            <h2 className="mt-4 font-display text-3xl md:text-4xl font-extrabold text-[color:var(--forest)]">
              {project.presentation.title}
            </h2>
            <div className="mt-5 space-y-4 text-foreground/80 leading-relaxed text-lg">
              {project.presentation.body.map((p, i) => (
                <p key={i}>{p}</p>
              ))}
            </div>
          </div>
          <aside className="reveal relative">
            <BranchLine className="absolute -top-8 -right-6 h-32 w-32 text-[color:var(--leaf)]/70" />
            <div className="rounded-3xl border border-[color:var(--leaf)]/60 bg-[color:var(--paper)] p-6 shadow-sm">
              <p className="text-xs font-semibold uppercase tracking-[0.2em] text-[color:var(--moss)]">
                Em números
              </p>
              <ul className="mt-4 grid gap-3">
                {project.facts.map((f) => (
                  <li
                    key={f.label}
                    className="flex items-baseline justify-between border-b border-dashed border-[color:var(--leaf)]/70 pb-2 last:border-0"
                  >
                    <span className="text-sm text-foreground/80">{f.label}</span>
                    <span className="font-display text-2xl font-extrabold text-[color:var(--forest)]">
                      {f.value}
                    </span>
                  </li>
                ))}
              </ul>
            </div>
          </aside>
        </div>
        <LeafDivider color="var(--paper)" />
      </section>

      {/* Objectives + Audiences */}
      <section className="relative bg-[color:var(--paper)] paper-texture">
        <div className="container-narrow py-16 md:py-20 grid gap-10 md:grid-cols-2">
          <div className="reveal rounded-3xl bg-white p-8 border border-[color:var(--leaf)]/60 shadow-sm">
            <div className="flex items-center gap-2">
              <Target className="h-5 w-5 text-[color:var(--forest)]" />
              <h3 className="font-display text-2xl font-bold text-[color:var(--forest)]">
                Objetivos
              </h3>
            </div>
            <ul className="mt-5 space-y-3">
              {project.objectives.map((o) => (
                <li key={o} className="flex gap-3 text-foreground/85">
                  <ChevronRight className="h-5 w-5 shrink-0 mt-0.5 text-[color:var(--moss)]" />
                  <span>{o}</span>
                </li>
              ))}
            </ul>
          </div>
          <div className="reveal rounded-3xl bg-white p-8 border border-[color:var(--leaf)]/60 shadow-sm">
            <div className="flex items-center gap-2">
              <Users className="h-5 w-5 text-[color:var(--forest)]" />
              <h3 className="font-display text-2xl font-bold text-[color:var(--forest)]">
                Públicos atendidos
              </h3>
            </div>
            <ul className="mt-5 grid gap-2">
              {project.audiences.map((a) => (
                <li
                  key={a}
                  className="rounded-full bg-[color:var(--leaf)]/40 px-4 py-2 text-sm text-[color:var(--forest)] font-medium"
                >
                  {a}
                </li>
              ))}
            </ul>
          </div>
        </div>
      </section>

      {/* Activities */}
      <section className="relative bg-background">
        <TopoRings className="pointer-events-none absolute -top-40 -right-40 h-[500px] w-[500px] text-[color:var(--moss)]/10" />
        <div className="container-narrow py-16 md:py-20 relative">
          <div className="flex items-center gap-3 reveal">
            <Sparkles className="h-5 w-5 text-[color:var(--ochre)]" />
            <p className="text-xs font-semibold uppercase tracking-[0.24em] text-[color:var(--moss)]">
              Como acontece
            </p>
          </div>
          <h2 className="mt-3 font-display text-3xl md:text-4xl font-extrabold text-[color:var(--forest)] reveal">
            Atividades do projeto
          </h2>
          <div className="mt-10 grid gap-6 md:grid-cols-3">
            {project.activities.map((a, i) => (
              <article
                key={a.name}
                className="reveal group overflow-hidden rounded-3xl border bg-card shadow-sm hover:-translate-y-0.5 hover:shadow-lg transition"
              >
                <div className={`aspect-[4/3] overflow-hidden ${i === 1 ? "organic-blob-3" : ""}`}>
                  <img
                    src={a.image}
                    alt={a.name}
                    className="h-full w-full object-cover transition duration-700 group-hover:scale-105"
                    loading="lazy"
                  />
                </div>
                <div className="p-5">
                  <h3 className="font-display text-lg font-bold text-[color:var(--forest)]">
                    {a.name}
                  </h3>
                  <p className="mt-2 text-sm text-foreground/75 leading-relaxed">{a.summary}</p>
                </div>
              </article>
            ))}
          </div>
        </div>
      </section>

      {/* Gallery */}
      <section className="relative bg-[color:var(--paper)] paper-texture">
        <div className="container-narrow py-16 md:py-20">
          <div className="flex items-end justify-between gap-4 reveal">
            <div>
              <div className="flex items-center gap-3">
                <Images className="h-5 w-5 text-[color:var(--moss)]" />
                <p className="text-xs font-semibold uppercase tracking-[0.24em] text-[color:var(--moss)]">
                  Registros
                </p>
              </div>
              <h2 className="mt-2 font-display text-3xl md:text-4xl font-extrabold text-[color:var(--forest)]">
                Galeria do projeto
              </h2>
            </div>
            {project.linkedAlbumProject && (
              <Link
                to="/galeria"
                search={{ projeto: project.linkedAlbumProject }}
                className="hidden md:inline-flex items-center gap-1 text-sm font-semibold text-[color:var(--forest)] hover:underline"
              >
                Ver na galeria completa
                <ArrowRight className="h-4 w-4" />
              </Link>
            )}
          </div>
          <div className="mt-8 grid grid-cols-2 md:grid-cols-4 gap-3 md:gap-4">
            {project.gallery.map((src, i) => (
              <button
                type="button"
                key={src}
                onClick={() => setLightbox(i)}
                className={`group relative aspect-square overflow-hidden ${
                  i % 3 === 0 ? "organic-blob" : i % 3 === 1 ? "organic-blob-2" : "organic-blob-3"
                }`}
                aria-label={`Abrir foto ${i + 1}`}
              >
                <img
                  src={src}
                  alt={`${project.title} — foto ${i + 1}`}
                  className="h-full w-full object-cover transition duration-500 group-hover:scale-105"
                  loading="lazy"
                />
              </button>
            ))}
          </div>
        </div>
      </section>

      {/* Related news */}
      {linkedNews.length > 0 && (
        <section className="relative bg-background">
          <div className="container-narrow py-16 md:py-20">
            <h2 className="font-display text-2xl md:text-3xl font-extrabold text-[color:var(--forest)] reveal">
              Notícias relacionadas
            </h2>
            <div className="mt-8 grid gap-6 md:grid-cols-3">
              {linkedNews.map((n) => (
                <Link
                  key={n.slug}
                  to="/noticias/$slug"
                  params={{ slug: n.slug }}
                  className="reveal group overflow-hidden rounded-2xl border bg-card shadow-sm hover:-translate-y-0.5 hover:shadow-lg transition"
                >
                  <div className="aspect-[16/10] overflow-hidden">
                    <img
                      src={n.cover}
                      alt={n.title}
                      className="h-full w-full object-cover transition duration-700 group-hover:scale-105"
                      loading="lazy"
                    />
                  </div>
                  <div className="p-4">
                    <p className="text-[11px] uppercase tracking-widest text-[color:var(--moss)] font-semibold">
                      {n.category}
                    </p>
                    <h3 className="mt-1 font-display text-base font-bold text-[color:var(--forest)] line-clamp-2">
                      {n.title}
                    </h3>
                  </div>
                </Link>
              ))}
            </div>
          </div>
        </section>
      )}

      {/* Related projects + CTA */}
      <section className="relative bg-[color:var(--forest)] text-[color:var(--paper)]">
        <TopoRings className="pointer-events-none absolute -bottom-40 -left-40 h-[500px] w-[500px] text-[color:var(--leaf)]/15" />
        <div className="container-narrow py-16 md:py-20 relative grid gap-10 lg:grid-cols-[1.1fr_.9fr] items-center">
          <div>
            <RiverLine className="h-3 w-24 text-[color:var(--ochre)]" />
            <h2 className="mt-4 font-display text-3xl md:text-4xl font-extrabold">
              {project.cta.title}
            </h2>
            <p className="mt-4 text-[color:var(--paper)]/85 max-w-xl">{project.cta.text}</p>
            <div className="mt-7 flex flex-wrap gap-3">
              <Link
                to="/contato"
                className="inline-flex items-center rounded-full bg-white px-6 py-3 text-sm font-semibold text-[color:var(--forest)] hover:bg-[color:var(--leaf)]"
              >
                Quero participar
              </Link>
              <Link
                to="/projetos"
                className="inline-flex items-center rounded-full border border-white/40 px-6 py-3 text-sm font-semibold text-white hover:bg-white/10"
              >
                Ver todos os projetos
              </Link>
            </div>
          </div>
          <div className="grid gap-4">
            <p className="text-xs font-semibold uppercase tracking-[0.24em] text-[color:var(--leaf)]">
              Outros projetos
            </p>
            {related.map((r) => (
              <Link
                key={r.slug}
                to="/projetos/$slug"
                params={{ slug: r.slug }}
                className="group flex items-center gap-4 rounded-2xl bg-white/5 border border-white/10 p-3 hover:bg-white/10 transition"
              >
                <div className="h-20 w-24 shrink-0 overflow-hidden organic-blob-2">
                  <img src={r.heroImage} alt={r.title} className="h-full w-full object-cover" loading="lazy" />
                </div>
                <div className="min-w-0 flex-1">
                  <p className="text-[11px] uppercase tracking-widest text-[color:var(--leaf)]">
                    {r.category}
                  </p>
                  <h3 className="font-display text-lg font-bold truncate">{r.title}</h3>
                </div>
                <ArrowRight className="h-4 w-4 opacity-70 group-hover:translate-x-1 transition" />
              </Link>
            ))}
          </div>
        </div>
      </section>

      <Lightbox
        photos={photos}
        index={lightbox}
        title={project.title}
        onClose={() => setLightbox(null)}
        onIndexChange={setLightbox}
      />
    </>
  );
}
