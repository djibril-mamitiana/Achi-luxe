import { useState } from "react";
import { Menu, X, ArrowUpRight } from "lucide-react";
import { Link } from "@tanstack/react-router";

const nav = [
  { label: "PROJETS", to: "/projets" },
  { label: "SERVICES", to: "/services" },
  { label: "AGENCE", to: "/agence" },
] as const;

const drawerLinks = [
  { label: "Accueil", to: "/" },
  { label: "Projets", to: "/projets" },
  { label: "Services", to: "/services" },
  { label: "Agence", to: "/agence" },
  { label: "Contact", to: "/contact" },
] as const;

export default function Header() {
  const [open, setOpen] = useState(false);
  return (
    <>
      <header className="fixed top-0 w-full z-50 bg-surface/90 backdrop-blur-md border-b border-outline-variant transition-all duration-300 flex justify-between items-center px-margin-mobile md:px-margin-desktop py-4">
        <div className="flex items-center gap-6">
          <button
            type="button"
            aria-label="Ouvrir le menu"
            onClick={() => setOpen(true)}
            className="flex items-center gap-2 text-on-surface hover:text-primary transition-colors cursor-pointer group"
          >
            <span className="relative inline-flex h-9 w-9 items-center justify-center border border-outline-variant rounded-full bg-surface-container-low group-hover:border-primary group-hover:bg-primary/5 transition-colors">
              <Menu size={16} strokeWidth={1.75} />
            </span>
            <span className="hidden sm:inline font-label-md text-label-md tracking-widest">MENU</span>
          </button>
          <Link to="/" className="font-headline-md text-headline-md text-primary tracking-tight">
            ARCHI/LUXE
          </Link>
        </div>
        <nav className="hidden md:flex gap-8">
          {nav.map((n) => (
            <Link
              key={n.to}
              to={n.to}
              className="font-label-md text-label-md text-on-surface hover:text-primary transition-colors"
            >
              {n.label}
            </Link>
          ))}
        </nav>
        <Link
          to="/contact"
          className="group inline-flex items-center gap-2 font-label-md text-label-md bg-primary text-on-primary px-5 py-2.5 rounded-full hover:bg-primary-container transition-all shadow-sm hover:shadow-md"
        >
          CONTACT
          <ArrowUpRight size={16} className="transition-transform group-hover:translate-x-0.5 group-hover:-translate-y-0.5" />
        </Link>
      </header>

      <div
        className={`fixed inset-0 z-[60] ${open ? "" : "pointer-events-none"}`}
        aria-hidden={!open}
      >
        <div
          onClick={() => setOpen(false)}
          className={`absolute inset-0 bg-on-background/40 backdrop-blur-sm transition-opacity duration-500 ${open ? "opacity-100" : "opacity-0"}`}
        />
        <div
          className={`absolute h-full w-full md:w-96 right-0 bg-surface transition-transform duration-500 flex flex-col p-10 pointer-events-auto ${open ? "translate-x-0" : "translate-x-full"}`}
        >
          <button
            type="button"
            aria-label="Fermer le menu"
            onClick={() => setOpen(false)}
            className="self-end inline-flex h-10 w-10 items-center justify-center border border-outline-variant rounded-full text-on-surface hover:text-primary hover:border-primary transition-colors mb-12 cursor-pointer"
          >
            <X size={18} strokeWidth={1.75} />
          </button>
          <div className="flex flex-col gap-6">
            <span className="font-label-sm text-secondary uppercase tracking-widest border-b border-outline-variant pb-2">
              Navigation
            </span>
            {drawerLinks.map((l) => (
              <Link
                key={l.to}
                to={l.to}
                onClick={() => setOpen(false)}
                className="font-headline-lg text-headline-lg text-on-surface hover:text-primary transition-colors"
              >
                {l.label}
              </Link>
            ))}
          </div>
          <div className="mt-auto pt-12">
            <p className="font-body-md text-secondary text-sm">
              Design d'excellence pour tous budgets.
            </p>
          </div>
        </div>
      </div>
    </>
  );
}