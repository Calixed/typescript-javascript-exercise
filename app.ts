// enums declaration-> custom-type
enum Role {
    ADMIN, READ_ONLY, AUTHOR
};

// you can add a default behaivor
// you can also assign values but not restricted to mix different types
// to all identifiers
// NOTE: by default; incrementing at numbers starting at zero
enum Popularity {
    LOW = 10, MID = 20, HIGH = 'Hot'
};
// basically there value is 0,1,2
// NOTE: Enums with all-uppercase values but that's not a "must-do"
const person = {
    name: 'John',
    age: 30,
    hobbies: ['coding', 'cooking'],
    role: Role.ADMIN,
    Popularity: Popularity.MID
};

if(person.role == Role.AUTHOR){
    console.log("This person is an author")
}

// run this command to observe
// tsc app.ts -> observe the compiled code and you can see how it is declared in js
export {}
