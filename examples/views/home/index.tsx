import { computed, defineComponent, onMounted, ref } from "vue";
import "./home.scss";
export default defineComponent({
  setup() {
    const formRef = ref();
    const value = ref();
    let options = ref<any[]>([]);
    onMounted(() => {
      options.value = [
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
      ];
    });
    const formDataSource = computed(() => {
      return [
        {
          title: "input",
          type: "input",
          name: "input",
        },
        {
          title: "tags-checkbox",
          type: "tags-checkbox",
          name: "tags-checkbox",
          options: options.value,
        },
        {
          title: "tags-radio",
          type: "tags-radio",
          name: "tags-radio",
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
        {
          title: "select",
          type: "select",
          name: "select",
          options: [
            // {
            //   label: "2222",
            //   value: 2222,
            // },
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
        {
          title: "date",
          type: "date",
          name: "date",
        },
        {
          title: "week",
          type: "week",
          name: "week",
        },
        {
          title: "year",
          type: "year",
          name: "year",
        },
        {
          title: "dates",
          type: "dates",
          name: "dates",
        },
        {
          title: "rate",
          type: "rate",
          name: "rate",
        },
        {
          title: "color",
          type: "color",
          name: "color",
        },
        {
          title: "daterange",
          type: "daterange",
          name: "dateange",
        },
        {
          title: "datetimerange",
          type: "datetimerange",
          name: "datetimerange",
        },
        {
          title: "datetime",
          type: "datetime",
          name: "datetime",
        },
        {
          title: "monthrange",
          type: "monthrange",
          name: "monthrange",
        },
        {
          title: "date-month",
          type: "date-month",
          name: "date-month",
        },
        {
          title: "number",
          type: "number",
          name: "number",
          fieldItemProps: {
            step: 2,
            "step-strictly": true,
          },
        },
        {
          title: "switch",
          type: "switch",
          name: "switch",
        },
        {
          title: "slider",
          type: "slider",
          name: "slider",
          fieldItemProps: {
            range: true,
          },
        },
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
        {
          title: "textarea",
          type: "textarea",
          name: "textarea",
        },
        {
          title: "custom",
          type: "custom",
          name: "custom",
          initialValue: "2222",
          rules: [{ required: true, message: "请输入邮箱地址" }],
        },
        {
          title: "cc",
          type: "custom",
          name: "cc",
        },
        {
          title: "upload",
          type: "upload",
          name: "upload",
          fieldItemProps: {
            action: "",
          },
        },
      ];
    });
    const checkList = ref([]);
    const onSubmit = async () => {
      console.log(await formRef.value.validateFields());
    };
    const text = ref();
    const tableColumns = [
      {
        title: "姓名",
        dataIndex: "name",
        valueType: "select",
        fetchOptions: () => {
          return new Promise((resolve, reject) => {
            setTimeout(() => {
              resolve([
                {
                  label: "海洋",
                  value: "海洋",
                },
                {
                  label: "大陆",
                  value: "大陆",
                },
              ]);
            }, 1000);
          });
        },
      },
      {
        title: "民族",
        dataIndex: "ids",
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
    const fetchData = async (data: any) => {
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
              id: index + data.size,
            })),
          total: 37,
        };
      }
    };
    const propertySearch = (_, cb) => {
      cb([
        { value: 1, description: 1 },
        { value: 2, description: 2 },
        { value: 3, description: 3 },
        { value: 4, description: 4 },
        { value: 5, description: 5 },
      ]);
    };
    const handleSelect = (item, cb) => {
      // cb(item.value);
    };
    console.log(formDataSource);
    return () => (
      <div class="container">
        <h1>Home</h1>
        <h2>2222</h2>
        <div>count: 2</div>
        <el-button type="primary"> 22222</el-button>
        <cn-tags
          value={value.value}
          onChange={(text: any) => (value.value = text)}
          options={options.value}
        ></cn-tags>
        <cn-pagination total={70} current={2}></cn-pagination>
        <div>
          <cn-badge></cn-badge>
        </div>
        <el-divider>cn-form 生成表单</el-divider>
        <div>
          <cn-form
            ref={formRef}
            columns={3}
            data={formDataSource.value}
            scopedSlots={{
              ccCustomFormComponent: ({ value, onChange }: any) => {
                return (
                  <el-autocomplete
                    popper-class="property-key-autocomplete"
                    value={value}
                    fetch-suggestions={propertySearch}
                    placeholder="请输入内容"
                    onChange={onChange}
                    onInput={onChange}
                    onSelect={(item) => handleSelect(item, onChange)}
                    scopedSlots={{
                      suffix: () => (
                        <i
                          class="el-icon-close el-input__icon"
                          onClick={() => onChange(undefined)}
                        ></i>
                      ),
                    }}
                  ></el-autocomplete>
                );
              },
              customCustomFormComponent: ({ onChange, value }: any) => {
                return <el-input value={value} onInput={onChange}></el-input>;
              },
              customFormExtra: () => {
                return "customFormExtra";
              },
            }}
          ></cn-form>
        </div>
        <el-button onClick={onSubmit} type="success">
          提交表单
        </el-button>
        <el-divider>cn-table 生成表格</el-divider>
        <cn-table
          request={fetchData}
          columns={tableColumns}
          showIndex
          scopedSlots={{
            headOperation: () => (
              <el-button size="small" type="warning">
                新增
              </el-button>
            ),
          }}
          searchType="grid"
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
  },
});
