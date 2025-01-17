
const { Shop, Item, NormalItem, Cheese, Sulfuras, BackStage, Conjured } = require("../src/gilded_rose");

const items = [
  new NormalItem("+5 Dexterity Vest", 10, 20),
  new Cheese("Aged Brie", 2, 0),
  new NormalItem("Elixir of the Mongoose", 5, 7),
  new Sulfuras("Sulfuras, Hand of Ragnaros", 0, 80),
  new Sulfuras("Sulfuras, Hand of Ragnaros", -1, 80),
  new BackStage("Backstage passes to a TAFKAL80ETC concert", 15, 20),
  new BackStage("Backstage passes to a TAFKAL80ETC concert", 10, 49),
  new BackStage("Backstage passes to a TAFKAL80ETC concert", 5, 49),
  new Conjured("Conjured Mana Cake", 3, 6),
];

const days = 10
const gildedRose = new Shop(items);

console.log("OMGHAI!");
for (let day = 0; day < days; day++) {
  console.log(`\n-------- day ${day} --------`);
  console.log("name, sellIn, quality");
  items.forEach(item => console.log(`${item.name}, ${item.sellIn}, ${item.quality}`));
  gildedRose.updateQuality();
}
