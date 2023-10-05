/* ---------------------------------------- Important ---------------------------------------- */

// 3 More Loop exist in js
// 1.) for-of => Need iterable content

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

// Array => forof Loop 
for (const iterator of myArr) {
    console.log(iterator);
}

// String => forof Loop
for (const iterable of str) {
    console.log(iterable);
}

// Map => forof loop
// Show entries
for (const iterator of map) {
   console.log(iterator);
}

// Map => keys and values by using the array destructuring
for (const [keys, vlaues] of map) {
    console.log(`${keys} :- ${vlaues}`);
}