"use strict";
const index = require("./src/index.js");
index.install = function(Vue) {
  Vue.component(index.name || "LrTree2", index);
};
module.exports = index;
