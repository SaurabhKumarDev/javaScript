/*
///////////////////////////////////////// GETTERS & SETTERS \\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\

Customize the access of variables/properties
The number of properties that are defined in the constructor will automatically generate methods with the same names as these properties.

--------------------------------------------------- GET --------------------------------------------------
To apply getters, use the ‘get’ keyword. 
This allows you to retrieve values from constructor of class. 
There’s no need to pass a parameter as it has direct access to the variable that is going to be used. 
It should return a value for the setter (set).

--------------------------------------------------- SET --------------------------------------------------
Whenever getter(get) is called than also necessary to call setters(set) too for set the value.
To apply setters, use the 'set' keyword.
This allows you to retrieve values from getter(get) method.
Need to pass the parameter, which is return by the setter(set).

ERROR : 
Maximum call stack size exceeded :- When same property are used in getter, setter, constructor 
Prefer to use the new variable/property
*/

class practice {
    constructor (userName, age) {
        this.userName = userName + "Kumar";
        this.age = age;
    }
    get userName() {
        return this._userName.toUpperCase(); 
    }
    set userName(value) {
        this._userName = value;
    }
    fn() {
        this.age = this.age + 2;
    }
}
const result = new practice ("Saurabh", 20);
// result : is just like 'this' keyword 

// Encrypted userName
console.log(result.userName);