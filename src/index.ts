// Hello World Message with TypeScript

let message: string = 'Hello world';
message += ' again';
console.log(message);


// Primitive Types

let isPresent: boolean = false;
let magic: number = 66.6;
let hello: string = 'world';

let notDefined: undefined = undefined;
let notPresent: null = null;

let penta: symbol = Symbol('star');

//Instance Types

let rerexp: RegExp = new RegExp('ab+c');

let array: Array<number> = [1, 2, 3];

let set: Set<number> = new Set([1, 2, 3])

// A first in first out collection Class
class Queue<T> {
    private data: Array<T> = [];
    push(item: T) { this.data.push(item) }
    pop(): T | undefined { return this.data.shift() }
}

let queue: Queue<number> = new Queue();