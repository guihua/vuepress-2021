# HTML5 中的 download 属性

`download` 是 HTML5 中 `<a>` 标签的新增属性。

当用户点击超链接时，`download` 属性指定 `href` 目标进行下载，而不是跳转。

语法：

```html
<a href="xx.png" download="filename"></a>
```

> `filename` 参数可选，它指定下载文件的文件名。

检测浏览器是否支持 `download` 属性：

```js
var isSupportDownload = 'download' in document.createElement('a');
```

示例：

```html
<a href="images/fe/fe1.jpg" download>download</a>
```

除了图片资源，我们还可以是 PDF 资源，或者 txt 资源等等。尤其 Chrome 等浏览器可以直接打开 PDF 文件，使得此文件格式需要 download 处理的场景越来越普遍。
