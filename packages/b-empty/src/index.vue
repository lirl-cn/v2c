<template>
  <div class="b-empty-container">
    <slot>- 暂无数据 -</slot>
  </div>
</template>
<script lang="ts">
import { defineComponent } from 'vue';

export default defineComponent({
  name: 'BEmpty'
});
</script>
