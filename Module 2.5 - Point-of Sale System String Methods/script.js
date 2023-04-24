// Task 1
const storeInventory = [
  {
    item: `shampoo`,
    quantity: 1,
    price: 3,
  },
  {
    item: `soap`,
    quantity: 0,
    price: 2,
  },
  {
    item: `toothpaste`,
    quantity: 2,
    price: 3,
  },
];

// Task 2: Define the Delivered items array
const newDeliveries = [
  {
    item: `shampoo`,
    quantity: 5,
    price: 4,
    inventoryIndex: 0,
  },
  {
    item: `soap`,
    quantity: 10,
    price: 2,
    inventoryIndex: 1,
  },
  {
    item: `toothpaste`,
    quantity: 10,
    price: 3,
    inventoryIndex: 2,
  },
];

// Task 3: Create a function to process each devlivery item

const processDeliveries = function () {
  for (items of newDeliveries) {
    storeInventory[items.inventoryIndex].quantity += items.quantity;
    storeInventory[items.inventoryIndex].price = items.price;
  }
  return storeInventory;
};

let newInventory = processDeliveries(storeInventory);
// console.log(newInventory);

const productSummary = function () {
  let summary = [];
  for (items of newInventory) {
    const itemID = items.item.slice(0, 3).toLowerCase();

    let remark = items.quantity >= 10 ? "Good" : "item stock is low";
    let =
      message = `itemID: ${itemID} | ${items.item} | stock left: ${items.quantity} | Remarks: ${remark}`;
    summary.push(message);
  }
  return summary;
};

console.log(productSummary());
