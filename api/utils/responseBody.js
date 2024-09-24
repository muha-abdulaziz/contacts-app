/**
 * This module to simplify the change of response body
 */

/**
 * Generate response body
 *
 * @param {string} message - short message describs the status of the request
 * @param {*} data - any thing need to send to the client
 * @param {*} [error] - error message and/or stack [NOT-for-PRODUCTION]
 *
 * @returns {Object}
 */
module.exports = (message, data, error) => {
  if (!message) throw new Error('message is required');
  return {
    message,
    data: data || null,
    error: error || undefined,
  };
};
