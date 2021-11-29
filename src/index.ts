// Hello World Message with TypeScript----------------------------

let message: string = 'Hello world';
message += ' again';
console.log(message);


// Primitive Types------------------------------------------------

let isPresent: boolean = false;
let magic: number = 66.6;
let hello: string = 'world';

let notDefined: undefined = undefined;
let notPresent: null = null;

let penta: symbol = Symbol('star');

//Instance Types---------------------------------------------------

let rerexp: RegExp = new RegExp('ab+c');
let array: Array<number> = [1, 2, 3];
let set: Set<number> = new Set([1, 2, 3])

// Arrays and Tuples-----------------------------------------------

// Array Type Shortcut
let numberArray: number[] = [1, 2, 3];
// Or
let numberArray1: Array<number> = [1, 2, 3];

// Usage assigning number to the array 
numberArray = [1]; //OK
numberArray = [1, 2, 3, 4, 5]; //OK
//numberArray = ['Hello']; !!Error occurred, not able to be assigned to a number (As string)

// Tuple
let tuple: [number, number] = [0, 0];

// Usage
tuple = [1, 2]; // Ok
tuple = [2, 8]; //Ok
//tuple = [5]; !!Error occurred, as not two member of Array are assigned
//tuple = [5, 6, 7]; !!Error occurred, as not two member of Array are assigned
//tuple = ['string', 3]; !!Error occurred, as not two able to assign to a number (As string)

//Object Types and Type Aliases-----------------------------------------------

let center: { x: number, y: number } = {
    x: 0,
    y: 0,
};

type Point = { x: number, y: number };

let unit: Point = {
    x: 0,
    y: 0,
};

// Const Declarations-----------------------------------------------------------

type Point1 = { x: number, y: number };

const point: Point1 = { x: 0, y: 0 };

// point = { x: 1, y: 2 }; !!Error as it is a Const Variable

// All other behaviours are the same as 'let'
point.x = 123;
point.y = 456;

// Functions--------------------------------------------------------------------

function add(a: number, b: number): number {
    return a + b;
}

function log(message: string): void {
    console.log('LOG:' + message);
}

//Multi parameter function with spread (all parameters needed)
function sum(...values: number[]) {
    return values.reduce((prev, curr) => {
        return prev + curr;
    });
}

sum(1,2);
sum(1,2,3);

//Now with alias type
type Add = (a: number, b: number) => number;

let adding: Add;

adding = function (a: number, b: number): number {
    return a + b;
};

adding = (a, b) => a + b;

// Structural Typing ------------------------------------------------------

type User = { id: string };
type Product = { id: string };

let user: User = { id: 'user-123' };
let product: Product = { id: 'product_123' };

user = product;
product = user;

// Extra info is accepted by TypeScript

type Point2D = { x: number, y: number };
type Point3D = { x: number, y: number, z: number };

let point2D: Point2D = { x: 2, y: 4 };
let point3D: Point3D = { x: 2, y: 6, z: 9 };

//Extra Info ok
point2D = point3D;
function takesPoint2D(point: Point2D) { /* ... */ }
takesPoint2D(point3D);

//Error missing info(z is missing)
point2D = point3D;
function takesPoint3D(point: Point3D) { /* ... */ }
//takesPoint3D(point2D); //Error

// Classes------------------------------------------------------------------

