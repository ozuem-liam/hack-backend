const accountService = require('./account.service');
const { sendSuccess, sendError } = require('../../helpers/response.format');


const loginUser = async (request, response) => {
  const data = request.body;
  const { isSuccess, message, account = {}, accessToken } = await accountService.loginUser(data);
  if (isSuccess) {
    response.cookie = accessToken;
    return sendSuccess({
      response,
      message,
      data: { account, accessToken },
    });
  }
  return sendError({ response, message });
};


module.exports = { loginUser };
