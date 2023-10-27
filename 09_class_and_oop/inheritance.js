// JavaScript is a bit confusing for developers experienced in class-based languages (like Java or C++), as it is dynamic and does not have static types.
// Inheritance refers to the process by which genetic information is passed on from parent to child.
// Inherited using '___proto___' & ''

const user = {
    name : "Saurabh"
}

const Teacher = {
    isPresent: true
}

const nofStudent = {
    numberOfStu: 62
}

const together = {
    newTeacher: "Saurabh",

    // Inherit the Teacher here
    ___proto___: Teacher,
}

Teacher.___proto___ = user;

// Modern way : Inherit
Object.setPrototypeOf(Teacher, nofStudent);

// this will be accessible using the variable, fn Name
console.log(Teacher);