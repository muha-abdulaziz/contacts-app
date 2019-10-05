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

  findById: id => {},

  delete: id => {},

  update: id => {},
};
