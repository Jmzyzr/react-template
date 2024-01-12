import enummapping from 'enummapping';

/**
 * @description：下单来源
 */
export const OrderSource = enummapping({
  applet: { code: 1, label: '微信小程序' },
  official: { code: 2, label: '微信公众号' },
  app: { code: 3, label: 'APP' },
  h5: { code: 4, label: 'H5' },
  zfb: { code: 5, label: '支付宝小程序' },
  qq: { code: 6, label: 'QQ小程序' },
  headlines: { code: 7, label: '头条小程序' }
});

/**
 * @description：订单类型
 */
export const OrderType = enummapping({
  mall: { code: 1, label: '商城订单' },
  store: { code: 2, label: '店铺自提订单' },
  sale: { code: 3, label: '秒杀订单' },
  integral: { code: 4, label: '积分订单' },
  teamwork: { code: 5, label: '拼团订单' }
});
