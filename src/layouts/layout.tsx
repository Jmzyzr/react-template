import userIcon from '@/assets/images/icon/icon-user.png';
import ErrorBoundary from '@/components/errorBoundary';
import { LogoutOutlined } from '@ant-design/icons';
import type { Settings } from '@ant-design/pro-components';
import { RunTimeLayoutConfig, history } from '@umijs/max';
import type { MenuProps } from 'antd';
import { Dropdown } from 'antd';

import config from './config';

const onClick: MenuProps['onClick'] = ({ key }) => {
  if (key === 'logout') {
    history.push('/');
  }
};

const items: MenuProps['items'] = [
  {
    key: 'logout',
    icon: <LogoutOutlined />,
    label: '退出登录'
  }
];

const LayoutConfig: RunTimeLayoutConfig = () => {
  return {
    ...(config as Partial<Settings>),
    avatarProps: {
      src: userIcon,
      size: 'small',
      title: 'cxr admin',
      render: (_, dom) => {
        return <Dropdown menu={{ items, onClick }}>{dom}</Dropdown>;
      }
    },
    menuDataRender: (menuItems: any) => {
      return menuItems.map((item: any) => {
        return {
          ...item,
          icon:
            typeof item.icon === 'string' && item.icon.indexOf('icon') > -1 ? (
              <i className={`${item.icon}`} />
            ) : (
              item.icon
            )
        };
      });
    },
    ErrorBoundary
  };
};

export default LayoutConfig;
