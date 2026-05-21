import { createFileRoute, Link } from "@tanstack/react-router";
import Header from "@/components/site/Header";
import Footer from "@/components/site/Footer";

export const Route = createFileRoute("/services")({
  head: () => ({
    meta: [
      { title: "Services & Honoraires — ARCHI/LUXE" },
      { name: "description", content: "Architecture intérieure, design extérieur, villas, rénovation et visualisation 3D — ARCHI/LUXE." },
      { property: "og:title", content: "Services & Honoraires — ARCHI/LUXE" },
      { property: "og:description", content: "Architecture intérieure, design extérieur, villas, rénovation et visualisation 3D — ARCHI/LUXE." },
    ],
  }),
  component: ServicesPage,
});

function ServicesPage() {
  return (
    <div className="bg-background text-on-background min-h-screen">
      <Header />
      <main className="pt-32">

<section className="px-margin-mobile md:px-margin-desktop mb-section-gap">
<span className="font-label-md text-primary mb-4 block">NOS SERVICES</span>
<h1 className="font-headline-xl text-[48px] md:text-headline-xl leading-tight mb-8">L'Excellence accessible.</h1>
<p className="font-body-lg text-secondary max-w-2xl">
                Parce que chaque projet est unique, nous adaptons notre expertise à votre vision. Nos services sont entièrement <strong>modulables et conçus pour respecter tous les budgets</strong>, de la consultation ponctuelle à la gestion complète.
            </p>
<div className="mt-16 w-full h-[400px] md:h-[600px] overflow-hidden relative">
<img alt="Architecture Luxe" className="w-full h-full object-cover" data-alt="A wide-angle cinematic shot of a stunning minimalist luxury villa with floor-to-ceiling glass walls, nestled in a serene natural landscape during golden hour. The interior is softly illuminated with warm designer lighting that complements the cool blue tones of the dusk sky. The overall aesthetic is one of quiet luxury, featuring clean architectural lines, premium natural stone materials, and a sense of absolute tranquility." src="https://lh3.googleusercontent.com/aida-public/AB6AXuD0u1b3FwVycdMZv-vsKxUSEGjgxpm0aSM66JF9AWdr9zPFGjuaTPSOuuGMzSr_OpunNhlQj6KSTT3wrGB1EHXqphLVne2XaO1a7KMIKWos0N0vrDxFs8FEiLWMiPNjeJ03PzWk7S4XQS2IetRWrw_fHnof5nmn_9uFkaCaDP5SP4F8teiMVTZ680jpW5u2woBqjNbh-nRkPKVdw1l09gWxIJ8qez8bvzgDLWxByRObyMogOqkbIKw7jpe3lNvJqg07hh9j-NRuJmQ"/>
<div className="absolute inset-0 bg-primary/5"></div>
</div>
</section>

<section className="px-margin-mobile md:px-margin-desktop mb-section-gap">
<div className="grid grid-cols-1 md:grid-cols-2 gap-gutter">

<div className="bg-surface-container p-10 flex flex-col justify-between border-l-4 border-primary/40 hover:border-primary transition-all duration-300">
<div>
<span className="font-label-sm text-primary mb-4 block uppercase tracking-widest">Option Agile</span>
<h2 className="font-headline-lg mb-6">Consultation Express</h2>
<p className="font-body-md text-on-surface-variant mb-8">
                            Un format intensif et flexible pour débloquer votre projet. Idéal pour les petits budgets ou pour obtenir un avis expert sur des points précis : agencement, choix des matériaux ou diagnostic technique.
                        </p>
<ul className="flex flex-col gap-3 mb-12">
<li className="flex items-center gap-2 font-label-md text-secondary">
<span className="material-symbols-outlined text-primary text-lg">check_circle</span>
                                Rendez-vous de 2h sur site
                            </li>
<li className="flex items-center gap-2 font-label-md text-secondary">
<span className="material-symbols-outlined text-primary text-lg">check_circle</span>
                                Carnet d'intentions rapide
                            </li>
<li className="flex items-center gap-2 font-label-md text-secondary">
<span className="material-symbols-outlined text-primary text-lg">check_circle</span>
                                Budget maîtrisé et forfaitaire
                            </li>
</ul>
</div>
<Link to="/contact" className="block text-center w-full py-4 border border-primary text-primary font-label-md hover:bg-primary hover:text-on-primary transition-all rounded-full">S'INFORMER</Link>
</div>

<div className="bg-primary text-on-primary p-10 flex flex-col justify-between shadow-xl">
<div>
<span className="font-label-sm text-primary-fixed mb-4 block uppercase tracking-widest">Service Signature</span>
<h2 className="font-headline-lg mb-6">Gestion de Projet Complète</h2>
<p className="font-body-md opacity-90 mb-8 text-on-primary-container">
                            L'accompagnement haut de gamme de A à Z. De l'esquisse architecturale à la remise des clés, nous gérons chaque aspect technique, esthétique et administratif de votre réalisation.
                        </p>
<ul className="flex flex-col gap-3 mb-12">
<li className="flex items-center gap-2 font-label-md">
<span className="material-symbols-outlined text-primary-fixed text-lg">verified</span>
                                Conception &amp; Plans d'Exécution
                            </li>
<li className="flex items-center gap-2 font-label-md">
<span className="material-symbols-outlined text-primary-fixed text-lg">verified</span>
                                Appel d'offres &amp; Suivi de Chantier
                            </li>
<li className="flex items-center gap-2 font-label-md">
<span className="material-symbols-outlined text-primary-fixed text-lg">verified</span>
                                Design de mobilier sur-mesure
                            </li>
</ul>
</div>
<Link to="/contact" className="block text-center w-full py-4 bg-white text-primary font-label-md hover:bg-primary-fixed transition-all rounded-full">DÉBUTER LE PROJET</Link>
</div>
</div>
</section>

<section className="px-margin-mobile md:px-margin-desktop mb-section-gap">
<div className="flex flex-col md:flex-row justify-between items-end mb-12">
<div className="max-w-xl">
<h2 className="font-headline-lg mb-4">Expertises à la carte</h2>
<p className="font-body-md text-secondary">Sélectionnez uniquement les modules dont vous avez besoin pour une solution sur-mesure adaptée à votre enveloppe budgétaire.</p>
</div>
</div>
<div className="grid grid-cols-1 md:grid-cols-3 gap-6">

<div className="group bg-surface-container-low p-8 hover:bg-surface-variant transition-colors">
<span className="material-symbols-outlined text-primary mb-6 text-3xl">architecture</span>
<h3 className="font-headline-md mb-3 text-lg">Conception Architecturale</h3>
<p className="font-body-md text-on-surface-variant text-sm mb-6">Sculpter l'espace et la lumière pour créer des structures iconiques et pérennes.</p>
<a className="font-label-sm text-primary flex items-center gap-1 group-hover:gap-2 transition-all" href="#">DÉTAILS <span className="material-symbols-outlined text-sm">arrow_right_alt</span></a>
</div>

<div className="group bg-surface-container-low p-8 hover:bg-surface-variant transition-colors">
<span className="material-symbols-outlined text-primary mb-6 text-3xl">chair</span>
<h3 className="font-headline-md mb-3 text-lg">Design d'Intérieur</h3>
<p className="font-body-md text-on-surface-variant text-sm mb-6">Harmoniser matières et volumes pour des ambiances d'une élégance intemporelle.</p>
<a className="font-label-sm text-primary flex items-center gap-1 group-hover:gap-2 transition-all" href="#">DÉTAILS <span className="material-symbols-outlined text-sm">arrow_right_alt</span></a>
</div>

<div className="group bg-surface-container-low p-8 hover:bg-surface-variant transition-colors">
<span className="material-symbols-outlined text-primary mb-6 text-3xl">history_edu</span>
<h3 className="font-headline-md mb-3 text-lg">Rénovation de Prestige</h3>
<p className="font-body-md text-on-surface-variant text-sm mb-6">Restaurer le patrimoine avec une précision chirurgicale et un respect absolu du bâti.</p>
<a className="font-label-sm text-primary flex items-center gap-1 group-hover:gap-2 transition-all" href="#">DÉTAILS <span className="material-symbols-outlined text-sm">arrow_right_alt</span></a>
</div>

<div className="group bg-surface-container-low p-8 hover:bg-surface-variant transition-colors">
<span className="material-symbols-outlined text-primary mb-6 text-3xl">nature_people</span>
<h3 className="font-headline-md mb-3 text-lg">Architecture de Paysage</h3>
<p className="font-body-md text-on-surface-variant text-sm mb-6">Prolonger l'architecture vers l'extérieur pour une immersion totale dans la nature.</p>
<a className="font-label-sm text-primary flex items-center gap-1 group-hover:gap-2 transition-all" href="#">DÉTAILS <span className="material-symbols-outlined text-sm">arrow_right_alt</span></a>
</div>

<div className="group bg-surface-container-low p-8 hover:bg-surface-variant transition-colors">
<span className="material-symbols-outlined text-primary mb-6 text-3xl">light_mode</span>
<h3 className="font-headline-md mb-3 text-lg">Design Lumière</h3>
<p className="font-body-md text-on-surface-variant text-sm mb-6">Sublimer chaque recoin par une mise en lumière scénographique et technique.</p>
<a className="font-label-sm text-primary flex items-center gap-1 group-hover:gap-2 transition-all" href="#">DÉTAILS <span className="material-symbols-outlined text-sm">arrow_right_alt</span></a>
</div>

<div className="group bg-surface-container-low p-8 hover:bg-surface-variant transition-colors">
<span className="material-symbols-outlined text-primary mb-6 text-3xl">business_center</span>
<h3 className="font-headline-md mb-3 text-lg">Audit &amp; Conseil</h3>
<p className="font-body-md text-on-surface-variant text-sm mb-6">Accompagnement stratégique pour sécuriser vos investissements immobiliers.</p>
<a className="font-label-sm text-primary flex items-center gap-1 group-hover:gap-2 transition-all" href="#">DÉTAILS <span className="material-symbols-outlined text-sm">arrow_right_alt</span></a>
</div>
</div>
</section>

<section className="py-24 px-margin-mobile md:px-margin-desktop bg-surface-container-highest text-on-background">
<div className="max-w-4xl mx-auto text-center mb-20">
<span className="font-label-md text-primary mb-4 block">MÉTHODOLOGIE</span>
<h2 className="font-headline-xl mb-6">Un parcours flexible</h2>
<p className="font-body-md text-secondary">De la première écoute à la livraison finale, nous adaptons le rythme et l'ampleur de nos interventions selon vos priorités.</p>
</div>
<div className="flex flex-col md:flex-row justify-between items-start gap-8 relative">
<div className="hidden md:block absolute top-10 left-0 w-full h-[1px] bg-primary/20 z-0"></div>

<div className="relative z-10 flex flex-col items-center text-center group w-full">
<div className="w-20 h-20 rounded-full border-2 border-primary flex items-center justify-center bg-surface mb-4 group-hover:bg-primary group-hover:text-on-primary transition-all duration-300">
<span className="material-symbols-outlined text-2xl font-bold">handshake</span>
</div>
<h3 className="font-label-md mb-1">Contact</h3>
<p className="text-[10px] text-primary font-bold uppercase tracking-widest">Étape 01</p>
</div>
<div className="relative z-10 flex flex-col items-center text-center group w-full">
<div className="w-20 h-20 rounded-full border-2 border-primary/30 flex items-center justify-center bg-surface mb-4 group-hover:border-primary group-hover:bg-primary group-hover:text-on-primary transition-all duration-300">
<span className="material-symbols-outlined text-2xl">edit_note</span>
</div>
<h3 className="font-label-md mb-1">Cadrage</h3>
<p className="text-[10px] text-secondary font-bold uppercase tracking-widest">Étape 02</p>
</div>
<div className="relative z-10 flex flex-col items-center text-center group w-full">
<div className="w-20 h-20 rounded-full border-2 border-primary/30 flex items-center justify-center bg-surface mb-4 group-hover:border-primary group-hover:bg-primary group-hover:text-on-primary transition-all duration-300">
<span className="material-symbols-outlined text-2xl">brush</span>
</div>
<h3 className="font-label-md mb-1">Design</h3>
<p className="text-[10px] text-secondary font-bold uppercase tracking-widest">Étape 03</p>
</div>
<div className="relative z-10 flex flex-col items-center text-center group w-full">
<div className="w-20 h-20 rounded-full border-2 border-primary/30 flex items-center justify-center bg-surface mb-4 group-hover:border-primary group-hover:bg-primary group-hover:text-on-primary transition-all duration-300">
<span className="material-symbols-outlined text-2xl">precision_manufacturing</span>
</div>
<h3 className="font-label-md mb-1">Travaux</h3>
<p className="text-[10px] text-secondary font-bold uppercase tracking-widest">Étape 04</p>
</div>
<div className="relative z-10 flex flex-col items-center text-center group w-full">
<div className="w-20 h-20 rounded-full border-2 border-primary/30 flex items-center justify-center bg-surface mb-4 group-hover:border-primary group-hover:bg-primary group-hover:text-on-primary transition-all duration-300">
<span className="material-symbols-outlined text-2xl">key_visualizer</span>
</div>
<h3 className="font-label-md mb-1">Remise</h3>
<p className="text-[10px] text-secondary font-bold uppercase tracking-widest">Étape 05</p>
</div>
</div>
</section>

<section className="py-24 px-margin-mobile md:px-margin-desktop text-center bg-primary text-on-primary">
<h2 className="font-headline-xl mb-6">Prêt à donner vie à votre vision ?</h2>
<p className="font-body-lg mb-10 max-w-2xl mx-auto opacity-90">Parlons de votre projet, de vos envies et de votre budget. Notre première étude de faisabilité est offerte.</p>
<div className="flex flex-col md:flex-row gap-4 justify-center">
<Link to="/contact" className="px-10 py-4 bg-white text-primary font-label-md hover:bg-surface-variant transition-all rounded-full">DEMANDER UN DEVIS</Link>
<Link to="/contact" className="px-10 py-4 border border-white text-white font-label-md hover:bg-white/10 transition-all rounded-full">PRENDRE RDV</Link>
</div>
</section>
</main>
      <Footer />
    </div>
  );
}
