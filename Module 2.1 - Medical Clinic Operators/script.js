const firstName = "Jose Miguel";
const lastName = "Lim";
const birthYear = 1992;
let currentYear = new Date().getFullYear();

const msg = `Hello, ${firstName} ${lastName}! How can we help you today?`;
console.log(msg);

// console.log(currentYear);
let age = currentYear - birthYear;
console.log(`Patient's age: ${age}`);
