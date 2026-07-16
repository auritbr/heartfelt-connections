import { createFileRoute, Link } from "@tanstack/react-router";
import { useMemo, useState } from "react";
import { PageHero } from "@/components/layout/PageHero";
import { albums } from "@/lib/site-data";
import { Calendar, MapPin, ArrowRight } from "lucide-react";

export const Route = createFileRoute("/galeria/")({
  head: () => ({
    meta: [
      { title: "Galeria de Fotos — Instituto Raízes do Futuro" },
      { name: "description", content: "Registros das ações, encontros e projetos organizados por ano." },
      { property: "og:title", content: "Galeria de Fotos" },
      { property: "og:description", content: "Imagens que registram nossas ações." },
      { property: "og:url", content: "/galeria" },
    ],
    links: [{ rel: "canonical", href: "/galeria" }],
  }),
  component: GaleriaIndex,
});

function GaleriaIndex() {
  const years = useMemo(() => Array.from(new Set(albums.map((a) => a.year))).sort((a, b) => b.localeCompare(a)), []);
  const projects = useMemo(() => Array.from(new Set(albums.map((a) => a.project))), []);
  const activities = useMemo(() => Array.from(new Set(albums.map((a) => a.activity))), []);

  const [year, setYear] = useState("");
  const [project, setProject] = useState("");
  const [activity, setActivity] = useState("");

  const filtered = albums.filter((a) =>
    (!year || a.year === year) && (!project || a.project === project) && (!activity || a.activity === activity),
  );
  const byYear = years.map((y) => ({ year: y, items: filtered.filter((a) => a.year === y) })).filter((g) => g.items.length > 0);

  return (
    <>
      <PageHero
        eyebrow="Galeria"
        title="Galeria de Fotos"
        description="Imagens que registram nossas ações, encontros, projetos e a relação construída com cada território."
        image="https://images.unsplash.com/photo-1523240795612-9a054b0db644?w=2000&q=80&auto=format&fit=crop"
        crumbs={[{ to: "/", label: "Início" }, { label: "Galeria" }]}
      />

      <section className="section-y">
        <div className="container-narrow">
          <div className="grid gap-3 md:grid-cols-4">
            <label>
              <span className="text-xs font-semibold uppercase tracking-widest text-muted-foreground">Ano</span>
              <select value={year} onChange={(e) => setYear(e.target.value)} className="mt-1 w-full rounded-md border bg-background px-3 py-2.5 text-sm">
                <option value="">Todos</option>{years.map((y) => <option key={y}>{y}</option>)}
              </select>
            </label>
            <label>
              <span className="text-xs font-semibold uppercase tracking-widest text-muted-foreground">Projeto</span>
              <select value={project} onChange={(e) => setProject(e.target.value)} className="mt-1 w-full rounded-md border bg-background px-3 py-2.5 text-sm">
                <option value="">Todos</option>{projects.map((p) => <option key={p}>{p}</option>)}
              </select>
            </label>
            <label>
              <span className="text-xs font-semibold uppercase tracking-widest text-muted-foreground">Tipo de atividade</span>
              <select value={activity} onChange={(e) => setActivity(e.target.value)} className="mt-1 w-full rounded-md border bg-background px-3 py-2.5 text-sm">
                <option value="">Todos</option>{activities.map((a) => <option key={a}>{a}</option>)}
              </select>
            </label>
            <div className="flex items-end">
              <button type="button" onClick={() => { setYear(""); setProject(""); setActivity(""); }} className="rounded-md border px-4 py-2.5 text-sm hover:bg-secondary">Limpar filtros</button>
            </div>
          </div>

          <div className="mt-10 space-y-14">
            {byYear.length === 0 && <p className="text-center text-muted-foreground">Nenhum álbum encontrado.</p>}
            {byYear.map((g) => (
              <div key={g.year}>
                <div className="flex items-baseline gap-3 border-b pb-3">
                  <h2 className="font-display text-3xl font-bold text-[color:var(--forest)]">Galeria {g.year}</h2>
                  <span className="text-sm text-muted-foreground">{g.items.length} álbum(ns)</span>
                </div>
                <div className="mt-6 grid gap-6 md:grid-cols-2 lg:grid-cols-3">
                  {g.items.map((a) => (
                    <Link key={a.slug} to="/galeria/$ano/$slug" params={{ ano: a.year, slug: a.slug }} className="group overflow-hidden rounded-2xl border bg-card shadow-sm hover:shadow-md transition">
                      <div className="aspect-[4/3] overflow-hidden">
                        <img src={a.cover} alt={a.title} className="h-full w-full object-cover transition group-hover:scale-105" loading="lazy" />
                      </div>
                      <div className="p-5">
                        <p className="text-xs text-muted-foreground flex items-center gap-3">
                          <span className="inline-flex items-center gap-1"><Calendar className="h-3.5 w-3.5" /> {a.date}</span>
                          <span className="inline-flex items-center gap-1"><MapPin className="h-3.5 w-3.5" /> {a.place}</span>
                        </p>
                        <h3 className="mt-2 font-display text-lg font-bold text-[color:var(--forest)]">{a.title}</h3>
                        <p className="mt-1 text-sm text-muted-foreground">{a.photos.length} fotos</p>
                        <span className="mt-3 inline-flex items-center gap-1 text-sm font-semibold text-[color:var(--moss)]">Ver álbum <ArrowRight className="h-3.5 w-3.5" /></span>
                      </div>
                    </Link>
                  ))}
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>
    </>
  );
}
