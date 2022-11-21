import { defineComponent, reactive, ref } from 'vue'
import './home.scss'
export default defineComponent({
  setup() {
    const formRef = ref()
    const value = ref()
    const options = [
      {
        label: '2222',
        value: 2222,
      },
      {
        label: '3333',
        value: 3333,
      },
      {
        label: '4444',
        value: 4444,
      },
    ]
    const formDataSource = [
      {
        title: 'input',
        type: 'input',
        name: 'input',
      },
      {
        title: 'select',
        type: 'select',
        name: 'select',
        options: [
          {
            label: '2222',
            value: 2222,
          },
          {
            label: '3333',
            value: 3333,
          },
          {
            label: '4444',
            value: 4444,
          },
        ],
        rules: [
          { required: true, message: '请输入邮箱地址' }
        ],
      },
      {
        title: 'radio',
        type: 'radio',
        name: 'radio',
        options: [
          {
            label: '2222',
            value: 2222,
          },
          {
            label: '3333',
            value: 3333,
          },
          {
            label: '4444',
            value: 4444,
          },
        ]
      },
      {
        title: 'checkbox',
        type: 'checkbox',
        name: 'checkbox',
        options: [
          {
            label: 'qqqqq',
            value: 2222,
          },
          {
            label: 'wwwww',
            value: 3333,
          },
          {
            label: 'eeeee',
            value: 4444,
          },
        ]
      },
      {
        title: 'date',
        type: 'date',
        name: 'date',
      },
      {
        title: 'dates',
        type: 'dates',
        name: 'dates',
      },
      {
        title: 'rate',
        type: 'rate',
        name: 'rate',
      },
      {
        title: 'color',
        type: 'color',
        name: 'color',
      },
      {
        title: 'datetimerange',
        type: 'datetimerange',
        name: 'datetimerange',
      },
      {
        title: 'datetime',
        type: 'datetime',
        name: 'datetime',
      },
      {
        title: 'monthrange',
        type: 'monthrange',
        name: 'monthrange',
      },
      {
        title: 'date-month',
        type: 'date-month',
        name: 'date-month',
      },
      {
        title: 'number',
        type: 'number',
        name: 'number',
        fieldItemProps: {
          step: 2,
          'step-strictly': true
        }
      },
      {
        title: 'switch',
        type: 'switch',
        name: 'switch',
      },
      {
        title: 'slider',
        type: 'slider',
        name: 'slider',
        fieldItemProps: {
          range: true
        }
      },
      {
        title: 'cascader',
        type: 'cascader',
        name: 'cascader',
        options: [
          {
            label: 'qqqqq',
            value: 2222,
          },
          {
            label: 'wwwww',
            value: 3333,
          },
          {
            label: 'eeeee',
            value: 4444,
          },
        ]
      },
      {
        title: 'transfer',
        type: 'transfer',
        name: 'transfer',
        options: [
          {
            label: 'qqqqq',
            key: 2222,
          },
          {
            label: 'wwwww',
            key: 3333,
          },
          {
            label: 'eeeee',
            key: 4444,
          },
        ],
        formItemProps: {
          style: { 'grid-column': 'span 2' },
        },
      },
      {
        title: 'textarea',
        type: 'textarea',
        name: 'textarea',
      },
      {
        title: 'custom',
        type: 'custom',
        name: 'custom',
        initialValue: '2222',
        rules: [
          { required: true, message: '请输入邮箱地址' }
        ],
      },
      {
        title: 'upload',
        type: 'upload',
        name: 'upload',
        fieldItemProps: {
          action: '',
        }
      },
    ]
    const checkList = ref([])
    const onSubmit = async() => {
      console.log(await formRef.value.validateFields());
    }
    const text=ref()
    const tableColumns = [
      {
        title: '姓名',
        dataIndex: 'name',
      },
      {
        title: '年龄',
        dataIndex: 'age',
      },
      {
        title: '性别',
        dataIndex: 'sex',
      },
      {
        title: '描述',
        dataIndex: 'dec',
      },
    ]
    return () => (<div class='container'>
      <h1>Home</h1>
      <h2>2222</h2>
      <div>count: 2</div>
      <el-button type="primary"> 22222</el-button>
      <cn-tags value={value.value} onChange={(text:any) => value.value = text} options={options}></cn-tags>
      <cn-pagination
        total={70}
        current={2}
      ></cn-pagination>
      <div>
        <cn-badge ></cn-badge>
      </div>
      <div>
        <cn-form
          ref={formRef}
          columns={3}
          data={formDataSource}
          scopedSlots={{
            customCustomFormComponent: ({onChange, value}:any) => {
              return <el-input value={value} onInput={onChange}></el-input>
            }
          }}
        ></cn-form>
      </div>
      <el-checkbox-group value={checkList.value}>
        <el-checkbox label="复选框 A"></el-checkbox>
        <el-checkbox label="复选框 B"></el-checkbox>
        <el-checkbox label="复选框 C"></el-checkbox>
        <el-checkbox label="禁用" disabled></el-checkbox>
        <el-checkbox label="选中且禁用" disabled></el-checkbox>
      </el-checkbox-group>
      <el-input value={text.value} onInput={t => text.value = t }></el-input>
      <el-button onClick={onSubmit} type='success'>click me</el-button>
      <el-divider></el-divider>
      <cn-table 
        columns={tableColumns}
        scopedSlots={{
          headTitle: () => 'demo表格示例',
          headOperation: () => <el-button>新增</el-button>
        }}
      ></cn-table>
    </div>
    )
  }
});