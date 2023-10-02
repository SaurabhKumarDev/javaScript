// Function intermediate

// ...obj => Spred/Rest

// ...variable_name :: 
// ...arr  :: it convert value into array

// passing array as an argument 
function tryArray(...arr) {                         // ...arr => allow to pass as an array, arr => not allowed
    return arr;
}
console.log(tryArray(100,200,300));                 // passing many value as an argument, but it will accept only single value
console.log(tryArray([100,200,300]));

const obj = {
    name: "saurabh",
    roll:39
}
// passing object as an argumentt to the function
function tryobj(myobj) {
    return myobj;
}
console.log(tryobj(obj));
console.log(tryobj({
    name:"saurabh",
    roll:4
}))

const arr1 = [3,5,8,1];
// passing array as an arguments to the function
function arr(myarray) {
    return myarray;
}
console.log(arr(arr1));
console.log(arr([
    2,4,5,6,"Saurabh"
]))