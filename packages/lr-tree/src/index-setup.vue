<template>
  <div ref="containerRef" class="lr-tree-select--container">
    <div
      ref="contentRef"
      class="lr-tree-select-container"
      :style="
        `--lr-tree-bg-color: ${props.backgroundColor}; --lr-tree-border-color: ${props.borderColor};`
      "
    >
      <div class="lr-tree-select-e" :style="{ minWidth: canvasMinWidth }"></div>
      <div
        ref="canvasRef"
        class="lr-tree-select-canvas"
        :style="[
          props.scale ? { transform: `scale(${scaleValue})` } : undefined
        ]"
      >
        <LrTreeNode
          :data="props.dataSource"
          :mode="props.mode"
          :arrow="props.arrow"
        >
          <template #node="{ data }">
            <slot name="node" v-bind:data="data"></slot>
          </template>
        </LrTreeNode>
      </div>
    </div>
    <div v-if="props.scale" class="lr-tree-select-operate">
      <span @click="toScale('+', 0.15)">+</span>
      <i>{{ Math.round(scaleValue * 100) }}%</i>
      <span
        style="padding-bottom: 14px; font-size: 36px"
        @click="toScale('-', 0.15)"
      >
        -
      </span>
    </div>
  </div>
</template>
<script setup lang="ts">
import type { DataType } from './tree-node.vue'
import LrTreeNode from './tree-node.vue'
import {watch, ref, nextTick} from 'vue'
const props = withDefaults(defineProps<{
  dataSource: DataType
  arrow?: boolean
  mode?: 'horizontal' | 'vertical'
  backgroundColor?: string
  borderColor?: string
  scale?: boolean
}>(), {
  mode: 'horizontal',
  backgroundColor: '#fff',
  borderColor: 'rgba(219, 219, 219, 1)',
  scale: true
})

const containerRef = ref()
const scaleValue = ref(1)
const contentRef = ref()
const canvasRef = ref()
const canvasMinWidth = ref<string>('max-content')
const isHideScroll = ref(false)
const toScale = (type: '+' | '-', value: number) => {
  nextTick(() => {
    const rect = canvasRef.value.getBoundingClientRect()
    let scale = 1
    if(type === '+'){
      scale = Math.round((scaleValue.value + value) * 100) / 100
    }else{
      if(scaleValue.value < value){
        return
      }else{
        scale = Math.round((scaleValue.value - value) * 100) / 100
      }
    }
    const beforeScale = Math.round((scaleValue.value) * 100) / 100
    scaleValue.value = scale
    canvasMinWidth.value = rect.width / beforeScale * scale + 36 + 'px'
    // console.log(containerRef.value.getBoundingClientRect().width, rect.width, rect.width / beforeScale * scale + 36)
    isHideScroll.value = containerRef.value.getBoundingClientRect().width - rect.width / beforeScale * scale + 36 > 0
  })
}
watch(() => props.dataSource, (v) => {
  toScale('+', 0)
}, {
  deep: true
})
</script>
<style lang="scss">
@import '@/assets/styles/var';
.lr-tree-select--container {
  width: 100%;
  height: 100%;
  position: relative;
}
.lr-tree-select-container {
  width: 100%;
  height: 100%;
  overflow: auto;
  background-color: var(--lr-tree-bg-color);
  padding: 24px 36px;
  position: relative;
  font-size: 14px;
  // display: flex;
  // align-items: center;
}
.lr-tree-select-e {
  position: absolute;
  left: 0;
  top: 0;
  height: 1px;
}
.lr-tree-select-canvas {
  transform-origin: left top;
  display: inline-block;
  width: max-content;
  height: max-content;
}
.lr-tree-select-operate {
  position: absolute;
  right: 20px;
  bottom: 36px;
  background: #fff;
  box-shadow: 0 0 4px 1px rgba(7, 67, 62, 0.08);
  border-radius: 22px;
  width: 44px;
  display: flex;
  flex-direction: column;
  align-items: center;
  font-size: 12px;
  z-index: 999;
  user-select: none;
  > span {
    display: inline-flex;
    height: 44px;
    align-items: center;
    justify-content: center;
    cursor: pointer;
    color: $--color-primary;
    font-size: 24px;
  }
  i {
    font-style: normal;
  }
}
</style>
