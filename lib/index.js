"use strict";
// Hello World Message with TypeScript
let message = 'Hello world';
message += ' again';
console.log(message);
// Primitive Types
let isPresent = false;
let magic = 66.6;
let hello = 'world';
let notDefined = undefined;
let notPresent = null;
let penta = Symbol('star');
//Instance Types
let rerexp = new RegExp('ab+c');
let array = [1, 2, 3];
let set = new Set([1, 2, 3]);
// A first in first out collection Class
class Queue {
    constructor() {
        this.data = [];
    }
    push(item) { this.data.push(item); }
    pop() { return this.data.shift(); }
}
let queue = new Queue();
