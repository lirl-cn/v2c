"use strict";
const index = require("./src/index.js");
index.install = function(Vue) {
  Vue.component(index.name || "CnPagination", index);
};
module.exports = index;
