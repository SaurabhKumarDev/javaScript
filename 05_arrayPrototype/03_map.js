//-------------- Two time map or filter keyword used -----------------//
// like : map().map()

// Array
const myArr = [1,2,3,4,5,6,7,8,9];

// here it is
const newArr = myArr.map( (num) => num+10 )
    .map( (num) => num*2 )
    .filter( (num) => (num>10) );

console.log(newArr);
