<template>
  <div
    class="c-content--container"
    :style="`${noPadding ? 'padding: 0;' : ''}${
      noBgColor ? 'background-color: transparent;' : ''
    }`"
  >
    <div class="c-content--header">
      <slot name="header"></slot>
    </div>
    <div class="c-content--body">
      <slot name="body"></slot>
    </div>
    <div class="c-content--footer">
      <slot name="footer"></slot>
    </div>
  </div>
</template>
<script lang="ts">
import { defineComponent } from 'vue'
export default defineComponent({
  name: 'CContentContainer',
  props: {
    noPadding: {
      type: Boolean,
      required: false,
      default: false
    },
    noBgColor: {
      type: Boolean,
      required: false,
      default: false
    }
  },
})

</script>
