<template>
  <el-dialog
    :title="title"
    :custom-class="
      ['c--model-dialog-container', className]
        .filter(str => !!str)
        .join(' ')
    "
    :visible="visible"
    :width="width || '600px'"
    :destroy-on-close="destroyOnClose !== false"
    append-to-body
    :close-on-click-modal="false"
    @close="$emit('close')"
  >
    <slot></slot>
    <template #footer>
      <slot name="footer">
        <div v-if="noFooter !== true" class="cn-model-dialog-footer">
          <el-button :size="btnSize" @click="$emit('close')">
            {{ cancelText || '取 消' }}
          </el-button>
          <el-button :size="btnSize" type="primary" @click="$emit('ok')">
            {{ okText || '确 定' }}
          </el-button>
        </div>
      </slot>
    </template>
  </el-dialog>
</template>
<script lang="ts">
import { defineComponent, PropType } from 'vue'
export default defineComponent({
  name: 'CModal',
  props: {
    visible: {
      type: Boolean,
      required: true,
      default: false
    },
    title: {
      type: String,
      required: false
    },
    width: {
      type: String,
      required: false
    },
    noFooter: {
      type: Boolean,
      required: false
    },
    className: {
      type: String,
      required: false
    },
    destroyOnClose: {
      type: Boolean,
      required: false
    },
    okText: {
      type: String,
      required: false
    },
    cancelText: {
      type: String,
      required: false
    },
    btnSize: {
      type: String as PropType<"medium" | "small" | "mini" >,
      required: false,
      default: 'small'
    }
  },
  emits: ['close', 'ok'],
})
</script>
