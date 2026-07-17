import { createFileRoute, Link } from "@tanstack/react-router";
import { useMemo, useState } from "react";
import { documents, transparencyCategories, type TransparencyDoc } from "@/lib/site-data";
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
  Shield,
  Sprout,
  Wallet,
  ArrowRight,
} from "lucide-react";

export const Route = createFileRoute("/quem-somos/transparencia")({
  head: () => ({
    meta: [
      { title: "Transparência — Instituto Raízes do Futuro" },
      { name: "description", content: "Acervo institucional: documentos, relatórios e certificados." },
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

function Transparencia() {
  const [openCat, setOpenCat] = useState<string | null>(null);

  const byCategory = useMemo(() => {
    const map = new Map<string, TransparencyDoc[]>();
    transparencyCategories.forEach((c) => map.set(c, []));
    documents.forEach((d) => map.get(d.category)?.push(d));
    return map;
  }, []);

  return (
    <div className="relative bg-background">
      {/* Fundo muito discreto: linhas orgânicas sutis no rodapé */}
      <svg
        aria-hidden
        className="pointer-events-none absolute inset-x-0 bottom-0 h-[420px] w-full text-[color:var(--moss)]/[0.05]"
        viewBox="0 0 1440 400"
        preserveAspectRatio="none"
      >
        <g fill="none" stroke="currentColor" strokeWidth="0.8">
          {Array.from({ length: 6 }).map((_, i) => (
            <path
              key={i}
              d={`M 0 ${140 + i * 45} C 300 ${110 + i * 45} 700 ${170 + i * 45} 1080 ${125 + i * 45} S 1440 ${155 + i * 45} 1440 ${155 + i * 45}`}
            />
          ))}
        </g>
      </svg>

      {/* Hero — fundo ambiental + painel claro sobreposto */}
      <section className="relative isolate overflow-hidden">
        <div className="absolute inset-0 -z-10">
          <img
            src="https://images.unsplash.com/photo-1441974231531-c6227db76b6e?w=2000&q=80&auto=format&fit=crop"
            alt=""
            aria-hidden
            className="h-full w-full object-cover"
            loading="eager"
          />
          {/* Camada escura no topo para contraste com o header claro + gradiente ambiental */}
          <div className="absolute inset-0 bg-gradient-to-b from-[color:var(--forest)]/85 via-[color:var(--forest)]/55 to-[color:var(--forest)]/70" />
        </div>

        <div className="container-narrow relative pt-28 md:pt-32 pb-24 md:pb-32">
          <nav aria-label="Breadcrumb" className="text-xs text-[color:var(--paper)]/85">
            <ol className="flex flex-wrap items-center gap-1">
              <li>
                <Link to="/" className="hover:underline">Início</Link>
              </li>
              <ChevronRight className="h-3 w-3 opacity-70" />
              <li>
                <Link to="/quem-somos" className="hover:underline">Quem Somos</Link>
              </li>
              <ChevronRight className="h-3 w-3 opacity-70" />
              <li aria-current="page">Transparência</li>
            </ol>
          </nav>

          {/* Painel institucional claro sobreposto (parcialmente sobre a imagem) */}
          <div className="relative mt-8 mx-auto max-w-3xl rounded-3xl bg-white/95 backdrop-blur-sm border border-white/60 shadow-[0_30px_80px_-30px_rgba(20,50,30,0.45)] px-6 py-10 md:px-12 md:py-12 text-center mb-[-64px] md:mb-[-96px]">
            <span className="inline-flex items-center gap-2 rounded-full border border-[color:var(--moss)]/30 bg-[color:var(--leaf)]/40 px-3 py-1 text-[10px] font-semibold uppercase tracking-[0.24em] text-[color:var(--forest)]">
              <Archive className="h-3 w-3" /> Transparência
            </span>
            <h1 className="mt-5 font-display text-3xl md:text-4xl font-extrabold text-[color:var(--forest)]">
              Acervo institucional
            </h1>
            <p className="mt-4 mx-auto max-w-2xl text-sm md:text-base text-muted-foreground">
              Acesse documentos, certificados, reconhecimentos, portfólios, relatórios e registros institucionais,
              organizados por categoria para facilitar a consulta pública.
            </p>
          </div>
        </div>
      </section>


      {/* Accordions compactos — com respiro do painel */}
      <section className="pt-24 md:pt-32 pb-10 md:pb-12">

            <span className="inline-flex items-center gap-2 rounded-full border border-[color:var(--moss)]/30 bg-[color:var(--leaf)]/40 px-3 py-1 text-[10px] font-semibold uppercase tracking-[0.24em] text-[color:var(--forest)]">
              <Archive className="h-3 w-3" /> Transparência
            </span>
            <h1 className="mt-5 font-display text-3xl md:text-4xl font-extrabold text-[color:var(--forest)]">
              Acervo institucional
            </h1>
            <p className="mt-4 mx-auto max-w-2xl text-sm md:text-base text-muted-foreground">
              Acesse documentos, certificados, reconhecimentos, portfólios, relatórios e registros institucionais,
              organizados por categoria para facilitar a consulta pública.
            </p>
          </div>
        </div>
      </section>


      {/* Accordions compactos */}
      <section className="pb-10 md:pb-12">
        <div className="mx-auto max-w-3xl px-4 space-y-2.5">
          {transparencyCategories.map((c) => {
            const docs = byCategory.get(c) ?? [];
            const isOpen = openCat === c;
            const Icon = CAT_ICON[c];
            const panelId = `panel-${c.replace(/\s+/g, "-").toLowerCase()}`;
            const btnId = `btn-${c.replace(/\s+/g, "-").toLowerCase()}`;
            return (
              <article
                key={c}
                className={`overflow-hidden rounded-2xl border bg-white shadow-[0_1px_2px_rgba(0,0,0,0.03)] transition ${
                  isOpen ? "border-[color:var(--moss)]/40" : "border-border"
                }`}
              >
                <button
                  id={btnId}
                  type="button"
                  aria-expanded={isOpen}
                  aria-controls={panelId}
                  onClick={() => setOpenCat(isOpen ? null : c)}
                  className="flex w-full items-center gap-3 px-4 py-3 text-left hover:bg-[color:var(--paper)]/60 focus-visible:outline focus-visible:outline-2 focus-visible:outline-[color:var(--moss)]"
                >
                  <span className="grid h-8 w-8 shrink-0 place-items-center rounded-full bg-[color:var(--leaf)]/50 text-[color:var(--forest)]">
                    <Icon className="h-4 w-4" aria-hidden />
                  </span>
                  <div className="min-w-0 flex-1">
                    <h2 className="truncate font-display text-sm md:text-base font-semibold text-[color:var(--forest)]">
                      {c}
                    </h2>
                    <p className="mt-0.5 text-[11px] text-muted-foreground">
                      {docs.length} {docs.length === 1 ? "documento" : "documentos"}
                    </p>
                  </div>
                  <ChevronDown
                    className={`h-4 w-4 shrink-0 text-[color:var(--forest)] transition-transform ${
                      isOpen ? "rotate-180" : ""
                    }`}
                    aria-hidden
                  />
                </button>

                {isOpen && (
                  <div id={panelId} role="region" aria-labelledby={btnId} className="border-t bg-[color:var(--paper)]/40">
                    {docs.length === 0 ? (
                      <p className="p-4 text-xs text-muted-foreground">Nenhum documento disponível.</p>
                    ) : (
                      <ul className="divide-y">
                        {docs.map((d) => (
                          <li key={d.name} className="grid gap-2 px-4 py-3 md:grid-cols-[auto_1fr_auto] md:items-center">
                            <span className="grid h-8 w-8 place-items-center rounded-md bg-white text-[color:var(--forest)]">
                              <FileText className="h-4 w-4" aria-hidden />
                            </span>
                            <div className="min-w-0">
                              <p className="text-sm font-medium text-[color:var(--forest)]">{d.name}</p>
                              <p className="mt-0.5 text-[11px] text-muted-foreground">
                                {d.type} · {d.size} · {d.year}
                              </p>
                            </div>
                            <div className="flex flex-wrap gap-1.5">
                              <a
                                href={d.url}
                                target="_blank"
                                rel="noreferrer"
                                className="inline-flex items-center gap-1 rounded-full border px-2.5 py-1 text-[11px] font-semibold text-[color:var(--forest)] hover:bg-secondary"
                              >
                                <Eye className="h-3 w-3" /> Ver
                              </a>
                              <a
                                href={d.url}
                                download
                                className="inline-flex items-center gap-1 rounded-full bg-[color:var(--forest)] px-2.5 py-1 text-[11px] font-semibold text-[color:var(--paper)] hover:bg-[color:var(--moss)]"
                              >
                                <Download className="h-3 w-3" /> Baixar
                              </a>
                            </div>
                          </li>
                        ))}
                      </ul>
                    )}
                  </div>
                )}
              </article>
            );
          })}
        </div>
      </section>

      {/* CTA final */}
      <section className="pb-12 md:pb-16">
        <div className="container-narrow">
          <div className="relative overflow-hidden rounded-3xl border bg-[color:var(--leaf)]/30 p-8 md:p-12 text-center">
            <svg
              aria-hidden
              className="pointer-events-none absolute -top-10 -right-10 h-56 w-56 text-[color:var(--moss)]/15"
              viewBox="0 0 200 200"
            >
              <path
                d="M100 10 C 150 30 180 70 170 120 C 160 170 110 190 60 170 C 20 150 10 100 30 60 C 50 25 80 5 100 10 Z"
                fill="currentColor"
              />
            </svg>
            <svg
              aria-hidden
              className="pointer-events-none absolute -bottom-14 -left-10 h-52 w-52 text-[color:var(--moss)]/10"
              viewBox="0 0 200 200"
            >
              <ellipse cx="100" cy="100" rx="90" ry="70" fill="currentColor" />
            </svg>
            <div className="relative">
              <h2 className="font-display text-2xl md:text-3xl font-bold text-[color:var(--forest)]">
                Quer conhecer mais sobre nossa atuação?
              </h2>
              <p className="mx-auto mt-3 max-w-2xl text-sm md:text-base text-muted-foreground">
                Acompanhe nossas ações, projetos e iniciativas voltadas à cultura, à educação ambiental e ao
                fortalecimento da comunidade.
              </p>
              <div className="mt-6 flex flex-wrap justify-center gap-3">
                <Link
                  to="/noticias"
                  className="inline-flex items-center gap-2 rounded-full bg-[color:var(--forest)] px-5 py-2.5 text-sm font-semibold text-[color:var(--paper)] hover:bg-[color:var(--moss)]"
                >
                  Ver nossas notícias <ArrowRight className="h-4 w-4" />
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
    </div>
  );
}
