class Person {
    constructor() {
        this.firstName = "",
        this.lastName = "",
        this.age = 0
    }
}

class Student {
    constructor(firstName, lastName, age) {
        this.firstName = firstName,
        this.lastName = lastName,
        this.age = age
    }
}

const person1 = new Person()
person1.firstName = "John"
person1.lastName = "Pork"
person1.age = 27

const person2 = new Person()
person2.firstName = "Alpha"
person2.lastName = "Male"
person2.age = "13"

const person3 = new Person()
person3.firstName = "Help"
person3.lastName = "Me"
person3.age = 3

const student1 = new Student("John2", "Pork2", 272)
const student2 = new Student("Alpha2", "Male2", 132)
const student3 = new Student("John2", "Pork2", 272)

//printimine
console.log(person1, person2, person3)
console.log(student1, student2, student3)