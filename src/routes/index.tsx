import { createFileRoute, Link } from "@tanstack/react-router";
import { ArrowRight, TreePine, BookOpen, Users, MapPin, Leaf, Sprout, Library, Sun, HeartHandshake, Palette, Handshake, ArrowUpRight } from "lucide-react";
import { frentes, impact, news, partners, projects, site, formatDate } from "@/lib/site-data";

export const Route = createFileRoute("/")({
  head: () => ({
    meta: [
      { title: "Instituto Raízes do Futuro — Cultura, educação e natureza" },
      { name: "description", content: "Ponto de Cultura dedicado à educação ambiental, à leitura e à valorização dos saberes comunitários." },
      { property: "og:title", content: "Instituto Raízes do Futuro" },
      { property: "og:description", content: "Cultura, educação ambiental e participação comunitária." },
      { property: "og:url", content: "/" },
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
  const latestNews = news.slice(0, 3);
  return (
    <>
      {/* HERO */}
      <section className="relative isolate overflow-hidden">
        <div className="absolute inset-0 -z-10">
          <img
            src="https://images.unsplash.com/photo-1500673922987-e212871fec22?w=2000&q=80&auto=format&fit=crop"
            alt=""
            aria-hidden
            className="h-full w-full object-cover"
          />
          <div className="absolute inset-0 bg-gradient-to-br from-[color:var(--forest)]/90 via-[color:var(--forest)]/75 to-[color:var(--forest)]/60" />
        </div>
        <div className="container-narrow py-24 md:py-36 text-[color:var(--paper)]">
          <span className="inline-flex items-center gap-2 rounded-full bg-[color:var(--paper)]/10 border border-[color:var(--paper)]/25 px-3 py-1 text-xs uppercase tracking-[0.18em]">
            <Leaf className="h-3.5 w-3.5" aria-hidden /> Ponto de Cultura e Educação Ambiental
          </span>
          <h1 className="mt-5 font-display text-4xl md:text-6xl font-bold leading-[1.05] max-w-4xl">
            Cultura, educação e natureza transformando territórios
          </h1>
          <p className="mt-5 max-w-2xl text-lg text-[color:var(--paper)]/90">
            Somos um Ponto de Cultura dedicado à educação ambiental, à valorização dos saberes comunitários e à construção de uma relação mais consciente entre as pessoas e o meio ambiente.
          </p>
          <div className="mt-8 flex flex-wrap gap-3">
            <Link to="/quem-somos" className="inline-flex items-center gap-2 rounded-full bg-[color:var(--paper)] px-6 py-3 text-sm font-semibold text-[color:var(--forest)] hover:bg-[color:var(--leaf)]">
              Conheça nossa história <ArrowRight className="h-4 w-4" />
            </Link>
            <Link to="/noticias" className="inline-flex items-center gap-2 rounded-full border border-[color:var(--paper)]/50 px-6 py-3 text-sm font-semibold text-[color:var(--paper)] hover:bg-[color:var(--paper)]/10">
              Veja nossos projetos
            </Link>
          </div>
        </div>
        {/* Organic hill silhouette */}
        <svg viewBox="0 0 1440 80" className="block w-full h-10 -mt-1 text-background" aria-hidden preserveAspectRatio="none">
          <path d="M0 80 L0 40 C 180 10 380 60 720 30 C 1060 0 1280 55 1440 30 L 1440 80 Z" fill="currentColor" />
        </svg>
      </section>

      {/* 2. APRESENTAÇÃO INSTITUCIONAL */}
      <section className="section-y">
        <div className="container-narrow grid gap-10 lg:grid-cols-2 lg:items-center">
          <div className="relative">
            <img
              src="https://images.unsplash.com/photo-1466692476868-aef1dfb1e735?w=1200&q=80&auto=format&fit=crop"
              alt="Educadores e comunidade em atividade ambiental"
              className="rounded-2xl object-cover h-[420px] w-full"
              loading="lazy"
            />
            <div className="absolute -bottom-6 -right-6 hidden md:block rounded-2xl bg-[color:var(--forest)] text-[color:var(--paper)] p-5 shadow-xl max-w-[220px]">
              <p className="text-3xl font-display font-bold">+15</p>
              <p className="text-xs uppercase tracking-widest opacity-85">anos cultivando território</p>
            </div>
          </div>
          <div>
            <p className="text-xs font-semibold uppercase tracking-[0.2em] text-[color:var(--moss)]">Quem somos</p>
            <h2 className="mt-2 font-display text-3xl md:text-4xl font-bold text-[color:var(--forest)]">
              Um espaço onde cultura e meio ambiente caminham juntos
            </h2>
            <p className="mt-4 text-base text-muted-foreground">
              O {site.name} desenvolve ações culturais e educativas que aproximam comunidades, escolas, artistas, educadores e agentes ambientais. Por meio de oficinas, projetos de leitura, atividades ao ar livre e iniciativas de preservação, fortalecemos vínculos e incentivamos o cuidado coletivo com o território.
            </p>
            <Link to="/quem-somos" className="mt-6 inline-flex items-center gap-2 rounded-full bg-[color:var(--forest)] px-5 py-2.5 text-sm font-semibold text-[color:var(--paper)] hover:bg-[color:var(--moss)]">
              Conheça o Ponto de Cultura <ArrowRight className="h-4 w-4" />
            </Link>
          </div>
        </div>
      </section>

      {/* 3. NÚMEROS DE IMPACTO */}
      <section className="bg-[color:var(--leaf)]/60 border-y border-[color:var(--moss)]/20">
        <div className="container-narrow py-14 grid gap-6 sm:grid-cols-2 lg:grid-cols-4">
          {impact.map((it) => {
            const Icon = ICON_MAP[it.icon];
            return (
              <div key={it.label} className="flex items-start gap-4">
                <span className="grid h-12 w-12 shrink-0 place-items-center rounded-full bg-[color:var(--forest)] text-[color:var(--paper)]">
                  <Icon className="h-5 w-5" aria-hidden />
                </span>
                <div>
                  <p className="font-display text-3xl font-bold text-[color:var(--forest)]">{it.value}{it.suffix}</p>
                  <p className="text-sm text-[color:var(--forest)]/80">{it.label}</p>
                </div>
              </div>
            );
          })}
        </div>
      </section>

      {/* 4. FRENTES DE ATUAÇÃO */}
      <section className="section-y">
        <div className="container-narrow">
          <div className="max-w-2xl">
            <p className="text-xs font-semibold uppercase tracking-[0.2em] text-[color:var(--moss)]">O que fazemos</p>
            <h2 className="mt-2 font-display text-3xl md:text-4xl font-bold text-[color:var(--forest)]">Nossas frentes de atuação</h2>
            <p className="mt-3 text-muted-foreground">Ações permanentes que articulam cultura, educação, território e meio ambiente.</p>
          </div>
          <div className="mt-10 grid gap-5 sm:grid-cols-2 lg:grid-cols-4">
            {frentes.map((f, i) => {
              const Icon = FRENTE_ICONS[i % FRENTE_ICONS.length];
              return (
                <article key={f.slug} className="group rounded-2xl border bg-card p-5 shadow-sm transition hover:-translate-y-0.5 hover:shadow-md">
                  <span className="grid h-11 w-11 place-items-center rounded-xl bg-[color:var(--leaf)] text-[color:var(--forest)]">
                    <Icon className="h-5 w-5" aria-hidden />
                  </span>
                  <h3 className="mt-4 font-display text-lg font-semibold text-[color:var(--forest)]">{f.title}</h3>
                  <p className="mt-1.5 text-sm text-muted-foreground">{f.desc}</p>
                  <Link to="/quem-somos" className="mt-4 inline-flex items-center gap-1 text-sm font-semibold text-[color:var(--moss)] hover:text-[color:var(--forest)]">
                    Saiba mais <ArrowRight className="h-3.5 w-3.5" />
                  </Link>
                </article>
              );
            })}
          </div>
        </div>
      </section>

      {/* 5. PROJETOS EM DESTAQUE */}
      <section className="section-y bg-[color:var(--paper)]">
        <div className="container-narrow">
          <div className="flex flex-wrap items-end justify-between gap-4">
            <div className="max-w-2xl">
              <p className="text-xs font-semibold uppercase tracking-[0.2em] text-[color:var(--moss)]">Projetos</p>
              <h2 className="mt-2 font-display text-3xl md:text-4xl font-bold text-[color:var(--forest)]">Projetos que cultivam novas possibilidades</h2>
            </div>
          </div>
          <div className="mt-10 grid gap-6 md:grid-cols-3">
            {projects.map((p) => (
              <article key={p.slug} className="group overflow-hidden rounded-2xl border bg-card shadow-sm transition hover:-translate-y-0.5 hover:shadow-md">
                <div className="aspect-[4/3] overflow-hidden">
                  <img src={p.image} alt={p.title} className="h-full w-full object-cover transition group-hover:scale-105" loading="lazy" />
                </div>
                <div className="p-5">
                  <p className="text-xs font-semibold uppercase tracking-widest text-[color:var(--moss)]">{p.category}</p>
                  <h3 className="mt-2 font-display text-xl font-bold text-[color:var(--forest)]">{p.title}</h3>
                  <p className="mt-2 text-sm text-muted-foreground">{p.desc}</p>
                  <Link to="/noticias" className="mt-4 inline-flex items-center gap-1 text-sm font-semibold text-[color:var(--forest)]">
                    Conheça o projeto <ArrowRight className="h-3.5 w-3.5" />
                  </Link>
                </div>
              </article>
            ))}
          </div>
        </div>
      </section>

      {/* 6. BIBLIOTECA */}
      <section className="section-y">
        <div className="container-narrow grid gap-10 lg:grid-cols-2 lg:items-center">
          <div>
            <p className="text-xs font-semibold uppercase tracking-[0.2em] text-[color:var(--moss)]">Biblioteca Verde</p>
            <h2 className="mt-2 font-display text-3xl md:text-4xl font-bold text-[color:var(--forest)]">Conhecimento para cuidar do presente e construir o futuro</h2>
            <p className="mt-4 text-muted-foreground">
              Nosso acervo ambiental e cultural reúne publicações, cartilhas, pesquisas, materiais pedagógicos e literatura sobre biodiversidade, saberes tradicionais e território. Um espaço aberto de leitura, escuta e formação.
            </p>
            <ul className="mt-5 grid grid-cols-2 gap-3 text-sm">
              <li className="flex items-center gap-2"><BookOpen className="h-4 w-4 text-[color:var(--moss)]" /> Publicações</li>
              <li className="flex items-center gap-2"><Library className="h-4 w-4 text-[color:var(--moss)]" /> Cartilhas</li>
              <li className="flex items-center gap-2"><Leaf className="h-4 w-4 text-[color:var(--moss)]" /> Pesquisas</li>
              <li className="flex items-center gap-2"><Sprout className="h-4 w-4 text-[color:var(--moss)]" /> Material pedagógico</li>
            </ul>
            <Link to="/galeria" className="mt-6 inline-flex items-center gap-2 rounded-full bg-[color:var(--forest)] px-5 py-2.5 text-sm font-semibold text-[color:var(--paper)] hover:bg-[color:var(--moss)]">
              Conheça nosso acervo <ArrowRight className="h-4 w-4" />
            </Link>
          </div>
          <div className="relative">
            <img
              src="https://images.unsplash.com/photo-1481627834876-b7833e8f5570?w=1200&q=80&auto=format&fit=crop"
              alt="Estantes da biblioteca comunitária"
              className="rounded-2xl object-cover h-[460px] w-full"
              loading="lazy"
            />
          </div>
        </div>
      </section>

      {/* 7. NOTÍCIAS */}
      <section className="section-y bg-[color:var(--leaf)]/40">
        <div className="container-narrow">
          <div className="flex flex-wrap items-end justify-between gap-4">
            <div>
              <p className="text-xs font-semibold uppercase tracking-[0.2em] text-[color:var(--moss)]">Comunicação</p>
              <h2 className="mt-2 font-display text-3xl md:text-4xl font-bold text-[color:var(--forest)]">Notícias e acontecimentos</h2>
            </div>
            <Link to="/noticias" className="inline-flex items-center gap-1 text-sm font-semibold text-[color:var(--forest)]">
              Ver todas as notícias <ArrowRight className="h-4 w-4" />
            </Link>
          </div>
          <div className="mt-10 grid gap-6 md:grid-cols-3">
            {latestNews.map((n) => (
              <article key={n.slug} className="group overflow-hidden rounded-2xl border bg-card shadow-sm transition hover:-translate-y-0.5 hover:shadow-md">
                <Link to="/noticias/$slug" params={{ slug: n.slug }} className="block">
                  <div className="aspect-[16/10] overflow-hidden">
                    <img src={n.cover} alt={n.title} className="h-full w-full object-cover transition group-hover:scale-105" loading="lazy" />
                  </div>
                  <div className="p-5">
                    <div className="flex items-center gap-2 text-xs text-muted-foreground">
                      <span className="rounded-full bg-[color:var(--leaf)] text-[color:var(--forest)] px-2 py-0.5 font-semibold">{n.category}</span>
                      <span>{formatDate(n.date)}</span>
                    </div>
                    <h3 className="mt-3 font-display text-lg font-semibold text-[color:var(--forest)] line-clamp-2">{n.title}</h3>
                    <p className="mt-1.5 text-sm text-muted-foreground line-clamp-3">{n.excerpt}</p>
                    <span className="mt-4 inline-flex items-center gap-1 text-sm font-semibold text-[color:var(--moss)]">Leia a notícia <ArrowRight className="h-3.5 w-3.5" /></span>
                  </div>
                </Link>
              </article>
            ))}
          </div>
        </div>
      </section>

      {/* 8. GALERIA EM DESTAQUE */}
      <GalleryPreview />

      {/* 9. CHAMADA PARA PARTICIPAÇÃO */}
      <section className="relative isolate overflow-hidden">
        <div className="absolute inset-0 -z-10">
          <img src="https://images.unsplash.com/photo-1441974231531-c6227db76b6e?w=2000&q=80&auto=format&fit=crop" alt="" aria-hidden className="h-full w-full object-cover" />
          <div className="absolute inset-0 bg-[color:var(--forest)]/85" />
        </div>
        <div className="container-narrow py-20 text-center text-[color:var(--paper)]">
          <h2 className="font-display text-3xl md:text-4xl font-bold max-w-3xl mx-auto">Cada pessoa pode fazer parte desta transformação</h2>
          <p className="mt-4 max-w-2xl mx-auto text-[color:var(--paper)]/90">
            Participe das nossas ações, acompanhe os projetos e ajude a fortalecer a cultura e o cuidado com o meio ambiente.
          </p>
          <div className="mt-7 flex flex-wrap justify-center gap-3">
            <Link to="/contato" className="inline-flex items-center rounded-full bg-[color:var(--paper)] px-6 py-3 text-sm font-semibold text-[color:var(--forest)] hover:bg-[color:var(--leaf)]">Entre em contato</Link>
            <a href={`https://wa.me/${site.whatsapp}?text=${encodeURIComponent(site.whatsappMessage)}`} target="_blank" rel="noreferrer noopener" className="inline-flex items-center rounded-full border border-[color:var(--paper)]/60 px-6 py-3 text-sm font-semibold text-[color:var(--paper)] hover:bg-[color:var(--paper)]/10">Fale pelo WhatsApp</a>
          </div>
        </div>
      </section>

      {/* 10. PARCEIROS */}
      <section className="section-y">
        <div className="container-narrow">
          <div className="flex items-center gap-3 justify-center flex-col text-center">
            <Handshake className="h-6 w-6 text-[color:var(--moss)]" />
            <p className="text-xs font-semibold uppercase tracking-[0.2em] text-[color:var(--moss)]">Rede</p>
            <h2 className="font-display text-3xl md:text-4xl font-bold text-[color:var(--forest)]">Quem caminha conosco</h2>
          </div>
          <div className="mt-10 grid gap-6 grid-cols-2 md:grid-cols-3 lg:grid-cols-6 items-center">
            {partners.map((p) => (
              <div key={p} className="flex items-center justify-center rounded-lg border bg-card p-4 h-20 text-sm font-semibold text-muted-foreground grayscale opacity-70 hover:opacity-100 hover:grayscale-0 hover:text-[color:var(--forest)] transition">
                {p}
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* 11. NEWSLETTER */}
      <section className="bg-[color:var(--paper)] border-t">
        <div className="container-narrow py-14 grid gap-8 md:grid-cols-2 md:items-center">
          <div>
            <h2 className="font-display text-2xl md:text-3xl font-bold text-[color:var(--forest)]">Receba nossas novidades</h2>
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
            <button type="submit" className="inline-flex items-center justify-center gap-2 rounded-full bg-[color:var(--forest)] px-5 py-2.5 text-sm font-semibold text-[color:var(--paper)] hover:bg-[color:var(--moss)] w-fit">
              Quero receber <ArrowUpRight className="h-4 w-4" />
            </button>
          </form>
        </div>
      </section>
    </>
  );
}

function GalleryPreview() {
  const featured = [
    "https://images.unsplash.com/photo-1500673922987-e212871fec22?w=800&q=80&auto=format&fit=crop",
    "https://images.unsplash.com/photo-1466692476868-aef1dfb1e735?w=800&q=80&auto=format&fit=crop",
    "https://images.unsplash.com/photo-1523240795612-9a054b0db644?w=800&q=80&auto=format&fit=crop",
    "https://images.unsplash.com/photo-1518709268805-4e9042af2176?w=800&q=80&auto=format&fit=crop",
    "https://images.unsplash.com/photo-1481627834876-b7833e8f5570?w=800&q=80&auto=format&fit=crop",
    "https://images.unsplash.com/photo-1512820790803-83ca734da794?w=800&q=80&auto=format&fit=crop",
  ];
  return (
    <section className="section-y">
      <div className="container-narrow">
        <div className="flex flex-wrap items-end justify-between gap-4">
          <div>
            <p className="text-xs font-semibold uppercase tracking-[0.2em] text-[color:var(--moss)]">Galeria</p>
            <h2 className="mt-2 font-display text-3xl md:text-4xl font-bold text-[color:var(--forest)]">Registros da nossa caminhada</h2>
            <p className="mt-2 text-sm text-muted-foreground">Semana do Meio Ambiente — 2026</p>
          </div>
          <Link to="/galeria" className="inline-flex items-center gap-1 text-sm font-semibold text-[color:var(--forest)]">Ver galeria completa <ArrowRight className="h-4 w-4" /></Link>
        </div>
        <div className="mt-8 grid gap-3 grid-cols-2 md:grid-cols-3">
          {featured.map((src, i) => (
            <div key={i} className="aspect-[4/3] overflow-hidden rounded-xl">
              <img src={src} alt="" aria-hidden className="h-full w-full object-cover transition hover:scale-105" loading="lazy" />
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
