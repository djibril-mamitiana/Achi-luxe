import { createFileRoute } from "@tanstack/react-router";
import Header from "@/components/site/Header";
import Footer from "@/components/site/Footer";

export const Route = createFileRoute("/projets")({
  head: () => ({
    meta: [
      { title: "Projets & Réalisations — ARCHI/LUXE" },
      { name: "description", content: "Architecture intérieure, design extérieur, villas, rénovation et visualisation 3D — ARCHI/LUXE." },
      { property: "og:title", content: "Projets & Réalisations — ARCHI/LUXE" },
      { property: "og:description", content: "Architecture intérieure, design extérieur, villas, rénovation et visualisation 3D — ARCHI/LUXE." },
    ],
  }),
  component: ProjetsPage,
});

function ProjetsPage() {
  return (
    <div className="bg-background text-on-background min-h-screen">
      <Header />
      <main className="pt-24 md:pt-32 pb-24">

<section className="px-margin-mobile md:px-margin-desktop mb-16">
<div className="max-w-4xl">
<h1 className="font-headline-xl text-4xl md:text-6xl mb-6 text-on-background">Portfolio <span className="text-primary italic font-light">&amp; Réalisations</span></h1>
<p className="font-body-lg text-secondary max-w-2xl">De l'optimisation de studio urbain à la conception de villas d'exception, nous mettons la même exigence architecturale au service de tous vos projets, quel que soit leur budget ou leur échelle.</p>
</div>
</section>

<section className="px-margin-mobile md:px-margin-desktop mb-12 flex flex-wrap gap-6 items-center border-b border-outline-variant/30 pb-4">
<button className="filter-btn active font-label-md pb-2" data-filter="all">TOUT</button>
<button className="filter-btn font-label-md text-secondary hover:text-primary pb-2 transition-all" data-filter="villa">VILLAS DE LUXE</button>
<button className="filter-btn font-label-md text-secondary hover:text-primary pb-2 transition-all" data-filter="urbain">STUDIOS URBAINS</button>
<button className="filter-btn font-label-md text-secondary hover:text-primary pb-2 transition-all" data-filter="agile">RÉNOVATIONS AGILES</button>
<button className="filter-btn font-label-md text-secondary hover:text-primary pb-2 transition-all" data-filter="commercial">COMMERCIAL</button>
</section>

<section className="px-margin-mobile md:px-margin-desktop">
<div className="masonry-grid" id="project-grid">

<div className="masonry-item project-card group relative cursor-pointer" data-category="villa">
<div className="overflow-hidden rounded-xl bg-surface-container aspect-[4/5] md:aspect-auto">
<img alt="Villa Horizon" className="w-full h-full object-cover transition-transform duration-700 ease-out" src="https://lh3.googleusercontent.com/aida-public/AB6AXuBaz2BIAtyWqwDDXMIrAxyQHsrmkeSa4IXC-FnscXYtlSFTP_TClgDINFlfDUO3Wuse4jlHa_4JKWSxIfTwqrU2GquHyKPc6NXuYqHhd2PkCUsdTRKF01zCHFe9VlQE9VS3gqlDUaI4X_3XtuKG1ZjTORPwVg_MZbtiOCMVpxBCkYO5izuP7Q9Dbw8lLiMVMYfzzgaXQ_VKUhpceI1W77d1zJTGLYCKalxJt18Pm4-YxLM0cAnSbYNs-8rHtSnW9G1LRGyEX2IGXV4"/>
</div>
<div className="mt-4">
<div className="flex items-center gap-2 mb-1">
<span className="px-2 py-0.5 rounded-full bg-primary/10 text-primary font-label-sm uppercase">Villa de Luxe</span>
<span className="text-outline font-label-sm">• 2023</span>
</div>
<h3 className="font-headline-md text-xl text-on-background">Villa Horizon</h3>
<p className="font-body-md text-secondary text-sm">SANTORIN, GRÈCE</p>
</div>
</div>

<div className="masonry-item project-card group relative cursor-pointer" data-category="urbain">
<div className="overflow-hidden rounded-xl bg-surface-container aspect-square">
<img alt="Espace Monolithe" className="w-full h-full object-cover transition-transform duration-700 ease-out" src="https://lh3.googleusercontent.com/aida-public/AB6AXuBL44PTaF1k-2FGQ3ckUym-4Od0PZsQnPaf0cKxIFRK8ASTHsxGQf55OYnIyKRlNGgxRtckZznR1a_9A8AAcZ6qgw-T5UQdxiCn_WFTrCXMjliWEDDhZESuNJ1-NpEMAyvFwu24AkalpT5niekFtPuvfb8bT6yz3uTGCKdUlSTqfaSmrjJh6kY7jF0waI3LZHuLAd1A1cVypX3tK6ZqUGg0hrBTvqTkgLcVmH40HgKkhZObq-wgT04lkLmcLJmzfBUwKnYrmxarn8w"/>
</div>
<div className="mt-4">
<div className="flex items-center gap-2 mb-1">
<span className="px-2 py-0.5 rounded-full bg-secondary/10 text-secondary font-label-sm uppercase">Studio Urbain</span>
<span className="text-outline font-label-sm">• 2022</span>
</div>
<h3 className="font-headline-md text-xl text-on-background">Le Loft Monolithe</h3>
<p className="font-body-md text-secondary text-sm">PARIS, FRANCE</p>
</div>
</div>

<div className="masonry-item project-card group relative cursor-pointer" data-category="agile">
<div className="overflow-hidden rounded-xl bg-surface-container aspect-[3/4]">
<img alt="Atelier Renaissance" className="w-full h-full object-cover transition-transform duration-700 ease-out" src="https://lh3.googleusercontent.com/aida-public/AB6AXuCddayGB_M1HKovwGuWNGwZ_bGkE_64coOyWHUxACkHnftun_uDQ0pw4j8hR24Xes_Cm6Hu846eMoJYqNFqWcEm0pUoA0rdYBB7uk3T9Fiy1d-CJ6SI4hrBiePshhW4W56bjhJJklsJ0H_qcIr06OvdiDDelH43HlY3HALTijq0JMLePPJ3oUIF7ctMGdOM7M7S4QbcwGc1e4S8Is91wGbj97jP0I-uOmk8jC0PDze5py7a-pBbKAJTDaYNhAdokNWfxhfS31LXkOg"/>
</div>
<div className="mt-4">
<div className="flex items-center gap-2 mb-1">
<span className="px-2 py-0.5 rounded-full bg-primary-container/20 text-primary-container font-label-sm uppercase">Rénovation Agile</span>
<span className="text-outline font-label-sm">• 2024</span>
</div>
<h3 className="font-headline-md text-xl text-on-background">Atelier Renaissance</h3>
<p className="font-body-md text-secondary text-sm">MILAN, ITALIE</p>
</div>
</div>

<div className="masonry-item project-card group relative cursor-pointer" data-category="villa">
<div className="overflow-hidden rounded-xl bg-surface-container aspect-video md:aspect-auto">
<img alt="Résidence Quartz" className="w-full h-full object-cover transition-transform duration-700 ease-out" src="https://lh3.googleusercontent.com/aida-public/AB6AXuARZOm2T7G7VI_7zoYmWNCGv85Tu3g5ZlVkctr3sfg-sBhCAdUZ6ZQtCmAAu0m5tTNnvDtKGW-QflWpik2moRiTTkvTaurikvQ46cQXUmjJdytbQw-7FJYHaFxvzsosPwWxJlCLWxhURAUxU_0HUxAQC1QcR0ge_9RbVIQgz7lUeYn4PV4eVB_qSsZEkggiAfP8TGqtOA0aN1S0F6yxPrKTurlvIpvioP2X7TYfoJoAthKPGeGxWC68R9yirtp_ri55h_Z4qRDHGIg"/>
</div>
<div className="mt-4">
<div className="flex items-center gap-2 mb-1">
<span className="px-2 py-0.5 rounded-full bg-primary/10 text-primary font-label-sm uppercase">Villa de Luxe</span>
<span className="text-outline font-label-sm">• 2023</span>
</div>
<h3 className="font-headline-md text-xl text-on-background">Résidence Quartz</h3>
<p className="font-body-md text-secondary text-sm">ZURICH, SUISSE</p>
</div>
</div>

<div className="masonry-item project-card group relative cursor-pointer" data-category="commercial">
<div className="overflow-hidden rounded-xl bg-surface-container aspect-square">
<img alt="Boutique Aura" className="w-full h-full object-cover transition-transform duration-700 ease-out" src="https://lh3.googleusercontent.com/aida-public/AB6AXuChgZmCCYFqLA29Prr5lrTg9xy8ZvnT0QWsynLrtA9S9Z4qkpwQgfDg10kzPypnp-r6OOViiHNNnpkRAQhKxphaiWvvt1zNgKoWdNG_1gw0AphC9IDZGU3TQQ8nYy2TRdGXmFtTMCGMwc08NNIMkExU5hPTnfipCU9IjVJ7L9iyP6ZrGSbRhKL8iNLBQ7Nc5II2cYDvFH9rHi5ZmsueyUlnF_ctB7RmR9_udBIsmL_WLsT0iI-6YNPHLwZN2eb7L7TFWTl6FLDFHIc"/>
</div>
<div className="mt-4">
<div className="flex items-center gap-2 mb-1">
<span className="px-2 py-0.5 rounded-full bg-tertiary/10 text-tertiary font-label-sm uppercase">Commercial</span>
<span className="text-outline font-label-sm">• 2023</span>
</div>
<h3 className="font-headline-md text-xl text-on-background">Boutique Aura</h3>
<p className="font-body-md text-secondary text-sm">TOKYO, JAPON</p>
</div>
</div>

<div className="masonry-item project-card group relative cursor-pointer" data-category="agile">
<div className="overflow-hidden rounded-xl bg-surface-container aspect-[4/5]">
<img alt="Palazzo Moderno" className="w-full h-full object-cover transition-transform duration-700 ease-out" src="https://lh3.googleusercontent.com/aida-public/AB6AXuC4jf28cEoGptAIiO6b9hrAM3ctPLMQlwJqGVoNvPHOO8J_B46Fmc1amgcdbPLJiK3SQTjAqfyriQDK2ga5ktg-kUM4OdeYSBpxh0_bAGjgwaiW7UFX81a-QzIYvrvN5LcCeoxvTvv2DOXIa7DqI4CAwWcHJeAB4Hu-3kxLTudeIf4oihO3cIfpfhBOVQV6MqhW8jthZeO3NFphgdgkdJg8iepeDa45ZoDLGr5GOkjQlWMqhb9HytOSej-jf1ZK9NDSRkjODRovS0I"/>
</div>
<div className="mt-4">
<div className="flex items-center gap-2 mb-1">
<span className="px-2 py-0.5 rounded-full bg-primary-container/20 text-primary-container font-label-sm uppercase">Rénovation Agile</span>
<span className="text-outline font-label-sm">• 2021</span>
</div>
<h3 className="font-headline-md text-xl text-on-background">Palazzo Moderno</h3>
<p className="font-body-md text-secondary text-sm">FLORENCE, ITALIE</p>
</div>
</div>
</div>
</section>
</main>
      <Footer />
    </div>
  );
}
