import "../../cn-badge/index.js";
import normalizeComponent from "../../_virtual/_plugin-vue2_normalizer.js";
import CnBadge from "../../cn-badge/src/index.js";
const _sfc_main = {
  components: {
    CnBadge
  },
  name: "SubColumn",
  props: {
    dataIndex: {
      type: String
    },
    status: {
      type: String
    },
    title: {
      type: String
    },
    className: {
      type: String
    },
    fixed: {
      type: String
    },
    width: {
      type: String | Number
    },
    minWidth: {
      type: String | Number
    },
    valueEnum: {
      type: Object
    },
    ellipsis: {
      type: Boolean
    },
    children: {
      type: Array
    },
    rend: {
      type: Function
    },
    autoCalcWidth: {
      type: Boolean | Number,
      default: false
    }
  },
  watch: {},
  methods: {
    deepRenderText(record, keys) {
      if (!record[keys[0]]) {
        return "-";
      }
      if (keys.length === 1) {
        return record[keys[0]];
      }
      return this.deepRenderText(record[keys[0]], keys.slice(1));
    },
    renderText(record, dataIndex, valueEnum) {
      const keys = dataIndex.split(".");
      let current;
      if (keys.length === 1) {
        current = valueEnum ? valueEnum[record[dataIndex]] : record[dataIndex];
      } else {
        current = valueEnum ? valueEnum[this.deepRenderText(record, keys)].text : this.deepRenderText(record, keys);
      }
      if (valueEnum && current) {
        return {
          text: current.text !== void 0 && current.text !== null ? current.text : "-",
          status: current.status
        };
      } else {
        return current !== void 0 && current !== null ? current : "-";
      }
    }
  }
};
var _sfc_render = function render() {
  var _vm = this, _c = _vm._self._c;
  return _vm.children && _vm.children.length ? _c("el-table-column", { attrs: { "label": _vm.title } }, _vm._l(_vm.children, function(item, index) {
    return _c("sub-column", { key: item.title + item.dataIndex + index, attrs: { "width": item.width || "max-content", "minWidth": item.minWidth || "max-content", "ellipsis": item.ellipsis, "fixed": item.fixed, "title": item.title, "dataIndex": item.dataIndex, "status": item.status, "valueEnum": item.valueEnum, "children": item.children, "rend": item.render, "className": item.className, "autoCalcWidth": _vm.autoCalcWidth } });
  }), 1) : _c("el-table-column", { key: _vm.title, attrs: { "column-key": _vm.dataIndex, "prop": _vm.dataIndex, "label": _vm.title, "width": _vm.width, "min-width": _vm.autoCalcWidth !== false ? _vm.title.length > 3 ? _vm.title.length / 4 * _vm.autoCalcWidth + 20 : 80 : _vm.minWidth, "show-overflow-tooltip": _vm.ellipsis, "fixed": _vm.fixed, "class-name": _vm.className }, scopedSlots: _vm._u([{ key: "default", fn: function({ row }) {
    return [_vm._t(_vm.dataIndex, function() {
      return [_vm.status || _vm.valueEnum ? _c("cn-badge", { attrs: { "status": _vm.valueEnum ? _vm.renderText(row, _vm.dataIndex, _vm.valueEnum).status : _vm.status, "text": _vm.valueEnum ? _vm.renderText(row, _vm.dataIndex, _vm.valueEnum).text : _vm.renderText(row, _vm.dataIndex) } }) : _vm._e(), !_vm.status && !_vm.valueEnum ? [_vm._v(_vm._s(_vm.rend ? _vm.rend(_vm.renderText(row, _vm.dataIndex, _vm.valueEnum), row) : _vm.renderText(row, _vm.dataIndex, _vm.valueEnum)))] : _vm._e()];
    }, { "record": row, "text": _vm.renderText(row, _vm.dataIndex) })];
  } }], null, true) });
};
var _sfc_staticRenderFns = [];
var __component__ = /* @__PURE__ */ normalizeComponent(
  _sfc_main,
  _sfc_render,
  _sfc_staticRenderFns,
  false,
  null,
  null,
  null,
  null
);
const CnColumn = __component__.exports;
export {
  CnColumn as default
};
