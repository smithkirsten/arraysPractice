var shoppingList = [["yogurt", 1], ["apples", 6], ["bacon", 1], ["bagels", 6], ["coffee", 1], ["cream", 1]]

console.log(shoppingList);

console.log("\n========\n");



function addGeneralItems(get1, get2) {
  shoppingList.push(get1, get2);
  console.log(`${get1} and ${get2} added to shopping list! \n  Updated List: ${shoppingList}`);
}

addGeneralItems(["granola bars, 10"], ["chicken, 1"]);



function addCrucialItems(item1, item2) {
  shoppingList.unshift(item1, item2);
  console.log(`Oh no! You're out of ${item1} and ${item2}! Updates shopping list: ${shoppingList}`);
}

addCrucialItems(["toilet paper", 12], ["butter", 1]);



var shoppingList2 = ["apples", "pears", "bananas"]
console.log(shoppingList2);

// function checkOff(item) {
// }
var index = shoppingList2.indexOf("apples");
console.log(index);
if (index > -1) {
    console.log(shoppingList2.splice(index, 1));
}

  console.log(`Item removed from shopping list. Updated list: ${shoppingList2}`);


// checkOff("apples");
