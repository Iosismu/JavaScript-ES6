// 삼항 연산자

function getResult(score) {
  return score > 5 ? 'good' : 'bad';
}
console.log(getResult(3));

// Nullish coalescing operator
function printMessage_1(text) {
  const message = text ?? 'Nothing to display';
  console.log(message);
}

printMessage_1('Hello'); // Hello
printMessage_1(undefined); // Nothing to display
printMessage_1(null); // Nothing to display

// Default parameter is only for undefined
function printMessage_2(text = "Nothing to display") {
  console.log(text);
}

printMessage_2('Hello'); // Hello
printMessage_2(undefined); // Nothing to display
printMessage_2(null); // Null

