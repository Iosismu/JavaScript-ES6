const stack = [];

stack.push(1);
stack.push(2);
stack.push(3);

stack[stack.length - 1] // peek 3
stack.pop(); // 3
stack.pop(); // 2
stack.pop(); // 1

// LIFO( Last In, First Out)