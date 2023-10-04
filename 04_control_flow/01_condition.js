/* ------------------- If-else -------------------- */

let isLoggedIn = "false";
let isArray = [2,8];
let temp = 2;

// If condition
// if = satisfy the condition
if (true) {
    console.log("Wizard logged in");
}

// Check data type with provide value
if (isArray[0] === temp) {
    console.log("+++++++++++++++++++++++++++++++++++++++++++++++++++++++++");
}

// Multiply line within single line
// Not use this , company treat as worst code
if (isLoggedIn) console.log("Hii!"), console.log("Actually this happen|");

// if-else 
// else = not satisfy the condition
if(isLoggedIn) {
    console.log("You are Logged in");
} else {
    console.log("Soory! Not log in, try again!!");
}

// terniary operator / Short hand if - else
console.log((isLoggedIn) ? "Successful" : "UnSuccessful");

// Java Script have some extra feature 
// Prevent from null or undefined
// '??' double question mark
let run = null ?? 5;                                            // 5
let run1 = undefined ?? 10;                                     // 10
let run3 = 15 ?? 20;                                            // 15
let run4 = null ?? undefined ?? 25;                             // 25
let run5 = null ?? undefined ?? 30 ?? 35;                       // 30
let run6 = null ?? 40 ?? undefined;                             // 40
let run2 = null ?? undefined;                                   // undefined
console.log(`${run2}`);

// else if = more than one condition
// Grading System
let marks = 70;
if (marks > 95 && marks <= 100) {
    console.log("Grade : A+");
} else if (marks > 85 && marks <= 95) {
    console.log("Grade : A");
} else if (marks > 70 && marks <= 85) {
    console.log("Grade : B");
} else if (marks > 60 && marks <= 70) {
    console.log("Grade : C");
} else if (marks >= 33 && marks <= 60) {
    console.log("Grade : D");
} else if (marks >= 0 && marks < 33) {
    console.log("Fail");
} else {
    console.log("!Correct");
}



// Condtion Operator
// <=, ==, ===, >=, !=, !, >, <

// Logical Operator
// ||, &&, ~
