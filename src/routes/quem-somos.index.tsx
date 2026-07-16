import { createFileRoute, Link } from "@tanstack/react-router";
import { ArrowRight, Compass, Sprout, Target } from "lucide-react";
import { PageHero } from "@/components/layout/PageHero";
import { timeline } from "@/lib/site-data";

export const Route = createFileRoute("/quem-somos/")({
  head: () => ({
    meta: [
      { title: "Quem Somos — Instituto Raízes do Futuro" },
      { name: "description", content: "Trajetória, missão, visão e valores do Instituto." },
      { property: "og:title", content: "Quem Somos — Instituto Raízes do Futuro" },
      { property: "og:description", content: "Uma trajetória cultivada com a comunidade." },
      { property: "og:url", content: "/quem-somos" },
    ],
    links: [{ rel: "canonical", href: "/quem-somos" }],
  }),
  component: QuemSomos,
});

const MVV = [
  {
    key: "missao",
    label: "Missão",
    icon: Target,
    text: "Promover cultura, educação ambiental e participação comunitária para fortalecer territórios mais conscientes, justos e sustentáveis.",
  },
  {
    key: "visao",
    label: "Visão",
    icon: Compass,
    text: "Ser referência na integração entre cultura, conhecimento, cidadania e preservação ambiental, junto com as comunidades atendidas.",
  },
  {
    key: "valores",
    label: "Valores",
    icon: Sprout,
    text: "Respeito à vida, diversidade, participação comunitária, transparência, educação transformadora e valorização dos saberes locais.",
  },
];

function QuemSomos() {
  return (
    <>
      <PageHero
        eyebrow="Quem Somos"
        title="Uma trajetória cultivada com a comunidade"
        description="Somos um Ponto de Cultura dedicado à educação ambiental, à leitura e à valorização dos saberes comunitários."
        image="https://images.unsplash.com/photo-1441974231531-c6227db76b6e?w=2000&q=80&auto=format&fit=crop"
        crumbs={[{ to: "/", label: "Início" }, { to: "/quem-somos", label: "Quem Somos" }, { label: "Institucional" }]}
      />

      <section className="section-y">
        <div className="container-narrow grid gap-10 lg:grid-cols-2 lg:items-center">
          <img
            src="https://images.unsplash.com/photo-1529156069898-49953e39b3ac?w=1200&q=80&auto=format&fit=crop"
            alt="Encontro comunitário"
            className="rounded-2xl h-[440px] w-full object-cover"
            loading="lazy"
          />
          <div>
            <p className="text-xs font-semibold uppercase tracking-[0.2em] text-[color:var(--moss)]">Nossa história</p>
            <h2 className="mt-2 font-display text-3xl md:text-4xl font-bold text-[color:var(--forest)]">
              Nascido da mobilização, cultivado pela comunidade
            </h2>
            <p className="mt-4 text-muted-foreground">
              O Instituto Raízes do Futuro nasceu da mobilização de educadores, agentes culturais, ambientalistas e
              moradores comprometidos com a preservação do território e com o acesso à cultura. Ao longo de sua trajetória,
              consolidou-se como espaço de aprendizagem, participação social e valorização dos saberes locais.
            </p>
          </div>
        </div>
      </section>

      {/* Missão, Visão e Valores — composição editorial orgânica */}
      <section className="section-y bg-[color:var(--paper)] paper-texture relative overflow-hidden">
        <svg
          aria-hidden
          className="pointer-events-none absolute -top-16 -right-24 h-[420px] w-[420px] text-[color:var(--moss)]/10"
          viewBox="0 0 200 200"
        >
          <path
            d="M100 10 C 150 30 180 70 170 120 C 160 170 110 190 60 170 C 20 150 10 100 30 60 C 50 25 80 5 100 10 Z"
            fill="currentColor"
          />
        </svg>
        <div className="container-narrow relative">
          <p className="text-xs font-semibold uppercase tracking-[0.24em] text-[color:var(--moss)]">Fundamentos</p>
          <h2 className="mt-2 font-display text-3xl md:text-4xl font-bold text-[color:var(--forest)]">
            Missão, visão e valores
          </h2>
          <p className="mt-3 max-w-2xl text-muted-foreground">
            Três raízes que sustentam a nossa atuação e orientam cada projeto realizado com as comunidades.
          </p>

          <div className="mt-12 relative">
            {/* linha orgânica conectando os três blocos */}
            <svg
              aria-hidden
              viewBox="0 0 1200 40"
              preserveAspectRatio="none"
              className="hidden md:block absolute top-6 left-0 right-0 h-10 w-full text-[color:var(--moss)]/40"
            >
              <path
                d="M 40 20 C 250 -10 450 40 600 20 C 750 0 950 40 1160 20"
                fill="none"
                stroke="currentColor"
                strokeWidth="1.5"
                strokeDasharray="4 6"
              />
            </svg>

            <div className="grid gap-8 md:grid-cols-3">
              {MVV.map(({ key, label, icon: Icon, text }, i) => (
                <article key={key} className="relative">
                  <div className="relative mx-auto flex h-12 w-12 items-center justify-center rounded-full bg-[color:var(--forest)] text-[color:var(--paper)] shadow-md">
                    <Icon className="h-5 w-5" aria-hidden />
                    <span className="absolute -bottom-1 -right-1 grid h-5 w-5 place-items-center rounded-full bg-[color:var(--ochre)] text-[10px] font-bold text-[color:var(--forest)]">
                      {i + 1}
                    </span>
                  </div>
                  <div className="mt-6 rounded-[28px] border border-[color:var(--moss)]/25 bg-white p-6 md:p-7 shadow-sm">
                    <p className="text-[11px] font-semibold uppercase tracking-[0.24em] text-[color:var(--moss)]">
                      {label}
                    </p>
                    <p className="mt-3 text-sm md:text-base leading-relaxed text-foreground/85">{text}</p>
                  </div>
                </article>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* Linha do tempo — trilha orgânica */}
      <section className="section-y relative overflow-hidden">
        <div className="container-narrow relative">
          <p className="text-xs font-semibold uppercase tracking-[0.24em] text-[color:var(--moss)]">Trajetória</p>
          <h2 className="mt-2 font-display text-3xl md:text-4xl font-bold text-[color:var(--forest)]">
            Nossa linha do tempo
          </h2>
          <p className="mt-3 max-w-2xl text-muted-foreground">
            Marcos que constroem, ano após ano, a história do Instituto e do território.
          </p>

          <div className="mt-14 relative">
            {/* Trilha orgânica vertical */}
            <svg
              aria-hidden
              viewBox="0 0 20 800"
              preserveAspectRatio="none"
              className="absolute left-4 md:left-1/2 top-0 h-full w-6 -translate-x-1/2 text-[color:var(--moss)]/50"
            >
              <path
                d="M 10 0 C 2 100 18 200 10 300 C 2 400 18 500 10 600 C 4 700 14 780 10 800"
                fill="none"
                stroke="currentColor"
                strokeWidth="1.5"
              />
            </svg>

            <ol className="relative space-y-10">
              {timeline.map((t, i) => {
                const left = i % 2 === 0;
                return (
                  <li key={t.year} className="relative md:grid md:grid-cols-2 md:gap-10">
                    {/* Nó/semente */}
                    <span
                      aria-hidden
                      className="absolute left-4 md:left-1/2 top-2 grid h-4 w-4 -translate-x-1/2 place-items-center rounded-full bg-[color:var(--forest)] ring-4 ring-background"
                    >
                      <span className="h-1.5 w-1.5 rounded-full bg-[color:var(--ochre)]" />
                    </span>

                    <div className={`pl-12 md:pl-0 ${left ? "md:pr-10 md:text-right" : "md:col-start-2 md:pl-10"}`}>
                      <p className="font-display text-2xl font-extrabold text-[color:var(--ochre)]">{t.year}</p>
                      <h3 className="mt-1 font-display text-lg font-bold text-[color:var(--forest)]">{t.title}</h3>
                      <p className="mt-2 text-sm text-muted-foreground max-w-md md:inline-block">{t.desc}</p>
                    </div>
                  </li>
                );
              })}
            </ol>
          </div>
        </div>
      </section>

      {/* CTA final */}
      <section className="pb-24">
        <div className="container-narrow">
          <div className="relative overflow-hidden rounded-3xl border bg-[color:var(--leaf)]/30 p-8 md:p-12 text-center">
            <svg
              aria-hidden
              className="pointer-events-none absolute -bottom-10 -right-10 h-56 w-56 text-[color:var(--moss)]/15"
              viewBox="0 0 200 200"
            >
              <path d="M100 10 C 150 30 180 70 170 120 C 160 170 110 190 60 170 C 20 150 10 100 30 60 C 50 25 80 5 100 10 Z" fill="currentColor" />
            </svg>
            <div className="relative">
              <h2 className="font-display text-2xl md:text-3xl font-bold text-[color:var(--forest)]">
                Faça parte dessa trajetória
              </h2>
              <p className="mx-auto mt-3 max-w-2xl text-sm md:text-base text-muted-foreground">
                Conheça nossos projetos, acompanhe nossas ações e aproxime-se de uma iniciativa que cultiva cultura,
                educação ambiental e participação comunitária.
              </p>
              <div className="mt-6 flex flex-wrap justify-center gap-3">
                <Link
                  to="/noticias"
                  className="inline-flex items-center gap-2 rounded-full bg-[color:var(--forest)] px-5 py-2.5 text-sm font-semibold text-[color:var(--paper)] hover:bg-[color:var(--moss)]"
                >
                  Ver projetos <ArrowRight className="h-4 w-4" />
                </Link>
                <Link
                  to="/contato"
                  className="inline-flex items-center gap-2 rounded-full border border-[color:var(--forest)] px-5 py-2.5 text-sm font-semibold text-[color:var(--forest)] hover:bg-white"
                >
                  Entrar em contato
                </Link>
              </div>
            </div>
          </div>
        </div>
      </section>
    </>
  );
}
