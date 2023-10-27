// OBJECT LITERALS
const objLiteral = {
    userName : 'saurabh',
    loginCount : 8,
    SignedIn: true,

    // this : current context
    fn : function() {
        console.log(this.userName);
    }
}

// Global Context
const userName = 'saurabh';
const loginCount = 8;
const SignedIn= true;

// CONSTRUCTOR FUNCTION
// always providing the new instance in constructor function

// Some variable for understanding the constructor
const promise = new Promise((resolve,reject)=>{});
const date = new Date();
function User(userName, loginCount, isLoggedIn) {

    // this.userName is just like a new variable and it will added with Object
    this.userName = userName;
    return this;
}

// storing the function result within variable
const userOne = User('Saurabh',8,true);
const userTwo = User('Tony',9,false);

// return userName : Tony which is last used, because of the OVerriding
// if return the this.userName : Saurabh , correct answer shown to you
console.log(userOne);           

// to resolve the previous one problem we have to use the 'new' keyword

const userFour = new User('Puneet', 10, true);
const userFive = new User('Ayush', 11, true);
const userSix = new User('Suraj',12,true);

// What is constructor property 
// it is an reference of itself
console.log(userFour.constructor);  // [Function: User] means constructor
console.log(userFour);

// Global 
this.name = 'Saurabh';
console.log(this);

// instanceof 
// The instanceof operator tests to see if the prototype property of a constructor appears anywhere in the prototype chain of an object. The return value is a boolean value. 

function car(model, rate, type) {
    this.model = model;
    this.rate = rate;
    this.type = type;
}

// carOne type is object
const carOne = new car('XUV 700', 2500000, 'Electric');
// carTwo is not treated as constructor for treating like constructor use the new keyword
const carTwo = car('Honda', 100000, 'petrol');

// return type boolean
// Syntax : object instanceof constructor
// Parameters
// object - The object to test.
// constructor - Constructor to test against.
console.log(carTwo instanceof car);