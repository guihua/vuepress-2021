import { defineClientAppEnhance } from '@vuepress/client';

// 引入 Element
import ElementPlus from 'element-plus';
import 'element-plus/dist/index.css';

export default defineClientAppEnhance(({ app, router, siteData }) => {
  app.use(ElementPlus);
});
