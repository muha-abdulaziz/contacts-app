const responseBody = require('../utils/responseBody');

module.exports = (req, res, next) => {
  if (!req.headers.authorisation) {
    const resMesg = 'You Can not use this resource';
    const resBody = responseBody(resMesg);

    return res.status(403).send(resBody);
  }

  next();
};
