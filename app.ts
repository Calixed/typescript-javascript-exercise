// "n1: number" -> similar in java as; (int n1) giving a datatype in parameter
// "string","number" -> type assignments are special keywords
const add = (n1: number, n2: number, printResult: boolean, phrase: string) => {
    console.log(phrase + n1 + n2);
    return printResult ? n1+n2 : "nothing here 👀";
}

// this is how to initialize a variable
const number1 = '5';
const number2 = 2.8;
const printResult = false; // returns "nothing here 👀"
const myMsg = "Hi! ✌ ";

// if you ever need to initialized it later, just type the datatype
let myName:string;
// typescript also checks if we are using the variabels correctly
// myName = 2; -> error message it should assigned as a string not a number value

myName = "john doe";

// basically adding "+" is casting it as number
const result = add(+number1, number2, printResult, myMsg);
console.log(result)

// for now, when changes happen in this file.
// $ tsc <filename>.ts -> this will compile it to generate or update the js file with the same name

// note: this is here because variable declared
// somewhere typings for the `Dom` library, so the global type definition clashes with the local
// variable declaration.

export {} // marks the file as external module. a module is a file that contains at least 1 import statement.
/*
 The error "Cannot redeclare block-scoped variable" occurs when we
 redeclare a variable in the same block or when TypeScript uses global
 typings, which interfere with local variable names. To solve the error,
 only declare a variable once in a block and use ES modules.
*/
