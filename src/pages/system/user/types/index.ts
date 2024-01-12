import type { DataNode } from 'antd/es/tree';

export interface UserTreeProps extends DataNode {
  key: string;
  id: string;
  name: string;
  weight?: number;
  parentId?: number;
  isHas?: boolean;
  children?: UserTreeProps[];
}

export interface UserListParams {
  user_name?: string;
  phone?: string;
  activity_status?: number;
  page_size: number;
  page_num: number;
}

export interface UserListResult {
  id: string;
  user_name: string;
  user_sn: string;
  company: string;
  dep: number;
  phone: number;
}

export interface OrderFormProps {
  id?: string;
  name: string;
}

export type OrderContextProps = {
  disabled?: boolean;
};

export type OrderColumns = {
  order_sn: string;
  user_name: string;
  goods_name: string;
  order_source: number;
  pay_num: number;
  consignee: string;
  address: string;
  tracking_number: string;
};
