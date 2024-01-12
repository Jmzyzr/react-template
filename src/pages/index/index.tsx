import { EllipsisOutlined } from '@ant-design/icons';
import { PageContainer, ProCard, StatisticCard } from '@ant-design/pro-components';
const { Statistic } = StatisticCard;
const imgStyle = {
  display: 'block',
  width: 42,
  height: 42
};

export default () => {
  return (
    <PageContainer
      style={{ paddingBlock: 16 }}
      token={{
        paddingInlinePageContainerContent: 16,
        paddingBlockPageContainerContent: 12
      }}
      header={{
        ghost: true,
        title: false
      }}
    >
      <ProCard title="数据概览" headerBordered bordered>
        <ProCard colSpan={12} bodyStyle={{ padding: 0 }}>
          <ProCard split="horizontal">
            <ProCard split="horizontal">
              <ProCard split="vertical">
                <StatisticCard
                  statistic={{
                    title: '昨日全部流量',
                    value: 234,
                    description: <Statistic title="较本月平均流量" value="8.04%" trend="down" />
                  }}
                />
                <StatisticCard
                  statistic={{
                    title: '本月累计流量',
                    value: 234,
                    description: <Statistic title="月同比" value="8.04%" trend="up" />
                  }}
                />
              </ProCard>
              <ProCard split="vertical">
                <StatisticCard
                  statistic={{
                    title: '运行中实验',
                    value: '12/56',
                    suffix: '个'
                  }}
                />
                <StatisticCard
                  statistic={{
                    title: '历史实验总数',
                    value: '134',
                    suffix: '个'
                  }}
                />
              </ProCard>
            </ProCard>
            <StatisticCard
              title="流量走势"
              chart={<img src="https://gw.alipayobjects.com/zos/alicdn/_dZIob2NB/zhuzhuangtu.svg" width="100%" />}
            />
          </ProCard>
          <StatisticCard
            title="流量占用情况"
            chart={
              <img
                src="https://gw.alipayobjects.com/zos/alicdn/qoYmFMxWY/jieping2021-03-29%252520xiawu4.32.34.png"
                alt="大盘"
                width="100%"
              />
            }
          />
        </ProCard>
        <ProCard colSpan={12} bodyStyle={{ padding: 0 }}>
          <StatisticCard
            title="大盘趋势"
            tip="大盘说明"
            extra={<EllipsisOutlined />}
            chart={
              <img src="https://gw.alipayobjects.com/zos/alicdn/a-LN9RTYq/zhuzhuangtu.svg" alt="柱状图" width="100%" />
            }
          />
        </ProCard>
      </ProCard>
      <ProCard style={{ marginTop: 16 }} title="数据统计" headerBordered bordered>
        <StatisticCard
          colSpan={7}
          title="财年业绩目标"
          statistic={{
            value: 82.6,
            suffix: '亿',
            description: <Statistic title="日同比" value="6.47%" trend="up" />
          }}
          chart={
            <img
              src="https://gw.alipayobjects.com/zos/alicdn/PmKfn4qvD/mubiaowancheng-lan.svg"
              alt="进度条"
              width="100%"
            />
          }
          footer={
            <>
              <Statistic value="70.98%" title="财年业绩完成率" layout="horizontal" />
              <Statistic value="86.98%" title="去年同期业绩完成率" layout="horizontal" />
              <Statistic value="88.98%" title="前年同期业绩完成率" layout="horizontal" />
            </>
          }
        />
        <StatisticCard.Group>
          <StatisticCard
            colSpan={8}
            statistic={{
              title: '财年总收入',
              value: 601987768,
              description: <Statistic title="日同比" value="6.15%" trend="up" />
            }}
            chart={
              <img
                src="https://gw.alipayobjects.com/zos/alicdn/zevpN7Nv_/xiaozhexiantu.svg"
                alt="折线图"
                width="100%"
              />
            }
          >
            <Statistic
              title="大盘总收入"
              value={1982312}
              layout="vertical"
              description={<Statistic title="日同比" value="6.15%" trend="down" />}
            />
          </StatisticCard>
          <StatisticCard
            colSpan={8}
            statistic={{
              title: '当日排名',
              value: 6,
              description: <Statistic title="日同比" value="3.85%" trend="down" />
            }}
            chart={
              <img
                src="https://gw.alipayobjects.com/zos/alicdn/zevpN7Nv_/xiaozhexiantu.svg"
                alt="折线图"
                width="100%"
              />
            }
          >
            <Statistic
              title="近7日收入"
              value={17458}
              layout="vertical"
              description={<Statistic title="日同比" value="6.47%" trend="up" />}
            />
          </StatisticCard>
          <StatisticCard
            colSpan={8}
            statistic={{
              title: '财年业绩收入排名',
              value: 2,
              description: <Statistic title="日同比" value="6.47%" trend="up" />
            }}
            chart={
              <img
                src="https://gw.alipayobjects.com/zos/alicdn/zevpN7Nv_/xiaozhexiantu.svg"
                alt="折线图"
                width="100%"
              />
            }
          >
            <Statistic
              title="月付费个数"
              value={601}
              layout="vertical"
              description={<Statistic title="日同比" value="6.47%" trend="down" />}
            />
          </StatisticCard>
        </StatisticCard.Group>
      </ProCard>
      <ProCard style={{ marginTop: 16 }} title="数据概览" headerBordered bordered>
        <StatisticCard.Group>
          <StatisticCard
            statistic={{
              title: '支付金额',
              value: 2176,
              icon: (
                <img
                  style={imgStyle}
                  src="https://gw.alipayobjects.com/mdn/rms_7bc6d8/afts/img/A*dr_0RKvVzVwAAAAAAAAAAABkARQnAQ"
                  alt="icon"
                />
              )
            }}
          />
          <StatisticCard
            statistic={{
              title: '访客数',
              value: 475,
              icon: (
                <img
                  style={imgStyle}
                  src="https://gw.alipayobjects.com/mdn/rms_7bc6d8/afts/img/A*-jVKQJgA1UgAAAAAAAAAAABkARQnAQ"
                  alt="icon"
                />
              )
            }}
          />
          <StatisticCard
            statistic={{
              title: '成功订单数',
              value: 87,
              icon: (
                <img
                  style={imgStyle}
                  src="https://gw.alipayobjects.com/mdn/rms_7bc6d8/afts/img/A*FPlYQoTNlBEAAAAAAAAAAABkARQnAQ"
                  alt="icon"
                />
              )
            }}
          />
          <StatisticCard
            statistic={{
              title: '浏览量',
              value: 1754,
              icon: (
                <img
                  style={imgStyle}
                  src="https://gw.alipayobjects.com/mdn/rms_7bc6d8/afts/img/A*pUkAQpefcx8AAAAAAAAAAABkARQnAQ"
                  alt="icon"
                />
              )
            }}
          />
        </StatisticCard.Group>
      </ProCard>
      <ProCard style={{ marginTop: 16 }} title="流量统计" headerBordered bordered>
        <StatisticCard.Group>
          <StatisticCard
            statistic={{
              title: '总流量(人次)',
              value: 601986875
            }}
          />
          <StatisticCard
            statistic={{
              title: '总收入(元)',
              value: 787863123
            }}
          />
          <StatisticCard
            statistic={{
              title: '付费流量',
              value: 3701928,
              description: <Statistic title="占比" value="61.5%" />
            }}
            chart={<img src="https://gw.alipayobjects.com/zos/alicdn/ShNDpDTik/huan.svg" alt="百分比" width="100%" />}
            chartPlacement="left"
          />
          <StatisticCard
            statistic={{
              title: '免费流量',
              value: 1806062,
              description: <Statistic title="占比" value="38.5%" />
            }}
            chart={<img src="https://gw.alipayobjects.com/zos/alicdn/6YR18tCxJ/huanlv.svg" alt="百分比" width="100%" />}
            chartPlacement="left"
          />
        </StatisticCard.Group>
      </ProCard>
    </PageContainer>
  );
};
