# HTML5 表单元素

HTML5 拥有若干设计表单的元素和属性。新的表单元素有：

- datalist
- keygen
- output

## 1. datalist 元素

`datalist` 元素规定输入域的选项列表，列表通过 `datalist` 内的 `option` 元素创建。

需要把 `datalist` 绑定到输入域时，请用输入域的 `list` 属性引用 `datalist` 的 `id`，示例如下：

```html
<form action="">
  <input type="url" list="url_list" />
  <datalist id="url_list">
    <option label="baidu" value="http://www.baidu.com" />
    <option label="sougou" value="http://www.sougou.com" />
    <option label="google" value="http://www.google.com.hk" />
  </datalist>
</form>
```

> `option` 元素永远都要设置 `value` 属性。

## 2. keygen 元素

`keygen` 元素的作用是提供一种验证用户的可靠方法。

`keygen` 元素是密钥对生成器（key-pair generator）。当提交表单时，会生成两个键，一个是私钥，一个公钥。

私钥（private key）存储于客户端，公钥（public key）则被发送到服务器。公钥可用于之后验证用户的客户端证书（client certificate）。

目前，浏览器对此元素的糟糕的支持度不足以使其成为一种有用的安全标准。

示例：

```html
<form action="demo_form.asp" method="get">
  Username:<input type="text" name="usr_name" /> Encryption:<keygen name="security" />
  <input type="submit" />
</form>
```

## 3. output 元素

`output` 元素用于不同类型的输出，比如计算或脚本输出：

```html
<output id="result" onforminput="resCals()"></output>
```
