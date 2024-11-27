<template>
  <div class="lr-tree-node-container2">
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
    <i v-if="data?.children?.length > 1" />
    <div v-if="data?.children?.length > 1" class="lr-tree-node--inner2">
      <div v-for="node in data?.children" :key="node.id">
        <LrTreeNode2
          :data="node"
          :base-key="
            baseKey
              ? [baseKey, data?.id].join(SPACER)
              : data?.id
          "
        >
          <template #node="{ data, ids }">
            <slot name="node" v-bind:data="data" v-bind:ids="ids"></slot>
          </template>
        </LrTreeNode2>
      </div>
    </div>
    <div v-else-if="data?.children?.length === 1">
      <div class="lr-tree-node--inner2-c" style="position: relative; left: -11px">
        <LrTreeNode2
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
        </LrTreeNode2>
      </div>
    </div>
  </div>
</template>
<script lang="ts">
import { defineComponent, PropType } from 'vue'
export type DataType = {
  id: string
  text?: string
  type?: string
  data?: Record<string, any>
  children?: DataType[]
}
export default defineComponent({
  name: 'LrTreeNode2',
  props: {
    data: {
      type: Object as PropType<DataType>,
      default: () => ({})
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
  data(){
    return {
      SPACER: 'lr*tree^spacer'
    }
  },
  methods: {
    renderText(data?: DataType){
      return data?.text || data?.id
    }
  },
})
</script>
