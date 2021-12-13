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

// User Defined Type Guards---------------------------------------------------

type Squared = {
    size: number,
};
type Rectangles = {
    width: number,
    height: number,
};
type Shaped = Squared | Rectangles;

// Making an individual guard to each type make a boolean  
// outcome in areas function

function isSquared(shape: Shaped): shape is Squared {
    return 'size' in shape;
};

function isRectanguled(shape: Shaped): shape is Rectangles {
    return 'width' in shape;
}

function areas(shape: Shaped) {
    if (isSquared(shape)) {
        return shape.size * shape.size;
    } else if (isRectanguled(shape)) {
        return shape.width * shape.height;
    }
    const _ensure: never = shape;
    return _ensure;
}

// Assertion functions----------------------------------------------------

type PersonBlond = {
    name: string,
    dateOfBirth?: Date,
};

function assert(condition: unknown, message: string): asserts condition {
    if (!condition) throw new Error(message);
}

function assertDate(value: unknown): asserts value is Date {
    if(value instanceof Date) return;
    else throw new TypeError('value i snot a Date');
}

const maybePerson = loadPerson();

assert(maybePerson != null, 'Could not load person');
console.log('Name:', maybePerson.name);

assertDate(maybePerson.dateOfBirth);
console.log('Date Of Birth:', maybePerson.dateOfBirth.toISOString());

function loadPerson(): any { }

// Function Overloading-------------------------------------------------------
function reverse(string: string): string;
function reverse(stringArray: string[]): string[];
function reverse(stringOrStringArray: string | string[]): string | string[] {
    if (typeof stringOrStringArray == 'string') {
        return stringOrStringArray.split('').reverse().join('');        
    } else {
        return stringOrStringArray.splice(0).reverse();
    }
}

const hellos = reverse('hello'); // 'olleh'
console.log(hellos);

const h_e_l_l_o = reverse(['h', 'e', 'l', 'l', 'o']); //['o', 'l', 'l', 'e', 'h']
console.log(h_e_l_l_o);

// Call Signatures---------------------------------------------------------------

//One way of declaring the type of the function

type Adde = (a: number, b: number) => number;

//Another way using signatures on the body block

//Type Alias
 type Adde1 = {
    (a: number, b: number): number
 };

 //Interface Alias
 interface Adde2 {
    (a: number, b: number): number,
    (a: number, b: number, c: number): number, // Overloading with new member in the interface
    debugName?: string,
 };

const adde: Adde = (a: number, b: number) => {
    return a + b;
};
add.debbugName = 'Addition Function';

// Abstract Classes--------------------------------------------------------------------

abstract class Command {
    abstract commandLine(): string;

    execute() {
        console.log('Executing:', this.commandLine());        
    }
}

class GitResetCommand extends Command {
    commandLine() {
        return 'git reset --hard';
    }
}

class GitFetchCommand extends Command {
    commandLine() {
        return 'git fetch --all';
    }
}

new GitResetCommand().execute();
new GitFetchCommand().execute();

//new Command(); //Cannot create an instance of an abstract class.

// Index Signatures------------------------------------------------

type Persony = {
    displayName: string,
    email: string,
};

type PersonDicctionary = {
    [username: string]: Persony;
};

const persons: PersonDicctionary = {
    jane: { displayName: 'Jane Done', email: 'jane@gmail.com' }
};

persons['john'] = { displayName: 'John Done', email: 'john@gmail.com' };

console.log(persons['john']);

delete persons['john'];

const result = persons['missing'];
console.log(result, result.email);  // Undefined, Error

persons['john'] = { displayName: 'John Done', email: 'john@gmail.com' };

// Readonly Arrays and Tuples-----------------------------------------------

type Pointend = readonly [number, number];

function move(point: Pointend, x: number, y: number) {
    return [point[0] + x, point[1] + y];
}

const po: Pointend = [0, 0];
const moved = move(po, 10, 10);

console.log(moved); // [10, 10]
console.log(po); // [0, 0]

// Double Assertion---------------------------------------------------------

type Code2d = { x: number, y: number };
type Code3d = { x: number, y: number, z: number};
type Persoins = { name: string, email: string }; 

let ponity2d: Code2d = { x: 3, y: 2 };
let pointy3d: Code3d = { x: 2, y: 5, z: 9};
let persoinit: Persoins = { name: 'John Done', email: 'john@gmail.com' };

ponity2d = pointy3d //True
//pointy3d = ponity2d //Error is missing z
pointy3d = ponity2d as Code3d; // True as adopting second variable properties

//persoinit = pointy3d; //Error not same properties
//pointy3d = persoinit; //Error not same properties
//pointy3d = persoinit as Code3d //Error not trusting enough 
pointy3d = persoinit as unknown as Code3d // Ok: I doubly trust you

// Const Assertion---------------------------------------------------------

const king = 'Elvis';
//king = 'John'; //Error not assignable as it is constant
const upperCased = king.toUpperCase(); // king === 'elvis

const dave = {
    name: 'dave',
    role: 'drummer',
    skills: ['drumming', 'headbanging'],
} as const;

/*
dave = {           //Error not assignable as it is constant
    name: 'grohl',
    role: 'singer',
    skills: ['singing', 'drumming', 'headbanging'],
};

dave.name = 'grohl'; // Error is readonly
dave.role = 'singer'; // Error is readonly
dave.skills.unshift('singing'); // Error is readonly
*/

// This Parameter----------------------------------------------------------

function double(this: { value: number }) {
    this.value = this.value * 2;
}

const valid = {
    value: 10,
    double,
}

valid.double();

console.log(valid.double); // 20

const invalid = {
    value: 10,
    double,
};

invalid.double();

// Generic Constrains--------------------------------------------------------

type NameFields = { firstName: string, lastName: string };

function addFullName<T extends NameFields>(obj: T): T & { fullName: string } {
    return {
        ...obj,
        fullName: `${obj.firstName} ${obj.lastName}`,
    }
};

const john = addFullName({
    email:  'john@gmail.com',
    firstName: 'John',
    lastName: 'Doe',
});

console.log(john.email); // john@gmail.com
console.log(john.fullName); // John Doe

const jane = addFullName({ firstName: 'Jane', lastName: 'Smith' });

// Typeof Type Operator--------------------------------------------------------

const centerr = {
    x: 0,
    y: 0,
    z: 0,
};

//Later
const unite: typeof centerr = {
    x: centerr.x + 1,
    y: centerr.y + 1,
    z: centerr.z + 1,
}

// Another Example......

const PersonRespone = {
    "name": "John",
    "email": "john@gmail.com",
    "firstName": "john",
    "lastName": "Doe",
};

type PersonResponse = typeof PersonRespone;

function processResponse(person: PersonResponse) {
    console.log('Full name:', `${person.firstName} ${person.lastName}`);    
}

// LookUp Types ----------------------------------------------------------------

export type biggestObject = {
    consent: {
        understandingInformation: boolean,
    },
    payment: {
        creditCertification: boolean,
        credit: {
            name: string,
            address: string,
        }[],
    },
    gender: string,
    dob: string,
    driver: {
        licenseNumber: string,
        expiryDate?: string,
    }
}

//UI
type PaymentRequest = biggestObject['payment'];

export function getLicenseNumber(): biggestObject['driver']  {
    return {
        licenseNumber: '12345thh',
        expiryDate: undefined
    }
};

export function getPayment(): PaymentRequest {
    return {
        creditCertification: true,
        credit: [],
    }
}

// keyof type operator-----------------------------------------------------

type Peron = {
    name: string,
    age: number,
    location: string,
};

const johnny: Peron = {
    name: 'John',
    age: 76,
    location: 'Malaga',
};

function logGet<Obj, Key extends keyof Obj>(obj: Obj, key: Key) {
    const value = obj[key];
    console.log('Getting:', key, value);
    return value;
}

const age = logGet(johnny, 'age'); // 76

function logSet<Obj, Key extends keyof Obj>(obj: Obj, key: Key, value: Obj[Key]) {
    console.log('Setting:', key, value);
    obj[key] = value;
}

logSet(johnny, 'age', 36);

// Conditiona Types-----------------------------------------------------

type IsNumber<T> =
T extends number 
? 'number'
: 'other';

type WithNumber = IsNumber<number>;
type WithNoNumber = IsNumber<string>;

// Another Example------------------------------------------------------
const isNumber = (value: unknown) => {
    typeof value === 'number'
    ? 'number'
    : 'other';
}

const withNumber = isNumber(23);
const isNotNumber = isNumber('string');

// Another Example------------------------------------------------------

export type TypeName<T> = 
T extends string ? 'string' :
T extends number ? 'number' :
T extends boolean ? 'boolean' :
T extends undefined ? 'undefined' :
T extends symbol ? 'symbol' :
T extends bigint ? 'bigint' :
T extends Function ? 'Function' : 
T extends null ? 'null' :
'object';

function typeName<T>(t: T): TypeName<T> {
    if (t === null) return 'null' as TypeName<T>;
    return typeof t as TypeName<T>; 
}

const strN = typeName('hello world');
const num = typeName(123);
const bool = typeName(true);
const undef = typeName(undefined);
const sym = typeName(Symbol('star'));
const big = typeName(24n);
const fun = typeName(function () {});
const obj = typeName(null);

console.log(typeof null);

// Conditional Types with Union-----------------------------------------------------

function error(message: string): never {
    throw new Error(message);
}

//const notAllowed: never = 'some string';
const allowed: never = error('this is ok');
const example: string = error('it will not return');

type Verbose = string | never;
type Concise = string;

/**
 * Exclude null and undefined from T
 */
export type NoEmpty<T> = T extends null | undefined ? never : T;

type Example = NoEmpty<string | null>;
type Expanded0 = NoEmpty<string> | NoEmpty<null>;
type Expanded1 = (string extends null | undefined ? never : string)
                    | (null extends null | undefined ? never : string);
type Expanded2 = string | never;
type Result = string;

// Infer keyword and `ReturnType<T>` -------------------------------------------------

type isArray<T> =
    T extends Array<any>
    ? 'array'
    : 'other';

type WithArray = isArray<string[]>;
type WithNoArray = isArray<number>;

type UnboxArray<T> = 
 T extends Array<infer Member>
 ? Member 
 : T;

 type UnboxedStringArray = UnboxArray<string[]>;
 type UnboxedNumberArray = UnboxArray<number[]>;
 type AnythingElse = UnboxArray<string>;

 // Antoher Real Example ------------------------------------------------------------------

 export function createPerson (firstName: string, lastName: string) {
     return {
         firstName,
         lastName,
         fullName: `${firstName} ${lastName}`
     };
 }

 function logPerson(person: ReturnType<typeof createPerson>) {
     console.log(
         'Person:',
         person.firstName,
         person.lastName,
         person.fullName
     );
 }

 // Mapped Types -------------------------------------------------

export type Pointy = {
    x: number,
    y: number,
    z: number,
};

// Readonly will fail ------------------------------------------------------------

type ReadOnlyPoint = {
    readonly [Item in 'x' | 'y' | 'z']: number;
};

const centering : ReadOnlyPoint = {
    x: 0,
    y: 0,
    z: 0,
};

//centering.x = 100; // Should Error as it is readonly type

// Readonly is sorted out ------------------------------------------------------------

// Not needed to add as it is part of the compiler .....
type ReadOnlyP<T> = {
    readonly [Item in keyof T]: T[Item];
};

const centered : ReadOnlyP<Pointy> = {
    x: 0,
    y: 0,
    z: 0,
};

// Mapped type modifiers -------------------------------------------------
class State<T> {
    constructor(public current: T) {}
    update(next: Partial<T>) {
        this.current = { ...this.current, ...next };
    }
}

const state = new State({ x: 0, y: 0 });
state.update({ y: 123 });
console.log(state.current);

