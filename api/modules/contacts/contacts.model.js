const contacts = [];

module.exports = {
  add: contact => {},

  find: () => {
    return new Promise(resolve => {
      resolve(contacts);
    });
  },

  findById: id => {},

  delete: id => {},

  update: id => {},
};
