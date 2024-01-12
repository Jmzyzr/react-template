import { OrderSource, OrderType } from '@/pages/order/enums';
import {
  ProCard,
  ProFormCheckbox,
  ProFormDateRangePicker,
  ProFormRadio,
  ProFormSelect,
  ProFormSwitch,
  ProFormText,
  ProFormTextArea
} from '@ant-design/pro-components';
import { Form } from 'antd';

// 基础设置
const BasicForm = () => {
  const formRef = Form.useFormInstance();

  return (
    <ProCard
      bodyStyle={{ padding: '24px', borderBottom: '1px solid #eceef2' }}
      headStyle={{ padding: '16px 24px', borderBottom: '1px solid #eceef2' }}
      title="基础设置"
    >
      <ProFormText
        width={328}
        fieldProps={{
          maxLength: 20,
          showCount: true,
          onBlur: (e) => {
            formRef.setFieldValue('name', String(e?.target?.value).trim());
          }
        }}
        name="name"
        label="订单名称"
        placeholder="请输入订单名称"
        validateTrigger="onBlur"
        rules={[{ required: true, message: '请输入订单名称' }]}
      />
      <ProFormTextArea
        width={328}
        name="desc"
        label="订单描述"
        placeholder="请输入订单描述"
        fieldProps={{
          rows: 4,
          maxLength: 500,
          showCount: true,
          className: 'ik-form-item-count',
          onBlur: (e) => {
            formRef.setFieldValue('desc', String(e?.target?.value).trim());
          }
        }}
        rules={[{ required: true, message: '请输入订单描述' }]}
      />
      <ProFormSelect
        width={328}
        name="status"
        label="订单状态"
        request={async () => [
          { label: '全部', value: 'all' },
          { label: '未解决', value: 'open' },
          { label: '已解决', value: 'closed' },
          { label: '解决中', value: 'processing' }
        ]}
        placeholder="请选择订单状态"
        rules={[{ required: true, message: '请选择订单状态' }]}
      />
      <ProFormSwitch
        name="switch"
        label="支付状态"
        rules={[{ required: true, message: '请选择支付状态' }]}
      />
      <ProFormDateRangePicker
        name="timeRange"
        label="订单时间"
        placeholder={['开始日期', '结束日期']}
        fieldProps={{ format: 'YYYY-MM-DD' }}
        rules={[{ required: true, message: '请选择订单时间' }]}
      />
      <ProFormRadio.Group
        name="order_source"
        label="订单来源"
        options={OrderSource.$options()}
        rules={[{ required: true, message: '请选择订单来源' }]}
      />
      <ProFormCheckbox.Group
        name="order_source_checkbox"
        label="订单类型"
        options={OrderType.$options()}
        rules={[{ required: true, message: '请选择订单类型' }]}
      />
    </ProCard>
  );
};

export default BasicForm;
