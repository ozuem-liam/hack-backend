const { body } = require('express-validator'),
  messages = require('../../translation/messages.json');

const loginSchema = [
  body('username').notEmpty().withMessage({ 'any.required': messages['ACT-LASTNAME-REQUIRED'] }),
  body('password').notEmpty().withMessage({ 'any.required': messages['ACT-PASSWORD-REQUIRED'] }),
];

module.exports = {loginSchema};
