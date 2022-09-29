'use strict';
const Stack = require('./stack');
const newStack = new Stack();

const Queue = require('./Queue');
const newQueue = new Queue();

newStack.pushValue(1);
newStack.pushValue(2);
newStack.pushValue(3);
newStack.pushValue(4);
newStack.pushValue(5);


console.log(newStack);
console.log(newStack.peek());

newStack.popValue();

console.log(newStack.peek());

newQueue.enqueue(1);
newQueue.enqueue(2);
newQueue.enqueue(3);
newQueue.enqueue(4);
newQueue.enqueue(5);

console.log(newQueue);
console.log(newQueue.peek());

newQueue.dequeue();

console.log(newQueue.peek());

