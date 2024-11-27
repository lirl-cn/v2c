<template>
  <div class="lr-tree-node-container">
    <slot
      name="node"
      v-bind:data="data"
      v-bind:ids="
        (baseKey
          ? [baseKey, data?.id].join(SPACER)
          : data?.id
        )?.split(SPACER)
      "
    >
      {{ renderText(data) }}
    </slot>
    <i v-if="data?.children?.length" />
    <div v-if="data?.children?.length > 1" class="lr-tree-node--inner">
      <div v-for="node in data?.children" :key="node.id">
        <i
          v-if="!(arrow === false || node.arrow === false)"
          class="lr-tree-node-arrow"
        />
        <LrTreeNode
          :data="node"
          :arrow="arrow"
          :base-key="
            baseKey
              ? [baseKey, data?.id].join(SPACER)
              : data?.id
          "
        >
          <template #node="{ data, ids }">
            <slot name="node" v-bind:data="data" v-bind:ids="ids"></slot>
          </template>
        </LrTreeNode>
      </div>
    </div>
    <div
      v-else-if="data?.children?.length === 1"
      style="padding-left: 8px;"
    >
      <div style="position: relative">
        <i
          v-if="
            !(
              arrow === false ||
              data?.children?.[0]?.arrow === false
            )
          "
          class="lr-tree-node-arrow"
        />
        <LrTreeNode
          :data="data.children?.[0]"
          :base-key="
            baseKey
              ? [baseKey, data?.id].join(SPACER)
              : data?.id
          "
        >
          <template #node="{ data, ids }">
            <slot name="node" v-bind:data="data" v-bind:ids="ids"></slot>
          </template>
        </LrTreeNode>
      </div>
    </div>
  </div>
</template>
<script lang="ts">
// import LrTreeNode from './tree-node.vue'
import {PropType} from "vue";
export type DataType = {
  id: string
  text?: string
  type?: string
  arrow?: boolean
  data?: Record<string, any>
  children?: DataType[]
}

export default {
  name: 'LrTreeNode',
  props: {
    data: {
      type: Object as PropType<DataType>,
      default: () => ({})
    },
    arrow: {
      type: Boolean,
      default: false
    },
    mode: {
      type: String as PropType<'horizontal' | 'vertical'>,
      default: 'horizontal'
    },
    baseKey: {
      type: String,
      default: ''
    }
  },
  data() {
    return {
      SPACER: 'lr*tree^spacer'
    }
  },
  methods: {
    renderText(data?: DataType){
      return data?.text || data?.id
    }
  },
}

</script>
