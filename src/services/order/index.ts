import { OrderListParams } from '@/pages/order/types';
import { request } from '@umijs/max';

const gateway = '';

// 列表分页查询
export const GetPageList = (data: OrderListParams) => {
  return request<API.BaseResult<API.PageResult<OrderListParams>>>(`${gateway}/list/page`, {
    method: 'POST',
    data: { ...data }
  });
};
