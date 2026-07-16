import { Link } from "@tanstack/react-router";
import { Leaf, Instagram, Facebook, Youtube, Linkedin, MapPin, Phone, Mail } from "lucide-react";
import { site } from "@/lib/site-data";

export function Footer() {
  return (
    <footer className="mt-24 bg-[color:var(--forest)] text-[color:var(--paper)]">
      {/* Decorative organic top edge (roots/leaves inspired) */}
      <svg viewBox="0 0 1440 60" className="block w-full h-8 text-[color:var(--forest)]" aria-hidden preserveAspectRatio="none">
        <path d="M0 60 C 240 10 480 50 720 30 C 960 10 1200 50 1440 20 L 1440 60 Z" fill="currentColor" />
      </svg>

      <div className="container-narrow py-14 grid gap-10 md:grid-cols-2 lg:grid-cols-4">
        <div>
          <div className="flex items-center gap-2.5">
            <span className="grid h-10 w-10 place-items-center rounded-full bg-[color:var(--paper)] text-[color:var(--forest)]">
              <Leaf className="h-5 w-5" aria-hidden />
            </span>
            <div className="leading-tight">
              <div className="font-display font-bold">{site.name}</div>
              <div className="text-xs uppercase tracking-widest opacity-80">{site.tagline}</div>
            </div>
          </div>
          <p className="mt-4 text-sm opacity-85">
            Ponto de Cultura dedicado à educação ambiental, à leitura e à valorização dos saberes comunitários.
          </p>
        </div>

        <div>
          <h3 className="text-sm font-semibold uppercase tracking-wider opacity-90">Institucional</h3>
          <ul className="mt-4 space-y-2 text-sm">
            <li><Link to="/quem-somos" className="hover:underline">Quem somos</Link></li>
            <li><Link to="/quem-somos/equipe" className="hover:underline">Nossa equipe</Link></li>
            <li><Link to="/quem-somos/transparencia" className="hover:underline">Transparência</Link></li>
            <li><Link to="/noticias" className="hover:underline">Notícias</Link></li>
            <li><Link to="/galeria" className="hover:underline">Galeria</Link></li>
            <li><Link to="/contato" className="hover:underline">Contato</Link></li>
          </ul>
        </div>

        <div>
          <h3 className="text-sm font-semibold uppercase tracking-wider opacity-90">Contato</h3>
          <ul className="mt-4 space-y-3 text-sm">
            <li className="flex gap-2"><MapPin className="h-4 w-4 mt-0.5 shrink-0" aria-hidden /><span>{site.address}</span></li>
            <li className="flex gap-2"><Phone className="h-4 w-4 mt-0.5 shrink-0" aria-hidden /><span>{site.phone}</span></li>
            <li className="flex gap-2"><Mail className="h-4 w-4 mt-0.5 shrink-0" aria-hidden /><a href={`mailto:${site.email}`} className="hover:underline">{site.email}</a></li>
          </ul>
          <div className="mt-4 flex gap-3">
            <a href={site.social.instagram} aria-label="Instagram" className="rounded-full border border-[color:var(--paper)]/40 p-2 hover:bg-[color:var(--paper)]/10"><Instagram className="h-4 w-4" /></a>
            <a href={site.social.facebook} aria-label="Facebook" className="rounded-full border border-[color:var(--paper)]/40 p-2 hover:bg-[color:var(--paper)]/10"><Facebook className="h-4 w-4" /></a>
            <a href={site.social.youtube} aria-label="YouTube" className="rounded-full border border-[color:var(--paper)]/40 p-2 hover:bg-[color:var(--paper)]/10"><Youtube className="h-4 w-4" /></a>
            <a href={site.social.linkedin} aria-label="LinkedIn" className="rounded-full border border-[color:var(--paper)]/40 p-2 hover:bg-[color:var(--paper)]/10"><Linkedin className="h-4 w-4" /></a>
          </div>
        </div>

        <div>
          <h3 className="text-sm font-semibold uppercase tracking-wider opacity-90">Documentos</h3>
          <ul className="mt-4 space-y-2 text-sm">
            <li><Link to="/politica-de-privacidade" className="hover:underline">Política de Privacidade</Link></li>
            <li><Link to="/politica-de-cookies" className="hover:underline">Política de Cookies</Link></li>
            <li><Link to="/termos-de-uso" className="hover:underline">Termos de Uso</Link></li>
            <li><Link to="/quem-somos/transparencia" className="hover:underline">Transparência</Link></li>
          </ul>
          <p className="mt-4 text-xs opacity-80">CNPJ {site.cnpj}</p>
        </div>
      </div>

      <div className="border-t border-[color:var(--paper)]/15">
        <div className="container-narrow py-5 text-xs opacity-80 flex flex-col md:flex-row items-center justify-between gap-2">
          <span>© {new Date().getFullYear()} {site.name}. Todos os direitos reservados.</span>
          <span>Feito com cuidado com o território.</span>
        </div>
      </div>
    </footer>
  );
}
