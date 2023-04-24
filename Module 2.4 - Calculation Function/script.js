let obj = {
  num1: 100,
  num2: 50,
  sum: 150,
  difference: 50,
  product: 500,
  quotient: 20,
};

// Task 2: Print Object Data
// const printDate = function (obj) {
//   console.log(obj);
//   for (objects in obj) {
//     console.log(`${objects}: ${obj[objects]}`);
//   }
// };
// printDate(obj);

const showDate = function (obj) {
  console.log(`First Number: ${obj.num1}`);
  console.log(`Second Number: ${obj.num2}`);
  console.log(`The sum is: ${obj.sum}`);
  console.log(`The difference is: ${obj.difference}`);
  console.log(`The product is: ${obj.product}`);
  console.log(`The quotient is: ${obj.quotient}`);
};

// Task 3: Create Functions for Calculations
// Additions
const add = function (num1, num2) {
  return (total = num1 + num2);
};

// Subtraction
const difference = function (num1, num2) {
  return (total = num1 - num2);
};

// Multiply
const multiply = function (num1, num2) {
  return (total = num1 * num2);
};

// Division
const division = function (num1, num2) {
  return (total = num1 / num2);
};

// Task 4: Update the Object Date
const newSetOfNumbers = function (num1, num2) {
  console.log(`First Number: ${num1}`);
  console.log(`Second Number: ${num2}`);
  console.log(`The sum is: ${add(num1, num2)}`);
  console.log(`The difference is: ${difference(num1, num2)}`);
  console.log(`The product is: ${multiply(num1, num2)}`);
  console.log(`The quotient is: ${division(num1, num2)}`);
};

// Task 5: Call the Functions
console.log(`================`);
showDate(obj);
console.log(`================`);
newSetOfNumbers(200, 10);
console.log(`================`);
newSetOfNumbers(500, 20);
