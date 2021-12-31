# HTML5 File

HTML5 File API 允许页面使用 JavaScript 来调用和处理本地文件系统的文件。

## 1.核心对象

HTML5 File API 包含以下的核心对象：

- FileList

  FileList 对象代表本地文件系统中的一组文件。

- File

  File 对象代表本地文件系统中的一个文件

- Blob

  Blob 对象代表一个二进制大型对象（BLOB），BLOB 是本地文件系统中的单个文件的数据

- FileReader

### 1.1 文件选择

选择一个文件

```html
<input type="file" onchange="readFiles(event)" />
```

选择多个文件时，在 `<input>` 元素中添加一个 `multiple` 属性

```html
<input type="file" onchange="readFiles(event)" multiple />
```

### 1.2 通过拖放选择文件

我们可以将 HTML5 file API 和 HTML5 元素拖放相结合来选择文件。这种选择文件的方式需要实现用户从本地电脑的文件系统中（在浏览器之外）拖拽一个文件到浏览器的 HTML 页面指定的放置区域。HTML 页面能通过 JavaScript 来检测是否有文件被放置在指定的区域。

下面的代码是如何设置一个放置区域 HTML 元素，使它能够检测到是否有文件放置到它上面。

```html
<div id="fileDropZone">请拖拽文件到这里</div>
<script>
  function drop(event) {
    evt.stopPropagation();
    evt.preventDefault();

    var fileList = event.dataTransfer.files; // 通过fileList接收文件
  }

  function dragOver(evt) {
    evt.stopPropagation();
    evt.preventDefault();
    evt.dataTransfer.dropEffect = 'copy';
  }

  var dropZone = document.getElementById('fileDropZone');

  dropZone.addEventListener('dragover', dragOver, false);
  dropZone.addEventListener('drop', drop, false);
</script>
```

`dragOver()` 和 `drop()` 函数设置放置区域 HTML 元素的拖和放事件监听。

### 1.3 访问被选择的文件

当用户选择一个或多个文件之后，有两种方式访问这些被选择的文件。

第一种访问被选择文件的方式是访问 `input` 元素的 `files` 属性。

```html
var inputField = document.getElementById('theFileInput');

var selectedFiles = inputField.files;

for(var i=0; i<selectedFiles.length; i++) {
  var file = selectedFiles[i);
}
```

第二种访问被选择文件的方式是通过 `input` 元素的 `onchange` 事件监听，被选择的文件会作为 event 对象的参数被传入。

```html
<input type="file" onchange="readFiles(event)" multiple />
<script>
  function readFiles(event) {
    var fileList = event.target.files;
  }
</script>
```

`event.target.files` 对象是一个 `FileList` 对象。它包含一组被选择的文件（`File` 对象）。

```js
<script>
function readFiles(event) {
  var fileList = event.target.files;

  for(var i=0; i < fileList.length; i++ ) {
    var file = fileList[i];     // a File object
    console.log("i: " + i + " - " + file.name);
  }
}
</script>
```

## 2.通过 FileReader 来加载文件

`FileReader` 对象有下面的一些方法可以用于读取文件：

- readAsText()
- readAsDataUrl()
- readAsArrayBuffer()

上面的方法都使用一个 File 对象或 Blob 对象作为参数。

Blob 对象代表部分或整个文件，可以从 File 对象中创建一个 Blob 对象。

```js
var theFile = fileList[0]; // 从 FileList 获取一个 File 对象

var from = 3;
var to = 9;
var blob = theFile.slice(from, to); // 创建 Blob 对象
```

### 2.1 创建一个 FileReader

要使用 `FileReader` 你先要创建 `FileReader` 对象。

```js
var reader = new FileReader();
```

### 2.2 将一个文件作为文本来加载

```js
function readFiles(event) {
  var fileList = event.target.files;

  for (var i = 0; i < fileList.length; i++) {
    loadAsText(fileList[i]);
  }
}

function loadAsText(theFile) {
  var reader = new FileReader();

  reader.onload = function (loadedEvent) {
    // 返回包含被加载的文件
    console.log(loadedEvent.target.result);
  };

  reader.readAsText(theFile);
}
```

文件在 `loadAsText()` 函数中被加载。

### 2.3 通过 Data URL 来加载文件

```js
function loadAsUrl(theFile) {
  var reader = new FileReader();

  reader.onload = function (loadedEvent) {
    var image = document.getElementById('theImage');
    image.setAttribute('src', loadedEvent.target.result);
  };

  reader.readAsDataURL(theFile);
}
```

预览上传的图片。

### 2.4 通过 ArrayBuffer 来加载文件

`FileReader` 对象的 `readAsArrayBuffer()` 函数可以用于作为 `ArrayBuffer` 来读取文件数据。

```js
function loadAsUrl(theFile) {
  var reader = new FileReader();

  reader.onload = function (loadedEvent) {
    var arrayBuffer = loadedEvent.target.result;
    var dataView = new DataView(arrayBuffer, 0, arrayBuffer.byteLength);

    var byte = dataView.getUint8(0); //获取ArrayBuffer的第一个字节

    //... 处理余下的dataView ...
  };

  reader.readAsArrayBuffer(theFile);
}
```

### 2.5 跟踪文件加载的进程

```js
var reader = new FileReader();

reader.onprogress = function (progressEvent) {
  if (progressEvent.lengthComputable) {
    var percentLoaded = Math.round((progressEvent.loaded * 100) / progressEvent.total);
  }

  console.log(
    'total: ' +
      progressEvent.total +
      ', loaded: ' +
      progressEvent.loaded +
      '(' +
      percentLoaded +
      '%)',
  );
};
```

传入到 `onprogress` 事件中的 `progressEvent` 参数包含一个布尔值的属性 `lengthComputable`。如果这个属性的值为 `true`，你就可以计算文件已经被加载了多少。
