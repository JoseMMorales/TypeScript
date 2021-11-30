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

class Animal {
    name; // Accessible everywhere
    //private name; // If private not accessible from instance or extention
    //protected name; //If protected just accessible from extension

    constructor(name: string) {
        this.name = name;
    }

    move(distanceInMeters: number): void {
        console.log(`${this.name} moved ${distanceInMeters}m.`);
    }
}

let cat = new Animal('Cat');
cat.move(10);
cat.name = 'Dog';

class Bird extends Animal {
   fly(distanceInMeters: number) {
       console.log(`${this.name} flew ${distanceInMeters}m.`);
   }
}

// Generics------------------------------------------------------

class Queue<T> {
    data: T[] = [];
    push(item: T) { this.data.push(item); }
    pop(): T | undefined { return this.data.shift(); }
}

const queue = new Queue<number>();
queue.push(123);
queue.push(456);

console.log(queue.pop()?.toPrecision(1));

// Special Types: any and unknown---------------------------------

let exampleAny: any;
let exampleUnknown: unknown;

//any 
exampleAny = 123;
exampleAny = 'Hello';

//unknown
exampleUnknown = 123;
exampleUnknown = 'Hello';

//any 
exampleAny.allows.anything.you.can.imagine();
let anyBoolean: boolean = exampleAny;

//Unknown 
//exampleUnknown.trim(); // Error not assignable as unknown
//let unknownSetBool: boolean = exampleUnknown; // Error not assignable as unknown

// Type Assetions------------------------------------------------------------------
const load = () => (console.log("Function to be called"))

let hi: any = load();

const trimmed = (hi as string).trim();

// Type Castings--------------------------------------------------------------

let leet;

//Later
leet = '1234';

//Use as number
const number = +leet; //Convert String to a number

console.log(number === 1234); // True
console.log(number); // '1337'

// Promise --------------------------------------------------------------------

const delay = (ms: number) => new Promise(res => setTimeout(res, ms));

const mainAsync = async () => {
    await delay(1000);
    console.log('1s');
    await delay(1000);
    console.log('2s');
    await delay(1000);
    console.log('3s');
};

mainAsync();

// Readonly Modifier --------------------------------------------------------------------

type Pointed = {
    readonly x: number,
    readonly y: number,
};

let pointing: Pointed = {
    x: 0,
    y: 0
};

//Variable assigment
pointing = { x: 1, y: 1 };

//Property assigment
//pointing.x = 1; //Error as it is readonly
//pointing.y = 1; //Error as it is readonly

//Property Read
console.log(`${pointing.x}, ${pointing.y}`);

// Now in a Class
class Animals {
    readonly name: string;
    constructor(name: string){
        this.name = name;
    }
}

const sheep = new Animals('sheep');
console.log(sheep.name); // It is just allow reading 
// sheep.name = 'Wolf' //Error as it is readonly

// Union Types-----------------------------------------------------------------

type Padding = 
    | number 
    | string;

/**
 * Takes a string and add `padding`to the left.
 * If `padding` is a number, then that number of spaces is added to the left.
 * If `padding` is a string, then `padding` is appended to the left.
 */

function formatCommandLine(input: string, padding: Padding) {
  
    if (typeof padding === 'number') {
        return Array(padding + 1).join(' ') + input;
    } 
    
    if (typeof input === 'string') {
        return padding + input;
    }
    throw new Error(`Expected number or string, got '${padding}'.'`)
}

console.log(formatCommandLine('Hello', 4)); // '     Hello'
console.log(formatCommandLine('Hello', ' ')); // '  Hello'
console.log(formatCommandLine('Hello', '---')); //'-----Hello'
//console.log(formatCommandLine('Hello', false)); //'Error'

// Literal Types----------------------------------------------------------------

type DiceValue = 1 | 2 | 3 | 4 | 5 | 6;

function rollDice() {
    return (Math.floor(Math.random() * 6) + 1) as DiceValue;
}

/* Error as 7 is not defined in type DiceValue
*   if (rollDice() === 7) {
*       throw new Error('Not possible!');
*   }
*/

// Discriminated Unions------------------------------------------------------------
type ValidationSuccess = {
    isValid: true,
    validatedValue: string,
}

type ValidationFailure = {
    isValid: false,
    errorValidation: string,
}

type ValidationResult = 
    | ValidationSuccess
    | ValidationFailure;

function logResult(result: ValidationResult) {
    if (result.isValid === true) {
        console.log('Success, validated value: ', result.validatedValue);
    }
    if (result.isValid === false) {
        console.log('Failure, error reason: ', result.errorValidation);
    }
}

// Null Vs Undefined----------------------------------------------------------------
function decoration(value: string | null | undefined) {
    //If condition avoid show TypeScript error when value is null | undefined
    if (value == null) {
        return value;
    }
    return `-- ${value.trim()} --`;
}

console.log(decoration('Hello')); //--Hello--
console.log(decoration('Hello World  ')); //--Hello World--

console.log(decoration(null)); //null
console.log(decoration(undefined)); //undefined

// Intersection Type----------------------------------------------------------------

type Section2D = {
    x: number,
    y: number,
};

type Section3D = Section2D  & {
    z: number,
};

// Another Example 

type Person = { name: string };

type Email = { email: string };

type Phone = { phone: string };

type ContactDetails = 
    & Person 
    & Email 
    & Phone;

function contact(details: ContactDetails) {
    console.log(`Dear ${details.name}
    Hope you have received my email sent to ${details.email}
    We will you call to ${details.phone}`);
}

//Calling the function passing parameters
contact({
    name: 'Jose',
    email: 'email@email.com',
    phone: '321654987'
})

// Optional Modifier-------------------------------------------------------

type Someone = {
    name: string,
    email: string,
    phone?: string,
}

const Bruce: Someone = {
    name: 'Bruce',
    email: 'bruce@gmail.com',
    phone: '123',
}

// Or---

const Alfred: Someone = {
    name: 'Bruce',
    email: 'bruce@gmail.com',
    phone: undefined, // Given by default
}

// Non-null Assertion Operator --------------------------------------------

type Poin = {
    x: number,
    y: number,
};

/*
    let poin: Poin;
    function initialize() {
        poin = { x: 1, y: 9 };
    }
*/

//initialize();

//Wee need to add ! mark as it point values are null initially
//console.log('After initialized', poin!.x, poin!.y);

// Solution---------------
// initialize functions is already invoked before to print with console.log
// avoiding ! mark when calling x and y

function initialize(): Point {
    return { x: 1, y: 9 };
}

const poin = initialize();

//Wee need to add ! mark as it point values are null initially
console.log('After initialized', poin.x, poin.y);

// Interfaces --------------------------------------------------------------------

type Pon2D = {
    x: number,
    y: number,
};

//Intersection type 
type Pon3D = Pon2D & {
    z: number,
};

export const poi: Pon3D = {
    x: 0,
    y: 0,
    z: 0,
};

// Interface of types above ----

interface Poni2D {
    x: number,
    y: number,
};

//Intersection type 
interface Poni3D extends Poni2D {
    z: number,
};

export const poini: Poni3D = {
    x: 0,
    y: 0,
    z: 0,
};

// Never Type -----------------------------------------------------------

// Assign a value to a never variable will return an Error
//let never: never = 123;

// Example ---
type Square = {
    kind: 'square',
    size: number,
};

type Rectangle = {
    kind: 'rectangle',
    height: number,
    width: number,
};

type Circle = {
    kind: 'circle',
    radius: number,
};

type Shape = 
    | Square
    | Rectangle
    | Circle;

function area(s: Shape) {
    if (s.kind === 'square') {
        return s.size * s.size;
    } else if (s.kind === 'rectangle') {
        return s.width * s.height;
    } else if (s.kind === 'circle') {
        return Math.PI * (s.radius ** 2);
    }
    const _ensureAllCaseAreHandled: never = s;
    return _ensureAllCaseAreHandled;
}

// Implements keyword -----------------------------------------------------

type Animalss = {
    name: string,
    voice(): string,
};

function logi(animal: Animalss) {
    console.log(`Animal ${animal.name}: ${animal.voice()}`);
};

class Cat implements Animalss {
    constructor(public name: string) {}
    voice() { return 'meow'; };
}

class Dog implements Animalss {
    constructor(public name: string) {}
    voice() { return 'wow'; };
}

logi(new Cat('Salem'));
logi(new Dog('Lassie'));

// Definite Assigment Assertion --------------------------------------------

// ! mark is used to tell TypeScript that dice is undefined 
let dice!: number;
function rolDice() {
    dice = (Math.floor(Math.random() * 6) + 1);
}
rolDice();

// We will find an Error without adding ! mark 
// Error: "dice" is used before being assigned 
console.log('Current Dice Value', dice);
console.log('Current Dice Value', dice);

// Now in a Class------

// ! mark and adding at the end of the variable undefined is the same meaning
class Buah {
    x: number | undefined;
    y: number | undefined;
    constructor() {
        this.moveRandom();
    }
    moveRandom() {
        this.x = Math.random();
        this.y = Math.random();
    }
}

