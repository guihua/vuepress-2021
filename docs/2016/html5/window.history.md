# window.history

我们可以通过 history 对象来访问浏览器的浏览历史，这个对象是一个 JavaScript 全局对象（`window.history`）。

## 1.history API

- `back()`

  `back()` 函数用于移动浏览历史到前一条 URL，调用 `back()` 函数和点击浏览器的“后退”按钮的效果相同

  `window.history.back();`

- `forward()`

  `forward()` 函数用于移动浏览历史到下一条 URL，调用 `forward()` 函数和点击浏览器的“前进”按钮的效果相同

  `window.history.forward();`

- `go(index)`

  `go(index)` 函数会根据参数 index 的值来向前或向后移动浏览历史

- `pushState(stateObject, title, url)`

  `pushState(stateObject, title, url)` 函数会在浏览历史栈中压入一条新的 URL

- `replaceState(stateObject, title, url)`

  `replaceState(stateObject, title, url)` 函数与 `pushState()` 函数类似，但是它会将历史栈中的当前元素替换为一个新的 URL

## 2.History Change 事件

HTML5 history API 允许我们监听一个页面浏览历史的改变。HTML5 history API 的安全机制在这里同样有效，所以我们不能够监听到不同域名下的页面的改变历史。

要监听浏览器浏览历史的改变，可以使用 window 对象的 `onpopstate()` 事件监听。

```js
window.onpopstate = function (event) {
  console.log('history changed to: ' + document.location.href);
};
```
