import { ProTable } from '@ant-design/pro-components';
import { useSize } from 'ahooks';
import { FC, useEffect, useRef, useState } from 'react';
import { ProTableConfig } from './config';
import { ScrollTableParams, ScrollTableProps } from './types';

/**
 * 获取表格可视化高度
 * @param {number} extraHeight 默认底部分页64 + 底部边距24
 * @param {reactRef} ref Table所在的组件的ref
 * @param {number} total 列表总数
 * @param data
 * @returns
 */
export const getTableAutoScroll = (data: ScrollTableParams) => {
  // 搜索栏每行高度值
  const defaultRowsHeight = 56;
  // 底部高度
  let defaultHeight = data.defaultHeight;
  let height = data.scrollY;
  if (!height) {
    // 表格内容距离顶部的距离
    let scrollTop = 0;
    let tbody = data.ref.current?.getElementsByClassName(data.elementsByClassName || 'ant-table-body')?.[0];
    if (tbody) {
      scrollTop = tbody.getBoundingClientRect().top;
    }

    // 计算搜索栏高度
    if (data.searchRows && scrollTop) scrollTop = scrollTop - (data.searchRows - 1) * defaultRowsHeight;

    // 表格内容底部的高度
    const paginationHeight = Number(data.total) ? 64 : 0;
    if (!defaultHeight) defaultHeight = paginationHeight + 16;

    // 窗体高度 -( 表格内容顶部的高度 + 表格内容底部的高度 )
    height = `calc(100vh - ${scrollTop + defaultHeight}px)`;
  }
  setTableHeight(data, height);
  return height;
};

/**
 * 设置表格高度
 * @param data
 * @param height
 */
const setTableHeight = (data: ScrollTableParams, height: any) => {
  let tableBody = data.ref.current?.getElementsByClassName('ant-table-body')[0];
  if (tableBody) {
    tableBody.style.display = 'block';
    tableBody.style.height = height;
    tableBody.style.overflow = Number(data.total) ? 'auto scroll' : 'hidden';
  }

  if (!Number(data.total)) {
    let placeholder = data.ref.current?.getElementsByClassName('ant-table-placeholder')[0];
    if (placeholder) {
      placeholder.style.height = height;
      placeholder.style.overflow = 'hidden';
    } else {
      tableBody.style.display = 'flex';
    }
  }
};

/**
 * ProTable 拓展自适应高度
 * @param props
 * @returns
 */
export const ScrollTable: FC<ScrollTableProps> = (props) => {
  const [scrollY, setScrollY] = useState<number | string>();
  let scrollRef = useRef<HTMLDivElement>(null);
  const collapse = typeof props.collapse === 'boolean' ? props.collapse : true;
  const headerRef = useRef<HTMLElement>();
  const headerSize = useSize(headerRef);
  const [total, setTotal] = useState(0);

  const state = {
    ref: scrollRef,
    scrollY: props.scrollY,
    searchRows: props.searchRows,
    elementsByClassName: props.elementsByClassName,
    defaultHeight: props.defaultHeight,
    total
  };
  useEffect(() => {
    if (collapse) setScrollY(getTableAutoScroll(state));
  }, []);

  useEffect(() => {
    if (props.dataSource && props.dataSource.length > 0) {
      onLoad(props.dataSource);
    }
  }, [props?.dataSource]);

  useEffect(() => {
    setScrollY(getTableAutoScroll(state));
  }, [headerSize?.height]);

  const onLoad = (dataSource: readonly any[]) => {
    setTotal(dataSource.length ?? 0);
    const defaultValue: ScrollTableParams = state;
    if (dataSource?.length) {
      defaultValue.total = dataSource?.length;
    }

    // 搜索条件展开时不做高度调整
    if (collapse) setScrollY(getTableAutoScroll(defaultValue));
    headerRef.current = scrollRef.current?.getElementsByClassName(props.elementsByClassName || 'ant-table-thead')[0] as HTMLElement;
  };

  return (
    <div ref={scrollRef}>
      <ProTable
        {...ProTableConfig}
        {...props}
        scroll={{ x: '100%', y: props.scrollY ? props.scrollY : scrollY, scrollToFirstRowOnChange: true }}
        onLoad={onLoad}
      />
    </div>
  );
};
