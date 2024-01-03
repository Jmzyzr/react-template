import { OrderListParams } from '@/pages/order/types';
import { PageContainer } from '@ant-design/pro-components';
import { useState } from 'react';
import SearchQuery from './components/search';
import DataTable from './components/table';

const OrderList = () => {
  let defaultParams = {
    page_num: 1,
    page_size: 20
  };
  const [params, setParams] = useState<OrderListParams>(defaultParams);
  const onChange = (data: OrderListParams) => {
    setParams({ ...data, ...defaultParams });
  };

  return (
    <PageContainer
      token={{
        paddingInlinePageContainerContent: 16,
        paddingBlockPageContainerContent: 12
      }}
      header={{
        ghost: true,
        title: false,
        breadcrumb: { items: [{ title: '订单管理' }] }
      }}
    >
      <SearchQuery params={params} onChange={onChange} />
      <DataTable params={params} />
    </PageContainer>
  );
};

export default OrderList;
