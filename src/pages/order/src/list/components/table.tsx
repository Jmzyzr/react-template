import { ScrollTable } from '@/components/scrollTable';
import { OrderSource } from '@/pages/order/enums';
import { OrderColumns, OrderListParams } from '@/pages/order/types';
import { GetPageList } from '@/services/order/index';
import { ActionType, ProColumns } from '@ant-design/pro-components';
import { useNavigate } from '@umijs/max';
import { Button, Space, Typography } from 'antd';
import to from 'await-to-js';
import { useRef } from 'react';

const { Paragraph } = Typography;

const DataTable = (props: SearchPage<OrderListParams>) => {
  const { params } = props;
  const tableRef = useRef<ActionType>();
  const navigate = useNavigate();

  const request = async ({ current, pageSize }: TableParams) => {
    const [err, res] = await to(
      GetPageList({
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
      title: '订单编号',
      dataIndex: 'order_sn',
      width: 220,
      render: (_, record: any) => (
        <Paragraph
          className="field-paragraph"
          style={{ width: 188 }}
          ellipsis={{ rows: 2, tooltip: record.order_sn }}
        >
          {record.order_sn || '-'}
        </Paragraph>
      )
    },
    {
      title: '会员名称',
      dataIndex: 'user_name',
      width: 152,
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
      title: '商品名称',
      dataIndex: 'goods_name',
      width: 220,
      render: (_, record: any) => (
        <Paragraph
          className="field-paragraph"
          style={{ width: 188 }}
          ellipsis={{ rows: 2, tooltip: record.goods_name }}
        >
          {record.goods_name || '-'}
        </Paragraph>
      )
    },
    {
      title: '订单来源',
      dataIndex: 'order_source',
      render: (_, record: any) => (
        <span>{OrderSource[record.order_source]?.label}</span>
      ),
      width: 190
    },
    {
      title: '购买数量',
      dataIndex: 'pay_num',
      width: 120
    },
    {
      title: '收货人',
      dataIndex: 'consignee',
      width: 220,
      render: (_, record: any) => (
        <Paragraph
          className="field-paragraph"
          style={{ width: 188 }}
          ellipsis={{ rows: 2, tooltip: record.consignee }}
        >
          {record.consignee || '-'}
        </Paragraph>
      )
    },
    {
      title: '收货地址',
      dataIndex: 'address',
      width: 220,
      render: (_, record: any) => (
        <Paragraph
          className="field-paragraph"
          style={{ width: 188 }}
          ellipsis={{ rows: 2, tooltip: record.address }}
        >
          {record.address || '-'}
        </Paragraph>
      )
    },
    {
      title: '快递单号',
      dataIndex: 'tracking_number',
      width: 220,
      render: (_, record: any) => (
        <Paragraph
          className="field-paragraph"
          style={{ width: 188 }}
          ellipsis={{ rows: 2, tooltip: record.tracking_number }}
        >
          {record.tracking_number || '-'}
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
        <Button
          key="primary"
          type="primary"
          onClick={() => navigate(`/order/form`)}
        >
          新增
        </Button>
      }
      rowKey="id"
      search={false}
    />
  );
};
export default DataTable;
