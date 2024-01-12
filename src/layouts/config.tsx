import { ProLayoutProps } from '@ant-design/pro-components';
import styles from './styles/index.less';

/**
 * @name 系统layout配置
 */
const Settings: ProLayoutProps = {
  className: styles.Layout,
  navTheme: 'light',
  colorPrimary: '#1890ff',
  layout: 'mix',
  contentWidth: 'Fluid',
  fixedHeader: false,
  fixSiderbar: true,
  colorWeak: false,
  openKeys: false,
  splitMenus: false,
  title: '醇鲜然乳业管理系统',
  iconfontUrl: '',
  token: {
    bgLayout: '#F2F3F5',
    // 参见ts声明，demo 见文档，通过token 修改样式
    //https://procomponents.ant.design/components/layout#%E9%80%9A%E8%BF%87-token-%E4%BF%AE%E6%94%B9%E6%A0%B7%E5%BC%8F
    sider: {
      menuHeight: 32,
      colorTextMenu: '#606266',
      colorMenuBackground: '#ffffff',
      colorTextMenuSelected: '#0173F7',
      colorTextMenuItemHover: '#606266',
      colorBgMenuItemSelected: '#EBF4FF'
    },
    pageContainer: {
      paddingInlinePageContainerContent: 0,
      paddingBlockPageContainerContent: 0
    }
  },
  siderWidth: 160,
  appList: [
    {
      icon: 'https://gw.alipayobjects.com/zos/bmw-prod/d3e3eb39-1cd7-4aa5-827c-877deced6b7e/lalxt4g3_w256_h256.png',
      title: '羊大师商城',
      desc: '羊大师商城',
      url: 'http://10.10.18.251/mallAdmin',
      target: '_blank'
    },
    {
      icon: 'https://gw.alipayobjects.com/zos/bmw-prod/d3e3eb39-1cd7-4aa5-827c-877deced6b7e/lalxt4g3_w256_h256.png',
      title: '醇鲜然系统',
      desc: '醇鲜然乳业后台管理系统',
      url: 'http://10.10.18.251/admin',
      target: '_blank'
    }
  ]
};

export default Settings;
