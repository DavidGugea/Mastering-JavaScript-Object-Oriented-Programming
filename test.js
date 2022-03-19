class Binder {
    bindTo(dataSourceObject, dataSourceProperties, dataTargetList) {
        const bindHandler = {
            set: function(target, property, newValue) {
                const i = dataSourceProperties.indexOf(property);

                if ( i >= 0 ) {
                    target[dataSourceProperties[i]] = newValue;

                    dataTArgetList[i].obj[dataTargetList[i].prop] = newValue;
                }
            }
        }

        return bindHandler;
    }
}

const person = new Person("John", "Smith");
const txtName = document.getElementById("txtName");
const txtSurname = document.getElementById("txtSurname");
const binder = new Binder();

const proxiedPerson = binder.bindTo(
    person,
    ["name", "surname"],
    [
        {obj: txtName, prop: "value"},
        {obj: txtSurname, prop: "value"},
    ]
);

setTimeout(
    () => {
        proxiedPerson.name = "New Name";
    },
    5000
)