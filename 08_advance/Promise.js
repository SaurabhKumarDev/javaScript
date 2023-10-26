// CONSUMING THE PROMISES

fetch('https://randomuser.me/api/').then().catch().finally();
// Response = .then()
// Any error = .catch()
// always execute = .finally()


// CREATING PROMISES

// As an object and promises have call back function that function passes two parameters resolve, reject
const promiseOne = new Promise(function(resolve, reject) {
    // What do you want to execute here

    // Directly executed
    console.log('TESTING THIS CODE ');
    const age = 20;

    // async code
    // DB calls, cryptography, network call can be used here
    setTimeout(() => {

        // It is in method that calls '.then()', at last executing this 
        // Only one time resolve() is calling
        resolve(age);

        // Within 2 second print
        console.log('Async code 1');
    }, 6000);
})
// By using the variable, it will be call at everywhere

// CONSUME PROMISES

// .then() method is directly related with Created Promise
// Provide the call-back function as an argument of the .then() method for returning the value
promiseOne.then(function(age) {
    console.log('Promise consumed 1',age);
})


// Another short way to use the promise

new Promise(function(resolve, reject) {
    setTimeout(function() {
        console.log('Async code 2');
        resolve();
    }, 1000);
}).then(() => {
    console.log('Promise consume 2');
})


// With Parameter - Not allow two or more parameter in resolve method either object or String 
// With object multiple value can be accessible within that object

new Promise(function(resolve, reject) {
    setTimeout(() => {
        console.log('Async Code 3');
        const myObj = {
            name: 'Saurabh',
            number: 3
        }
        resolve(myObj);
    }, 1000);
}).then(function (myObj)  {
    console.log('Promise consume ',myObj.number);
})


// Different Different parameter can be accessed in all over promises
// All state are used here

const temp = new Promise(function(resolve, reject) {
    setTimeout(() => {
        console.log('Async Code 4');
        let error = true;
        if (!error) {
            // then()   ,   try
            resolve({name:'Saurabh', age: 20});
        } else {
            // catch()  ,   catch
            reject('Error handling need to wait here');;            
        }
    }, 1000);
})
temp
.then((user) => {                       
    return user.name;                      
})
.then((name) => {                       
    console.log(name);                  
})
.catch((error) => {
    console.log(error);
})
.finally(() => console.log('Error is resolve either rejected '));


// Another way to handle the resolve(.then) and reject(catch)

async function asyncWithPromise() {
    try {
        const response = await temp;
        console.log(response);
    } catch (error) {
        console.log(error);
    }
}
asyncWithPromise();