/* ---------------------------------------- Important ---------------------------------------- */

// 3 More Loop exist in js
// forin is used for the index/key
// 2.) for-in => Array, String, Object 

// Array are iterable
let myArr = [1, 2, 3, 40, 5, 6, 7, 8];

// Object are not iterable that's why not run in forof loop
let myObj = { 
    firstName: "Saurabh",
    lastName: "Kumar",
    City: "Delhi",
    Phone: 72176765
}

// String
const str = "How are you";

// map
const map = new Map();
map.set('firstName', "Saurabh");
map.set('lastName', "Kumar");
map.set('email', "saurabh@com");

// Array => forin give index
for (const index in myArr) {
    console.log(index);
}

// Array => Element[index]
for (const index in myArr) {
    console.log(myArr[index]);
}

// Object => index has keys
for (const index in myObj) {
    console.log(index);
}

// Object => values
for (const index in myObj) {
    console.log(myObj[index]);
}

// String => index
for (const index in str) {
    console.log(index);
    console.log(str.charAt(index));
}

// map => map are not itertable
for (const key in map) {
    console.log(key);
}
