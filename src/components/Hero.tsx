import heroOrb from "@/assets/hero-orb.jpg";

export function Hero() {
  return (
    <section className="relative pt-36 pb-24 px-4 overflow-hidden">
      <div className="absolute inset-0 grid-bg pointer-events-none" />
      <div className="mx-auto max-w-6xl relative">
        <div className="grid lg:grid-cols-2 gap-12 items-center">
          <div className="animate-slide-up">
            <div className="inline-flex items-center gap-2 glass rounded-full px-4 py-1.5 text-xs font-mono mb-6">
              <span className="h-2 w-2 rounded-full bg-primary animate-pulse-glow" />
              <span className="text-muted-foreground">Mainnet live · v2.0</span>
            </div>
            <h1 className="font-display text-5xl md:text-7xl font-bold leading-[1.05] tracking-tight">
              The decentralized <span className="text-gradient">future</span> runs on Nexus
            </h1>
            <p className="mt-6 text-lg text-muted-foreground max-w-lg">
              A modular L2 protocol for builders. Lightning-fast finality, zero-knowledge proofs, and
              composable DeFi primitives — all in one stack.
            </p>
            <div className="mt-8 flex flex-wrap gap-3">
              <button className="rounded-xl px-6 py-3 font-medium bg-[image:var(--gradient-hero)] text-primary-foreground shadow-[var(--shadow-glow)] hover:scale-[1.02] transition-transform">
                Launch App
              </button>
              <button className="rounded-xl px-6 py-3 font-medium glass hover:bg-white/5 transition-colors">
                Read Whitepaper
              </button>
            </div>
            <div className="mt-12 grid grid-cols-3 gap-6 max-w-md">
              {[
                { v: "$4.2B", l: "TVL" },
                { v: "12M+", l: "Wallets" },
                { v: "65k", l: "TPS" },
              ].map((s) => (
                <div key={s.l}>
                  <div className="text-2xl font-bold text-gradient">{s.v}</div>
                  <div className="text-xs text-muted-foreground font-mono uppercase tracking-wider">{s.l}</div>
                </div>
              ))}
            </div>
          </div>

          <div className="relative animate-float">
            <div className="absolute inset-0 bg-[image:var(--gradient-glow)] blur-3xl" />
            <img
              src={heroOrb}
              alt="Nexus blockchain network visualization"
              width={1536}
              height={1536}
              className="relative rounded-3xl w-full"
            />
          </div>
        </div>
      </div>
    </section>
  );
}
