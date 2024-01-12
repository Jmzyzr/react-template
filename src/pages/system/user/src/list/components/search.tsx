import { UserListParams } from '@/pages/system/user/types';
import { ProFormText, QueryFilter } from '@ant-design/pro-components';
import { Form } from 'antd';

const SearchQuery: React.FC<SearchPage<UserListParams>> = (props) => {
  const [form] = Form.useForm();

  return (
    <QueryFilter
      style={{ padding: '24px 24px 8px 24px' }}
      form={form}
      colon={false}
      labelWidth={70}
      labelAlign="left"
      autoFocusFirstInput={false}
      onFinish={async (values) => props.onChange?.(values)}
      onReset={async (values) => props.onChange?.(values)}
    >
      <ProFormText
        name="user_name"
        label="用户名称"
        placeholder="请输入用户名称"
      />
      <ProFormText name="phone" label="手机号码" placeholder="请输入手机号码" />
    </QueryFilter>
  );
};
export default SearchQuery;
