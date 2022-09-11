const person: {
    name: string;
    age: number;
    hobbies: string[];
    role: [number, string]; // this how you declare tuple
} = {
    name: 'John',
    age: 30,
    hobbies: ['coding', 'cooking'],
    role: [2, 'author']  // typescript undestands -> this should an array with two values (number && author)
};

// typescript doesn't know that that this is a tuple
// person.role.push('admin'); // why can we push? push is allowed in tuple
// person.role[1] = 10;

// person.role = [0, 'admin', 'user']; -> this is not allowed since tuple can only take two elements
person.role = [1, 'john']; // fixed length is enforced by  typescript

// scenario, if you need exact amount in an array;
// and you know the type of each value
// use tuple -> to be strict on what you are working with.



// you can also explicit add types in an array
let pets: string[]
pets = ['pug']; // mixed types in an array doesn't support by typescript

// if you want to use any types for your elements use": any[]"
let faveThings: any[]; // flexibility but dumps all typescript benefit
faveThings = ['John',23,'exercise']


console.log(person.name)

for(const hobby of person.hobbies){
    console.log(hobby.toLocaleUpperCase()); // typescript detects hobbies is string[]
    // therefore, typescript can give us methods to manipulate hobby since its igi
}

export {}
