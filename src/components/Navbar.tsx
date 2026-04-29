import { Link } from "@tanstack/react-router";

const links = [
  { label: "Features", href: "#features" },
  { label: "Ecosystem", href: "#ecosystem" },
  { label: "Roadmap", href: "#roadmap" },
  { label: "Docs", href: "#" },
];

export function Navbar() {
  return (
    <header className="fixed top-0 left-0 right-0 z-50 px-4 pt-4">
      <div className="mx-auto max-w-6xl glass rounded-2xl px-5 py-3 flex items-center justify-between">
        <Link to="/" className="flex items-center gap-2 font-display font-bold text-lg">
          <span className="h-7 w-7 rounded-lg bg-[image:var(--gradient-hero)] shadow-[var(--shadow-neon)]" />
          <span className="text-gradient">NEXUS</span>
        </Link>
        <nav className="hidden md:flex items-center gap-8 text-sm text-muted-foreground">
          {links.map((l) => (
            <a key={l.label} href={l.href} className="hover:text-foreground transition-colors">
              {l.label}
            </a>
          ))}
        </nav>
        <button className="rounded-xl px-4 py-2 text-sm font-medium bg-[image:var(--gradient-hero)] text-primary-foreground shadow-[var(--shadow-neon)] hover:opacity-90 transition-opacity">
          Connect Wallet
        </button>
      </div>
    </header>
  );
}
