// when typescript deals with object. instead of {key: value} pair
// its {key: type} pair
/*
const person = {
    name: string;
    age: number;
}
*/

const person= {
    name: 'Maximilian',
    age: 30
};
// typescirpt immediately tells you that nickname property does not exist
//console.log(person.nickname);
console.log(person.name)

// when you add a generic in an object
// we don't give out information about our object;
// its only goal is care that it is an object
const person1: object = {
    name: 'Maximilian',
    age: 30
};

// we just have a object person1 and doesn't give information about the object
// it doesnt type of property in person 1
//console.log(person1.name); -> error
console.log(person1)


// therefore, we should be specific;
// we do this by adding {}, we essentially tell that type by typing inside of the curly braces
// {key,type} -> this is understand object types
const person2: { // this is typescript representation of an object types that helps type what we are looking at
    name: string,
    age:number
} = {
    name: 'Maximilian',
    age: 30
};

console.log(person2.name)

// better syntax later
export {}
