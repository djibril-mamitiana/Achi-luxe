import { createFileRoute, Link } from "@tanstack/react-router";
import { ArrowUpRight, Award, Compass, Hammer, Sparkles } from "lucide-react";
import Header from "@/components/site/Header";
import Footer from "@/components/site/Footer";

export const Route = createFileRoute("/agence")({
  head: () => ({
    meta: [
      { title: "Agence — ARCHI/LUXE" },
      { name: "description", content: "Notre studio d'architecture & design : philosophie, méthode et équipe." },
      { property: "og:title", content: "Agence — ARCHI/LUXE" },
      { property: "og:description", content: "Notre studio d'architecture & design : philosophie, méthode et équipe." },
    ],
  }),
  component: AgencePage,
});

const values = [
  { icon: Compass, title: "Justesse", text: "Chaque décision est ancrée dans le site, l'usage et le budget. Pas de geste gratuit." },
  { icon: Sparkles, title: "Élégance", text: "Un luxe discret porté par la lumière, la matière et la proportion plutôt que l'ostentation." },
  { icon: Hammer, title: "Maîtrise", text: "Suivi de chantier rigoureux, partenaires artisans triés sur le volet, livrables tenus." },
  { icon: Award, title: "Singularité", text: "Aucun projet répliqué. Une écriture sur-mesure pour chaque maître d'ouvrage." },
];

function AgencePage() {
  return (
    <div className="bg-background text-on-background min-h-screen">
      <Header />
      <main className="pt-[120px]">
        <section className="px-margin-mobile md:px-margin-desktop mb-section-gap">
          <div className="max-w-[1280px] mx-auto grid lg:grid-cols-12 gap-gutter items-end">
            <div className="lg:col-span-7">
              <span className="inline-block px-3 py-1 bg-surface-container text-label-sm font-label-sm uppercase tracking-widest mb-6">
                Manifeste
              </span>
              <h1 className="font-headline-xl text-4xl md:text-headline-xl text-on-background">
                Un studio où l'architecture <em className="text-primary not-italic">se vit</em>.
              </h1>
            </div>
            <p className="lg:col-span-5 font-body-lg text-body-lg text-secondary">
              ARCHI/LUXE est une agence transversale fondée sur une conviction : le design d'excellence
              n'est pas réservé à quelques-uns. Du studio urbain à la villa d'exception, nous concevons
              des espaces singuliers, durables et habités.
            </p>
          </div>
        </section>

        <section className="px-margin-mobile md:px-margin-desktop mb-section-gap">
          <div className="max-w-[1280px] mx-auto">
            <img
              alt="Atelier ARCHI/LUXE"
              className="w-full aspect-[16/8] object-cover"
              src="https://lh3.googleusercontent.com/aida-public/AB6AXuDx2qUeUDS8qrwk_9QqPlYxHvFhVl1jRp_GPo40raqsKonLgqypwYSM6A3VfIs0mZqNwq18oTBhTaWh3F10OStq97JL2v0O6rCuHt41zLsHq0Nn0liud6z-yz9MDet2gZzTRm0IqqhH2XQ6zKL8D4Ha_-FKaiaUkqEbwLsVHMPWfO4zYrJh6tNcTIlGCppBsSVQ1aus70mVF8P6zFmUygB6udpe4YPmByb_YW3anbEFO_Cu7nmALipS3jLEuB9j3Ug06xY4rtMm6is"
            />
          </div>
        </section>

        <section className="px-margin-mobile md:px-margin-desktop mb-section-gap">
          <div className="max-w-[1280px] mx-auto">
            <span className="inline-block px-3 py-1 bg-surface-container text-label-sm font-label-sm uppercase tracking-widest mb-4">
              Valeurs
            </span>
            <h2 className="font-headline-lg text-headline-lg text-on-background mb-12">Ce qui guide notre studio</h2>
            <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-6">
              {values.map(({ icon: Icon, title, text }) => (
                <div
                  key={title}
                  className="group p-8 bg-surface-container-lowest border border-outline-variant hover:border-primary transition-colors"
                >
                  <Icon size={28} strokeWidth={1.5} className="text-primary mb-6" />
                  <h3 className="font-headline-md text-xl mb-3">{title}</h3>
                  <p className="font-body-md text-secondary text-sm">{text}</p>
                </div>
              ))}
            </div>
          </div>
        </section>

        <section className="px-margin-mobile md:px-margin-desktop mb-section-gap">
          <div className="max-w-[1280px] mx-auto bg-on-background text-surface p-12 md:p-20">
            <div className="grid lg:grid-cols-12 gap-gutter items-center">
              <div className="lg:col-span-7">
                <h2 className="font-headline-xl text-3xl md:text-headline-xl italic mb-6">
                  Construisons ensemble.
                </h2>
                <p className="font-body-lg text-surface-variant max-w-xl">
                  Première consultation offerte pour cadrer vos besoins, votre programme et votre budget.
                </p>
              </div>
              <div className="lg:col-span-5 flex flex-wrap gap-4 lg:justify-end">
                <Link
                  to="/contact"
                  className="inline-flex items-center gap-2 bg-primary text-on-primary px-8 py-4 font-label-md text-label-md hover:bg-primary-container transition-all rounded-full"
                >
                  DÉBUTER UNE ÉTUDE <ArrowUpRight size={16} />
                </Link>
                <Link
                  to="/projets"
                  className="inline-flex items-center gap-2 border border-surface-variant/40 text-surface px-8 py-4 font-label-md text-label-md hover:border-primary hover:text-primary transition-all rounded-full"
                >
                  VOIR LES PROJETS
                </Link>
              </div>
            </div>
          </div>
        </section>
      </main>
      <Footer />
    </div>
  );
}