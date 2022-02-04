

class Item {
  constructor(name, sellIn, quality){
    this.name = name;
    this.sellIn = sellIn;
    this.quality = quality;
  }
    
  isQualityValid() {
    if(this.quality > 0 && this.quality < 50) {
      return true;
  } 
}
}

class NormalItem extends Item {
  
    dailyQualityUpdater() {
    this.sellIn --
    if(this.isQualityValid()) {
      if (this.sellIn < 0) this.quality -=2
      if (this.sellIn >= 0) this.quality --
    }    
  }
}

class Cheese extends Item {
  
    dailyQualityUpdater() {
    this.sellIn --
    if(this.isQualityValid()){
      if (this.sellIn >= 0) this.quality ++
      if (this.sellIn < 0) this.quality = this.quality +2
    }
  } 
}

class Sulfuras extends Item {
  
    dailyQualityUpdater() {
    return 
  }
}

class BackStage extends Item {
  
    dailyQualityUpdater() {
    this.sellIn --
    if(this.isQualityValid()) {
      if(this.sellIn >= 11) this.quality ++ 
      if (this.sellIn <= 10 && this.sellIn >= 6) this.quality +=2
      if (this.sellIn <= 5) this.quality +=3
    }
    if (this.sellIn <= 0) this.quality = 0
}
}

class Conjured extends Item {
  
    dailyQualityUpdater() {
    this.sellIn --
    if(this.isQualityValid()) {
      if (this.sellIn >= 0 && this.quality >= 2) this.quality -=2
      if (this.sellIn < 0 && this.quality >= 4) this.quality -=4
    }
  } 
}

class Shop {
  constructor(items=[]){
    this.items = items;
  }

  updateQuality() {
    this.items.forEach(item => item.dailyQualityUpdater()); return this.items
  }
}

module.exports = {
  Item,
  Shop,
  NormalItem,
  Cheese,
  Sulfuras, 
  BackStage,
  Conjured
}
