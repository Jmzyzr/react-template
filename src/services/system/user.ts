import {
  UserListParams,
  UserListResult,
  UserTreeProps
} from '@/pages/system/user/types';
import { request } from '@umijs/max';

const gateway =
  'https://www.fastmock.site/mock/4f3ca3df8c126efba460bda14af61dc5/cxrApi';

// 租户层级树查询
export const GetUserTree = (data?: { name?: string }) => {
  return request<API.BaseResult<UserTreeProps[]>>(`${gateway}/getTree`, {
    method: 'POST',
    data: { ...data }
  });
};

export const GetUserList = (data?: UserListParams) => {
  return request<API.BaseResult<API.PageResult<UserListResult>>>(
    `${gateway}/getUser`,
    {
      method: 'POST',
      data: { ...data }
    }
  );
};
