// let say you want to be flexible with the inputs
//and you want to return string or a number
const combine = (input1: number | string, input2: number | string) => {
    // adding a runtime check but sometimes not needed
    if(typeof input1 === 'number' && typeof input2 == 'number'){
        return input1 + input2;
    }
    return input1.toString() + input1.toString(); // typescript only sees its a union type and doesnt analyzed
}


const result = combine(30, 20);
console.log(result);

const combinedResult = combine('Max', 'Anna'); // this would fail since only number is declared in the parameter
// fix: adding <type | type> in the parameter to take care of it

console.log(combinedResult);
