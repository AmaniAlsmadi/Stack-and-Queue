'use strict';

const LinkedList = require('./LinkedList');

class Stack {
    constructor() {
        this.storage = new LinkedList();
        this.top = null;
    }

    pushValue(value) {
        this.storage.push(value);
        this.top = value;

    }

    popValue() {
        if (this.storage.size() !== 0) {
            let poppedValue = this.storage.pop();
            this.top = this.storage(this.storage.length - 1); //to get the previos element
            return poppedValue;
        } else {
            return null;
        }
    }

    peek() {
        return this.top;
    }

    isEmpty() {
        if (this.top == null) {
            return true
        } else {
            return false
        }
    }
}

module.exports = Stack;