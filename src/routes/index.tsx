import { createFileRoute, Link } from "@tanstack/react-router";
import { SiteLayout } from "@/components/SiteLayout";
import { MapPin, Clock, Phone, ChevronRight } from "lucide-react";


export const Route = createFileRoute("/")({
  head: () => ({
    meta: [
      { title: "Quality Pizza & Subs — Mundare, AB" },
      {
        name: "description",
        content:
          "Quality Pizza & Subs in Mundare, Alberta. Fresh pizzas, hearty subs, wings, and famous poutine. Open today — call (780) 764-2233.",
      },
      { property: "og:title", content: "Quality Pizza & Subs — Mundare, AB" },
      {
        property: "og:description",
        content:
          "Fresh pizzas, hearty subs, wings, and famous poutine in Mundare, Alberta.",
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
        <div className="mx-auto max-w-3xl px-5 py-16 text-center md:py-24">
          <h1 className="font-display text-5xl font-bold leading-[1.05] tracking-tight md:text-6xl">
            Fresh pizza.{" "}
            <span className="text-primary">Hometown</span> heart.
          </h1>
          <p className="mx-auto mt-5 max-w-md text-lg text-muted-foreground">
            Mundare's go-to spot for fresh pizza, hot wings, and the poutine
            everyone keeps coming back for.
          </p>
          <div className="mt-7 flex flex-wrap items-center justify-center gap-3">
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
                title: "Large Poutine",
                desc: "Hot fries, squeaky curds, and rich house gravy.",
                price: "from $10",
              },
              {
                title: "Chicken Wings",
                desc: "Tossed in your favourite sauce — hot, BBQ, honey garlic.",
                price: "from $14",
              },
              {
                title: "Chicken Burger",
                desc: "Crispy breaded chicken, lettuce, and a soft sesame bun.",
                price: "from $11",
              },
            ].map((item) => (
              <article
                key={item.title}
                className="group rounded-2xl border border-border bg-card p-6 transition-all hover:shadow-[var(--shadow-soft)]"
              >
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
              </article>
            ))}
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
            <InfoRow icon={<MapPin className="h-4 w-4" />}>
              5029 50 St, Mundare, AB
            </InfoRow>
            <InfoRow icon={<Phone className="h-4 w-4" />}>
              <a href="tel:+17807642233" className="hover:underline">
                (780) 764-2233
              </a>
            </InfoRow>
            <InfoRow icon={<Clock className="h-4 w-4" />}>
              Open today · Closes 8 p.m.
            </InfoRow>
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

function InfoRow({
  icon,
  children,
}: {
  icon: React.ReactNode;
  children: React.ReactNode;
}) {
  return (
    <div className="flex items-center gap-3 text-sm">
      <span className="grid h-8 w-8 place-items-center rounded-full bg-primary-foreground/15">
        {icon}
      </span>
      {children}
    </div>
  );
}
