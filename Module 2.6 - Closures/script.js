const counter = function () {
  let count = 1;

  const add = (count) => count + 1;

  return console.log(`original count: ${count}, new count : ${add(count)}`);
};
console.log(counter());
