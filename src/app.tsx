import BaseLayout from '@/layouts/Layout';
import type { RunTimeLayoutConfig } from '@umijs/max';
import { ConfigProvider } from 'antd';
import theme from './theme';

// 全局初始化数据配置，用于 Layout 用户信息和权限初始化
// 更多信息见文档：https://umijs.org/docs/api/runtime-config#getinitialstate
export async function getInitialState(): Promise<{ name: string }> {
  return { name: '@umijs/max' };
}

export const layout: RunTimeLayoutConfig = BaseLayout;

export function rootContainer(container: any) {
  return <ConfigProvider theme={theme}>{container}</ConfigProvider>;
}
