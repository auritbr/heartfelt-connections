import { createFileRoute, Link } from "@tanstack/react-router";
import { PageHero } from "@/components/layout/PageHero";
import { LeafDivider, RiverLine, TopoRings, BranchLine } from "@/components/OrganicShapes";
import { useReveal } from "@/hooks/use-reveal";
import { projectPages } from "@/lib/site-data";
import { ArrowRight, Leaf, Sprout, BookOpen, Users } from "lucide-react";

export const Route = createFileRoute("/projetos/")({
  head: () => ({
    meta: [
      { title: "Projetos — Instituto Raízes do Futuro" },
      {
        name: "description",
        content:
          "Conheça os projetos do Instituto: Biblioteca Verde, Guardiões do Território e Cultura que Floresce — leitura, meio ambiente e comunidade.",
      },
      { property: "og:title", content: "Projetos — Instituto Raízes do Futuro" },
      {
        property: "og:description",
        content: "Leitura, preservação e cultura viva construindo território.",
      },
      { property: "og:url", content: "/projetos" },
    ],
    links: [{ rel: "canonical", href: "/projetos" }],
  }),
  component: ProjetosIndex,
});

const iconFor = (slug: string) =>
  slug === "biblioteca-verde" ? BookOpen : slug === "guardioes-do-territorio" ? Sprout : Users;

function ProjetosIndex() {
  useReveal();

  return (
    <>
      <PageHero
        eyebrow="Nossos projetos"
        title="Projetos que enraízam cultura, leitura e meio ambiente"
        description="Três frentes contínuas de trabalho, construídas junto com as comunidades atendidas pelo Ponto de Cultura."
        image="https://images.unsplash.com/photo-1466692476868-aef1dfb1e735?w=2000&q=80&auto=format&fit=crop"
        crumbs={[{ to: "/", label: "Início" }, { label: "Projetos" }]}
      />

      {/* Intro */}
      <section className="relative bg-background">
        <div className="container-narrow py-16 md:py-20 grid gap-10 lg:grid-cols-[1.05fr_.95fr] items-start">
          <div className="reveal">
            <div className="flex items-center gap-3">
              <RiverLine className="h-3 w-16 text-[color:var(--ochre)]" />
              <p className="text-xs font-semibold uppercase tracking-[0.24em] text-[color:var(--moss)]">
                Território vivo
              </p>
            </div>
            <h2 className="mt-4 font-display text-3xl md:text-4xl font-extrabold text-[color:var(--forest)]">
              Cada projeto é uma raiz que sustenta o cuidado com o território
            </h2>
            <p className="mt-5 text-lg leading-relaxed text-foreground/80">
              Nossos projetos nascem da escuta das comunidades. Reúnem leitura, educação
              ambiental, cultura popular e mobilização comunitária em ações contínuas — não
              eventos isolados —, construídas com escolas, mestras e mestres locais, jovens,
              famílias e parceiros.
            </p>
            <p className="mt-4 text-foreground/80 leading-relaxed">
              Conheça abaixo as três frentes ativas do Instituto e as formas de participar.
            </p>
          </div>
          <div className="reveal relative">
            <BranchLine className="absolute -top-6 -right-6 h-40 w-40 text-[color:var(--leaf)]/60" />
            <div className="grid grid-cols-2 gap-4">
              {projectPages.map((p, i) => (
                <div
                  key={p.slug}
                  className={`relative overflow-hidden ${
                    i % 2 === 0 ? "organic-blob" : "organic-blob-2"
                  } aspect-square`}
                >
                  <img
                    src={p.heroImage}
                    alt={p.title}
                    className="h-full w-full object-cover"
                    loading="lazy"
                  />
                </div>
              ))}
              <div className="relative overflow-hidden organic-blob-3 aspect-square bg-[color:var(--forest)] text-[color:var(--paper)] grid place-items-center p-4 text-center">
                <div>
                  <Leaf className="mx-auto h-6 w-6 text-[color:var(--leaf)]" />
                  <p className="mt-2 text-sm font-semibold">
                    3 projetos
                    <br />
                    contínuos
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
        <LeafDivider color="var(--paper)" />
      </section>

      {/* Projects list */}
      <section className="relative bg-[color:var(--paper)] paper-texture">
        <TopoRings className="pointer-events-none absolute -top-20 -left-40 h-[500px] w-[500px] text-[color:var(--moss)]/10" />
        <div className="container-narrow py-16 md:py-24 space-y-16 md:space-y-24 relative">
          {projectPages.map((p, i) => {
            const Icon = iconFor(p.slug);
            const reverse = i % 2 === 1;
            return (
              <article
                key={p.slug}
                className={`reveal grid gap-8 md:gap-12 lg:grid-cols-2 items-center ${
                  reverse ? "lg:[&>*:first-child]:order-2" : ""
                }`}
              >
                <div className={`relative ${i % 2 === 0 ? "organic-blob" : "organic-blob-2"} overflow-hidden aspect-[4/3] shadow-xl`}>
                  <img
                    src={p.heroImage}
                    alt={p.title}
                    className="h-full w-full object-cover"
                    loading="lazy"
                  />
                </div>
                <div>
                  <p className="inline-flex items-center gap-2 text-xs font-semibold uppercase tracking-[0.22em] text-[color:var(--moss)]">
                    <Icon className="h-4 w-4" />
                    {p.category}
                  </p>
                  <h3 className="mt-3 font-display text-3xl md:text-4xl font-extrabold text-[color:var(--forest)]">
                    {p.title}
                  </h3>
                  <p className="mt-4 text-foreground/80 leading-relaxed">{p.shortDescription}</p>

                  <ul className="mt-6 grid grid-cols-3 gap-3">
                    {p.facts.map((f) => (
                      <li
                        key={f.label}
                        className="rounded-2xl border border-[color:var(--leaf)]/60 bg-white p-3 text-center"
                      >
                        <p className="font-display text-xl font-extrabold text-[color:var(--forest)]">
                          {f.value}
                        </p>
                        <p className="mt-0.5 text-[11px] leading-tight text-muted-foreground">
                          {f.label}
                        </p>
                      </li>
                    ))}
                  </ul>

                  <div className="mt-7 flex flex-wrap gap-3">
                    <Link
                      to="/projetos/$slug"
                      params={{ slug: p.slug }}
                      className="inline-flex items-center gap-2 rounded-full bg-[color:var(--forest)] px-5 py-3 text-sm font-semibold text-[color:var(--paper)] shadow-sm hover:bg-[color:var(--moss)] transition"
                    >
                      Conhecer o projeto
                      <ArrowRight className="h-4 w-4" />
                    </Link>
                    <Link
                      to="/contato"
                      className="inline-flex items-center rounded-full border border-[color:var(--forest)]/30 px-5 py-3 text-sm font-semibold text-[color:var(--forest)] hover:bg-[color:var(--leaf)]/40"
                    >
                      Quero participar
                    </Link>
                  </div>
                </div>
              </article>
            );
          })}
        </div>
      </section>

      {/* Closing CTA */}
      <section className="relative bg-[color:var(--forest)] text-[color:var(--paper)]">
        <TopoRings className="pointer-events-none absolute -bottom-40 -right-40 h-[500px] w-[500px] text-[color:var(--leaf)]/15" />
        <div className="container-narrow py-16 md:py-20 relative text-center">
          <RiverLine className="mx-auto h-3 w-24 text-[color:var(--ochre)]" />
          <h2 className="mt-4 font-display text-3xl md:text-4xl font-extrabold">
            Nossos projetos são construídos com muitas mãos
          </h2>
          <p className="mt-4 max-w-2xl mx-auto text-[color:var(--paper)]/85">
            Escolas, voluntários, apoiadores e parceiros compõem essa rede. Some-se ao território.
          </p>
          <div className="mt-8 flex flex-wrap justify-center gap-3">
            <Link
              to="/contato"
              className="inline-flex items-center rounded-full bg-white px-6 py-3 text-sm font-semibold text-[color:var(--forest)] hover:bg-[color:var(--leaf)]"
            >
              Fale com o Instituto
            </Link>
            <Link
              to="/quem-somos"
              className="inline-flex items-center rounded-full border border-white/40 px-6 py-3 text-sm font-semibold text-white hover:bg-white/10"
            >
              Conheça o Instituto
            </Link>
          </div>
        </div>
      </section>
    </>
  );
}
