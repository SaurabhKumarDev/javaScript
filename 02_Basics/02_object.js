// Object

// Object can take the different dataType value
// Creation
let myObj2 = new Object();
let myObj3 = Object(60);                    // Argument work like dataType value if use single
let myObj = new Object("saurabh");          // whenever argument passed, after sometime you gone add many value within the object than argument is nothing for you
myObj = {
    name: "saurabh",
    age: 19,
    isLoggedIn: false,
    newArr: ["saurabh", "kumar"],
    "space num":"ertyuiop"
}
console.log(myObj);

// Access object content
console.log(myObj.name);
console.log(myObj['space num']);

// it will show you argument passed and some change's after sometime too
// because it doesn't have maximum changes
// as you can see
myObj3.email = "Saurabh"
console.log(myObj3);

// Creating the extra variable and function within object 
myObj.marks = 51.4;
myObj.func = function() {
    console.log("I am in function");
}

// Print object
console.log(myObj)

// typeof object value
console.log(typeof myObj['age']);


// For calling any function within the object, also in the variable 
// You have to use the below lOC for calling it
console.log(myObj.func());

// Now we have to access the object variable within the function using `this` keyword
myObj.text = function() {
    console.log(`My name is ${this.name}`);
}

// Whenever this call stop to take value an object
// freeze keyword
Object.freeze(myObj);
myObj.email = "saurabh@gmail.com"
console.log(myObj)

// Don't store message in a variable like colnsole.log because it will overflow
// Use simple function for storing the message

// complicate the object
let complicate = {
    regularUser: {
        // message: console.log("I am in regularUser"),
        name: "Rahul",
        normalUser: {
            Detail: {
                name: "Saurabh",
                lastName: "Kumar"
            }
        }
    }
}

// access 
console.log(complicate.regularUser.name);

// created two object for some operation
const myObj4 = {
    1:5,
    2:10
}
const myObj5 = {
    3:15,
    4:20
}

// if you don't want to modify only see together, so use curly braces at begining
console.log(Object.assign({}, myObj4, myObj5));
console.log(myObj4);
console.log(myObj5);

// myObj4 = myObj4 + myObj5
console.log(Object.assign(myObj4, myObj5));                 // assign(target, source)
console.log(myObj4);
console.log(myObj5);

// Array with object
let myarr = [
    {
        index:0,
        name:"saurabh"
    },
    {
        index:1,
        name:"saurav"
    },
    "index:2"
]

// Access
console.log(myarr[1].name);

// array index 0 object is converted into the seperated data's or new array
let temp = Object.entries(myarr[0]);
console.log(temp[0]);

// You are able to create the new object which embed the already created array
let embed = Object.create(myObj);
// Originally below is stored in embed
embed.newElement = "Hello Sir";
console.log(embed);

//new Object with new Practice
const newObject = {
    property: 39
}

// Seal
Object.seal(newObject);
newObject.property = 23;
delete newObject.property;                          // You can not able to delete the seal value
console.log(newObject.property);
console.log(Object.isSealed(newObject));            // Checking it is sealed or not

// When we use the database we need to see the keys(colum_name) and the values of the key
console.log(Object.keys(myObj3));
console.log(Object.values(myObj));