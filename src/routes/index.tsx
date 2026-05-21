import { createFileRoute } from "@tanstack/react-router";
import { Link } from "@tanstack/react-router";
import Header from "@/components/site/Header";
import Footer from "@/components/site/Footer";

export const Route = createFileRoute("/")({
  head: () => ({
    meta: [
      { title: "ARCHI/LUXE — Architecture & design pour tous vos projets" },
      { name: "description", content: "Architecture intérieure, design extérieur, villas, rénovation et visualisation 3D — ARCHI/LUXE." },
      { property: "og:title", content: "ARCHI/LUXE — Architecture & design pour tous vos projets" },
      { property: "og:description", content: "Architecture intérieure, design extérieur, villas, rénovation et visualisation 3D — ARCHI/LUXE." },
    ],
  }),
  component: HomePage,
});

function HomePage() {
  return (
    <div className="bg-background text-on-background min-h-screen">
      <Header />
      <main>

<section className="relative h-[90vh] w-full flex items-center overflow-hidden">
<div className="absolute inset-0 z-0">
<img alt="Hero Modern Architecture" className="w-full h-full object-cover" src="https://lh3.googleusercontent.com/aida-public/AB6AXuCj1JCgf-PkyYo4DQjuBUuaUtJIFmhcR2UqdyKj5la_-uDL00fHD2BbdyIn_awO9QXM-Y-NS6jQQCt9Nvy-hliH6bwtFHaJW3hlpoN8MbSTr_J9T7wJfsBuezE5XBTDs_IW7-VwQv8pLAbyZ-r314vENftDb8cg7SaYKac3Mujls6u4mwgsrta_31k8VScHSpEcbS5USIzwqKco8JofVc34T3d3qZvP0f7lL6vzadqtMN58sY62U-HZACmAg_WGY64FHG17vTlSyLE"/>
<div className="absolute inset-0 bg-black/30"></div>
</div>
<div className="relative z-10 px-margin-mobile md:px-margin-desktop w-full max-w-4xl">
<div className="inline-block px-4 py-1 bg-primary text-on-primary font-label-sm text-label-sm uppercase mb-6 reveal-up">Architecture &amp; Design</div>
<h1 className="font-headline-xl text-4xl md:text-headline-xl text-white mb-6 reveal-up" style={{ transitionDelay: "100ms" }}>
                    Le Design d'Excellence pour tous vos Projets.
                </h1>
<p className="font-body-lg text-body-lg text-white/90 max-w-xl mb-10 reveal-up" style={{ transitionDelay: "200ms" }}>
                    Du studio urbain à la villa d'exception, nous créons des espaces singuliers adaptés à vos ambitions et à votre budget. 
                </p>
<div className="flex flex-wrap gap-4 reveal-up" style={{ transitionDelay: "300ms" }}>
<Link to="/projets" className="bg-white text-on-background px-8 py-4 font-label-md text-label-md hover:bg-primary-fixed transition-all rounded-full">
  CONSULTER LES ARCHIVES
</Link>
<Link to="/contact" className="bg-primary text-on-primary px-8 py-4 font-label-md text-label-md hover:bg-primary-container transition-all rounded-full">
  ESTIMER MON PROJET
</Link>
</div>
</div>
</section>

<section className="py-section-gap px-margin-mobile md:px-margin-desktop bg-surface">
<div className="max-w-max-width mx-auto">
<div className="grid grid-cols-1 lg:grid-cols-12 gap-gutter items-start">
<div className="lg:col-span-5 flex flex-col gap-6 reveal-up">
<span className="archive-tag">Manifeste / 01</span>
<h2 className="font-headline-lg text-headline-lg text-on-background">L'Architecture Démocratisée.</h2>
<p className="font-body-lg text-body-lg text-secondary">
                            Nous croyons que le luxe n'est pas une question de prix, mais une exigence de justesse. Notre agence accompagne une clientèle variée, proposant des solutions créatives pour tous les budgets, sans jamais compromettre l'esthétique ni la fonctionnalité.
                        </p>
<div className="flex flex-col gap-4 mt-4">
<div className="flex items-center gap-4 group cursor-pointer border-b border-outline-variant py-4">
<span className="font-headline-md text-primary">01</span>
<span className="font-label-md text-on-background group-hover:translate-x-2 transition-transform">PROJETS RÉSIDENTIELS ACCESSIBLES</span>
</div>
<div className="flex items-center gap-4 group cursor-pointer border-b border-outline-variant py-4">
<span className="font-headline-md text-primary">02</span>
<span className="font-label-md text-on-background group-hover:translate-x-2 transition-transform">VILLAS &amp; ESPACES D'EXCEPTION</span>
</div>
</div>
</div>
<div className="lg:col-span-6 lg:col-start-7 reveal-up" style={{ transitionDelay: "200ms" }}>
<img alt="Architectural detail" className="w-full aspect-[4/3] object-cover shadow-2xl" src="https://lh3.googleusercontent.com/aida-public/AB6AXuDx2qUeUDS8qrwk_9QqPlYxHvFhVl1jRp_GPo40raqsKonLgqypwYSM6A3VfIs0mZqNwq18oTBhTaWh3F10OStq97JL2v0O6rCuHt41zLsHq0Nn0liud6z-yz9MDet2gZzTRm0IqqhH2XQ6zKL8D4Ha_-FKaiaUkqEbwLsVHMPWfO4zYrJh6tNcTIlGCppBsSVQ1aus70mVF8P6zFmUygB6udpe4YPmByb_YW3anbEFO_Cu7nmALipS3jLEuB9j3Ug06xY4rtMm6is"/>
<div className="mt-6 flex justify-between items-center text-secondary font-label-sm text-label-sm uppercase tracking-widest">
<span>Index ref: 2024_089</span>
<span>Matières &amp; Textures</span>
</div>
</div>
</div>
</div>
</section>

<section className="py-section-gap px-margin-mobile md:px-margin-desktop bg-surface-container-low">
<div className="max-w-max-width mx-auto">
<div className="flex flex-col md:flex-row md:items-end justify-between mb-16 gap-6">
<div className="reveal-up">
<span className="archive-tag">Expertises</span>
<h2 className="font-headline-lg text-headline-lg text-on-background mt-2">Solutions pour toutes Échelles</h2>
</div>
<p className="max-w-md font-body-md text-secondary reveal-up" style={{ transitionDelay: "100ms" }}>
                        Une flexibilité totale pour répondre aux besoins spécifiques de chaque maître d'ouvrage, de la petite rénovation à la construction neuve.
                    </p>
</div>
<div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">

<div className="group bg-surface-container-lowest p-8 border border-outline-variant hover:border-primary transition-all duration-300 reveal-up">
<span className="material-symbols-outlined text-3xl mb-6 text-primary" data-icon="home">home</span>
<h3 className="font-headline-md text-xl text-on-background mb-3">Studios &amp; Appartements</h3>
<p className="font-body-md text-secondary text-sm">Optimisation intelligente et design premium pour espaces urbains maîtrisés.</p>
</div>

<div className="group bg-surface-container-lowest p-8 border border-outline-variant hover:border-primary transition-all duration-300 reveal-up" style={{ transitionDelay: "50ms" }}>
<span className="material-symbols-outlined text-3xl mb-6 text-primary" data-icon="house">house</span>
<h3 className="font-headline-md text-xl text-on-background mb-3">Maisons Individuelles</h3>
<p className="font-body-md text-secondary text-sm">Conception sur-mesure pour votre résidence principale ou secondaire.</p>
</div>

<div className="group bg-surface-container-lowest p-8 border border-outline-variant hover:border-primary transition-all duration-300 reveal-up" style={{ transitionDelay: "100ms" }}>
<span className="material-symbols-outlined text-3xl mb-6 text-primary" data-icon="location_city">location_city</span>
<h3 className="font-headline-md text-xl text-on-background mb-3">Villas d'Exception</h3>
<p className="font-body-md text-secondary text-sm">Architecture de prestige, volumes audacieux et finitions haute-couture.</p>
</div>

<div className="group bg-surface-container-lowest p-8 border border-outline-variant hover:border-primary transition-all duration-300 reveal-up" style={{ transitionDelay: "150ms" }}>
<span className="material-symbols-outlined text-3xl mb-6 text-primary" data-icon="business">business</span>
<h3 className="font-headline-md text-xl text-on-background mb-3">Locaux Professionnels</h3>
<p className="font-body-md text-secondary text-sm">Design d'espaces commerciaux, bureaux et boutiques de caractère.</p>
</div>
</div>
</div>
</section>

<section className="py-section-gap bg-background overflow-hidden">
<div className="px-margin-mobile md:px-margin-desktop mb-12 flex flex-col md:flex-row justify-between items-baseline gap-4">
<div className="reveal-up">
<span className="archive-tag">Archives</span>
<h2 className="font-headline-lg text-headline-lg text-on-background mt-2">Réalisations Récentes</h2>
</div>
<Link to="/projets" className="font-label-md text-label-md text-primary border-b border-primary pb-1 hover:text-primary-container transition-colors reveal-up" style={{ transitionDelay: "100ms" }}>EXPLORER L'INDEX COMPLET</Link>
</div>
<div className="flex overflow-x-auto gap-8 px-margin-mobile md:px-margin-desktop hide-scrollbar reveal-up" style={{ transitionDelay: "200ms" }}>

<div className="min-w-[75vw] md:min-w-[480px] group cursor-pointer">
<div className="overflow-hidden mb-6 aspect-[4/3]">
<img alt="Project 01" className="w-full h-full object-cover grayscale group-hover:grayscale-0 group-hover:scale-105 transition-all duration-700" src="https://lh3.googleusercontent.com/aida-public/AB6AXuBb-T4GzuNJE857JHbyzdr9ML9okyn0QQWXqY-brLpcxuBoZw2go0hvo63cWjcstzdUYw_oXRe3C_a8qC7Un14jCYiaAYDciIy6nvKweliCw09RzMPmJGK9W1JEUJd2ce2wVRykr7qx6CgAgo9lokWtnIWcTx1grHnxwhOivjKU3z06mwyv09nDaJ8FgFOLbui_mbYFYtb2SXYt1pZYir6pkktq0SUj7QtA9yynTfI6OwvVlqWSlIZ1Irytu_fT98Q2kcJi-JbIgmE"/>
</div>
<div className="flex justify-between items-start">
<div>
<span className="font-label-sm text-secondary uppercase mb-2 block">Rénovation / Lyon</span>
<h4 className="font-headline-md text-xl">L'Appartement 402</h4>
</div>
<span className="material-symbols-outlined text-2xl text-primary" data-icon="arrow_outward">arrow_outward</span>
</div>
</div>

<div className="min-w-[75vw] md:min-w-[480px] group cursor-pointer">
<div className="overflow-hidden mb-6 aspect-[4/3]">
<img alt="Project 02" className="w-full h-full object-cover grayscale group-hover:grayscale-0 group-hover:scale-105 transition-all duration-700" src="https://lh3.googleusercontent.com/aida-public/AB6AXuAjXkHbyupL4n4TRnM8J8Ru1yAD9vMD8t7pk4F2JOEw1IjdvpRuetIULL7Rvj8_uBgaSJucuE7Q7_tMm10DzLW_U2Z9z9lcLkbPSrbg_X7Cq0cslV71fxqI9pIi8gtGfI03OxtxTC-mQ3CSDihwvookQiUW81_mvFoSeFURYq2a5NWw6a50rHxNNGw3Xq-pU6bWc8cAx__tK14kH4jDjblJHBl_uJP0eB4uZnh-d-5Qx2x0haf0wLSTfb3LLR3b46LGAKyeEBL8ENs"/>
</div>
<div className="flex justify-between items-start">
<div>
<span className="font-label-sm text-secondary uppercase mb-2 block">Neuf / Suisse</span>
<h4 className="font-headline-md text-xl">Pavillon Sylvestre</h4>
</div>
<span className="material-symbols-outlined text-2xl text-primary" data-icon="arrow_outward">arrow_outward</span>
</div>
</div>
</div>
</section>

<section className="py-section-gap px-margin-mobile md:px-margin-desktop bg-surface-container-highest">
<div className="max-w-3xl mx-auto text-center reveal-up">
<span className="archive-tag">Contact</span>
<h2 className="font-headline-xl text-4xl md:text-headline-xl text-on-background mb-8 italic">Votre vision n'a pas de limites.</h2>
<p className="font-body-lg text-body-lg text-on-surface-variant mb-12">
                    Parlons de votre projet, quelle que soit son ampleur. Notre première consultation est toujours offerte pour définir vos besoins et votre budget.
                </p>
<div className="flex flex-col sm:flex-row justify-center gap-6">
<Link to="/contact" className="bg-primary text-on-primary px-10 py-5 font-label-md text-label-md hover:bg-primary-container transition-all rounded-full">
  DÉBUTER UNE ÉTUDE
</Link>
<Link to="/services" className="border border-outline text-on-surface px-10 py-5 font-label-md text-label-md hover:bg-surface-bright transition-all rounded-full">
  VOIR NOS TARIFS
</Link>
</div>
</div>
</section>
</main>
      <Footer />
    </div>
  );
}
