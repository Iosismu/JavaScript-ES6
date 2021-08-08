// Looping

const items = [1,2,3,4,5,6];

function getAllEvents(items) {
  return items.filter((num) => num % 2 === 0);
}

function multiplyByFour(items) {
  return items.map((num) => num * 4);
}

function sumArray(items) {
  items.reduce((a, b) => a + b, 0);
}

// Good Code
const result = items
  .filter((num) => num % 2 === 0)
  .map((num) => num * 4)
  .reduce((a, b) => a + b, 0);
console.log(result)