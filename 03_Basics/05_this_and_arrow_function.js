/* ------------------------- This ------------------------- */

// Object than function
const myObj = {
    // Current Context
    name: "Saurabh",
    fullName: {
        name:"Saurabh",
        firstName: function() {
            fName = "Saurabh";          // Not in `this` keyword
            console.log(`${this.name} is my Name.`);
            console.log(this);
        }
    }
}

// Current Context
// myObj.fullName.firstName();
// Context Change means changing simple value
// myObj.fullName.name = "Kumar";
// myObj.fullName.firstName();

// function than object/function is not allow
function myfunction() {
    let var1 = "Saurabh";
    let var2 = "Kumar";
    console.log(`${this.var1} ${var2}`);
    console.log(this);
}

// Variable can also store the function
const tempVariable = function() {
    const greet = "Good Morning";
}

// ------------------------ Arrow function ------------------------ //

// Basic syntax
// () => {}

// Explicit arrow fn
const temVariable = () => {
    return 4+6;
}

// Implicit arrow fn
const tem2Variable = (num1, num2) =>  (num1+num2);