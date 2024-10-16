function createPerson(name, lastname, age) {
    return {
        name,
        lastname,
        age,
        getFullName() {
            return `${name} ${lastname}`
        }
    }
}

let person = createPerson("Luis", "Eduardo", 22)
console.log(person.age)