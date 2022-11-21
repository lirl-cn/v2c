<template>
  <el-form-item v-bind="formItemProps" :label="title" :prop="name">
    <!-- 开关 -->
    <el-switch
      v-if="type === 'switch'"
      v-model="formModel[name]"
      v-bind="fieldItemProps"
    >
    </el-switch>
    <!-- 滑块 -->
    <el-slider
      v-if="type === 'slider'"
      v-model="formModel[name]"
      v-bind="fieldItemProps"
    >
    </el-slider>
    <!-- 日期时间选择器 -->
    <el-date-picker
      v-if="type === 'datetime'"
      v-model="formModel[name]"
      type="datetime"
      format="yyyy-MM-dd HH:mm:ss"
      value-format="yyyy-MM-dd HH:mm:ss"
      :placeholder="placeholder || '选择日期时间'"
      v-bind="fieldItemProps"
      @change="onChange"
    >
    </el-date-picker>
    <!-- 日期时间区间选择器 -->
    <el-date-picker
      v-if="type === 'datetimerange'"
      v-model="formModel[name]"
      type="datetimerange"
      format="yyyy-MM-dd HH:mm:ss"
      value-format="yyyy-MM-dd HH:mm:ss"
      start-placeholder="开始日期"
      end-placeholder="结束日期"
      :range-separator="separator || '至'"
      :placeholder="placeholder || '选择日期时间'"
      v-bind="fieldItemProps"
      @change="onChange"
    >
    </el-date-picker>
    <!-- 日期选择器 -->
    <el-date-picker
      v-if="type === 'date'"
      v-model="formModel[name]"
      type="date"
      format="yyyy-MM-dd"
      value-format="yyyy-MM-dd HH:mm:ss"
      v-bind="fieldItemProps"
      :placeholder="placeholder || '选择日期'"
      @change="onChange"
    >
    </el-date-picker>
    <!-- 多个日期选择器 -->
    <el-date-picker
      v-if="type === 'dates'"
      v-model="formModel[name]"
      type="dates"
      format="yyyy-MM-dd"
      value-format="yyyy-MM-dd HH:mm:ss"
      v-bind="fieldItemProps"
      :placeholder="placeholder || '选择多个日期'"
      @change="onChange"
    >
    </el-date-picker>
    <!-- 星期选择器 -->
    <el-date-picker
      v-if="type === 'week'"
      v-model="formModel[name]"
      format="yyyy-MM"
      value-format="yyyy-MM-dd HH:mm:ss"
      type="week"
      v-bind="fieldItemProps"
      :placeholder="placeholder || '选择星期'"
      @change="onChange"
      >
    </el-date-picker>
    <!-- 月份选择器 -->
    <el-date-picker
      v-if="type === 'date-month'"
      v-model="formModel[name]"
      format="yyyy-MM"
      value-format="yyyy-MM-dd HH:mm:ss"
      type="month"
      v-bind="fieldItemProps"
      :placeholder="placeholder || '选择月份'"
      @change="onChange"
      >
    </el-date-picker>
    <!-- 年份选择器 -->
    <el-date-picker
      v-if="type === 'date-year'"
      v-model="formModel[name]"
      format="yyyy"
      value-format="yyyy-MM-dd HH:mm:ss"
      type="year"
      v-bind="fieldItemProps"
      :placeholder="placeholder || '选择年份'"
      @change="onChange"
    >
    </el-date-picker>
    <!-- 日期区间选择器 -->
    <el-date-picker
      v-if="type === 'daterange' || type === 'date-range'"
      v-model="formModel[name]"
      type="daterange"
      format="yyyy-MM-dd"
      value-format="yyyy-MM-dd HH:mm:ss"
      v-bind="fieldItemProps"
      :range-separator="separator || '至'"
      :start-placeholder="startPlaceholder || '开始日期'"
      :end-placeholder="endPlaceholder || '结束日期'"
      @change="onChange"
    >
    </el-date-picker>
    <!-- 月份区间选择器 -->
    <el-date-picker
      v-if="type === 'monthrange' || type === 'month-range'"
      v-model="formModel[name]"
      type="monthrange"
      format="yyyy-MM-dd"
      value-format="yyyy-MM-dd HH:mm:ss"
      v-bind="fieldItemProps"
      :range-separator="separator || '至'"
      :start-placeholder="startPlaceholder || '开始月份'"
      :end-placeholder="endPlaceholder || '结束月份'"
      @change="onChange"
    >
    </el-date-picker>
    <!-- 多选标签选择器 -->
    <cn-tags
      v-if="type === 'tags-checkbox'"
      v-model="formModel[name]"
      :options="options"
      v-bind="fieldItemProps"
      @change="onChange"
    >
    </cn-tags>
    <!-- 单选标签选择器 -->
    <cn-tags
      v-if="type === 'tags-radio'"
      v-model="formModel[name]"
      :options="options"
      mode="radio"
      v-bind="fieldItemProps"
      @change="onChange"
    >
    </cn-tags>
    <!-- 下拉选择器 -->
    <el-select
      v-if="type === 'select'"
      v-model="formModel[name]"
      :placeholder="placeholder || '请选择'"
      style="min-width: 120px"
      v-bind="fieldItemProps"
      :clearable="clearable !== false"
      filterable
      @change="onChange"
    >
      <el-option
        v-for="{ label, value } in options"
        :key="value"
        :label="label"
        :value="value"
      ></el-option>
    </el-select>
    <!-- 单选选择器 -->
    <el-radio-group 
      v-if="type === 'radio'"
      v-model="formModel[name]"
      v-bind="fieldItemProps"
      @change="onChange"
    >
      <el-radio 
        v-for="{ label, value } in options"
        :key="value"
        :label="value"
      >{{label}}</el-radio>
    </el-radio-group>
    <!-- 多选选择器 -->
    <el-checkbox-group
      v-if="type === 'checkbox'"
      v-model="formModel[name]"
      v-bind="fieldItemProps"
      @change="onChange"
    >
      <el-checkbox 
        v-for="{ label, value } in options || []"
        :key="value"
        :label="value"
      >{{label}}</el-checkbox>
    </el-checkbox-group>
    <!-- 联机选择器 -->
    <el-cascader
      v-if="type === 'cascader'"
      v-model="formModel[name]"
      :options="options"
      v-bind="fieldItemProps"
      @change="onChange"
    >
    </el-cascader>
    <!-- 穿梭框选择器 -->
    <el-transfer
      v-if="type === 'transfer'"
      v-model="formModel[name]"
      :data="options"
      v-bind="fieldItemProps"
      @change="onChange"
    >
    </el-transfer>
    <!-- 颜色选择器 -->
    <el-color-picker
      v-if="type === 'color'"
      v-model="formModel[name]"
      v-bind="fieldItemProps"
      @change="onChange"
    ></el-color-picker>
    <!-- 等级选择器 -->
    <el-rate
      v-if="type === 'rate'"
      v-model="formModel[name]"
      v-bind="fieldItemProps"
      @change="onChange"
    ></el-rate>
    <!-- 输入框 -->
    <el-input
      v-if="type === 'input'"
      v-model="formModel[name]"
      :placeholder="placeholder || '请输入'"
      v-bind="fieldItemProps"
      @change="onChange"
    ></el-input>
    <!-- 文本域 -->
    <el-input
      v-if="type === 'textarea'"
      type="textarea"
      v-model="formModel[name]"
      :placeholder="placeholder || '请输入'"
      v-bind="fieldItemProps"
      @change="onChange"
    ></el-input>
    <!-- 数字输入框 -->
    <el-input-number
      v-if="type === 'number'"
      v-model="formModel[name]"
      :placeholder="placeholder || '请输入'"
      v-bind="fieldItemProps"
      @change="onChange"
    ></el-input-number>
    <!-- ele 上传 -->
    <el-upload
      v-if="type === 'upload'"
      v-model="formModel[name]"
      v-bind="fieldItemProps"
      @change="onChange"
    >
      <el-button size="small" type="primary">点击上传</el-button>
    </el-upload>
    <!-- 自定义form组件 -->
    <template
      v-if="type === 'custom'"
    >
      <slot 
        :name="`${name}CustomFormComponent`" 
        v-bind:fieldItemProps="fieldItemProps"
        v-bind:formModel="formModel"
        v-bind:name="name"
        v-bind:value="formModel[name]"
        v-bind:onChange="(val) => formModel[name] = val"
      ></slot>
    </template>
    <slot :name="`${name}FormExtra`"></slot>
  </el-form-item>
</template>
<script>
import { CnTags } from '../../';
export default {
  components: { CnTags },
  props: {
    title: {
      type: String
    },
    separator: {
      type: String
    },
    placeholder: {
      type: String
    },
    startPlaceholder: {
      type: String
    },
    endPlaceholder: {
      type: String,
      default: '结束日期'
    },
    type: {
      type: String,
      default: "input"
    },
    name: {
      type: String
    },
    options: {
      type: Array,
      default: undefined
    },
    clearable: Boolean,
    formItemProps: {
      type: Object,
      default: undefined
    },
    fieldItemProps: {
      type: Object,
      default: () => ({})
    },
    formModel: {
      type: Object,
      default: () => ({})
    }
  },
  computed: {
    onChange(){
      return this.fieldItemProps.onChange ? this.fieldItemProps.onChange : () => {}
    }
  },
};
</script>
