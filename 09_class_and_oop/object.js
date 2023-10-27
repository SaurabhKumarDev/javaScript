// JavaScript default behavior is Prototype-based (Access like :- child, father, Grand Father, grand father)
// It will not shy to ask something from its father and father 
// All this also known as prototype inheritance

// All of the operation is object 
// further object it will null

// String, array, function, ... ----------> object ----------------> null

// In javaScript, aprox. all the element are object
// like above one

// Inside the js all things are object
// function are function and also object

function multipleBy5(num) {
    this.num = num;
    return num*5;
}

multipleBy5.power = 6;

console.log(multipleBy5(5));
console.log(multipleBy5.power);
console.log(multipleBy5.prototype);
// prototype is not just give you the method it will also give you the some internal property 
// multipleBy5.prototype :- gives you the 'this' of that method


function createUser(userName, score) {
    this.userName = userName;
    this.score = score;
}

// If we want to inject any method() in Global Object, or any other location this will allow in js 
// increment is a method
createUser.prototype.increment = function() {
    // this : जिस
    // 'this' whatever want 'this' keyword, it will go for that 
    this.score++;
}

// Now we make another one function printMe
createUser.prototype.printMe = function() {
    console.log(`Score : ${this.score}`);
}

const callingThePrototypeIncrement = createUser("Saurabh",19);
const nextCallingThePrototypeIncrement = createUser("Kumar", 27);

// You do not need to write prototype when you are calling 
// Like createUser.prototype.increment == createUser.increment()

// TypeError: Cannot read properties of undefined (reading 'printMe')
// callingThePrototypeIncrement.printMe();

// Resolving this issue you have to use the 'new' keyword
// We added some additional properties like (increment() & printMe()) in the createUser, that's why we need to let the know variable this will added 
// for that we use the 'new' keyword
const newKeywordCreateUser = new createUser("testing", 100);
newKeywordCreateUser.increment1();

/*
function multipleBy5(num) {
createUser.prototype.printMe = function() {
createUser.prototype.increment1 = function() {

You are able to use the single function() with different different new function()
every created function able to do their own job
but you must have to know the via prototype created function need 'new' keyword to let know the variable ki another function is also created too
*/
// return true if constructor
console.log(newKeywordCreateUser instanceof createUser);