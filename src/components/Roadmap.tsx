const phases = [
  { q: "Q1 2026", title: "Mainnet Genesis", desc: "Core protocol launch, validator onboarding, and bridge live.", done: true },
  { q: "Q2 2026", title: "Account Abstraction", desc: "Gasless transactions and social recovery for every wallet.", done: true },
  { q: "Q3 2026", title: "ZK-Rollup v2", desc: "Sub-second finality, 65k TPS, and EIP-4844 blob support.", done: false },
  { q: "Q4 2026", title: "Modular SDK", desc: "Spin up custom appchains with one CLI command.", done: false },
];

export function Roadmap() {
  return (
    <section id="roadmap" className="py-24 px-4">
      <div className="mx-auto max-w-5xl">
        <div className="text-center mb-16">
          <div className="font-mono text-xs uppercase tracking-[0.2em] text-primary mb-3">
            // Roadmap
          </div>
          <h2 className="font-display text-4xl md:text-5xl font-bold">
            The road <span className="text-gradient">ahead</span>
          </h2>
        </div>

        <div className="relative">
          <div className="absolute left-4 md:left-1/2 top-0 bottom-0 w-px bg-gradient-to-b from-transparent via-border to-transparent" />
          <div className="space-y-10">
            {phases.map((p, i) => (
              <div key={p.q} className={`relative flex md:items-center gap-6 ${i % 2 === 0 ? "md:flex-row" : "md:flex-row-reverse"}`}>
                <div className="absolute left-4 md:left-1/2 -translate-x-1/2 h-4 w-4 rounded-full bg-[image:var(--gradient-hero)] shadow-[var(--shadow-neon)] z-10" />
                <div className="md:w-1/2 pl-12 md:pl-0 md:px-8">
                  <div className="glass rounded-2xl p-6">
                    <div className="font-mono text-xs text-primary mb-2">{p.q} {p.done && "· ✓ Shipped"}</div>
                    <h3 className="font-display text-xl font-semibold mb-2">{p.title}</h3>
                    <p className="text-sm text-muted-foreground">{p.desc}</p>
                  </div>
                </div>
                <div className="hidden md:block md:w-1/2" />
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
