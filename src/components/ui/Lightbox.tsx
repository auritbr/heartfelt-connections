import { useEffect, useRef } from "react";
import { X, ArrowLeft, ArrowRight } from "lucide-react";

export type LightboxPhoto = { src: string; caption?: string; credit?: string; alt?: string };

export function Lightbox({
  photos,
  index,
  onClose,
  onIndexChange,
  title,
}: {
  photos: LightboxPhoto[];
  index: number | null;
  onClose: () => void;
  onIndexChange: (i: number) => void;
  title?: string;
}) {
  const closeRef = useRef<HTMLButtonElement | null>(null);
  const scrollRef = useRef(0);

  useEffect(() => {
    if (index === null) return;
    scrollRef.current = window.scrollY;
    const prev = document.body.style.overflow;
    document.body.style.overflow = "hidden";
    const t = window.setTimeout(() => closeRef.current?.focus(), 20);
    const onKey = (e: KeyboardEvent) => {
      if (e.key === "Escape") onClose();
      if (e.key === "ArrowRight") onIndexChange((index + 1) % photos.length);
      if (e.key === "ArrowLeft") onIndexChange((index - 1 + photos.length) % photos.length);
    };
    document.addEventListener("keydown", onKey);
    return () => {
      document.removeEventListener("keydown", onKey);
      document.body.style.overflow = prev;
      window.clearTimeout(t);
      window.scrollTo({ top: scrollRef.current });
    };
  }, [index, photos.length, onClose, onIndexChange]);

  if (index === null) return null;
  const photo = photos[index];

  return (
    <div
      role="dialog"
      aria-modal="true"
      aria-label={`Foto ${index + 1} de ${photos.length}${title ? ` — ${title}` : ""}`}
      className="fixed inset-0 z-[60] grid place-items-center bg-black/92 p-4"
      onClick={(e) => { if (e.target === e.currentTarget) onClose(); }}
    >
      <button
        ref={closeRef}
        type="button"
        aria-label="Fechar galeria"
        onClick={onClose}
        className="absolute top-4 right-4 rounded-full bg-white/10 p-2 text-white hover:bg-white/20 focus-visible:outline focus-visible:outline-2 focus-visible:outline-white"
      >
        <X className="h-5 w-5" />
      </button>
      {photos.length > 1 && (
        <>
          <button
            type="button"
            aria-label="Foto anterior"
            onClick={() => onIndexChange((index - 1 + photos.length) % photos.length)}
            className="absolute left-2 md:left-4 top-1/2 -translate-y-1/2 rounded-full bg-white/10 p-3 text-white hover:bg-white/20"
          >
            <ArrowLeft className="h-5 w-5" />
          </button>
          <button
            type="button"
            aria-label="Próxima foto"
            onClick={() => onIndexChange((index + 1) % photos.length)}
            className="absolute right-2 md:right-4 top-1/2 -translate-y-1/2 rounded-full bg-white/10 p-3 text-white hover:bg-white/20"
          >
            <ArrowRight className="h-5 w-5" />
          </button>
        </>
      )}
      <div className="max-w-6xl w-full">
        <img
          src={photo.src}
          alt={photo.alt ?? photo.caption ?? `Foto ${index + 1}`}
          className="mx-auto max-h-[78vh] w-auto rounded-lg shadow-2xl"
        />
        <div className="mt-4 text-center text-white/90 text-sm space-y-1">
          {photo.caption && <p>{photo.caption}</p>}
          <p className="text-white/60 text-xs">
            {photo.credit ? `${photo.credit} · ` : ""}{index + 1} de {photos.length}
            {title ? ` · ${title}` : ""}
          </p>
        </div>
      </div>
    </div>
  );
}
