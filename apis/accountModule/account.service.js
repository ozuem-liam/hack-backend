const { Account } = require('./account.model');
const messages = require('../../translation/messages.json');
const { jwtTokens } = require('../../utils/jwt-helper');

const loginUser = async ({ username, password }) => {
  let message;
  const account = await Account.findOne({ username });
  if (account) {
    if (await account.isAMatchPassword(password)) {
      // sign a token
      const { _id, first_name, last_name, role } = account;
      const { accessToken } = jwtTokens({ _id, first_name, last_name, role });
      message = messages['ACT-LOGIN-SUCCESS'];
      account.last_login = Date.now();
      account.save();
      return { isSuccess: true, account, message, accessToken };
    } else {
      message = messages['ACT-INVALID-LOGIN'];
      return { isSuccess: false, message };
    }
  }
  message = messages['USER-NOT-FOUND'];
  return { isSuccess: false, message };
};

module.exports = { loginUser };
