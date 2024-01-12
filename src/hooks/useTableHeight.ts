import { useState } from 'react';

export const useTableHeight = (tableWrapRef: any) => {
  const [tableHeight, setTableHeight] = useState(0);
  setTimeout(() => {
    // tableWrap高度 - pagination高度 - 表头高度
    console.log(tableWrapRef.current?.getBoundingClientRect().height);
    tableHeight === 0 &&
      setTableHeight(
        tableWrapRef.current?.getBoundingClientRect().height - 48 - 56
      );
  }, 300);
  return {
    tableHeight: `calc( 100vh - ${tableHeight}px )`
  };
};
