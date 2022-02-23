const express = require('express');
const router = express.Router();
const {
  loginSchema,
} = require('../../utils/validation-schemas/account');
const { account } = require('../../helpers/controller.repository');

router.post('/login', loginSchema, account.loginUser);

module.exports = router;
