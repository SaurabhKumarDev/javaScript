// ES6 Code
// Class is the valid syntax after launching the ES6

// Declaring a class named user
class user {

    // able to add properties, method, more 

    // As soon as an object is initialized from a class, that is, as soon as the ‘new’ keyword is used, the constructor is automatically called.
    // The constructor method is a special method for creating and initializing an object created with a class.

    // Basic constructor
    constructor(username, email, password) {
        this.username = username;
        this.email = email;
        this.password = password;
    }

    // another method within class  
    encryptPassword() {
        return `${this.password}abc`;
    }
}

// class type : class
console.log(user);

// Object with new keyword
const res = new user("saurabh", 'sk@gmail', 123);
console.log(typeof res.encryptPassword());


/************** All above using the Prototype **************************/

function user(username, email, password) {
    this.username = username;
    this.email = email;
    this.password = password;
}
user.prototype.encryptPassword = function() {
    return `Password : ${this.password}${Math.floor(Math.random() * 100)}`;
}
user.prototype.capital = function() {
    return `User Name : ${this.username.toUpperCase()}`;
}
const result = new user("saurabh", 'sk@gmail', 123);
console.log(result.encryptPassword());