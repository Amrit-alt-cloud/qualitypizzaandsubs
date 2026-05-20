import { Link } from "@tanstack/react-router";
import { Pizza, Phone } from "lucide-react";

const nav = [
  { to: "/", label: "Home" },
  { to: "/menu", label: "Menu" },
  { to: "/about", label: "About" },
  { to: "/contact", label: "Contact" },
] as const;

export function SiteHeader() {
  return (
    <header className="sticky top-0 z-50 border-b border-border bg-background/85 backdrop-blur">
      <div className="mx-auto flex max-w-6xl items-center justify-between px-5 py-4">
        <Link to="/" className="flex items-center gap-2">
          <Pizza className="h-6 w-6 text-primary" />
          <span className="font-display text-lg font-bold tracking-tight">
            Quality Pizza <span className="text-primary">&amp;</span> Subs
          </span>
        </Link>
        <nav className="hidden items-center gap-7 md:flex">
          {nav.map((n) => (
            <Link
              key={n.to}
              to={n.to}
              className="text-sm font-medium text-muted-foreground transition-colors hover:text-foreground"
              activeProps={{ className: "text-foreground" }}
              activeOptions={{ exact: true }}
            >
              {n.label}
            </Link>
          ))}
        </nav>
        <a
          href="tel:+17807642233"
          className="inline-flex items-center gap-2 rounded-full bg-primary px-4 py-2 text-sm font-semibold text-primary-foreground shadow-sm transition-transform hover:scale-[1.03]"
        >
          <Phone className="h-4 w-4" />
          <span className="hidden sm:inline">(780) 764-2233</span>
          <span className="sm:hidden">Call</span>
        </a>
      </div>
    </header>
  );
}
