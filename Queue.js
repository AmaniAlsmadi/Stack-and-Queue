'use strict';

const LinkedList = require('./LinkedList');

class Queue {
  constructor() {
    this.storage = new LinkedList();
  }

  enqueue(value) {
    this.storage.push(value);
  }

  dequeue() {
    let deletedNode = this.storage.deleteFirstNode();
    return deletedNode.value;
  }

  peek() {
    return this.storage.firstNode();
}

  isEmpty() {
    if (this.top == null) {
        return true
    } else {
        return false
    }
}
}

module.exports = Queue;