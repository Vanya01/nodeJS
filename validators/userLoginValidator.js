const Joi = require('joi');

const {needs} = require('../Config');

const authValidator = Joi.object({
    email: Joi
        .string()
        .regex(needs.EMAIL_REGEXP)
        .required(),
    password: Joi
        .string()
        .regex(needs.PASSWORD_REGEXP)
        .min(5)
        .max(30)
        .trim()
        .required()
});

module.exports = {
    authValidator
};
