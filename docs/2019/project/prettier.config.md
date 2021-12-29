Prettier 配置
===

Prettier 的中文意思是“漂亮的、机灵的”，也是一个流行的代码格式化工具的名称，它能够解析代码，使用你自己设定的规则来重新打印出格式规范的代码。

Prettier 具有以下几个有优点：

* 可配置化
* 支持多种语言
* 集成多数的编辑器
* 简洁的配置项

使用 Prettier 在 code review 时不需要再讨论代码样式，节省了时间与精力。

## Prettier 使用
安装 prettier：
```bash
npm i --dev prettier
```

Prettier 项目规范：[Prettier](./rules/.prettierrc)

在实际项目中，需要屏蔽某一些文件的检查时，可以设置 `prettierignore` 规则：[.prettierignore](./rules/.prettierignore)

## Prettier 结合 ESLint 一起使用
首先，安装依赖：
```bash
npm i --dev eslint-config-prettier
```

很多项目都会使用ESLint来提高代码的质量，有两种方式能够集成 Prettier 和 ESLint，你也可以单独或同时使用它们。

### 使用 ESLint 运行 Prettier
配置 `.eslintrc.js`：
```js
{
  "plugins": ["prettier"],
  "rules": {
    "prettier/prettier": "error"
  }
}
```

### 关闭 ESLint 的格式规则
```js
{
  "extends": ["prettier"]
}
```
