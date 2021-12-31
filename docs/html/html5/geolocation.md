# HTML5 地理定位

HTML5 Geolocation（地理定位）用于定位用户的位置。

> 鉴于该特性可能侵犯用户的隐私，除非用户同意，否则用户位置信息是不可用的。

## 1. 使用地理定位

请使用 `getCurrentPosition()` 方法来获得用户的位置。

该方法始终会返回 latitude、longitude 以及 accuracy 属性，如果可用，则会返回其他下面的属性。

| 属性                    | 描述                   |
| ----------------------- | ---------------------- |
| coords.latitude         | 十进制数的纬度         |
| coords.longitude        | 十进制数的经度         |
| coords.accuracy         | 位置精度               |
| coords.altitude         | 海拔，海平面以上以米计 |
| coords.altitudeAccuracy | 位置的海拔精度         |
| coords.heading          | 方向，从正北开始以度计 |
| coords.speed            | 速度，以米/每秒计      |
| timestamp               | 响应的日期/时间        |

## 2. 处理错误和拒绝

`getCurrentPosition()` 方法的第二个参数用于处理错误。它规定当获取用户位置失败时运行的函数：

错误代码：

- Permission denied - 用户不允许地理定位
- Position unavailable - 无法获取当前位置
- Timeout - 操作超时

下例是一个简单的地理定位实例，可返回用户位置的经度和纬度。

```js
var x = document.getElementById('demo');

function getLocation() {
  // 检测是否支持地理定位
  if (navigator.geolocation) {
    navigator.geolocation.getCurrentPosition(showPosition, showError);
  } else {
    x.innerHTML = 'Geolocation is not supported by this browser.';
  }
}

function showPosition(position) {
  x.innerHTML =
    'Latitude: ' + position.coords.latitude + '<br />Longitude: ' + position.coords.longitude;
}

function showError(error) {
  switch (error.code) {
    case error.PERMISSION_DENIED:
      x.innerHTML = 'User denied the request for Geolocation.';
      break;
    case error.POSITION_UNAVAILABLE:
      x.innerHTML = 'Location information is unavailable.';
      break;
    case error.TIMEOUT:
      x.innerHTML = 'The request to get user location timed out.';
      break;
    case error.UNKNOWN_ERROR:
      x.innerHTML = 'An unknown error occurred.';
      break;
  }
}
```

## 3. 其他方法

`watchPosition()` - 返回用户的当前位置，并继续返回用户移动时的更新位置（就像汽车上的 GPS）。
`clearWatch()` - 停止 `watchPosition()` 方法

## 4. 实例

调用谷歌地图，显示当前位置。

HTML 代码：

```html
<p id="demo">点击这个按钮，获得您的位置：</p>
<button onclick="getLocation()">试一下</button>
<div id="mapholder"></div>
```

JavaScript 代码：

```js
var x = document.getElementById('demo');

function getLocation() {
  if (navigator.geolocation) {
    navigator.geolocation.getCurrentPosition(showPosition, showError);
  } else {
    x.innerHTML = 'Geolocation is not supported by this browser.';
  }
}

function showPosition(position) {
  lat = position.coords.latitude;
  lon = position.coords.longitude;
  latlon = new google.maps.LatLng(lat, lon);
  mapholder = document.getElementById('mapholder');
  mapholder.style.height = '250px';
  mapholder.style.width = '500px';

  var myOptions = {
    center: latlon,
    zoom: 14,
    mapTypeId: google.maps.MapTypeId.ROADMAP,
    mapTypeControl: false,
    navigationControlOptions: {
      style: google.maps.NavigationControlStyle.SMALL,
    },
  };
  var map = new google.maps.Map(document.getElementById('mapholder'), myOptions);
  var marker = new google.maps.Marker({
    position: latlon,
    map: map,
    title: 'You are here!',
  });
}

function showError(error) {
  switch (error.code) {
    case error.PERMISSION_DENIED:
      x.innerHTML = 'User denied the request for Geolocation.';
      break;
    case error.POSITION_UNAVAILABLE:
      x.innerHTML = 'Location information is unavailable.';
      break;
    case error.TIMEOUT:
      x.innerHTML = 'The request to get user location timed out.';
      break;
    case error.UNKNOWN_ERROR:
      x.innerHTML = 'An unknown error occurred.';
      break;
  }
}
```
