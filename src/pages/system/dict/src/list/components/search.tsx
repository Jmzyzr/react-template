import { OrderListParams } from '@/pages/order/types';
import {
  ProFormDatePicker,
  ProFormText,
  QueryFilter
} from '@ant-design/pro-components';
import { Form } from 'antd';

const SearchQuery: React.FC<SearchPage<OrderListParams>> = (props) => {
  const [form] = Form.useForm();

  return (
    <QueryFilter
      className="layout-search mb-16"
      form={form}
      colon={false}
      labelWidth={70}
      span={{ xs: 24, sm: 12, md: 8, lg: 8, xl: 6, xxl: 6 }}
      labelAlign="left"
      autoFocusFirstInput={false}
      onFinish={async (values) => props.onChange?.(values)}
      onReset={async (values) => props.onChange?.(values)}
    >
      <ProFormText
        name="user_name"
        label="字典名称"
        placeholder="请输入字典名称"
      ></ProFormText>
      <ProFormText
        name="order_sn"
        label="字典类型"
        placeholder="请输入字典类型"
      ></ProFormText>
      <ProFormDatePicker
        name="start_time"
        label="开始时间"
        placeholder="开始时间"
        fieldProps={{ format: 'YYYY-MM-DD' }}
      />
      <ProFormDatePicker
        name="end_time"
        label="结束时间"
        placeholder="结束时间"
        fieldProps={{ format: 'YYYY-MM-DD' }}
      />
    </QueryFilter>
  );
};
export default SearchQuery;
