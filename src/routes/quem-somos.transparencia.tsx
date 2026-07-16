import { createFileRoute } from "@tanstack/react-router";
import { useMemo, useState } from "react";
import { PageHero } from "@/components/layout/PageHero";
import { documents, site } from "@/lib/site-data";
import { FileText, Search, Download, Eye } from "lucide-react";

export const Route = createFileRoute("/quem-somos/transparencia")({
  head: () => ({
    meta: [
      { title: "Transparência — Instituto Raízes do Futuro" },
      { name: "description", content: "Documentos, relatórios, certificados e políticas institucionais." },
      { property: "og:title", content: "Transparência" },
      { property: "og:description", content: "Documentos e informações da instituição." },
      { property: "og:url", content: "/quem-somos/transparencia" },
    ],
    links: [{ rel: "canonical", href: "/quem-somos/transparencia" }],
  }),
  component: Transparencia,
});

const categories = Array.from(new Set(documents.map((d) => d.category)));
const years = Array.from(new Set(documents.map((d) => d.year))).sort((a, b) => b.localeCompare(a));

function Transparencia() {
  const [q, setQ] = useState("");
  const [cat, setCat] = useState("");
  const [year, setYear] = useState("");

  const filtered = useMemo(() => {
    return documents.filter((d) =>
      (!q || d.name.toLowerCase().includes(q.toLowerCase())) &&
      (!cat || d.category === cat) &&
      (!year || d.year === year),
    );
  }, [q, cat, year]);

  return (
    <>
      <PageHero
        eyebrow="Transparência"
        title="Transparência e responsabilidade institucional"
        description="Acesse documentos, relatórios, certificados, políticas e informações que demonstram nosso compromisso com a gestão responsável e com a confiança da comunidade."
        image="https://images.unsplash.com/photo-1524178232363-1fb2b075b655?w=2000&q=80&auto=format&fit=crop"
        crumbs={[{ to: "/", label: "Início" }, { to: "/quem-somos", label: "Quem Somos" }, { label: "Transparência" }]}
      />

      <section className="section-y">
        <div className="container-narrow">
          <div className="grid gap-3 md:grid-cols-[1fr_auto_auto_auto] items-end">
            <label className="block">
              <span className="text-xs font-semibold uppercase tracking-widest text-muted-foreground">Buscar</span>
              <div className="mt-1 relative">
                <Search className="absolute left-3 top-1/2 -translate-y-1/2 h-4 w-4 text-muted-foreground" />
                <input value={q} onChange={(e) => setQ(e.target.value)} placeholder="Nome do documento..." className="w-full rounded-md border bg-background pl-9 pr-3 py-2.5 text-sm" />
              </div>
            </label>
            <label className="block">
              <span className="text-xs font-semibold uppercase tracking-widest text-muted-foreground">Categoria</span>
              <select value={cat} onChange={(e) => setCat(e.target.value)} className="mt-1 w-full rounded-md border bg-background px-3 py-2.5 text-sm">
                <option value="">Todas</option>
                {categories.map((c) => <option key={c}>{c}</option>)}
              </select>
            </label>
            <label className="block">
              <span className="text-xs font-semibold uppercase tracking-widest text-muted-foreground">Ano</span>
              <select value={year} onChange={(e) => setYear(e.target.value)} className="mt-1 w-full rounded-md border bg-background px-3 py-2.5 text-sm">
                <option value="">Todos</option>
                {years.map((y) => <option key={y}>{y}</option>)}
              </select>
            </label>
            <span className="text-xs text-muted-foreground">{filtered.length} documento(s)</span>
          </div>

          <div className="mt-6 divide-y rounded-2xl border bg-card">
            {filtered.length === 0 && (
              <p className="p-8 text-center text-sm text-muted-foreground">Nenhum documento encontrado.</p>
            )}
            {filtered.map((d) => (
              <article key={d.name} className="grid grid-cols-[auto_1fr_auto] items-center gap-4 p-4">
                <span className="grid h-11 w-11 place-items-center rounded-lg bg-[color:var(--leaf)] text-[color:var(--forest)]"><FileText className="h-5 w-5" /></span>
                <div className="min-w-0">
                  <p className="truncate font-semibold text-[color:var(--forest)]">{d.name}</p>
                  <p className="text-xs text-muted-foreground">{d.category} · {d.year} · {d.type} · {d.size}</p>
                </div>
                <div className="flex gap-2">
                  <a href="#" className="inline-flex items-center gap-1 rounded-full border px-3 py-1.5 text-xs font-semibold hover:bg-secondary"><Eye className="h-3.5 w-3.5" /> Visualizar</a>
                  <a href="#" className="inline-flex items-center gap-1 rounded-full bg-[color:var(--forest)] px-3 py-1.5 text-xs font-semibold text-[color:var(--paper)] hover:bg-[color:var(--moss)]"><Download className="h-3.5 w-3.5" /> Baixar</a>
                </div>
              </article>
            ))}
          </div>
        </div>
      </section>

      <section className="section-y bg-[color:var(--paper)]">
        <div className="container-narrow grid gap-8 lg:grid-cols-2">
          <div>
            <p className="text-xs font-semibold uppercase tracking-[0.2em] text-[color:var(--moss)]">Dados institucionais</p>
            <h2 className="mt-2 font-display text-2xl font-bold text-[color:var(--forest)]">Informações da instituição</h2>
            <dl className="mt-5 grid grid-cols-1 sm:grid-cols-2 gap-y-4 text-sm">
              {[
                ["Razão social", site.name],
                ["Nome fantasia", "Raízes do Futuro"],
                ["CNPJ", site.cnpj],
                ["Endereço", site.address],
                ["Representante legal", "Ana Beatriz Coutinho"],
                ["Ano de fundação", "2010"],
                ["Certificações", "Ponto de Cultura"],
                ["E-mail institucional", site.email],
              ].map(([k, v]) => (
                <div key={k}>
                  <dt className="text-xs font-semibold uppercase tracking-widest text-muted-foreground">{k}</dt>
                  <dd className="mt-0.5 text-[color:var(--forest)]">{v}</dd>
                </div>
              ))}
            </dl>
          </div>
          <div>
            <p className="text-xs font-semibold uppercase tracking-[0.2em] text-[color:var(--moss)]">Políticas</p>
            <h2 className="mt-2 font-display text-2xl font-bold text-[color:var(--forest)]">Documentos de referência</h2>
            <ul className="mt-5 space-y-2">
              {[
                ["Política de Privacidade", "/politica-de-privacidade"],
                ["Política de Cookies", "/politica-de-cookies"],
                ["Código de Conduta", "#"],
                ["Política de Proteção de Crianças e Adolescentes", "#"],
                ["Política Ambiental", "#"],
                ["Política de Acessibilidade", "#"],
              ].map(([k, v]) => (
                <li key={k}><a href={v as string} className="text-sm text-[color:var(--forest)] underline hover:text-[color:var(--moss)]">{k}</a></li>
              ))}
            </ul>
          </div>
        </div>
      </section>
    </>
  );
}
