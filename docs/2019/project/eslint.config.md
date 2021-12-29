ESLint 校验规则配置
===

ESLint 是一个插件化的 javascript 代码检测工具。

项目标准：[.eslintrc.js](./rules/.eslintrc.js)

更多规则配置，参考：[ESLint Rules](http://eslint.cn/docs/rules/)

在实际项目中，我们要忽略某一些文件 or 文件夹的代码检查，此时可以配置 `.eslintignore` 文件。

项目标准：[.eslintignore](./rules/.eslintignore)

使用 `eslint` 需要安装开发依赖：
```bash
npm i --dev babel-eslint, eslint, eslint-config-airbnb, eslint-plugin-babel, eslint-plugin-compat, eslint-plugin-import, eslint-plugin-jsx-a11y, eslint-plugin-markdown, eslint-plugin-react
```
