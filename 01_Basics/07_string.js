// String Operation 

// Creating of String
let str = "Saurabh"
let newStr = new String('Saurabh')                          // As a object
let icons = '☃★♲'
const paragraph = 'The quick brown fox jumps over the lazy dog. If the dog barked, was it really lazy?';
const matchthis = /[a-z]/g                                  // VERY IMPORTANT
let spaceString = "     Sa   urabh    ";
let arrString = "saurabh-kumar-developer"
let email = "github.com/Sau rabh Kumar"
const js = 'javaScript '
const adharS = '2432'
const adharE = '1770'

// => String have many prototype like .length, .toUpperString,...     
// => USE BROWSER FOR KNOWING THIS PROTOTYPE


console.log(newStr.charAt(2))  
console.log(newStr.charCodeAt(1))                           // ASCII Code return        // returns an integer between 0 and 65535
console.log(icons.codePointAt(1))                           // based on UTF-16 code units, not Unicode code points
console.log(newStr.concat(str))  
console.log(newStr.endsWith('bh'))                          // Verify that ending with this string or not
console.log(newStr.endsWith('ur',4))                        // Also able to check the middle value
console.log(email.includes('Sau'))                          // Search if available true either false    [Case Sensitive]
console.log(arrString.search('ur'))                         // Finding first character like a indexOf
console.log(newStr.indexOf('a'))                            // Getting index number of character within a String     Not found => -1
console.log(paragraph.lastIndexOf('d'))                     // Only character find in paragraph 'd'
console.log(paragraph.indexOf('dog'))                       // String find 
console.log(paragraph.lastIndexOf('dog'))                   // Last String occurence
console.log(str.length)                                     // Length of a String 
console.log(spaceString.trim().concat(newStr))              // trim => remove the spaces from begining and end
console.log(spaceString.trimEnd().concat('removed'))        // Remove the spaces from the end
console.log(spaceString.trimStart())                        // Remove the spaces from the starting
console.log(paragraph.match(matchthis))                     // Find capital character in paragraph
console.log(newStr.toLowerCase())                           // Converted into lower case All character
console.log(newStr.toUpperCase())                           // Converted into Uper case
console.log(paragraph.startsWith('quick','4'))              // Checking the starting word character's
console.log(newStr.substring(0,3))                          // SubString means small part of the String
console.log(arrString.split('-'))                           // Converting String into array 
console.log(newStr.slice(-4,newStr.length))                 // start from front index[0], reverse end starting index[-1]
console.log(email.replace(" ","%20"))                       // First space replaced with the '%20'
console.log(email.replaceAll(" ","%20"))                    // All space replaced with the '%20'
console.log(`I am happy to learn ${js.repeat(9)} `)         // Repeat the value 
console.log(adharS.padEnd(12,'*').concat(adharE))           // repeate one char/word length of the word seperated too
console.log(adharE.padStart(16,"*"))                        // Attach at beginning



/* *NOT GO THROUG*
.localCompare
.normalize 
.matchAll
*/