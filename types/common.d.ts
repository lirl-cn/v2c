
export declare type OptionsType = { label: string, value: string, [k: string | number]: any }[]

export declare type FormItemType = 'switch' | 'slider' | 'datetime' | 'datetimerange' | 'date' | 'dates' | 'week' | 'date-month' | 'month' | 'date-year' | 'year' | 'daterange' | 'date-range' | 'month-range' | 'monthrange' | 'tags-checkbox' | 'tags-radio' | 'select' | 'radio' | 'checkbox' | 'cascader' | 'transfer' | 'color' | 'rate' | 'input' | 'textarea' | 'number' | 'upload' | 'text' | 'custom'

declare global {
  type CommonItemType<P = Record<string, any>> = P & {
    label: string | number
    value: string | number
    children?: CommonItemType<P>[]
    [k: string]: any
  }
  interface RESPONSE_TYPE {
    code: number
    success: boolean
    meta: {
      data: any[] | { [k: string]: any }
    }
    msg: string
  }
}
