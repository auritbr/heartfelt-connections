import { createFileRoute, Link } from "@tanstack/react-router";
import {
  ArrowRight,
  TreePine,
  BookOpen,
  Users,
  MapPin,
  Leaf,
  Sprout,
  Library,
  Sun,
  HeartHandshake,
  Palette,
  Handshake,
} from "lucide-react";
import { frentes, impact, news, partners, projects, site, formatDate } from "@/lib/site-data";
import { LeafDivider, HillDivider, RiverLine, TopoRings, BranchLine } from "@/components/OrganicShapes";
import { useReveal } from "@/hooks/use-reveal";

export const Route = createFileRoute("/")({
  head: () => ({
    meta: [
      { title: "Instituto Raízes do Futuro — Cultura, educação e natureza" },
      { name: "description", content: "Ponto de Cultura dedicado à educação ambiental, à leitura e à valorização dos saberes comunitários." },
      { property: "og:title", content: "Instituto Raízes do Futuro" },
      { property: "og:description", content: "Cultura, educação ambiental e participação comunitária." },
      { property: "og:url", content: "/" },
      { property: "og:image", content: "https://images.unsplash.com/photo-1441974231531-c6227db76b6e?w=1600&q=80&auto=format&fit=crop" },
    ],
    links: [{ rel: "canonical", href: "/" }],
  }),
  component: HomePage,
});

const ICON_MAP: Record<string, typeof TreePine> = {
  tree: TreePine, book: BookOpen, people: Users, map: MapPin,
};

const FRENTE_ICONS = [Sprout, Palette, Library, Leaf, MapPin, Users, Sun, HeartHandshake];

function HomePage() {
  useReveal();
  const latestNews = news.slice(0, 4);
  const [featured, ...restNews] = latestNews;
  return (
    <>
      {/* 1. HERO — assimétrico, editorial, orgânico */}
      <section className="relative isolate overflow-hidden bg-[color:var(--forest)]">
        {/* topo rings backdrop */}
        <TopoRings className="pointer-events-none absolute -top-40 -left-40 h-[700px] w-[700px] text-[color:var(--leaf)]/25" />
        <TopoRings className="pointer-events-none absolute -bottom-56 -right-40 h-[600px] w-[600px] text-[color:var(--ochre)]/20" />

        <div className="container-narrow relative pt-16 md:pt-24 pb-28 md:pb-40 text-[color:var(--paper)]">
          <div className="grid gap-10 lg:grid-cols-[1.05fr_1fr] lg:items-center">
            <div className="reveal">
              <span className="inline-flex items-center gap-2 rounded-full bg-[color:var(--paper)]/10 border border-[color:var(--paper)]/25 px-3 py-1 text-[11px] uppercase tracking-[0.22em]">
                <Leaf className="h-3.5 w-3.5" aria-hidden /> Ponto de Cultura · Educação Ambiental
              </span>
              <h1 className="mt-6 font-display text-[2.5rem] sm:text-5xl lg:text-[4.2rem] font-extrabold leading-[1.02] tracking-tight">
                Cultura que <em className="not-italic text-[color:var(--ochre)]">cria raízes</em><br />
                e transforma <span className="underline decoration-[color:var(--leaf)] decoration-[6px] underline-offset-[10px]">territórios</span>
              </h1>
              <RiverLine className="mt-6 h-4 w-56 text-[color:var(--leaf)]" />
              <p className="mt-6 max-w-xl text-lg text-[color:var(--paper)]/90">
                Unimos educação ambiental, leitura, cultura e participação comunitária para fortalecer pessoas e construir novas relações com o meio ambiente.
              </p>
              <div className="mt-8 flex flex-wrap gap-3">
                <Link to="/quem-somos" className="inline-flex items-center gap-2 rounded-full bg-[color:var(--ochre)] px-6 py-3 text-sm font-semibold text-[color:var(--forest)] hover:brightness-105 shadow-lg shadow-black/20">
                  Conheça nossa história <ArrowRight className="h-4 w-4" />
                </Link>
                <Link to="/noticias" className="inline-flex items-center gap-2 rounded-full border border-[color:var(--paper)]/50 px-6 py-3 text-sm font-semibold text-[color:var(--paper)] hover:bg-[color:var(--paper)]/10">
                  Veja nossas ações
                </Link>
              </div>

            </div>

            {/* Photo composition */}
            <div className="relative reveal min-h-[420px] md:min-h-[520px]">
              <div className="absolute inset-0 organic-blob overflow-hidden ring-1 ring-[color:var(--paper)]/20 shadow-2xl shadow-black/40">
                <img
                  src="https://images.unsplash.com/photo-1500673922987-e212871fec22?w=1400&q=80&auto=format&fit=crop"
                  alt="Floresta atravessada por luz filtrada entre as copas das árvores"
                  className="h-full w-full object-cover"
                />
              </div>
              <div className="absolute -bottom-8 -left-6 md:-left-10 h-40 w-40 md:h-56 md:w-56 organic-blob-2 overflow-hidden ring-4 ring-[color:var(--forest)] shadow-xl">
                <img
                  src="https://images.unsplash.com/photo-1466692476868-aef1dfb1e735?w=800&q=80&auto=format&fit=crop"
                  alt="Mãos plantando muda em horta comunitária"
                  className="h-full w-full object-cover"
                />
              </div>
              <div className="absolute -top-4 -right-2 md:-top-8 md:-right-6 rounded-2xl bg-[color:var(--paper)] text-[color:var(--forest)] p-4 shadow-xl max-w-[180px]">
                <p className="font-display text-3xl font-extrabold leading-none">+15</p>
                <p className="mt-1 text-[11px] uppercase tracking-widest opacity-70">anos cultivando território</p>
              </div>
              <BranchLine className="pointer-events-none absolute -top-10 right-16 h-24 w-24 text-[color:var(--leaf)]/60 hidden md:block" />
            </div>
          </div>
        </div>

        <LeafDivider color="var(--background)" />
      </section>

      {/* 2. QUEM SOMOS — imagem orgânica + anéis de árvore atrás */}
      <section className="section-y relative overflow-hidden">
        <TopoRings className="pointer-events-none absolute -left-32 top-10 h-[520px] w-[520px] text-[color:var(--moss)]/25" />
        <div className="container-narrow relative grid gap-12 lg:grid-cols-2 lg:items-center">
          <div className="relative reveal">
            <div className="relative aspect-[4/5] w-full max-w-md mx-auto organic-blob overflow-hidden shadow-2xl">
              <img
                src="https://images.unsplash.com/photo-1518709268805-4e9042af2176?w=1200&q=80&auto=format&fit=crop"
                alt="Educadora conduzindo atividade em roda com jovens em ambiente natural"
                className="h-full w-full object-cover"
                loading="lazy"
              />
            </div>
            <div className="absolute -bottom-4 -right-2 md:-right-8 h-40 w-40 md:h-52 md:w-52 organic-blob-3 overflow-hidden ring-8 ring-background shadow-xl">
              <img
                src="https://images.unsplash.com/photo-1481627834876-b7833e8f5570?w=800&q=80&auto=format&fit=crop"
                alt="Estantes da biblioteca comunitária"
                className="h-full w-full object-cover"
              />
            </div>
            <div className="absolute -top-4 -left-2 rounded-full bg-[color:var(--forest)] text-[color:var(--paper)] px-4 py-2 text-xs font-semibold shadow-lg">
              20 comunidades atendidas
            </div>
          </div>
          <div className="reveal">
            <p className="text-xs font-semibold uppercase tracking-[0.24em] text-[color:var(--moss)]">Quem somos</p>
            <h2 className="mt-3 font-display text-4xl md:text-5xl font-extrabold text-[color:var(--forest)] leading-[1.05]">
              Um Ponto de Cultura onde <span className="text-[color:var(--river)]">conhecimento</span> e <span className="text-[color:var(--moss)]">natureza</span> caminham juntos
            </h2>
            <RiverLine className="mt-4 h-4 w-40 text-[color:var(--moss)]" />
            <p className="mt-5 text-base md:text-lg text-muted-foreground">
              Desenvolvemos ações que aproximam crianças, jovens, famílias, educadores, artistas e comunidades de experiências culturais e ambientais transformadoras. O {site.name} atua há mais de uma década na articulação entre território, saberes locais e biodiversidade.
            </p>

            <div className="mt-8 flex flex-wrap items-center gap-6">
              <Link to="/quem-somos" className="inline-flex items-center gap-2 rounded-full bg-[color:var(--forest)] px-6 py-3 text-sm font-semibold text-[color:var(--paper)] hover:bg-[color:var(--moss)]">
                Conheça o Ponto de Cultura <ArrowRight className="h-4 w-4" />
              </Link>
              <div className="text-sm">
                <p className="font-display text-3xl font-extrabold text-[color:var(--forest)]">4.500+</p>
                <p className="text-xs uppercase tracking-widest text-muted-foreground">pessoas alcançadas</p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* 3. FRENTES DE ATUAÇÃO — bento assimétrico */}
      <section className="section-y bg-[color:var(--paper)] paper-texture relative">
        <div className="container-narrow">
          <div className="flex flex-wrap items-end justify-between gap-6 reveal">
            <div className="max-w-2xl">
              <p className="text-xs font-semibold uppercase tracking-[0.24em] text-[color:var(--moss)]">O que orienta nossa caminhada</p>
              <h2 className="mt-2 font-display text-4xl md:text-5xl font-extrabold text-[color:var(--forest)] leading-tight">Frentes que se ramificam pelo território</h2>
            </div>
            <p className="max-w-md text-muted-foreground">Cultura e território, educação ambiental e biblioteca e leitura — três raízes que se desdobram em ações permanentes junto às comunidades.</p>

          </div>

          <div className="mt-12 grid gap-5 md:grid-cols-6 md:auto-rows-[minmax(180px,auto)]">
            {frentes.map((f, i) => {
              const Icon = FRENTE_ICONS[i % FRENTE_ICONS.length];
              // Bento sizing pattern
              const layout = [
                "md:col-span-4 md:row-span-2 bg-[color:var(--forest)] text-[color:var(--paper)]",
                "md:col-span-2 bg-[color:var(--leaf)] text-[color:var(--forest)]",
                "md:col-span-2 bg-[color:var(--river)] text-[color:var(--paper)]",
                "md:col-span-3 bg-card",
                "md:col-span-3 bg-[color:var(--ochre)]/80 text-[color:var(--forest)]",
                "md:col-span-2 bg-card",
                "md:col-span-2 bg-[color:var(--earth)] text-[color:var(--paper)]",
                "md:col-span-2 bg-card",
              ];
              const cls = layout[i] ?? "md:col-span-2 bg-card";
              const isBig = i === 0;
              return (
                <article
                  key={f.slug}
                  className={`reveal group relative overflow-hidden rounded-3xl p-6 md:p-7 shadow-sm transition hover:-translate-y-0.5 hover:shadow-md ${cls}`}
                >
                  {isBig && (
                    <img
                      src="https://images.unsplash.com/photo-1524178232363-1fb2b075b655?w=1200&q=80&auto=format&fit=crop"
                      alt=""
                      aria-hidden
                      className="absolute inset-0 h-full w-full object-cover opacity-25 mix-blend-luminosity"
                    />
                  )}
                  <div className="relative flex h-full flex-col">
                    <div className="flex items-center gap-3">
                      <span className="grid h-11 w-11 place-items-center rounded-2xl bg-current/10 ring-1 ring-current/20">
                        <Icon className="h-5 w-5" aria-hidden />
                      </span>
                      <span className="font-display text-xs font-bold opacity-70">0{i + 1}</span>
                    </div>
                    <h3 className={`mt-4 font-display font-bold leading-tight ${isBig ? "text-2xl md:text-3xl" : "text-lg"}`}>{f.title}</h3>
                    <p className={`mt-2 text-sm opacity-85 ${isBig ? "max-w-md" : ""}`}>{f.desc}</p>
                    <Link to="/quem-somos" className="mt-auto pt-4 inline-flex items-center gap-1 text-sm font-semibold hover:underline">
                      Saiba mais <ArrowRight className="h-3.5 w-3.5" />
                    </Link>
                  </div>
                </article>
              );
            })}
          </div>
        </div>
      </section>

      {/* 4. IMPACTO — verde profundo com anéis topográficos */}
      <section className="relative isolate overflow-hidden bg-[color:var(--forest)] text-[color:var(--paper)]">
        <TopoRings className="pointer-events-none absolute -right-40 -top-40 h-[700px] w-[700px] text-[color:var(--leaf)]/25" />
        <TopoRings className="pointer-events-none absolute -left-52 -bottom-52 h-[600px] w-[600px] text-[color:var(--ochre)]/20" />
        <div className="container-narrow relative py-20 md:py-28">
          <div className="max-w-2xl reveal">
            <p className="text-xs font-semibold uppercase tracking-[0.24em] text-[color:var(--leaf)]">Nosso impacto</p>
            <h2 className="mt-2 font-display text-4xl md:text-5xl font-extrabold leading-tight">Resultados que crescem com a comunidade</h2>

          </div>
          <div className="mt-14 grid gap-10 sm:grid-cols-2 lg:grid-cols-4">
            {impact.map((it, i) => {
              const Icon = ICON_MAP[it.icon];
              return (
                <div key={it.label} className="reveal border-l-2 border-[color:var(--leaf)]/40 pl-5">
                  <Icon className="h-6 w-6 text-[color:var(--ochre)]" aria-hidden />
                  <p className="mt-4 font-display text-5xl md:text-6xl font-extrabold text-[color:var(--paper)] leading-none">
                    {it.value}<span className="text-2xl text-[color:var(--leaf)]">{it.suffix}</span>
                  </p>
                  <p className="mt-3 text-sm text-[color:var(--paper)]/80">{it.label}</p>
                  <p className="mt-2 text-[10px] font-mono opacity-50">0{i + 1} / 04</p>
                </div>
              );
            })}
          </div>
        </div>
        <HillDivider color="var(--background)" />
      </section>

      {/* 5. PROJETOS — zigzag editorial */}
      <section className="section-y">
        <div className="container-narrow">
          <div className="max-w-2xl reveal">
            <p className="text-xs font-semibold uppercase tracking-[0.24em] text-[color:var(--moss)]">Do conhecimento à ação</p>
            <h2 className="mt-2 font-display text-4xl md:text-5xl font-extrabold text-[color:var(--forest)] leading-tight">Projetos que constroem trajetória</h2>

          </div>

          <div className="mt-14 space-y-20 md:space-y-28">
            {projects.map((p, i) => {
              const reverse = i % 2 === 1;
              return (
                <article key={p.slug} className={`reveal grid gap-8 md:gap-14 lg:grid-cols-2 lg:items-center ${reverse ? "lg:[&>*:first-child]:order-2" : ""}`}>
                  <div className="relative">
                    <div className={`aspect-[4/3] overflow-hidden shadow-2xl ${i === 0 ? "organic-blob" : i === 1 ? "organic-blob-2" : "rounded-[2rem]"}`}>
                      <img src={p.image} alt={p.title} className="h-full w-full object-cover" loading="lazy" />
                    </div>
                    <div className={`absolute ${reverse ? "-left-4 md:-left-8" : "-right-4 md:-right-8"} -bottom-4 rounded-2xl bg-[color:var(--forest)] px-4 py-2 text-xs font-semibold uppercase tracking-widest text-[color:var(--paper)]`}>
                      Projeto 0{i + 1}
                    </div>
                  </div>
                  <div>
                    <p className="text-xs font-semibold uppercase tracking-widest text-[color:var(--moss)]">{p.category}</p>
                    <h3 className="mt-2 font-display text-3xl md:text-4xl font-extrabold text-[color:var(--forest)] leading-tight">{p.title}</h3>
                    <RiverLine className="mt-4 h-4 w-32 text-[color:var(--ochre)]" />
                    <p className="mt-5 text-base md:text-lg text-muted-foreground">{p.desc}</p>
                    <div className="mt-4 flex items-center gap-2 text-sm text-muted-foreground">
                      <MapPin className="h-4 w-4 text-[color:var(--moss)]" /> Território de atuação do Instituto
                    </div>
                    <Link to="/noticias" className="mt-6 inline-flex items-center gap-2 rounded-full border-2 border-[color:var(--forest)] px-5 py-2.5 text-sm font-semibold text-[color:var(--forest)] hover:bg-[color:var(--forest)] hover:text-[color:var(--paper)] transition">
                      Conheça o projeto <ArrowRight className="h-4 w-4" />
                    </Link>
                  </div>
                </article>
              );
            })}
          </div>
        </div>
      </section>

      {/* 6. BIBLIOTECA — azul-petróleo */}
      <section className="relative isolate overflow-hidden bg-[color:var(--river)] text-[color:var(--paper)]">
        <TopoRings className="pointer-events-none absolute -top-32 -right-32 h-[500px] w-[500px] text-[color:var(--paper)]/20" />
        <div className="container-narrow relative py-20 md:py-28 grid gap-12 lg:grid-cols-2 lg:items-center">
          <div className="reveal order-2 lg:order-1">
            <p className="text-xs font-semibold uppercase tracking-[0.24em] text-[color:var(--leaf)]">Biblioteca Verde</p>
            <h2 className="mt-2 font-display text-4xl md:text-5xl font-extrabold leading-tight">Conhecimento que cria raízes</h2>
            <RiverLine className="mt-5 h-4 w-40 text-[color:var(--leaf)]" />
            <p className="mt-5 text-base md:text-lg text-[color:var(--paper)]/90 max-w-lg">
              Nosso acervo ambiental e cultural reúne publicações, cartilhas, pesquisas, materiais pedagógicos e literatura sobre biodiversidade, saberes tradicionais e território. Um espaço aberto de leitura, escuta e formação.
            </p>
            <ul className="mt-6 grid grid-cols-2 gap-3 text-sm max-w-md">
              {[
                { icon: BookOpen, label: "Publicações" },
                { icon: Library, label: "Cartilhas" },
                { icon: Leaf, label: "Pesquisas" },
                { icon: Sprout, label: "Material pedagógico" },
              ].map(({ icon: Icon, label }) => (
                <li key={label} className="flex items-center gap-2 rounded-lg bg-[color:var(--paper)]/10 px-3 py-2 backdrop-blur">
                  <Icon className="h-4 w-4 text-[color:var(--leaf)]" /> {label}
                </li>
              ))}
            </ul>
            <Link to="/galeria" className="mt-8 inline-flex items-center gap-2 rounded-full bg-[color:var(--paper)] px-6 py-3 text-sm font-semibold text-[color:var(--river)] hover:bg-[color:var(--leaf)]">
              Conheça nosso acervo <ArrowRight className="h-4 w-4" />
            </Link>
          </div>
          <div className="relative reveal order-1 lg:order-2 min-h-[420px]">
            <div className="absolute inset-4 organic-blob-2 overflow-hidden shadow-2xl">
              <img
                src="https://images.unsplash.com/photo-1481627834876-b7833e8f5570?w=1200&q=80&auto=format&fit=crop"
                alt="Leitor em espaço arborizado da biblioteca"
                className="h-full w-full object-cover"
                loading="lazy"
              />
            </div>
            <div className="absolute -bottom-4 -left-2 md:-left-6 h-36 w-36 md:h-44 md:w-44 organic-blob-3 overflow-hidden ring-8 ring-[color:var(--river)]">
              <img
                src="https://images.unsplash.com/photo-1521587760476-6c12a4b040da?w=800&q=80&auto=format&fit=crop"
                alt="Páginas abertas com folhas ao redor"
                className="h-full w-full object-cover"
              />
            </div>
            <BranchLine className="absolute -top-6 -right-2 h-28 w-28 text-[color:var(--leaf)]/70" />
          </div>
        </div>
        <LeafDivider color="var(--background)" />
      </section>

      {/* 7. NOTÍCIAS — editorial com destaque */}
      <section className="section-y">
        <div className="container-narrow">
          <div className="flex flex-wrap items-end justify-between gap-4 reveal">
            <div>
              <p className="text-xs font-semibold uppercase tracking-[0.24em] text-[color:var(--moss)]">Comunicação</p>
              <h2 className="mt-2 font-display text-4xl md:text-5xl font-extrabold text-[color:var(--forest)] leading-tight">Histórias que continuam sendo escritas</h2>

            </div>
            <Link to="/noticias" className="inline-flex items-center gap-1 text-sm font-semibold text-[color:var(--forest)] hover:underline">
              Ver todas <ArrowRight className="h-4 w-4" />
            </Link>
          </div>

          {featured && (
            <div className="mt-10 grid gap-10 lg:grid-cols-[1.4fr_1fr]">
              <Link to="/noticias/$slug" params={{ slug: featured.slug }} className="reveal group block">
                <div className="aspect-[16/10] overflow-hidden rounded-3xl shadow-lg">
                  <img src={featured.cover} alt={featured.title} className="h-full w-full object-cover transition duration-700 group-hover:scale-105" loading="lazy" />
                </div>
                <div className="mt-5 flex items-center gap-3 text-xs">
                  <span className="rounded-full bg-[color:var(--forest)] text-[color:var(--paper)] px-3 py-1 font-semibold uppercase tracking-widest">{featured.category}</span>
                  <span className="text-muted-foreground">{formatDate(featured.date)}</span>
                </div>
                <h3 className="mt-3 font-display text-2xl md:text-3xl font-extrabold text-[color:var(--forest)] leading-tight group-hover:text-[color:var(--moss)] transition">
                  {featured.title}
                </h3>
                <p className="mt-3 text-muted-foreground">{featured.excerpt}</p>
              </Link>
              <div className="grid gap-6 content-start">
                {restNews.map((n) => (
                  <Link key={n.slug} to="/noticias/$slug" params={{ slug: n.slug }} className="reveal group grid grid-cols-[110px_1fr] gap-4 items-start">
                    <div className="aspect-square overflow-hidden rounded-2xl">
                      <img src={n.cover} alt={n.title} className="h-full w-full object-cover transition group-hover:scale-105" loading="lazy" />
                    </div>
                    <div className="min-w-0">
                      <div className="flex items-center gap-2 text-[11px] text-muted-foreground">
                        <span className="rounded-full bg-[color:var(--leaf)] text-[color:var(--forest)] px-2 py-0.5 font-semibold uppercase tracking-widest">{n.category}</span>
                        <span>{formatDate(n.date)}</span>
                      </div>
                      <h4 className="mt-2 font-display text-base font-bold text-[color:var(--forest)] leading-snug line-clamp-3 group-hover:text-[color:var(--moss)]">
                        {n.title}
                      </h4>
                    </div>
                  </Link>
                ))}
              </div>
            </div>
          )}
        </div>
      </section>

      {/* 8. CHAMADA FINAL — ochre/terracota */}
      <section className="relative isolate overflow-hidden bg-[color:var(--ochre)]">
        <div className="absolute inset-0 opacity-25">
          <img src="https://images.unsplash.com/photo-1441974231531-c6227db76b6e?w=2000&q=80&auto=format&fit=crop" alt="" aria-hidden className="h-full w-full object-cover mix-blend-multiply" />
        </div>
        <div className="container-narrow relative py-20 md:py-24 text-center text-[color:var(--forest)]">
          <BranchLine className="mx-auto h-16 w-16 text-[color:var(--forest)]/60" />
          <h2 className="mt-4 font-display text-4xl md:text-5xl font-extrabold max-w-3xl mx-auto leading-tight">
            Cada transformação começa com uma aproximação
          </h2>
          <p className="mt-4 max-w-2xl mx-auto text-[color:var(--forest)]/85 text-lg">
            Participe das atividades, proponha parcerias, acompanhe as ações ou ajude a fortalecer esse trabalho.
          </p>
          <div className="mt-8 flex flex-wrap justify-center gap-3">
            <Link to="/contato" className="inline-flex items-center rounded-full bg-[color:var(--forest)] px-7 py-3 text-sm font-semibold text-[color:var(--paper)] hover:bg-[color:var(--moss)]">Entre em contato</Link>
            <Link to="/noticias" className="inline-flex items-center rounded-full border-2 border-[color:var(--forest)] px-7 py-3 text-sm font-semibold text-[color:var(--forest)] hover:bg-[color:var(--forest)]/10">Conheça nossas ações</Link>
          </div>

        </div>
      </section>

      {/* 9. PARCEIROS */}
      <section className="section-y">
        <div className="container-narrow">
          <div className="flex flex-col items-center text-center gap-3 reveal">
            <Handshake className="h-6 w-6 text-[color:var(--moss)]" />
            <p className="text-xs font-semibold uppercase tracking-[0.24em] text-[color:var(--moss)]">Rede</p>
            <h2 className="font-display text-3xl md:text-4xl font-extrabold text-[color:var(--forest)]">Quem caminha conosco</h2>
          </div>
          <div className="mt-10 grid gap-6 grid-cols-2 md:grid-cols-3 lg:grid-cols-6 items-center">
            {partners.map((p) => (
              <div key={p} className="flex items-center justify-center rounded-2xl border bg-card p-4 h-20 text-sm font-semibold text-muted-foreground grayscale opacity-70 hover:opacity-100 hover:grayscale-0 hover:text-[color:var(--forest)] transition">
                {p}
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* 10. NEWSLETTER */}
      <section className="bg-[color:var(--paper)] paper-texture border-t">
        <div className="container-narrow py-14 grid gap-8 md:grid-cols-2 md:items-center">
          <div>
            <h2 className="font-display text-2xl md:text-3xl font-extrabold text-[color:var(--forest)]">Receba nossas novidades</h2>
            <p className="mt-2 text-sm text-muted-foreground">Informativo com projetos, oficinas, editais e chamadas do Ponto de Cultura.</p>
          </div>
          <form
            onSubmit={(e) => { e.preventDefault(); (e.currentTarget as HTMLFormElement).reset(); alert("Obrigado! Inscrição registrada."); }}
            className="grid gap-3"
          >
            <div className="grid gap-3 sm:grid-cols-2">
              <input required name="name" placeholder="Nome" aria-label="Nome" className="rounded-md border bg-background px-3 py-2.5 text-sm" />
              <input required type="email" name="email" placeholder="E-mail" aria-label="E-mail" className="rounded-md border bg-background px-3 py-2.5 text-sm" />
            </div>
            <label className="flex gap-2 text-xs text-muted-foreground">
              <input required type="checkbox" className="mt-0.5 h-4 w-4 accent-[color:var(--forest)]" />
              <span>Autorizo o envio de comunicações institucionais, conforme a <Link to="/politica-de-privacidade" className="underline">Política de Privacidade</Link>.</span>
            </label>
            <button type="submit" className="justify-self-start inline-flex items-center gap-2 rounded-full bg-[color:var(--forest)] px-5 py-2.5 text-sm font-semibold text-[color:var(--paper)] hover:bg-[color:var(--moss)]">
              Inscrever-me <ArrowRight className="h-4 w-4" />
            </button>
          </form>
        </div>
      </section>
    </>
  );
}
