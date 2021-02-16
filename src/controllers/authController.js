const {status}  =  require('../helpers');
const { successRes, errorRes } = require("../helpers/messages");
const User = require("../models/User");
const { v4: uuidv4 } = require("uuid");
const {
  hashPassword,
  comparePassword,
  generateUserToken
} = require("../helpers/authentication");
module.exports = class Auth {
  /**
   * Login
   * @param {Object} req
   * @param {Object} res
   * @param {Object} next
   * @returns {Object} User Credentials
   */
  static async login(req, res, next) {
    try {
      const { email, password } = req.body;
      // check if user exists
      const user = await User.query().findOne({ email });
      if (!user) {
        return res
          .status(status.notfound)
          .json({ message: "user does not exist, sign in." });
      }
      // compare password
      if (!comparePassword(password, user.password)) {
        return res.status(status.unauthorized).json({ message: "incorrect password." });
      }
      // delete password from user object
      delete user.password;
      // generate login token
      const token = generateUserToken(
        user.email,
        user.id,
        user.first_name,
        user.last_name,
        user.phone,
        user.country
      );
      successRes.message = "login successful";
      successRes.data = user;
      successRes.data.token = token;
      return res.status(status.success).json(successRes);
    } catch (error) {

      return res.status(status.error).json(errorRes);
    }
  }
  /**
   * Signup
   * @param {Object} req
   * @param {Object} res
   * @param {Object} next
   * @returns {Object} User Credentials
   */
  static async signup(req, res, next) {
    try {
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
      return res.status(status.created).json(successRes);
    } catch (error) {
      if (error.name === "UniqueViolationError") {
        errorRes.message = `${error.columns[0]} already exist`;
        return res.status(status.conflict).send(errorRes)
      }
      console.log(error)
      return res.status(status.error).send({error: error})
    }
  }
};
