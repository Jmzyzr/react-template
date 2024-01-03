/**
 * ProTable基础配置
 * ProTable配置文档：https://procomponents.ant.design/components/table#protable
 */
export const ProTableConfig: object = {
  //是否显示搜索表单，传入对象时为搜索表单的配置
  search: {
    //查询按钮的文本
    searchText: '查询',
    //重置按钮的文本
    resetText: '重置',
    //标签的宽度 'number' | 'auto'
    labelWidth: 'auto',
    //默认是否收起
    defaultCollapsed: true
  },
  //table 工具栏，设为 false 时不显示.传入 function 会点击时触发
  //{{ density?: boolean, fullScreen: boolean | function, reload: boolean | function, setting: boolean | SettingOptionType }}
  options: {
    setting: {
      listsHeight: 400
    }
  },
  //antd form 的配置 FormProps
  form: {
    syncToUrl: false
  },
  //分页器配置
  pagination: {
    size: 'default',
    showSizeChanger: true,
    showQuickJumper: true,
    defaultPageSize: 20,
    hideOnSinglePage: false,
    showTotal: (total: number) => `共 ${total} 条`
  },
  //转化 moment 格式数据为特定类型，false 不做转化
  dateFormatter: 'string',
  //全选选择条数提示
  tableAlertRender: false
};
