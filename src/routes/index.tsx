import { createFileRoute } from "@tanstack/react-router";
import { useState } from "react";
import { Preloader } from "@/components/Preloader";
import { CursorGlow } from "@/components/CursorGlow";
import { ParticleField } from "@/components/ParticleField";
import { Navbar } from "@/components/Navbar";
import { ScrollProgress } from "@/components/ScrollProgress";
import { Hero } from "@/components/sections/Hero";
import { Stats } from "@/components/sections/Stats";
import { Services } from "@/components/sections/Services";
import { Marquee } from "@/components/sections/Marquee";
import { Process } from "@/components/sections/Process";
import { Founders } from "@/components/sections/Founders";
import { Testimonials } from "@/components/sections/Testimonials";
import { Contact } from "@/components/sections/Contact";
import { FAQ } from "@/components/sections/FAQ";
import { Footer } from "@/components/sections/Footer";

export const Route = createFileRoute("/")({
  component: Index,
  head: () => ({
    meta: [
      { title: "VYRONEX STUDIO — We Engineer Digital Presence" },
      {
        name: "description",
        content:
          "VYRONEX STUDIO crafts futuristic websites, cinematic UI/UX, premium branding and high-performance frontend systems for next-generation brands.",
      },
      { property: "og:title", content: "VYRONEX STUDIO — We Engineer Digital Presence" },
      { property: "og:description", content: "Futuristic, cinematic web experiences engineered for premium brands." },
    ],
  }),
});

function Index() {
  const [loading, setLoading] = useState(true);
  return (
    <>
      {loading && <Preloader onDone={() => setLoading(false)} />}
      <CursorGlow />
      <ScrollProgress />
      <ParticleField />
      <Navbar />
      <main>
        <Hero />
        <Stats />
        <Services />
        <Marquee />
        <Process />
        <Founders />
        <Testimonials />
        <Contact />
        <FAQ />
      </main>
      <Footer />
    </>
  );
}
