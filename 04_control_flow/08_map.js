/* ------------------------------- Map ----------------------------------- */

// Create map //
// map() constructor
// map work as a object so always need new keyword for creation
let map = new Map();
console.log(typeof map);

// Inserting value in map using 'set'
map.set("name","Saurabh");
map.set("age",20);
map.set("isMale",true);
map.set("laptop","Asus Rog");

// iteration for print each value of the map 'forof' as entries
for (const iterator of map) {
    console.log(iterator);
}

// Iteration for key/value
for (const [key,value] of map) {
    console.log(key);
}

// iterables
const iterator1 = map[Symbol.iterator]();

// Manually hand-rolling the iterator
// Manually call the next() provide the maximum control over the iteration process
console.log(iterator1.next().value);
console.log(iterator1.next().value);

// remove specific element from this map
console.log(map.delete('isMale'));

// Map entries
console.log(map.entries());
// Map keys
console.log(map.keys());
// Map values
console.log(map.values());

console.log();
console.log();
console.log();

/******* ForEach *********/
function thisIsIterator(key, value) {
    console.log(key , value);
}

// 1.) forEach outterly called
map.forEach(thisIsIterator)         // No need to pass arguments or paranthesis

// 2.) forEach with Object      :       Without creation object
new Map([
    ["name","Saurabh Kumar"],
    ["age", 19]
]).forEach(thisIsIterator);

/******************/

// get : associated value got via key
console.log(map.get('name'));

// has : present or not
console.log(map.has('name'));

// specific element is removed
console.log(map.size);
console.log(map.delete('name'));
console.log(map.size);

// remove all element from this map
console.log(map.size);
map.clear();
console.log(map.size);

// GroupBy method is not working 
