import { Link } from "@tanstack/react-router";

export default function Footer() {
  return (
    <footer className="bg-on-background text-surface w-full pt-20 pb-10">
      <div className="px-margin-mobile md:px-margin-desktop max-w-[1280px] mx-auto">
        <div className="grid grid-cols-1 md:grid-cols-12 gap-gutter mb-20">
          <div className="md:col-span-5">
            <span className="font-headline-md text-headline-md text-primary block mb-6">
              ARCHI/LUXE
            </span>
            <p className="font-body-md text-surface-variant/90 max-w-sm mb-8">
              Agence de design et d'architecture transversale. Nous transformons les
              contraintes en opportunités esthétiques pour tous types d'habitat.
            </p>
            <div className="flex gap-4">
              <a className="p-2 border border-surface-variant/30 hover:border-primary transition-colors" href="#" aria-label="Partager">
                <span className="material-symbols-outlined text-sm">share</span>
              </a>
              <a className="p-2 border border-surface-variant/30 hover:border-primary transition-colors" href="#" aria-label="Site public">
                <span className="material-symbols-outlined text-sm">public</span>
              </a>
            </div>
          </div>
          <div className="md:col-span-2 flex flex-col gap-4">
            <span className="font-label-sm text-surface-variant/80 uppercase tracking-widest mb-2">
              Structure
            </span>
            <Link to="/projets" className="text-label-md hover:text-primary transition-colors">Projets</Link>
            <Link to="/services" className="text-label-md hover:text-primary transition-colors">Services</Link>
            <Link to="/contact" className="text-label-md hover:text-primary transition-colors">Contact</Link>
          </div>
          <div className="md:col-span-5">
            <span className="font-label-sm text-surface-variant/80 uppercase tracking-widest mb-6 block">
              Restez Connecté
            </span>
            <form className="flex gap-2" onSubmit={(e) => e.preventDefault()}>
              <input
                type="email"
                placeholder="E-mail pour les archives"
                className="bg-transparent border-0 border-b border-surface-variant/40 flex-1 py-2 text-surface focus:ring-0 focus:border-primary transition-all font-body-md placeholder:text-surface-variant/60 outline-none"
              />
              <button type="submit" className="text-primary hover:text-surface transition-colors p-2" aria-label="S'inscrire">
                <span className="material-symbols-outlined">east</span>
              </button>
            </form>
          </div>
        </div>
        <div className="pt-8 border-t border-surface-variant/20 flex flex-col md:flex-row justify-between items-center gap-6">
          <span className="font-label-sm text-surface-variant/70 uppercase tracking-widest">
            © 2026 ARCHI/LUXE — DESIGN VERSATILE
          </span>
          <div className="flex gap-8">
            <a className="font-label-sm text-surface-variant/70 hover:text-surface transition-colors" href="#">Legal</a>
            <a className="font-label-sm text-surface-variant/70 hover:text-surface transition-colors" href="#">Confidentialité</a>
          </div>
        </div>
      </div>
    </footer>
  );
}