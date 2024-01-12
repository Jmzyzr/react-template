declare global {
  import '@umijs/max/typings';
}
declare module 'mockjs';

declare const ENV_BUILD_ENV: string;

declare const PROCESS_IS_DEV: boolean;

declare namespace API {
  interface BaseResult<T = Record<string, any>> {
    code?: number;
    message?: string;
    data?: T;
  }

  interface PageResult<T = any> {
    data: T[];
    page_num: number;
    page_size: number;
    count: number;
  }
}

declare interface SearchPage<T = any> {
  params: T;
  onChange?: (data: T) => void;
}

declare interface TableParams {
  pageSize?: number;
  current?: number;
  keyword?: string;
}
