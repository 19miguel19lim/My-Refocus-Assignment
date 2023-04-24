const shop = {
  shopName: "Zara",
  addree: "Manhattan Avenue, New York",
  code: "NY656",
};

const userInformation = [
  {
    name: "Angeline",
    surname: "Jolie",
    age: 47,
    birthday: "4.06.1975",
  },
];

const clothingItem = [
  {
    name: "Blue jeans",
    category: "Trousers",
    price: 50,
    stock: 456,
  },
  {
    name: "Polo-shirt",
    category: "Shirt",
    price: 20,
    stock: 94,
  },
  {
    name: "Sandals",
    category: "footWear",
    price: 80,
    stock: 5,
  },
];

let loggedUsers = [];
let logIn = false;
let cart = [(items = []), (total = 0)];

const addUser = function (newName, newSurname, newAge, newBirthday) {
  userInformation.push({
    name: newName,
    surname: newSurname,
    age: newAge,
    birthday: newBirthday,
  });
};
addUser("Miguel", "Lim", 31, "04.27.1992");
addUser("Mikko", "Lim", 31, "04.27.1992");
// console.log(userInformation);

const itemStock = function (item) {
  clothingItem.forEach(function (e) {
    if (e.stock < 100) {
      let restock = e.stock + 100;
      return console.log(`${e.name} has been restocked. Total: ${restock}`);
    }
  });
};

const failedLogIn = function () {
  return console.log("Sorry, you are not logged in");
};

const checkIfLoggedIn = function (name) {
  userInformation.forEach((e) => {
    loggedUsers.push(e.name);
  });
  if (loggedUsers.includes(name)) {
    logIn = true;
  } else {
    failedLogIn();
  }
};

const addToCart = function (item) {
  if (logIn) {
    clothingItem.forEach(function (e) {
      if (e.name === item && e.stock > 0) {
        cart[0].push(item);
        cart[1] += e.price;
        e.stock--;
      } else {
        return "Item out of stock";
      }
    });
  } else {
    failedLogIn();
  }
};

const removeFromCart = function (item) {
  if (logIn) {
    let findingItem = cart[0].indexOf(item);
    if (findingItem > -1) {
      cart[0].splice(findingItem, 1);
    }
    clothingItem.forEach(function (e) {
      if (e.name === item) {
        cart[1] -= e.price;
      }
    });
  } else {
    failedLogIn();
  }
};

let frequency = [];
const checkOut = function () {
  if (logIn) {
    cart[0].forEach((e) => {
      if (e in frequency) {
        frequency[e]++;
      } else {
        frequency[e] = 1;
      }
    });
    console.log("Here are your items:");
    console.log(frequency);
    console.log(`Your grand total is: $${cart[1]}`);
  } else {
    failedLogIn();
  }
};

checkIfLoggedIn("Miguel");
addToCart("Sandals");
addToCart("Sandals");
addToCart("Sandals");
addToCart("Blue jeans");
addToCart("Blue jeans");
addToCart("Blue jeans");
addToCart("Blue jeans");
addToCart("Blue jeans");
addToCart("Blue jeans");
addToCart("Blue jeans");
addToCart("Blue jeans");
addToCart("Blue jeans");
addToCart("Blue jeans");
addToCart("Blue jeans");
addToCart("Blue jeans");
addToCart("Blue jeans");
addToCart("Blue jeans");
addToCart("Blue jeans");
addToCart("Blue jeans");
removeFromCart("Blue jeans");
removeFromCart("Blue jeans");
removeFromCart("Blue jeans");
removeFromCart("Blue jeans");
removeFromCart("Blue jeans");

checkOut();
