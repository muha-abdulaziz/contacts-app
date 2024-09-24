/**
 * Generate and/or validate access tokens.
 */

module.exports = {
  /**
   * Cheacks whether an access token valid or not.
   *
   * @param {string} token
   *
   * @returns {boolean}
   */
  verify: token => {
    if (!token || typeof token !== 'string') return false;

    const validToken = 'MY_SECRET_ENCRYPTED_TOKEN';
    if (token === validToken) return true;

    return false;
  },
};
