// Change Some predefined value 
// Create Some value which are not changeable by anyone 
// Example : PI = 3.14 

    // CHANGE

    const pi = Object.getOwnPropertyDescriptor(Math,'PI');
    // Output : 
    // configurable: false
    // enumerable: false
    // value: 3.141592653589793
    // writable: false
    
    // trying to change the value of the PI
    Math.PI = 4
    console.log(Math.PI);

    // Change the value of the PI
    Object.defineProperty(Math,'PI', {
        writable: true
    })

    Math.PI = 4;
    console.log(Math.PI);
    // Hard to do this


    // CREATE not changeable value/object

    let myObj = {
        name: 'pi',
        value: 4,
        isWritable: true
    }

    // Two parameter
        // 1. Created object name
        // 2. Property of Object 

    // It is writable by default
    const createdPi = Object.getOwnPropertyDescriptor(myObj, 'name')
    console.log(createdPi);

    // Change it to not writable
    Object.defineProperty(myObj, 'name', {
        writable: false, enumerable: true, configurable: true
    })
    myObj.name = 'Saurabh';