import { ScrollTable } from '@/components/scrollTable';
import { OrderColumns, OrderListParams } from '@/pages/order/types';
import { GetUserList } from '@/services/system/user';
import { ActionType, ProColumns } from '@ant-design/pro-components';
import { Button, Space, Typography } from 'antd';
import to from 'await-to-js';
import { useRef } from 'react';

const { Paragraph } = Typography;

const DataTable = (props: SearchPage<OrderListParams>) => {
  const { params } = props;
  const tableRef = useRef<ActionType>();

  const request = async ({ current, pageSize }: TableParams) => {
    const [err, res] = await to(
      GetUserList({
        ...params,
        ...{
          page_num: current!,
          page_size: pageSize!
        }
      })
    );
    if (err) return { success: false };
    return {
      success: true,
      data: res.data?.data || [],
      total: res.data?.count
    };
  };

  const columns: ProColumns<OrderColumns>[] = [
    {
      title: '用户编号',
      dataIndex: 'user_sn',
      width: 220,
      render: (_, record: any) => (
        <Paragraph
          className="field-paragraph"
          style={{ width: 188 }}
          ellipsis={{ rows: 2, tooltip: record.user_sn }}
        >
          {record.user_sn || '-'}
        </Paragraph>
      )
    },
    {
      title: '用户名称',
      dataIndex: 'user_name',
      render: (_, record: any) => (
        <Paragraph
          className="field-paragraph"
          style={{ width: 120 }}
          ellipsis={{ rows: 2, tooltip: record.user_name }}
        >
          {record.user_name || '-'}
        </Paragraph>
      )
    },
    {
      title: '公司',
      dataIndex: 'company',
      render: (_, record: any) => (
        <Paragraph
          className="field-paragraph"
          style={{ width: 120 }}
          ellipsis={{ rows: 2, tooltip: record.company }}
        >
          {record.company || '-'}
        </Paragraph>
      )
    },
    {
      title: '部门',
      dataIndex: 'dep',
      render: (_, record: any) => (
        <Paragraph
          className="field-paragraph"
          style={{ width: 120 }}
          ellipsis={{ rows: 2, tooltip: record.dep }}
        >
          {record.dep || '-'}
        </Paragraph>
      )
    },
    {
      title: '手机号码',
      dataIndex: 'phone',
      render: (_, record: any) => (
        <Paragraph
          className="field-paragraph"
          style={{ width: 120 }}
          ellipsis={{ rows: 2, tooltip: record.phone }}
        >
          {record.phone || '-'}
        </Paragraph>
      )
    },
    {
      title: '操作',
      align: 'right',
      fixed: 'right',
      width: 160,
      render: () => (
        <Space size={18}>
          <Button type="link" style={{ padding: 0 }}>
            编辑
          </Button>
          <Button type="link" style={{ padding: 0 }}>
            详情
          </Button>
          <Button type="link" style={{ padding: 0 }}>
            删除
          </Button>
        </Space>
      )
    }
  ];

  return (
    <ScrollTable
      actionRef={tableRef}
      columns={columns}
      request={request}
      params={params}
      headerTitle={
        <Button key="primary" type="primary">
          新增
        </Button>
      }
      rowKey="id"
      search={false}
      defaultHeight={90}
    />
  );
};
export default DataTable;
