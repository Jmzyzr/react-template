import storage from '@/utils/storage';
import { LockOutlined, UserOutlined } from '@ant-design/icons';
import { LoginForm, ProFormCheckbox, ProFormText } from '@ant-design/pro-components';
import { history } from '@umijs/max';
import { App } from 'antd';
import styles from './styles/index.less';

export default () => {
  const { message } = App.useApp();

  return (
    <div className={styles.LoginForm}>
      <LoginForm
        title="醇鲜然乳业管理系统"
        containerStyle={{ height: '100vh', justifyContent: 'center' }}
        onFinish={async (values) => {
          console.log('values', values);
          storage.setItem('Authorization', '4324728934723894723');
          message.success('登录成功');
          history.push('/home');
        }}
      >
        <ProFormText
          name="username"
          fieldProps={{
            size: 'large',
            prefix: <UserOutlined className={'prefixIcon'} />
          }}
          placeholder={'用户名: admin'}
          rules={[
            {
              required: true,
              message: '请输入用户名!'
            }
          ]}
        />
        <ProFormText.Password
          name="password"
          fieldProps={{
            size: 'large',
            prefix: <LockOutlined className={'prefixIcon'} />
          }}
          placeholder={'密码: 123456'}
          rules={[
            {
              required: true,
              message: '请输入密码！'
            }
          ]}
        />
        <div
          style={{
            marginBlockEnd: 24
          }}
        >
          <ProFormCheckbox noStyle name="autoLogin">
            自动登录
          </ProFormCheckbox>
          <a
            style={{
              float: 'right'
            }}
          >
            忘记密码
          </a>
        </div>
      </LoginForm>
    </div>
  );
};
