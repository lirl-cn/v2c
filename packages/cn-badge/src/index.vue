<template>
  <span class="cn-badge-container">
    <span v-if="!!status" :class="['cn-badge-status-dot', `cn-badge-status-${status}`]"></span>
    <span class="ant-badge-status-text">{{text}}</span>
  </span>
</template>
<script lang="ts">
import { defineComponent, PropType } from 'vue';
export default defineComponent({
  name: 'cn-badge',
  props: {
    text: {
      type: String,
      default: ''
    },
    status: {
      type: String as PropType<'success' | 'error' | 'default' | 'processing' | 'warning' | 'primary'>,
      default: 'primary',
    }
  },
})
</script>