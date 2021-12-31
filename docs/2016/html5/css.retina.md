# retina 下背景图片实现

随着苹果的 iPhone、iPad 和 Mac 设备的流行，Retina(视网膜)技术开始进入前端开发的世界。

为 Retina 屏幕下查询 Web 图像的像素密度，然后调用对应的图像。目前较为流行的方式是通过 CSS 或者 JavaScript 来实现。

## 1.使用 CSS Media Queries

以下代码来源于淘宝网。

```css
@media screen and (-webkit-min-device-pixel-ratio: 1),
  screen and (-moz-min-device-pixel-ratio: 1),
  screen and (-o-min-device-piratio: 100/100),
  screen and (min-device-pixel-ratio: 1) {
  .bg {
    background-image: url('//gtms02.alicdn.com/tps/i2/TB1WCdPIpXXXXcaXFXXK7pO6XXX-226-178.png');
    -webkit-background-size: 226px 178px;
    -moz-background-size: 226px 178px;
    background-size: 226px 178px;
  }
}

@media screen and (-webkit-min-device-pixel-ratio: 2),
  screen and (-moz-min-device-pixel-ratio: 2),
  screen and (-o-min-device-piratio: 200/100),
  screen and (min-device-pixel-ratio: 2) {
  .bg {
    background-image: url('//gtms03.alicdn.com/tps/i3/TB1bF4TIpXXXXaAXFXX_PIy.XXX-452-356.png');
    -webkit-background-size: 226px 178px;
    -moz-background-size: 226px 178px;
    background-size: 226px 178px;
  }
}
```

## 2.使用 JavaScript

使用 js 对 `window.devicePixelRatio` 进行判断，然后根据对应的值给 Retina 屏幕选择图像。

```js
$(document).ready(function () {
  if (window.devicePixelRatio > 1) {
    var images = $('img');

    images.each(function (i) {
      var lowres = $(this).attr('src');
      var highres = lowres.replace('.', '@2x.');

      $(this).attr('src', highres);
    });
  }
});
```

## 3.使用 image-set 实现

`image-set()` 可以根据用户设备的分辨率匹配合适的图像。

```css
selector {
  background-image: url(no-image-set.png);
  background: image-set(url(foo-lowres.png) 1x, url(foo-highres.png) 2x) center;
}
```

- 不支持 `image-set`：在不支持 `image-set` 的浏览器下，他会支持 `background-image` 图像，也就是说不支持 `image-set` 的浏览器下，他们解析 `background-image` 中的背景图像；
- 支持 `image-set`：如果你的浏览器支持 `image-set`，而且是普通显屏下，此时浏览器会选择 `image-set` 中的 `@1x` 背景图像；
- Retina 屏幕下的 `image-set`：如果你的浏览器支持 `image-set`，而且是在 Retina 屏幕下，此时浏览器会选择 `image-set` 中的 `@2x` 背景图像。

`image-set` 的好处是，在支持 `image-set` 的浏览器会在高分辨下匹配需要的图像，而没有其他额外的功能。遗憾的是，目前，[image-set](https://drafts.csswg.org/css-images-4/#image-set-notation) 仅是 CSS4 的一个草案，正式使用还需要时间。

Retina 深入理解，请参考大神大漠的[走向视网膜（Retina）的 Web 时代](https://www.w3cplus.com/css/towards-retina-web.html)。
