# HTML5 视频

HTML5 提供了展示视频的标准。

## 1. 支持性检测

检测您的浏览器是否支持 HTML5 视频：

```js
function checkVideo() {
  if (!!document.createElement('video').canPlayType) {
    var vidTest = document.createElement('video');
    var oggTest = vidTest.canPlayType('video/ogg; codecs="theora, vorbis"');

    if (!oggTest) {
      var h264Test = vidTest.canPlayType('video/mp4; codecs="avc1.42E01E, mp4a.40.2"');

      if (!h264Test) {
        console.log('Sorry. No video support.');
      } else {
        if (h264Test == 'probably') {
          console.log('Yes! Full support!');
        } else {
          console.log('Well. Some support.');
        }
      }
    } else {
      if (oggTest == 'probably') {
        console.log('Yes! Full support!');
      } else {
        console.log('Well. Some support.');
      }
    }
  } else {
    console.log('Sorry. No video support.');
  }
}
```

## 2. 视频格式

- Ogg，带有 Theora 视频编码和 Vorbis 音频编码的 Ogg 文件
- MPEG4，带有 H.264 视频编码和 AAC 音频编码的 MPEG 4 文件
- WebM，带有 VP8 视频编码和 Vorbis 音频编码的 WebM 文件

各个格式视频的浏览器支持性，参考 [Can I Use](http://caniuse.com/#search=video)。

## 3. 显示视频

在 HTML5 中显示视频的代码如下：

```html
<video src="movie.ogg" controls="controls"></video>
```

control 属性供添加播放、暂停和音量控件。video 元素允许多个 source 元素，source 元素可以链接不同的视频文件，浏览器将使用第一个可识别的格式：

```html
<video width="320" height="240" controls="controls">
  <source src="movie.ogg" type="video/ogg" />
  <source src="movie.mp4" type="video/mp4" />
</video>
```

## 4. 属性

`<video>` 标签的属性有：

| 属性     | 值       | 描述                                                                                            |
| -------- | -------- | ----------------------------------------------------------------------------------------------- |
| autoplay | autoplay | 如果出现该属性，则视频在就绪后马上播放。                                                        |
| controls | controls | 如果出现该属性，则向用户显示控件，比如播放按钮。                                                |
| height   | pixels   | 设置视频播放器的高度。                                                                          |
| loop     | loop     | 如果出现该属性，则当媒介文件完成播放后再次开始播放。                                            |
| preload  | preload  | 如果出现该属性，则视频在页面加载时进行加载，并预备播放。<br>如果使用 "autoplay"，则忽略该属性。 |
| src      | URL      | 要播放的视频的 URL。                                                                            |
| width    | pixels   | 设置视频播放器的宽度。                                                                          |
