const { successRes, errorRes } = require("../helpers/messages");
const User = require("../models/User");
const { v4: uuidv4 } = require("uuid");
const {
  hashPassword,
  comparePassword,
  generateUserToken
} = require("../helpers/validations");
const { success, error } = require("../helpers/response");
module.exports = class Auth {
  /**
   * Login
   * @param {Object} req
   * @param {Object} res
   * @param {Object} next
   * @returns {Object} User Credentials
   */
  static async login(req, res, next) {
    const { email, password } = req.body;
    if (!email) {
      return res.status(401).json({ message: "invalid email." });
    }
    // check if user exists
    const user = await User.query().findOne({ email });
    if (!user) {
      return res.status(401).json({ message: "user does not exist, sign in." });
    }
    // compare password
    if (!comparePassword(password, user.password)) {
      return res.status(401).json({ message: "incorrect password." });
    }
    // delete password from user obj
    delete user.password;
    // generate login token
    const token = generateUserToken(user.email, user.id, user.first_name, user.last_name, user.phone, user.country);

    successRes.message = 'login successful';
    successRes.data = user;
    successRes.data.token = token;
    return res.status(200).json(successRes);
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
    // Generate user id
    const id = uuidv4();
    // Hash user password
    const hashedPassword = hashPassword(password);
    // image_url field placeholder
    const imageUrl = "placeholder";
    const data = {
      id,
      first_name: firstName,
      last_name: lastName,
      password: hashedPassword,
      email,
      phone,
      country,
      image_url: imageUrl
    };
    // Sign up user query
    const user = await User.query().insert(data);
    // Delete password from user obj
    delete user.password;
    successRes.message = "sign up successful.";
    successRes.data = user;
    return res.status(200).json(successRes);
  }
};
