function Person(name, surname){
    this.name = name;
    this.surname = surname;
    this.parent = null;
}

const johnSmith = new Person("John", "Smith");
const fredSmith = new Person("Fred", "Smith");

fredSmith.parent = johnSmith;