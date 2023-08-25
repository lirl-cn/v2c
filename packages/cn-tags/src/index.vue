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
<script >
export default {
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
      type: "checkbox" | "radio",
      default: "checkbox"
    }
  },
  methods: {
    onClickAll(){
      this.$emit("change", [this.showAll.value]);
    },
    onClick(val) {
      if (this.mode === "checkbox") {
        let newValue = this.value || [];
        if(this.showAll && newValue.length === 1 && newValue[0] === this.showAll.value){
          newValue = []
        }
        if (newValue.indexOf(val) !== -1) {
          const _newValue = newValue.filter(v => v !== val)
          this.$emit(
            "change",
            this.showAll && !_newValue.length ? [this.showAll.value] : _newValue
          );
        } else {
          this.$emit("change", [...newValue, val]);
        }
      } else {
        if (val !== this.value) this.$emit("change", val);
      }
    }
  }
};
</script>
