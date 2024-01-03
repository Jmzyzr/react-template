import mockjs from 'mockjs';

export default {
  'POST /dev-api/list/page': mockjs.mock({
    code: 0,
    message: 'ok',
    data: {
      'data|100': [
        {
          id: '@id',
          user_name: '@ctitle(5,8)',
          order_sn: 'cxr' + Math.floor(Math.random() * 1000000000000000000),
          goods_name: '@csentence(50,100)',
          consignee: '@ctitle(5,8)',
          address: '@csentence(50,100)',
          pay_num: Math.ceil(Math.random() * 1000),
          tracking_number: Math.ceil(Math.random() * 1000000000000000000),
          'order_source|1': [1, 2, 3, 4, 5, 6, 7]
        }
      ],
      count: 100,
      page_size: 1,
      page_num: 20
    }
  })
};
