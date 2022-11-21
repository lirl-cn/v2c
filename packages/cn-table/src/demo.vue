<template>
  <div class="own-page-container">
    <cn-table 
      class="own-class-container"
      action="/proxy/opSupport/pending/queryByPendingType" 
      :columns="columns" 
      :beforeSearchSubmit="beforeSearchSubmit" 
      :formatResponse="formatResponse"
      :scroll="{y: 600}" 
      searchType="grid"
      :actionRef="node => actionRef = node"
      :rowSelection="rowSelection"
    >
      <template v-bind:slot="'operations-btn-prefix'">
        <el-button type="warning" size="small">搜索按钮前</el-button>
      </template>
      <template v-bind:slot="'operations-btn-suffix'">
        <el-button type="danger" size="small">搜索按钮后</el-button>
      </template>
      <template v-slot:operate="{record}">
        <a href="">编辑</a>
        <a href="">pendingType-->{{record.pendingType}}</a>
      </template>
    </cn-table>
  </div>
</template>
<script>
import { CnTable } from '@/components/cn-components'
export default {
  components: {
    CnTable,
  },
  methods: {
    beforeSearchSubmit({page, size, ...params}){
      console.log({page, size, ...params})
      return {
        ...params,
        page: page + 1,
        limit: size,
        pendingType: 2,
        dealLoginName: "admin",
        search: "all",
      }
    },
    formatResponse(response){
      console.log(response);
      return {
        success: true,
        data: response.data.list,
        page: {
          totalElements: response.data.totalCount,
        },
      }
    }
  },
  data(){
    return {
      actionRef: null,
      rowSelection: {
        onChange(a,b){
          console.log(a,b)
        },
      },
      columns: [
        {
          title: '位置',
          dataIndex: '位置',
          searchName: 'address',
          valueType: 'select',
          valueOptions: [
            {
              label: '山东',
              value: '山东',
            },
            {
              label: '浙江',
              value: '浙江',
            },
          ]
        },
        {
          title: '巡检日期',
          dataIndex: 'date',
          valueType: 'date',
          initialValue: '2022-10-01 00:00:00'
        },
        {
          title: '巡检人员',
          dataIndex: 'businessTitle',
          ellipsis: true,
          fieldItemProps: {
            disabled: true,
          },
        },
        {
          title: '室内温度 ℃',
          dataIndex: 'test',
          formItemProps: {
            style: { 'grid-column': 'span 2' },
          },
          fieldItemProps: {
            class: '22222',
            showAll: {
              label: '查看全部',
              value: 0
            }
          },
          valueType: 'tags-checkbox',
          valueOptions: [
            {
              label: '机房空调',
              value: 1,
            },
            {
              label: '机房空调2',
              value: 2,
            },
            {
              label: '机房空调3',
              value: 4,
            },
          ],
          // initialValue: [2],
        },
        {
          title: '室内湿度 %',
          dataIndex: '室内湿度 %',
          formItemProps: {
            style: { 'width': '380px' },
          }
        },
        {
          title: '市内卫生',
          dataIndex: 'pendingType',
          valueEnum: {
            2: {
              text: '进行中',
              status: 'error',
            }
          },
        },
        {
          title: '市内杂物',
          dataIndex: '市内杂物',
          hideInSearch: true,
        },
        {
          title: '周围环境',
          dataIndex: '周围环境',
          hideInTable: true,
        },
        {
          title: '机房照明',
          dataIndex: '机房照明',
          hideInTable: true,
          hideInSearch: true,
        },
        {
          title: '机柜供电',
          dataIndex: '机柜供电',
        },
        {
          title: '楼层配电柜',
          dataIndex: '楼层配电柜',
        },
        {
          title: 'UPS及电池',
          dataIndex: 'UPS及电池',
        },
        {
          title: '机房空调',
          dataIndex: '机房空调',
        },
        {
          title: '操作',
          dataIndex: 'operate',
          width: 180,
        },
      ],
    }
  },
}
</script>
<style lang="scss" scoped>
.own-page-container{
  /deep/{
    .cn-table-search-btn-container{
      // grid-column: span 3;
      justify-content: flex-end;
    }
  }
}
</style>