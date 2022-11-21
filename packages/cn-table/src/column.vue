<template>
  <el-table-column v-if="children && children.length" :label="title">
    <sub-column
      v-for="(item, index) in children"
      :key="item.title + item.dataIndex + index"
      :width="item.width || 'max-content'"
      :minWidth="item.minWidth || 'max-content'"
      :ellipsis="item.ellipsis"
      :fixed="item.fixed"
      :title="item.title"
      :dataIndex="item.dataIndex"
      :status="item.status"
      :valueEnum="item.valueEnum"
      :children="item.children"
      :rend="item.render"
      :className="item.className"
      :autoCalcWidth="autoCalcWidth"
    >
    </sub-column>
  </el-table-column>
  <el-table-column
    v-else
    :column-key="dataIndex"
    :key="title"
    :prop="dataIndex"
    :label="title"
    :width="width"
    :min-width="autoCalcWidth !== false ? (title.length > 3 ? title.length / 4 * autoCalcWidth + 20 : 80) : minWidth"
    :show-overflow-tooltip="ellipsis"
    :fixed="fixed"
    :class-name="className"
  >
    <template slot-scope="{ row }">
      <slot
        :name="dataIndex"
        v-bind:record="row"
        v-bind:text="renderText(row, dataIndex)"
      >
        <cn-badge
          v-if="status || valueEnum"
          :status="
            valueEnum ? renderText(row, dataIndex, valueEnum).status : status
          "
          :text="
            valueEnum
              ? renderText(row, dataIndex, valueEnum).text
              : renderText(row, dataIndex)
          "
        ></cn-badge>
        <template v-if="!status && !valueEnum">{{
          rend ? rend(renderText(row, dataIndex, valueEnum), row) : renderText(row, dataIndex, valueEnum)
        }}</template>
      </slot>
    </template>
  </el-table-column>
</template>
<script>
import CnBadge from "../../cn-badge";
// import SubColumn from "./column.vue";
export default {
  components: {
    CnBadge,
  },
  name: 'SubColumn',
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
      default: false,
    }
  },
  watch: {
    // autoCalcWidth: {
    //   handler(val){
    //     console.log('autoCalcWidth', val)
    //   },
    //   immediate: true,
    //   deep: true
    // },
    // rend: {
    //   handler(val){
    //     // console.log(val)
    //   },
    //   immediate: true,
    //   deep: true
    // }
  },
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
        current = valueEnum
          ? valueEnum[this.deepRenderText(record, keys)].text
          : this.deepRenderText(record, keys);
      }
      if (valueEnum && current) {
        return {
          text:
            current.text !== undefined && current.text !== null
              ? current.text
              : "-",
          status: current.status
        };
      } else {
        return current !== undefined && current !== null ? current : "-";
      }
    }
  }
};
</script>
