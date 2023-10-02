// Object destructuring

// Create Object
const obj = {
    professionalName: {
        name : "anu",
        fullName: {
            firstName: "Saurabh",
            lastName: "Kumar"
        }
    },
    age: 19,
    degree:"B.Tech",
    male: true 
}

// Destructuring
// for accessing the fullName object variable, some complexing thing occur
// resolve that use simple destructuring
const {firstName} = obj.professionalName.fullName;
console.log(firstName);

// You can also able to replace the largest word with small word
const {name:N} = obj.professionalName;
console.log(N);

const {age} = obj;
console.log(age);




// Acceptable in json
// {
//     name : 'Saurabh'
//     ages : 20
// }

// Avail in APIs
[
    {},
    {},
    {}
]