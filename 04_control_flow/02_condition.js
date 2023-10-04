/* ----------------------------- Switch Case ----------------------------- */

// More number of Condition that's why we use this

// User Input
let month = "april";

// Only carry 3 character
let subMonth = month.substring(0,3);
// Convert into uppercase
let argument = subMonth.toUpperCase();

switch (argument) {
    case "JAN": {
        console.log("0");
        break;
    }
    case "FEB":{
        console.log("1");
        break;
    }
    case "MAR": {
        console.log("2");
        break;
    }
    case "APR":{
        console.log("3");
        break;
    }
    case "MAY": {
        console.log("4");
        break;
    }
    case "JUN":{
        console.log("5");
        break;
    }
    case "JUL": {
        console.log("6");
        break;
    }
    case "AUG":{
        console.log("7");
        break;
    }
    case "SEP": {
        console.log("8");
        break;
    }
    case "OCT":{
        console.log("9");
        break;
    }
    case "NOV": {
        console.log("10");
        break;
    }
    case "DEC":{
        console.log("11");
        break;
    }
    default : 
        console.log("Try again");
}