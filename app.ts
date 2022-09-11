// we explicit enforced to return a number
const add = (n1: number, n2: number):number => {
    return n1 + n2;
}
// we can have <undefined> as a type
const printResult = (num: number): void => {
    // what is the return here?
    console.log('Result: '+ num); //returns a void -> returns a undefined, once ts is compiled and run
}

// basically, we are passing the return value of add() method in printResult() method
printResult(add(5,5));
