const theme = '@vuepress/default';
const title = '龙趸';
const description = '石斑鱼杂记';
const logo = 'https://resource.lanniuh.com/common/logo.png';
const base = '/';
const search = true;
// 导航栏配置
const navbar = [
  {
    text: 'Home',
    link: '/',
  },
  {
    text: '2018',
    link: '/2018/',
  },
  {
    text: '2019',
    link: '/2019/',
  },
];
// 主题配置
const themeConfig = {
  repo: 'https://github.com/guihua/vuepress-2021',
  repoLabel: 'Github 地址',
};
// 插件配置
const plugins = [['@vuepress/plugin-container', true]];
// 额外 HTML 配置
const head = [
  [
    'link',
    {
      rel: 'icon',
      href: 'https://resource.lanniuh.com/common/logo.ico',
    },
  ],
];
// 扩展配置
const others = {};

module.exports = {
  theme,
  title,
  base,
  description,
  logo,
  search,
  navbar,
  themeConfig,
  others,
  plugins,
  head,
};
