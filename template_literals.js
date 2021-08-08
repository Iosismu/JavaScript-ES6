// Template Literals (Template String)

const person = {
  name: 'Julia',
  score: 4,
}

// Good Code
console.log(`Hello ${person.name}, Your current score is: ${person.score}`);

// Good Code
const {name, score} = person;
console.log(`Hello ${name}, Your current score is: ${score}`);

// Good Code
// 함수로 정의 해 두는것이 확장성 유지보수성에 조금 더 효과적이다.
function greetings(person) {
  const { name, score } = person;
  console.log(`Hello ${name}, Your current score is: ${score}`);
}