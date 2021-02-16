import BankDetail from "../../dist/models/BankDetail";
import { status } from '../helpers';
module.exports = class BankDetail {
  /**
   * Add account
   * @param {Object} req
   * @param {Object} res
   * @param {Object} next
   * @returns {Object} Bank Detail Object
   */
  static async add(req, res, next) {
      const {accountName, bankName, accountNumber} = req.body;
      const {id} = req.user;
    return res.status(200).send({ message: "get all bank details" });
  }
  /**
   * Get all bank details
   * @param {Object} req
   * @param {Object} res
   * @param {Object} next
   * @returns {Object} Bank Detail Objects
   */
  static async getAll(req, res, next) {
    return res.status(status.success).send({ message: "get all bank details" });
  }
  /**
   * Get bank detail by id
   * @param {Object} req
   * @param {Object} res
   * @param {Object} next
   * @returns {Object} Bank Detail Object
   */
  static async getOne(req, res, next) {
    return res.status(200).send({ message: "get bank detail by id" });
  }
};
