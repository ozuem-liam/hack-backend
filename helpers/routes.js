const accountRoutes = require('../apis/accountModule/account.route');
const uploadRoutes = require('../apis/uploadModule/upload.route');

module.exports = function (app) {
  app.use('/account', accountRoutes);
  app.use('/image', uploadRoutes);
};
