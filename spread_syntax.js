// Spread Syntax - Ojbect
const item = { type: 'ty', size: 'M'};
const detail = { price: 20, made: 'Korea', gender: 'M'};

// Good Code
const shirt0 = Object.assign(item, detail);

// Good Code
const shirt = { ...item, ...detail, price: 40};

// Spread Syntax - Array
let fruits = ['apple', 'gul', 'banana'];

// fruite.push('딸기'); 뒤에 추가
fruits = [...fruits, '딸기'];

// fruite.unshift('포도'); 앞에 추가
fruits = ['포도',  ...fruits];

const fruits = ['mango', 'peach', 'pineapple'];
let combined = fruits.concat(fruits2);
combined = [...fruits, 'cherry',...fruits2];