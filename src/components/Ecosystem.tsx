const partners = [
  "Uniswap", "Aave", "Chainlink", "Polygon", "Arbitrum", "OpenSea",
  "MetaMask", "Lido", "Curve", "Optimism", "1inch", "ENS",
];

export function Ecosystem() {
  return (
    <section id="ecosystem" className="py-20 px-4">
      <div className="mx-auto max-w-6xl">
        <div className="text-center mb-10">
          <div className="font-mono text-xs uppercase tracking-[0.2em] text-primary mb-3">
            // Ecosystem
          </div>
          <h2 className="font-display text-3xl md:text-4xl font-bold">
            Trusted by leading <span className="text-gradient">protocols</span>
          </h2>
        </div>
        <div className="relative overflow-hidden glass rounded-2xl py-8 [mask-image:linear-gradient(90deg,transparent,black_15%,black_85%,transparent)]">
          <div className="flex gap-12 animate-marquee whitespace-nowrap">
            {[...partners, ...partners].map((p, i) => (
              <span key={i} className="font-display text-2xl font-bold text-muted-foreground/60 hover:text-foreground transition-colors">
                {p}
              </span>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
