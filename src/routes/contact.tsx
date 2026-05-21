import { createFileRoute } from "@tanstack/react-router";
import Header from "@/components/site/Header";
import Footer from "@/components/site/Footer";

export const Route = createFileRoute("/contact")({
  head: () => ({
    meta: [
      { title: "Contact — ARCHI/LUXE" },
      { name: "description", content: "Architecture intérieure, design extérieur, villas, rénovation et visualisation 3D — ARCHI/LUXE." },
      { property: "og:title", content: "Contact — ARCHI/LUXE" },
      { property: "og:description", content: "Architecture intérieure, design extérieur, villas, rénovation et visualisation 3D — ARCHI/LUXE." },
    ],
  }),
  component: ContactPage,
});

function ContactPage() {
  return (
    <div className="bg-background text-on-background min-h-screen">
      <Header />
      <main className="max-w-max-width mx-auto px-margin-mobile md:px-margin-desktop pb-section-gap">
<div className="grid grid-cols-1 md:grid-cols-12 gap-12">

<div className="md:col-span-7 reveal-up">
<div className="bg-white p-8 md:p-10 rounded-2xl shadow-[0_8px_30px_rgb(0,0,0,0.04)] border border-outline-variant/30">
<h2 className="font-headline-md text-headline-md mb-8 text-primary">Dites-nous tout</h2>
<form className="space-y-6">
<div className="grid grid-cols-1 md:grid-cols-2 gap-6">
<div className="space-y-2">
<label className="font-label-md text-label-md text-secondary ml-1">Nom Complet</label>
<input className="w-full bg-surface-container-low border-transparent focus:border-primary focus:ring-0 rounded-xl px-5 py-4 text-body-md text-on-background placeholder:text-outline/50 transition-all" placeholder="Jean Dupont" type="text"/>
</div>
<div className="space-y-2">
<label className="font-label-md text-label-md text-secondary ml-1">Email</label>
<input className="w-full bg-surface-container-low border-transparent focus:border-primary focus:ring-0 rounded-xl px-5 py-4 text-body-md text-on-background placeholder:text-outline/50 transition-all" placeholder="jean@exemple.com" type="email"/>
</div>
</div>
<div className="space-y-2">
<label className="font-label-md text-label-md text-secondary ml-1">Votre Projet</label>
<input className="w-full bg-surface-container-low border-transparent focus:border-primary focus:ring-0 rounded-xl px-5 py-4 text-body-md text-on-background placeholder:text-outline/50 transition-all" placeholder="Quel est votre rêve ?" type="text"/>
</div>
<div className="space-y-2">
<label className="font-label-md text-label-md text-secondary ml-1">Message</label>
<textarea className="w-full bg-surface-container-low border-transparent focus:border-primary focus:ring-0 rounded-xl px-5 py-4 text-body-md text-on-background placeholder:text-outline/50 transition-all resize-none" placeholder="Partagez quelques détails avec nous..." rows={4}></textarea>
</div>
<button className="w-full md:w-auto flex items-center justify-center gap-3 bg-primary text-on-primary px-10 py-5 rounded-full font-label-md text-label-md hover:bg-primary-container hover:shadow-lg hover:shadow-primary/20 transition-all duration-300" type="submit">
                            DÉMARRER LA DISCUSSION
                            <span className="material-symbols-outlined text-lg">send</span>
</button>
</form>
</div>
</div>

<div className="md:col-span-5 space-y-12">

<section className="reveal-up bg-surface-container-high/30 p-8 rounded-2xl" style={{ transitionDelay: "200ms" }}>
<h3 className="font-label-md text-label-md text-primary mb-8 border-b border-primary/20 pb-4">RETROUVEZ-NOUS</h3>
<div className="space-y-8">
<div className="flex items-start gap-4">
<span className="material-symbols-outlined text-primary-container mt-1">call</span>
<div>
<p className="text-[10px] font-bold text-outline uppercase tracking-widest mb-1">Téléphone</p>
<a className="text-body-lg font-semibold hover:text-primary transition-colors" href="tel:+33123456789">+33 (0)1 23 45 67 89</a>
</div>
</div>
<div className="flex items-start gap-4">
<span className="material-symbols-outlined text-primary-container mt-1">mail</span>
<div>
<p className="text-[10px] font-bold text-outline uppercase tracking-widest mb-1">Email</p>
<a className="text-body-lg font-semibold hover:text-primary transition-colors" href="mailto:contact@archiluxe.com">contact@archiluxe.com</a>
</div>
</div>
<div className="flex items-start gap-4">
<span className="material-symbols-outlined text-primary-container mt-1">location_on</span>
<div>
<p className="text-[10px] font-bold text-outline uppercase tracking-widest mb-1">Adresse</p>
<address className="not-italic text-body-lg font-semibold">12 Avenue de l'Opéra, 75001 Paris</address>
</div>
</div>
<div className="pt-4 flex gap-6">
<a className="bg-white p-3 rounded-full shadow-sm hover:text-primary hover:shadow-md transition-all" href="#"><img alt="Instagram" className="w-6 h-6" src="https://lh3.googleusercontent.com/aida-public/AB6AXuCzjGVlRIjQbFQ9E5sQy_Yvawjaq3MH_LbYoOpA2UaDkJz0tIIWi6r0DbuPWiPrnb_zV4F0-uaTdtZxSBoOdbWSkaVFIaV1slHINrHk9HhBv8KXel-Ne_u4VZuQ1Xw1wfWlKiKwE2P5JkjYvaVMkx3eplmQkY6xn9ispcZdL4rzEVUw4gvN-Wo_zyL3ELGHnEOvyJvwWji9xEPuVutdTMfOJ_kyltoG2xzBN_gLlQKMRI_9BDsuuD6i497k0NeX9s_O3QN59cozZCw"/></a>
<a className="bg-white p-3 rounded-full shadow-sm hover:text-primary hover:shadow-md transition-all" href="#"><img alt="LinkedIn" className="w-6 h-6" src="https://lh3.googleusercontent.com/aida-public/AB6AXuBre0HGdsTLzzenFkPiKR51ZjlA_1dxmX0DAgRYxpEVVRvyUL4zDBk1f-0Txf2i3q1sD4iaMGRk-rseWzKgBKb68JPpNV-2y8TFxVds1B67SpaB-mG_f543bEcORZym_2hoRHA-wYjImW2LnbvkKHT_VLrdcEmmUQfmvOWICiIitEBE7GjCoBtvpUiILTuNOo-JsL10WxrqWH3rGKyHyLyr9ZV44zoSiH_kzm6cUpFJvJ0oMS2ZruFSgOU7wN83em-q16pHdFWqe2s"/></a>
</div>
</div>
</section>

<section className="reveal-up" style={{ transitionDelay: "300ms" }}>
<div className="relative p-12 overflow-hidden rounded-2xl bg-primary text-on-primary">
<div className="relative z-10">
<span className="material-symbols-outlined text-4xl mb-6 opacity-50">format_quote</span>
<blockquote className="font-headline-md text-headline-md italic leading-tight mb-8">
                                "Chaque projet est une nouvelle histoire à écrire, quel que soit son volume."
                            </blockquote>
<p className="font-body-md text-on-primary/80">
                                Nous croyons que la qualité de vie dépend de l'harmonie de son environnement. Nous accompagnons particuliers et professionnels dans la création de lieux vibrants.
                            </p>
</div>
<div className="absolute -right-12 -bottom-12 w-48 h-48 bg-white/10 rounded-full blur-3xl"></div>
</div>
</section>
</div>
</div>

<section className="mt-section-gap reveal-up">
<div className="relative w-full h-[500px] rounded-3xl overflow-hidden shadow-xl border border-outline-variant/30">
<img className="w-full h-full object-cover grayscale hover:grayscale-0 transition-all duration-1000" data-alt="Sophisticated architectural map of Paris" src="https://lh3.googleusercontent.com/aida-public/AB6AXuDiY6RZuDSnJGFqYGYX2UkhzyuWGt_Wq_aDzhEPjBx_6m-e3VR4RAtNKlhJPJnqwfTnk5mYoPWOGujTK_aMD3493PDjjo0spfvNvLzJET3KNPPSjWrPpYLCoDvp9M5hlL3MdGUQFAt9lfoDhocCWghLzhhxxEuQyyRlIRCc-PESYFyw65ZLCnznn-mNBNfMsVKOSIQgpiOheZKIVHXrc76nSUjYFN9FYpDloG-ti2ugioMdjDfjN7n7EzjTEa-jES92OOPNuzV1cjI"/>
<div className="absolute inset-0 bg-primary/5 pointer-events-none"></div>
<div className="absolute bottom-8 left-8 right-8 md:right-auto bg-surface p-8 rounded-2xl shadow-2xl max-w-sm reveal-up active border border-primary/10">
<p className="font-label-sm text-label-sm text-primary-container mb-2 uppercase font-bold tracking-widest">Notre Studio</p>
<h4 className="font-headline-md text-headline-md mb-3">L'Atelier Haussmann</h4>
<p className="font-body-md text-on-surface-variant mb-6">Un espace ouvert à la co-création au cœur du Triangle d'Or.</p>
<button className="w-full md:w-auto font-label-md text-label-md bg-primary text-on-primary px-8 py-3 rounded-full hover:bg-primary-container transition-all">VOIR L'ITINÉRAIRE</button>
</div>
</div>
</section>
</main>
      <Footer />
    </div>
  );
}
