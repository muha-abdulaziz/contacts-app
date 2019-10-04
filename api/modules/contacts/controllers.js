const express = require('express');
const responseBody = require('../../utils/responseBody');
const contactModel = require('./contacts.model');

const router = express.Router();

router.get('/', async (_req, res) => {
  try {
    const contacts = await contactModel.find();

    const resMesg = 'contacts retrived successfuly';
    const resBody = responseBody(resMesg, contacts);

    return res.json(resBody);
  } catch (err) {
    const resBody = responseBody('Server Error');

    return res.status(500).json(resBody);
  }
});

module.exports = router;
