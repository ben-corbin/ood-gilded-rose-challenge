const {Shop, Item, NormalItem, Cheese, Sulfuras, BackStage, Conjured} = require('../src/gilded_rose.js');
describe("Gilded Rose", function() {

  fit("should foo", function() {
    const gildedRose = new Shop([ new NormalItem("Aged Brie", 0, 0) ]);
    gildedRose.updateQuality();
    const result = gildedRose.items[0].name
    expect(result).toEqual("Aged Brie");
  });

  fit("reduces sellIn and quality of a test item by 1 when the function is called", function() {
    const gildedRose = new Shop([ new NormalItem("Test Item", 2, 2) ]);
    const items = gildedRose.updateQuality();
    expect(items[0].sellIn).toEqual(1)
    expect(items[0].quality).toEqual(1);
  });

  fit("Quality reduces twice as fast when sellIn is a negative number", function() {
    const gildedRose = new Shop([ new NormalItem("Test Item", -1, 4) ]);
    gildedRose.updateQuality();
    const result = gildedRose.items[0].quality
    expect(result).toEqual(2);
  });

  fit("Quality cannot be a negative number", function() {
    const gildedRose = new Shop([ new NormalItem("Test Item", -5, 0) ]);
    const items = gildedRose.updateQuality();
    expect(items[0].sellIn).toEqual(-6)
    expect(items[0].quality).toEqual(0);
  });

  fit("Aged Brie quality increases the older it gets", function() {
    const gildedRose = new Shop([ new Cheese("Aged Brie", 10, 10) ]);
    const items = gildedRose.updateQuality();
    expect(items[0].sellIn).toEqual(9)
    expect(items[0].quality).toEqual(11);
  });

  fit("Aged Brie quality increases twice as fast after the sellIn has passed", function() {
    const gildedRose = new Shop([ new Cheese("Aged Brie", -2, 10) ]);
    const items = gildedRose.updateQuality();
    expect(items[0].sellIn).toEqual(-3)
    expect(items[0].quality).toEqual(12);
  });

  fit("Quality can't be more than 50", function() {
    const gildedRose = new Shop([ new Cheese("Aged Brie", 10, 50) ]);
    const items = gildedRose.updateQuality();
    expect(items[0].sellIn).toEqual(9)
    expect(items[0].quality).toEqual(50);
  });

  fit("Sulfuras' quality score never drops below 80", function() {
    const gildedRose = new Shop([ new Sulfuras("Sulfuras, Hand of Ragnaros", 10, 80) ]);
    const items = gildedRose.updateQuality();
    expect(items[0].sellIn).toEqual(10)
    expect(items[0].quality).toEqual(80);
  });

  fit("Backstage passes quality reduces to 0 when the sellIn is -1", function() {
    const gildedRose = new Shop([ new BackStage("Backstage passes to a TAFKAL80ETC concert", 0, 50) ]);
    const items = gildedRose.updateQuality();
    expect(items[0].sellIn).toEqual(-1)
    expect(items[0].quality).toEqual(0);
  });

  fit("Backstage passes quality increases by 3 when <=5", function() {
    const gildedRose = new Shop([ new BackStage("Backstage passes to a TAFKAL80ETC concert", 5, 40) ]);
    const items = gildedRose.updateQuality();
    expect(items[0].quality).toEqual(43);
  });
  
  fit("Backstage passes quality increases by 2 when >=11", function() {
    const gildedRose = new Shop([ new BackStage("Backstage passes to a TAFKAL80ETC concert", 10, 40) ]);
    const items = gildedRose.updateQuality();
    expect(items[0].quality).toEqual(42);
  });

  fit("Backstage passes quality increases by 1 when ", function() {
    const gildedRose = new Shop([ new BackStage("Backstage passes to a TAFKAL80ETC concert", 20, 40) ]);
    const items = gildedRose.updateQuality();
    expect(items[0].quality).toEqual(41);
  });

  fit("Quality reduces twice as fast for conjured items", function() {
    const gildedRose = new Shop([ new Conjured("Conjured Mana Cake", 3, 6) ]);
    const items = gildedRose.updateQuality();
    expect(items[0].sellIn).toEqual(2)
    expect(items[0].quality).toEqual(4);
  });

  fit("Quality reduces 4 times as fast for conjured items when sellIn is 0 or less", function() {
    const gildedRose = new Shop([ new Conjured("Conjured Mana Cake", -5, 6) ]);
    const items = gildedRose.updateQuality();
    expect(items[0].quality).toEqual(2);
  });


});
