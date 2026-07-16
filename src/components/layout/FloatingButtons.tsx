import { useEffect, useState } from "react";
import { Accessibility, X, Cookie, MessageCircle, ArrowUp } from "lucide-react";
import { AccessibilityPanel } from "./AccessibilityPanel";
import { CookieBanner } from "./CookieBanner";
import type { CookiePreferences } from "./CookieBanner";
import { site } from "@/lib/site-data";

export function FloatingButtons() {
  const [a11yOpen, setA11yOpen] = useState(false);
  const [cookiesOpen, setCookiesOpen] = useState(false);
  const [showTop, setShowTop] = useState(false);

  useEffect(() => {
    const onScroll = () => setShowTop(window.scrollY > 400);
    onScroll();
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  const waHref = `https://wa.me/${site.whatsapp}?text=${encodeURIComponent(site.whatsappMessage)}`;

  return (
    <>
      {/* Left-bottom stack */}
      <div className="fixed bottom-4 left-4 z-40 flex flex-col gap-3">
        <button
          type="button"
          onClick={() => setA11yOpen(true)}
          aria-label="Abrir painel de acessibilidade"
          className="grid h-12 w-12 place-items-center rounded-full bg-[color:var(--forest)] text-[color:var(--paper)] shadow-lg hover:bg-[color:var(--moss)] focus-visible:outline-2"
        >
          <Accessibility className="h-5 w-5" />
        </button>
        <button
          type="button"
          onClick={() => setCookiesOpen(true)}
          aria-label="Preferências de cookies"
          className="grid h-12 w-12 place-items-center rounded-full bg-[color:var(--paper)] text-[color:var(--forest)] border shadow-lg hover:bg-[color:var(--leaf)]"
        >
          <Cookie className="h-5 w-5" />
        </button>
      </div>

      {/* Right-bottom stack — WhatsApp; VLibras widget mounts itself */}
      <div className="fixed bottom-4 right-4 z-40 flex flex-col items-end gap-3">
        {showTop && (
          <button
            type="button"
            onClick={() => window.scrollTo({ top: 0, behavior: "smooth" })}
            aria-label="Voltar ao topo"
            className="grid h-11 w-11 place-items-center rounded-full bg-background text-foreground border shadow-lg hover:bg-secondary"
          >
            <ArrowUp className="h-5 w-5" />
          </button>
        )}
        <a
          href={waHref}
          target="_blank"
          rel="noreferrer noopener"
          aria-label="Fale conosco pelo WhatsApp"
          className="grid h-14 w-14 place-items-center rounded-full bg-[#25D366] text-white shadow-lg hover:brightness-95"
          style={{ marginBottom: "80px" }} /* leave space for VLibras widget which mounts bottom-right */
        >
          <MessageCircle className="h-6 w-6" />
        </a>
      </div>

      {a11yOpen && <AccessibilityPanel onClose={() => setA11yOpen(false)} />}
      <CookieBanner open={cookiesOpen} setOpen={setCookiesOpen} />
    </>
  );
}

export { CookiePreferences };
export { X };
