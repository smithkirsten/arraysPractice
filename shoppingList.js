var shoppingList = [["yogurt", 1], ["apples", 6], ["bacon", 1], ["bagels", 6], ["coffee", 1], ["cream", 1]]

console.log(shoppingList);

console.log("\n========\n");

function addCrucialItems(item1, item2) {

}

function addGeneralItems(get1, get2) {
  shoppingList.push(get1, get2);
  console.log(`${get1} and ${get2} added to shopping list! \n  Updated List: ${shoppingList}`)
}

function checkOff(item) {
  for (var i = 0, 1 < shoppingList.length; i++) {
    if (shoppingList[i] === item) {
      //remove item from list
      console.log(`${item} removed from shopping list. Updated list: ${shoppingList}`)
    }
  }


}
