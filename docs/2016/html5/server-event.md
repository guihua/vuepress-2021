# HTML5 服务器发送事件

HTML5 服务器发送事件（server-sent event）允许网页获得来自服务器的更新。

## 1. Server-Sent 事件 - 单向消息传递

Server-Sent 事件指的是网页自动获取来自服务器的更新。

以前也可能做到这一点，前提是网页不得不询问是否有可用的更新。通过服务器发送事件，更新能够自动到达。

例子：Facebook/Twitter 更新、估价更新、新的博文、赛事结果等。

## 2.接收 Server-Sent 事件通知

EventSource 对象用于接收服务器发送事件通知：

```js
var source = new EventSource('demo_sse.php');
source.onmessage = function (event) {
  document.getElementById('result').innerHTML += event.data + '<br />';
};
```

例子解释：

- 创建一个新的 EventSource 对象，然后规定发送更新的页面的 URL（本例中是 "PHP"）
- 每接收到一次更新，就会发生 onmessage 事件
- 当 onmessage 事件发生时，把已接收的数据推入 id 为 "result" 的元素中

## 3. EventSource 对象

| 事件      | 描述                     |
| --------- | ------------------------ |
| onopen    | 当通往服务器的连接被打开 |
| onmessage | 当接收到消息             |
| onerror   | 当错误发生               |
