const status = require("./status");
/**
 *  Success (200)
 * @param {objObjectect} messageObj message object
 * @param {Object} res response object
 * @returns {Object} OK
 */
const success = (messageObj, res) => {
  return res.status(status.success).json(messageObj);
};
/**
 * Bad Response (400)
 * @param {Object} messageObj message object
 * @param {Object} res response object
 * @returns {Object} Bad Response
 */
const error = (messageObj, res) => {
  return res.status(status.bad).json(messageObj);
};
module.exports = {
  success,
  error
}