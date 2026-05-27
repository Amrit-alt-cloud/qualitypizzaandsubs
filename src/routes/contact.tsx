import { createFileRoute } from "@tanstack/react-router";
import { SiteLayout } from "@/components/SiteLayout";
import { MapPin, Phone, Clock } from "lucide-react";

export const Route = createFileRoute("/contact")({
  head: () => ({
    meta: [
      { title: "Contact & Directions — Quality Pizza & Subs" },
      {
        name: "description",
        content:
          "Find us at 5029 50 St, Mundare, AB. Call (780) 764-2233. Open today until 8 p.m.",
      },
      { property: "og:title", content: "Contact — Quality Pizza & Subs" },
      {
        property: "og:description",
        content: "Address, phone, and hours for Quality Pizza & Subs in Mundare, AB.",
      },
      { property: "og:url", content: "/contact" },
    ],
    links: [{ rel: "canonical", href: "/contact" }],
  }),
  component: ContactPage,
});

const hours = [
  ["Sunday", "9 a.m. – 8 p.m."],
  ["Monday", "9 a.m. – 8 p.m."],
  ["Tuesday", "9 a.m. – 8 p.m."],
  ["Wednesday", "9 a.m. – 9 p.m."],
  ["Thursday", "9 a.m. – 9 p.m."],
  ["Friday", "9 a.m. – 9 p.m."],
  ["Saturday", "9 a.m. – 9 p.m."],
];

function ContactPage() {
  return (
    <SiteLayout>
      <section className="mx-auto max-w-4xl px-5 py-16 text-center">
        <p className="text-sm font-semibold uppercase tracking-wider text-primary">
          Visit us
        </p>
        <h1 className="mt-3 font-display text-5xl font-bold">Stop by, or call ahead</h1>
        <p className="mt-4 text-muted-foreground">
          Right downtown in Mundare. Dine in or take out.
        </p>
      </section>

      <section className="mx-auto max-w-6xl px-5 pb-24">
        <div className="grid gap-6 md:grid-cols-3">
          <Card icon={<MapPin className="h-5 w-5" />} title="Address">
            <p>5029 50 St</p>
            <p>Mundare, AB T0B 3H0</p>
            <a
              href="https://maps.google.com/?q=Quality+Pizza+and+Subs+Mundare"
              target="_blank"
              rel="noreferrer"
              className="mt-3 inline-block text-sm font-semibold text-primary hover:underline"
            >
              Get directions →
            </a>
          </Card>
          <Card icon={<Phone className="h-5 w-5" />} title="Phone">
            <a
              href="tel:+17807642233"
              className="font-display text-2xl font-bold text-foreground"
            >
              (780) 764-2233
            </a>
            <p className="mt-2 text-sm">Call to order or ask about catering.</p>
          </Card>
          <Card icon={<Clock className="h-5 w-5" />} title="Hours">
            <ul className="space-y-1 text-sm">
              {hours.map(([day, time]) => (
                <li key={day} className="flex justify-between gap-3">
                  <span className="text-foreground">{day}</span>
                  <span>{time}</span>
                </li>
              ))}
            </ul>
          </Card>
        </div>

        <div className="mt-10 overflow-hidden rounded-2xl border border-border shadow-[var(--shadow-soft)]">
          <iframe
            title="Map to Quality Pizza & Subs"
            src="https://www.google.com/maps?q=5029+50+St,+Mundare,+AB+T0B+3H0&output=embed"
            className="h-[420px] w-full"
            loading="lazy"
            referrerPolicy="no-referrer-when-downgrade"
          />
        </div>
      </section>
    </SiteLayout>
  );
}

function Card({
  icon,
  title,
  children,
}: {
  icon: React.ReactNode;
  title: string;
  children: React.ReactNode;
}) {
  return (
    <div className="rounded-2xl border border-border bg-card p-6 shadow-[var(--shadow-soft)]">
      <div className="flex items-center gap-3">
        <span className="grid h-10 w-10 place-items-center rounded-full bg-primary/10 text-primary">
          {icon}
        </span>
        <h2 className="font-display text-xl font-semibold">{title}</h2>
      </div>
      <div className="mt-4 text-muted-foreground">{children}</div>
    </div>
  );
}
