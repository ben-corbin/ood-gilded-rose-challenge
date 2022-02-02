const {Shop, Item} = require('../src/gilded_rose.js');
describe("Gilded Rose", function() {

  it("should foo", function() {
    const gildedRose = new Shop([ new Item("Aged Brie", 0, 0) ]);
    const items = gildedRose.updateQuality();
    expect(items[0].name).toEqual("Aged Brie");
  });

  it("reduces sellIn and quality of a test item by 1 when the function is called", function() {
    const gildedRose = new Shop([ new Item("Test Item", 1, 1) ]);
    const items = gildedRose.updateQuality();
    expect(items[0].sellIn).toEqual(0)
    expect(items[0].quality).toEqual(0);
  });

  it("Quality reduces twice as fast when sellIn is a negative number", function() {
    const gildedRose = new Shop([ new Item("Test Item", -5, 4) ]);
    const items = gildedRose.updateQuality();
    expect(items[0].sellIn).toEqual(-6)
    expect(items[0].quality).toEqual(2);
  });

  it("Quality cannot be a negative number", function() {
    const gildedRose = new Shop([ new Item("Test Item", -5, 0) ]);
    const items = gildedRose.updateQuality();
    expect(items[0].sellIn).toEqual(-6)
    expect(items[0].quality).toEqual(0);
  });

  it("Aged Brie quality increases the older it gets", function() {
    const gildedRose = new Shop([ new Item("Aged Brie", 10, 10) ]);
    const items = gildedRose.updateQuality();
    expect(items[0].sellIn).toEqual(9)
    expect(items[0].quality).toEqual(11);
  });

  it("Quality can't be more than 50", function() {
    const gildedRose = new Shop([ new Item("Aged Brie", 10, 50) ]);
    const items = gildedRose.updateQuality();
    expect(items[0].sellIn).toEqual(9)
    expect(items[0].quality).toEqual(50);
  });

  it("Sulfuras' quality score never drops below 80", function() {
    const gildedRose = new Shop([ new Item("Sulfuras, Hand of Ragnaros", 10, 80) ]);
    const items = gildedRose.updateQuality();
    expect(items[0].sellIn).toEqual(10)
    expect(items[0].quality).toEqual(80);
  });

  it("Backstage passes quality increases by 3 when <=5", function() {
    const gildedRose = new Shop([ new Item("Backstage passes to a TAFKAL80ETC concert", 5, 40) ]);
    const items = gildedRose.updateQuality();
    expect(items[0].sellIn).toEqual(4)
    expect(items[0].quality).toEqual(43);
  });
  
  it("Backstage passes quality increases by 2 when <=10", function() {
    const gildedRose = new Shop([ new Item("Backstage passes to a TAFKAL80ETC concert", 10, 40) ]);
    const items = gildedRose.updateQuality();
    expect(items[0].sellIn).toEqual(9)
    expect(items[0].quality).toEqual(42);
  });

  it("Quality reduces twice as fast for conjured items", function() {
    const gildedRose = new Shop([ new Item("Conjured Mana Cake", 3, 6) ]);
    const items = gildedRose.updateQuality();
    expect(items[0].sellIn).toEqual(2)
    expect(items[0].quality).toEqual(4);
  });

  

});
