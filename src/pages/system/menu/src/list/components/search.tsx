import { OrderListParams } from '@/pages/order/types';
import { ProFormText, QueryFilter } from '@ant-design/pro-components';
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
      <ProFormText name="user_name" label="菜单名称" placeholder="请输入菜单名称" />
      <ProFormText name="order_sn" label="菜单状态" placeholder="请输入菜单状态" />
    </QueryFilter>
  );
};
export default SearchQuery;
