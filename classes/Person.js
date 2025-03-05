class Person {
    constructor(name) {
        this.name = name;
        this.birthYear = null;
    }

    setDateOfBirth(year) {
        this.birthYear = year;
    }

    getDateOfBirth() {
        return this.birthYear;
    }

    age() {
        if (!this.birthYear) return null;
        return new Date().getFullYear() - this.birthYear;
    }

    getName() {
        return this.name;
    }

    description() {
        return `Person: ${this.name}`;
    }
}

module.exports = Person;
