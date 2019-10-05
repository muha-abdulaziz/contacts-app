/**
 * mockes database
 */

// container to store the contacts
const contacts = [];

// a counter to track the contact ids
let lastId = 0;

/**
 * helper function to search for a contact by its id
 *
 * @param {number} contactId
 *
 * @returns {object} - contact index and value
 */
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
  /**
   * create a new contact
   *
   * @param {Object} contact - the contact data
   * @param {string} contact.name
   * @param {string} contact.email
   * @param {string[] | number[]} contact.phones
   *
   * @returns {Object} - contact
   */
  add: contact => {
    return new Promise((resolve, reject) => {
      if (!contact) return reject(new TypeError('Missing param: "contact"'));

      // increase the id counter
      lastId += 1;

      // add id for the contact
      contact.id = lastId;
      contacts.push(contact);

      return resolve(contact);
    });
  },

  /**
   * returns all contacts
   *
   * @returns {Object} - contact
   */
  find: () => {
    return new Promise(resolve => {
      resolve(contacts);
    });
  },

  /**
   * search a contact by its id
   *
   * @param {number} contactId
   *
   * @returns {Object} - contact
   */
  findById: contactId => {
    return new Promise((resolve, reject) => {
      if (!contactId) return reject(new Error('missing param: contactId'));

      const contact = getContact(contactId).value;
      return resolve(contact);
    });
  },

  /**
   * search a contact by its id and delete it
   *
   * @param {number} contactId
   *
   * @returns {Object} - the deleted contact
   */
  delete: contactId => {
    return new Promise((resolve, reject) => {
      if (!contactId) return reject(new Error('missing param: contactId'));

      const contact = getContact(contactId);

      // if index is -1 mean contact not exist
      if (contact.index === -1) {
        const notFound = new Error('contact not found');
        return reject(notFound);
      }

      // remove the element
      contacts.splice(contact.index, contact.index);
      return resolve(contact);
    });
  },

  /**
   * search a contact by its id and update it
   *
   * @param {number} contactId
   * @param {Object} newContact - the contact data
   * @param {string} [newContact.name]
   * @param {string} [newContact.email]
   * @param {string[] | number[]} [contact.phones]
   *
   * @returns {Object} - the deleted contact
   */
  update: (contactId, newContact) => {
    return new Promise((resolve, reject) => {
      if (!contactId) return reject(new Error('missing param: contactId'));

      const contact = getContact(contactId);

      // if index is -1 mean contact not exist
      if (contact.index === -1) {
        const notFound = new Error('contact not found');
        return reject(notFound);
      }

      // change provided values
      if (newContact.name) contact.value.name = newContact.name;
      if (newContact.email) contact.value.email = newContact.email;
      if (newContact.phones) contact.value.phones = newContact.phones;

      return resolve(contact);
    });
  },
};
