const Joi = require('@hapi/joi');
const logger = require('./logger');

/**
 * @param {*} data - data that need to validate
 * @param {object} schema - joi schema
 *
 * @returns {*} - data after validate
 */
module.exports = async (data, schema) => {
  // check if the schema is a Joi schema
  if (!Joi.isSchema(schema)) throw new Error('invalidSchema');

  try {
    const value = await schema.validateAsync(data);
    logger.verbose('@validateInputSchemas');
    logger.verbose('value: ', value);

    // return validated data
    return value;
  } catch (err) {
    logger.verbose('@validateInputSchemas');
    logger.verbose('error: ', err);
    return Promise.reject(err);
  }
};
