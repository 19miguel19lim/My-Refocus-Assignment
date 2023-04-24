const discount = function (percentage, amount) {
  let discountedAmount = amount - amount * (percentage / 100);
  return discountedAmount;
};

const ageChecker = (age) => (age >= 10 ? true : false);

const calculate = function (customerGroup, discountFunc) {
  const groupCount = customerGroup.length;

  let subTotal = groupCount * 299;

  if (groupCount < 6) {
    return `Sorry, No Discount. Bill: ${subTotal}`;
  }

  !groupCount < 6;
  const allAged10AndAbove = customerGroup.every(ageChecker);

  let discount = 0;
  let grandTotal;

  if (allAged10AndAbove) {
    discount = 15;
    grandTotal = discountFunc(discount, subTotal);
  } else {
    discount = 10;
    grandTotal = discountFunc(discount, subTotal);
  }
  return `${discount}% discount. Bill: ${grandTotal}`;
};

const custumerGroup1 = [8, 12, 11, 11, 18, 24, 5, 10];
const custumerGroup2 = [10, 11, 11, 13, 19, 14];
const customerGroup3 = [12, 12, 14];

console.log(calculate(custumerGroup1, discount));
console.log(calculate(custumerGroup2, discount));
console.log(calculate(customerGroup3, discount));
