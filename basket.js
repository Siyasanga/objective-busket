"use strict";
function Basket() {
  this.purchasedItems = [{brand:"Nike",price:500},{brand:"reebok",price:250}];
  this.numOfItems = this.purchasedItems.length;
  // Counting the total price for purchased items
  this.totPrice = function() {
    let totPrice = 0;
    this.purchasedItems.forEach(function(currentItem) {
      totPrice += currentItem.price;
    });
    console.log("Total Price: "+totPrice);
    return totPrice;
  };
  // Adding a new item into the basket
  this.add2basket = function(item) {
      this.purchasedItems.push(item);
      this.totPrice += item.totPrice;
      this.numOfItems++;
      // this.totPrice();
  }
}
var newBasket = new Basket();
console.log(newBasket.totPrice);
newBasket.add2basket({brand:"Nike", price:500});
console.log(newBasket.purchasedItems);
