import { createFileRoute } from "@tanstack/react-router";
import { useState } from "react";
import { PageHero } from "@/components/layout/PageHero";
import { team, conselho } from "@/lib/site-data";
import { X } from "lucide-react";

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
  const [active, setActive] = useState<null | typeof team[number]>(null);
  return (
    <>
      <PageHero
        eyebrow="Nossa Equipe"
        title="Pessoas que transformam propósito em ação"
        description="Nossa equipe reúne profissionais, educadores, agentes culturais, pesquisadores, voluntários e lideranças comprometidos com a cultura e o meio ambiente."
        image="https://images.unsplash.com/photo-1529156069898-49953e39b3ac?w=2000&q=80&auto=format&fit=crop"
        crumbs={[{ to: "/", label: "Início" }, { to: "/quem-somos", label: "Quem Somos" }, { label: "Nossa Equipe" }]}
      />
      <section className="section-y">
        <div className="container-narrow">
          <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-4">
            {team.map((m) => (
              <article key={m.slug} className="group overflow-hidden rounded-2xl border bg-card shadow-sm transition hover:-translate-y-0.5 hover:shadow-md">
                <div className="aspect-[4/5] overflow-hidden bg-[color:var(--leaf)]/50">
                  <img src={m.photo} alt={m.name} className="h-full w-full object-cover transition group-hover:scale-105" loading="lazy" />
                </div>
                <div className="p-5">
                  <p className="text-xs font-semibold uppercase tracking-widest text-[color:var(--moss)]">{m.role}</p>
                  <h3 className="mt-1.5 font-display text-lg font-bold text-[color:var(--forest)]">{m.name}</h3>
                  <p className="mt-2 text-sm text-muted-foreground line-clamp-3">{m.bio}</p>
                  <button type="button" onClick={() => setActive(m)} className="mt-4 inline-flex text-sm font-semibold text-[color:var(--forest)] hover:underline">Conheça</button>
                </div>
              </article>
            ))}
          </div>
        </div>
      </section>

      <section className="section-y bg-[color:var(--paper)]">
        <div className="container-narrow">
          <p className="text-xs font-semibold uppercase tracking-[0.2em] text-[color:var(--moss)]">Governança</p>
          <h2 className="mt-2 font-display text-3xl md:text-4xl font-bold text-[color:var(--forest)]">Conselho e governança</h2>
          <ul className="mt-8 divide-y rounded-2xl border bg-card">
            {conselho.map((c) => (
              <li key={c.name} className="flex flex-wrap items-center justify-between gap-2 p-4">
                <span className="font-semibold text-[color:var(--forest)]">{c.name}</span>
                <span className="text-sm text-muted-foreground">{c.role}</span>
              </li>
            ))}
          </ul>
        </div>
      </section>

      {active && (
        <div role="dialog" aria-modal="true" aria-label={`Biografia de ${active.name}`} className="fixed inset-0 z-50 grid place-items-center p-4">
          <button type="button" aria-label="Fechar" onClick={() => setActive(null)} className="absolute inset-0 bg-black/50" />
          <div className="relative z-10 w-full max-w-lg rounded-2xl bg-background shadow-xl overflow-hidden">
            <button type="button" onClick={() => setActive(null)} aria-label="Fechar" className="absolute top-3 right-3 rounded-full bg-background/90 p-2 border">
              <X className="h-4 w-4" />
            </button>
            <img src={active.photo} alt={active.name} className="h-64 w-full object-cover" />
            <div className="p-6">
              <p className="text-xs font-semibold uppercase tracking-widest text-[color:var(--moss)]">{active.role}</p>
              <h3 className="mt-1 font-display text-2xl font-bold text-[color:var(--forest)]">{active.name}</h3>
              <p className="mt-3 text-sm text-muted-foreground">{active.bio}</p>
            </div>
          </div>
        </div>
      )}
    </>
  );
}
