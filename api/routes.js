const express = require('express');

const router = express.Router();
const contactRouter = require('./modules/contacts/controllers');

router.use('/contacts', contactRouter);

module.exports = router;
