const str = "Saurabh   ";
const str1 = "Saurabh";
console.log(str1.length);
console.log(str.trim().length);


// Using method, get size of the string
const string = "saurabh   ";
String.prototype.trueLength = function() {
    console.log(`Length : ${this.trim().length}`);
}
string.trueLength();