# TypeScript CheatSheet Project. 

Single index.ts doc CheatSheet in which might be used for learning purposes or even guide route if at any point a doubt pop up in our mind when developing JS. We can run the whole project to appreciate outcome compiled in any section you are are interested in. Just follow commands below as starting point setting up TypeScript as first step using NodeJs and NPM. Please be aware that there are to different setting ups reflected, first one to run this cheatSheet and following a second setting up in case you want to create your own TypeScript Project. 

## Installing
### Requisites to run this project:
* [NodeJS ^12.14.1](https://nodejs.org/en/)
* NPM (Node Package Manager) If download Node JS from official site is downloaded simultaneously.
* TypeScript ^4.5.2 (Follow commands as following...).

## Run this project...
* `npm install`
* `npm start`
* 

## Advising of how to start a Typescript project from Scratch..
* `npm init -y`
* `npm i typescript`
* Create src folder and index.ts file
* `npx tsc --init --rootdir src --outdir lib`
* `npx tsc --watch`

* Displaying in terminal outcome 

<img width="298" alt="Watching TypeScript" src="https://user-images.githubusercontent.com/43299285/143830937-49ac4142-f887-4151-9c55-324fb10af613.PNG">

* Enter in new terminal `node lib/index.js` to see outcome of TS file when compiling.


# CheatSheet sections at index.ts...
## Beginners...
* Simple Hello world message with TypeScript.
* Primitive Types
* Instance Types
* Arrays and Tuples
* Object Types and Type Aliases
* Const Declarations
* Functions
* Structural Typing
* Classes
* Generics
* Special Types: any and unknown
* Type Assetions
* Type Castings
* Promise

## Intermediate...
* Readonly Modifier
* Union Types
* Literal Types
* Discriminated Unions
* Null Vs Undefined
* Intersection Type
* Optional Modifier
* Non-null Assertion Operator
* Interfaces
* Never Type
## Advance...
* Implements keyword
* Definite Assigment Assertion
* User Defined Type Guards
* Assertion functions
* Function Overloading
* Call Signatures
* Abstract Classes
* Index Signatures
* Readonly Arrays and Tuples
* Double Assertion
* Const Assertion
* This Parameter
* Generic Constrains
## Expert...
* Typeof Type Operator
* LookUp Types
* Keyof type operator
* Conditional Types
* Conditional Types with Union
* Infer keyword and `ReturnType<T>`
* Mapped Types
* Mapped type modifiers
* `Partial<T>`
* `Required<T>`
* `Readonly<T>`

## Author
Jose MMorales