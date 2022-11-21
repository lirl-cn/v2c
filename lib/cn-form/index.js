"use strict";
const index = require("./src/index.js");
index.install = function(Vue) {
  Vue.component(index.name, index);
};
module.exports = index;
