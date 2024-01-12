import { UserListParams, UserTreeProps } from '@/pages/system/user/types';
import { PageContainer, ProCard } from '@ant-design/pro-components';
import { useState } from 'react';
import SearchQuery from './components/search';
import DataTable from './components/table';
import UserTree from './components/userTree';

const UserLayout = () => {
  const [currentUser, setCurrentUser] = useState<UserTreeProps>();
  let defaultParams = {
    page_num: 1,
    page_size: 20
  };
  const [params, setParams] = useState<UserListParams>(defaultParams);
  const onChange = (data: UserListParams) => {
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
        breadcrumb: { items: [{ title: '用户管理' }] }
      }}
    >
      <ProCard gutter={16} ghost>
        <ProCard
          colSpan="360px"
          bodyStyle={{
            height: 'calc( 100vh - 126px )',
            paddingInline: '26px 8px',
            paddingBlock: 24
          }}
        >
          <UserTree onChange={setCurrentUser} />
        </ProCard>
        <ProCard
          colSpan="auto"
          bodyStyle={{ height: 'calc( 100vh - 184px )', padding: 0 }}
          title={currentUser?.name}
          headerBordered
        >
          <SearchQuery params={params} onChange={onChange} />
          <DataTable params={params} />
        </ProCard>
      </ProCard>
    </PageContainer>
  );
};

export default UserLayout;
