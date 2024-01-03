/**
 * @description 获取localStorage
 * @param {String} key Storage名称
 * @return string
 */
const getItem = (key: string) => {
  const value = window.localStorage.getItem(key);
  try {
    return JSON.parse(value as string);
  } catch (error) {
    return value;
  }
};

/**
 * @description 存储localStorage
 * @param {String} key Storage名称
 * @param {Any} value Storage值
 * @return void
 */
const setItem = (key: string, value: any) => {
  window.localStorage.setItem(key, JSON.stringify(value));
};

/**
 * @description 清除localStorage
 * @param {String} key Storage名称
 * @return void
 */
const removeItem = (key: string) => {
  window.localStorage.removeItem(key);
};

/**
 * @description 清除所有localStorage
 * @return void
 */
const clear = () => {
  window.localStorage.clear();
};

export default {
  getItem,
  setItem,
  removeItem,
  clear
};
