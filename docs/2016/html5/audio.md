# HTML5 音频

HTML5 规定了一种通过 audio 元素来包含音频的标准方法。

audio 元素能够播放声音文件或者音频流。

## 1. 音频格式

当前，audio 元素支持三种音频格式：

- Ogg Vorbis
- MP3
- Wav

这三种格式音频的浏览器支持性，参考 [Can I Use](http://caniuse.com/#search=audio)。

## 2. Use

在页面中插入音频文件：

```html
<audio src="song.mp3" controls="controls"></audio>
```

## 3. 属性

`<audio>` 标签的属性有：

| 属性 | 值 | 描述 |
| --- | --- | --- |
| autoplay | autoplay | 如果出现该属性，则音频在就绪后马上播放 |
| controls | controls | 如果出现该属性，则向用户显示控件，比如播放按钮。 |
| loop | loop | 如果出现该属性，则每当音频结束时重新开始播放。 |
| preload | preload | 如果出现该属性，则音频在页面加载时进行加载，并预备播放。<br>如果使用 "autoplay"，则忽略该属性。 |
| src | URL | 要播放的音频的 URL。 |
