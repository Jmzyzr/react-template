import styles from '@/assets/styles/default.less';
import {
  convertValue,
  defaultFormData,
  transformValue
} from '@/pages/order/src/form/utils';
import { OrderFormProps } from '@/pages/order/types';
import { ProForm, ProFormInstance } from '@ant-design/pro-components';
import { useNavigate, useSearchParams } from '@umijs/max';
import { Breadcrumb, Button, Modal, Space, Spin, message } from 'antd';
import { useEffect, useRef, useState } from 'react';
import BasicForm from './basic';

const OrderForm = () => {
  const [loading, setLoading] = useState(false);
  const formRef = useRef<ProFormInstance>();
  const [params] = useSearchParams();
  const id: string | null = params.get('id');
  const navigate = useNavigate();

  const request = () => {
    if (!id) return false;
    setLoading(true);
  };

  const updateFormData = (data: OrderFormProps = defaultFormData) => {
    const currentData = convertValue(data);
    formRef.current?.setFieldsValue(currentData);
  };

  // 初始化表单
  useEffect(() => {
    if (id) {
      request();
    } else {
      updateFormData();
    }
  }, []);

  const onSubmit = () => {
    formRef.current
      ?.validateFieldsReturnFormatValue?.()
      .then(async () => {
        const currentData = formRef.current?.getFieldsValue(true);
        const formData = transformValue(currentData);
        console.log('formData', formData);
      })
      .catch((values) => {
        message.warning('请完善信息后，再保存');
        formRef.current?.scrollToField(values.errorFields[0].name);
      });
  };

  const navigateBack = () => {
    navigate('/order');
  };

  const confirmBack = () => {
    if (loading) return;
    Modal.confirm({
      title: (
        <>
          <i className="iconfont icon-error-circle-filled" />
          温馨提示
        </>
      ),
      width: 432,
      content: '即将离开页面，将不会保存已编辑的内容，是否确认离开？',
      okText: '确定',
      cancelText: '取消',
      centered: true,
      onOk: () => {
        return new Promise<void>((resolve) => {
          navigateBack();
          resolve();
        });
      }
    });
  };

  return (
    <div className={styles.LayoutContainer}>
      <Breadcrumb className={styles.breadcrumb}>
        <Breadcrumb.Item>
          <a onClick={confirmBack}>订单管理</a>
        </Breadcrumb.Item>
        <Breadcrumb.Item>{id ? '编辑' : '新增'}订单</Breadcrumb.Item>
      </Breadcrumb>
      <Spin spinning={loading} wrapperClassName={styles.content}>
        <ProForm<OrderFormProps>
          formRef={formRef}
          submitter={false}
          scrollToFirstError={true}
          omitNil
        >
          <BasicForm />
        </ProForm>
      </Spin>
      <Space className={styles.footer}>
        <Button onClick={confirmBack}>取消</Button>
        <Button
          htmlType={'submit'}
          type="primary"
          onClick={onSubmit}
          loading={loading}
        >
          保存
        </Button>
      </Space>
    </div>
  );
};

export default OrderForm;
