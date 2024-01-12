import { UserTreeProps } from '@/pages/system/user/types';
export const treeConfig = {
  //自定义节点 title、key、children 的字段
  fieldNames: {
    key: 'id',
    title: 'name',
    children: 'children'
  },
  // 是否点击label选中
  selectable: true,
  // 是否显示图标
  showIcon: true
};

/**
 * 组织结构树数据处理
 * @param treeData
 * @returns
 */
export const convertUserTree = (treeData: UserTreeProps[], filterText: string) => {
  const loop = (data: any) => {
    return data?.map((item: UserTreeProps) => {
      const icon =
        item.parentId === 0 ? <i className="iconfont icon-enterprise-solid" /> : <i className="iconfont icon-folder" />;

      // 文字匹配搜索
      const strName = item.name;
      const index = strName.indexOf(filterText);
      const beforeStr = strName.substring(0, index);
      const afterStr = strName.slice(index + filterText.length);
      const name =
        index > -1 ? (
          <span>
            {beforeStr}
            <span className="color-base">{filterText}</span>
            {afterStr}
          </span>
        ) : (
          <span>{strName}</span>
        );

      const isHas = index > -1 || item.children?.length ? strName : null;
      return {
        ...item,
        ...{
          icon,
          name,
          isHas,
          children: loop(item.children)
        }
      };
    });
  };

  return loop(treeData);
};
