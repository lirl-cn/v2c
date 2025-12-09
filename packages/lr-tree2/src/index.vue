<template>
  <div ref="containerRef" class="lr-tree-select--container2">
    <div
      ref="contentRef"
      class="lr-tree-select-container"
      :style="
        `--lr-tree-bg-color: ${backgroundColor}; --lr-tree-border-color: ${borderColor};`
      "
    >
      <div class="lr-tree-select-e2" :style="{ minWidth: canvasMinWidth }"></div>
      <div
        ref="canvasRef"
        class="lr-tree-select-canvas2"
        :style="[
          scale ? { transform: `scale(${scaleValue})` } : undefined
        ]"
      >
        <LrTreeNode2
          :data="dataSource"
          :mode="mode"
          :arrow="arrow"
        >
          <template #node="{ data }">
            <slot name="node" v-bind:data="data"></slot>
          </template>
        </LrTreeNode2>
      </div>
    </div>
    <div v-if="scale" class="lr-tree-select-operate2">
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
<script lang="ts">
import LrTreeNode2, {DataType} from './tree-node2.vue'
import { defineComponent, PropType} from 'vue'

export default defineComponent({
  name: 'LrTree2',
  components: {
    LrTreeNode2
  },
  props:{
    dataSource: {
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
    backgroundColor: {
      type: String,
      default: '#fff'
    },
    borderColor: {
      type: String,
      default: 'rgba(219, 219, 219, 1)'
    },
    scale: {
      type: Boolean,
     default: true
    }
  },
  data(){
    return {
      containerRef: undefined,
      contentRef: undefined,
      canvasRef: undefined,
      scaleValue: 1,
      canvasMinWidth: 'max-content',
      isHideScroll: false,
    }
  },
  methods: {
    toScale(type: string, value: number) {
      console.log(type, value)
      this.$nextTick(() => {
        const rect = (this.$refs['canvasRef'] as HTMLElement)?.getBoundingClientRect()
        if (!rect) return
        let scale = 1
        if(type === '+'){
          scale = Math.round((this.scaleValue + value) * 100) / 100
        }else{
          if(this.scaleValue < value){
            return
          }else{
            scale = Math.round((this.scaleValue - value) * 100) / 100
          }
        }
        const beforeScale = Math.round((this.scaleValue) * 100) / 100
        this.scaleValue = scale
        this.canvasMinWidth = rect.width / beforeScale * scale + 36 + 'px'
        // console.log(containerRef.value.getBoundingClientRect().width, rect.width, rect.width / beforeScale * scale + 36)
        this.isHideScroll = (this.$refs['containerRef'] as HTMLElement)?.getBoundingClientRect().width - rect.width / beforeScale * scale + 36 > 0
      })
    }
  },
  watch: {
    dataSource: {
      handler(){
        this.toScale('+', 0)
      },
      deep: true
    },
  }
})
</script>
