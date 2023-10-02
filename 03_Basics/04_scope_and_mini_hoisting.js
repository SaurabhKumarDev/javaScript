// Within Function 
function myfunction1() {
    const name = "Saurabh";
    function firstInnerfn() {
        const lastName = " Kumar";
        function secondInnerfn() {
            const result = name + lastName;
        }
        console.log(result);
    }
    console.log(lastName);
}

// if condition
if (true) {
    let name = "saurabh";
    if ("saurabh" == name) {
        let lastName = " Kumar"
        if (true) {
            var result = name + lastName;
        }
        console.log(result);
    }
    // console.log(lastName);
}


// ------------------------------- Some Interesting point to note ----------------------------------------

myfn1();

// Access anywhere
function myfn1() {
    return 3+5;
}

// myfn2();             // Show error 

// only access below the function, becuase here used variable for storing the function 
const myfn2 = function() {
    return 4*9;
}