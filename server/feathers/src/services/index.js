const users = require('./users/users.service.js');
const products = require('./products/products.service');
const tags = require('./tags/tags.service');
// eslint-disable-next-line no-unused-vars
module.exports = function (app) {
  app.configure(users);
  app.configure(products);
  app.configure(tags);
};

// page to put models in
