const express = require('express');
const responseBody = require('../../utils/responseBody');
const logger = require('../../utils/logger');
const validateSchema = require('../../utils/validateSchema');
const contactModel = require('./contacts.model');
const contactSchemas = require('./contactValidationSchema');

const router = express.Router();

router.get('/', async (_req, res) => {
  try {
    const contacts = await contactModel.find();

    const resMesg = 'contacts retrived successfuly';
    const resBody = responseBody(resMesg, contacts);

    return res.json(resBody);
  } catch (err) {
    logger.error(`error [GET] @contacts controller: -> ${err}`);
    const resBody = responseBody('Server Error');

    return res.status(500).json(resBody);
  }
});

router.post('/', async (req, res) => {
  const contact = req.body;

  try {
    await validateSchema(contact, contactSchemas.createContact);
  } catch (err) {
    logger.info(`error while validating contact: -> ${err}`);
    const resBody = responseBody('validation error', err);
    return res.status(422).json(resBody);
  }

  try {
    contact.userId = req.user.id;
    const createdContact = await contactModel.add(contact);

    const resMesg = 'contact created successfuly';
    const resBody = responseBody(resMesg, createdContact);

    return res.status(200).json(resBody);
  } catch (err) {
    logger.error(`error [POST] @contacts controller: -> ${err}`);
    const resBody = responseBody('Server Error');

    return res.status(500).json(resBody);
  }
});

module.exports = router;
