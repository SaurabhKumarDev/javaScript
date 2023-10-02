// Function

// Create function
function name() {
    console.log('S');
    console.log('a');
    console.log('u');
    console.log('r');
    console.log('a');
    console.log('b');
    console.log('h');
}

// Call function
name();

// Creation Simple function with parameter
function addTwoNum(number1, number2, number3) {
    return number1 + number2 + number3;
}

// Call function
// console.log(`Sum : ${addTwoNum(9,2,3)}`);
// Arguments Passed to the function
// 2,null = 2
// 2+4 = 6
// 2+"3" = 23
// 2,undefined = NaN
// "null"+2+2 = null22

// console.log is always called and return too
// void/return type function 
function message(number1, number2) {
    number3 = number1+number2;
    console.log("Sum is ",number3);
    number1 = number1+3;
    return number1;
}
const result = message(4,6);                 // this variable allow to print the console.log vlaue
console.log(result);                         // But store the return value , it will print when it called

// checking arguments
function show(username) {
    if (username === undefined || username === null) {
        console.log(`Please enter correct name`);
        return
    }
    console.log(`${username} is logged in`);
}
show(null);


function show(username = "wizard") {                                   // Work like default value
    if (username === undefined || username === null) {
        console.log(`Please enter correct name`);
        return
    }
    console.log(`${username} is logged in`);
}
show("anu");

// What happen when two function name and argument are same
// function allow us to create same name of function also parameter
// but work only the last one function 
// whenever called last function work
// parameter doesn't effect the function 
// only function name is require to call the same name function or parameter
function same(name) {
    console.log("First");
}
same();
function same() {
    console.log("Second");
}
same("saurabh");