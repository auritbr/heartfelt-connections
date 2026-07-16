import { useEffect, useState } from "react";
import { Link } from "@tanstack/react-router";
import { X } from "lucide-react";

export type CookiePreferences = {
  necessary: true;
  analytics: boolean;
  functionality: boolean;
  marketing: boolean;
};

const KEY = "cookie-prefs";
const DEFAULT: CookiePreferences = { necessary: true, analytics: false, functionality: false, marketing: false };

function load(): CookiePreferences | null {
  try {
    const raw = localStorage.getItem(KEY);
    return raw ? { ...DEFAULT, ...JSON.parse(raw), necessary: true } : null;
  } catch { return null; }
}

export function CookieBanner({
  open,
  setOpen,
}: {
  open: boolean;
  setOpen: (v: boolean) => void;
}) {
  const [showBanner, setShowBanner] = useState(false);
  const [customize, setCustomize] = useState(false);
  const [prefs, setPrefs] = useState<CookiePreferences>(DEFAULT);

  useEffect(() => {
    const existing = load();
    if (!existing) setShowBanner(true);
    else setPrefs(existing);
  }, []);

  useEffect(() => {
    if (open) setCustomize(true);
  }, [open]);

  const save = (next: CookiePreferences) => {
    try { localStorage.setItem(KEY, JSON.stringify(next)); } catch {}
    setPrefs(next);
    setShowBanner(false);
    setOpen(false);
    setCustomize(false);
  };

  const acceptAll = () => save({ necessary: true, analytics: true, functionality: true, marketing: true });
  const rejectOpt = () => save({ necessary: true, analytics: false, functionality: false, marketing: false });

  const visible = showBanner || open;
  if (!visible) return null;

  return (
    <div className="fixed inset-x-0 bottom-0 z-50 p-4 md:p-6 pointer-events-none">
      <div className="mx-auto max-w-3xl rounded-xl border bg-background shadow-xl pointer-events-auto">
        {!customize ? (
          <div className="p-5 md:p-6">
            <div className="flex items-start justify-between gap-4">
              <div>
                <h3 className="font-display text-lg font-bold text-[color:var(--forest)]">Cookies e privacidade</h3>
                <p className="mt-2 text-sm text-muted-foreground">
                  Utilizamos cookies para melhorar sua experiência, analisar o uso do site e garantir o funcionamento de recursos essenciais.
                </p>
                <p className="mt-2 text-xs">
                  <Link to="/politica-de-cookies" className="underline">Política de Cookies</Link>
                  {" · "}
                  <Link to="/politica-de-privacidade" className="underline">Política de Privacidade</Link>
                </p>
              </div>
              <button type="button" aria-label="Fechar" onClick={() => { setShowBanner(false); setOpen(false); }} className="rounded-md p-2 hover:bg-secondary">
                <X className="h-4 w-4" />
              </button>
            </div>
            <div className="mt-4 flex flex-wrap gap-2">
              <button type="button" onClick={acceptAll} className="rounded-full bg-[color:var(--forest)] px-4 py-2 text-sm font-semibold text-[color:var(--paper)] hover:bg-[color:var(--moss)]">Aceitar todos</button>
              <button type="button" onClick={rejectOpt} className="rounded-full border px-4 py-2 text-sm font-semibold hover:bg-secondary">Recusar opcionais</button>
              <button type="button" onClick={() => setCustomize(true)} className="rounded-full border px-4 py-2 text-sm font-semibold hover:bg-secondary">Personalizar</button>
            </div>
          </div>
        ) : (
          <div className="p-5 md:p-6">
            <div className="flex items-start justify-between gap-4">
              <h3 className="font-display text-lg font-bold text-[color:var(--forest)]">Personalizar cookies</h3>
              <button type="button" aria-label="Fechar" onClick={() => { setCustomize(false); setOpen(false); setShowBanner(false); }} className="rounded-md p-2 hover:bg-secondary">
                <X className="h-4 w-4" />
              </button>
            </div>
            <div className="mt-4 space-y-3">
              {([
                { k: "necessary", title: "Cookies necessários", desc: "Essenciais para o funcionamento do site. Sempre ativos.", locked: true },
                { k: "analytics", title: "Cookies de análise", desc: "Ajudam a entender como o site é utilizado.", locked: false },
                { k: "functionality", title: "Cookies de funcionalidade", desc: "Recursos extras e personalizações.", locked: false },
                { k: "marketing", title: "Cookies de marketing", desc: "Comunicações institucionais e campanhas.", locked: false },
              ] as const).map((c) => (
                <label key={c.k} className="flex items-start justify-between gap-4 rounded-lg border p-3">
                  <span>
                    <span className="block text-sm font-semibold">{c.title}</span>
                    <span className="block text-xs text-muted-foreground">{c.desc}</span>
                  </span>
                  <input
                    type="checkbox"
                    disabled={c.locked}
                    checked={prefs[c.k]}
                    onChange={(e) => setPrefs((p) => ({ ...p, [c.k]: e.target.checked }))}
                    className="mt-1 h-5 w-5 accent-[color:var(--forest)]"
                  />
                </label>
              ))}
            </div>
            <div className="mt-4 flex flex-wrap gap-2">
              <button type="button" onClick={() => save(prefs)} className="rounded-full bg-[color:var(--forest)] px-4 py-2 text-sm font-semibold text-[color:var(--paper)] hover:bg-[color:var(--moss)]">Salvar preferências</button>
              <button type="button" onClick={acceptAll} className="rounded-full border px-4 py-2 text-sm font-semibold hover:bg-secondary">Aceitar todos</button>
            </div>
          </div>
        )}
      </div>
    </div>
  );
}
