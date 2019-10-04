const express = require('express');

const router = express.Router();

router.get('/', (_req, res) => {
  return res.status(501).send('Not Implemented');
});

module.exports = router;
