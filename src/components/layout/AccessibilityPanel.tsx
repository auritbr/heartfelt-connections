import { useEffect, useState } from "react";
import { X, ZoomIn, ZoomOut, RefreshCw, Contrast, Palette, Link2, Type, AlignJustify, Pause, Keyboard, Eye } from "lucide-react";

type Prefs = {
  fontScale: number;
  highContrast: boolean;
  invert: boolean;
  grayscale: boolean;
  highlightLinks: boolean;
  readableFont: boolean;
  lineSpacing: boolean;
  pauseAnim: boolean;
  keyboardNav: boolean;
};

const DEFAULTS: Prefs = {
  fontScale: 1,
  highContrast: false,
  invert: false,
  grayscale: false,
  highlightLinks: false,
  readableFont: false,
  lineSpacing: false,
  pauseAnim: false,
  keyboardNav: false,
};

const KEY = "a11y-prefs";

function applyPrefs(p: Prefs) {
  const root = document.documentElement;
  root.style.fontSize = `${p.fontScale * 100}%`;
  root.classList.toggle("a11y-high-contrast", p.highContrast);
  root.classList.toggle("hc-invert", p.invert);
  root.classList.toggle("a11y-grayscale", p.grayscale);
  root.classList.toggle("a11y-highlight-links", p.highlightLinks);
  root.classList.toggle("a11y-readable-font", p.readableFont);
  root.classList.toggle("a11y-line-spacing", p.lineSpacing);
  root.classList.toggle("a11y-no-motion", p.pauseAnim);
  root.classList.toggle("a11y-keyboard-nav", p.keyboardNav);
}

export function useAccessibilityBootstrap() {
  useEffect(() => {
    try {
      const raw = localStorage.getItem(KEY);
      if (raw) applyPrefs({ ...DEFAULTS, ...JSON.parse(raw) });
    } catch {}
  }, []);
}

export function AccessibilityPanel({ onClose }: { onClose: () => void }) {
  const [prefs, setPrefs] = useState<Prefs>(() => {
    if (typeof window === "undefined") return DEFAULTS;
    try {
      const raw = localStorage.getItem(KEY);
      return raw ? { ...DEFAULTS, ...JSON.parse(raw) } : DEFAULTS;
    } catch { return DEFAULTS; }
  });

  useEffect(() => {
    applyPrefs(prefs);
    try { localStorage.setItem(KEY, JSON.stringify(prefs)); } catch {}
  }, [prefs]);

  useEffect(() => {
    const onKey = (e: KeyboardEvent) => e.key === "Escape" && onClose();
    document.addEventListener("keydown", onKey);
    return () => document.removeEventListener("keydown", onKey);
  }, [onClose]);

  const setFont = (delta: number) =>
    setPrefs((p) => ({ ...p, fontScale: Math.max(0.8, Math.min(1.4, +(p.fontScale + delta).toFixed(2))) }));
  const toggle = (k: keyof Prefs) => setPrefs((p) => ({ ...p, [k]: !p[k] }));

  const Row = ({ icon: Icon, label, active, onClick }: { icon: typeof X; label: string; active?: boolean; onClick: () => void }) => (
    <button
      type="button"
      onClick={onClick}
      aria-pressed={!!active}
      className={`flex w-full items-center gap-3 rounded-lg border px-3 py-2.5 text-left text-sm hover:bg-secondary ${
        active ? "bg-[color:var(--leaf)] border-[color:var(--moss)] text-[color:var(--forest)]" : ""
      }`}
    >
      <Icon className="h-4 w-4 shrink-0" aria-hidden />
      <span>{label}</span>
    </button>
  );

  return (
    <div className="fixed inset-0 z-50 flex" role="dialog" aria-label="Painel de acessibilidade" aria-modal="true">
      <button type="button" aria-label="Fechar" onClick={onClose} className="flex-1 bg-black/40" />
      <aside className="w-full max-w-sm bg-background shadow-xl overflow-y-auto">
        <div className="sticky top-0 flex items-center justify-between border-b bg-background p-4">
          <h2 className="font-display text-lg font-bold text-[color:var(--forest)]">Acessibilidade</h2>
          <button type="button" onClick={onClose} aria-label="Fechar painel" className="rounded-md p-2 hover:bg-secondary">
            <X className="h-5 w-5" />
          </button>
        </div>
        <div className="p-4 space-y-4">
          <div>
            <p className="text-xs font-semibold uppercase tracking-wider text-muted-foreground">Tamanho da fonte</p>
            <div className="mt-2 grid grid-cols-3 gap-2">
              <button type="button" onClick={() => setFont(-0.1)} aria-label="Diminuir fonte" className="flex items-center justify-center gap-1 rounded-md border py-2 text-sm hover:bg-secondary"><ZoomOut className="h-4 w-4" /> A-</button>
              <button type="button" onClick={() => setPrefs((p) => ({ ...p, fontScale: 1 }))} aria-label="Restaurar tamanho" className="flex items-center justify-center gap-1 rounded-md border py-2 text-sm hover:bg-secondary"><RefreshCw className="h-4 w-4" /></button>
              <button type="button" onClick={() => setFont(0.1)} aria-label="Aumentar fonte" className="flex items-center justify-center gap-1 rounded-md border py-2 text-sm hover:bg-secondary"><ZoomIn className="h-4 w-4" /> A+</button>
            </div>
          </div>

          <div className="space-y-2">
            <Row icon={Contrast} label="Alto contraste" active={prefs.highContrast} onClick={() => toggle("highContrast")} />
            <Row icon={Eye} label="Contraste invertido" active={prefs.invert} onClick={() => toggle("invert")} />
            <Row icon={Palette} label="Escala de cinza" active={prefs.grayscale} onClick={() => toggle("grayscale")} />
            <Row icon={Link2} label="Destacar links" active={prefs.highlightLinks} onClick={() => toggle("highlightLinks")} />
            <Row icon={Type} label="Fonte mais legível" active={prefs.readableFont} onClick={() => toggle("readableFont")} />
            <Row icon={AlignJustify} label="Espaçamento entre linhas" active={prefs.lineSpacing} onClick={() => toggle("lineSpacing")} />
            <Row icon={Pause} label="Pausar animações" active={prefs.pauseAnim} onClick={() => toggle("pauseAnim")} />
            <Row icon={Keyboard} label="Navegação por teclado" active={prefs.keyboardNav} onClick={() => toggle("keyboardNav")} />
          </div>

          <button
            type="button"
            onClick={() => setPrefs(DEFAULTS)}
            className="w-full rounded-md border border-[color:var(--forest)] px-3 py-2.5 text-sm font-semibold text-[color:var(--forest)] hover:bg-[color:var(--leaf)]"
          >
            Restaurar configurações
          </button>
        </div>
      </aside>
    </div>
  );
}
