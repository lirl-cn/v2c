# v2c

基于 vue2 与 element UI 低仿 antd-pro-table
如果之前你用过 react 及 antd-pro-table，那么这个 vue 组件对你来说会很简单；
里边内置了所有了 element-ui 组件，使用时仅需移除原 element-ui 即可

## 核心组件

### cn-form

##### 属性

| 参数                 | 说明                                                                              | 类型                                | 默认值   |
| -------------------- | --------------------------------------------------------------------------------- | ----------------------------------- | -------- |
| data                 | 表单数据源                                                                        | `FormDataType[]`                    | -        |
| layout               | 表单布局                                                                          | `'grid'` \| `'inline'` \| `'block'` | `'grid'` |
| columns              | 表单布局为`'grid'`时生效，列数                                                    | `number`                            | `3`      |
| disabled             | 是否禁用该表单内的所有组件。若设置为 true，则表单内组件上的 disabled 属性不再生效 | `boolean`                           | -        |
| hideRequiredAsterisk | 是否隐藏必填字段的标签旁边的红色星号                                              | `boolean`                           | `false`  |
| labelSuffix          | 表单域标签的后缀                                                                  | `string`                            | -        |
| labelWidth           | 表单域标签的宽度                                                                  | `number`                            | `120`    |

##### FormDataType

| 参数           | 说明                                      | 类型                                                   | 默认值 |
| -------------- | ----------------------------------------- | ------------------------------------------------------ | ------ |
| name           | 表单唯一值，亦是返回数据的 key            | `string`                                               | -      |
| title          | 显示文案                                  | `string`                                               | -      |
| type           | 表单类型                                  | `FormItemType`                                         | -      |
| placeholder    | placeholder                               | `string`                                               | -      |
| formItemProps  | 透传给表单域的 attrs                      | `HTMLAttributes & any`                                 | -      |
| fieldItemProps | 透传给表单组件的 attrs                    | `HTMLAttributes & any`                                 | -      |
| options        | 选择性组件的数据源，如`select`、`radio`等 | `{ label: string, value: string, [k: string]: any }[]` | -      |
| rules          | 表单验证规则, `element ui form rules`     | `object`                                               | -      |

##### FormItemType

```ts
type FormItemType =
  | "switch"
  | "slider"
  | "datetime"
  | "datetimerange"
  | "date"
  | "dates"
  | "week"
  | "month"
  | "year"
  | "daterange"
  | "monthrange"
  | "tags-checkbox"
  | "tags-radio"
  | "select"
  | "radio"
  | "checkbox"
  | "cascader"
  | "transfer"
  | "color"
  | "rate"
  | "input"
  | "textarea"
  | "number"
  | "upload"
  | "custom";
// custom 为自定义form组件，需要传人slot `${name}CustomFormComponent`
```

#### 方法

ref 获取

| 名称           | 说明                | 类型                                 |
| -------------- | ------------------- | ------------------------------------ |
| validateFields | 检验并获取所有值    | `<T=any>(fields:string[]):T`         |
| getFieldsValue | 获取所有值          | `() => object`                       |
| getFieldValue  | 基于 key 获取单个值 | `(key:string) => any`                |
| setFieldValue  | 基于 key 设置单个值 | `(key:string, value:any) => void`    |
| setFieldsValue | 设置表单的值        | `(fields:{[k:string]: any}) => void` |
| resetFields    | 重置表单            | `() => void`                         |

### cn-table

#### 属性

```ts
import type { HTMLAttributes, StyleValue } from "vue/types/jsx";
import type { FormItemType } from "./cn-form";
import { ElementUIComponent } from "./component";

type ParamsType = {
  current: number; // 当前页
  pageSize: number; // 一页显示多少条
  [k: string]: any;
};
type ResponseDataType = {
  success?: boolean; // 是否成功
  data: any[]; // 数据源
  total: number; // 一共多少数据
};
type SearchType = {
  type?: "inline" | "gird" | "block"; // 搜索排列样式
  columns?: number; // 几列
  resetText?: string | false; // 重置文案
  searchText?: string | false; // 搜索文案
  rangeExtra?: [string, string]; // 区间选择额外增加的字段
  rangeExtraPlacement?: "start" | "end"; // 区间选择额外增加字段的位置
};
type StatusType = "success" | "error" | "default" | "processing" | "warning";
type ValueEnumType = {
  [k: string]: {
    text: string; // 文案
    status?: StatusType; // 状态
  };
};
type ColumnType = {
  dataIndex: string; // 表单唯一值，该列基于哪个字段显示，支持a.b.c但不建议
  title: string; // 单元格名称文案
  searchTitle?: string; // 搜索框显示的文案。若为空默认显示title
  searchStyle?: StyleValue; // 搜索框样式
  name?: string; //
  key?: string;
  searchName?: string; // 搜索时传参名称，若为空默认显示dataIndex
  status?: StatusType; // 状态
  valueType?: FormItemType; // 搜索框类型
  valueEnum?: ValueEnumType; // 枚举
  valueOptions?: { label?: string; value?: string; [k: string]: any }[]; // 选择性组件数据源
  formItemProps?: HTMLAttributes & any; // object 绑定给el-form-item的attrs
  fieldItemProps?: HTMLAttributes & any; // object 绑定给 表单组件 的attrs
  hideInTable?: boolean; // 在表格中隐藏
  hideInSearch?: boolean; // 在搜索中隐藏
  ellipsis?: boolean; // 超出隐藏
  width?: number; // 宽度
  scopedSlots?: { customRender?: string; [k: string]: any };
};
type PaginationType = {
  defaultPageSize?: number;
  pageSizeOptions?: number[];
};
type SelectedRowsResponse = {
  selectedRows: any[];
};
type ActionRefType = {
  onSearch: () => void; // 搜索
  onReset: () => void; // 重置
  onReload: () => void; // 重新加载
  getSearchParams<T = ParamsType>(): T; // 获取所以搜索参数
  setSearchFieldsValue<T = any>(fieldsValue: T): void; // 设置搜索参数
  getSelectedRows: () => SelectedRowsResponse; // 获取选择的数据
};

type RowSelectionType = {
  batchDeleteText?: string; // 批量删除文案
  batchDownloadText?: string; // 批量导出文案
  onBatchDelete?: (selectedRows: SelectedRowsResponse["selectedRows"]) => void; // 批量删除调用的方法
  onBatchDownload?: (
    selectedRows: SelectedRowsResponse["selectedRows"]
  ) => void; // 批量导出调用的方法
  onChange?: (selectedRows: SelectedRowsResponse["selectedRows"]) => void; // 当选择行变化时调用
};

type SettingType = "reload" | "fullScreen";

class CnTable extends ElementUIComponent {
  columns: ColumnType[]; // 表格列数据
  title?: string; // 表格标题
  resetText?: string;
  searchText?: string;
  rowKey?: string; // 行唯一，需要选择时必传
  searchType?: SearchType["type"];
  searchColumns?: number;
  scroll?: { y?: string | number };
  action?: string; // 若在main.js中传人了request方式，内部会将action地址传入方法中获取数据，当前组件request权重高
  request?: (params: ParamsType) => ResponseDataType; // 获取数据的方法
  onloadAutoRequest?: boolean; // 是否自动加载
  showIndex?:
    | boolean
    | ((params: {
        index: number;
        current: number;
        pageSize: number;
        text: string | number;
      }) => string); // 显示序号
  method?: "GET" | "POST"; // action存在时有效，获取数据时调用方式
  pagination?: false | PaginationType; // 是否显示分页信息
  search?: false | SearchType;
  data?: any; // 调用接口额外的参数
  actionRef?: (node: ActionRefType) => void; // 获取表格的方法
  beforeSearchSubmit?<T = ParamsType>(params: ParamsType): T; // 获取数据前调用
  formatResponse?<T = any>(response: T): ResponseDataType; // 拿到数据后格式化调用
  catchFetchDataError?: (error: Error) => ResponseDataType | void; // 监听action方式的报错
  watchReset?: () => void; // 监听重置方法的调用
  loading?: boolean; // 是否加载中
  autoCalcWidth?: false | number; // 自动计算宽度
  rowSelection?: RowSelectionType;
  setting?: false | SettingType[];
}
```

## 安装

```
npm install @lirl-cn/v2c
yarn add @lirl-cn/v2c
```

## 使用

### main.ts

```ts
import CnV2C from "@lirl-cn/v2c";
import request from "@/utils/request"; // 你自己的request方法 返回格式为{data: any[], total: number, success?: boolean}
Vue.use(CnV2C, {
  table: {
    // 挂载全局一些公共方法，可以避免每个页面使用时配置
    request, // 当定义了request后，cn-table可以直接仅传action字段，内部会调用该方法去获取数据
  },
});
```

### cn-form

![表格生成](/images/cn-form.jpg)

```tsx
import { defineComponent, ref } from "vue";

export default defineComponent({
  setup() {
    const formRef = ref();
    const formDataSource = [
      // 输入框
      {
        title: "input",
        type: "input",
        name: "input",
      },
      // 下拉选
      {
        title: "select",
        type: "select",
        name: "select",
        options: [
          // 下拉列表
          {
            label: "2222",
            value: 2222,
          },
          {
            label: "3333",
            value: 3333,
          },
          {
            label: "4444",
            value: 4444,
          },
        ],
        rules: [{ required: true, message: "请输入邮箱地址" }],
      },
      // 单选
      {
        title: "radio",
        type: "radio",
        name: "radio",
        options: [
          {
            label: "2222",
            value: 2222,
          },
          {
            label: "3333",
            value: 3333,
          },
          {
            label: "4444",
            value: 4444,
          },
        ],
      },
      // 多选
      {
        title: "checkbox",
        type: "checkbox",
        name: "checkbox",
        options: [
          {
            label: "qqqqq",
            value: 2222,
          },
          {
            label: "wwwww",
            value: 3333,
          },
          {
            label: "eeeee",
            value: 4444,
          },
          {
            label: "eeeee1",
            value: 44441,
          },
          {
            label: "eeeee2",
            value: 44442,
          },
          {
            label: "eeeee3",
            value: 4444232,
          },
          {
            label: "eeeee33",
            value: 444423,
          },
        ],
      },
      // 日期
      {
        title: "date",
        type: "date",
        name: "date",
      },
      // 多选日期
      {
        title: "dates",
        type: "dates",
        name: "dates",
      },
      // 评分
      {
        title: "rate",
        type: "rate",
        name: "rate",
      },
      // 颜色
      {
        title: "color",
        type: "color",
        name: "color",
      },
      // 日期时间区间
      {
        title: "datetimerange",
        type: "datetimerange",
        name: "datetimerange",
      },
      // 日期时间
      {
        title: "datetime",
        type: "datetime",
        name: "datetime",
      },
      // 月份区间
      {
        title: "monthrange",
        type: "monthrange",
        name: "monthrange",
      },
      // 月份
      {
        title: "date-month",
        type: "datemonth",
        name: "date-month",
      },
      // 数字
      {
        title: "number",
        type: "number",
        name: "number",
        fieldItemProps: {
          // 数字输入框额外的参数
          step: 2,
          "step-strictly": true,
        },
      },
      // 开关
      {
        title: "switch",
        type: "switch",
        name: "switch",
      },
      // 滑块
      {
        title: "slider",
        type: "slider",
        name: "slider",
        fieldItemProps: {
          range: true,
        },
      },
      // 联级
      {
        title: "cascader",
        type: "cascader",
        name: "cascader",
        options: [
          {
            label: "qqqqq",
            value: 2222,
          },
          {
            label: "wwwww",
            value: 3333,
          },
          {
            label: "eeeee",
            value: 4444,
          },
        ],
      },
      // 穿梭框
      {
        title: "transfer",
        type: "transfer",
        name: "transfer",
        options: [
          {
            label: "qqqqq",
            key: 2222,
          },
          {
            label: "wwwww",
            key: 3333,
          },
          {
            label: "eeeee",
            key: 4444,
          },
        ],
        formItemProps: {
          style: { "grid-column": "span 2" },
        },
      },
      // 文本域
      {
        title: "textarea",
        type: "textarea",
        name: "textarea",
      },
      // 自定义
      {
        title: "custom",
        type: "custom",
        name: "custom",
        initialValue: "2222", // 默认值
        rules: [{ required: true, message: "请输入邮箱地址" }],
      },
      // 上传
      {
        title: "upload",
        type: "upload",
        name: "upload",
        fieldItemProps: {
          action: "",
        },
      },
    ];
    const onSubmit = async () => {
      // validateFields 检验表单并返回所有数据
      console.log(await formRef.value.validateFields());
    };
    return () => {
      return (
        <div>
          <el-divider>cn-form 生成表单</el-divider>
          <cn-form
            ref={formRef} // 获取form表单
            columns={3} // 3列显示
            data={formDataSource} // 数据源
            scopedSlots={{
              // slot 插槽
              // 自定义form组件 `${name}CustomFormComponent`
              customCustomFormComponent: ({ onChange, value }: any) => {
                return <el-input value={value} onInput={onChange}></el-input>;
              },
              // form-item 额外显示的内容 `${name}FormExtra`
              customFormExtra: () => {
                return "customFormExtra";
              },
            }}
          ></cn-form>
          <el-button onClick={onSubmit}>提交</el-button>
        </div>
      );
    };
  },
});
```

### cn-table

![表格生成](/images/cn-table.jpg)

```tsx
import { defineComponent, ref } from "vue";

export default defineComponent({
  setup() {
    const tableColumns = [
      {
        title: "姓名",
        dataIndex: "name",
        valueType: "select",
        valueOptions: [
          {
            label: "海洋",
            value: "海洋",
          },
          {
            label: "大陆",
            value: "大陆",
          },
        ],
      },
      {
        title: "民族",
        dataIndex: "id",
        hideInTable: true, // 在表格中隐藏
      },
      {
        title: "年龄",
        dataIndex: "id",
      },
      {
        title: "性别",
        dataIndex: "jump",
      },
      {
        title: "描述",
        dataIndex: "description",
        hideInSearch: true, // 在搜索条件中隐藏
      },
    ];
    // request 方法，必须返回 data和total success可选，为false代表失败
    const fetchData = async (data: {
      current: number;
      pageSize: number;
      [k: string]: any;
    }) => {
      console.log(data);
      if (data.current === 1) {
        return {
          success: true,
          data: Array(20)
            .fill({})
            .map((item, index) => ({
              ...item,
              name: index + "姓名",
              id: index,
            })),
          total: 37,
        };
      } else {
        return {
          success: true,
          data: Array(17)
            .fill({})
            .map((item, index) => ({
              ...item,
              name: index + "姓名",
              id: index + data.pageSize,
            })),
          total: 37,
        };
      }
    };
    return () => {
      return (
        <div>
          <el-divider>cn-table 生成表格</el-divider>
          <cn-table
            request={fetchData}
            columns={tableColumns}
            showIndex
            scopedSlots={{
              // 插槽
              headOperation: () => (
                // 表格操作
                <el-button size="small" type="warning">
                  新增
                </el-button>
              ),
            }}
            searchType="grid" // 搜索默认
            rowSelection={{
              onBatchDelete: (rows: any) => {
                console.log("onBatchDelete", rows);
              },
              onBatchDownload: (rows: any) => {
                console.log("onBatchDownload", rows);
              },
            }}
          ></cn-table>
        </div>
      );
    };
  },
});
```

**特别鸣谢：** [element UI](https://element.eleme.cn/#/zh-CN)｜[ant design ProTable](https://procomponents.ant.design/components/table)
