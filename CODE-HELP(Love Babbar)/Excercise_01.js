// URL : https://codehelp.notion.site/JavaScript-Exercise-1-46c96a7c8fb24c48837baeb83c760ce9 //

/****** Exercise 1 ******/

// Question 01
// Write a function that takes two numbers as arguments and returns their sum.
// Arrow function
const sumOfTwoNum = (num1, num2) => (num1+num2);
console.log("Sum :",sumOfTwoNum(2,5));

// Question 02
// Write a function that takes a string as an argument and returns its length.
function strLen(str) {
    return str.length;
}
console.log("Length : ",strLen("Hello, I am saurabh"));

// Question 03
// Write a program that takes two numbers and displays their sum, difference, product, and quotient.
function question3(num1, num2) {
    console.log(`Sum : ${num1+num2}`);
    console.log(`Sub : ${num1-num2}`);
    console.log(`Product : ${num1*num2}`);
    console.log(`Quotient : ${num1%num2}`);
}
question3(5,2);

// Question 04
// Write a function that takes two numbers as arguments and returns the larger number.
const larger = function largerFunction(num1, num2) {
    if (num1 > num2) 
        return num1;
    else if (num1 < num2)
        return num2;
    else 
        return num1;
}
console.log("Greater : ",larger(5,5));

// Question 05
// Write a program that displays a string in reverse order.
const str = "Saurabh";
let rev = "";
for (const key in str) {
    let index = str.length-key-1;
    rev = rev + str[index];
}
console.log("Reverse : ",rev);

// Question 06
// Write a program that takes a number and checks whether it is positive, negative, or zero.
const number = 23;
if (number > 0) {
    console.log("Positive : ", number);
} else if (number == 0) {
    console.log("Zero : ", number);
} else {
    console.log("Negative : ",number);
}

// Question 07
// Write a program that takes a number and prints the multiplication table for that number.
const table = 2;
for (let num = 1; num <= 10; num++) {
    console.log(`${table} * ${num} = ${table*num}`);
}

// Question 08
// Write a program that takes a number and calculates the sum of all numbers from 1 to that number.
const count = 10;
let num = 0, res = 0;
while (num <= count) {
    res = res + num;
    num++;
}
console.log("Sum : ",res);

// Question 09
// Write a program that takes a string and prints out the number of vowels in the string.
const vowels = ['a','e','i','o','u'];
const checkThis = "Saurabh";
let counter = 0;
for (let i of vowels) {
    for (const j of checkThis) {
        if (i == j) {
            counter++;
            break;
        }
    }
}
console.log("Vowel : ",counter);

// Question 10
// Write a function that takes two arrays of integers as arguments and returns an array of the common elements in both arrays, without any duplicates. 
// The returned array should be sorted in ascending order.
const arr1 = [5, 3, 3, 1, 5, 6];
const arr2 = [3, 4, 5, 6, 1, 8];

let result = new Array();
let index = 0;

if (arr1.length > arr2.length) {
    for (let i=0; i<arr2.length; i++) {
        for (let j=0; j<arr1.length; j++) {
            let bool = result.includes(arr1[j]);
            if (arr2[i] == arr1[j] && bool == false) {
                result[index] = arr2[i];
                index++;
            }
        }
    }
} else {
    for (let i=0; i<arr1.length; i++) {
        for (let j=0; j<arr2.length; j++) {
            let bool = result.includes(arr2[j]);
            if (arr2[j] == arr1[i] && bool == false) {
                result[index] = arr1[i];
                index++;
            }
        }
    }
}
result.sort();

// Print Array
console.log("Union : ");
for (const iterator of result) {
    console.log(iterator);
}
