// Scope of variable

// Here all variable are global
let a = 1;
const b = 2;


if (true) {
    // Same variable init outter or inner block
    // work differently

    let a = 4;
    console.log(a);             // Local variable
    
    // without init you can access the variable inside the block
    console.log(b);                 // Global variable accessed inside block
    
    var c = 6;
    let d = 7;
    const e = 8;
}

console.log(a);         // Global variable 
console.log(b);         // Global variable
console.log(c);         // "Var" is a Global Variable that's why preferred not to use this type of variable for declaring, anywhere you can declare change everyplace
// console.log(d);            // Inner block can't be accessed
// console.log(e);            // Inner block can't be accessed