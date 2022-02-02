class Item {
  constructor(name, sellIn, quality){
    this.name = name;
    this.sellIn = sellIn;
    this.quality = quality;
  }
}

const BRIE = 'Aged Brie'
const BACKSTAGE_PASSES = 'Backstage passes to a TAFKAL80ETC concert'
const SULFURAS = 'Sulfuras, Hand of Ragnaros'
const CONJURED = 'Conjured Mana Cake'


class Shop {
  constructor(items=[]){
    this.items = items;
  }
  updateQuality() {
    for (const item of this.items) {
      if (item.name != BRIE && item.name != BACKSTAGE_PASSES) {
        if (item.quality > 0) {
          if (item.name != SULFURAS) {
            item.quality --;
          }
        }
      } else {
        if (item.quality < 50) {
          item.quality = item.quality + 1;
          if (item.name == BACKSTAGE_PASSES) {
            if (item.sellIn < 11) {
              if (item.quality < 50) {
                item.quality ++;
              }
            }
            if (item.sellIn < 6) {
              if (item.quality < 50) {
                item.quality ++;
              }
            }
          }
        }
      }
      if (item.name != SULFURAS) {
        item.sellIn --;
      }
      if (item.sellIn < 0 || item.name == CONJURED)  {
        if (item.name != BRIE) {
          if (item.name != BACKSTAGE_PASSES) {
            if (item.quality > 0) {
              if (item.name != SULFURAS) {
                item.quality --;
              }
            }
          } else {
            item.quality = item.quality - item.quality;
          }
        } else {
          if (item.quality < 50) {
            item.quality ++;
          }
        }
      }
    }

    return this.items;
  }
}
module.exports = {
  Item,
  Shop
}
