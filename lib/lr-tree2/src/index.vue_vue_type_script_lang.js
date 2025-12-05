"use strict";
const treeNode2 = require("./tree-node2.js");
const vue_runtime_esm = require("../../node_modules/vue/dist/vue.runtime.esm.js");
const _sfc_main = vue_runtime_esm.defineComponent({
  name: "LrTree2",
  components: {
    LrTreeNode2: treeNode2
  },
  props: {
    dataSource: {
      type: Object,
      default: () => ({})
    },
    arrow: {
      type: Boolean,
      default: false
    },
    mode: {
      type: String,
      default: "horizontal"
    },
    backgroundColor: {
      type: String,
      default: "#fff"
    },
    borderColor: {
      type: String,
      default: "rgba(219, 219, 219, 1)"
    },
    scale: {
      type: Boolean,
      default: true
    }
  },
  data() {
    return {
      containerRef: void 0,
      contentRef: void 0,
      canvasRef: void 0,
      scaleValue: 1,
      canvasMinWidth: "max-content",
      isHideScroll: false
    };
  },
  methods: {
    toScale(type, value) {
      console.log(type, value);
      this.$nextTick(() => {
        const rect = this.$refs["canvasRef"].getBoundingClientRect();
        let scale = 1;
        if (type === "+") {
          scale = Math.round((this.scaleValue + value) * 100) / 100;
        } else {
          if (this.scaleValue < value) {
            return;
          } else {
            scale = Math.round((this.scaleValue - value) * 100) / 100;
          }
        }
        const beforeScale = Math.round(this.scaleValue * 100) / 100;
        this.scaleValue = scale;
        this.canvasMinWidth = rect.width / beforeScale * scale + 36 + "px";
        this.isHideScroll = this.$refs["containerRef"].getBoundingClientRect().width - rect.width / beforeScale * scale + 36 > 0;
      });
    }
  },
  watch: {
    dataSource: {
      handler() {
        this.toScale("+", 0);
      },
      deep: true
    }
  }
});
module.exports = _sfc_main;
