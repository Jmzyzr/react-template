const colorPrimary = '#0173f7';
const colorTitle = '#1b1f26';
const colorTips = '#8d98a6';

const theme = {
  token: {
    colorPrimary,
  },
  components: {
    Button: {
      colorPrimary,
      colorLinkHover: colorPrimary,
      colorPrimaryHover: colorPrimary,
    },
    BreadCrumb: {
      itemColor: colorTips,
      lastItemColor: colorTitle,
      separatorColor: colorTips,
    },
    Checkbox: {
      colorPrimary,
    },
    Modal: {
      colorText: colorTips,
    },
    Radio: {
      colorPrimary,
    },
    Pagination: {
      colorPrimary,
      itemActiveBg: colorPrimary,
      colorBgContainer: colorPrimary,
    },
    Tooltip: {
      colorBgSpotlight: 'rgba(27, 31, 38, 0.8)',
    },
  },
};
export default theme;
