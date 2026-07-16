import { createFileRoute, Link } from "@tanstack/react-router";
import { PageHero } from "@/components/layout/PageHero";
import { team } from "@/lib/site-data";
import { ArrowRight } from "lucide-react";

export const Route = createFileRoute("/quem-somos/equipe")({
  head: () => ({
    meta: [
      { title: "Nossa Equipe — Instituto Raízes do Futuro" },
      { name: "description", content: "Conheça a equipe do Instituto Raízes do Futuro." },
      { property: "og:title", content: "Nossa Equipe" },
      { property: "og:description", content: "Pessoas que transformam propósito em ação." },
      { property: "og:url", content: "/quem-somos/equipe" },
    ],
    links: [{ rel: "canonical", href: "/quem-somos/equipe" }],
  }),
  component: EquipePage,
});

function EquipePage() {
  return (
    <>
      <PageHero
        eyebrow="Nossa Equipe"
        title="Pessoas que transformam propósito em ação"
        description="Uma equipe de educadores, agentes culturais, pesquisadores e lideranças comprometidos com a cultura e o meio ambiente."
        image="https://images.unsplash.com/photo-1529156069898-49953e39b3ac?w=2000&q=80&auto=format&fit=crop"
        crumbs={[{ to: "/", label: "Início" }, { to: "/quem-somos", label: "Quem Somos" }, { label: "Nossa Equipe" }]}
      />

      {/* SVG defs para clip-path em forma de folha */}
      <svg width="0" height="0" aria-hidden className="absolute">
        <defs>
          <clipPath id="leafClip" clipPathUnits="objectBoundingBox">
            {/* Forma de folha/pétala orgânica, alta e simétrica */}
            <path d="M0.5 0.02 C 0.82 0.06 0.98 0.32 0.94 0.6 C 0.9 0.86 0.72 0.98 0.5 0.98 C 0.28 0.98 0.1 0.86 0.06 0.6 C 0.02 0.32 0.18 0.06 0.5 0.02 Z" />
          </clipPath>
        </defs>
      </svg>

      <section className="section-y">
        <div className="container-narrow">
          <div className="grid gap-x-8 gap-y-14 sm:grid-cols-2 lg:grid-cols-4">
            {team.map((m) => (
              <article key={m.slug} className="group flex flex-col items-center text-center">
                <div className="relative w-full max-w-[240px] mx-auto">
                  {/* Nervura central sutil (haste da folha) */}
                  <span
                    aria-hidden
                    className="absolute -bottom-3 left-1/2 h-6 w-[2px] -translate-x-1/2 bg-[color:var(--moss)]/40"
                  />
                  <div
                    className="aspect-[3/4] w-full overflow-hidden bg-[color:var(--leaf)]/50 shadow-[0_10px_30px_-15px_rgba(20,60,30,0.35)] transition-transform duration-500 group-hover:-translate-y-1"
                    style={{ clipPath: "url(#leafClip)" }}
                  >
                    <img
                      src={m.photo}
                      alt={m.name}
                      className="h-full w-full object-cover transition duration-700 group-hover:scale-105"
                      loading="lazy"
                    />
                  </div>
                  {/* Contorno de folha (SVG overlay) */}
                  <svg
                    aria-hidden
                    viewBox="0 0 100 133"
                    preserveAspectRatio="none"
                    className="pointer-events-none absolute inset-0 h-full w-full text-[color:var(--moss)]/50"
                  >
                    <path
                      d="M50 2.6 C 82 8 98 42.5 94 79.8 C 90 114.4 72 130.3 50 130.3 C 28 130.3 10 114.4 6 79.8 C 2 42.5 18 8 50 2.6 Z"
                      fill="none"
                      stroke="currentColor"
                      strokeWidth="1"
                    />
                    <path
                      d="M50 6 L50 128"
                      stroke="currentColor"
                      strokeWidth="0.6"
                      opacity="0.5"
                    />
                  </svg>
                </div>
                <h3 className="mt-6 font-display text-lg font-bold text-[color:var(--forest)]">{m.name}</h3>
                <p className="mt-1 text-xs font-semibold uppercase tracking-widest text-[color:var(--moss)]">{m.role}</p>
              </article>
            ))}
          </div>
        </div>
      </section>

      {/* CTA final */}
      <section className="pb-24">
        <div className="container-narrow">
          <div className="relative overflow-hidden rounded-3xl border bg-[color:var(--leaf)]/30 p-8 md:p-12 text-center">
            <svg
              aria-hidden
              className="pointer-events-none absolute -top-10 -left-10 h-52 w-52 text-[color:var(--moss)]/15"
              viewBox="0 0 200 200"
            >
              <path d="M100 10 C 150 30 180 70 170 120 C 160 170 110 190 60 170 C 20 150 10 100 30 60 C 50 25 80 5 100 10 Z" fill="currentColor" />
            </svg>
            <div className="relative">
              <h2 className="font-display text-2xl md:text-3xl font-bold text-[color:var(--forest)]">
                Quer caminhar com a nossa equipe?
              </h2>
              <p className="mx-auto mt-3 max-w-2xl text-sm md:text-base text-muted-foreground">
                Conheça nossas ações, participe das atividades e aproxime-se de um trabalho que une cultura, educação e
                meio ambiente.
              </p>
              <div className="mt-6 flex flex-wrap justify-center gap-3">
                <Link
                  to="/noticias"
                  className="inline-flex items-center gap-2 rounded-full bg-[color:var(--forest)] px-5 py-2.5 text-sm font-semibold text-[color:var(--paper)] hover:bg-[color:var(--moss)]"
                >
                  Conheça nossas ações <ArrowRight className="h-4 w-4" />
                </Link>
                <Link
                  to="/contato"
                  className="inline-flex items-center gap-2 rounded-full border border-[color:var(--forest)] px-5 py-2.5 text-sm font-semibold text-[color:var(--forest)] hover:bg-white"
                >
                  Fale conosco
                </Link>
              </div>
            </div>
          </div>
        </div>
      </section>
    </>
  );
}
