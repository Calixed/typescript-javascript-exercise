// Scenario: it is tiring to type 'number | string' everytime you have a new parameter
// solution: you can create an custom type alias

type Combinable = number | string; // kinda same as c++ using it as alias
// you can also used for literal types or any types at all
type ConversionDescriptor = 'as-number' | 'as-text'; // to avoid typos
const combine = (
    input1: Combinable,
    input2: Combinable,
    resultConversion: ConversionDescriptor // adding union type for only this two values
    // any other type will not be allowed
    ) => {

    // Note: adding an or in the if statement to enforced to return as a number
    // resultConversion -> has literalt types 'as-number' or 'as-text' this will be enforced in typescritp
    // will throw an error
    if(typeof input1 === 'number' && typeof input2 == 'number' || resultConversion ==='as-number'){
        return +input1 + +input2; // adding '+' in the variables
    }
    return input1.toString() + input1.toString();

    // Note: This is one way of using literal types
    // if(resultConversion === 'as-text'){
    //     return input1.toString() + input1.toString();
    // } else{
    //     return input1 + input2;
    // }

}

// literal types -> ivoking how the return value should be returned of type
// basically force the type to be converted into text or number
const result = combine(30, 20, 'as-number');
console.log(result);


const literalResult = combine('20', '20', 'as-number');
console.log(literalResult);


const combinedResult = combine('Max', 'Anna', 'as-text');
console.log(combinedResult);
