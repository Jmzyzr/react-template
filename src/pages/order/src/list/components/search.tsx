import { OrderSource } from '@/pages/order/enums';
import { OrderListParams } from '@/pages/order/types';
import {
  ProFormDatePicker,
  ProFormSelect,
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
      span={{ xs: 24, sm: 12, md: 8, lg: 8, xl: 6, xxl: 4 }}
      labelAlign="left"
      autoFocusFirstInput={false}
      onFinish={async (values) => props.onChange?.(values)}
      onReset={async (values) => props.onChange?.(values)}
    >
      <ProFormText
        name="user_name"
        label="会员昵称"
        placeholder="请输入会员昵称"
      ></ProFormText>
      <ProFormText
        name="order_sn"
        label="订单编号"
        placeholder="请输入订单编号"
      ></ProFormText>
      <ProFormText
        name="consignee"
        label="收货人"
        placeholder="请输入收货人"
      ></ProFormText>
      <ProFormText
        name="phone"
        label="手机号"
        placeholder="请输入手机号"
      ></ProFormText>
      <ProFormSelect
        name="order_source"
        label="订单来源"
        fieldProps={{ placeholder: '请选择订单来源' }}
        options={OrderSource.$options()}
      />
      <ProFormText
        name="order_type"
        label="订单类型"
        placeholder="请输入订单类型"
      ></ProFormText>
      <ProFormText
        name="pay_status"
        label="付款状态"
        placeholder="请输入付款状态"
      ></ProFormText>
      <ProFormText
        name="shipment_status"
        label="发货状态"
        placeholder="请输入发货状态"
      ></ProFormText>
      <ProFormDatePicker
        name="start_time"
        label="开始时间"
        placeholder="付款开始时间"
        fieldProps={{ format: 'YYYY-MM-DD' }}
      />
      <ProFormDatePicker
        name="end_time"
        label="结束时间"
        placeholder="付款结束时间"
        fieldProps={{ format: 'YYYY-MM-DD' }}
      />
    </QueryFilter>
  );
};
export default SearchQuery;
