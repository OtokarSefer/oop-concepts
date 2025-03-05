const Person = require('./Person');

class Student extends Person {
    constructor(name) {
        super(name);
        this.id = null;
        this.grades = [];
    }

    setId(id) {
        if (this.id === null) {
            this.id = id;
        }
    }

    getId() {
        return this.id;
    }

    addGrade(course, grade) {
        this.grades.push({ course, grade });
    }

    getGrades() {
        return this.grades;
    }

    getAverageGrade() {
        if (this.grades.length === 0) return -1;
        return this.grades.reduce((sum, g) => sum + g.grade, 0) / this.grades.length;
    }

    description() {
        return `Student: ${this.name}`;
    }
}

module.exports = Student;
