# HTML5 Input 类型

HTML5 拥有多个新的表单输入类型，这些新特性提供了更好的输入控制和验证。

新的输入类型：

- email
- URL
- number
- tel
- range
- Date pickers（date，month，week，time，datetime，datetime-local）
- search
- color

以上输入类型，除却 IE，大多数都已经得到很好的支持，只是在各个浏览器上兼容性和外观差距比较大。

## 1. Input 类型 - email

email 类型用于应该包含 e-mail 地址的输入域。在提交表单时，会自动验证 email 域的值。

```html
<input type="email">
```

## 2. Input 类型 - URL

URL 类型用于应该包含 URL 地址的输入域。在提交表单时，会自动验证 url 域的值。

```html
<input type="url">
```

## 3. Input 类型 - number

number 类型用于应该包含数值的输入域。

```html
<input type="number" min="1" max="10">
```

使用下面的属性来规定对数字类型的限定：

- max，规定允许的最大值
- min，规定允许的最小值
- step，规定合法的数字间隔
- value，规定默认值

## 4. Input 类型 - range

range 类型用于应该包含一定范围内数字值的输入域。

```html
<input type="range" min="1" max="10">
```

range 类型显示为滑动条。

range 类型的属性与 number 类型的相同，可以通过 max、min、step 和 value 来进行数字类型的限定。

## 5. Input 类型 - Date Pickers

HTML5 拥有多个可供选取日期和时间的新输入类型：

- date - 选取日、月、年
- month - 选取月、年
- week - 选取周和年
- time - 选取时间（小时和分钟）
- datetime - 选取时间、日、月、年（UTC 时间）
- datetime-local - 选取时间、日、月、年（本地时间）

示例：

```html
<input type="date">
```

## 6. Input 类型 - search

search 类型用于搜索域，比如站点搜索或 Google 搜索。

```html
<input type="search">
```

search 域显示为常规的文本域。
