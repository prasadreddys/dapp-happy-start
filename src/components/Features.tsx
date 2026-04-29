const features = [
  {
    icon: "⚡",
    title: "Sub-second finality",
    desc: "ZK-rollup architecture delivers 65,000 TPS with instant settlement to Ethereum L1.",
  },
  {
    icon: "🔐",
    title: "Self-custodial",
    desc: "Your keys, your coins. Account abstraction makes wallets feel like Web2 logins.",
  },
  {
    icon: "🧩",
    title: "Modular by design",
    desc: "Plug-and-play execution, DA, and settlement layers. Build your own appchain in hours.",
  },
  {
    icon: "🌐",
    title: "Cross-chain native",
    desc: "Move assets across 40+ chains via the Nexus bridge with cryptographic guarantees.",
  },
  {
    icon: "💎",
    title: "DeFi primitives",
    desc: "Lend, swap, stake, and farm with composable contracts audited by industry leaders.",
  },
  {
    icon: "🛡️",
    title: "Battle-tested",
    desc: "Formal verification + $10M bug bounty. Securing $4B+ across the ecosystem.",
  },
];

export function Features() {
  return (
    <section id="features" className="py-24 px-4 relative">
      <div className="mx-auto max-w-6xl">
        <div className="text-center max-w-2xl mx-auto mb-16">
          <div className="font-mono text-xs uppercase tracking-[0.2em] text-primary mb-3">
            // Protocol
          </div>
          <h2 className="font-display text-4xl md:text-5xl font-bold tracking-tight">
            Built for the <span className="text-gradient">on-chain</span> economy
          </h2>
          <p className="mt-4 text-muted-foreground">
            Everything you need to build, ship, and scale a Web3 application.
          </p>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-5">
          {features.map((f) => (
            <div
              key={f.title}
              className="glass rounded-2xl p-6 hover:translate-y-[-4px] transition-transform duration-500"
            >
              <div className="h-12 w-12 rounded-xl bg-[image:var(--gradient-hero)]/20 flex items-center justify-center text-2xl mb-4 shadow-[var(--shadow-neon)]">
                {f.icon}
              </div>
              <h3 className="font-display font-semibold text-lg mb-2">{f.title}</h3>
              <p className="text-sm text-muted-foreground leading-relaxed">{f.desc}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
