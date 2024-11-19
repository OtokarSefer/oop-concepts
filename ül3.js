class Student {
    
    #id;
    #name;
    #status;

    constructor(name, id) {
        this.#name = name;
        this.#id = id;
        this.#status = "Active";
    }

    getId() {
        return this.#id;
    }

    setName(name) {
        this.#name = name;
    }

    getName() {
        return this.#name;
    }

    setStatus(status) {
        const allowedStatuses = ["Active", "Expelled", "Finished", "Inactive"];
        if (allowedStatuses.includes(status)) {
            this.#status = status;
        }
    }

    getStatus() {
        return this.#status;
    }
}

//lisamine
const student = new Student("John Doe", 12345);
console.log(student.getName());  
console.log(student.getStatus()); 

//lisamine
student.setName("Jane Doe");
student.setStatus("Finished");
console.log(student.getName());
console.log(student.getStatus());

// kontrolli kontrolli
student.setStatus("adadkjad");
console.log(student.getStatus());
