const fs = require("fs");

const addPerson = (id, fname, lname, age, city) => {
  const Persons = loadPersons();
  const samePerson = Persons.filter((p) => {
    return p.id == id;
  });
  if (samePerson.length == 0) {
    Persons.push({
      id: id,
      fname: fname,
      lname: lname,
      age: age,
      city: city,
    });
    savePersons(Persons);
  } else {
    console.log(
      "error person id is duplicated , Enter another id and tyy again"
    );
  }
};
const loadPersons = () => {
  try {
    const dataJSON = fs.readFileSync("../Persons/Persons.json").toString();
    return JSON.parse(dataJSON);
  } catch {
    return [];
  }
};
const savePersons = (Persons) => {
  const savedataJson = JSON.stringify(Persons);
  fs.writeFileSync("../Persons/Persons.json", savedataJson);
};

const deletePerson = (id) => {
  const Persons = loadPersons();
  const data_notDeleted = Persons.filter((p) => {
    return p.id != id;
  });
  console.log("you deleted a person");
  savePersons(data_notDeleted);
};

const readPerson = (id) => {
  const Persons = loadPersons();
  const person_found = Persons.find((p) => {
    return p.id == id;
  });

  if (person_found) {
    console.log(person_found);
  } else {
    console.log("Error: Person not found");
  }
};

const listPersons = () => {
  const Persons = loadPersons();
  console.log("Number of Persons is", Persons.length);
  Persons.forEach((p) => {
    console.log(p.fname, p.age, p.city);
  });
};

module.exports = { addPerson, deletePerson, readPerson, listPersons };
