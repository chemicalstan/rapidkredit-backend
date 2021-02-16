require('dotenv').config();
const jwt = require("jsonwebtoken");
const bcrypt = require("bcrypt");

/**
 * Generate Token
 * @param {string} email
 * @param {uuid} id
 * @param {string} first_name
 * @param {string} last_name
 * @param {string} phone
 * @param {string} country
 * @returns {string} token
 */

const generateUserToken = (email, id, first_name, last_name, phone, country) => {
  const token = jwt.sign(
    {
      email,
      user_id: id,
      first_name,
      last_name,
      phone,
      country
    },
    process.env.SECRETE,
    { expiresIn: "3d" }
  );
  return token;
};

/**
 * Hash password
 * @param {string} password
 * @returns {string} hashed password
 */

const hashPassword = password => {
  const saltRounds = 10;
  return bcrypt.hashSync(password, saltRounds);
};
/**
 * Compare sing in password
 * @param {string} password
 * @param {hash}  hashedPassword
 * @returns {boolean} True or False
 */
const comparePassword = (password, hash) => {
  return bcrypt.compareSync(password, hash);
};

module.exports = {
  generateUserToken,
  hashPassword,
  comparePassword
};
