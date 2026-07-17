import { createFileRoute, Link, notFound } from "@tanstack/react-router";
import { useMemo, useState } from "react";
import { PageHero } from "@/components/layout/PageHero";
import { LeafDivider, RiverLine, TopoRings, BranchLine } from "@/components/OrganicShapes";
import { useReveal } from "@/hooks/use-reveal";
import { projectPages } from "@/lib/site-data";
import { Lightbox } from "@/components/ui/Lightbox";
import { ArrowRight, Target, Users, Sparkles, Images, ChevronRight, Leaf } from "lucide-react";

import type { ProjectPage } from "@/lib/site-data";

export const Route = createFileRoute("/projetos/$slug")({
  loader: ({ params }): { project: ProjectPage } => {
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
        Voltar para Projetos
      </Link>
    </div>
  );
}

function ProjetoDetail() {
  useReveal();
  const { project } = Route.useLoaderData() as { project: ProjectPage };
  const [lightbox, setLightbox] = useState<number | null>(null);

  const photos = useMemo(
    () => project.gallery.map((src, i) => ({ src, alt: `${project.title} — foto ${i + 1}` })),
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

      {/* 1. Sobre o projeto */}
      <section className="relative bg-background">
        <div className="container-narrow py-16 md:py-24 grid gap-12 lg:grid-cols-[1.05fr_.95fr] items-start">
          <div className="reveal">
            <div className="flex items-center gap-3">
              <RiverLine className="h-3 w-16 text-[color:var(--ochre)]" />
              <p className="text-xs font-semibold uppercase tracking-[0.24em] text-[color:var(--moss)]">
                {project.about.title}
              </p>
            </div>
            <h2 className="mt-4 font-display text-3xl md:text-4xl font-extrabold text-[color:var(--forest)] leading-tight">
              {project.about.intro}
            </h2>
            <div className="mt-6 space-y-4 text-foreground/80 leading-relaxed text-[17px]">
              {project.about.paragraphs.map((p, i) => (
                <p key={i}>{p}</p>
              ))}
            </div>
            {project.about.highlight && (
              <blockquote className="mt-8 relative rounded-2xl bg-[color:var(--leaf)]/30 border-l-4 border-[color:var(--moss)] p-6 text-[color:var(--forest)]">
                <Leaf
                  className="absolute -top-3 -left-3 h-8 w-8 rounded-full bg-[color:var(--forest)] p-1.5 text-[color:var(--leaf)]"
                  aria-hidden
                />
                <p className="font-display text-lg font-semibold leading-snug">
                  {project.about.highlight}
                </p>
              </blockquote>
            )}
          </div>
          <div className="reveal relative">
            <BranchLine className="absolute -top-8 -right-6 h-40 w-40 text-[color:var(--leaf)]/70" aria-hidden />
            <figure className="relative organic-blob overflow-hidden shadow-xl aspect-[4/5]">
              <img
                src={project.about.image}
                alt={project.about.imageCaption ?? project.title}
                className="h-full w-full object-cover"
                loading="lazy"
              />
            </figure>
            {project.about.imageCaption && (
              <figcaption className="mt-3 text-xs text-muted-foreground text-center italic">
                {project.about.imageCaption}
              </figcaption>
            )}
          </div>
        </div>
        <LeafDivider color="var(--paper)" />
      </section>

      {/* 2. Cards temáticos */}
      <section className="relative bg-[color:var(--paper)] paper-texture">
        <TopoRings className="pointer-events-none absolute -top-40 -left-40 h-[500px] w-[500px] text-[color:var(--moss)]/10" aria-hidden />
        <div className="container-narrow py-16 md:py-24 relative">
          <div className="reveal max-w-2xl">
            <p className="text-xs font-semibold uppercase tracking-[0.24em] text-[color:var(--moss)]">
              Frentes do projeto
            </p>
            <h2 className="mt-3 font-display text-3xl md:text-4xl font-extrabold text-[color:var(--forest)]">
              {project.cards.title}
            </h2>
          </div>
          <div className="mt-10 grid gap-6 sm:grid-cols-2 lg:grid-cols-4">
            {project.cards.items.map((c, i) => (
              <article
                key={c.title}
                className="reveal group overflow-hidden rounded-3xl bg-white border border-[color:var(--leaf)]/60 shadow-sm hover:-translate-y-1 hover:shadow-xl transition"
                style={{ transitionDelay: `${i * 40}ms` }}
              >
                <div className="aspect-[4/3] overflow-hidden">
                  <img
                    src={c.image}
                    alt={c.title}
                    className="h-full w-full object-cover transition duration-700 group-hover:scale-105"
                    loading="lazy"
                  />
                </div>
                <div className="p-5">
                  <div className="flex items-center gap-2">
                    <span className="grid h-7 w-7 place-items-center rounded-full bg-[color:var(--leaf)]/50 text-[color:var(--forest)]">
                      <Leaf className="h-3.5 w-3.5" aria-hidden />
                    </span>
                    <h3 className="font-display text-lg font-bold text-[color:var(--forest)]">
                      {c.title}
                    </h3>
                  </div>
                  <p className="mt-3 text-sm text-foreground/75 leading-relaxed">{c.text}</p>
                </div>
              </article>
            ))}
          </div>
        </div>
      </section>

      {/* 3. Objetivos + Públicos */}
      <section className="relative bg-background">
        <div className="container-narrow py-16 md:py-20 grid gap-8 md:grid-cols-2">
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

      {/* 4. Como funciona */}
      <section className="relative bg-[color:var(--paper)] paper-texture">
        <div className="container-narrow py-16 md:py-20 grid gap-10 lg:grid-cols-[1fr_.75fr] items-start">
          <div className="reveal">
            <p className="text-xs font-semibold uppercase tracking-[0.24em] text-[color:var(--moss)]">
              Como funciona
            </p>
            <h2 className="mt-3 font-display text-3xl md:text-4xl font-extrabold text-[color:var(--forest)]">
              {project.presentation.title}
            </h2>
            <div className="mt-5 space-y-4 text-foreground/80 leading-relaxed text-lg">
              {project.presentation.body.map((p, i) => (
                <p key={i}>{p}</p>
              ))}
            </div>
          </div>
          <aside className="reveal rounded-3xl border border-[color:var(--leaf)]/60 bg-white p-6 shadow-sm">
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
          </aside>
        </div>
      </section>

      {/* 5. Atividades */}
      <section className="relative bg-background">
        <TopoRings className="pointer-events-none absolute -top-40 -right-40 h-[500px] w-[500px] text-[color:var(--moss)]/10" aria-hidden />
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

      {/* 6. Galeria */}
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

      {/* 7. CTA final */}
      <section className="relative bg-[color:var(--forest)] text-[color:var(--paper)] overflow-hidden">
        <div className="absolute inset-0 -z-0 opacity-25">
          <img
            src={project.cta.image}
            alt=""
            aria-hidden
            className="h-full w-full object-cover"
            loading="lazy"
          />
          <div className="absolute inset-0 bg-gradient-to-r from-[color:var(--forest)] via-[color:var(--forest)]/90 to-[color:var(--forest)]/60" />
        </div>
        <TopoRings className="pointer-events-none absolute -bottom-40 -right-40 h-[500px] w-[500px] text-[color:var(--leaf)]/15" aria-hidden />
        <div className="container-narrow py-16 md:py-20 relative text-center">
          <RiverLine className="mx-auto h-3 w-24 text-[color:var(--ochre)]" />
          <h2 className="mt-4 font-display text-3xl md:text-4xl font-extrabold max-w-3xl mx-auto">
            {project.cta.title}
          </h2>
          <p className="mt-4 text-[color:var(--paper)]/85 max-w-2xl mx-auto">
            {project.cta.text}
          </p>
          <div className="mt-8 flex flex-wrap justify-center gap-3">
            <Link
              to="/contato"
              className="inline-flex items-center rounded-full bg-white px-6 py-3 text-sm font-semibold text-[color:var(--forest)] hover:bg-[color:var(--leaf)] transition"
            >
              Entrar em contato
            </Link>
            {project.linkedAlbumProject && (
              <Link
                to="/galeria"
                search={{ projeto: project.linkedAlbumProject }}
                className="inline-flex items-center gap-2 rounded-full border border-white/40 px-6 py-3 text-sm font-semibold text-white hover:bg-white/10 transition"
              >
                <Images className="h-4 w-4" />
                Ver galeria de fotos
              </Link>
            )}
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
