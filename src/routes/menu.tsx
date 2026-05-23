import { createFileRoute } from "@tanstack/react-router";
import { SiteLayout } from "@/components/SiteLayout";

export const Route = createFileRoute("/menu")({
  head: () => ({
    meta: [
      { title: "Menu — Quality Pizza & Subs" },
      {
        name: "description",
        content:
          "Browse our full menu: fresh pizzas, loaded subs, poutine, sides, and drinks. Mundare, Alberta.",
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
    tagline: "Small 10\" / Medium 12\" / Large 14\"  ·  $6.99 / $14.99 / $18.99",
    items: [
      { name: "Pepperoni Pizza", desc: "Pepperoni, pizza sauce and cheese.", price: "$6.99 / $14.99 / $18.99" },
      { name: "Cheese Pizza", desc: "Pizza sauce and cheese.", price: "$6.99 / $14.99 / $18.99" },
      { name: "Hawaiian", desc: "Ham, pineapple, pizza sauce and cheese.", price: "$6.99 / $14.99 / $18.99" },
      { name: "Canadian", desc: "Pepperoni, bacon, mushroom, pizza sauce and cheese.", price: "$6.99 / $14.99 / $18.99" },
      { name: "Quality Meat Lovers", desc: "Pepperoni, sausage, ham, bacon, pizza sauce and cheese.", price: "$6.99 / $14.99 / $18.99" },
      { name: "Quality Supreme", desc: "Sausage, ground beef, green pepper, red onion, pizza sauce and cheese.", price: "$6.99 / $14.99 / $18.99" },
      { name: "Chicken Pizza", desc: "Chicken, green pepper, red onion, mushroom, pizza sauce and cheese.", price: "$6.99 / $14.99 / $18.99" },
      { name: "BBQ Chicken", desc: "BBQ sauce, cheese, grilled chicken, red onion, green pepper.", price: "$6.99 / $14.99 / $18.99" },
      { name: "Chicken Garlic", desc: "Garlic sauce, green peppers, red onions, chicken and cheese.", price: "$6.99 / $14.99 / $18.99" },
      { name: "Donair Pizza", desc: "Green pepper, onion, donair meat, sweet sauce.", price: "$6.99 / $14.99 / $18.99" },
      { name: "Veggie Pizza", desc: "Mushroom, onion, green pepper, black olive, tomato, pizza sauce and cheese.", price: "$6.99 / $14.99 / $18.99" },
    ],
  },
  {
    title: "Pizza Deals",
    tagline: "Pizza pairs",
    items: [
      { name: "2 Medium 12\" Pizzas", desc: "Pick any two from our menu.", price: "$25.99" },
      { name: "2 Large 14\" Pizzas", desc: "Pick any two from our menu.", price: "$35.99" },
    ],
  },
  {
    title: "Fresh Subs",
    tagline: "6\" / 9\" & 12\"  ·  add combo (fries + pop can) $4.99",
    items: [
      { name: "Quality Sub", desc: "Turkey, beef, cheese, black forest ham and veggies of your choice.", price: "$5.49 / $8.49" },
      { name: "Quality Club", desc: "Grilled chicken, ham, cheese, bacon and veggies of your choice.", price: "$5.49 / $8.49" },
      { name: "Teriyaki Chicken", desc: "Teriyaki chicken, mozzarella cheese and veggies of your choice.", price: "$5.49 / $8.49" },
      { name: "Chicken Sub", desc: "Grilled chicken, cheese and veggies of your choice.", price: "$5.49 / $8.49" },
      { name: "Beef Sub", desc: "Roasted beef, cheese and veggies of your choice.", price: "$5.49 / $8.49" },
      { name: "Donair Sub", desc: "Donair meat, mayo, sweet sauce, cheese and veggies of your choice.", price: "$5.49 / $8.49" },
      { name: "Veggie Sub", desc: "Cheese and all the veggies of your choice.", price: "$5.49 / $8.49" },
    ],
  },
  {
    title: "Burgers",
    tagline: "Combo adds fries + pop",
    items: [
      { name: "Hamburger", desc: "Lettuce, tomato, ketchup, mustard, beef patty, bacon, pickles, cheese, onion.", price: "$6.49  ·  Combo $9.99" },
      { name: "Cheeseburger", desc: "Lettuce, tomato, cheese, ketchup, mustard, beef.", price: "$5.99  ·  Combo $8.99" },
      { name: "Quality Burger", desc: "Double beef patty, onion, lettuce, tomato, ketchup, bacon, cheese.", price: "$7.99  ·  Combo $11.99" },
      { name: "Chicken Burger", desc: "Chicken, lettuce, tomato, mayo, cheese.", price: "$6.99  ·  Combo $9.99" },
      { name: "Buffalo Chicken Burger", desc: "Buffalo chicken, lettuce, tomato, mayo, cheese.", price: "$6.99  ·  Combo $9.99" },
    ],
  },
  {
    title: "Chicken Wings",
    tagline: "Honey garlic · BBQ · salt · salt & pepper · hot · teriyaki · honey garlic chili",
    items: [
      { name: "12 pcs Wings", price: "$9.99" },
      { name: "25 pcs Wings", price: "$20.00" },
    ],
  },
  {
    title: "Chicken Strips",
    tagline: "Add combo (fries + pop) for $2.99",
    items: [
      { name: "3 pcs Chicken Strips", price: "$4.99" },
      { name: "5 pcs Chicken Strips", price: "$7.99" },
    ],
  },
  {
    title: "Poutine & Sides",
    tagline: "Comfort, the way it should be",
    items: [
      { name: "Poutine", desc: "Hot fries, cheese curds, rich gravy.", price: "$6.99" },
      { name: "Regular Fries or Onion Rings", price: "$3.99" },
      { name: "Large Fries or Onion Rings", price: "$5.99" },
      { name: "Mozza Sticks (4 pcs)", price: "$4.89" },
      { name: "Mozza Stick Combo", desc: "4 pcs mozza sticks, fries + pop can.", price: "$9.90" },
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
