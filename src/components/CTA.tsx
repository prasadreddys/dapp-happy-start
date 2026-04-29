export function CTA() {
  return (
    <section className="py-24 px-4">
      <div className="mx-auto max-w-5xl">
        <div className="relative glass glow-border rounded-3xl p-12 md:p-16 overflow-hidden text-center">
          <div className="absolute inset-0 bg-[image:var(--gradient-glow)] opacity-60" />
          <div className="relative">
            <h2 className="font-display text-4xl md:text-6xl font-bold tracking-tight">
              Start building <span className="text-gradient">today</span>
            </h2>
            <p className="mt-4 text-muted-foreground max-w-xl mx-auto">
              Join 12,000+ developers shipping the next generation of decentralized apps on Nexus.
            </p>
            <div className="mt-8 flex flex-wrap justify-center gap-3">
              <button className="rounded-xl px-6 py-3 font-medium bg-[image:var(--gradient-hero)] text-primary-foreground shadow-[var(--shadow-glow)] hover:scale-[1.02] transition-transform">
                Get Started
              </button>
              <button className="rounded-xl px-6 py-3 font-medium glass hover:bg-white/5 transition-colors">
                View on GitHub
              </button>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

export function Footer() {
  return (
    <footer className="border-t border-border/50 py-10 px-4 mt-10">
      <div className="mx-auto max-w-6xl flex flex-col md:flex-row gap-4 items-center justify-between text-sm text-muted-foreground">
        <div className="flex items-center gap-2">
          <span className="h-6 w-6 rounded-md bg-[image:var(--gradient-hero)]" />
          <span className="font-display font-bold text-foreground">NEXUS</span>
          <span>· © 2026</span>
        </div>
        <div className="flex gap-6 font-mono text-xs uppercase tracking-wider">
          <a href="#" className="hover:text-foreground">Twitter</a>
          <a href="#" className="hover:text-foreground">Discord</a>
          <a href="#" className="hover:text-foreground">GitHub</a>
          <a href="#" className="hover:text-foreground">Mirror</a>
        </div>
      </div>
    </footer>
  );
}
