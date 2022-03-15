const company = {
    name: "ACME Inc.",
    employees: []
};

function Person(name, surname){
    this.name = name;
    this.surname = surname;
    this.parent = null;
}

const johnSmith = new Person("John", "Smith");
const marioRossi = new Person("Mario", "Smith");

company.employees.push(johnSmith);
company.employees.push(marioRossi);