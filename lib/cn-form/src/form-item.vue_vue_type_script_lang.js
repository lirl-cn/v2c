"use strict";
require("../../index.js");
require("../../cn-tags/index.js");
const index = require("../../cn-tags/src/index.js");
const _sfc_main = {
  components: { CnTags: index },
  props: {
    title: {
      type: String
    },
    separator: {
      type: String
    },
    placeholder: {
      type: String
    },
    startPlaceholder: {
      type: String
    },
    endPlaceholder: {
      type: String,
      default: "\u7ED3\u675F\u65E5\u671F"
    },
    type: {
      type: String,
      default: "input"
    },
    name: {
      type: String,
      required: true
    },
    options: {
      type: Array,
      default: void 0
    },
    hide: {
      type: Boolean,
      default: false
    },
    clearable: Boolean,
    formItemProps: {
      type: Object,
      default: void 0
    },
    fieldItemProps: {
      type: Object,
      default: () => ({})
    },
    formModel: {
      type: Object,
      default: () => ({})
    },
    customChangeFormModel: {
      type: Function,
      default: () => {
      }
    }
  },
  computed: {
    onChange() {
      return this.fieldItemProps.onChange ? this.fieldItemProps.onChange : () => {
      };
    }
  }
};
module.exports = _sfc_main;
