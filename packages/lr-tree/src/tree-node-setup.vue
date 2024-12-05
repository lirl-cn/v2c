<template>
  <div class="lr-tree-node-container">
    <slot
      name="node"
      v-bind:data="props.data"
      v-bind:ids="
        (props.baseKey
          ? [props.baseKey, props.data?.id].join(SPACER)
          : props.data?.id
        )?.split(SPACER)
      "
    >
      {{ renderText(props.data) }}
    </slot>
    <i v-if="props.data?.children?.length" />
    <div v-if="props.data?.children?.length > 1" class="lr-tree-node--inner">
      <div v-for="node in props.data?.children" :key="node.id">
        <i
          v-if="!(props.arrow === false || node.arrow === false)"
          class="lr-tree-node-arrow"
        />
        <LrTreeNode
          :data="node"
          :arrow="props.arrow"
          :base-key="
            props.baseKey
              ? [props.baseKey, props.data?.id].join(SPACER)
              : props.data?.id
          "
        >
          <template #node="{ data, ids }">
            <slot name="node" v-bind:data="data" v-bind:ids="ids"></slot>
          </template>
        </LrTreeNode>
      </div>
    </div>
    <div
      v-else-if="props.data?.children?.length === 1"
      style="padding-left: 8px;"
    >
      <div style="position: relative">
        <i
          v-if="
            !(
              props.arrow === false ||
              props.data?.children?.[0]?.arrow === false
            )
          "
          class="lr-tree-node-arrow"
        />
        <LrTreeNode
          :data="props.data.children?.[0]"
          :base-key="
            props.baseKey
              ? [props.baseKey, props.data?.id].join(SPACER)
              : props.data?.id
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
<script setup lang="ts">
import LrTreeNode from './tree-node.vue'
export type DataType = {
  id: string
  text?: string
  type?: string
  arrow?: boolean
  data?: Record<string, any>
  children?: DataType[]
}
const SPACER: string = 'lr*tree^spacer'
const props = withDefaults(
  defineProps<{
    data: DataType
    arrow?: boolean
    mode?: 'horizontal' | 'vertical'
    baseKey?: string
  }>(),
  {
    mode: 'horizontal'
  }
)
const renderText = (data?: DataType) => {
  return data?.text || data?.id
}
</script>
<style lang="scss">
$borderColor: var(--lr-tree-border-color);
$borderWidth: 1px;
.lr-tree-node-container {
  display: flex;
  align-items: center;
  > i {
    display: block;
    width: 40px;
    height: $borderWidth;
    background-color: $borderColor;
    margin-left: 8px;
  }
}
.lr-tree-node--inner {
  display: flex;
  flex-direction: column;
  gap: 20px;
  padding-left: 38px;
  border-left: $borderWidth solid $borderColor;
  > div {
    position: relative;
    &::before {
      content: ' ';
      position: absolute;
      width: 31px;
      height: $borderWidth;
      background-color: $borderColor;
      left: -39px; // border width发生变化时需要动态调整
      top: 50%;
      transform: translateY(-50%);
      z-index: 2;
    }
    &:first-child::after,
    &:last-child::after {
      content: ' ';
      width: 4px;
      height: 50%;
      position: absolute;
      background-color: var(--lr-tree-bg-color);
      left: -41px;
    }
    &:first-child::after {
      top: 0;
    }
    &:last-child::after {
      bottom: 0;
    }
  }
}
.lr-tree-node-arrow {
  position: absolute;
  top: 50%;
  left: -12px;
  width: 0;
  height: 0;
  margin-top: -3px;
  border-left: 6px solid transparent;
  border-right: 6px solid transparent;
  border-bottom: 6px solid $borderColor;
  font-size: 0;
  line-height: 0;
  transform: rotate(90deg);
}
</style>
