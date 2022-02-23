const AccountController = require('../apis/accountModule/account.controller');
const UploadController = require('../apis/uploadModule/upload.controller');

const controllers = {
  account: AccountController,
  uploadImage: UploadController,
};

module.exports = controllers;
