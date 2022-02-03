class Item {
  constructor(name, sellIn, quality){
    this.name = name;
    this.sellIn = sellIn;
    this.quality = quality;
  }
}

const BRIE = 'Aged Brie'
const BACKSTAGE_PASSES = 'Backstage passes to a TAFKAL80ETC concert'
const BACKSTAGE_PASSES_ACCELORATOR_1 = 11
const BACKSTAGE_PASSES_ACCELORATOR_2 = 6
const BACKSTAGE_PASS_EXPIRED = -1
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
        //Check if item is BACKSTAGE_PASSES and if sellIn is less than 11 and quality is still 
        //less than 50 then increment by 1
        if (item.name == BACKSTAGE_PASSES && item.sellIn < BACKSTAGE_PASSES_ACCELORATOR_1 && item.quality < MAX_QUALITY) {
          item.quality ++
          //and then check if the sellIn is less than 6 and
        //quality is still less them 50 then increment by 1 again
        if (item.name == BACKSTAGE_PASSES && item.sellIn < BACKSTAGE_PASSES_ACCELORATOR_2 && item.quality < MAX_QUALITY) {
          item.quality ++;
        }
        }
      }
      //deals with decrementing days which is equal for all items apart from SULFURAS
      if (item.name != SULFURAS) {
        item.sellIn --;
      }
      //Decrements quality again for items that have expired, or are conjured, and makes sure that these items are not one of the special items
      if (item.sellIn < MIN_QUALITY || item.name == CONJURED && item.name != BRIE && item.name != BACKSTAGE_PASSES && item.name != SULFURAS)  {
        item.quality --;
              } 
      //reduces the quality of BACKSTAGE_PASSES to 0 as soon as they expire
      if(item.name == BACKSTAGE_PASSES && item.sellIn === BACKSTAGE_PASS_EXPIRED) {
        item.quality = MIN_QUALITY
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
