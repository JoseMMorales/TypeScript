<h1 align="left">
  <img src="https://user-images.githubusercontent.com/43299285/145877106-9cf53fc3-3cf6-46c4-a19f-78407ed65be3.png" width="70">
  TypeScript CheatSheet Project.
</h1>

Single index.ts doc CheatSheet in which might be used for learning purposes or even guide route if at any point a doubt pops up in our mind when developing JS. We can run the whole project to appreciate outcome compiled in any section you are interested in. Just follow commands below as starting point to proceed with the setting up using NodeJs and NPM. Please be aware that there are to different setting ups reflected in this README, the first one is to run this CheatSheet with a couple of commands, and a second one to proceed with the setting up in case you want to create your own TypeScript Project. 

## Installing
### Requisites to run this project:
* [NodeJS ^12.14.1](https://nodejs.org/en/)
* NPM (Node Package Manager) If download Node JS from official site is downloaded simultaneously.
* TypeScript ^4.5.2 (Follow commands as following...).

## Run this project...
* git clone `https://github.com/JoseMMorales/TypeScript.git`
* `cd Typescript`
* `npm install`
* `npm start`

## Advising of how to start a Typescript project from Scratch..
* `npm init -y`
* `npm i typescript`
* Create src folder and index.ts file
* `npx tsc --init --rootdir src --outdir lib`
* `npx tsc --watch`

* Displaying in terminal outcome 

<img width="100%" alt="Watching TypeScript" src="https://user-images.githubusercontent.com/43299285/143830937-49ac4142-f887-4151-9c55-324fb10af613.PNG">

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
* Type Assertions
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
* Definite Assignment Assertion
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
