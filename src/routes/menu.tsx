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
    tagline:
      "Personal 8\" $11.45  ·  Medium 12\" $19.99  ·  Large 14\" $23.99  ·  2 Medium $32.99  ·  2 Large $42.99",
    items: [
      { name: "Quality Meat Lovers", desc: "Pepperoni, sausage, ham, bacon, pizza sauce and cheese.", price: "" },
      { name: "Quality Supreme", desc: "Pepperoni, sausage, ground beef, green pepper, onions, pizza sauce and cheese.", price: "" },
      { name: "Hawaiian", desc: "Ham, pineapple, pizza sauce and cheese.", price: "" },
      { name: "Pepperoni Pizza", desc: "Pepperoni, pizza sauce and cheese.", price: "" },
      { name: "Cheese Pizza", desc: "Pizza sauce and cheese.", price: "" },
      { name: "Veggi Pizza", desc: "Mushroom, onion, green pepper, black olive, pizza sauce, cheese and tomato of your choice.", price: "" },
      { name: "Alfredo Chicken Pizza", desc: "Chicken, mushroom, onion, Alfredo sauce and cheese.", price: "" },
      { name: "Chicken Pizza", desc: "Chicken, green pepper, onion, mushroom, pizza sauce and cheese.", price: "" },
      { name: "Canadian", desc: "Pepperoni, bacon, mushroom, pizza sauce and cheese.", price: "" },
      { name: "BBQ Chicken", desc: "BBQ sauce, cheese, grilled chicken, onion and green peppers.", price: "" },
      { name: "Donair Pizza", desc: "Green pepper, onion, donair meat and sweet sauce.", price: "" },
      { name: "Chicken Garlic", desc: "Garlic sauce, green peppers, onions, chicken and cheese.", price: "" },
      { name: "Butter Chicken Pizza", desc: "Chicken, mushroom, onion, green pepper, butter chicken sauce and cheese.", price: "" },
    ],
  },
  {
    title: "Chicken Wings",
    tagline:
      "Flavours: Honey Garlic · BBQ · Salt & Pepper · Hot · Teriyaki · Honey Garlic Chilli",
    items: [
      { name: "10 pcs Wings", price: "$13.99" },
      { name: "20 pcs Wings", price: "$25.99" },
    ],
  },
  {
    title: "Chicken Strips",
    tagline: "",
    items: [
      { name: "3 pcs Chicken Strips", price: "$8.99  ·  + Combo $5.99" },
      { name: "5 pcs Chicken Strips", price: "$12.99  ·  + Combo $5.99" },
    ],
  },
  {
    title: "Burgers",
    tagline: "Sandwich / Meal (fries & 1 pop can)",
    items: [
      { name: "Hamburger", desc: "Lettuce, tomatoes, ketchup, mustard, beef patty, bacon, pickles, cheese and onion.", price: "$9.25  ·  Meal $15.25" },
      { name: "Cheese Burger", desc: "Lettuce, tomatoes, cheese, ketchup, mustard and beef.", price: "$7.99  ·  Meal $13.99" },
      { name: "Quality Burger", desc: "Double patty meat, onion, lettuce, tomato, ketchup, bacon and cheese.", price: "$10.99  ·  Meal $16.99" },
      { name: "Chicken Burger", desc: "Chicken, lettuce, tomato, mayo and cheese.", price: "$9.25  ·  Meal $15.25" },
      { name: "Buffalo Chicken Burger", desc: "Buffalo hot sauce, chicken, lettuce, tomato, mayo and cheese.", price: "$9.25  ·  Meal $15.25" },
      { name: "BBQ Bacon & Cheese", desc: "Lettuce, tomato, beef patty, bacon, pickles, onion, mayo and BBQ sauce, cheese.", price: "$9.25  ·  Meal $15.25" },
      { name: "Veggi Burger", desc: "Lettuce, tomato, pickles, onion, cheese, ketchup and veggi patty.", price: "$9.99  ·  Meal $15.99" },
      { name: "Mushroom Burger", desc: "Beef patty, cheese, lettuce, mushroom sauce and sautéed onions.", price: "$9.49  ·  Meal $15.49" },
      { name: "Donair Burger", desc: "Donair patty, donair sauce, tomato, cheese, lettuce and onions.", price: "$9.25  ·  Meal $15.25" },
    ],
  },
  {
    title: "Fresh Subs",
    tagline: "6\" / 12\"  ·  Make a combo with fries & 1 can of pop for +$5.99",
    items: [
      { name: "Veggi Sub", desc: "Veggie on your choice & cheese.", price: "$7.99 / $11.99" },
      { name: "Chicken Sub", desc: "Grilled chicken, cheese & veggie on your choice.", price: "$9.49 / $14.49" },
      { name: "Beef Sub", desc: "Roasted beef, cheese & veggie on your choice.", price: "$9.49 / $14.49" },
      { name: "Teriyaki Chicken", desc: "Teriyaki chicken, cheese & veggie on your choice.", price: "$9.49 / $14.49" },
      { name: "Quality Sub", desc: "Turkey, beef, cheese, black forest ham, & veggie on your choice.", price: "$9.99 / $15.49" },
      { name: "Quality Club", desc: "Grilled chicken, ham, cheese, bacon & veggie on your choice.", price: "$9.99 / $15.49" },
      { name: "Donair Sub", desc: "Donair meat, donair sauce, cheese & veggie on your choice.", price: "$9.99 / $15.49" },
    ],
  },
  {
    title: "Wraps",
    tagline: "",
    items: [
      { name: "Buffalo Chicken Wrap / Crispy Chicken Wrap", desc: "Lettuce, tomato, crispy chicken, ranch, mozzarella cheese.", price: "$9.99  ·  + Combo $5.99" },
      { name: "Donair Wrap", desc: "Donair meat, lettuce, tomato, onion, cheese, donair sauce.", price: "$11.99  ·  + Combo $5.99" },
    ],
  },
  {
    title: "Salads",
    tagline: "Fresh & crisp",
    items: [
      { name: "Chicken Mediterranean Salad", desc: "Chicken, lettuce, green pepper, onion, cucumber, tomato, olives, feta cheese, Greek feta sauce.", price: "$10.99" },
      { name: "Chicken Caesar Salad", desc: "Chicken, lettuce, parmesan cheese, bacon, croutons, Caesar dressing.", price: "$10.99" },
      { name: "Garden Salad", desc: "Lettuce, tomato, cucumber, onion, green pepper, olives, dressing of your choice.", price: "$8.99" },
    ],
  },
  {
    title: "Poutine",
    tagline: "Comfort, the way it should be",
    items: [
      { name: "Reg. Poutine", price: "$7.99" },
      { name: "Large Poutine", price: "$10.49" },
    ],
  },
  {
    title: "Fries & Onion Rings",
    tagline: "",
    items: [
      { name: "Reg. Fries / Onion Ring", price: "$5.99" },
      { name: "Large Fries / Onion Ring", price: "$7.99" },
    ],
  },
  {
    title: "Sides",
    tagline: "",
    items: [
      { name: "Potato Wedges", price: "$7.99" },
      { name: "Fried Pickle (5 pcs)", price: "$6.99" },
      { name: "Battered Mushroom (8 pcs)", price: "$7.99" },
      { name: "Battered Shrimps", price: "$11.99" },
      { name: "Spring Rolls (6 pcs)", desc: "Veggi, pork, chicken.", price: "$7.99" },
    ],
  },
  {
    title: "Dry Ribs",
    tagline: "",
    items: [
      { name: "Regular", price: "$12.99" },
      { name: "Large", price: "$24.99" },
    ],
  },
  {
    title: "Mozza Sticks",
    tagline: "Make a combo with fries & pop can for +$5.99",
    items: [
      { name: "4 pcs Mozza Sticks", price: "$6.99" },
    ],
  },
  {
    title: "Fried Fish",
    tagline: "Available Wednesday, Thursday & Friday",
    items: [
      { name: "Fried Fish", price: "$16.99" },
    ],
  },
  {
    title: "Spaghetti",
    tagline: "",
    items: [
      { name: "Regular", price: "$10.99" },
      { name: "Large", price: "$15.99" },
      { name: "Add Meat Balls (3 pcs)", price: "$3.99" },
      { name: "Garlic Toast (2 pcs)", price: "$3.99" },
    ],
  },
  {
    title: "Breakfast",
    tagline: "Available 10AM to 12PM",
    items: [
      { name: "2 Eggs + Bacon + Toast + Hashbrown & Coffee", price: "$11.99" },
      { name: "Breakfast Sandwich + Hashbrown & Coffee", desc: "Egg & cheese, egg & bacon or egg & sausage sandwiches.", price: "$9.99" },
      { name: "Coffee", price: "$2.50" },
      { name: "Refill", price: "$0.99" },
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
            (780) 764-2233 to confirm. Prices do not include GST. Dine-in extra
            charge may apply.
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
                  {item.price && (
                    <div className="font-display text-lg font-semibold text-primary">
                      {item.price}
                    </div>
                  )}
                </li>
              ))}
            </ul>
          </section>
        ))}
      </div>
    </SiteLayout>
  );
}
