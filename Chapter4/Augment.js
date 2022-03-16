function Person(name, surname) {
  this.name = name;
  this.surname = surname;

  this.testFunction = function() { console.log("Hello World"); }
}

const myMixin = {
  getFullName: function() {
    return this.name + " " + this.surname;
  },
  testFunction: function() {
    console.log("Hello World 2");
  }
}

// Object.assign
function augment(destination, source) {
  for(const methodName in source) {
    if (source.hasOwnProperty(methodName)) {
      destination[methodName] = source[methodName];
    }
  }

  return destination;
}


augment(Person.prototype, myMixin);

const johnSmith = new Person("John", "Smith");

console.log(johnSmith.getFullName());
