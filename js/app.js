const yargs = require("yargs");
const functions = require("./functions");

yargs.command({
  command: "add",
  describe: "Add an item",
  builder: {
    id: {
      describe: "added id",
      demandOption: true,
      type: "string",
    },
    fname: {
      describe: "added first name",
      demandOption: true,
      type: "string",
    },
    lname: {
      describe: "added last name",
      demandOption: true,
      type: "string",
    },
    age: {
      describe: "added age",
      demandOption: true,
      type: "string",
    },
    city: {
      describe: "added city",
      demandOption: true,
      type: "string",
    },
  },
  handler: (p) => {
    functions.addPerson(p.id, p.fname, p.lname, p.age, p.city);
  },
});

yargs.command({
  command: "delete",
  describe: "delete a person by its id",
  handler: (p) => {
    functions.deletePerson(p.id);
  },
});

yargs.command({
  command: "read",
  describe: "read specific person by its id",
  builder: {
    id: {
      describe: "id for data to be read",
      demandOption: true,
      type: "string",
    },
  },
  handler: (p) => {
    functions.readPerson(p.id);
  },
});

yargs.command({
  command: "list",
  describe: "get first name , age and city of all persons",
  handler: () => {
    functions.listPersons();
  },
});

yargs.parse();