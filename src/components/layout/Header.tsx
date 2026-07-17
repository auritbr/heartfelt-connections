import { Link, useRouterState } from "@tanstack/react-router";
import { useEffect, useState } from "react";
import { Menu, X, ChevronDown, Leaf } from "lucide-react";
import { site } from "@/lib/site-data";

const nav = [
  { to: "/", label: "Início" },
  {
    label: "Quem Somos",
    to: "/quem-somos",
    children: [
      { to: "/quem-somos", label: "Institucional" },
      { to: "/quem-somos/equipe", label: "Nossa Equipe" },
      { to: "/quem-somos/transparencia", label: "Transparência" },
    ],
  },
  {
    label: "Projetos",
    to: "/projetos",
    children: [
      { to: "/projetos", label: "Todos os Projetos" },
      { to: "/projetos/biblioteca-verde", label: "Biblioteca Verde" },
      { to: "/projetos/guardioes-do-territorio", label: "Guardiões do Território" },
      { to: "/projetos/cultura-que-floresce", label: "Cultura que Floresce" },
    ],
  },
  { to: "/noticias", label: "Notícias" },
  { to: "/galeria", label: "Galeria" },
  { to: "/contato", label: "Contato" },
] as const;

// Rotas com hero fotográfico escuro — permitem header transparente no topo.
const HERO_ROUTES = ["/", "/quem-somos", "/quem-somos/equipe", "/projetos", "/noticias", "/galeria", "/contato"];
const isHeroPath = (p: string) =>
  HERO_ROUTES.some((r) => (r === "/" ? p === "/" : p === r || p.startsWith(r + "/"))) ||
  /^\/noticias\/[^/]+$/.test(p);

export function Header() {
  const [open, setOpen] = useState(false);
  const [openSub, setOpenSub] = useState<string | null>(null);
  const [scrolled, setScrolled] = useState(false);
  const pathname = useRouterState({ select: (s) => s.location.pathname });
  const overHero = isHeroPath(pathname);
  const transparent = overHero && !scrolled && !open;

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 40);
    onScroll();
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  useEffect(() => {
    document.body.style.overflow = open ? "hidden" : "";
    return () => {
      document.body.style.overflow = "";
    };
  }, [open]);

  const linkBase = transparent
    ? "text-[color:var(--paper)]/90 hover:text-white"
    : "text-foreground/80 hover:text-[color:var(--forest)]";

  return (
    <header
      className={`fixed top-0 z-40 w-full transition-colors duration-300 ${
        transparent
          ? "bg-transparent border-b border-white/10"
          : "bg-background/95 backdrop-blur border-b shadow-[0_1px_0_rgba(0,0,0,0.03)]"
      }`}
      data-transparent={transparent ? "true" : "false"}
    >
      <div className="container-narrow flex h-20 items-center justify-between gap-4">
        <Link to="/" className="flex min-w-0 items-center gap-2.5" aria-label={site.name}>
          <span
            className={`grid h-10 w-10 shrink-0 place-items-center rounded-full ${
              transparent
                ? "bg-white/15 backdrop-blur text-[color:var(--paper)] ring-1 ring-white/30"
                : "bg-[color:var(--forest)] text-[color:var(--paper)]"
            }`}
          >
            <Leaf className="h-5 w-5" aria-hidden />
          </span>
          <span className="min-w-0 leading-tight">
            <span
              className={`block truncate font-display text-[15px] font-bold ${
                transparent ? "text-white" : "text-[color:var(--forest)]"
              }`}
            >
              {site.name}
            </span>
            <span
              className={`block truncate text-[11px] uppercase tracking-[0.14em] ${
                transparent ? "text-white/80" : "text-muted-foreground"
              }`}
            >
              {site.tagline}
            </span>
          </span>
        </Link>

        <nav className="hidden lg:flex items-center gap-1" aria-label="Menu principal">
          {nav.map((item) =>
            "children" in item && item.children ? (
              <div key={item.label} className="group relative">
                <Link
                  to={item.to}
                  className={`inline-flex items-center gap-1 rounded-md px-3 py-2 text-sm font-medium ${linkBase} data-[status=active]:text-[color:var(--ochre)]`}
                  activeOptions={{ exact: false }}
                >
                  {item.label}
                  <ChevronDown className="h-4 w-4 opacity-70 transition-transform group-hover:rotate-180" aria-hidden />
                </Link>
                <div className="invisible absolute left-0 top-full w-60 pt-2 opacity-0 transition group-hover:visible group-hover:opacity-100 group-focus-within:visible group-focus-within:opacity-100">
                  <div className="overflow-hidden rounded-lg border bg-popover shadow-lg">
                    {item.children.map((c) => (
                      <Link
                        key={c.to}
                        to={c.to}
                        className="block px-4 py-2.5 text-sm text-popover-foreground hover:bg-secondary data-[status=active]:bg-secondary data-[status=active]:text-[color:var(--forest)]"
                        activeOptions={{ exact: true }}
                      >
                        {c.label}
                      </Link>
                    ))}
                  </div>
                </div>
              </div>
            ) : (
              <Link
                key={item.to}
                to={item.to}
                className={`rounded-md px-3 py-2 text-sm font-medium ${linkBase} data-[status=active]:text-[color:var(--ochre)]`}
                activeOptions={{ exact: item.to === "/" }}
              >
                {item.label}
              </Link>
            ),
          )}
        </nav>

        <div className="hidden lg:block">
          <Link
            to="/contato"
            className={`inline-flex items-center rounded-full px-5 py-2.5 text-sm font-semibold shadow-sm transition ${
              transparent
                ? "bg-white text-[color:var(--forest)] hover:bg-[color:var(--leaf)]"
                : "bg-[color:var(--forest)] text-[color:var(--paper)] hover:bg-[color:var(--moss)]"
            }`}
          >
            Participe
          </Link>
        </div>

        <button
          type="button"
          className={`lg:hidden inline-flex h-11 w-11 items-center justify-center rounded-md border ${
            transparent ? "border-white/40 text-white" : "border-border text-foreground"
          }`}
          aria-label={open ? "Fechar menu" : "Abrir menu"}
          aria-expanded={open}
          onClick={() => setOpen((v) => !v)}
        >
          {open ? <X className="h-5 w-5" /> : <Menu className="h-5 w-5" />}
        </button>
      </div>

      {/* Mobile menu */}
      {open && (
        <div className="lg:hidden border-t bg-background">
          <nav className="container-narrow py-4 flex flex-col gap-1" aria-label="Menu">
            {nav.map((item) =>
              "children" in item && item.children ? (
                <div key={item.label} className="rounded-md">
                  <button
                    type="button"
                    className="flex w-full items-center justify-between px-3 py-3 text-left text-sm font-semibold"
                    aria-expanded={openSub === item.label}
                    onClick={() => setOpenSub((v) => (v === item.label ? null : item.label))}
                  >
                    {item.label}
                    <ChevronDown className={`h-4 w-4 transition-transform ${openSub === item.label ? "rotate-180" : ""}`} />
                  </button>
                  {openSub === item.label && (
                    <div className="ml-3 border-l pl-3">
                      {item.children.map((c) => (
                        <Link
                          key={c.to}
                          to={c.to}
                          onClick={() => setOpen(false)}
                          className="block rounded-md px-3 py-2.5 text-sm text-foreground/80 hover:bg-secondary"
                        >
                          {c.label}
                        </Link>
                      ))}
                    </div>
                  )}
                </div>
              ) : (
                <Link
                  key={item.to}
                  to={item.to}
                  onClick={() => setOpen(false)}
                  className="rounded-md px-3 py-3 text-sm font-semibold hover:bg-secondary"
                  activeOptions={{ exact: item.to === "/" }}
                >
                  {item.label}
                </Link>
              ),
            )}
            <Link
              to="/contato"
              onClick={() => setOpen(false)}
              className="mt-2 inline-flex items-center justify-center rounded-full bg-[color:var(--forest)] px-5 py-3 text-sm font-semibold text-[color:var(--paper)]"
            >
              Participe
            </Link>
          </nav>
        </div>
      )}
    </header>
  );
}
