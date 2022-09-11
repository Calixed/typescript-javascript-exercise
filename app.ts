const person = {
    name: 'John',
    age: 30,
    hobbies: ['coding', 'cooking']
};

// you can also explicit add types in an array

let pets: string[]
pets = ['pug']; // mixed types in an array doesn't support by typescript

// if you want to use any types for your elements use": any[]"
let faveThings: any[]; // flexibility but dumps all typescript benefit
faveThings = ['John',23,'exercise']


console.log(person.name)

for(const hobby of person.hobbies){
    console.log(hobby.toLocaleUpperCase()); // typescript detects hobbies is string[]
    // therefore, typescript can give us methods to manipulate hobby since it knows its a string from
    // person.hobbies[]
}

