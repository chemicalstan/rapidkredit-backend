const User = require("../models/User");
const { v4: uuidv4 } = require("uuid");

module.exports = class UserConroller {
  /**
   * Get all users
   * @param {Object} req
   * @param {Object} res
   * @param {Object} next
   * @returns {Object} Users Object
   */
  static async getAll(req, res, next) {
    return res.status(200).json({ message: "get all users from users table" });
  }
  /**
   * Get user by id
   * @param {Object} req
   * @param {Object} res
   * @param {Object} next
   * @returns {Object} User Object
   */
  static async getOne(req, res, next) {
    return res.status(200).json({message: 'get user from users table by id'});
  }
  /**
   * Get users by ids
   * @param {Object} req
   * @param {Object} res
   * @param {Object} next
   * @returns {Object} User Object
   */
  static async getBulk(req, res, next) {
    return res.status(200).json({message: 'get users from users table by ids'});
  }
  /**
   * Update User
   * @param {Object} req
   * @param {Object} res
   * @param {Object} next
   * @returns {Object} User Object
   */
  static async update(req, res, next) {
    return res.status(200).json({message: 'update a user'});
  }
  /**
   * Delete user
   * @param {Object} req
   * @param {Object} res
   * @param {Object} next
   * @returns {String} Response message
   */
  static async delete(req, res, next) {
    return res.status(200).json({message: 'delete a user'});
  }
  /**
   * Update user
   * @param {Object} req
   * @param {Object} res
   * @param {Object} next
   * @returns {Object} User Object
   */
  static async update(req, res, next) {}
  /**
   * Upload Image
   * @param {Object} req
   * @param {Object} res
   * @param {Object} next
   * @returns {Object} User Image url
   */
  static async uploadImage() {}
};
