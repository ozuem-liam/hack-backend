const mongoose = require('mongoose');

const account = {
  username: {
    type: String,
    lowercase: true,
    required: true,
  },
  password: {
    type: String,
    required: true,
    trim: true
  },
};

const accountDBSchema = mongoose.Schema(account);
module.exports = { accountDBSchema };
