import { createFileRoute } from "@tanstack/react-router";
import { useState } from "react";
import { Preloader } from "@/components/Preloader";
import { CursorGlow } from "@/components/CursorGlow";
import { ParticleField } from "@/components/ParticleField";
import { Navbar } from "@/components/Navbar";
import { ScrollProgress } from "@/components/ScrollProgress";
import { Hero } from "@/components/sections/Hero";
import { Services } from "@/components/sections/Services";
import { Founders } from "@/components/sections/Founders";
import { Contact } from "@/components/sections/Contact";
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
        <Services />
        <Founders />
        <Contact />
      </main>
      <Footer />
    </>
  );
}
