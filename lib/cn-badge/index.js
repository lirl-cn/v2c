"use strict";
const index = require("./src/index.js");
index.install = function(Vue) {
  Vue.component(index.name || "CnBadge", index);
};
module.exports = index;
