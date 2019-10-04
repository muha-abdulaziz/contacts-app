/**
 * Gives a client access to resourse if s/he authorized
 */

const responseBody = require('../utils/responseBody');
const accessToken = require('../utils/accessToken');

module.exports = (req, res, next) => {
  if (!req.headers.authorisation) {
    const resMesg = 'You Can not use this resource';
    const resBody = responseBody(resMesg);

    return res.status(403).send(resBody);
  }

  if (req.headers.authorisation) {
    const token = 'req.headers.authorisation';
    if (accessToken.verify(token)) {
      // add user data (mock the token payload)
      req.user = {
        id: 1,
      };

      next();
    }

    const resMesg = 'You Can not use this resource';
    const resBody = responseBody(resMesg);

    // indicates the authentication scheme
    res.set('WWW-Authenticate', 'test realm="contacts"');

    return res.status(401).send(resBody);
  }
};
