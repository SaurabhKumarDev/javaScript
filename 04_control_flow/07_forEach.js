/* ------------------------------------ For Each Loop ----------------------------------------- */

// Array
let myArr = [5, 3, 7, 1, 9];

// Map
let map = new Map();
map.set('firstName', "Saurabh");
map.set('lastName', "Kumar");
map.set('email', "saurabh@com");

// For-each loop have some prbuild method
// for accessing array index use the function
myArr.forEach( function myfn(index) {
    console.log(index);
})

// 'for-Each' have some prebuild method like array length

// External function is used to access the index within forEach method with function name
function myfn(index) {
    console.log(index);
}
myArr.forEach(myfn);

// Arrow function
myArr.forEach( (indes) => { console.log(indes); })

// Map in forEach   values
map.forEach( function myfunction(index) {
    console.log(index);
});
