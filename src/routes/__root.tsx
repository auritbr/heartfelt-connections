import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import {
  Outlet,
  Link,
  createRootRouteWithContext,
  useRouter,
  HeadContent,
  Scripts,
} from "@tanstack/react-router";
import { useEffect, type ReactNode } from "react";

import appCss from "../styles.css?url";
import { reportLovableError } from "../lib/lovable-error-reporting";
import { Header } from "../components/layout/Header";
import { Footer } from "../components/layout/Footer";
import { FloatingButtons } from "../components/layout/FloatingButtons";
import { useAccessibilityBootstrap } from "../components/layout/AccessibilityPanel";

function NotFoundComponent() {
  return (
    <>
      <Header />
      <div className="flex min-h-[60vh] items-center justify-center bg-background px-4 py-20">
        <div className="max-w-md text-center">
          <p className="text-xs font-semibold uppercase tracking-[0.2em] text-[color:var(--moss)]">Erro 404</p>
          <h1 className="mt-2 font-display text-5xl font-bold text-[color:var(--forest)]">Página não encontrada</h1>
          <p className="mt-3 text-sm text-muted-foreground">A página que você procura não existe ou foi movida.</p>
          <div className="mt-6">
            <Link to="/" className="inline-flex items-center justify-center rounded-full bg-[color:var(--forest)] px-5 py-2.5 text-sm font-semibold text-[color:var(--paper)] hover:bg-[color:var(--moss)]">
              Voltar ao início
            </Link>
          </div>
        </div>
      </div>
      <Footer />
    </>
  );
}

function ErrorComponent({ error, reset }: { error: Error; reset: () => void }) {
  console.error(error);
  const router = useRouter();
  useEffect(() => {
    reportLovableError(error, { boundary: "tanstack_root_error_component" });
  }, [error]);

  return (
    <div className="flex min-h-screen items-center justify-center bg-background px-4">
      <div className="max-w-md text-center">
        <h1 className="text-xl font-semibold text-foreground">Esta página não carregou</h1>
        <p className="mt-2 text-sm text-muted-foreground">Algo deu errado. Tente novamente ou volte ao início.</p>
        <div className="mt-6 flex flex-wrap justify-center gap-2">
          <button onClick={() => { router.invalidate(); reset(); }} className="rounded-full bg-[color:var(--forest)] px-4 py-2 text-sm font-medium text-[color:var(--paper)]">Tentar novamente</button>
          <a href="/" className="rounded-full border px-4 py-2 text-sm font-medium">Ir ao início</a>
        </div>
      </div>
    </div>
  );
}

export const Route = createRootRouteWithContext<{ queryClient: QueryClient }>()({
  head: () => ({
    meta: [
      { charSet: "utf-8" },
      { name: "viewport", content: "width=device-width, initial-scale=1" },
      { title: "Instituto Raízes do Futuro — Ponto de Cultura e Educação Ambiental" },
      { name: "description", content: "Ponto de Cultura dedicado à educação ambiental, à leitura, à cultura e à participação comunitária." },
      { name: "author", content: "Instituto Raízes do Futuro" },
      { property: "og:site_name", content: "Instituto Raízes do Futuro" },
      { property: "og:title", content: "Instituto Raízes do Futuro — Ponto de Cultura e Educação Ambiental" },
      { property: "og:description", content: "Cultura, educação ambiental e valorização dos saberes comunitários." },
      { property: "og:type", content: "website" },
      { name: "twitter:card", content: "summary_large_image" },
      { name: "theme-color", content: "#1e3a2b" },
    ],
    links: [
      { rel: "stylesheet", href: appCss },
      { rel: "preconnect", href: "https://fonts.googleapis.com" },
      { rel: "preconnect", href: "https://fonts.gstatic.com", crossOrigin: "anonymous" },
      { rel: "stylesheet", href: "https://fonts.googleapis.com/css2?family=Manrope:wght@500;600;700;800&family=Inter:wght@400;500;600;700&display=swap" },
      { rel: "icon", href: "/favicon.ico", type: "image/x-icon" },
    ],
    scripts: [
      { src: "https://vlibras.gov.br/app/vlibras-plugin.js", defer: true },
    ],
  }),
  shellComponent: RootShell,
  component: RootComponent,
  notFoundComponent: NotFoundComponent,
  errorComponent: ErrorComponent,
});

function RootShell({ children }: { children: ReactNode }) {
  return (
    <html lang="pt-BR">
      <head>
        <HeadContent />
      </head>
      <body>
        {children}
        {/* VLibras widget mount point — script above initializes it */}
        <div {...({ vw: "true" } as Record<string, string>)} className="enabled">
          <div {...({ "vw-access-button": "true" } as Record<string, string>)} className="active"></div>
          <div {...({ "vw-plugin-wrapper": "true" } as Record<string, string>)}>
            <div className="vw-plugin-top-wrapper"></div>
          </div>
        </div>
        <script dangerouslySetInnerHTML={{ __html: `window.addEventListener('load', function(){ try { new window.VLibras.Widget('https://vlibras.gov.br/app'); } catch(e){} });` }} />
        <Scripts />
      </body>
    </html>
  );
}

function RootComponent() {
  const { queryClient } = Route.useRouteContext();
  useAccessibilityBootstrap();

  return (
    <QueryClientProvider client={queryClient}>
      <a href="#conteudo" className="sr-only focus:not-sr-only focus:fixed focus:top-2 focus:left-2 focus:z-50 focus:bg-[color:var(--forest)] focus:text-[color:var(--paper)] focus:px-3 focus:py-2 focus:rounded">
        Pular para o conteúdo
      </a>
      <div className="flex min-h-screen flex-col">
        <Header />
        <main id="conteudo" className="flex-1">
          <Outlet />
        </main>
        <Footer />
      </div>
      <FloatingButtons />
    </QueryClientProvider>
  );
}
