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
      :label-suffix="labelSuffix"
      :hide-required-asterisk="hideRequiredAsterisk"
      :disabled="disabled"
      :validate-on-rule-change="false"
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
          hide,
          fieldItemProps
        } in data"
        :key="name"
        :hide="hide"
        :name="name"
        :title="title"
        :clearable="clearable"
        :placeholder="placeholder"
        :type="type"
        :options="options"
        :fieldItemProps="fieldItemProps"
        :formItemProps="formItemProps"
        :formModel="formModel"
        :customChangeFormModel="setFieldValue"
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
    labelSuffix: {
      type: String,
      default: undefined
    },
    hideRequiredAsterisk: {
      type: Boolean,
      default: false,
    },
    disabled: {
      type: Boolean,
      default: false,
    },
    columns: {
      type: Number,
      default: 1
    },
    // ??????????????? inline???????????????gird?????????????????????3???block?????????????????? ?????????gird
    layout: {
      type: String,
      default: "grid"
    },
    /**
     * ?????????
     * {
     *    name: string ??????????????????key
     *    title??? string  label??????
     *    placeholder
     *    type??? string  form-item????????????????????????????????????????????????????????????
     *    options??? {label:string, value: string|number}[]  select???checkbox????????????????????? ?????????????????????????????????????????????????????????
     *    formItemProps???object ?????????el-form-item???attrs
     *    fieldItemProps???object ????????? ???????????? ???attrs
     * }[]
     *  */

    data: {
      type: Array,
      default: () => []
    },
    // ?????????
    initialValues: {
      type: Object,
      default: () => ({})
    },
    // ??????
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
        const initialValues = this.getFieldsValue();
        const rules = val.reduce((pre, cur) => {
          // ??????????????????
          this.$set(
            this.formModel,
            cur.name || cur.dataIndex || cur.key,
            initialValues[cur.name] || cur.initialValue || (this.needDefaultValueArrayTypes.indexOf(cur.type) !== -1 ? [] : undefined)
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
    // ????????????????????????
    validateFields(fields) {
      if (fields) {
        return this._validateField(fields);
      } else {
        return this._validate();
      }
    },
    // ???????????????
    getFieldsValue() {
      return {...this.formModel};
    },
    // ??????key???????????????
    getFieldValue(key) {
      return this.formModel[key];
    },
    // ??????key???????????????
    setFieldValue(key, value) {
      this.$set(
        this.formModel,
        key,
        value,
      );
    },
    // ??????????????????
    setFieldsValue(fields) {
      if(typeof fields === 'object'){
        Object.keys(fields).forEach(key => {
          this.setFieldValue(key, fields[key])
        })
      }
    },
    // ????????????
    resetFields() {
      this.$refs["formRef"].resetFields();
    }
  }
};
</script>
