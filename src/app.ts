// declaring a class
class Department{
    // this is how you declare a attribute
    //private name: string;

    // adding access modifiers
    private employees: string[] =[];

    // Adding a readonly modifier -> disable writing after initialization //,private readonly myKey: string
    constructor(private id: string, private name: string ){ // initializing a variable inside of the parameter in the constructor
        // this.id = id; // using short-hand; theres no need for this manual initialization
        // this.name = name;

    }

    // class method
    describe(this: Department){
        //console.log('Department: ' + this.name)
        // formatted way of printing
        console.log(`Department: ${this.name} ID: ${this.id}`)
    }

    addEmployee(employee:string){
        // this.myKey = 'asdasd'; -> error since its only readonly
        this.employees.push(employee);
    }

    printEmployee(){
        console.log(this.employees.length);
        console.log(this.employees);
    }
}

// multiple inheritance is not supported
// note: including its constructor is inherited by the parent class
class ITDepartment extends Department{
    // ITDepartment its own class
    // required to add super();
    constructor(id: string, name: string, private admin: string[]){
        super(id, name );
        this.admin = admin;
    }
}


class AdminDepartment extends Department{
    // ITDepartment its own class
    // required to add super();
    constructor(id: string, name: string, private admin: string[]){
        super(id, 'Admin' );
        this.admin = admin;
    }
    addReport(text: string){
        console.log(`Report of the week ${text}`);
    }
}

// creating an intance in the child class calling the super class
const it = new ITDepartment('d2', 'Tech department', ['john','doe']);

it.addEmployee('John');
it.addEmployee('Doe');

it.describe();
it.printEmployee()

// this is how you create an object
// superclass instance
const itPerson1 = new Department('d1','IT department');
itPerson1.describe();
itPerson1.addEmployee('Mike');


// another way of populating a attribute in a class
// since adding 'private' modifier in a attribute enforced you to proper way of accessing it
// accountLog.employees[2] = 'Mike';



// this another way* how you populate a class in ts/js
const accountCopy = {
    name: "Account Copy",
    describe: itPerson1.describe
};

// accountCopy.describe();
