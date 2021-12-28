/* eslint-disable no-console */
// 读取根目录下定义的文档目录文件，「名称+地址」的格式
const Components = require('../components.json');

const fs = require('fs');
const path = require('path');
const render = require('json-templater/string');

// 读取配置文件
const settings = require('./const');

// 文件模板
const MAIN_TEMPLATE = fs.readFileSync(path.resolve(__dirname, './template/config.tpl'), 'utf8');
// 输出路径
const OUTPUT_PATH = path.join(__dirname, '../docs/.vuepress/config.js');

// 获取所有文档目录的分组
const ComponentGroups = Object.keys(Components);
const sidebar = {};

// 循环所有文档目录
ComponentGroups.forEach((group) => {
  const subList = Components[group];

  if (Array.isArray(subList)) {
    sidebar[`/${group}/`] = installSubChildren(subList);
  }
});

function installSubChildren(source = []) {
  // eslint-disable-next-line array-callback-return
  return source.map((item) => {
    if (typeof item === 'string') {
      return item;
    } else if (typeof item === 'object' && !Array.isArray(item)) {
      const cell = {
        text: '',
        collapsible: false,
        children: [],
      };

      Object.keys(item).forEach((key) => {
        cell.text = key;
        cell.children = installSubChildren(item[key]);
      });

      return cell;
    }
  });
}

// 模板组装
const {
  theme,
  title,
  description,
  base,
  logo,
  navbar,
  search,
  // themeConfig 配置项扩展
  themeConfig,
  // vuepress 配置项扩展
  others,
  plugins,
  head,
} = settings;

// 配置项转化
function transformConfigs(configs = {}) {
  if (Object.keys(configs).length === 0) {
    return '';
  }

  const result = [];

  for (const item in configs) {
    if (Object.prototype.hasOwnProperty.call(configs, item)) {
      result.push(`${item}:"${configs[item]}"`);
    }
  }

  return result.join(',');
}

const template = render(MAIN_TEMPLATE, {
  theme,
  title,
  description,
  base,
  logo,
  navbar: JSON.stringify(navbar),
  sidebar: JSON.stringify(sidebar),
  search,
  themeConfig: transformConfigs(themeConfig),
  others: transformConfigs(others),
  plugins: JSON.stringify(plugins),
  head: JSON.stringify(head),
});

// 文件写入
fs.writeFileSync(OUTPUT_PATH, template);
console.log('[build entry] DONE:', OUTPUT_PATH);
