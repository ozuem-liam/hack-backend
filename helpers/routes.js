const accountRoutes = require('../apis/accountModule/account.route');
const pspOperatorRoutes = require('../apis/pspOperatorModule/psp.operator.route');
const tariffRoutes = require('../apis/tariffModule/tariff.route');
const facilityRoutes = require('../apis/facilityModule/facility.route');
const categoryRoutes = require('../apis/categoryModule/category.route');
const invoiceRoutes = require('../apis/invoiceModule/invoice.route');

module.exports = function (app) {
  app.use('/account', accountRoutes);
  app.use('/psp', pspOperatorRoutes);
  app.use('/tariff', tariffRoutes);
  app.use('/facility', facilityRoutes);
  app.use('/category', categoryRoutes);
  app.use('/invoice', invoiceRoutes);
};
