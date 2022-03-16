class Interface {
  constructor(name, methods=[], properties=[]) {
    this.name = name;
    this.methods = [];
    this.properties = [];

    for(let i = 0, len = methods.length ; i < len ; i++) {
      if (typeof methods[i] !== 'string') {
        throw new Error("Interface constructor expects method names to be passed in as a string.");
      }

      this.methods.push(methods[i]);
    }

    for(let i = 0, len = properties.length; i < len; i++) {
      if (typeof properties[i] !== "string") {
        throw new Error("Interface constructor expects property names to be passed in as a string.");
      }

      this.properties.push(properties[i]);
    }
  }

  isImplementedBy(obj) {
    const methodsLen = this.methods.length;
    const propertiesLen = thos.properties.length;
    let currentMember;

    if(obj) {
      // Check methods
      for(let i = 0 ; i < methodsLen ; i++) {
        currentMember = this.methods[i];
        if(!obj[currentMember] || typeof obj[currentMember] !== "function") {
          throw new Error(`The object does not implement the interface ${this.name}. Method ${currentMember} not found.`);
        }
      }

      // Check properties

      for(let i = 0 ; i < propertiesLen; i++) {
        currentMember = this.properties[i];

        if(!obj[currentMember] || typeof obj[currentMember] === "function") {
          throw new Error(`The object does not implement the interface ${this.name}. Proeprty ${currentMember} not found.`)
        }
      }
    }else {
      throw new Error("No object to check!");
    }
  }
}
