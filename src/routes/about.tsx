import { createFileRoute } from "@tanstack/react-router";
import { SiteLayout } from "@/components/SiteLayout";
import interior from "@/assets/interior.jpg";

export const Route = createFileRoute("/about")({
  head: () => ({
    meta: [
      { title: "About — Quality Pizza & Subs" },
      {
        name: "description",
        content:
          "A family-run pizza spot in Mundare, AB serving hand-tossed pizza, subs, and poutine since day one.",
      },
      { property: "og:title", content: "About — Quality Pizza & Subs" },
      {
        property: "og:description",
        content: "Our story in Mundare, Alberta — small town, big flavour.",
      },
      { property: "og:url", content: "/about" },
    ],
    links: [{ rel: "canonical", href: "/about" }],
  }),
  component: AboutPage,
});

function AboutPage() {
  return (
    <SiteLayout>
      <section className="mx-auto max-w-4xl px-5 py-20 text-center">
        <p className="text-sm font-semibold uppercase tracking-wider text-primary">
          About us
        </p>
        <h1 className="mt-3 font-display text-5xl font-bold">
          Mundare's neighbourhood pizza shop
        </h1>
        <p className="mt-6 text-lg leading-relaxed text-muted-foreground">
          Quality Pizza &amp; Subs has been a fixture on 50th Street for years —
          the kind of place where the dough is hand-tossed in the morning, the
          gravy simmers all day, and the regulars are on a first-name basis with
          the kitchen.
        </p>
      </section>

      <section className="border-y border-border bg-secondary/40">
        <div className="mx-auto grid max-w-6xl gap-12 px-5 py-20 md:grid-cols-2 md:items-center">
          <img
            src={interior}
            alt="Inside the restaurant"
            loading="lazy"
            width={1600}
            height={1000}
            className="aspect-[4/3] w-full rounded-2xl object-cover shadow-[var(--shadow-soft)]"
          />
          <div className="space-y-5 text-muted-foreground">
            <p>
              We keep it simple. Good ingredients, slow-fermented dough, real
              cheese curds, and recipes we'd serve our own family — because most
              of the time, we are.
            </p>
            <p>
              Whether you're stopping in after a hockey game, picking up dinner
              on a quiet Tuesday, or feeding a full table on a Friday night,
              we'll take care of you.
            </p>
            <ul className="grid gap-3 pt-2 text-foreground">
              <li>• Hand-tossed pizza dough, made daily</li>
              <li>• Real cheese curds in every poutine</li>
              <li>• Family-run · locally loved</li>
            </ul>
          </div>
        </div>
      </section>
    </SiteLayout>
  );
}
