import { createFileRoute, Link } from "@tanstack/react-router";
import { SiteLayout } from "@/components/SiteLayout";
import { Star, MapPin, Clock, Phone, ChevronRight } from "lucide-react";
import heroPizza from "@/assets/hero-pizza.jpg";
import poutine from "@/assets/poutine.jpg";
import sub from "@/assets/sub.jpg";
import interior from "@/assets/interior.jpg";

export const Route = createFileRoute("/")({
  head: () => ({
    meta: [
      { title: "Quality Pizza & Subs — Mundare, AB" },
      {
        name: "description",
        content:
          "Quality Pizza & Subs in Mundare, Alberta. Hand-tossed pizzas, hearty subs, and famous poutine. Open today — call (780) 764-2233.",
      },
      { property: "og:title", content: "Quality Pizza & Subs — Mundare, AB" },
      {
        property: "og:description",
        content:
          "Hand-tossed pizzas, hearty subs, and famous poutine in Mundare, Alberta.",
      },
      { property: "og:url", content: "/" },
    ],
    links: [{ rel: "canonical", href: "/" }],
  }),
  component: Home,
});

function Home() {
  return (
    <SiteLayout>
      {/* Hero */}
      <section className="relative overflow-hidden">
        <div className="mx-auto grid max-w-6xl gap-10 px-5 py-16 md:grid-cols-2 md:items-center md:py-24">
          <div>
            <div className="inline-flex items-center gap-2 rounded-full border border-border bg-card px-3 py-1 text-xs font-medium text-muted-foreground">
              <span className="h-2 w-2 rounded-full bg-accent" />
              Open today · Closes 8 p.m.
            </div>
            <h1 className="mt-5 font-display text-5xl font-bold leading-[1.05] tracking-tight md:text-6xl">
              Slow-risen dough.{" "}
              <span className="text-primary">Hometown</span> heart.
            </h1>
            <p className="mt-5 max-w-md text-lg text-muted-foreground">
              Mundare's go-to spot for hand-tossed pizza, stacked subs, and the
              poutine everyone keeps coming back for.
            </p>
            <div className="mt-7 flex flex-wrap items-center gap-3">
              <Link
                to="/menu"
                className="inline-flex items-center gap-2 rounded-full bg-primary px-6 py-3 text-sm font-semibold text-primary-foreground shadow-[var(--shadow-warm)] transition-transform hover:scale-[1.03]"
              >
                See the menu <ChevronRight className="h-4 w-4" />
              </Link>
              <a
                href="tel:+17807642233"
                className="inline-flex items-center gap-2 rounded-full border border-border bg-card px-6 py-3 text-sm font-semibold text-foreground hover:bg-secondary"
              >
                <Phone className="h-4 w-4" /> Order by phone
              </a>
            </div>
            <div className="mt-8 flex items-center gap-5 text-sm">
              <div className="flex items-center gap-1.5">
                {[0, 1, 2, 3].map((i) => (
                  <Star key={i} className="h-4 w-4 fill-primary text-primary" />
                ))}
                <Star className="h-4 w-4 fill-primary/60 text-primary" />
                <span className="ml-1 font-semibold">4.5</span>
                <span className="text-muted-foreground">(146 reviews)</span>
              </div>
              <span className="text-muted-foreground">$10–20 per person</span>
            </div>
          </div>

          <div className="relative">
            <div
              className="absolute -inset-6 -z-10 rounded-[2rem] opacity-30 blur-3xl"
              style={{ background: "var(--gradient-warm)" }}
            />
            <img
              src={heroPizza}
              alt="Fresh hand-tossed pizza with basil"
              width={1600}
              height={1200}
              className="aspect-square w-full rounded-[2rem] object-cover shadow-[var(--shadow-warm)]"
            />
            <div className="absolute -bottom-5 -left-5 hidden rounded-2xl border border-border bg-card p-4 shadow-[var(--shadow-soft)] sm:block">
              <div className="text-xs uppercase tracking-wider text-muted-foreground">
                Most loved
              </div>
              <div className="font-display text-lg font-semibold">Poutine</div>
            </div>
          </div>
        </div>
      </section>

      {/* Specialty highlights */}
      <section className="border-y border-border bg-secondary/40">
        <div className="mx-auto max-w-6xl px-5 py-20">
          <div className="flex items-end justify-between">
            <div>
              <p className="text-sm font-semibold uppercase tracking-wider text-primary">
                Favourites
              </p>
              <h2 className="mt-2 font-display text-4xl font-bold">
                What Mundare orders
              </h2>
            </div>
            <Link
              to="/menu"
              className="hidden text-sm font-semibold text-primary hover:underline md:inline"
            >
              Full menu →
            </Link>
          </div>

          <div className="mt-10 grid gap-6 md:grid-cols-3">
            {[
              {
                img: heroPizza,
                title: "Hand-Tossed Pizza",
                desc: "Slow-fermented dough, house sauce, generous toppings.",
                price: "from $14",
              },
              {
                img: sub,
                title: "Loaded Subs",
                desc: "Toasted, stacked, and dressed exactly how you like.",
                price: "from $11",
              },
              {
                img: poutine,
                title: "Famous Poutine",
                desc: "Hot fries, squeaky curds, and rich house gravy.",
                price: "from $10",
              },
            ].map((item) => (
              <article
                key={item.title}
                className="group overflow-hidden rounded-2xl border border-border bg-card transition-all hover:shadow-[var(--shadow-soft)]"
              >
                <div className="overflow-hidden">
                  <img
                    src={item.img}
                    alt={item.title}
                    loading="lazy"
                    width={1024}
                    height={1024}
                    className="aspect-[4/3] w-full object-cover transition-transform duration-500 group-hover:scale-105"
                  />
                </div>
                <div className="p-5">
                  <div className="flex items-baseline justify-between">
                    <h3 className="font-display text-xl font-semibold">
                      {item.title}
                    </h3>
                    <span className="text-sm font-medium text-primary">
                      {item.price}
                    </span>
                  </div>
                  <p className="mt-2 text-sm text-muted-foreground">
                    {item.desc}
                  </p>
                </div>
              </article>
            ))}
          </div>
        </div>
      </section>

      {/* Story strip */}
      <section className="mx-auto max-w-6xl px-5 py-24">
        <div className="grid gap-12 md:grid-cols-2 md:items-center">
          <img
            src={interior}
            alt="Inside Quality Pizza & Subs"
            loading="lazy"
            width={1600}
            height={1000}
            className="aspect-[4/3] w-full rounded-2xl object-cover shadow-[var(--shadow-soft)]"
          />
          <div>
            <p className="text-sm font-semibold uppercase tracking-wider text-primary">
              Our story
            </p>
            <h2 className="mt-2 font-display text-4xl font-bold">
              A little pizza place with a big following.
            </h2>
            <p className="mt-5 text-muted-foreground">
              Tucked on 50th Street in Mundare, we've been feeding the
              neighbourhood for years — one pizza, one sub, one bowl of poutine
              at a time. No shortcuts, no fuss. Just good food made with care.
            </p>
            <div className="mt-7 grid grid-cols-3 gap-4 text-center">
              <Stat label="Rating" value="4.5★" />
              <Stat label="Reviews" value="146" />
              <Stat label="Per person" value="$10–20" />
            </div>
          </div>
        </div>
      </section>

      {/* Visit CTA */}
      <section className="border-t border-border bg-primary text-primary-foreground">
        <div className="mx-auto grid max-w-6xl gap-10 px-5 py-16 md:grid-cols-[1.2fr_1fr] md:items-center">
          <div>
            <h2 className="font-display text-4xl font-bold">
              Come hungry. Leave happy.
            </h2>
            <p className="mt-3 max-w-md text-primary-foreground/85">
              Dine in, take out, or call ahead. We're right downtown — easy to
              find, easy to love.
            </p>
          </div>
          <div className="space-y-3 rounded-2xl bg-primary-foreground/10 p-6 backdrop-blur">
            <InfoRow icon={<MapPin className="h-4 w-4" />} label="5029 50 St, Mundare, AB" />
            <InfoRow icon={<Phone className="h-4 w-4" />} label="(780) 764-2233" />
            <InfoRow icon={<Clock className="h-4 w-4" />} label="Open today · Closes 8 p.m." />
            <Link
              to="/contact"
              className="mt-4 inline-flex items-center gap-2 rounded-full bg-primary-foreground px-5 py-2.5 text-sm font-semibold text-primary"
            >
              Get directions <ChevronRight className="h-4 w-4" />
            </Link>
          </div>
        </div>
      </section>
    </SiteLayout>
  );
}

function Stat({ label, value }: { label: string; value: string }) {
  return (
    <div className="rounded-xl border border-border bg-card p-4">
      <div className="font-display text-2xl font-bold text-primary">{value}</div>
      <div className="mt-1 text-xs uppercase tracking-wider text-muted-foreground">
        {label}
      </div>
    </div>
  );
}

function InfoRow({ icon, label }: { icon: React.ReactNode; label: string }) {
  return (
    <div className="flex items-center gap-3 text-sm">
      <span className="grid h-8 w-8 place-items-center rounded-full bg-primary-foreground/15">
        {icon}
      </span>
      {label}
    </div>
  );
}
