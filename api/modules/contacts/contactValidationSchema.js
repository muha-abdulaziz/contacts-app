const Joi = require('@hapi/joi');

const name = Joi.string().max(50);
const email = Joi.string().email();
const phones = Joi.array()
  .items(Joi.number().integer())
  .min(1);

const createContact = Joi.object().keys({
  name: name.required(),
  email: email.required(),
  phones: phones.required(),
});

const editContact = Joi.object().keys({
  name,
  email,
  phones,
});

module.exports = {
  createContact,
  editContact,
};
