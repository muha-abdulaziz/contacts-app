const Joi = require('@hapi/joi');
const logger = require('./logger');

module.exports = async (data, schema) => {
  if (!Joi.isSchema(schema)) throw new Error('invalidSchema');
  try {
    const value = await schema.validateAsync(data);
    logger.verbose('@validateInputSchemas');
    logger.verbose('value: ', value);

    return value;
  } catch (err) {
    logger.verbose('@validateInputSchemas');
    logger.verbose('error: ', err);
    return Promise.reject(err);
  }
};
