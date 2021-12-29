字典 Dictionary
===

## 字典数据结构
集合表示一组互不相同的元素(不重复的元素)。在字典中，存储的是键-值对，其中键名是用来查询特定元素的。字典和集合很相似，集合以值-值对的形式存储元素，字典则是以键-值对的形式来存储元素。字典也称作映射。

类比：电话号码簿里的名字和电话号码。要找一个电话时，先找名字，名字找到了，紧挨着他的电话号码也就想找到了，这里的键是指你用来查找的东西，值时查找得到的结果。

## 字典的实现
一般字典包括下面几种方法：

- `set(key,value)` 向字典中添加新元素；
- `remove(key)` 通过使用键值来从字典中移除键值对应的数据值；
- `has(key)` 如果某个键值存在于这个字典中，则返回 `true`，反之则返回 `false`；
- `get(key)` 通过键值查找特定的数值并返回；
- `clear()` 将这个字典中的所有元素全部删除；
- `size()` 返回字典所包含元素的数量，与数组的 `length` 属性类似；
- `keys()` 将字典所包含的所有键名以数组形式返回；
- `values()` 将字典所包含的所有数值以数组形式返回；

下面将基于对象实现基础的字典：
```js
class Dictionary {
  constructor() {
    this._table = {};
    this._length = 0;
  }

  set(key, value) {
    if (!this.has(key)) {
      this._length += 1;
    }

    this._table[key] = value;
  }

  has(key) {
    return this._table.hasOwnProperty(key);
  }

  remove(key) {
    if (this.has(key)) {
      delete this._table[key];
      
      this._length -= 1;

      return true;
    }

    return false;
  }

  get(key) {
    return this._table[key];
  }

  clear() {
    this._table = {};
    this._length = 0;
  }

  size() {
    return this._length;
  }

  keys() {
    return Object.keys(this._table);
  }

  values() {
    return Object.values(this._table);
  }
}
```

这里添加成员时，并未考虑 `key` 为对象的情况，以至于会出现如下情况：
```js
const obj = {};
obj[{a: 1}] = 1;
obj[{a: 2}] = 2;

console.log(obj[{a: 1}]); // 2

// 对象形式的键会以其toSting方法的结果存储
obj; // {[object Object]: 2}
```

在 ES6 中支持 `key` 值为对象形式的字典数据结构 Map，其提供的方法如下。

提供了一下几个方法：

- `set(key, value)` set方法设置键名key对应的键值为value，然后返回整个Map结构
- `get(key)` get方法读取key对应的键值，如果找不到key，返回undefined
- `delete(value)` 删除某个值，返回一个布尔值，表示删除是否成功
- `has(value)` 返回一个布尔值，表示该值是否为Map的成员
- `clear()` 清除所有成员，没有返回值
- `size` 属性，返回成员总数

创建：

- 直接通过数组创建：`const map = new Map([ ['name', '张三'], ['title', 'Author'] ]);`
- 先实例再添加：`const map = new Map();`

遍历：

- `keys()` 返回键名的遍历器
- `values()` 返回键值的遍历器
- `entries()` 返回键值对的遍历器
- `forEach()/for-of` 使用回调函数遍历每个成员
