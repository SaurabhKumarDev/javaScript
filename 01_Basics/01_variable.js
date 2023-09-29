// Variables

// Declaration of variable
const accountId = 12345                     // Fixed value
let accountEmail = "saurabh@gamil.com"  
var accountPassword = "Saurabh123"      
accountCity = "Delhi"       
var accountName;            

/*
Prefer not to use the var
because of issue in block or function

Semicolon is not neccessary
*/


// Try to change the values
/* accountId = 12; */                             // TypeError: Assignment to constant variable. :: Not Allowed
accountEmail = "google.com"
accountName = "Saurabh"
accountCity = "Bihar"


// Print Single value 
console.log("Email : ",accountEmail)            // Concate with comma

// All value prints within a block instead of seperate calling
console.table([accountId, accountEmail, accountPassword, accountCity, accountName])