let costumer = {
  costumerName: `Johnny Manggo`,
  points: 12300,
  cart: [
    {
      item: `Shampoo`,
      quantity: 2,
      price: 3,
    },
    {
      item: `Soap`,
      quantity: 2,
      price: 2,
    },
    {
      item: `Toothpaste`,
      quantity: 1,
      price: 3,
    },
  ],
};

console.log(`Hi, ${costumer.costumerName}! We are happy to see you today.`);
console.log(`As of today, you have accumulated ${costumer.points} points.`);

let totalBill = 0;
let totalPoints = costumer.points;

console.log(`Purchased Items:`);
for (items of costumer.cart) {
  // console.log(items);
  let total = items.quantity * items.price;
  console.log(`${items.quantity}x ${items.item} ---- $${total}`);
  totalBill += total;
  totalPoints += items.quantity;
}
console.log(`Total Bill: $${totalBill}`);
console.log(`New Current Points: ${totalPoints}`);
