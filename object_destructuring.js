// Object Destructuring

const person = {
  name: 'Julia',
  age: 20,
  phone: '01077777777',
}

// Good code
function displayPerson(person) {
  const {name, age} = person;
  console(name);
  console(age);
}