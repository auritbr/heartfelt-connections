import { createFileRoute, Link } from "@tanstack/react-router";
import {
  ArrowRight,
  BookOpen,
  Leaf,
  Sprout,
  Library,
  MapPin,
  Quote,
  Handshake,
} from "lucide-react";
import { news, partners, projects, site, formatDate } from "@/lib/site-data";
import { LeafDivider, RiverLine, TopoRings, BranchLine } from "@/components/OrganicShapes";
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

const pillars = [
  {
    n: "01",
    title: "Cultura e território",
    text: "Valorizamos memórias, expressões culturais e saberes construídos em cada comunidade.",
    Icon: MapPin,
    accent: "var(--ochre)",
  },
  {
    n: "02",
    title: "Educação ambiental",
    text: "Criamos experiências que aproximam pessoas, natureza, conhecimento e responsabilidade coletiva.",
    Icon: Sprout,
    accent: "var(--moss)",
  },
  {
    n: "03",
    title: "Biblioteca e leitura",
    text: "Ampliamos o acesso a livros, publicações e atividades que despertam curiosidade e consciência.",
    Icon: Library,
    accent: "var(--river)",
  },
];

function HomePage() {
  useReveal();
  const latestNews = news.slice(0, 4);
  const [featured, ...restNews] = latestNews;
  // Reduce Biblioteca Verde dominance — limit to 3 projects (data already has 3)
  const showcaseProjects = projects.slice(0, 3);

  return (
    <>
      {/* 1. HERO EDITORIAL — assimétrico, fundo claro */}
      <section className="relative isolate overflow-hidden bg-[color:var(--paper)] paper-texture">
        {/* soft green wash + organic leaf silhouette behind photo */}
        <div className="pointer-events-none absolute inset-y-0 right-0 w-1/2 bg-[color:var(--leaf)]/25" aria-hidden />
        <svg
          aria-hidden
          viewBox="0 0 600 600"
          className="pointer-events-none absolute -right-20 top-6 hidden h-[560px] w-[560px] text-[color:var(--moss)]/25 lg:block"
        >
          <path
            d="M60 520 C 40 260 220 60 540 60 C 560 320 380 520 60 520 Z"
            fill="currentColor"
          />
        </svg>
        <RiverLine className="pointer-events-none absolute left-6 bottom-16 hidden h-8 w-[280px] text-[color:var(--moss)]/40 md:block" />

        <div className="container-narrow relative py-14 md:py-20 lg:py-24">
          <div className="grid items-center gap-10 lg:grid-cols-[1.05fr_1fr] lg:gap-14">
            {/* LEFT */}
            <div className="reveal">
              <p className="text-[11px] font-semibold uppercase tracking-[0.28em] text-[color:var(--moss)]">
                Ponto de cultura e educação ambiental
              </p>
              <h1 className="mt-5 font-display text-4xl md:text-5xl lg:text-6xl font-extrabold leading-[1.05] text-[color:var(--forest)]">
                Cultura, <span className="text-[color:var(--moss)]">natureza</span> e comunidade em movimento
              </h1>
              <RiverLine className="mt-6 h-4 w-44 text-[color:var(--ochre)]" />
              <p className="mt-6 max-w-xl text-base md:text-lg text-muted-foreground">
                Criamos experiências que unem educação ambiental, leitura, cultura e participação comunitária para fortalecer pessoas e territórios.
              </p>
              <div className="mt-7 flex flex-wrap gap-3">
                <Link to="/quem-somos" className="inline-flex items-center gap-2 rounded-full bg-[color:var(--forest)] px-6 py-3 text-sm font-semibold text-[color:var(--paper)] hover:bg-[color:var(--moss)]">
                  Conheça nossa história <ArrowRight className="h-4 w-4" />
                </Link>
                <Link to="/noticias" className="inline-flex items-center gap-2 rounded-full border-2 border-[color:var(--forest)] px-6 py-3 text-sm font-semibold text-[color:var(--forest)] hover:bg-[color:var(--forest)]/5">
                  Veja nossas ações
                </Link>
              </div>
              <p className="mt-8 flex items-center gap-2 text-xs text-muted-foreground">
                <Leaf className="h-3.5 w-3.5 text-[color:var(--moss)]" aria-hidden />
                Desde 2010 cultivando conhecimento e participação
              </p>
            </div>

            {/* RIGHT — photo composition */}
            <div className="relative reveal min-h-[380px] md:min-h-[460px]">
              <div className="absolute inset-0 organic-blob overflow-hidden shadow-2xl ring-1 ring-[color:var(--forest)]/10">
                <img
                  src="https://images.unsplash.com/photo-1518709268805-4e9042af2176?w=1400&q=80&auto=format&fit=crop"
                  alt="Educadora e jovens em roda durante oficina em área verde"
                  className="h-full w-full object-cover"
                  loading="eager"
                />
              </div>
              <div className="absolute -bottom-6 -left-4 md:-left-10 h-36 w-36 md:h-48 md:w-48 organic-blob-2 overflow-hidden ring-8 ring-[color:var(--paper)] shadow-xl">
                <img
                  src="https://images.unsplash.com/photo-1466692476868-aef1dfb1e735?w=800&q=80&auto=format&fit=crop"
                  alt="Mãos plantando muda em horta comunitária"
                  className="h-full w-full object-cover"
                />
              </div>
              <BranchLine className="pointer-events-none absolute -top-6 -right-2 hidden h-24 w-24 text-[color:var(--moss)]/70 md:block" />
            </div>
          </div>
        </div>
      </section>

      {/* 2. APRESENTAÇÃO INSTITUCIONAL */}
      <section className="section-y relative overflow-hidden">
        <TopoRings className="pointer-events-none absolute -left-32 top-10 h-[520px] w-[520px] text-[color:var(--moss)]/25" />
        <div className="container-narrow relative grid gap-12 lg:grid-cols-2 lg:items-center">
          <div className="relative reveal">
            <div className="relative aspect-[4/5] w-full max-w-md mx-auto organic-blob overflow-hidden shadow-2xl">
              <img
                src="https://images.unsplash.com/photo-1500673922987-e212871fec22?w=1200&q=80&auto=format&fit=crop"
                alt="Floresta atravessada por luz filtrada entre as copas"
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
          </div>
          <div className="reveal">
            <p className="text-xs font-semibold uppercase tracking-[0.24em] text-[color:var(--moss)]">Quem somos</p>
            <h2 className="mt-3 font-display text-4xl md:text-5xl font-extrabold text-[color:var(--forest)] leading-[1.05]">
              Um Ponto de Cultura onde <span className="text-[color:var(--river)]">conhecimento</span> e <span className="text-[color:var(--moss)]">natureza</span> caminham juntos
            </h2>
            <RiverLine className="mt-4 h-4 w-40 text-[color:var(--moss)]" />
            <p className="mt-5 text-base md:text-lg text-muted-foreground">
              O {site.name} desenvolve ações que aproximam crianças, jovens, famílias, educadores, artistas e comunidades de experiências culturais e ambientais transformadoras — articulando território, saberes locais e biodiversidade.
            </p>
            <Link to="/quem-somos" className="mt-7 inline-flex items-center gap-2 rounded-full bg-[color:var(--forest)] px-6 py-3 text-sm font-semibold text-[color:var(--paper)] hover:bg-[color:var(--moss)]">
              Conheça o instituto <ArrowRight className="h-4 w-4" />
            </Link>
          </div>
        </div>
      </section>

      {/* 3. O QUE ORIENTA NOSSA CAMINHADA — 3 pilares em bloco horizontal integrado */}
      <section className="section-y bg-[color:var(--paper)] paper-texture relative overflow-hidden">
        <div className="container-narrow relative">
          <div className="max-w-2xl reveal">
            <p className="text-xs font-semibold uppercase tracking-[0.24em] text-[color:var(--moss)]">O que orienta nossa caminhada</p>
            <h2 className="mt-2 font-display text-3xl md:text-4xl font-extrabold text-[color:var(--forest)] leading-tight">
              Três raízes que sustentam nosso trabalho
            </h2>
          </div>

          <div className="reveal mt-12 rounded-3xl bg-background/70 backdrop-blur-sm ring-1 ring-[color:var(--moss)]/15 shadow-sm">
            {/* organic connector line behind the three pillars */}
            <div className="relative grid gap-0 md:grid-cols-3">
              <svg
                aria-hidden
                viewBox="0 0 1000 60"
                preserveAspectRatio="none"
                className="pointer-events-none absolute inset-x-8 top-[70px] hidden h-8 text-[color:var(--moss)]/50 md:block"
              >
                <path
                  d="M0 30 C 180 5 320 55 500 30 C 680 5 820 55 1000 30"
                  stroke="currentColor"
                  strokeWidth="1.5"
                  fill="none"
                  strokeLinecap="round"
                />
              </svg>
              {pillars.map(({ n, title, text, Icon, accent }, i) => (
                <div
                  key={n}
                  className={`relative p-7 md:p-8 ${i > 0 ? "md:border-l md:border-[color:var(--moss)]/15" : ""}`}
                >
                  <div className="flex items-center gap-3">
                    <span
                      className="grid h-11 w-11 place-items-center rounded-full ring-1"
                      style={{ backgroundColor: `color-mix(in oklab, ${accent} 18%, transparent)`, color: accent, borderColor: `color-mix(in oklab, ${accent} 40%, transparent)` }}
                    >
                      <Icon className="h-5 w-5" aria-hidden />
                    </span>
                    <span className="font-display text-sm font-bold text-[color:var(--moss)]">{n}</span>
                  </div>
                  <h3 className="mt-5 font-display text-xl md:text-2xl font-extrabold text-[color:var(--forest)] leading-tight">{title}</h3>
                  <p className="mt-3 text-sm md:text-[15px] text-muted-foreground leading-relaxed">{text}</p>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* 4. DO CONHECIMENTO À AÇÃO — verde-floresta profundo */}
      <section className="relative isolate overflow-hidden bg-[color:var(--forest)] text-[color:var(--paper)]">
        <TopoRings className="pointer-events-none absolute -right-40 -top-40 h-[700px] w-[700px] text-[color:var(--leaf)]/20" />
        <TopoRings className="pointer-events-none absolute -left-52 -bottom-52 h-[600px] w-[600px] text-[color:var(--ochre)]/15" />
        <div className="container-narrow relative py-20 md:py-28">
          <div className="max-w-2xl reveal">
            <p className="text-xs font-semibold uppercase tracking-[0.24em] text-[color:var(--leaf)]">Do conhecimento à ação</p>
            <h2 className="mt-2 font-display text-4xl md:text-5xl font-extrabold leading-tight">
              Iniciativas que transformam território
            </h2>
            <p className="mt-4 max-w-xl text-[color:var(--paper)]/85 text-base md:text-lg">
              Conheça iniciativas que transformam aprendizagem, cultura e cuidado com o território em experiências concretas.
            </p>
          </div>

          {/* Editorial grid: featured smaller than before + two side projects */}
          <div className="mt-14 grid gap-8 lg:grid-cols-12">
            {/* Featured (Biblioteca Verde) — reduced dominance */}
            <article className="reveal lg:col-span-7">
              <Link to="/noticias" className="group block">
                <div className="aspect-[16/10] overflow-hidden rounded-3xl shadow-2xl">
                  <img src={showcaseProjects[0].image} alt={showcaseProjects[0].title} className="h-full w-full object-cover transition duration-700 group-hover:scale-105" loading="lazy" />
                </div>
                <p className="mt-5 text-[11px] font-semibold uppercase tracking-widest text-[color:var(--leaf)]">{showcaseProjects[0].category}</p>
                <h3 className="mt-2 font-display text-2xl md:text-3xl font-extrabold leading-tight">
                  {showcaseProjects[0].title}
                </h3>
                <p className="mt-3 max-w-xl text-[color:var(--paper)]/85">{showcaseProjects[0].desc}</p>
                <span className="mt-4 inline-flex items-center gap-1 text-sm font-semibold text-[color:var(--leaf)] group-hover:underline">
                  Conheça o projeto <ArrowRight className="h-4 w-4" />
                </span>
              </Link>
            </article>

            {/* Side stack */}
            <div className="lg:col-span-5 grid gap-8 content-start">
              {showcaseProjects.slice(1).map((p) => (
                <article key={p.slug} className="reveal">
                  <Link to="/noticias" className="group grid grid-cols-[128px_1fr] gap-4 items-start md:grid-cols-[160px_1fr]">
                    <div className="aspect-square overflow-hidden rounded-2xl ring-1 ring-[color:var(--paper)]/10">
                      <img src={p.image} alt={p.title} className="h-full w-full object-cover transition group-hover:scale-105" loading="lazy" />
                    </div>
                    <div className="min-w-0">
                      <p className="text-[10px] font-semibold uppercase tracking-widest text-[color:var(--leaf)]">{p.category}</p>
                      <h3 className="mt-1 font-display text-lg md:text-xl font-extrabold leading-tight">{p.title}</h3>
                      <p className="mt-2 text-sm text-[color:var(--paper)]/80 line-clamp-3">{p.desc}</p>
                    </div>
                  </Link>
                </article>
              ))}
            </div>
          </div>
        </div>
        <LeafDivider color="var(--background)" />
      </section>

      {/* 5. EXPERIÊNCIAS QUE DEIXAM RAÍZES — depoimento editorial */}
      <section className="section-y relative overflow-hidden bg-background">
        <BranchLine className="pointer-events-none absolute -left-6 top-16 hidden h-40 w-40 text-[color:var(--moss)]/25 md:block" />
        <div className="container-narrow relative grid gap-12 lg:grid-cols-[1.1fr_1fr] lg:items-center">
          <div className="relative reveal">
            <div className="relative aspect-[5/6] w-full max-w-lg organic-blob overflow-hidden shadow-2xl">
              <img
                src="https://images.unsplash.com/photo-1524178232363-1fb2b075b655?w=1200&q=80&auto=format&fit=crop"
                alt="Grupo em atividade de educação ambiental ao ar livre"
                className="h-full w-full object-cover"
                loading="lazy"
              />
            </div>
            <div className="absolute -bottom-6 -right-2 md:-right-8 h-36 w-36 md:h-44 md:w-44 organic-blob-3 overflow-hidden ring-8 ring-background shadow-xl">
              <img
                src="https://images.unsplash.com/photo-1466692476868-aef1dfb1e735?w=800&q=80&auto=format&fit=crop"
                alt="Detalhe de mãos e folhagem"
                className="h-full w-full object-cover"
              />
            </div>
          </div>

          <div className="reveal">
            <p className="text-xs font-semibold uppercase tracking-[0.24em] text-[color:var(--moss)]">Vivências</p>
            <h2 className="mt-2 font-display text-4xl md:text-5xl font-extrabold text-[color:var(--forest)] leading-tight">
              Experiências que deixam raízes
            </h2>
            <RiverLine className="mt-4 h-4 w-40 text-[color:var(--ochre)]" />

            <figure className="mt-8 relative rounded-3xl bg-[color:var(--paper)] paper-texture p-7 md:p-8 ring-1 ring-[color:var(--moss)]/15 shadow-sm">
              <Quote className="absolute -top-4 -left-3 h-10 w-10 text-[color:var(--moss)]/40" aria-hidden />
              <blockquote className="font-display text-xl md:text-2xl font-semibold text-[color:var(--forest)] leading-snug">
                “Aprender sobre o meio ambiente também mudou a forma como enxergamos nossa comunidade e o lugar onde vivemos.”
              </blockquote>
              <figcaption className="mt-4 text-sm text-muted-foreground">
                Participante de uma oficina de educação ambiental
              </figcaption>
            </figure>

            <p className="mt-6 max-w-xl text-base text-muted-foreground">
              Cada atividade cria novas relações com o conhecimento, fortalece vínculos e amplia a participação da comunidade.
            </p>

            <Link to="/noticias" className="mt-6 inline-flex items-center gap-2 rounded-full border-2 border-[color:var(--forest)] px-6 py-3 text-sm font-semibold text-[color:var(--forest)] hover:bg-[color:var(--forest)] hover:text-[color:var(--paper)] transition">
              Conheça nossas histórias <ArrowRight className="h-4 w-4" />
            </Link>
          </div>
        </div>
      </section>

      {/* 6. BIBLIOTECA — Conhecimento que cria raízes */}
      <section className="relative isolate overflow-hidden bg-[color:var(--river)] text-[color:var(--paper)]">
        <TopoRings className="pointer-events-none absolute -top-32 -right-32 h-[500px] w-[500px] text-[color:var(--paper)]/20" />
        <div className="container-narrow relative py-20 md:py-24 grid gap-12 lg:grid-cols-2 lg:items-center">
          <div className="reveal order-2 lg:order-1">
            <p className="text-xs font-semibold uppercase tracking-[0.24em] text-[color:var(--leaf)]">Biblioteca Verde</p>
            <h2 className="mt-2 font-display text-4xl md:text-5xl font-extrabold leading-tight">Conhecimento que cria raízes</h2>
            <RiverLine className="mt-5 h-4 w-40 text-[color:var(--leaf)]" />
            <p className="mt-5 text-base md:text-lg text-[color:var(--paper)]/90 max-w-lg">
              Nosso acervo ambiental e cultural reúne publicações, cartilhas, pesquisas, materiais pedagógicos e literatura sobre biodiversidade, saberes tradicionais e território.
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
          <div className="relative reveal order-1 lg:order-2 min-h-[380px]">
            <div className="absolute inset-4 organic-blob-2 overflow-hidden shadow-2xl">
              <img
                src="https://images.unsplash.com/photo-1481627834876-b7833e8f5570?w=1200&q=80&auto=format&fit=crop"
                alt="Leitor em espaço arborizado da biblioteca"
                className="h-full w-full object-cover"
                loading="lazy"
              />
            </div>
            <div className="absolute -bottom-4 -left-2 md:-left-6 h-32 w-32 md:h-40 md:w-40 organic-blob-3 overflow-hidden ring-8 ring-[color:var(--river)]">
              <img
                src="https://images.unsplash.com/photo-1521587760476-6c12a4b040da?w=800&q=80&auto=format&fit=crop"
                alt="Páginas abertas com folhas ao redor"
                className="h-full w-full object-cover"
              />
            </div>
          </div>
        </div>
        <LeafDivider color="var(--background)" />
      </section>

      {/* 7. NOTÍCIAS */}
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

      {/* 8. REGISTROS DA NOSSA CAMINHADA — parceiros */}
      <section className="py-14 md:py-20 bg-[color:var(--paper)] paper-texture">
        <div className="container-narrow">
          <div className="flex flex-col items-center text-center gap-3 reveal">
            <Handshake className="h-6 w-6 text-[color:var(--moss)]" />
            <p className="text-xs font-semibold uppercase tracking-[0.24em] text-[color:var(--moss)]">Parcerias</p>
            <h2 className="font-display text-3xl md:text-4xl font-extrabold text-[color:var(--forest)]">Registros da nossa caminhada</h2>
          </div>
          <div className="mt-10 grid gap-5 grid-cols-2 md:grid-cols-3 lg:grid-cols-6 items-center">
            {partners.map((p) => (
              <div key={p} className="flex items-center justify-center rounded-2xl border bg-card p-4 h-20 text-sm font-semibold text-muted-foreground grayscale opacity-70 hover:opacity-100 hover:grayscale-0 hover:text-[color:var(--forest)] transition">
                {p}
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* 9. CTA FINAL — compacto, horizontal */}
      <section className="pb-10 pt-10 md:pt-14 md:pb-14">
        <div className="container-narrow">
          <div className="reveal relative overflow-hidden rounded-3xl bg-[color:var(--forest)] text-[color:var(--paper)] shadow-xl">
            <BranchLine className="pointer-events-none absolute -top-4 right-4 h-24 w-24 text-[color:var(--leaf)]/30" />
            <div className="grid gap-0 md:grid-cols-[220px_1fr] lg:grid-cols-[280px_1fr]">
              <div className="relative min-h-[160px] md:min-h-full">
                <img
                  src="https://images.unsplash.com/photo-1500673922987-e212871fec22?w=800&q=80&auto=format&fit=crop"
                  alt="Copas de árvores atravessadas pela luz"
                  className="h-full w-full object-cover"
                  loading="lazy"
                />
                <div className="absolute inset-0 bg-gradient-to-r from-transparent to-[color:var(--forest)]/70 md:bg-gradient-to-r md:from-transparent md:to-[color:var(--forest)]" />
              </div>
              <div className="p-7 md:p-10 flex flex-col justify-center">
                <h2 className="font-display text-2xl md:text-3xl lg:text-[2rem] font-extrabold leading-tight max-w-2xl">
                  Vamos construir novas possibilidades juntos?
                </h2>
                <p className="mt-3 max-w-xl text-sm md:text-base text-[color:var(--paper)]/85">
                  Participe das atividades, proponha parcerias ou acompanhe de perto as ações desenvolvidas com a comunidade.
                </p>
                <div className="mt-5 flex flex-wrap gap-3">
                  <Link to="/contato" className="inline-flex items-center gap-2 rounded-full bg-[color:var(--ochre)] px-5 py-2.5 text-sm font-semibold text-[color:var(--forest)] hover:brightness-105">
                    Entre em contato <ArrowRight className="h-4 w-4" />
                  </Link>
                  <Link to="/noticias" className="inline-flex items-center gap-2 rounded-full border border-[color:var(--paper)]/50 px-5 py-2.5 text-sm font-semibold text-[color:var(--paper)] hover:bg-[color:var(--paper)]/10">
                    Conheça nossas ações
                  </Link>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
    </>
  );
}
