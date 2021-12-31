# HTML 5 Web 存储

HTML5 提供了两种在客户端存储数据的新方法：

- localStorage - 没有时间限制的数据存储
- sessionStorage - 针对一个 session 的数据存储

两者区别就是一个作为临时保存，一个长期保存。

之前，这些都是由 cookie 完成的。但是 cookie 不适合大量数据的存储，因为它们由每个对服务器的请求来传递，这使得 cookie 速度很慢而且效率也不高。

localStorage 的问题：

- 1.localstorage 大小限制在 500 万字符左右，各个浏览器不一致
- 2.localstorage 在隐私模式下不可读取
- Firefox 会一次性将数据导入内存，想想就觉得吓人啊）
- 4.localstorage 不能被爬虫爬取，不要用它完全取代 URL 传参

## 1. API

localStorage 和 sessionStorage 使用时使用相同的 API：

```js
localStorage.setItem("key", "value"); //以“key”为名称存储一个值“value”
localStorage.getItem("key"); //获取名称为“key”的值
localStorage.removeItem("key"); //移除名称为“key”的信息
localStorage.clear();​ //清空localStorage中所有信息
```

实例：

```js
var localStorage = window.localStorage;

localStorage.setItem('lastname', 'Smith');
console.log(localStorage.getItem('lastname'));
```
