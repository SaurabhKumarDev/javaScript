// Array
let myArr = ["Hello", "Hii"];

// Object
let myObj = {
    marvel: "Avenger",
    character: "Iron Man",

    // Now we are creating method
    printStage: function() {
        console.log(`Character name : ${this.character}`);
    }
}

// Creating an function within the array
Array.prototype.arrayFn = function() {
    console.log("I am in array function");
}

// creating an method within the object
Object.prototype.tryToCreateObjectWithinObj = function() {
    console.log('I am in the global object');
}

// Creating an function within the Object
Object.prototype.newObj = function () {
    console.log('I am in Object');
}

// Trying to access the array-Function in Object        [Declined]
// myObj.arrayFn()
// Trying to access the array-function within the Global Object     [Declined]
// Object.arrayFn()
// Trying to access the array-function within the array     [Granted]
myArr.arrayFn()
// Trying to access the Object-function within the Global Object     [Granted]
Object.tryToCreateObjectWithinObj()
// Trying to access the Object-function within the Created Object    [Granted]
myObj.newObj()
// Trying to access the Object-function within the variable(string)  [Granted]
str.newObj()
// Trying to access the Array-Function within the variable(string)  [Granted]
// str.arrayFn()
// Global Object accessed anywhere within the the program
newObj();






// Globally element are anywhere

/*
Creation of Prototype

1. In main Object
    Object.prototype.function-name = function() {}
2. In function
    function-name.prototype.new-function-name = function() {}
3. Inside any created object
    Object.prototype.function-name = function() {}
*/