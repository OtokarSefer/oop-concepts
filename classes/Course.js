class Course {
    constructor(name) {
        this.name = name;
        this.grades = [];
    }

    addGrade(student, grade) {
        this.grades.push({ student, grade });
    }

    getGrades() {
        return this.grades;
    }

    getAverageGrade() {
        if (this.grades.length === 0) return -1;
        return this.grades.reduce((sum, g) => sum + g.grade, 0) / this.grades.length;
    }

    description() {
        return `Course: ${this.name}`;
    }
}

module.exports = Course;
