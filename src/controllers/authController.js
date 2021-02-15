const User = require('../models/User')
const {v4: uuidv4} = require('uuid');
module.exports = class Auth {
  /**
   * Login
   * @param {Object} req
   * @param {Object} res
   * @param {Object} next
   * @returns {Object} User Credentials
   */
  static async login(req, res, next) {
    const { email, password, phone } = req.body;
    console.log(email, phone, password);

    return res.status(200).json({ message: "login user" });
  }
  /**
   * Signup
   * @param {Object} req
   * @param {Object} res
   * @param {Object} next
   * @returns {Object} User Credentials
   */
  static async signup(req, res, next) {
    const { firstName, lastName, password, email, phone, country } = req.body;
    // converty phone to number datatype
    // phone = phone * 1;
    // const id = `user_${uuidv4()}`;
    const id = uuidv4();
    const imageUrl = "placeholder";
    const data = { id, first_name: firstName, last_name: lastName, password, email, phone, country, image_url: imageUrl };
    const user = await User.query().insert(data)
    // const user = await User.tableName;
    console.log(user);

    return res.status(200).json({ message: "signup user", data: user });
  }
};
