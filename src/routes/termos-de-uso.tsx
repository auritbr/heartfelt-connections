import { createFileRoute } from "@tanstack/react-router";
import { PageHero } from "@/components/layout/PageHero";

export const Route = createFileRoute("/termos-de-uso")({
  head: () => ({
    meta: [
      { title: "Termos de Uso — Instituto Raízes do Futuro" },
      { name: "description", content: "Regras e condições para uso deste site." },
      { property: "og:url", content: "/termos-de-uso" },
    ],
    links: [{ rel: "canonical", href: "/termos-de-uso" }],
  }),
  component: TermosPage,
});

function TermosPage() {
  return (
    <>
      <PageHero
        eyebrow="Documento legal"
        title="Termos de Uso"
        description="Condições para navegação e utilização deste site."
        image="https://images.unsplash.com/photo-1524178232363-1fb2b075b655?w=2000&q=80&auto=format&fit=crop"
        crumbs={[{ to: "/", label: "Início" }, { label: "Termos de Uso" }]}
      />
      <article className="section-y">
        <div className="container-narrow max-w-3xl space-y-8">
          {[
            { h: "Aceitação dos termos", p: "Ao acessar este site, você concorda com estes Termos de Uso." },
            { h: "Uso permitido", p: "O conteúdo deste site é destinado à informação institucional e ao público em geral, sendo vedado uso comercial não autorizado." },
            { h: "Propriedade intelectual", p: "Textos, imagens e materiais deste site são de titularidade do Instituto ou utilizados sob licença." },
            { h: "Alterações", p: "Estes Termos podem ser atualizados. Recomendamos consultá-los periodicamente." },
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
