// Conversion Operation

let number = 33;

// Converting number
let numberConversion = BigInt(number)
// console.log(typeof(numberConversion))
// console.log(numberConversion)

/*  *NUMBER*
33 => 33    string
33 => true  ||  1 => true   ||  0 => false  boolean
33 => 33n    bigInt
*/

let string = "false";

// Converting string
let stringConversion = Boolean(string)
// console.log(typeof(stringConversion))
// console.log(stringConversion)

/*  *String*
"Hello" => NaN  String to Number
"23" => 23  String to number
"" => false String to Boolean
"Saurabh" => true   String to Boolean
"false" => true String to Boolean
*/

let bool = true;

// Converting Boolean
let boolConversion = Number(bool)
// console.log(typeof boolConversion)
// console.log(boolConversion)

/*  *Boolean*
false => false  bool to String
false => 0  true => 1   bool to number
*/



/**************************** Operations ***************************/

// console.log(2+4)
// console.log(2-4)
// console.log(2*4)
// console.log(2/4)
// console.log(2%4)
// console.log(2**4)       // 2*2*2*2 = 2^4

/* Messi Code */
console.log(2+"2")
console.log("2"+4)
console.log("2"+3+6)
console.log(2+3+"7")
console.log(2+4-2*6/2+9)

/* 
number + String => numberString
String + number => StringString
number + number + String => numberString

messi code = Best Code
Use Bracket's(paranthesis)
*/