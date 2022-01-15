// Create 5 variables with const and let
//  - String
//  - Number
//  - Boolean
//  - Object
//  -- Object has to contain both prperty and method
//  - Array
var firstName = "Muhammad";
var lastName = "Rubel";
var age = 30;
var isMale = true;
var person1 = {
    firstName: '',
    lastName: '',
    age: 30,
    isMale: true,
    getFullName: function () {
        return this.firstName + " " + this.lastName;
    }
};
var arrayOne = ['Rubel', 10, true];
// Create 5 functions
//  - Cretae 3 functions in 3 ways of writing functions
//  - Create one return type function
//  - Create one void type function
var fullName = function () {
    return firstName + " " + lastName;
};
// function expression
var simpleLog = function (text) {
    console.log(text);
};
// declaration
function doSomething(a, b) {
    return a + b;
}
var add = function (a, b) {
    return a + b;
};
// Cretae 2 ways of if statements
if (age < 2) {
    console.log('Infant');
}
else if (age > 2 && age < 12) {
    console.log('Child');
}
else {
    console.log('Young');
}
var personType = age < 2 ? 'infant' : 'Young';
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
for (var i = 0; i > 10; i++) {
    console.log(i);
}
for (var prop in person1) {
    console.log(person1[prop]);
}
for (var _i = 0, arrayOne_1 = arrayOne; _i < arrayOne_1.length; _i++) {
    var item = arrayOne_1[_i];
    console.log(item);
}
//# sourceMappingURL=app.js.map