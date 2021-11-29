"use strict";
// Hello World Message with TypeScript----------------------------
let message = 'Hello world';
message += ' again';
console.log(message);
// Primitive Types------------------------------------------------
let isPresent = false;
let magic = 66.6;
let hello = 'world';
let notDefined = undefined;
let notPresent = null;
let penta = Symbol('star');
//Instance Types---------------------------------------------------
let rerexp = new RegExp('ab+c');
let array = [1, 2, 3];
let set = new Set([1, 2, 3]);
// Arrays and Tuples-----------------------------------------------
// Array Type Shortcut
let numberArray = [1, 2, 3];
// Or
let numberArray1 = [1, 2, 3];
// Usage assigning number to the array 
numberArray = [1]; //OK
numberArray = [1, 2, 3, 4, 5]; //OK
//numberArray = ['Hello']; !!Error occurred, not able to be assigned to a number (As string)
// Tuple
let tuple = [0, 0];
// Usage
tuple = [1, 2]; // Ok
tuple = [2, 8]; //Ok
//tuple = [5]; !!Error occurred, as not two member of Array are assigned
//tuple = [5, 6, 7]; !!Error occurred, as not two member of Array are assigned
//tuple = ['string', 3]; !!Error occurred, as not two able to assign to a number (As string)
//Object Types and Type Aliases-----------------------------------------------
let center = {
    x: 0,
    y: 0,
};
let unit = {
    x: 0,
    y: 0,
};
const point = { x: 0, y: 0 };
// point = { x: 1, y: 2 }; !!Error as it is a Const Variable
// All other behaviours are the same as 'let'
point.x = 123;
point.y = 456;
