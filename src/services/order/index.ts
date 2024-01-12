import { OrderListParams } from '@/pages/order/types';
import { request } from '@umijs/max';

const gateway =
  'https://www.fastmock.site/mock/4f3ca3df8c126efba460bda14af61dc5/cxrApi';

// 列表分页查询
export const GetPageList = (data: OrderListParams) => {
  return request<API.BaseResult<API.PageResult<OrderListParams>>>(
    `${gateway}/list/page`,
    {
      method: 'POST',
      data: { ...data }
    }
  );
};
