import type { ProTableProps } from '@ant-design/pro-components';

export interface ScrollTableParams {
  ref?: any;
  defaultHeight?: number;
  total?: number;
  collapse?: boolean;
  scrollY?: number | string;
  searchRows?: number;
  elementsByClassName?: string;
}

export type ScrollTableProps<T = any, U = any, ValueType = 'text'> = {
  collapse?: boolean;
  defaultHeight?: number;
  scrollY?: number | string;
  searchRows?: number;
  elementsByClassName?: string;
} & Omit<ProTableProps<T, U, ValueType>, 'scrollY'>;
