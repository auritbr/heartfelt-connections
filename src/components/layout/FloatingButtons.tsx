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
      {/* Left-bottom stack — accessibility + cookies */}
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

      {/* Back-to-top — independent, sits ABOVE the WhatsApp button */}
      {showTop && (
        <button
          type="button"
          onClick={() => window.scrollTo({ top: 0, behavior: "smooth" })}
          aria-label="Voltar ao topo"
          className="fixed z-40 grid h-10 w-10 place-items-center rounded-full bg-background text-foreground border shadow-md hover:bg-secondary"
          style={{
            right: "20px",
            bottom: "calc(84px + env(safe-area-inset-bottom, 0px))",
          }}
        >
          <ArrowUp className="h-4 w-4" />
        </button>
      )}

      {/* WhatsApp — independent, anchored to the bottom-right of the viewport */}
      <a
        href={waHref}
        target="_blank"
        rel="noreferrer noopener"
        aria-label="Fale conosco pelo WhatsApp"
        className="fixed z-50 grid place-items-center rounded-full bg-[#25D366] text-white shadow-lg hover:brightness-95 wa-fab"
      >
        {/* discreet botanical leaf tucked behind the outer button */}
        <svg
          aria-hidden
          viewBox="0 0 24 24"
          className="pointer-events-none absolute -left-1.5 -top-1 h-3.5 w-3.5 -rotate-[35deg] text-[color:var(--moss)] drop-shadow-sm"
        >
          <path d="M3 21 C 3 10 10 3 21 3 C 21 14 14 21 3 21 Z" fill="currentColor" />
          <path
            d="M5 19 C 10 14 14 10 19 5"
            stroke="rgba(255,255,255,0.55)"
            strokeWidth="1.1"
            fill="none"
            strokeLinecap="round"
          />
        </svg>
        <MessageCircle className="relative h-5 w-5 md:h-6 md:w-6" />
      </a>

      <style>{`
        .wa-fab {
          right: 14px;
          bottom: calc(12px + env(safe-area-inset-bottom, 0px));
          width: 52px;
          height: 52px;
        }
        @media (min-width: 768px) {
          .wa-fab {
            right: 22px;
            bottom: 16px;
            width: 56px;
            height: 56px;
          }
        }
      `}</style>

      {a11yOpen && <AccessibilityPanel onClose={() => setA11yOpen(false)} />}
      <CookieBanner open={cookiesOpen} setOpen={setCookiesOpen} />
    </>
  );
}

export type { CookiePreferences };
export { X };
