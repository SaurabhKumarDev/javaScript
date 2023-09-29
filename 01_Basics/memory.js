// Memory in java Script
// Stack and Heap memory are avaiable in javaScript

// Stack = Primitive Data Type / Call by value / copy the original data
// Heap = Non-Primitive data Type / Call by reference / Means work on orignal data

// Example : Stack Memory
let email = "sk0008861@gmail.com"
let professionalEmail = email;
professionalEmail = "saurabhkumarmehto@gmail.com"
console.log(professionalEmail)
console.log(email)

// Example : Heap Memory
let myObj = {
    myName: "Saurabh",
    myAge: 25
}
let anotherObj = myObj;
anotherObj.myAge = 19;

console.log(anotherObj.myAge)
console.log(myObj.myAge)