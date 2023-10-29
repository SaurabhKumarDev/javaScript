// Not used too much, object for setters and getters
// variable : _email , get email () {} , not affect anyone and allow to call, but inside use this._email
// class and object both have same type of calling getters and setters

const myObj = {
    userName: "Stark",
    _email: "Saurabh@Email.Com",

    get email () {
        return this._email.toLowerCase();
    },

    set email (value)  {
        this._email;
    }
}

// new object create
const obj = Object.create(myObj);
console.log(typeof obj);