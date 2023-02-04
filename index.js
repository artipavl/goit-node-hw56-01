const argv = require("yargs").argv;

const contacts = require("./contacts");

async function invokeAction({ action, id, name, email, phone }) {
  switch (action) {
    case "list":
      const allContacts = await contacts.listContacts();
      console.log(allContacts);
      break;

    case "get":
      const getContact = await contacts.getContactById(id);
      if (getContact) {
        console.log(getContact);
      } else {
        console.log(`Контак з id=${id} відсутній`);
      }

      break;

    case "add":
      const addContact = await contacts.addContact(name, email, phone);
      console.log(addContact);
      break;

    case "remove":
      const removeContact = await contacts.removeContact(id);
      if (removeContact) {
        console.log(removeContact);
      } else {
        console.log(`Контак з id=${id} відсутній`);
      }
      break;

    default:
      console.warn("\x1B[31m Unknown action type!");
  }
}

invokeAction(argv);
