import { createFileRoute } from "@tanstack/react-router";
import { SiteLayout } from "@/components/SiteLayout";

export const Route = createFileRoute("/menu")({
  head: () => ({
    meta: [
      { title: "Menu — Quality Pizza & Subs" },
      {
        name: "description",
        content:
          "Browse our full menu: hand-tossed pizzas, loaded subs, poutine, sides, and drinks. Mundare, Alberta.",
      },
      { property: "og:title", content: "Menu — Quality Pizza & Subs" },
      {
        property: "og:description",
        content: "Pizzas, subs, poutine and more — made fresh in Mundare, AB.",
      },
      { property: "og:url", content: "/menu" },
    ],
    links: [{ rel: "canonical", href: "/menu" }],
  }),
  component: MenuPage,
});

type Item = { name: string; desc?: string; price: string };
type Section = { title: string; tagline: string; items: Item[] };

const sections: Section[] = [
  {
    title: "Pizzas",
    tagline: "Hand-tossed · 12\" / 16\"",
    items: [
      { name: "Cheese", desc: "Mozzarella, house tomato sauce", price: "$14 / $20" },
      { name: "Pepperoni", desc: "Classic pepperoni, mozzarella", price: "$16 / $22" },
      { name: "Hawaiian", desc: "Ham, pineapple, mozzarella", price: "$17 / $23" },
      { name: "Meat Lovers", desc: "Pepperoni, ham, beef, bacon, sausage", price: "$19 / $26" },
      { name: "Veggie Garden", desc: "Mushrooms, peppers, onions, olives, tomatoes", price: "$17 / $24" },
      { name: "Quality Special", desc: "Pepperoni, mushrooms, peppers, onions, olives, bacon", price: "$20 / $27" },
    ],
  },
  {
    title: "Subs",
    tagline: "Toasted on a fresh bun · 9\" / 12\"",
    items: [
      { name: "Italian Sub", desc: "Salami, ham, pepperoni, provolone, dressed", price: "$11 / $14" },
      { name: "Meatball", desc: "House meatballs, marinara, melted mozzarella", price: "$11 / $14" },
      { name: "Chicken Parm", desc: "Breaded chicken, marinara, mozzarella", price: "$12 / $15" },
      { name: "Steak & Cheese", desc: "Shaved steak, onions, peppers, cheese", price: "$12 / $15" },
      { name: "Veggie", desc: "Lettuce, tomato, peppers, onions, cheese", price: "$10 / $13" },
    ],
  },
  {
    title: "Poutine & Sides",
    tagline: "Comfort, the way it should be",
    items: [
      { name: "Classic Poutine", desc: "Fries, cheese curds, rich gravy", price: "$10" },
      { name: "Bacon Poutine", desc: "Crispy bacon piled on the classic", price: "$12" },
      { name: "Garlic Cheese Toast", price: "$8" },
      { name: "Wings (1lb)", desc: "Hot, BBQ, salt & pepper, or honey garlic", price: "$14" },
      { name: "Caesar Salad", price: "$9" },
    ],
  },
  {
    title: "Drinks",
    tagline: "",
    items: [
      { name: "Fountain Pop", price: "$3" },
      { name: "Bottled Water", price: "$2" },
      { name: "Juice", price: "$3" },
    ],
  },
];

function MenuPage() {
  return (
    <SiteLayout>
      <section className="border-b border-border bg-secondary/40">
        <div className="mx-auto max-w-6xl px-5 py-16 text-center">
          <p className="text-sm font-semibold uppercase tracking-wider text-primary">
            The Menu
          </p>
          <h1 className="mt-3 font-display text-5xl font-bold">Made fresh, made right</h1>
          <p className="mx-auto mt-4 max-w-xl text-muted-foreground">
            Everything is made to order. Prices and items may vary — call us at
            (780) 764-2233 to confirm.
          </p>
        </div>
      </section>

      <div className="mx-auto max-w-5xl space-y-16 px-5 py-20">
        {sections.map((section) => (
          <section key={section.title}>
            <div className="mb-6 flex items-baseline justify-between border-b border-border pb-4">
              <h2 className="font-display text-3xl font-bold">{section.title}</h2>
              {section.tagline && (
                <span className="text-sm italic text-muted-foreground">
                  {section.tagline}
                </span>
              )}
            </div>
            <ul className="divide-y divide-border">
              {section.items.map((item) => (
                <li
                  key={item.name}
                  className="grid grid-cols-[1fr_auto] gap-4 py-4"
                >
                  <div>
                    <div className="font-semibold text-foreground">{item.name}</div>
                    {item.desc && (
                      <div className="mt-1 text-sm text-muted-foreground">
                        {item.desc}
                      </div>
                    )}
                  </div>
                  <div className="font-display text-lg font-semibold text-primary">
                    {item.price}
                  </div>
                </li>
              ))}
            </ul>
          </section>
        ))}
      </div>
    </SiteLayout>
  );
}
