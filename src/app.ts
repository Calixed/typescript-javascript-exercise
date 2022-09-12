// declaring a class
class Department{
    // this is how you declare a attribute
    public name: string;

    // adding access modifiers
    private employees: string[] =[];

    // constructor using a this keyword to refer the local variable
    constructor(fname: string){
        this.name = fname;
    }

    // class method
    describe(this: Department){
        console.log('Department: ' + this.name)
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
const accountLog = new Department('IT department');

accountLog.addEmployee('John');
accountLog.addEmployee('Doe');

// another way of populating a attribute in a class
// since adding 'private' modifier in a attribute enforced you to proper way of accessing it
// accountLog.employees[2] = 'Mike';


accountLog.describe();

// this how you populate a class in ts/js
const accountCopy = {
    name: "Account Copy",
    describe: accountLog.describe
};
accountCopy.describe();
