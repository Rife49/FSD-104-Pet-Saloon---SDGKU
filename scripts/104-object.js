// how to create an object 

//let student1 = {
 //   name: "Robert",
   // lastname: "Rife",
   // age: 32
//};

// how to access to the attributes of an object -> .
//student1.name
//console.log(student1.name);
//console.log(student1.age);

// Interpolation -> ` ${variable} `
//Hello, my name is ________, I am ______ years old 
// console.log(`hello, my name is ${student1.name}, I am ${student1.age} years old`)


// Exercise

let student1 = {
    name: "French",
    lastname: "Toast",
    age: 25
};

let student2 = {
    name: "Adam",
    lastname: "Sandler",
    age: 65
};

let student3 = {
    name: "will",
    lastname: "fredd",
    age: 35
};



let students = [student1, student2, student3];

students[1];
console.log(students[1]);

students[2].name
console.log(students[2].name);

// === Constructor ====
function Student(studentName, studentLastname, studentEmail){
    this.name = studentName;
    this.lastname = studentLastname;
    this.email = studentEmail;
}

//Create an object using the constructor
let student4 = Student("Kate", "Frantz", "kate,frantz@sdgku.edu");