import { createFileRoute } from "@tanstack/react-router";
import { useEffect, useMemo, useRef, useState } from "react";
import { PageHero } from "@/components/layout/PageHero";
import { LeafDivider, RiverLine, TopoRings, BranchLine } from "@/components/OrganicShapes";
import { useReveal } from "@/hooks/use-reveal";
import { albums } from "@/lib/site-data";
import { Calendar, MapPin, Images, ArrowRight, ArrowLeft, X, ChevronDown } from "lucide-react";

export const Route = createFileRoute("/galeria/")({
  head: () => ({
    meta: [
      { title: "Galeria de Fotos — Instituto Raízes do Futuro" },
      { name: "description", content: "Registros das ações, encontros e projetos organizados por ano." },
      { property: "og:title", content: "Galeria de Fotos" },
      { property: "og:description", content: "Imagens que registram nossas ações no território." },
      { property: "og:url", content: "/galeria" },
    ],
    links: [{ rel: "canonical", href: "/galeria" }],
  }),
  component: GaleriaPage,
});

type Album = (typeof albums)[number];

function GaleriaPage() {
  useReveal();

  const years = useMemo(
    () => Array.from(new Set(albums.map((a) => a.year))).sort((a, b) => b.localeCompare(a)),
    [],
  );
  const [year, setYear] = useState(years[0]);
  const [openSlug, setOpenSlug] = useState<string | null>(null);
  const [lightbox, setLightbox] = useState<number | null>(null);
  const albumRef = useRef<HTMLDivElement | null>(null);
  const scrollYRef = useRef(0);

  const yearAlbums = albums.filter((a) => a.year === year);
  const openAlbum: Album | undefined = yearAlbums.find((a) => a.slug === openSlug);

  // Switching years closes any open album
  useEffect(() => {
    setOpenSlug(null);
  }, [year]);

  // Scroll to open album
  useEffect(() => {
    if (openSlug && albumRef.current) {
      requestAnimationFrame(() =>
        albumRef.current?.scrollIntoView({ behavior: "smooth", block: "start" }),
      );
    }
  }, [openSlug]);

  // Lightbox keyboard nav + scroll lock
  useEffect(() => {
    if (lightbox === null || !openAlbum) return;
    scrollYRef.current = window.scrollY;
    document.body.style.overflow = "hidden";
    const onKey = (e: KeyboardEvent) => {
      if (e.key === "Escape") setLightbox(null);
      if (e.key === "ArrowRight") setLightbox((i) => (i === null ? null : (i + 1) % openAlbum.photos.length));
      if (e.key === "ArrowLeft") setLightbox((i) => (i === null ? null : (i - 1 + openAlbum.photos.length) % openAlbum.photos.length));
    };
    document.addEventListener("keydown", onKey);
    return () => {
      document.removeEventListener("keydown", onKey);
      document.body.style.overflow = "";
      window.scrollTo({ top: scrollYRef.current });
    };
  }, [lightbox, openAlbum]);

  return (
    <>
      <PageHero
        eyebrow="Galeria"
        title="O território em imagens"
        description="Registros das ações, encontros, oficinas, plantios e projetos culturais realizados junto com as comunidades."
        image="https://images.unsplash.com/photo-1523240795612-9a054b0db644?w=2000&q=80&auto=format&fit=crop"
        crumbs={[{ to: "/", label: "Início" }, { label: "Galeria" }]}
      />

      {/* Year selector */}
      <section className="relative bg-[color:var(--forest)] text-[color:var(--paper)]">
        <TopoRings className="pointer-events-none absolute -top-40 -right-40 h-[500px] w-[500px] text-[color:var(--leaf)]/20" />
        <div className="container-narrow relative py-10">
          <div className="flex items-center gap-3">
            <RiverLine className="h-4 w-24 text-[color:var(--ochre)]" />
            <p className="text-xs font-semibold uppercase tracking-[0.24em] text-[color:var(--leaf)]">Selecione o ano</p>
          </div>
          <div
            role="tablist"
            aria-label="Selecionar ano da galeria"
            className="mt-5 flex gap-2 overflow-x-auto pb-2 -mx-1 px-1 snap-x"
          >
            {years.map((y) => {
              const active = y === year;
              return (
                <button
                  key={y}
                  role="tab"
                  aria-selected={active}
                  tabIndex={active ? 0 : -1}
                  onClick={() => setYear(y)}
                  onKeyDown={(e) => {
                    if (e.key === "ArrowRight" || e.key === "ArrowLeft") {
                      e.preventDefault();
                      const idx = years.indexOf(y);
                      const next = e.key === "ArrowRight" ? (idx + 1) % years.length : (idx - 1 + years.length) % years.length;
                      setYear(years[next]);
                    }
                  }}
                  className={`snap-start shrink-0 rounded-full px-6 py-3 font-display text-lg font-bold transition ${
                    active
                      ? "bg-[color:var(--ochre)] text-[color:var(--forest)] shadow-lg scale-105"
                      : "border border-[color:var(--paper)]/25 text-[color:var(--paper)]/80 hover:bg-[color:var(--paper)]/10"
                  }`}
                >
                  {y}
                </button>
              );
            })}
          </div>
        </div>
        <LeafDivider color="var(--background)" />
      </section>

      {/* Albums grid */}
      <section className="section-y">
        <div className="container-narrow">
          <div className="flex items-baseline justify-between reveal">
            <h2 className="font-display text-3xl md:text-4xl font-extrabold text-[color:var(--forest)]">
              Registros de {year}
            </h2>
            <span className="text-sm text-muted-foreground">
              {yearAlbums.length} {yearAlbums.length === 1 ? "álbum" : "álbuns"}
            </span>
          </div>

          {yearAlbums.length === 0 ? (
            <p className="mt-8 text-muted-foreground">Nenhum álbum registrado para este ano ainda.</p>
          ) : (
            <div className="mt-10 grid gap-8 md:grid-cols-2 lg:grid-cols-3">
              {yearAlbums.map((a, i) => {
                const active = a.slug === openSlug;
                return (
                  <article key={a.slug} className={`reveal group overflow-hidden rounded-3xl border bg-card shadow-sm transition hover:-translate-y-0.5 hover:shadow-lg ${active ? "ring-2 ring-[color:var(--moss)]" : ""}`}>
                    <button
                      type="button"
                      aria-expanded={active}
                      aria-controls="album-panel"
                      onClick={() => setOpenSlug(active ? null : a.slug)}
                      className="text-left w-full"
                    >
                      <div className={`aspect-[4/3] overflow-hidden ${i % 3 === 0 ? "organic-blob-3" : ""}`}>
                        <img src={a.cover} alt={a.title} className="h-full w-full object-cover transition duration-700 group-hover:scale-105" loading="lazy" />
                      </div>
                      <div className="p-5">
                        <p className="text-[11px] text-muted-foreground flex flex-wrap gap-x-3 gap-y-1">
                          <span className="inline-flex items-center gap-1"><Calendar className="h-3.5 w-3.5" /> {a.date}</span>
                          <span className="inline-flex items-center gap-1"><MapPin className="h-3.5 w-3.5" /> {a.place}</span>
                        </p>
                        <h3 className="mt-2 font-display text-xl font-bold text-[color:var(--forest)]">{a.title}</h3>
                        <p className="mt-1 text-xs uppercase tracking-widest text-[color:var(--moss)]">{a.project}</p>
                        <div className="mt-4 flex items-center justify-between text-sm">
                          <span className="inline-flex items-center gap-1 text-muted-foreground"><Images className="h-3.5 w-3.5" /> {a.photos.length} fotos</span>
                          <span className={`inline-flex items-center gap-1 font-semibold text-[color:var(--forest)] transition ${active ? "rotate-180" : ""}`}>
                            {active ? "Fechar" : "Ver fotos"} <ChevronDown className="h-4 w-4" />
                          </span>
                        </div>
                      </div>
                    </button>
                  </article>
                );
              })}
            </div>
          )}

          {/* Expandable album panel — same page */}
          {openAlbum && (
            <div
              id="album-panel"
              ref={albumRef}
              className="mt-14 rounded-[2rem] bg-[color:var(--paper)] paper-texture p-6 md:p-10 shadow-inner relative overflow-hidden fade-up"
              role="region"
              aria-label={`Fotos do álbum ${openAlbum.title}`}
            >
              <BranchLine className="pointer-events-none absolute -top-2 -right-2 h-24 w-24 text-[color:var(--moss)]/40" />
              <div className="flex flex-wrap items-start justify-between gap-4">
                <div>
                  <p className="text-xs font-semibold uppercase tracking-[0.24em] text-[color:var(--moss)]">Álbum</p>
                  <h3 className="mt-1 font-display text-3xl md:text-4xl font-extrabold text-[color:var(--forest)]">{openAlbum.title}</h3>
                  <RiverLine className="mt-3 h-4 w-32 text-[color:var(--ochre)]" />
                  <p className="mt-3 max-w-2xl text-sm md:text-base text-muted-foreground">{openAlbum.description}</p>
                  <p className="mt-3 text-xs text-muted-foreground flex flex-wrap gap-x-4 gap-y-1">
                    <span className="inline-flex items-center gap-1"><Calendar className="h-3.5 w-3.5" /> {openAlbum.date}</span>
                    <span className="inline-flex items-center gap-1"><MapPin className="h-3.5 w-3.5" /> {openAlbum.place}</span>
                    <span className="inline-flex items-center gap-1"><Images className="h-3.5 w-3.5" /> {openAlbum.photos.length} fotos</span>
                  </p>
                </div>
                <button
                  type="button"
                  onClick={() => setOpenSlug(null)}
                  className="inline-flex items-center gap-2 rounded-full bg-[color:var(--forest)] px-4 py-2 text-sm font-semibold text-[color:var(--paper)] hover:bg-[color:var(--moss)]"
                >
                  <X className="h-4 w-4" /> Fechar álbum
                </button>
              </div>

              <div className="mt-8 grid gap-3 grid-cols-2 md:grid-cols-3 lg:grid-cols-4">
                {openAlbum.photos.map((src: string, i: number) => (
                  <button
                    key={i}
                    type="button"
                    onClick={() => setLightbox(i)}
                    className="group aspect-square overflow-hidden rounded-2xl border bg-background focus:outline-none focus-visible:ring-2 focus-visible:ring-[color:var(--moss)]"
                    aria-label={`Abrir foto ${i + 1} de ${openAlbum.photos.length}`}
                  >
                    <img
                      src={src}
                      alt={`${openAlbum.title} — foto ${i + 1}`}
                      className="h-full w-full object-cover transition duration-500 group-hover:scale-105"
                      loading="lazy"
                    />
                  </button>
                ))}
              </div>
            </div>
          )}
        </div>
      </section>

      {/* Lightbox */}
      {lightbox !== null && openAlbum && (
        <div
          role="dialog"
          aria-modal="true"
          aria-label={`Foto ${lightbox + 1} de ${openAlbum.photos.length} — ${openAlbum.title}`}
          className="fixed inset-0 z-50 grid place-items-center bg-black/92 p-4"
        >
          <button type="button" aria-label="Fechar" onClick={() => setLightbox(null)} className="absolute top-4 right-4 rounded-full bg-white/10 p-2 text-white hover:bg-white/20">
            <X className="h-5 w-5" />
          </button>
          <button type="button" aria-label="Foto anterior" onClick={() => setLightbox((i) => (i === null ? null : (i - 1 + openAlbum.photos.length) % openAlbum.photos.length))} className="absolute left-4 top-1/2 -translate-y-1/2 rounded-full bg-white/10 p-3 text-white hover:bg-white/20">
            <ArrowLeft className="h-5 w-5" />
          </button>
          <button type="button" aria-label="Próxima foto" onClick={() => setLightbox((i) => (i === null ? null : (i + 1) % openAlbum.photos.length))} className="absolute right-4 top-1/2 -translate-y-1/2 rounded-full bg-white/10 p-3 text-white hover:bg-white/20">
            <ArrowRight className="h-5 w-5" />
          </button>
          <div className="max-w-6xl w-full">
            <img
              src={openAlbum.photos[lightbox]}
              alt={`${openAlbum.title} — foto ${lightbox + 1}`}
              className="mx-auto max-h-[82vh] w-auto rounded-lg shadow-2xl"
            />
            <p className="mt-4 text-center text-sm text-white/85">
              {openAlbum.title} · {lightbox + 1} de {openAlbum.photos.length}
            </p>
          </div>
        </div>
      )}
    </>
  );
}
