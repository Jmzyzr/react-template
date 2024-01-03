import { TOKEN } from '@/constants';
import { AxiosRequestConfig, history, request, RequestConfig } from '@umijs/max';
import { message } from 'antd';
import { axiosCanceler } from './axiosCancel';
import { disableGlobalErrorCode, ResultEnum } from './constants';

// 默认地址请求地址
const successCode = [ResultEnum.SUCCESS, ResultEnum.SCRM_SUCCESS];

const codeMessage: Partial<Record<number, string>> = {
  400: '请求失败！请您稍后重试',
  401: '登录失效！请您重新登录',
  403: '当前账号无权限访问！',
  404: '你所访问的资源不存在！',
  405: '网络异常，请稍后再试~',
  408: '请求超时！请您稍后重试',
  500: '网络繁忙，请稍后再试',
  502: '网络繁忙，请稍后重试',
  503: '网络异常，请稍后再试',
  504: '网络异常，请稍后重试'
};

// 请求前拦截
// 配合jwt可以验证token过期时间，待接口加上jwt
export const requestInterceptors: RequestConfig['requestInterceptors'] = [
  (options: AxiosRequestConfig) => {
    axiosCanceler.addPending(options);
    const authorization = localStorage.getItem(TOKEN);

    const authHeader = {
      Authorization: authorization
    };
    if (!authorization) {
      // 跳转登录
      history.push('/login');
    }
    return {
      ...options,
      headers: {
        ...options?.headers,
        ...authHeader
      }
    };
  }
];

//响应拦截
export const responseInterceptors: RequestConfig['responseInterceptors'] = [
  (response: any) => {
    const { data, config } = response;

    // 在请求结束后，移除本次请求
    axiosCanceler.removePending(config, false);
    const responseCode = data.code;
    const responseMessage = data.message;
    // * 全局错误信息拦截区分
    if (responseCode && !successCode.includes(responseCode)) {
      message.destroy();
      !disableGlobalErrorCode.includes(responseCode) && message.error(responseMessage);
      return Promise.reject(data);
    }
    return response;
  }
];

//统一错误处理
export const errorHandler = (error: any) => {
  const { response } = error;

  if (response && response.status === 401) {
    message.destroy();
    // message.error('登录失效！请您重新登录')
    // 登录回调方法
    return Promise.reject(error);
  }
  if (response && response.status) {
    const errorText = codeMessage[response.status] || response.statusText;
    message.destroy();
    message.error(errorText);
    return Promise.reject(error);
  }
  // 超时
  if (error.code === 'ECONNABORTED' && (error.message as string)?.startsWith?.('timeout')) {
    message.error('网络异常，请稍后再试');
    throw error;
  }
  // 断网
  if (error.code === 'ERR_NETWORK') {
    message.error('网络异常，请稍后再试');
    throw error;
  }
  throw error;
};

export class RequestApi {
  // * 常用请求方法封装
  get<T = any>(url: string, params?: any, options = {} as RequestConfig) {
    return request<API.BaseResult<T>>(url, {
      method: 'GET',
      params: params,
      ...(options || {})
    });
  }
  post<T = any>(url: string, body?: any, options = {} as RequestConfig) {
    return request<API.BaseResult<T>>(url, {
      method: 'POST',
      data: body,
      ...(options || {})
    });
  }
  delete<T = any>(url: string, body?: any, options = {} as RequestConfig) {
    return request<API.BaseResult<T>>(url, {
      method: 'DELETE',
      data: body,
      ...(options || {})
    });
  }
}

export default new RequestApi();

/**
 * 判断是否是取消请求导致的错误
 * @param err 错误
 * @returns
 */
export function isAxiosCancel(err: any) {
  return !!err?.__CANCEL__;
}
