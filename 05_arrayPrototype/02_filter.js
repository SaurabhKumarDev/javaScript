/**************************************************** FILTER ****************************************************/
const myArr = [1,2,3,4,5,6,7,8,9];

// (argument_passed or iteration vala i) First Paranthesis
// => Arrow function
// (Job_to_do) Second Paranthesis
const newArray = myArr.filter( (value) => (value > 4));

// New array created
console.log(Array.isArray(myArr));

// above operation doing in the forEach
const newArray2 = myArr.forEach( (value) => {
    if(value>4) { console.log(value); }
});

// Use Single line code
const newArray3 = myArr.forEach( (value) => (value>4));

// Checking do job or not
for (let index = 0; index < newArray3.length; index++) {
    console.log(newArray3[index]);
}

// Array than Object usable
const books = [
    { title: 'Book one' , genre: 'Fiction' , publish: 1981 , edition: 2004 },
    { title: 'Book two' , genre: 'Non-Fiction' , publish: 1992 , edition: 2008 },
    { title: 'Book Three' , genre: 'History' , publish: 1999 , edition: 2007 },
    { title: 'Book Four' , genre: 'Non-Fiction' , publish: 1989 , edition: 2010 },
    { title: 'Book Five' , genre: 'Science' , publish: 2009 , edition: 2014 },
    { title: 'Book Six' , genre: 'Fiction' , publish: 1987 , edition: 2010 },
    { title: 'Book Seven' , genre: 'History' , publish: 1986 , edition: 1996 },
    { title: 'Book eight' , genre: 'English' , publish: 2006 , edition: 2023 }
];

// Using Filter 
console.log(books.filter( (value) => (value.genre === 'English')));

// Using Scope
console.log(books.filter( (bk) => {
    return bk.publish > 2000
}));

// two condition
const value = books.filter ( (bk) => {
    return bk.publish > 2000 && bk.publish > 2010;
})

// checking
for (const iterator of value) {
    console.log(iterator);
}
