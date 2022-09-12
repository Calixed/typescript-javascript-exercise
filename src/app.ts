// declaring a class
class Department{
    // this is how you declare a attribute
    //private name: string;

    // adding access modifiers
    private employees: string[] =[];

    // constructor using a this keyword to refer the local variable
    // using short hands for initialzing
    constructor(private id: string, private name: string){ // initializing a variable inside of the parameter in the constructor
        this.id = id;
        this.name = name;
    }

    // class method
    describe(this: Department){
        //console.log('Department: ' + this.name)
        // formatted way of printing
        console.log(`Department: ${this.name} ID: ${this.id}`)
    }

    addEmployee(employee:string){
        this.employees.push(employee);
    }

    printEmployee(){
        console.log(this.employees.length);
        console.log(this.employees);
    }
}

// this is how you create an object
const accountLog = new Department('d1','IT department');

accountLog.addEmployee('John');
accountLog.addEmployee('Doe');

// another way of populating a attribute in a class
// since adding 'private' modifier in a attribute enforced you to proper way of accessing it
// accountLog.employees[2] = 'Mike';


accountLog.describe();

// this another way* how you populate a class in ts/js
const accountCopy = {
    name: "Account Copy",
    describe: accountLog.describe
};

// accountCopy.describe();
