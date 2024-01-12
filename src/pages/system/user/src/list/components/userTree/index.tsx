import styles from '@/pages/system/user/styles/userTree.less';
import { UserTreeProps } from '@/pages/system/user/types';
import { GetUserTree } from '@/services/system/user';
import { PlusOutlined } from '@ant-design/icons';
import type { TreeProps } from 'antd';
import { Button, Flex, Input, Tree } from 'antd';
import to from 'await-to-js';
import { useEffect, useMemo, useState } from 'react';
import { convertUserTree, treeConfig } from './utils';
import { useDebounce } from 'ahooks'

const { Search } = Input;

type UserTreeType = {
  onChange: (data: UserTreeProps) => void;
};

const UserTree: React.FC<UserTreeType> = (props) => {
  const { onChange } = props;
  const [dataInfo, setDataInfo] = useState<UserTreeProps[]>([]);
  const [expandedKeys, setExpandedKeys] = useState<string[]>([]);
  const [selectedKeys, setSelectedKeys] = useState<string[]>([]);
  const [searchValue, setSearchValue] = useState('');
	const searchDebounced = useDebounce(searchValue, { wait: 200 })

  const onSearch = (value: string) => {
    setSearchValue(value?.trim() ?? '');
  };

  const onSelect: NonNullable<TreeProps<any>['onSelect']> = (_, info) => {
    if (info.node.children?.length) {
      // 有叶子结点
      if (expandedKeys.includes(info.node.id)) {
        setExpandedKeys(expandedKeys.filter((key) => key !== info.node.id));
      } else {
        setExpandedKeys(expandedKeys.concat(info.node.id));
      }
    } else {
      // 没有叶子结点，点击 label，触发复选框点击事件
      let dom: HTMLElement | null = info.nativeEvent.target as HTMLElement;
      while (dom) {
        if (
          dom?.className?.includes('ant-tree-node-content-wrapper') &&
          dom.previousElementSibling?.className?.includes('ant-tree-checkbox')
        ) {
          break;
        }
        dom = dom.parentElement;
      }
      if (dom) {
        dom.previousElementSibling?.dispatchEvent(
          new MouseEvent('click', {
            cancelable: false,
            bubbles: true
          })
        );
      }
    }
    setSelectedKeys([info.node.id]);
    onChange({
      id: info.node.id,
      key: info.node.key,
      name: info.node.name
    });
  };

  /**
   * 展开/收起节点时触发
   * @param checkedKeys
   */
  const onExpand = (checkedKeys: any) => {
    setExpandedKeys(checkedKeys);
  };

  const request = async () => {
    const [err, res] = await to(GetUserTree());
    if (err) {
      throw err;
    }
    if (res.data) {
      // 遍历生成当前一级节点数据id
      const expandedIds: string[] = [];
      res.data.forEach((item: UserTreeProps, index: number) => {
        expandedIds.push(item.id);
        if (index === 0) {
          setSelectedKeys([item.id]);
          onChange(item);
        }
      });
      setExpandedKeys(expandedIds);
      setDataInfo(res.data);
    }
  };

  useEffect(() => {
    request();
  }, []);

  const treeData = useMemo(() => {
    return convertUserTree(dataInfo, searchDebounced);
  }, [dataInfo, searchDebounced]);

  return (
    <Flex vertical gap={16} className={styles.UserTree}>
      <Flex justify="space-between">
        <Flex flex={1}>
          <Search placeholder="请输入部门名称" onSearch={onSearch} />
        </Flex>
        <Button type="link" icon={<PlusOutlined />}>
          新增
        </Button>
      </Flex>
      <Tree<UserTreeProps>
        {...treeConfig}
        className={styles.TreeNode}
        selectedKeys={selectedKeys}
        onSelect={onSelect}
        onExpand={onExpand}
        treeData={treeData}
        expandedKeys={expandedKeys}
        blockNode
      />
    </Flex>
  );
};

export default UserTree;
