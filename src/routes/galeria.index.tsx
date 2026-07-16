import { createFileRoute } from "@tanstack/react-router";
import { useMemo, useState } from "react";
import { PageHero } from "@/components/layout/PageHero";
import { LeafDivider, RiverLine, TopoRings } from "@/components/OrganicShapes";
import { useReveal } from "@/hooks/use-reveal";
import { albums } from "@/lib/site-data";
import { Lightbox } from "@/components/ui/Lightbox";
import { Calendar, MapPin, Images, Tag } from "lucide-react";

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

const YEAR_BUCKETS = ["2026", "2025", "2024", "2023", "2022"] as const;

function GaleriaPage() {
  useReveal();

  const availableYears = useMemo(() => Array.from(new Set(albums.map((a) => a.year))), []);
  const yearsList = useMemo(() => {
    const list: string[] = [];
    YEAR_BUCKETS.forEach((y) => {
      if (availableYears.includes(y)) list.push(y);
    });
    const olderExists = availableYears.some((y) => Number(y) < 2022);
    if (olderExists) list.push("Anteriores");
    return list;
  }, [availableYears]);

  const [year, setYear] = useState<string>(yearsList[0] ?? "2026");
  const [activeSlug, setActiveSlug] = useState<string | null>(null);
  const [lightbox, setLightbox] = useState<number | null>(null);

  const yearAlbums = albums.filter((a) =>
    year === "Anteriores" ? Number(a.year) < 2022 : a.year === year,
  );

  const activeAlbum = albums.find((a) => a.slug === activeSlug) ?? null;
  const lightboxPhotos = useMemo(
    () =>
      activeAlbum
        ? activeAlbum.photos.map((src, i) => ({ src, alt: `${activeAlbum.title} — foto ${i + 1}` }))
        : [],
    [activeAlbum],
  );

  const openAlbum = (slug: string) => {
    setActiveSlug(slug);
    setLightbox(0);
  };

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
        <div className="container-narrow relative py-8">
          <div className="flex items-center gap-3">
            <RiverLine className="h-3 w-16 text-[color:var(--ochre)]" />
            <p className="text-xs font-semibold uppercase tracking-[0.24em] text-[color:var(--leaf)]">Selecione o ano</p>
          </div>
          <div role="tablist" aria-label="Selecionar ano da galeria" className="mt-4 flex gap-2 overflow-x-auto pb-1 -mx-1 px-1 snap-x">
            {yearsList.map((y) => {
              const active = y === year;
              return (
                <button
                  key={y}
                  role="tab"
                  aria-selected={active}
                  tabIndex={active ? 0 : -1}
                  onClick={() => setYear(y)}
                  className={`snap-start shrink-0 rounded-full px-4 h-10 text-sm font-semibold transition focus-visible:outline focus-visible:outline-2 focus-visible:outline-[color:var(--ochre)] ${
                    active
                      ? "bg-[color:var(--forest)] text-white ring-2 ring-[color:var(--ochre)] shadow-sm"
                      : "border border-[color:var(--leaf)]/40 bg-[color:var(--paper)] text-[color:var(--forest)] hover:bg-[color:var(--leaf)]/40"
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
              Registros de {year === "Anteriores" ? "anos anteriores" : year}
            </h2>
            <span className="text-sm text-muted-foreground">
              {yearAlbums.length} {yearAlbums.length === 1 ? "álbum" : "álbuns"}
            </span>
          </div>

          {yearAlbums.length === 0 ? (
            <p className="mt-8 text-muted-foreground">Nenhum álbum registrado para este ano ainda.</p>
          ) : (
            <div className="mt-10 grid gap-8 md:grid-cols-2 lg:grid-cols-3">
              {yearAlbums.map((a, i) => (
                <article
                  key={a.slug}
                  className="reveal group overflow-hidden rounded-3xl border bg-card shadow-sm transition hover:-translate-y-0.5 hover:shadow-lg flex flex-col"
                >
                  <button
                    type="button"
                    onClick={() => openAlbum(a.slug)}
                    className="text-left w-full flex flex-col h-full"
                    aria-label={`Abrir galeria do álbum ${a.title}`}
                  >
                    <div className={`aspect-[4/3] overflow-hidden ${i % 3 === 0 ? "organic-blob-3" : ""}`}>
                      <img
                        src={a.cover}
                        alt={a.title}
                        className="h-full w-full object-cover transition duration-700 group-hover:scale-105"
                        loading="lazy"
                      />
                    </div>
                    <div className="p-5 flex flex-col flex-1">
                      <h3 className="font-display text-xl font-bold text-[color:var(--forest)]">{a.title}</h3>
                      <p className="mt-2 flex flex-wrap gap-x-3 gap-y-1 text-[11px] text-muted-foreground">
                        <span className="inline-flex items-center gap-1">
                          <Calendar className="h-3.5 w-3.5" /> {a.date}
                        </span>
                        <span className="inline-flex items-center gap-1">
                          <MapPin className="h-3.5 w-3.5" /> {a.place}
                        </span>
                      </p>
                      <p className="mt-2 inline-flex items-center gap-1 text-xs uppercase tracking-widest text-[color:var(--moss)]">
                        <Tag className="h-3 w-3" /> {a.project}
                      </p>
                      <div className="mt-4 flex items-center justify-between text-sm">
                        <span className="inline-flex items-center gap-1 text-muted-foreground">
                          <Images className="h-3.5 w-3.5" /> {a.photos.length} fotos
                        </span>
                        <span className="inline-flex items-center gap-1 rounded-full bg-[color:var(--forest)] px-3 py-1.5 text-xs font-semibold text-[color:var(--paper)] group-hover:bg-[color:var(--moss)]">
                          Ver fotos
                        </span>
                      </div>
                    </div>
                  </button>
                </article>
              ))}
            </div>
          )}
        </div>
      </section>

      {activeAlbum && (
        <Lightbox
          photos={lightboxPhotos}
          index={lightbox}
          title={activeAlbum.title}
          onClose={() => {
            setLightbox(null);
            setActiveSlug(null);
          }}
          onIndexChange={setLightbox}
        />
      )}
    </>
  );
}
