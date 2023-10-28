// Static : Not allow to access it anywhere 

class userDetail {
    constructor(userName, email, password) {
        this.userName = userName;
        this.email = email;
        this.password = password;
    }

    static hide() {
        return `Password : ${this.password}`;
    }
}

// Within created static hide()
const tryToAccessHidden = new userDetail ('Saurabh', 'saurabh@email.com', 12345);
console.log(tryToAccessHidden.hide());

// Now trying to access via inheritance
class access extends userDetail {
    constructor(password) {
        super(password);
    }
}

// not allowed here too
const userDetailHideInherit = new access(54321);
console.log(userDetailHideInherit.hide());