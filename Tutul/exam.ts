// Setup typescript first for below exam
// Use typescript for all below tasks

// Create 5 variables with const and let
//  - String
//  - Number
//  - Boolean
//  - Object
//  -- Object has to contain both prperty and method
//  - Array

const firstName: string = "Abdur";
const lastName: string = "Rahman";
let age: number = 27;
const isMail: boolean = true;
let array:number[] = [2,4,6,2,64355]
const person1 = {
  firstName : "",
  lastName : " ",
  ismale : false
}


// Create 5 functions
  //  - Cretae 3 functions in 3 ways of writing functions
  //  - Create return type function
    const fullName = (): string => {
        return firstName + ' ' + lastName
      }
      
      const fullName2 = (a: string, b: string): string => {
        return a + b
      }
      
      function addNum (a: number, b: number): number {
        return a + b
      }
      
  //  - Create one void type function
      const voidAdd = (): void => {
      
      }
 
      const person = {
        firstName : "",
        lastName : " ",
        isMale: false,
        fullName2: function (firstName: string, lastName: string) {
        return firstName + " " + lastName
        }
      };

      // Cretae 2 ways of if statements
      let x:number = 50, y: number= 100
      if (x<y)
      {
        console.log("y is greter than x")
      }

      let a:number = 50, b: number= 100
      if (a>b)
      {
        console.log("a is greter than b")
      } 
      else
      {
        console.log("a is less than to b");
      }

    // Create a switch statements

    // Cretae 3 ways of for loops
      
