const { status } = require('../helpers');
const Joi = require("joi");
const { errorRes } = require("./messages");

module.exports = class Validate {
  /**
   * Validate login payload
   * @param {Object} Request
   * @param {Object} Response
   * @param {Object} NextFuction
   */
  static async validatelogin(req, res, next) {
    const Schema = Joi.object({
      email: Joi.string()
        .email({ minDomainSegments: 2, tlds: { allow: ["com", "net"] } })
        .required()
        .messages({
          "any.required": "email is required.",
          "string.email": "invalid email.",
          "string.base": "email should be a string.",
          "string.empty": "email is required."
        }),
      password: Joi.string()
        .min(8)
        .required()
        .messages({
          "any.required": "password is required.",
          "string.empty": "password is required.",
          "string.min": "password should be atleast 8 characters."
        })
    });

    try {
      await Schema.validateAsync(req.body, { abortEarly: false });
      next();
    } catch (err) {
      errorRes.message = err.details[0].message;
      return res.status(status.unauthorized).send(errorRes)  // Forbidden;
    }
  }
  /**
   * Validate login payload
   * @param {Object} Request
   * @param {Object} Response
   * @param {Object} NextFuction
   */
  static async validatesignup(req, res, next) {
    const Schema = Joi.object({
      firstName: Joi.string()
        .min(2)
        .required()
        .messages({
          "any.required": "first name is required.",
          "string.empty": "first name is required.",
          "string.min": "first name should be atleast 2 characters."
        }),
      lastName: Joi.string()
        .min(2)
        .required()
        .messages({
          "any.required": "last name is required.",
          "string.empty": "last name is required.",
          "string.min": "last name should be atleast 2 characters."
        }),
      password: Joi.string()
        .min(8)
        .required()
        .messages({
          "any.required": "password is required.",
          "string.empty": "password is required.",
          "string.min": "password should be atleast 8 characters."
        }),
      email: Joi.string()
        .email({ minDomainSegments: 2, tlds: { allow: ['com', "net"] } })
        .required()
        .messages({
          "any.required": "email is required.",
          "string.email": "invalid email.",
          "string.base": "email should be a string.",
          "string.empty": "email is required."
        }),
      phone: Joi.string()
        .min(11)
        .required()
        .messages({
          "any.required": "phone is required.",
          "string.empty": "phone is required.",
          "string.min": "phone should be atleast 11 digits."
        }),
      country: Joi.string()
        .required()
        .min(2)
        .messages({
          "any.required": "country is required.",
          "string.empty": "country is required.",
          "string.min": "invalid country."
        })
    });
    try {
        await Schema.validateAsync(req.body, { abortEarly: false });
        next();
      } catch (err) {
        errorRes.message = err.details[0].message;
        return res.status(status.unauthorized).send(errorRes) // Forbidden;
      }
  }
};
