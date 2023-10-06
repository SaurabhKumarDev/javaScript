/*-------------------------- Array Reduce -----------------------------*/

// It is usefull to calculate the sum of array value

// Create Array
const newArr = [1,2,3,4,5];

// .reduce = have some built in a parameter
// 1) accumulator   :   default value '1'
// 2) currentValue

// CALL BACK FUNCTION
// BELOW :- (accumulator, currentValue) => (accumulator)
console.log( newArr.reduce( (accumulator, currentValue) => (accumulator) ) );
// Expected output : 1

console.log( newArr.reduce( (accumulator, currentValue) => (currentValue) ) );
// Expected output : 5

// You are able to change the accumulator value via initializing
accumulator = 0;
console.log( newArr.reduce( (accumulator, currentValue) => (accumulator), accumulator) );
// Expected output : 0

// Find the sum of array value
// accumulator = 0
// accumulator = accumulator + currentValue
console.log(newArr.reduce( (accumulator, currentValue) => (accumulator+currentValue), 1));
// Background : 0+1=1+2=3+3=6+4=10+5=15

// return accumulator : verify statement 27
const temp = newArr.reduce((accumulator, currentValue) => {
    console.log(`${accumulator} = ${currentValue}`);
    accumulator+currentValue;
});
console.log(temp);
