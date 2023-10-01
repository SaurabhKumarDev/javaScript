/*------------------------------- Number and Math -----------------------------*/

// Number

let num = 411;
let numb = new Number(500.9);
let numbe = Number(200);
let hundred = 10000000;

console.log(typeof num);
console.log(numb);
console.log(typeof numb);
console.log(typeof numbe);
console.log(typeof num.valueOf())

// Number to String 
console.log(typeof num.toString())

// Fixed means after dot, how many zeroes you want || Floating value
num = num * 0.21
console.log(num.toFixed(12))

// It will precise to before and after decimal value to the method argument 123 => 3 => 123     1123 => 3 => 1.2e+3
// Must know the exact value you get
// return in string
console.log(num.toPrecision(3))

// Convert it into countable form
// their comma usually by default at US standared format
// for converting it use the 'en-in'
console.log(hundred.toLocaleString('en-in'));

// Converting number into exponential value
console.log(num.toExponential());





/* +++++++++++++++++++++++++++++++ Math +++++++++++++++++++++++++++++++++++ */
// Math works with the Number type. It doesn't work with BigInt.


/************************* STATIC PROPERTIES ************************/

// Euler's number = Approx. 2.718
console.log(Math.E);

// Natural logarithm 10
console.log(Math.LN10)

// Natural logarithm of 2
console.log(Math.LN2);

// The Base-10 logarithm is e
console.log(Math.LOG10E);

// Exact value of PI
console.log(Math.PI);

// sqrt of 0.5
console.log(Math.SQRT1_2);

// sqrt of 2
console.log(Math.SQRT2);





/************************** Static Methods **********************/

// Absolute vlaue -ve to +ve, +ve to +ve
let absoult = -8
console.log(Math.abs(absoult));

// cube root => 2*2*2 = 8
console.log(Math.cbrt(8));

let value = 4.19235;
// floating value directly go to next int value
// Sabse ouchi value it will get
console.log(Math.ceil(value));
// floor matlab jamin
console.log(Math.floor(value));

// Max and Min method is used to get the highest value of the array or minimum value of the array
console.log(Math.min(2,3,5,7,19));

// 32 bit binary number => PreZeroes will be counted
// 00000000000000000000000000000001
console.log(Math.clz32(1))

// general Math .0 - .4 => 0 || .5 - .9 => 1
console.log(Math.round(4.5))

// 𝙼𝚊𝚝𝚑.𝚎𝚡𝚙(𝚡)=e^x
console.log(Math.exp(0))

// Math.expm1(x)=e^x -1     => e^0 = 1-1 = 0
console.log(Math.expm1(0));

// two parameters multiplication
console.log(Math.imul(3,5));

// logarithm base 10 with x
console.log(Math.log10(10));

// logarithm base 2 with x
console.log(Math.log2(10))

// Power
console.log(Math.pow(2,4));

// Knowing the Sign of the number
// -value = -1 || +value = +1 || 0 = 0
console.log(Math.sign(0));

// removing the fractional value
console.log(Math.trunc(0.89));

// Random vlaue
console.log(Math.random());
console.log(Math.random()*10);
console.log(Math.trunc(Math.random()*10))

// Want 10 to 20 Random Number
console.log((Math.trunc(Math.random()*10)+10));





/************************** Number ***************************/

// Maximum value in Integer
console.log(Number.MAX_SAFE_INTEGER);
console.log(Number.MAX_VALUE);

// Minimum vlaue in Integer
console.log(Number.MIN_SAFE_INTEGER);
console.log(Number.MIN_VALUE);

// Infinite value
console.log(Number.NEGATIVE_INFINITY);
console.log(Number.POSITIVE_INFINITY);

// finite or Infinite
console.log(Number.isFinite(1/0));

// Integer or not
console.log(Number.isInteger('a'));