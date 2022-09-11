// ---------------------------------------------------------//
// whats the difference between any and unknown?
// any -> disbale type checking
// unknown -> could be any type but has type checking
let userInput: unknown; // we can also use union number | string if we know what we are dealing with
let userName: string;

userInput = 5;
userInput = 'Max'; // this is just a case in this line

// we cannot re-assigned userInput to userName even though we used it to assigned 'max'
userName = userInput;

// we can check this unknown type if this variable is a string type
if (typeof userInput === 'string'){ // when working on unknonw type; we have to check first we are working with string
    userName = userInput; // unknown -> is the best choice over `any`
}

// Never type -> used for utility
// never -> functions can return
const generateError = (message: string, code: number): never => {
    throw {
        message: message,
        errorCode: code
    };
    // while (true) {}
  }

generateError('An error occurred!', 500);
// if we did not use `never`, we never show the actual result or never return anything
// we also cant store it without using :never because it will not be detailed on the error
