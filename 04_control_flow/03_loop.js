/* ----------------------- For Loop ------------------------------ */

// Simple loop = Print 1 to 10
for (let index = 1; index <= 10; index ++) {
    console.log(index);
}

// Print Even Number 1 to 20
for (let index = 0; index <= 20; index += 2) {      // index = index + 2
    console.log(index);
}

let myArr = [4,"Saurabh",7217676539,"Asus","Realme","Mi",true];

// Loop with array
for (let index = 0; index < myArr.length; index ++) {
    console.log(myArr[index]);
}

// Print table 1 to 10
for (let table = 1; table <= 10; table++) {
    for (let num = 1; num <= 10; num++) {
        console.log(`${table} * ${num} = ${(table*num)}`);
    }
    console.log("\n");
}


// break and continue

// break = Stop the iteration
// continue = skip the current index

// Print Odd number & Stop iteration after 10
for (let index=1; index <= 50; index++) {
    if (index%2 == 0) {
        continue;
    } else if (index > 10) {
        break;
    }
    console.log(index);
}