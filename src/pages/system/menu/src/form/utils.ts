import { OrderFormProps } from '@/pages/order/types';
import { cloneDeep } from 'lodash-es';

/**
 * 初始化默认数据
 */
export const defaultFormData: OrderFormProps = {
  name: ''
};

/**
 * 数据转化处理 前置转化
 * @param data
 * @returns
 */
export const convertValue = (data: OrderFormProps) => {
  let formData: OrderFormProps = cloneDeep(data);
  return formData;
};

/**
 * 数据转化处理 提交时转化
 * @param form
 * @returns
 */
export const transformValue = (form: OrderFormProps) => {
  let formData: OrderFormProps = cloneDeep(form);

  return formData;
};
