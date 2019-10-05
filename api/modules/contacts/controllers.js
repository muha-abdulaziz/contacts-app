const express = require('express');
const responseBody = require('../../utils/responseBody');
const logger = require('../../utils/logger');
const validateSchema = require('../../utils/validateSchema');
const contactModel = require('./contacts.model');
const contactSchemas = require('./contactValidationSchema');

const router = express.Router();

/**
 * retreve all contacts
 * [TODO] separate logic from the controller
 */
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

/**
 * create a contact
 * [TODO] separate logic from the controller
 */
router.post('/', async (req, res) => {
  const contact = req.body;

  try {
    await validateSchema(contact, contactSchemas.createContact);
  } catch (err) {
    logger.info(`error while validating contact: -> ${err}`);
    const resBody = responseBody('validation error', null, err);
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

/**
 * retreve a contact
 * [TODO] separate logic from the controller
 */
router.get('/:contactId', async (_req, res) => {
  return res.status(501).send('Not Implemented');
});

/**
 * edit a contact
 * [TODO] separate logic from the controller
 */
router.patch('/:contactId', async (_req, res) => {
  return res.status(501).send('Not Implemented');
});

/**
 * delete a contact
 * [TODO] separate logic from the controller
 */
router.delete('/:contactId', async (_req, res) => {
  return res.status(501).send('Not Implemented');
});

module.exports = router;
