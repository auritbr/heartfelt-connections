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

      <section className="relative overflow-hidden bg-[color:var(--paper)]/50 pt-16 md:pt-20 pb-4 md:pb-8">
        {/* Composição de árvore ao fundo — copa, tronco e ramificações */}
        <svg
          aria-hidden
          viewBox="0 0 1000 900"
          preserveAspectRatio="xMidYMid slice"
          className="pointer-events-none absolute inset-0 h-full w-full text-[color:var(--moss)]"
        >
          {/* copa em nuvens sobrepostas */}
          <g opacity="0.09" fill="currentColor">
            <ellipse cx="500" cy="230" rx="360" ry="180" />
            <ellipse cx="310" cy="280" rx="200" ry="130" />
            <ellipse cx="700" cy="270" rx="220" ry="140" />
            <ellipse cx="500" cy="150" rx="220" ry="110" />
          </g>
          {/* ramificações */}
          <g fill="none" stroke="currentColor" strokeWidth="1.4" strokeLinecap="round" opacity="0.22">
            <path d="M500 900 C 500 700 500 550 500 400" />
            <path d="M500 520 C 420 500 350 460 280 420" />
            <path d="M500 500 C 580 480 660 440 740 400" />
            <path d="M500 620 C 400 600 320 570 230 540" />
            <path d="M500 600 C 610 580 700 560 800 530" />
            <path d="M500 720 C 420 720 340 720 260 720" />
            <path d="M500 720 C 600 720 700 720 780 720" />
          </g>
          {/* folhas nas pontas */}
          <g fill="currentColor" opacity="0.18">
            <ellipse cx="280" cy="420" rx="14" ry="7" transform="rotate(-25 280 420)" />
            <ellipse cx="740" cy="400" rx="14" ry="7" transform="rotate(25 740 400)" />
            <ellipse cx="230" cy="540" rx="14" ry="7" transform="rotate(-20 230 540)" />
            <ellipse cx="800" cy="530" rx="14" ry="7" transform="rotate(20 800 530)" />
            <ellipse cx="260" cy="720" rx="14" ry="7" transform="rotate(-10 260 720)" />
            <ellipse cx="780" cy="720" rx="14" ry="7" transform="rotate(10 780 720)" />
          </g>
        </svg>

        <div className="container-narrow relative">
          <div className="max-w-2xl">
            <p className="text-xs font-semibold uppercase tracking-[0.24em] text-[color:var(--moss)]">Equipe</p>
            <h2 className="mt-2 font-display text-3xl md:text-4xl font-bold text-[color:var(--forest)]">
              Uma árvore de saberes e histórias
            </h2>
            <p className="mt-3 text-muted-foreground">
              Cada pessoa é uma raiz, um galho ou uma folha desta caminhada coletiva pela cultura e pelo meio ambiente.
            </p>
          </div>

          <div className="mt-12 md:mt-16 grid gap-x-8 gap-y-12 sm:grid-cols-2 lg:grid-cols-4">
            {team.map((m) => (
              <article
                key={m.slug}
                className="group relative flex flex-col items-center text-center rounded-[28px] border border-[color:var(--moss)]/20 bg-white p-4 pb-6 shadow-[0_10px_30px_-18px_rgba(20,60,30,0.25)] transition duration-500 hover:-translate-y-1 hover:shadow-[0_18px_40px_-18px_rgba(20,60,30,0.35)]"
              >
                {/* filete verde superior — nervura */}
                <span
                  aria-hidden
                  className="absolute left-6 right-6 top-0 h-[3px] rounded-b-full bg-gradient-to-r from-transparent via-[color:var(--moss)]/60 to-transparent"
                />
                <div className="relative w-full">
                  <div className="aspect-[4/5] w-full overflow-hidden rounded-[22px] bg-[color:var(--leaf)]/40 ring-1 ring-[color:var(--moss)]/15">
                    <img
                      src={m.photo}
                      alt={m.name}
                      className="h-full w-full object-cover transition duration-700 group-hover:scale-105"
                      loading="lazy"
                    />
                  </div>
                  {/* pequena folha decorativa no canto */}
                  <svg
                    aria-hidden
                    viewBox="0 0 40 40"
                    className="absolute -top-2 -right-2 h-8 w-8 text-[color:var(--moss)]/70 rotate-12"
                  >
                    <path
                      d="M4 30 C 8 12 22 4 36 8 C 34 22 22 34 6 34 Z M8 30 C 16 22 24 16 32 12"
                      fill="none"
                      stroke="currentColor"
                      strokeWidth="1.6"
                      strokeLinecap="round"
                      strokeLinejoin="round"
                    />
                  </svg>
                </div>
                <h3 className="mt-5 font-display text-base md:text-lg font-bold text-[color:var(--forest)] leading-tight">
                  {m.name}
                </h3>
                <p className="mt-1 text-[11px] font-semibold uppercase tracking-widest text-[color:var(--moss)]">
                  {m.role}
                </p>
              </article>
            ))}
          </div>
        </div>
      </section>

      {/* CTA final — próximo ao footer */}
      <section className="pb-10 md:pb-14 pt-4">
        <div className="container-narrow">
          <div className="relative overflow-hidden rounded-3xl border bg-[color:var(--leaf)]/30 p-8 md:p-10 text-center">
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
