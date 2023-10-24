class Stack {
  constructor() {
    this.items = [];
  }

  // Push an element onto the stack
  push(element) {
    this.items.push(element);
  }

  // Pop the top element from the stack
  pop() {
    if (!this.isEmpty()) {
      return this.items.pop();
    }
    return "Stack is empty";
  }

  // Peek at the top element without removing it
  peek() {
    if (!this.isEmpty()) {
      return this.items[this.items.length - 1];
    }
    return "Stack is empty";
  }

  // Check if the stack is empty
  isEmpty() {
    return this.items.length === 0;
  }

  // Get the size of the stack
  size() {
    return this.items.length;
  }

  // Print the stack elements
  print() {
    console.log(this.items);
  }
}

// Example usage:
const stack = new Stack();

stack.push(1);
stack.push(2);
stack.push(3);

stack.print(); // [1, 2, 3]

console.log("Top element:", stack.peek()); // 3

console.log("Popped:", stack.pop()); // 3

stack.print(); // [1, 2]

console.log("Is the stack empty?", stack.isEmpty()); // false

console.log("Stack size:", stack.size()); // 2
