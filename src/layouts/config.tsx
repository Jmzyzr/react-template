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
  title: '醇鲜然乳业管理系统',
  iconfontUrl: '',
  token: {
    // 参见ts声明，demo 见文档，通过token 修改样式
    //https://procomponents.ant.design/components/layout#%E9%80%9A%E8%BF%87-token-%E4%BF%AE%E6%94%B9%E6%A0%B7%E5%BC%8F
    sider: {
      menuHeight: 32,
      colorTextMenu: '#4c5666',
      colorMenuBackground: '#ffffff',
      colorTextMenuSelected: '#0173F7',
      colorTextMenuItemHover: '#0173F7'
    },
    pageContainer: {
      paddingInlinePageContainerContent: 0,
      paddingBlockPageContainerContent: 0
    }
  },
  siderWidth: 160
};

export default Settings;
