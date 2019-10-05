const express = require('express');

const router = express.Router();
const contactRouter = require('./modules/contacts/controllers');
const isAuthorized = require('./middelwares/isAuthorized');

// protect any routes under this line
router.use(isAuthorized);

router.use('/contacts', contactRouter);

module.exports = router;
