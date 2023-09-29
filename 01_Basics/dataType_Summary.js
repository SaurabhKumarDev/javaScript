// Summary of Data Type

// Primitive Data Type

// String, Boolean, Number, null, undefined, Symbol, bigInt
const customerName = "Saurabh";
const package = null;
const bool = true;
const age = 19;

// Decimal Value
let marks = 51.4
console.log(typeof marks)

// Big Int : Assigning this at end add 'n'
const bigNumber = 3874239479374923874293847293n;
console.log(typeof bigNumber)

// undefined data Type
let userEmail;
userEmail = "saurabh@gamil.com"

// Symbol Data Type
const Id = Symbol("19")
const anotherId = Symbol("19")
console.log(Id == anotherId)


// References (Non-Premitive)

// Array, Object, Functions

// Array : Different-different data type allowed here within a array :: Object
let arr = ["Rahu", 6,"Gyan"]
console.log(arr[1])
console.log(typeof arr)

// Object
let myObj = {
    // Different-different dataType allowed :: type Object
    name: "Saurabh",
    age: 20,
    male:true
}

// Function
function myfunction() {
    console.log("Hii world")
}
myfunction()