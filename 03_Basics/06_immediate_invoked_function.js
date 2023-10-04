/* ----------------------- Immediately invoked function expression ----------------------- */

/*
* Basic Syntax
* ()()
* It has two paranthesis
first for function defination
second for function execution
*/

(function myfunction() {
    let var1 = "Saurabh";
    let var2 = "Kumar";
    console.log(`${var1} ${var2}`);
    console.log(this);
})()

// ()()