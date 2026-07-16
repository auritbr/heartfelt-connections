import { createFileRoute, Link } from "@tanstack/react-router";
import { useMemo, useState } from "react";
import { documents, site, transparencyCategories, type TransparencyDoc } from "@/lib/site-data";
import {
  Archive,
  Award,
  ChevronDown,
  ChevronRight,
  Download,
  Eye,
  FileArchive,
  FileText,
  Files,
  Gavel,
  Handshake,
  Landmark,
  Newspaper,
  Search,
  Shield,
  Sprout,
  Wallet,
  X,
} from "lucide-react";

export const Route = createFileRoute("/quem-somos/transparencia")({
  head: () => ({
    meta: [
      { title: "Transparência — Instituto Raízes do Futuro" },
      { name: "description", content: "Acervo institucional: documentos, relatórios, certificados e políticas." },
      { property: "og:title", content: "Transparência — Acervo institucional" },
      { property: "og:description", content: "Documentos e informações da instituição para consulta pública." },
      { property: "og:url", content: "/quem-somos/transparencia" },
    ],
    links: [{ rel: "canonical", href: "/quem-somos/transparencia" }],
  }),
  component: Transparencia,
});

const CAT_ICON: Record<(typeof transparencyCategories)[number], typeof FileText> = {
  "Documentos oficiais e institucionais": Landmark,
  "Portfólios e prestação de contas": Files,
  "Certificados e reconhecimentos": Award,
  "Relatórios de atividades": Newspaper,
  "Relatórios financeiros": Wallet,
  "Estatuto e regimentos": Gavel,
  "Editais, termos e parcerias": Handshake,
  "Políticas institucionais": Shield,
  "Atas e governança": FileArchive,
  "Publicações e materiais técnicos": Sprout,
};

const allYears = Array.from(new Set(documents.map((d) => d.year))).sort((a, b) => b.localeCompare(a));

function Transparencia() {
  const [q, setQ] = useState("");
  const [cat, setCat] = useState("Todas");
  const [year, setYear] = useState("Todos");
  const [openCat, setOpenCat] = useState<string | null>(null);

  const filtered = useMemo(() => {
    const term = q.trim().toLowerCase();
    return documents.filter((d) => {
      if (cat !== "Todas" && d.category !== cat) return false;
      if (year !== "Todos" && d.year !== year) return false;
      if (!term) return true;
      return d.name.toLowerCase().includes(term) || d.category.toLowerCase().includes(term);
    });
  }, [q, cat, year]);

  const hasFilters = q.trim() !== "" || cat !== "Todas" || year !== "Todos";
  const clear = () => {
    setQ("");
    setCat("Todas");
    setYear("Todos");
  };

  const byCategory = useMemo(() => {
    const map = new Map<string, TransparencyDoc[]>();
    transparencyCategories.forEach((c) => map.set(c, []));
    filtered.forEach((d) => map.get(d.category)?.push(d));
    return map;
  }, [filtered]);

  return (
    <div className="bg-[color:var(--paper)] paper-texture">
      {/* Cabeçalho institucional */}
      <section className="relative overflow-hidden pt-32 md:pt-40 pb-16 md:pb-20">
        {/* Detalhe topográfico discreto */}
        <svg
          aria-hidden
          className="pointer-events-none absolute inset-0 h-full w-full text-[color:var(--moss)]/10"
          viewBox="0 0 800 400"
          preserveAspectRatio="none"
        >
          <g fill="none" stroke="currentColor" strokeWidth="0.6">
            {Array.from({ length: 8 }).map((_, i) => (
              <path
                key={i}
                d={`M 0 ${80 + i * 40} C 200 ${60 + i * 40} 400 ${100 + i * 40} 600 ${70 + i * 40} S 800 ${90 + i * 40} 800 ${90 + i * 40}`}
              />
            ))}
          </g>
        </svg>
        <div className="container-narrow relative">
          <nav aria-label="Breadcrumb" className="text-xs text-muted-foreground">
            <ol className="flex flex-wrap items-center gap-1">
              <li>
                <Link to="/" className="hover:underline">
                  Início
                </Link>
              </li>
              <ChevronRight className="h-3 w-3 opacity-70" />
              <li>
                <Link to="/quem-somos" className="hover:underline">
                  Quem Somos
                </Link>
              </li>
              <ChevronRight className="h-3 w-3 opacity-70" />
              <li aria-current="page">Transparência</li>
            </ol>
          </nav>

          <div className="mt-10 text-center max-w-3xl mx-auto">
            <span className="inline-flex items-center gap-2 rounded-full border border-[color:var(--moss)]/30 bg-white px-4 py-1.5 text-[11px] font-semibold uppercase tracking-[0.24em] text-[color:var(--moss)]">
              <Archive className="h-3.5 w-3.5" /> Transparência
            </span>
            <h1 className="mt-6 font-display text-4xl md:text-5xl font-extrabold text-[color:var(--forest)]">
              Acervo institucional
            </h1>
            <p className="mt-4 text-base md:text-lg text-muted-foreground">
              Acesse documentos, certificados, reconhecimentos, portfólios, relatórios e registros institucionais,
              organizados por categoria para facilitar a consulta pública.
            </p>
          </div>
        </div>
      </section>

      {/* Busca e filtros */}
      <section className="pb-8">
        <div className="container-narrow">
          <div className="rounded-3xl border bg-white p-4 md:p-6 shadow-sm">
            <div className="grid gap-3 md:grid-cols-[1fr_auto_auto_auto] md:items-end">
              <label className="block">
                <span className="text-xs font-semibold uppercase tracking-widest text-muted-foreground">Buscar</span>
                <div className="relative mt-1">
                  <Search className="pointer-events-none absolute left-3 top-1/2 -translate-y-1/2 h-4 w-4 text-muted-foreground" />
                  <input
                    value={q}
                    onChange={(e) => setQ(e.target.value)}
                    placeholder="Buscar documento por nome ou palavra-chave"
                    className="w-full rounded-full border bg-background pl-9 pr-3 py-2.5 text-sm focus:outline-none focus:ring-2 focus:ring-[color:var(--moss)]/30"
                  />
                </div>
              </label>
              <label className="block">
                <span className="text-xs font-semibold uppercase tracking-widest text-muted-foreground">Categoria</span>
                <select
                  value={cat}
                  onChange={(e) => setCat(e.target.value)}
                  className="mt-1 w-full rounded-full border bg-background px-3 py-2.5 text-sm"
                >
                  <option value="Todas">Todas</option>
                  {transparencyCategories.map((c) => (
                    <option key={c}>{c}</option>
                  ))}
                </select>
              </label>
              <label className="block">
                <span className="text-xs font-semibold uppercase tracking-widest text-muted-foreground">Ano</span>
                <select
                  value={year}
                  onChange={(e) => setYear(e.target.value)}
                  className="mt-1 w-full rounded-full border bg-background px-3 py-2.5 text-sm"
                >
                  <option value="Todos">Todos</option>
                  {allYears.map((y) => (
                    <option key={y}>{y}</option>
                  ))}
                </select>
              </label>
              <button
                type="button"
                onClick={clear}
                disabled={!hasFilters}
                className="inline-flex items-center justify-center gap-1 rounded-full border px-4 py-2.5 text-sm font-semibold text-[color:var(--moss)] hover:bg-[color:var(--leaf)]/40 disabled:opacity-40 disabled:cursor-not-allowed"
              >
                <X className="h-3.5 w-3.5" /> Limpar filtros
              </button>
            </div>
            <p className="mt-3 text-xs text-muted-foreground" aria-live="polite">
              {filtered.length} documento(s) encontrado(s)
            </p>
          </div>
        </div>
      </section>

      {/* Accordions */}
      <section className="pb-16 md:pb-24">
        <div className="container-narrow space-y-4">
          {transparencyCategories.map((c) => {
            const docs = byCategory.get(c) ?? [];
            const isOpen = openCat === c;
            const Icon = CAT_ICON[c];
            const panelId = `panel-${c.replace(/\s+/g, "-").toLowerCase()}`;
            const btnId = `btn-${c.replace(/\s+/g, "-").toLowerCase()}`;
            return (
              <article
                key={c}
                className={`overflow-hidden rounded-3xl border bg-white shadow-sm transition ${
                  isOpen ? "border-[color:var(--moss)]/40" : "border-border"
                }`}
              >
                <button
                  id={btnId}
                  type="button"
                  aria-expanded={isOpen}
                  aria-controls={panelId}
                  onClick={() => setOpenCat(isOpen ? null : c)}
                  className="flex w-full items-center gap-4 p-5 md:p-6 text-left hover:bg-[color:var(--paper)] focus-visible:outline focus-visible:outline-2 focus-visible:outline-[color:var(--moss)]"
                >
                  <span className="grid h-12 w-12 shrink-0 place-items-center rounded-full bg-[color:var(--leaf)]/50 text-[color:var(--forest)]">
                    <Icon className="h-5 w-5" aria-hidden />
                  </span>
                  <div className="min-w-0 flex-1">
                    <h2 className="truncate font-display text-lg md:text-xl font-bold text-[color:var(--forest)]">{c}</h2>
                    <p className="mt-0.5 text-xs md:text-sm text-muted-foreground">
                      {docs.length} {docs.length === 1 ? "documento" : "documentos"}
                    </p>
                  </div>
                  <ChevronDown
                    className={`h-5 w-5 shrink-0 text-[color:var(--forest)] transition-transform ${
                      isOpen ? "rotate-180" : ""
                    }`}
                    aria-hidden
                  />
                </button>

                {isOpen && (
                  <div id={panelId} role="region" aria-labelledby={btnId} className="border-t bg-[color:var(--paper)]/50">
                    {docs.length === 0 ? (
                      <p className="p-6 text-sm text-muted-foreground">
                        Nenhum documento nesta categoria com os filtros atuais.
                      </p>
                    ) : (
                      <>
                        {/* Destaque relatório anual */}
                        {c === "Relatórios de atividades" &&
                          docs.some((d) => d.featured) &&
                          (() => {
                            const feat = docs.find((d) => d.featured)!;
                            return (
                              <div className="grid gap-6 border-b bg-white p-6 md:p-8 md:grid-cols-[1.2fr_1fr] md:items-center">
                                <div>
                                  <p className="text-xs font-semibold uppercase tracking-[0.2em] text-[color:var(--moss)]">
                                    Publicação em destaque
                                  </p>
                                  <h3 className="mt-2 font-display text-2xl md:text-3xl font-bold text-[color:var(--forest)]">
                                    {feat.name}
                                  </h3>
                                  <p className="mt-3 text-sm text-muted-foreground">
                                    A divulgação dos relatórios de atividades reafirma nosso compromisso com a
                                    transparência das ações, a participação da comunidade e a responsabilidade na gestão
                                    dos projetos socioambientais.
                                  </p>
                                  <div className="mt-5 flex flex-wrap gap-2">
                                    <a
                                      href={feat.url}
                                      target="_blank"
                                      rel="noreferrer"
                                      className="inline-flex items-center gap-2 rounded-full bg-[color:var(--forest)] px-4 py-2 text-sm font-semibold text-[color:var(--paper)] hover:bg-[color:var(--moss)]"
                                    >
                                      <Eye className="h-4 w-4" /> Visualizar relatório
                                    </a>
                                    <a
                                      href={feat.url}
                                      download
                                      className="inline-flex items-center gap-2 rounded-full border px-4 py-2 text-sm font-semibold text-[color:var(--forest)] hover:bg-secondary"
                                    >
                                      <Download className="h-4 w-4" /> Baixar PDF
                                    </a>
                                  </div>
                                </div>
                                <div className="mx-auto max-w-[260px]">
                                  <div className="rounded-lg border-2 border-[color:var(--moss)]/50 bg-white p-2 shadow-md">
                                    <div className="aspect-[3/4] overflow-hidden rounded">
                                      {feat.cover ? (
                                        <img
                                          src={feat.cover}
                                          alt={`Capa — ${feat.name}`}
                                          className="h-full w-full object-cover"
                                          loading="lazy"
                                        />
                                      ) : (
                                        <div className="grid h-full place-items-center bg-[color:var(--paper)] text-[color:var(--moss)]">
                                          <FileText className="h-12 w-12" aria-hidden />
                                        </div>
                                      )}
                                    </div>
                                  </div>
                                  <p className="mt-2 text-center text-xs text-muted-foreground">
                                    Publicação institucional · {feat.year}
                                  </p>
                                </div>
                              </div>
                            );
                          })()}

                        <ul className="divide-y">
                          {docs
                            .filter((d) => !(c === "Relatórios de atividades" && d.featured))
                            .map((d) => (
                              <li key={d.name} className="grid gap-3 p-5 md:grid-cols-[auto_1fr_auto] md:items-center">
                                <span className="grid h-11 w-11 place-items-center rounded-lg bg-[color:var(--leaf)]/50 text-[color:var(--forest)]">
                                  <FileText className="h-5 w-5" aria-hidden />
                                </span>
                                <div className="min-w-0">
                                  <p className="font-semibold text-[color:var(--forest)]">{d.name}</p>
                                  <p className="mt-0.5 text-xs text-muted-foreground">
                                    {d.type} · {d.size} · {d.year}
                                    {d.publishedAt && ` · Publicado em ${new Date(d.publishedAt).toLocaleDateString("pt-BR")}`}
                                  </p>
                                </div>
                                <div className="flex flex-wrap gap-2">
                                  <a
                                    href={d.url}
                                    target="_blank"
                                    rel="noreferrer"
                                    className="inline-flex items-center gap-1 rounded-full border px-3 py-1.5 text-xs font-semibold text-[color:var(--forest)] hover:bg-secondary"
                                  >
                                    <Eye className="h-3.5 w-3.5" /> Visualizar
                                  </a>
                                  <a
                                    href={d.url}
                                    download
                                    className="inline-flex items-center gap-1 rounded-full bg-[color:var(--forest)] px-3 py-1.5 text-xs font-semibold text-[color:var(--paper)] hover:bg-[color:var(--moss)]"
                                  >
                                    <Download className="h-3.5 w-3.5" /> Baixar documento
                                  </a>
                                </div>
                              </li>
                            ))}
                        </ul>
                      </>
                    )}
                  </div>
                )}
              </article>
            );
          })}
        </div>
      </section>

      {/* Dados institucionais */}
      <section className="pb-16 md:pb-20">
        <div className="container-narrow">
          <div className="rounded-3xl border bg-white p-6 md:p-10 shadow-sm">
            <p className="text-xs font-semibold uppercase tracking-[0.2em] text-[color:var(--moss)]">Dados institucionais</p>
            <h2 className="mt-2 font-display text-2xl md:text-3xl font-bold text-[color:var(--forest)]">
              Informações da instituição
            </h2>
            <dl className="mt-6 grid grid-cols-1 gap-y-5 sm:grid-cols-2 lg:grid-cols-3 text-sm">
              {[
                ["Razão social", site.name],
                ["Nome fantasia", "Raízes do Futuro"],
                ["CNPJ", site.cnpj],
                ["Ano de fundação", "2010"],
                ["Representante legal", "Ana Beatriz Coutinho"],
                ["Endereço", site.address],
                ["E-mail institucional", site.email],
                ["Telefone", site.phone],
                ["Certificação", "Ponto de Cultura"],
                ["Área de atuação", "Cultura, educação ambiental, biblioteca e comunidade"],
              ].map(([k, v]) => (
                <div key={k}>
                  <dt className="text-xs font-semibold uppercase tracking-widest text-muted-foreground">{k}</dt>
                  <dd className="mt-1 text-[color:var(--forest)]">{v}</dd>
                </div>
              ))}
            </dl>
          </div>
        </div>
      </section>

      {/* Políticas e compromissos */}
      <section className="pb-24">
        <div className="container-narrow">
          <p className="text-xs font-semibold uppercase tracking-[0.2em] text-[color:var(--moss)]">Políticas e compromissos</p>
          <h2 className="mt-2 font-display text-2xl md:text-3xl font-bold text-[color:var(--forest)]">
            Documentos de referência
          </h2>
          <div className="mt-6 grid gap-3 sm:grid-cols-2 lg:grid-cols-3">
            {[
              { label: "Política de Privacidade", to: "/politica-de-privacidade" },
              { label: "Política de Cookies", to: "/politica-de-cookies" },
              { label: "Política de Acessibilidade", to: "#" },
              { label: "Política Ambiental", to: "#" },
              { label: "Código de Conduta", to: "#" },
              { label: "Política de Proteção de Crianças e Adolescentes", to: "#" },
            ].map((p) => (
              <a
                key={p.label}
                href={p.to}
                className="group flex items-center justify-between gap-3 rounded-2xl border bg-white p-4 shadow-sm transition hover:border-[color:var(--moss)]/40 hover:shadow-md"
              >
                <span className="flex items-center gap-3">
                  <span className="grid h-9 w-9 place-items-center rounded-full bg-[color:var(--leaf)]/50 text-[color:var(--forest)]">
                    <Shield className="h-4 w-4" aria-hidden />
                  </span>
                  <span className="text-sm font-semibold text-[color:var(--forest)]">{p.label}</span>
                </span>
                <ChevronRight className="h-4 w-4 text-muted-foreground transition group-hover:translate-x-0.5 group-hover:text-[color:var(--forest)]" />
              </a>
            ))}
          </div>
        </div>
      </section>
    </div>
  );
}
