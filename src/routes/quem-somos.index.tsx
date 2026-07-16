import { createFileRoute, Link } from "@tanstack/react-router";
import { ArrowRight, Award, CheckCircle2, MapPin, TreePine } from "lucide-react";
import { PageHero } from "@/components/layout/PageHero";
import { timeline } from "@/lib/site-data";

export const Route = createFileRoute("/quem-somos/")({
  head: () => ({
    meta: [
      { title: "Quem Somos — Instituto Raízes do Futuro" },
      { name: "description", content: "Trajetória, missão, valores e território de atuação do Instituto." },
      { property: "og:title", content: "Quem Somos — Instituto Raízes do Futuro" },
      { property: "og:description", content: "Uma trajetória cultivada com a comunidade." },
      { property: "og:url", content: "/quem-somos" },
    ],
    links: [{ rel: "canonical", href: "/quem-somos" }],
  }),
  component: QuemSomos,
});

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
          <img src="https://images.unsplash.com/photo-1529156069898-49953e39b3ac?w=1200&q=80&auto=format&fit=crop" alt="Encontro comunitário" className="rounded-2xl h-[440px] w-full object-cover" loading="lazy" />
          <div>
            <p className="text-xs font-semibold uppercase tracking-[0.2em] text-[color:var(--moss)]">Nossa história</p>
            <h2 className="mt-2 font-display text-3xl md:text-4xl font-bold text-[color:var(--forest)]">Nascido da mobilização, cultivado pela comunidade</h2>
            <p className="mt-4 text-muted-foreground">
              O Instituto Raízes do Futuro nasceu da mobilização de educadores, agentes culturais, ambientalistas e moradores comprometidos com a preservação do território e com o acesso à cultura. Ao longo de sua trajetória, consolidou-se como espaço de aprendizagem, participação social e valorização dos saberes locais.
            </p>
          </div>
        </div>
      </section>

      {/* Linha do tempo */}
      <section className="section-y bg-[color:var(--paper)]">
        <div className="container-narrow">
          <p className="text-xs font-semibold uppercase tracking-[0.2em] text-[color:var(--moss)]">Trajetória</p>
          <h2 className="mt-2 font-display text-3xl md:text-4xl font-bold text-[color:var(--forest)]">Linha do tempo</h2>
          <ol className="mt-10 relative border-l-2 border-[color:var(--moss)]/40 pl-6 space-y-8">
            {timeline.map((t) => (
              <li key={t.year} className="relative">
                <span className="absolute -left-[34px] top-1 grid h-6 w-6 place-items-center rounded-full bg-[color:var(--forest)] text-[color:var(--paper)]">
                  <TreePine className="h-3 w-3" aria-hidden />
                </span>
                <p className="font-display text-lg font-bold text-[color:var(--forest)]">{t.year} — {t.title}</p>
                <p className="text-sm text-muted-foreground mt-1">{t.desc}</p>
              </li>
            ))}
          </ol>
        </div>
      </section>

      {/* Missão / Visão — molduras finas com aba */}
      <section className="section-y">
        <div className="container-narrow grid gap-8 md:grid-cols-2">
          {[
            {
              t: "Missão",
              d: "Promover cultura, educação ambiental e participação comunitária para fortalecer territórios mais conscientes, justos e sustentáveis.",
            },
            {
              t: "Visão",
              d: "Ser referência na integração entre cultura, conhecimento, cidadania e preservação ambiental, junto com as comunidades atendidas.",
            },
          ].map((b) => (
            <div key={b.t} className="relative rounded-2xl border-2 border-[color:var(--moss)]/40 bg-transparent p-8 pt-10">
              <span className="absolute -top-3.5 left-6 inline-flex items-center rounded-full bg-[color:var(--forest)] px-4 py-1 text-xs font-bold uppercase tracking-[0.2em] text-[color:var(--paper)]">
                {b.t}
              </span>
              <p className="text-sm md:text-base leading-relaxed text-foreground/85">{b.d}</p>
            </div>
          ))}
        </div>
      </section>

      {/* Valores — duas colunas com ícones ambientais */}
      <section className="section-y bg-[color:var(--paper)] paper-texture">
        <div className="container-narrow">
          <p className="text-xs font-semibold uppercase tracking-[0.24em] text-[color:var(--moss)]">Nossos valores</p>
          <h2 className="mt-2 font-display text-3xl md:text-4xl font-bold text-[color:var(--forest)]">
            Princípios que orientam a nossa atuação
          </h2>
          <ul className="mt-8 grid gap-4 md:grid-cols-2">
            {[
              "Respeito à vida e à biodiversidade",
              "Responsabilidade socioambiental",
              "Diversidade e inclusão",
              "Participação comunitária",
              "Transparência e ética",
              "Educação transformadora",
              "Valorização dos saberes locais",
              "Cuidado com o território",
            ].map((v) => (
              <li key={v} className="flex items-start gap-3 rounded-xl border bg-white p-4">
                <CheckCircle2 className="h-5 w-5 mt-0.5 text-[color:var(--moss)] shrink-0" aria-hidden />
                <span className="text-sm text-foreground/90">{v}</span>
              </li>
            ))}
          </ul>
        </div>
      </section>


      {/* Território */}
      <section className="section-y bg-[color:var(--leaf)]/40">
        <div className="container-narrow grid gap-10 lg:grid-cols-2 lg:items-center">
          <div>
            <p className="text-xs font-semibold uppercase tracking-[0.2em] text-[color:var(--moss)]">Território</p>
            <h2 className="mt-2 font-display text-3xl md:text-4xl font-bold text-[color:var(--forest)]">Onde estamos presentes</h2>
            <p className="mt-3 text-muted-foreground">Atuamos em 20 comunidades, entre áreas urbanas e rurais, em parceria com escolas, universidades e coletivos.</p>
            <ul className="mt-5 grid grid-cols-2 gap-2 text-sm">
              {["Comunidade Vale Verde", "Vila do Rio", "Sítio das Sementes", "Bairro Pedra Alta", "Escola Aroeira", "Escola Ipê"].map((c) => (
                <li key={c} className="flex items-center gap-2"><MapPin className="h-4 w-4 text-[color:var(--moss)]" /> {c}</li>
              ))}
            </ul>
          </div>
          <div className="rounded-2xl overflow-hidden border bg-card aspect-[4/3]">
            <img src="https://images.unsplash.com/photo-1524661135-423995f22d0b?w=1200&q=80&auto=format&fit=crop" alt="Mapa ilustrativo do território de atuação" className="h-full w-full object-cover" loading="lazy" />
          </div>
        </div>
      </section>

      {/* Reconhecimentos */}
      <section className="section-y">
        <div className="container-narrow">
          <p className="text-xs font-semibold uppercase tracking-[0.2em] text-[color:var(--moss)]">Reconhecimentos</p>
          <h2 className="mt-2 font-display text-3xl md:text-4xl font-bold text-[color:var(--forest)]">Prêmios, selos e certificações</h2>
          <div className="mt-8 grid gap-5 sm:grid-cols-2 lg:grid-cols-4">
            {["Certificação Ponto de Cultura", "Selo Educação Ambiental", "Prêmio Território Vivo 2023", "Rede Nacional de Bibliotecas"].map((r) => (
              <div key={r} className="rounded-2xl border bg-card p-5">
                <Award className="h-6 w-6 text-[color:var(--ochre)]" />
                <p className="mt-3 font-semibold text-[color:var(--forest)]">{r}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section className="section-y">
        <div className="container-narrow text-center">
          <Link to="/quem-somos/equipe" className="inline-flex items-center gap-2 rounded-full bg-[color:var(--forest)] px-6 py-3 text-sm font-semibold text-[color:var(--paper)] hover:bg-[color:var(--moss)]">
            Conheça nossa equipe <ArrowRight className="h-4 w-4" />
          </Link>
        </div>
      </section>
    </>
  );
}
