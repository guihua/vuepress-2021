# HTML5 表单属性

新的 `form` 属性：

- autocomplete
- novalidate

新的 `input` 属性：

- autocomplete
- autofocus
- form
- form overrides (formaction, formenctype, formmethod, formnovalidate, formtarget)
- height 和 width
- list
- min, max 和 step
- multiple
- pattern (regexp)
- placeholder
- required

## 1. autocomplete 属性

`autocomplete` 属性规定 `form` 或 `input` 域应该拥有自动完成功能。

`autocomplete` 适用于 `<form>` 标签，以及以下类型的 `<input>` 标签：`text`, `search`, `url`, `telephone`, `email`, `password`, `datepickers`, `range` 以及 `color`。

当用户在自动完成域中开始输入时，浏览器应该在该域中显示填写的选项：

```html
<form action="demo_form.asp" method="get" autocomplete="on">
  First name:<input type="text" name="fname" />
  <br />
  Last name:<input type="text" name="lname" />
  <br />
  E-mail:<input type="email" name="email" autocomplete="off" />
  <br />
  <input type="submit" />
</form>
```

## 2. autofocus 属性

autofocus 属性规定在页面加载时，域自动地获得焦点。

```html
<input type="text" autofocus="autofocus" />
```

> `autofocus` 属性适用于所有 `<input>` 标签的类型。

## 3. form 属性

`form` 属性规定输入域所属的一个或多个表单。

> 如需引用一个以上的表单，请使用空格分隔的列表。

`form` 属性必须引用所属表单的 id：

```html
<form action="demo_form.asp" method="get" id="user_form">
  First name:<input type="text" name="fname" />
  <input type="submit" />
</form>
Last name:<input type="text" name="lname" form="user_form" />
```

> `form` 属性适用于所有 `<input>` 标签的类型。

## 4. 表单重写属性

表单重写属性（form override attributes）允许您重写 `form` 元素的某些属性设定。

表单重写属性有：

- formaction - 重写表单的 action 属性
- formenctype - 重写表单的 enctype 属性
- formmethod - 重写表单的 method 属性
- formnovalidate - 重写表单的 novalidate 属性
- formtarget - 重写表单的 target 属性

> 表单重写属性适用于以下类型的 `<input>` 标签：submit 和 image。

示例：

```html
<form action="demo_form.asp" method="get" id="user_form">
  E-mail:<input type="email" name="userid" />
  <br />
  <input type="submit" value="Submit" />
  <br />
  <input type="submit" formaction="demo_admin.asp" value="Submit as admin" />
  <br />
  <input type="submit" formnovalidate="true" value="Submit without validation" />
  <br />
</form>
```

## 5. height 和 width 属性

`height` 和 `width` 属性规定用于 `image` 类型的 `input` 标签的图像高度和宽度。

```html
<input type="image" src="img_submit.gif" width="99" height="99" />
```

`input` 类型为 `image` 时，更建议采用 `<img src="" alt="">` 实现。

## 6. list 属性

`list` 属性规定输入域的 datalist，它是输入域的选项列表。

> `list` 属性适用于以下类型的 `<input>` 标签：text, search, URL, telephone, email, date pickers, number, range 以及 color。

## 7. min、max 和 step 属性

`min`、`max` 和 `step` 属性用于为包含数字或日期的 `input` 类型规定限定（约束）。

`max` 属性规定输入域所允许的最大值。

`min` 属性规定输入域所允许的最小值。

`step` 属性为输入域规定合法的数字间隔。

> `min`、`max` 和 `step` 属性适用于以下类型的 `<input>` 标签：date pickers、number 以及 range。

## 8. multiple 属性

multiple 属性规定输入域中可选择多个值。
注释：multiple 属性适用于以下类型的 <input> 标签：email 和 file。

## 9. novalidate 属性

`novalidate` 属性规定在提交表单时不应该验证 `form` 或 `input` 域。

```html
<form action="demo_form.asp" method="get" novalidate="true">
  E-mail:
  <input type="email" name="user_email" />
  <input type="submit" />
</form>
```

`novalidate` 属性适用于 `<form>` 以及以下类型的 `<input>` 标签：text, search, URL, telephone, email, password, date pickers, range 以及 color.

## 10. pattern 属性

`pattern` 属性规定用于验证 `input` 域的模式（pattern）。

模式（pattern）是正则表达式。

`pattern` 属性适用于以下类型的 `<input>` 标签：text, search, URL, telephone, email 以及 password。

显示了一个只能包含三个字母的文本域（不含数字及特殊字符）：

```html
<input type="text" pattern="[A-z]{3}" />
```

## 11. placeholder 属性

`placeholder` 属性提供一种提示（hint），描述输入域所期待的值。

`placeholder` 属性适用于以下类型的 `<input>` 标签：text, search, URL, telephone, email 以及 password。

提示（hint）会在输入域为空时显示出现，会在输入域获得焦点时消失：

```html
<input type="search" placeholder="请输入搜索关键词" />
```

## 12. required 属性

`required` 属性规定必须在提交之前填写输入域（不能为空）。

`required` 属性适用于以下类型的 `<input>` 标签：text, search, URL, telephone, email, password, date pickers, number, checkbox, radio 以及 file。

示例：

```html
<input type="text" required="required" />
```
