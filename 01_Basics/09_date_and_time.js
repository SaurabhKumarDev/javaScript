/*-------------------------------- Date and Time ---------------------------------*/ 

let date = new Date();

// date and time
console.log(date);
console.log(typeof date);


// Basically in date method 
// We have only 3 operation 
// 1. get
// 2. set
// 3. to
// Month and Day Start's from the 0


/*++++++++++++++++++++++++++ Get ++++++++++++++++++++++++++*/

// Time - hour, minute, second, milliseconds, allThisAlsoAvailableIn_UTC
// Date - Day, Date, Month, FullYear, allThisAlsoAvailableIn_UTC
console.log(date.getDate());
console.log(date.getMonth());
console.log(date.getFullYear());
console.log(date.getDay());
console.log(date.getUTCDate())
console.log(date.getUTCMilliseconds());


/*++++++++++++++++++++++++++ Set ++++++++++++++++++++++++++*/

// All Get Operation also available in Set Operration

// console.log(date.getDay(date.setDate(32)));


/*++++++++++++++++++++++++++ to ++++++++++++++++++++++++++*/

// to => Addied some information and remove the some information too

console.log(date.toDateString());               // Show => Date and Day 
console.log(date.toISOString());                // Show => Same as date method || Converted into String
console.log(typeof date.toJSON());
console.log(date.toString());                   // Show => Day Date Time TimeZone UTC

// Creating a new Date
let myCreatedDate = new Date(2022, 0, 2);
console.log(myCreatedDate.toDateString());

// DD MM YYYY
let CreateNewDate = new Date("06-02-2004");
console.log(CreateNewDate.toLocaleDateString());

// Used in bigger project => For comparing which one is first come 
let time = Date.now();

// In MilliSeconds
console.log(time);
console.log(CreateNewDate.getTime());

// MilliSecond to Second
console.log(Math.trunc(time/1000));

// Print date DD / MM / YEAR
console.log(myCreatedDate.toLocaleDateString());
console.log(`${myCreatedDate.getDate()} / ${myCreatedDate.getMonth() + 1} / ${myCreatedDate.getFullYear()}`);