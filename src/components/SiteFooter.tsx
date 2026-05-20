import { Link } from "@tanstack/react-router";
import { MapPin, Phone, Clock, Pizza } from "lucide-react";

export function SiteFooter() {
  return (
    <footer className="border-t border-border bg-secondary/40">
      <div className="mx-auto grid max-w-6xl gap-10 px-5 py-14 md:grid-cols-4">
        <div className="md:col-span-2">
          <div className="flex items-center gap-2">
            <Pizza className="h-6 w-6 text-primary" />
            <span className="font-display text-xl font-bold">
              Quality Pizza &amp; Subs
            </span>
          </div>
          <p className="mt-3 max-w-sm text-sm text-muted-foreground">
            A Mundare favourite for hand-tossed pizza, hearty subs, and
            crowd-pleasing poutine. Family-run, locally loved.
          </p>
        </div>
        <div>
          <h4 className="text-sm font-semibold uppercase tracking-wider text-foreground">
            Visit
          </h4>
          <p className="mt-3 flex items-start gap-2 text-sm text-muted-foreground">
            <MapPin className="mt-0.5 h-4 w-4 shrink-0 text-primary" />
            5029 50 St, Mundare, AB T0B 3H0
          </p>
          <p className="mt-2 flex items-center gap-2 text-sm text-muted-foreground">
            <Phone className="h-4 w-4 text-primary" />
            <a href="tel:+17807642233" className="hover:text-foreground">
              (780) 764-2233
            </a>
          </p>
          <p className="mt-2 flex items-center gap-2 text-sm text-muted-foreground">
            <Clock className="h-4 w-4 text-primary" />
            Open today · Closes 8 p.m.
          </p>
        </div>
        <div>
          <h4 className="text-sm font-semibold uppercase tracking-wider text-foreground">
            Explore
          </h4>
          <ul className="mt-3 space-y-2 text-sm text-muted-foreground">
            <li><Link to="/menu" className="hover:text-foreground">Menu</Link></li>
            <li><Link to="/about" className="hover:text-foreground">About us</Link></li>
            <li><Link to="/contact" className="hover:text-foreground">Contact</Link></li>
          </ul>
        </div>
      </div>
      <div className="border-t border-border py-5 text-center text-xs text-muted-foreground">
        © {new Date().getFullYear()} Quality Pizza &amp; Subs · Mundare, Alberta
      </div>
    </footer>
  );
}
