import { createFileRoute, Link, notFound } from "@tanstack/react-router";
import { useEffect, useState } from "react";
import { PageHero } from "@/components/layout/PageHero";
import { albums } from "@/lib/site-data";
import { ArrowLeft, ArrowRight, X } from "lucide-react";

export const Route = createFileRoute("/galeria/$ano/$slug")({
  head: ({ params }) => {
    const a = albums.find((x) => x.year === params.ano && x.slug === params.slug);
    const title = a ? `${a.title} — Galeria ${a.year}` : "Álbum";
    return {
      meta: [
        { title: `${title} — Instituto Raízes do Futuro` },
        { name: "description", content: a?.description ?? "Álbum da galeria" },
        { property: "og:title", content: title },
        { property: "og:description", content: a?.description ?? "" },
        { property: "og:url", content: `/galeria/${params.ano}/${params.slug}` },
        ...(a?.cover ? [{ property: "og:image", content: a.cover }] : []),
      ],
      links: [{ rel: "canonical", href: `/galeria/${params.ano}/${params.slug}` }],
    };
  },
  loader: ({ params }) => {
    const a = albums.find((x) => x.year === params.ano && x.slug === params.slug);
    if (!a) throw notFound();
    return a;
  },
  component: AlbumPage,
  notFoundComponent: () => (
    <div className="container-narrow py-20 text-center">
      <h1 className="font-display text-3xl font-bold text-[color:var(--forest)]">Álbum não encontrado</h1>
      <Link to="/galeria" className="mt-4 inline-block text-[color:var(--moss)] underline">Voltar à galeria</Link>
    </div>
  ),
});

function AlbumPage() {
  const album = Route.useLoaderData();
  const [idx, setIdx] = useState<number | null>(null);

  useEffect(() => {
    if (idx === null) return;
    const onKey = (e: KeyboardEvent) => {
      if (e.key === "Escape") setIdx(null);
      if (e.key === "ArrowRight") setIdx((i) => (i === null ? null : (i + 1) % album.photos.length));
      if (e.key === "ArrowLeft") setIdx((i) => (i === null ? null : (i - 1 + album.photos.length) % album.photos.length));
    };
    document.addEventListener("keydown", onKey);
    return () => document.removeEventListener("keydown", onKey);
  }, [idx, album.photos.length]);

  return (
    <>
      <PageHero
        eyebrow={`Galeria ${album.year}`}
        title={album.title}
        description={album.description}
        image={album.cover}
        crumbs={[
          { to: "/", label: "Início" },
          { to: "/galeria", label: "Galeria" },
          { label: album.title },
        ]}
      />

      <section className="section-y">
        <div className="container-narrow">
          <p className="text-sm text-muted-foreground">{album.date} · {album.place} · {album.photos.length} fotos</p>
          <div className="mt-6 grid gap-3 grid-cols-2 md:grid-cols-3 lg:grid-cols-4">
            {album.photos.map((src, i) => (
              <button key={i} type="button" onClick={() => setIdx(i)} className="group aspect-square overflow-hidden rounded-xl border" aria-label={`Abrir foto ${i + 1}`}>
                <img src={src} alt={`${album.title} — foto ${i + 1}`} className="h-full w-full object-cover transition group-hover:scale-105" loading="lazy" />
              </button>
            ))}
          </div>
          <div className="mt-10">
            <Link to="/galeria" className="inline-flex items-center gap-1 text-sm font-semibold text-[color:var(--forest)]"><ArrowLeft className="h-4 w-4" /> Voltar à galeria</Link>
          </div>
        </div>
      </section>

      {idx !== null && (
        <div role="dialog" aria-modal="true" aria-label="Visualizador de fotos" className="fixed inset-0 z-50 bg-black/90 grid place-items-center p-4">
          <button type="button" aria-label="Fechar" onClick={() => setIdx(null)} className="absolute top-4 right-4 rounded-full bg-white/10 p-2 text-white hover:bg-white/20"><X className="h-5 w-5" /></button>
          <button type="button" aria-label="Anterior" onClick={() => setIdx((i) => (i === null ? null : (i - 1 + album.photos.length) % album.photos.length))} className="absolute left-4 top-1/2 -translate-y-1/2 rounded-full bg-white/10 p-3 text-white hover:bg-white/20"><ArrowLeft className="h-5 w-5" /></button>
          <button type="button" aria-label="Próxima" onClick={() => setIdx((i) => (i === null ? null : (i + 1) % album.photos.length))} className="absolute right-4 top-1/2 -translate-y-1/2 rounded-full bg-white/10 p-3 text-white hover:bg-white/20"><ArrowRight className="h-5 w-5" /></button>
          <div className="max-w-5xl w-full">
            <img src={album.photos[idx]} alt={`${album.title} — foto ${idx + 1}`} className="mx-auto max-h-[80vh] w-auto rounded-lg" />
            <p className="mt-3 text-center text-sm text-white/80">{album.title} · {idx + 1} de {album.photos.length}</p>
          </div>
        </div>
      )}
    </>
  );
}
