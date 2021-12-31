# HTML5 拖放

拖放（Drag 和 drop）是 HTML5 标准的组成部分。

## 1. 拖放

拖放是一种常见的特性，即抓取对象以后拖到另一个位置。在 HTML5 中，任何元素都能拖放。

### 1.1 设置拖动元素

首先，为了使元素可拖动，把 draggable 属性设置为 true ：

```html
<img draggable="true" />
```

### 1.2 拖动什么 - ondragstart 和 setData()

然后，规定当元素被拖动时，会发生什么。

在拖动对象上，拖动开始时设置数据。dataTransfer.setData() 方法设置被拖数据的数据类型和值：

```js
function drag(ev) {
  ev.dataTransfer.setData('Text', ev.target.id);
}
```

### 1.3 放到何处 - ondragover

ondragover 事件规定在何处放置被拖动的数据。

默认地，无法将数据/元素放置到其他元素中。如果需要设置允许放置，我们必须阻止对元素的默认处理方式。

这要通过调用 ondragover 事件的 event.preventDefault() 方法：

```js
event.preventDefault();
```

### 1.4 进行放置 - ondrop

当放置被拖数据时，会发生 drop 事件。

## 2. HTML5 拖放实例

```html
<!DOCTYPE html>
<html>
  <head>
    <script type="text/javascript">
      function allowDrop(ev) {
        ev.preventDefault();
      }

      function drag(ev) {
        ev.dataTransfer.setData('Text', ev.target.id);
      }

      function drop(ev) {
        ev.preventDefault();
        var data = ev.dataTransfer.getData('Text');
        ev.target.appendChild(document.getElementById(data));
      }
    </script>
  </head>
  <body>
    <div id="div1" ondrop="drop(event)" ondragover="allowDrop(event)"></div>
    <img
      id="drag1"
      src="img_logo.gif"
      draggable="true"
      ondragstart="drag(event)"
      width="336"
      height="69"
    />
  </body>
</html>
```
