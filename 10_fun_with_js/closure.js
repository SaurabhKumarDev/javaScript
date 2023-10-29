// Closure & Lexical Scoping

function accessInternalVar () {
    let name = "Saurabh";
    function inner () {
        console.log(name);
    }
    inner();
}
// Undefined 
// console.log(name); 
accessInternalVar();


function outer () {
    let a = 5;
    function innerOne () {
        a = 2;
        console.log("Inner one : ",a);
        function innerTwo () {
            a = 3;
            console.log("Inner two : ",a);
            function innerThree () {
                var b = 1;
                console.log("Inner three : ",a);
            }
            innerThree();
        }
        innerTwo();
    }
    console.log("Outer : ",a);
    innerOne();
}
outer();
// Execution :
// Outer, InnerOne, InnerTwo, InnerThree
// function, innerFunction, innerInnerFunction


// Lexical Scoping
// init() creates a local variable called name and a function called displayName(). 
// The displayName() function is an inner function that is defined inside init() and is available only within the body of the init() function. 
// Note that the displayName() function has no local variables of its own. However, since inner functions have access to the variables of outer functions, displayName() can access the variable name declared in the parent function, init().

function init() {
    var name = "Mozilla"; 
    function displayName() {
        console.log(name); 
    }
    displayName();
}
init();