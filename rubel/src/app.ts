// Create 5 variables with const and let
//  - String
//  - Number
//  - Boolean
//  - Object
//  -- Object has to contain both prperty and method
//  - Array
const firstName: string = "Muhammad"
const lastName: string = "Rubel"
const age: number = 30
let isMale: boolean = true

interface Person {
  firstName: string,
  lastName?: string,
  age?: number,
  isMale: boolean
  getFullName(): string
}

const person1: Person = {
  firstName: '',
  lastName: '',
  age: 30,
  isMale: true,
  getFullName() {
    return this.firstName + " " + this.lastName
  }
}

type myArray = string|number|boolean|object
const arrayOne: myArray[] = ['Rubel', 10, true]


// Create 5 functions
//  - Cretae 3 functions in 3 ways of writing functions
//  - Create one return type function
//  - Create one void type function
const fullName = (): string => {
  return firstName + " " + lastName
}

// function expression
const simpleLog = function (text: string): void {
  console.log(text);  
}

function doSomething (a: number, b: number): number {
  return a + b
}

const add = (a: number, b: number): number => {
  return a + b
}

// Cretae 2 ways of if statements
if(age < 2) {
  console.log('Infant');  
} else if (age > 2 && age < 12) {
  console.log('Child');  
} else {
  console.log('Young');  
}

const personType = age < 2 ? 'infant' : 'Young'

console.log(personType);


// Create a switch statements
// switch(property) {
//   case value :
//     return something
//     break
//   case value :
//     return something
//     break
//   default something  
// }

// Cretae 3 ways of for loops
for(let i = 0; i > 10; i++) {
  console.log(i);  
}

for (let prop in person1) {
  console.log(person1[prop]);  
}

for (let item of arrayOne) {
  console.log(item);
  
}





