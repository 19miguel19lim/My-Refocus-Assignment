const firstName = "Jose Miguel";
const lastName = "Lim";
const birthYear = 1992;
let currentYear = new Date().getFullYear();
let birthMonth = 3;
const currentMonth = new Date().getMonth() - 1;

// Get patients age
let age = currentYear - birthYear;
console.log(`Patient's age: ${age}`);

let actualAge = birthMonth <= currentMonth ? age + 1 : age - 1;
console.log(`Patients's Accurate Age: ${actualAge}`);
