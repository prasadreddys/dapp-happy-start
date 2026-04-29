import { createFileRoute } from "@tanstack/react-router";
import { Navbar } from "@/components/Navbar";
import { Hero } from "@/components/Hero";
import { Features } from "@/components/Features";
import { Ecosystem } from "@/components/Ecosystem";
import { Roadmap } from "@/components/Roadmap";
import { CTA, Footer } from "@/components/CTA";

export const Route = createFileRoute("/")({
  head: () => ({
    meta: [
      { title: "Nexus — The decentralized future runs on Nexus" },
      { name: "description", content: "Modular L2 protocol with ZK-rollups, sub-second finality, and 65k TPS. Build the next generation of Web3 apps on Nexus." },
      { property: "og:title", content: "Nexus — Web3 Protocol" },
      { property: "og:description", content: "Modular L2 with ZK-rollups and 65k TPS. Build Web3 apps on Nexus." },
    ],
  }),
  component: Index,
});

function Index() {
  return (
    <div className="min-h-screen">
      <Navbar />
      <main>
        <Hero />
        <Features />
        <Ecosystem />
        <Roadmap />
        <CTA />
      </main>
      <Footer />
    </div>
  );
}
