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

console.log("Delivered items have been added to the inventory");
console.log("New inventory summary:");
console.log(processDeliveries(newDeliveries));
