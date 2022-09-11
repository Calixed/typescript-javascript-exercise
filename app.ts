// we explicit enforced to return a number
const add = (n1: number, n2: number):number => {
    return n1 + n2;
}
// we can have <undefined> as a type
const printResult = (num: number): void => {
    // what is the return here?
    console.log('Result: '+ num); //returns a void -> returns a undefined, once ts is compiled and run
}

// declared a variable as a function
// let combineValues: Function;

// specify how the parameter should be by the TYPES
// combineValues() -> expect two arguements in the invokement
let combineValues: (a: number, b:number) => number; // similar to Overloading I THINK? => return a number

combineValues = add;
combineValues = printResult; // returns a undefined -> since we did note state how the function should look like
//combineValues = 5;


console.log(combineValues(4,5));
// basically, we are passing the return value of add() method in printResult() method
printResult(add(5,5));
