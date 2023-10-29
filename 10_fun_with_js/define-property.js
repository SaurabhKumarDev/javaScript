// Modern Syntax
// Function based Syntax 

function userDetails (userName, email, password) {
    this._email = email;
    this.userName = userName;
    this._password = password;

    Object.defineProperty(this, 'email', {
        get : () => {
            return this._email.toLowerCase();
        },
        set : function(value) {
            this._email;
        }
    })

    Object.defineProperty(this, 'password', {
        get : function() {
            const hex = "0123456789ABCDEF";
            let lastPassKey = '';
            for (let i=1; i<=6; i++) {
                let randomValue = Math.floor(Math.random()*16);
                let r = hex[randomValue];
                lastPassKey += r;
            }
            return this._password+lastPassKey.toLowerCase();
        },
        set : (value) => {
            this._password;
        }
    })
}

// new : need here otherwise it will show the error : cannot read properties of undefined
const result = new userDetails("Saurabh", "SK@EMail.com","Ron");
console.log(result.password);