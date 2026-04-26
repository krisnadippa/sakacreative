"use client";

import dynamic from "next/dynamic";


const EtherealBeamsHero = dynamic(() => import("@/components/ui/ethereal-beams-hero"), { ssr: false });
const LogosSlider = dynamic(() => import("@/components/ui/logos-slider").then(mod => mod.LogosSlider), { ssr: false });

const HeroParallax = dynamic(() => import("@/components/ui/hero-parallax").then((mod) => mod.HeroParallax), { ssr: false });
const Feature197 = dynamic(() => import("@/components/ui/accordion-feature-section").then(mod => mod.Feature197), { ssr: false });
const TestimonialsSection = dynamic(() => import("@/components/ui/testimonials-section").then(mod => mod.TestimonialsSection), { ssr: false });
const ContactSection = dynamic(() => import("@/components/ui/contact-section").then(mod => mod.ContactSection), { ssr: false });
const Footer = dynamic(() => import("@/components/ui/footer-section").then(mod => mod.Footer), { ssr: false });







const products = [
  {
    title: "Moonbeam",
    link: "https://gomoonbeam.com",
    thumbnail: "https://aceternity.com/images/products/thumbnails/new/moonbeam.png",
  },
  {
    title: "Cursor",
    link: "https://cursor.so",
    thumbnail: "https://aceternity.com/images/products/thumbnails/new/cursor.png",
  },
  {
    title: "Rogue",
    link: "https://userogue.com",
    thumbnail: "https://aceternity.com/images/products/thumbnails/new/rogue.png",
  },
  {
    title: "Editorially",
    link: "https://editorially.org",
    thumbnail: "https://aceternity.com/images/products/thumbnails/new/editorially.png",
  },
  {
    title: "Editrix AI",
    link: "https://editrix.ai",
    thumbnail: "https://aceternity.com/images/products/thumbnails/new/editrix.png",
  },
  {
    title: "Pixel Perfect",
    link: "https://app.pixelperfect.quest",
    thumbnail: "https://aceternity.com/images/products/thumbnails/new/pixelperfect.png",
  },
  {
    title: "Algochurn",
    link: "https://algochurn.com",
    thumbnail: "https://aceternity.com/images/products/thumbnails/new/algochurn.png",
  },
  {
    title: "Aceternity UI",
    link: "https://ui.aceternity.com",
    thumbnail: "https://aceternity.com/images/products/thumbnails/new/aceternityui.png",
  },
  {
    title: "Tailwind Master Kit",
    link: "https://tailwindmasterkit.com",
    thumbnail: "https://aceternity.com/images/products/thumbnails/new/tailwindmasterkit.png",
  },
  {
    title: "SmartBridge",
    link: "https://smartbridgetech.com",
    thumbnail: "https://aceternity.com/images/products/thumbnails/new/smartbridge.png",
  },
  {
    title: "Renderwork Studio",
    link: "https://renderwork.studio",
    thumbnail: "https://aceternity.com/images/products/thumbnails/new/renderwork.png",
  },
  {
    title: "Creme Digital",
    link: "https://cremedigital.com",
    thumbnail: "https://aceternity.com/images/products/thumbnails/new/cremedigital.png",
  },
  {
    title: "Golden Bells Academy",
    link: "https://goldenbellsacademy.com",
    thumbnail: "https://aceternity.com/images/products/thumbnails/new/goldenbellsacademy.png",
  },
  {
    title: "Invoker Labs",
    link: "https://invoker.lol",
    thumbnail: "https://aceternity.com/images/products/thumbnails/new/invoker.png",
  },
  {
    title: "E Free Invoice",
    link: "https://efreeinvoice.com",
    thumbnail: "https://aceternity.com/images/products/thumbnails/new/efreeinvoice.png",
  },
];

export default function Home() {
  return (
    <main className="bg-black min-h-screen">
      <div id="home">
        <EtherealBeamsHero />
      </div>
      <LogosSlider />
      <div id="work">
        <HeroParallax products={products} />
      </div>
      <div id="services">
        <Feature197 />
      </div>
      <div id="testimonials">
        <TestimonialsSection />
      </div>
      <div id="contact">
        <ContactSection />
      </div>
      <Footer />
    </main>








  );
}



