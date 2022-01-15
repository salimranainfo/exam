

const firstName: string = 'Wasim'
const lastName: string = 'Hasan'
const age: number = 33
const isMale: boolean = true


const fullName = (): string => {
    return firstName + ' ' + lastName
}


  

let a:number = 5
let b:number = 6
const add = (a: number, b: number): number => {
    return a + b
}



let array: number[] = [7, 10, 15]

let employee: string[] = ['Rubel', 'Wasim', 'Tutul']




interface Person {
    firstName: string,
    lastName: string,
    age: number,
    isMale: boolean,
    getFullName(): string
}

const personOne: Person = {
    firstName: 'Wasim',
    lastName: 'Hasan',
    age: 31,
    isMale: true,
    getFullName() {
        return this.firstName + ' ' + this.lastName
    }
}

const personTwo: Person = {
    firstName: 'Imtiaz',
    lastName: 'Tutul',
    age: 30,
    isMale: true,
    getFullName() {
        return this.firstName + ' ' + this.lastName
    }
}

const minus = (): void => {
    console.log(8 - 4)
}


class PersonClass {
    name: string;
    age: number;

    constructor(name: string, age: number) {
        this.name = name
        this.age = age
    }
}

const person1 = new PersonClass('Rubel', 30)
const person2 = new PersonClass('Wasim', 32)
const person3 = new PersonClass('Tutul', 29)

