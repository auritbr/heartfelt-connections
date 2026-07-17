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

      <section className="section-y relative overflow-hidden">
        {/* Composição orgânica ao fundo — folhagem sutil */}
        <svg
          aria-hidden
          viewBox="0 0 800 800"
          className="pointer-events-none absolute -top-20 -right-32 h-[520px] w-[520px] text-[color:var(--moss)]/8"
        >
          <path
            d="M400 60 C 560 100 700 220 680 400 C 660 580 500 700 340 680 C 180 660 100 500 120 340 C 140 180 260 40 400 60 Z"
            fill="currentColor"
          />
        </svg>
        <svg
          aria-hidden
          viewBox="0 0 800 800"
          className="pointer-events-none absolute -bottom-28 -left-32 h-[420px] w-[420px] text-[color:var(--leaf)]/40"
        >
          <ellipse cx="400" cy="400" rx="360" ry="280" fill="currentColor" />
        </svg>

        <div className="container-narrow relative">
          <div className="grid gap-x-8 gap-y-14 sm:grid-cols-2 lg:grid-cols-4">
            {team.map((m) => (
              <article key={m.slug} className="group flex flex-col items-center text-center">
                <div className="relative w-full max-w-[240px] mx-auto">
                  {/* Recorte orgânico refinado — silhueta de folha via border-radius assimétrico */}
                  <div
                    className="aspect-[4/5] w-full overflow-hidden bg-[color:var(--leaf)]/40 shadow-[0_18px_40px_-20px_rgba(20,60,30,0.35)] ring-1 ring-[color:var(--moss)]/15 transition-transform duration-500 group-hover:-translate-y-1"
                    style={{ borderRadius: "62% 38% 55% 45% / 48% 52% 48% 52%" }}
                  >
                    <img
                      src={m.photo}
                      alt={m.name}
                      className="h-full w-full object-cover transition duration-700 group-hover:scale-105"
                      loading="lazy"
                    />
                  </div>
                  {/* Pequeno detalhe orgânico — ponto/semente */}
                  <span
                    aria-hidden
                    className="absolute -bottom-2 left-1/2 h-3 w-3 -translate-x-1/2 rounded-full bg-[color:var(--ochre)] ring-4 ring-background"
                  />
                </div>
                <h3 className="mt-6 font-display text-lg font-bold text-[color:var(--forest)]">{m.name}</h3>
                <p className="mt-1 text-xs font-semibold uppercase tracking-widest text-[color:var(--moss)]">{m.role}</p>
              </article>
            ))}
          </div>
        </div>
      </section>

      {/* CTA final */}
      <section className="pb-12 md:pb-16">

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
