const contacts = [];

let lastId = 0;

const getContact = contactId => {
  let contact;
  const contactsLen = contacts.length;
  for (let i = 0; i < contactsLen; i++) {
    contact = contacts[i];
    if (contact.id === contactId) {
      return {
        index: i,
        value: contact,
      };
    }
  }
  return {
    index: -1,
    value: [],
  };
};

module.exports = {
  add: contact => {
    return new Promise((resolve, reject) => {
      if (!contact) return reject(new TypeError('Missing param: "contact"'));

      lastId += 1;
      contact.id = lastId;
      contacts.push(contact);

      return resolve(contact);
    });
  },

  find: () => {
    return new Promise(resolve => {
      resolve(contacts);
    });
  },

  findById: contactId => {
    return new Promise((resolve, reject) => {
      if (!contactId) return reject(new Error('missing param: contactId'));

      const contact = getContact(contactId).value;
      return resolve(contact);
    });
  },

  delete: id => {},

  update: id => {},
};
