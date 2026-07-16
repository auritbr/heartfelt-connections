import { createFileRoute } from "@tanstack/react-router";
import { PageHero } from "@/components/layout/PageHero";

export const Route = createFileRoute("/politica-de-cookies")({
  head: () => ({
    meta: [
      { title: "Política de Cookies — Instituto Raízes do Futuro" },
      { name: "description", content: "Como utilizamos cookies neste site." },
      { property: "og:url", content: "/politica-de-cookies" },
    ],
    links: [{ rel: "canonical", href: "/politica-de-cookies" }],
  }),
  component: CookiesPage,
});

function CookiesPage() {
  return (
    <>
      <PageHero
        eyebrow="Documento legal"
        title="Política de Cookies"
        description="Como e por que utilizamos cookies neste site."
        image="https://images.unsplash.com/photo-1481627834876-b7833e8f5570?w=2000&q=80&auto=format&fit=crop"
        crumbs={[{ to: "/", label: "Início" }, { label: "Política de Cookies" }]}
      />
      <article className="section-y">
        <div className="container-narrow max-w-3xl space-y-8">
          {[
            { h: "O que são cookies", p: "Cookies são pequenos arquivos armazenados no seu navegador que permitem reconhecer preferências e melhorar a navegação." },
            { h: "Categorias utilizadas", p: "Utilizamos cookies necessários (essenciais), de análise, de funcionalidade e, quando aplicável, de marketing." },
            { h: "Gerenciamento", p: "Você pode alterar suas preferências a qualquer momento pelo botão de cookies presente no rodapé da tela." },
            { h: "Bases legais", p: "O tratamento de dados via cookies é fundamentado no consentimento e no legítimo interesse, conforme a LGPD." },
          ].map((s) => (
            <section key={s.h}>
              <h2 className="font-display text-xl font-bold text-[color:var(--forest)]">{s.h}</h2>
              <p className="mt-3 text-sm leading-relaxed text-muted-foreground">{s.p}</p>
            </section>
          ))}
        </div>
      </article>
    </>
  );
}
