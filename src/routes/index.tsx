import { createFileRoute, Link } from "@tanstack/react-router";
import { useCallback, useEffect, useRef, useState } from "react";
import {
  ArrowRight,
  ArrowLeft,
  BookOpen,
  Leaf,
  Sprout,
  Library,
  MapPin,
} from "lucide-react";
import { news, site, formatDate } from "@/lib/site-data";
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

// ---------- Hero carousel ----------

type HeroSlide = {
  eyebrow: string;
  title: React.ReactNode;
  text: string;
  extra?: string;
  image: string;
  imageAlt: string;
  primary: { label: string; to: string };
  secondary?: { label: string; to: string };
};

const heroSlides: HeroSlide[] = [
  {
    eyebrow: "Ponto de cultura e educação ambiental",
    title: (
      <>
        Você também faz parte da <span className="text-[color:var(--leaf)]">floresta</span>
      </>
    ),
    text: "A água que chega até nós, os alimentos que cultivamos, os saberes que compartilhamos e a cultura de cada território dependem da relação que construímos com a natureza.",
    extra: "Cuidar do meio ambiente é também cuidar das pessoas, da memória e do futuro.",
    image:
      "https://images.unsplash.com/photo-1441974231531-c6227db76b6e?w=2000&q=80&auto=format&fit=crop",
    imageAlt: "Floresta densa iluminada pela luz que atravessa as copas das árvores",
    primary: { label: "Conheça e participe", to: "/contato" },
    secondary: { label: "Conheça nossa história", to: "/quem-somos" },
  },
  {
    eyebrow: "Educação ambiental",
    title: (
      <>
        Conhecimento que aproxima <span className="text-[color:var(--leaf)]">pessoas</span> e natureza
      </>
    ),
    text: "Oficinas, leituras e vivências que ampliam a percepção sobre o meio ambiente e fortalecem a participação da comunidade.",
    image:
      "https://images.unsplash.com/photo-1518495973542-4542c06a5843?w=2000&q=80&auto=format&fit=crop",
    imageAlt: "Raios de sol atravessando árvores altas em floresta atlântica",
    primary: { label: "Conheça e participe", to: "/contato" },
    secondary: { label: "Nossas ações", to: "/noticias" },
  },
  {
    eyebrow: "Cultura e território",
    title: (
      <>
        Cultura e território construindo <span className="text-[color:var(--leaf)]">novos caminhos</span>
      </>
    ),
    text: "Reconhecemos os saberes locais como parte essencial do cuidado com o meio ambiente e com as futuras gerações.",
    image:
      "https://images.unsplash.com/photo-1470071459604-3b5ec3a7fe05?w=2000&q=80&auto=format&fit=crop",
    imageAlt: "Vista aérea de montanhas cobertas por floresta e neblina",
    primary: { label: "Conheça e participe", to: "/contato" },
    secondary: { label: "Nossa galeria", to: "/galeria" },
  },
];

function HeroCarousel() {
  const [index, setIndex] = useState(0);
  const [paused, setPaused] = useState(false);
  const total = heroSlides.length;

  const go = useCallback(
    (delta: number) => setIndex((i) => (i + delta + total) % total),
    [total],
  );
  const goTo = useCallback((i: number) => setIndex(((i % total) + total) % total), [total]);

  const pausedRef = useRef(paused);
  pausedRef.current = paused;

  useEffect(() => {
    const reduced =
      typeof window !== "undefined" &&
      window.matchMedia("(prefers-reduced-motion: reduce)").matches;
    if (reduced) return;
    const id = window.setInterval(() => {
      if (!pausedRef.current) setIndex((i) => (i + 1) % total);
    }, 7000);
    return () => window.clearInterval(id);
  }, [total]);

  useEffect(() => {
    const onKey = (e: KeyboardEvent) => {
      if (e.key === "ArrowRight") go(1);
      if (e.key === "ArrowLeft") go(-1);
    };
    window.addEventListener("keydown", onKey);
    return () => window.removeEventListener("keydown", onKey);
  }, [go]);

  return (
    <section
      aria-roledescription="carousel"
      aria-label="Destaques do instituto"
      className="relative isolate overflow-hidden"
      onMouseEnter={() => setPaused(true)}
      onMouseLeave={() => setPaused(false)}
      onFocus={() => setPaused(true)}
      onBlur={() => setPaused(false)}
      style={{ height: "clamp(620px, 92vh, 860px)" }}
    >
      {heroSlides.map((s, i) => (
        <div
          key={i}
          role="group"
          aria-roledescription="slide"
          aria-label={`Slide ${i + 1} de ${total}`}
          aria-hidden={i !== index}
          className={`absolute inset-0 transition-opacity duration-1000 ease-out ${
            i === index ? "opacity-100" : "opacity-0 pointer-events-none"
          }`}
        >
          <img
            src={s.image}
            alt={s.imageAlt}
            className="h-full w-full object-cover"
            loading={i === 0 ? "eager" : "lazy"}
          />
          {/* Overlays: top gradient for header + right-side gradient for text */}
          <div className="absolute inset-0 bg-gradient-to-b from-black/50 via-black/15 to-black/40" aria-hidden />
          <div className="absolute inset-0 bg-gradient-to-l from-black/70 via-black/35 to-transparent" aria-hidden />
        </div>
      ))}

      {/* Content column — right */}
      <div className="container-narrow relative z-10 h-full">
        <div className="flex h-full items-center justify-end">
          <div className="w-full max-w-[620px] text-[color:var(--paper)] py-24 md:py-28">
            <p className="text-[11px] md:text-xs font-semibold uppercase tracking-[0.26em] text-[color:var(--leaf)] drop-shadow">
              {heroSlides[index].eyebrow}
            </p>
            <h1 className="mt-4 font-display text-4xl md:text-5xl lg:text-[3.5rem] font-extrabold leading-[1.05] drop-shadow-[0_2px_10px_rgba(0,0,0,0.35)]">
              {heroSlides[index].title}
            </h1>
            <RiverLine className="mt-5 h-4 w-40 text-[color:var(--leaf)]" />
            <p className="mt-5 text-base md:text-lg text-white/90 leading-relaxed drop-shadow">
              {heroSlides[index].text}
            </p>
            {heroSlides[index].extra && (
              <p className="mt-3 text-sm md:text-base text-white/80 italic">
                {heroSlides[index].extra}
              </p>
            )}
            <div className="mt-7 flex flex-wrap gap-3">
              <Link
                to={heroSlides[index].primary.to}
                className="inline-flex items-center gap-2 rounded-full bg-[color:var(--moss)] px-6 py-3 text-sm font-semibold text-white shadow-lg hover:bg-[color:var(--forest)] transition"
              >
                {heroSlides[index].primary.label} <ArrowRight className="h-4 w-4" />
              </Link>
              {heroSlides[index].secondary && (
                <Link
                  to={heroSlides[index].secondary!.to}
                  className="inline-flex items-center gap-2 rounded-full border border-white/70 px-6 py-3 text-sm font-semibold text-white hover:bg-white/10 transition backdrop-blur-sm"
                >
                  {heroSlides[index].secondary!.label}
                </Link>
              )}
            </div>
          </div>
        </div>
      </div>

      {/* Prev / Next arrows */}
      <button
        type="button"
        onClick={() => go(-1)}
        aria-label="Slide anterior"
        className="absolute left-3 md:left-6 top-1/2 -translate-y-1/2 z-20 grid h-11 w-11 md:h-12 md:w-12 place-items-center rounded-full bg-white/15 text-white backdrop-blur hover:bg-white/25 transition"
      >
        <ArrowLeft className="h-5 w-5" />
      </button>
      <button
        type="button"
        onClick={() => go(1)}
        aria-label="Próximo slide"
        className="absolute right-3 md:right-6 top-1/2 -translate-y-1/2 z-20 grid h-11 w-11 md:h-12 md:w-12 place-items-center rounded-full bg-white/15 text-white backdrop-blur hover:bg-white/25 transition"
      >
        <ArrowRight className="h-5 w-5" />
      </button>

      {/* Indicators */}
      <div className="absolute bottom-5 left-1/2 -translate-x-1/2 z-20 flex gap-2">
        {heroSlides.map((_, i) => (
          <button
            key={i}
            type="button"
            onClick={() => goTo(i)}
            aria-label={`Ir para o slide ${i + 1}`}
            aria-current={i === index}
            className={`h-1.5 rounded-full transition-all ${
              i === index ? "w-8 bg-white" : "w-4 bg-white/50 hover:bg-white/80"
            }`}
          />
        ))}
      </div>
    </section>
  );
}

// ---------- Entry panels ----------

const entryPanels = [
  {
    to: "/quem-somos",
    title: "QUEM SOMOS",
    text: "Conheça nossa trajetória, nossos princípios e o trabalho construído com a comunidade.",
    image:
      "https://images.unsplash.com/photo-1500673922987-e212871fec22?w=1400&q=80&auto=format&fit=crop",
    imageAlt: "Copas de árvores atravessadas pela luz filtrada da mata",
    tint: "rgba(160, 82, 45, 0.55)", // terracota suave
  },
  {
    to: "/noticias",
    title: "NOSSAS AÇÕES",
    text: "Descubra atividades que unem cultura, educação ambiental, leitura e participação.",
    image:
      "https://images.unsplash.com/photo-1466692476868-aef1dfb1e735?w=1400&q=80&auto=format&fit=crop",
    imageAlt: "Mãos plantando muda em canteiro de terra fértil",
    tint: "rgba(64, 128, 68, 0.55)", // verde-folha vivo
  },
  {
    to: "/contato",
    title: "FAÇA PARTE",
    text: "Aproxime-se, participe das atividades e ajude a fortalecer essa caminhada.",
    image:
      "https://images.unsplash.com/photo-1523240795612-9a054b0db644?w=1400&q=80&auto=format&fit=crop",
    imageAlt: "Grupo caminhando em trilha rodeada de vegetação",
    tint: "rgba(30, 80, 100, 0.55)", // azul-petróleo
  },
];

function EntryPanels() {
  return (
    <section aria-label="Portas de entrada">
      <div className="grid grid-cols-1 md:grid-cols-3">
        {entryPanels.map((p) => (
          <Link
            key={p.to}
            to={p.to}
            className="group relative overflow-hidden text-white"
            style={{ minHeight: "clamp(360px, 60vh, 640px)" }}
          >
            <img
              src={p.image}
              alt={p.imageAlt}
              className="absolute inset-0 h-full w-full object-cover transition-transform duration-[900ms] ease-out group-hover:scale-105"
              loading="lazy"
            />
            <div
              className="absolute inset-0 transition-opacity duration-500 group-hover:opacity-75"
              style={{ backgroundColor: p.tint }}
              aria-hidden
            />
            <div className="absolute inset-0 bg-gradient-to-t from-black/45 via-transparent to-black/10" aria-hidden />
            <div className="relative z-10 flex h-full min-h-[inherit] flex-col items-center justify-center px-6 py-16 text-center">
              <h3 className="font-display text-xl md:text-2xl font-extrabold tracking-[0.18em] border border-white/70 px-6 py-3">
                {p.title}
              </h3>
              <p className="mt-5 max-w-xs text-sm md:text-base text-white/90 leading-relaxed">
                {p.text}
              </p>
              <span className="mt-6 inline-flex items-center gap-2 text-xs md:text-sm font-semibold uppercase tracking-widest text-white/90 group-hover:text-white">
                Acessar <ArrowRight className="h-4 w-4" />
              </span>
            </div>
          </Link>
        ))}
      </div>
    </section>
  );
}

// ---------- Pillars data ----------

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

// ---------- Gallery highlights ----------

const galleryHighlights = {
  main: {
    image:
      "https://images.unsplash.com/photo-1518495973542-4542c06a5843?w=1600&q=80&auto=format&fit=crop",
    alt: "Registro amplo de oficina de educação ambiental em área de mata",
    title: "Oficina de Educação Ambiental",
    year: "2026",
    count: 24,
  },
  side: [
    {
      image:
        "https://images.unsplash.com/photo-1481627834876-b7833e8f5570?w=900&q=80&auto=format&fit=crop",
      alt: "Encontro literário em espaço aberto com livros e leitores",
      title: "Biblioteca na Praça",
      year: "2026",
      count: 18,
    },
    {
      image:
        "https://images.unsplash.com/photo-1466692476868-aef1dfb1e735?w=900&q=80&auto=format&fit=crop",
      alt: "Plantio comunitário com mãos cuidando de mudas",
      title: "Plantio Comunitário",
      year: "2025",
      count: 32,
    },
  ],
};

function HomePage() {
  useReveal();
  const latestNews = news.slice(0, 4);
  const [featured, ...restNews] = latestNews;

  return (
    <>
      {/* 1. HERO CAROUSEL — imersivo, fotografia de floresta */}
      <HeroCarousel />

      {/* 2. TRÊS PAINÉIS — portas de entrada */}
      <EntryPanels />

      {/* 3. APRESENTAÇÃO INSTITUCIONAL */}
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

      {/* 4. O QUE ORIENTA NOSSA CAMINHADA — composição sóbria e integrada */}
      <section className="section-y bg-[color:var(--paper)] paper-texture relative overflow-hidden">
        <div className="container-narrow relative">
          <div className="max-w-2xl reveal">
            <p className="text-xs font-semibold uppercase tracking-[0.24em] text-[color:var(--moss)]">O que orienta nossa caminhada</p>
            <h2 className="mt-2 font-display text-3xl md:text-4xl font-extrabold text-[color:var(--forest)] leading-tight">
              Três raízes que sustentam nosso trabalho
            </h2>
          </div>

          <div className="reveal mt-12 rounded-3xl bg-background/70 backdrop-blur-sm ring-1 ring-[color:var(--moss)]/15 shadow-sm">
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

      {/* 5. UMA TRAJETÓRIA CONTADA POR IMAGENS — condução para a Galeria */}
      <section className="section-y relative overflow-hidden bg-background">
        <BranchLine className="pointer-events-none absolute -left-6 top-12 hidden h-40 w-40 text-[color:var(--moss)]/20 md:block" />
        <div className="container-narrow relative">
          <div className="grid gap-10 lg:grid-cols-[1fr_1.15fr] lg:items-end">
            <div className="reveal">
              <p className="text-[11px] font-semibold uppercase tracking-[0.24em] text-[color:var(--moss)]">
                <span className="mr-2 text-[color:var(--ochre)]">— 05</span> Registros
              </p>
              <h2 className="mt-2 font-display text-3xl md:text-4xl lg:text-5xl font-extrabold text-[color:var(--forest)] leading-tight">
                Uma trajetória contada por imagens
              </h2>
              <RiverLine className="mt-4 h-4 w-40 text-[color:var(--ochre)]" />
              <p className="mt-5 max-w-lg text-base md:text-lg text-muted-foreground">
                Cada encontro, oficina e ação deixa registros que ajudam a preservar a memória do trabalho realizado com a comunidade.
              </p>
              <Link
                to="/galeria"
                className="mt-6 inline-flex items-center gap-2 rounded-full bg-[color:var(--forest)] px-6 py-3 text-sm font-semibold text-[color:var(--paper)] hover:bg-[color:var(--moss)] transition"
              >
                Conheça nossa galeria <ArrowRight className="h-4 w-4" />
              </Link>
            </div>

            <div className="reveal grid grid-cols-6 gap-4">
              {/* Main image */}
              <Link
                to="/galeria"
                className="group relative col-span-6 md:col-span-4 overflow-hidden rounded-3xl shadow-lg"
              >
                <div className="aspect-[4/3]">
                  <img
                    src={galleryHighlights.main.image}
                    alt={galleryHighlights.main.alt}
                    className="h-full w-full object-cover transition duration-700 group-hover:scale-105"
                    loading="lazy"
                  />
                </div>
                <div className="absolute inset-x-0 bottom-0 bg-gradient-to-t from-black/70 to-transparent p-5 text-white">
                  <p className="text-[10px] font-semibold uppercase tracking-widest text-[color:var(--leaf)]">
                    {galleryHighlights.main.year} · {galleryHighlights.main.count} fotos
                  </p>
                  <h3 className="mt-1 font-display text-lg md:text-xl font-bold">
                    {galleryHighlights.main.title}
                  </h3>
                </div>
              </Link>
              {/* Side images */}
              {galleryHighlights.side.map((s) => (
                <Link
                  key={s.title}
                  to="/galeria"
                  className="group relative col-span-3 md:col-span-2 overflow-hidden rounded-2xl shadow"
                >
                  <div className="aspect-[4/3] md:aspect-[3/4]">
                    <img
                      src={s.image}
                      alt={s.alt}
                      className="h-full w-full object-cover transition duration-700 group-hover:scale-105"
                      loading="lazy"
                    />
                  </div>
                  <div className="absolute inset-x-0 bottom-0 bg-gradient-to-t from-black/70 to-transparent p-4 text-white">
                    <p className="text-[10px] font-semibold uppercase tracking-widest text-[color:var(--leaf)]">
                      {s.year} · {s.count} fotos
                    </p>
                    <h4 className="mt-1 font-display text-sm md:text-base font-bold leading-tight">
                      {s.title}
                    </h4>
                  </div>
                </Link>
              ))}
            </div>
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

      {/* 7. NOTÍCIAS — Histórias que continuam sendo escritas */}
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

      {/* 8. CTA FINAL — compacto */}
      <section className="pb-10 pt-6 md:pt-10 md:pb-14">
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
