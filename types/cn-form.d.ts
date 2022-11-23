import type { HTMLAttributes } from 'vue/types/jsx'
import { ElementUIComponent } from './component'

export declare type FormItemType = 'switch' | 'slider' | 'datetime' | 'datetimerange' | 'date' | 'dates' | 'week' | 'month' | 'year' | 'daterange' | 'monthrange' | 'tags-checkbox' | 'tags-radio' | 'select' | 'radio' | 'checkbox' | 'cascader' | 'transfer' | 'color' | 'rate' | 'input' | 'textarea' | 'number' | 'upload' | 'custom'

export declare type FormDataType = {
  name: string // 表单唯一值
  title?: string // 显示文案
  placeholder?: string
  type: FormItemType
  options?: { label: string, value: string, [k: string]: any }[]
  formItemProps?: HTMLAttributes & any // object 绑定给el-form-item的attrs
  fieldItemProps?: HTMLAttributes & any  // object 绑定给 表单组件 的attrs
  rules?: object // element ui form rules
}

export declare class CnForm extends ElementUIComponent {
  labelWidth?: number
  labelSuffix?: string
  hideRequiredAsterisk?: boolean
  disabled?: boolean
  layout?: 'grid' | 'inline' | 'block'
  columns?: number
  data: FormDataType[]
}