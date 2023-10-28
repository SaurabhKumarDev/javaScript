/*
Inherit or extend
extends = imported another class within current class
super = access the extends class
name is imported in createUser
Within class 'this' keyword is , all over current context within many function too
*/

class name {
    constructor(userName) {
        this.userName = "Stark";
    }
    unique() {
        const name = 'Rahul';
        return name;
    }
}

class createUser extends name {
    constructor (userName, email, password) {

        // class - name
        super(userName);

        this.email = email;
        this.password = password;
    }

    // function for testing
    email() {
        this.email = email;
    }
}

// it can not access the createUser
const result1  = new name('Raul');
console.log(result1.unique())

// it will access all the component within the name
const result = new createUser('Saurabh', 'sk@gmail', 12345);
console.log(result.unique());

console.log(result1.unique() === result.unique());
console.log(result instanceof name);
console.log(result1 instanceof name);