const contacts = [];

let lastId = 0;

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
      console.log('contactId', contactId);

      let contact;
      const contactsLen = contacts.length;

      for (let i = 0; i < contactsLen; i++) {
        contact = contacts[i];
        if (contact.id === contactId) {
          return resolve(contact);
        }
      }

      return resolve([]);
    });
  },

  delete: id => {},

  update: id => {},
};
