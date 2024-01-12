import BaseLayout from '@/layouts/layout';
import {
  errorHandler,
  requestInterceptors,
  responseInterceptors
} from '@/utils/request';
import type { RequestConfig, RunTimeLayoutConfig } from '@umijs/max';
import { App, ConfigProvider } from 'antd';
import theme from './theme';

// 全局初始化数据配置，用于 Layout 用户信息和权限初始化
// 更多信息见文档：https://umijs.org/docs/api/runtime-config#getinitialstate
export async function getInitialState(): Promise<{ name: string }> {
  return { name: '@umijs/max' };
}

export const layout: RunTimeLayoutConfig = BaseLayout;

export const request: RequestConfig = {
  baseURL: process.env.NODE_ENV === 'development' ? '/dev-api' : '',
  timeout: 40000,
  errorConfig: { errorHandler },
  requestInterceptors,
  responseInterceptors
};

export function rootContainer(container: any) {
  return (
    <ConfigProvider theme={theme}>
      <App>{container}</App>
    </ConfigProvider>
  );
}
