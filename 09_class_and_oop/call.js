/*
                                    CALL & THIS
We used to use ‘call’ or ‘bind’ a lot earlier because there were no libraries available then.
The ‘this’ keyword refers to the global execution context. However, there can be issues with the ‘this’ keyword. 
When you have a window object, it will access the window object. 
But when it is not available or a node environment occurs, it gives you an empty object. 
It’s important to note that every function has its own separate ‘this’. 
*/

function userName (username) {
    // complex DB calls
    this.username = username;
    console.log('I am in userName');
}

function createUser (username, email, password) {
    // this.username = username    =    this operation doing outside or outsource 

    // actually this is not calling, it is only reference in js 
    // But it's look like we are calling it & it cannot hold the value
    userName(username);

    // Call userName function
    // So, for proper calling use '.call'
    // Provide the current context to userName , Pass like a parameter
    userName.call(this, username);

    this.email = email;
    this.password = password;
}

// Store the result in variable as a constructor
const result = new createUser ('Saurabh', 'sk@saurabh', 12345);

console.log(result);