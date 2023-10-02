/*--------------------------------- Array ---------------------------------*/
// Enables storing a collection of multiple items under a single variable name.

// JavaScript arrays are resizable and can contain a mix of different data types
// JavaScript arrays are not associative arrays.
// JavaScript arrays are zero-indexed

// Create
let newArr = [1,2,3,4,5,6];
let arrObject = new Array(3,4,5,6,2);
let stringArr = ["Saurabh","Hitesh"];
let simpleArr = Array(3,5,6);

// Iterator
let iterator1 = newArr[Symbol.iterator]();
for (let value of iterator1) {
    console.log(value);
}

// Search
console.log(newArr.at(4));                              // Argument => index number
console.log(arrObject.includes(12));                    // Argument => Present or Not
console.log(arrObject.find(2));
console.log(newArr.findIndex(1));

// Concate two array
console.log(newArr.concat(arrObject));                  // Addied two Arrays

// push at end
arrObject.push(8);                                      // Data addied in array at end index
console.log(newArr.push(arrObject))                     // [ 1, 2, [ 3, 4, 5, 6, 2 ] ]  Push array
console.log(newArr[2][2])                               // Work like 2d array

// pop at end
arrObject.pop();                                        // Data removed last index

// unShift at begining
arrObject.unshift(4);                                   // Data added at begining

// shift at begining
arrObject.shift()                                       // Data removed from begining

// length
console.log(arrObject.length);                          // Length of the array

// slice 
console.log(newArr.slice(1,3));                         // it will not change original data in array (beg,end-1) <= index

// splice 
console.log(newArr.splice(2,4));                        // it will change data in the array (beg,end+1) <= index

// in String
console.log(typeof newArr.toLocaleString());            
console.log(newArr.join());                             
console.log(newArr.toString())

// Check array
console.log(Array.isArray("Saurabh"))                   // Array or not

// String to array in char
console.log(Array.from("Saurabh"))

// Flat remove 2d array from 1d array 
console.log(Array.of(newArr.flat()),'\n\n')

console.log(arrObject)

// Entries
const iterator2 = arrObject.entries();                     // USing this call value 1 by 1
console.log(iterator2.next().value);                       // index 0, value 3
console.log(iterator2.next());                             // value, done

// Fill
console.log(arrObject.fill(2));                            // Complete arreay value set as 2
console.log(arrObject.fill(0, 2,3));                       // value 0, begining index 2, ending index 3
console.log(arrObject.fill(3, 2));                         // value 3, begin index 2

// filter
const word = ["hii", "hello", "anu", "Saurabh"];
console.log(word.filter((word) => word.length > 6));       // Find the word which length is greater then 6

// find
const numberFind = [5,12,8,130,44];
console.log(numberFind.find((numberFind) => numberFind > 10));  // Find first greater than 10 value

// Find the index of the value
console.log(numberFind.findIndex((numberFind) => numberFind>3))     // Finding the index of the greater than 3 value

// join the array vlaue
console.log(word.join(''))

// Reverse the array
console.log(word.reverse())

// sort with first char of String
console.log(numberFind.sort());