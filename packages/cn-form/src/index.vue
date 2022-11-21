<template>
  <div
    :class="[
      'cn-form-container',
      {
        'cn-form-inline-container': layout === 'inline',
        'cn-form-grid-container': layout === 'grid',
        'cn-form-block-container': layout === 'block',
        [`cn-form-grid-columns-${columns}`]: layout === 'grid'
      }
    ]"
  >
    <el-form
      :inline="layout === 'inline'"
      :model="formModel"
      :rules="rules"
      :size="size"
      ref="formRef"
      :label-width="`${labelWidth}px`"
    >
      <form-item
        v-for="{
          name,
          title,
          placeholder,
          type,
          clearable,
          options,
          formItemProps,
          fieldItemProps
        } in data"
        :key="name"
        :name="name"
        :title="title"
        :clearable="clearable"
        :placeholder="placeholder"
        :type="type"
        :options="options"
        :fieldItemProps="fieldItemProps"
        :formItemProps="formItemProps"
        :formModel="formModel"
      >
        <template v-slot:[`${name}FormExtra`]>
          <slot :name="`${name}FormExtra`"></slot>
        </template>
        <template v-slot:[`${name}CustomFormComponent`]="{fieldItemProps, formModel, onChange, name, value}">
          <slot :name="`${name}CustomFormComponent`" v-bind:fieldItemProps="fieldItemProps" v-bind:formModel="formModel" v-bind:onChange="onChange" v-bind:name="name" v-bind:value="value"></slot>
        </template>
      </form-item>
      <slot name="default"></slot>
    </el-form>
  </div>
</template>
<script>
// import FormItem from "./form-item.vue";
export default {
  name: 'cn-form',
  components: { 
    FormItem: () => import("./form-item.vue")
   },
  props: {
    columns: {
      type: Number,
      default: 1
    },
    // 搜索类型： inline行内显示，gird分列显示默认为3，block全部独占一行 默认为gird
    layout: {
      type: String,
      default: "grid"
    },
    /**
     * 数据源
     * {
     *    name: string 表单唯一值，key
     *    title： string  label文案
     *    placeholder
     *    type： string  form-item类型，后续如果新增需要在组件内加入新组件
     *    options： {label:string, value: string|number}[]  select、checkbox等组件的数据源 后续新增的组件需要数据源也可复用该字段
     *    formItemProps：object 绑定给el-form-item的attrs
     *    fieldItemProps：object 绑定给 表单组件 的attrs
     * }[]
     *  */

    data: {
      type: Array,
      default: () => []
    },
    // 初始值
    initialValues: {
      type: Object,
      default: () => ({})
    },
    // 大小
    size: {
      type: String,
      default: "small"
    },
    labelWidth: {
      type: Number,
      default: 120,
    }
  },
  data() {
    return {
      needDefaultValueArrayTypes: ['date-months', 'checkbox'],
      formModel: {},
      rules: {}
    };
  },
  watch: {
    data: {
      handler(val) {
        const rules = val.reduce((pre, cur) => {
          // 初始化默认值
          this.$set(
            this.formModel,
            cur.name || cur.dataIndex || cur.key,
            cur.initialValue || (this.needDefaultValueArrayTypes.indexOf(cur.type) !== -1 ? [] : undefined)
          );
          pre[cur.name || cur.dataIndex || cur.key] = cur.rules;
          return pre;
        }, {});
        this.rules = rules;
      },
      immediate: true,
      deep: true
    }
  },
  methods: {
    async _validate() {
      return new Promise(async (resolve, reject) => {
        const valid = await this.$refs["formRef"].validate();
        if (valid) {
          console.log(valid)
          resolve({...this.formModel});
        } else {
          reject();
        }
      });
    },
    async _validateField(fields = undefined) {
      return new Promise((resolve, reject) => {
        this.$refs["formRef"].validateField(fields, valid => {
          if (!valid) {
            if (typeof fields === "string") {
              resolve(this.formModel[fields]);
            } else {
              const results = fields.reduce((pre, cur) => {
                pre[cur] = this.formModel[cur];
                return pre;
              }, {});
              resolve(results);
            }
          } else {
            reject();
          }
        });
      });
    },
    // 检验并获取所有值
    validateFields(fields) {
      if (fields) {
        return this._validateField(fields);
      } else {
        return this._validate();
      }
    },
    // 获取所有值
    getFieldsValue() {
      return {...this.formModel};
    },
    // 基于key获取单个值
    getFieldValue(key) {
      return this.formModel[key];
    },
    // 基于key设置单个值
    setFieldValue(key, value) {
      this.formModel[key] = value;
    },
    // 设置表单的值
    setFieldsValue(fields) {
      this.formModel = {
        ...this.formModel,
        ...fields
      };
    },
    // 重置表单
    resetFields() {
      this.$refs["formRef"].resetFields();
    }
  }
};
</script>
