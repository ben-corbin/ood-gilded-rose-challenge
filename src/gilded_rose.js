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
const MIN_QUALITY = 0
const MAX_QUALITY = 50


class Shop {
  constructor(items=[]){
    this.items = items;
  }

  updateQuality() {
    for (const item of this.items) {
      //checking if item is standard and if it is, decrementing quality by 1
      if (item.name != BRIE && item.name != BACKSTAGE_PASSES && item.name != SULFURAS && item.quality > MIN_QUALITY) {
        item.quality --;
      }
       else {
        //checking if Brie quality is less than 50, then incrementing
        if (item.quality < MAX_QUALITY) {
          item.quality ++
        }
        //then if it is BACKSTAGE_PASSES and sellIn is less than 11 and quality is still 
        //less than 50 then increment and then check if the sellIn is less than 6 and
        //quality is still less them 50 then increment
        if (item.name == BACKSTAGE_PASSES && item.sellIn < 11 && item.quality < MAX_QUALITY) {
          item.quality ++
        if (item.name == BACKSTAGE_PASSES && item.sellIn < 6 && item.quality < MAX_QUALITY) {
          item.quality ++;
        }
          }
        }
      
      //deals with decrementing days which is equal for all items apart from SULFURAS
      if (item.name != SULFURAS) {
        item.sellIn --;
      }
      if (item.sellIn < MIN_QUALITY || item.name == CONJURED)  {
        if (item.name != BRIE) {
          if (item.name != BACKSTAGE_PASSES) {
            if (item.quality > MIN_QUALITY) {
              if (item.name != SULFURAS) {
                item.quality --;
              }
            }
          } else {
            item.quality = item.quality - item.quality;
          }
        } else {
          if (item.quality < MAX_QUALITY) {
            item.quality ++;
          }
        }
      }
    }

    return this.items;
  }
}

function createShop(items=[]) {
  return new Shop();
}

module.exports = {
  Item,
  Shop
}
