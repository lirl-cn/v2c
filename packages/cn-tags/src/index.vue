<template>
  <div class="cn-tags-container">
    <span
      v-if="showAll && mode === 'checkbox'"
      :class="[
        'cn-tags-item',
        {
          'cn-tags-item-active':
            value && value.length === 1 && value[0] === showAll.value
        }
      ]"
      @click="onClickAll"
    >
      {{ showAll.label }}
    </span>
    <span
      v-for="{ label, value: val } in options"
      :key="val"
      :class="[
        'cn-tags-item',
        {
          'cn-tags-item-active':
            mode === 'checkbox'
              ? value && Array.isArray(value) && value.indexOf(val) !== -1
              : value === val
        }
      ]"
      @click="onClick(val)"
      >{{ label }}</span
    >
  </div>
</template>
<script lang="ts">
import { defineComponent } from 'vue';

export default defineComponent({
  name: 'CnTags',
  model: {
    prop: "value",
    event: "change"
  },
  props: {
    showAll: {
      type: Object, // {label: string, value: string}
      default: undefined
    },
    value: {
      type: [Array, String, Number],
      default: undefined
    },
    options: {
      type: Array,
      default: () => []
    },
    mode: {
      type: String as () => "checkbox" | "radio",
      default: "checkbox"
    }
  },
  methods: {
    onClickAll(){
      this.$emit("change", [this.showAll.value]);
    },
    onClick(val: any) {
      if (this.mode === "checkbox") {
        let newValue: any = this.value || [];
        if(this.showAll && Array.isArray(newValue) && newValue.length === 1 && newValue[0] === this.showAll.value){
          newValue = []
        }
        if (Array.isArray(newValue) && newValue.indexOf(val) !== -1) {
          const _newValue = newValue.filter((v: any) => v !== val)
          this.$emit(
            "change",
            this.showAll && !_newValue.length ? [this.showAll.value] : _newValue
          );
        } else {
          this.$emit("change", Array.isArray(newValue) ? [...newValue, val] : [val]);
        }
      } else {
        if (val !== this.value) this.$emit("change", val);
      }
    }
  }
});
</script>
