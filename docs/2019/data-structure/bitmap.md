bitMap 算法
===

## 数据结构
bitMap 数据结构**常用于大量整型数据做去重和查询**，[《Bitmap算法》](https://www.seoxiehui.cn/article-45186-1.html) 这篇文章中是基于 Java 语言及数据库优化进行解释的图文教程。

bitMap 是利用了二进制来描述状态的一种数据结构，下面介绍其简单的原理。

###（1）思考下面的问题
街边有 8 盏路灯，编号分别是 1 2 3 4 5 6 7 8，其中 2 号，5 号，7 号，8 号路灯是亮着的，其余的都处于不亮的状态，请你设计一种简单的方法来表示这 8 栈路灯亮与不亮的状态。
```bash
路灯  1   2   3   4   5   6   7   8
状态  0   1   0   0   1   0   1   1
```

将状态转化为二进制 `parseInt(1001011, 2);` 结果为 75。一个 `Number` 类型的值为 32 个字节，它可以表示 32 栈路灯的状态。这样在大数据量的处理中，bitMap 就有很大的优势。

###（2）位运算介绍

1. 按位与 `&`: `3&7=3`【`011 & 111 --> 011`】
1. 按位或 `|`: `3|7=7`【`011 | 111 --> 111`】
1. 左位移 `<<`: `1<<3=8`【`1 --> 1000`】

###（3）实践
一组数，内容以为 3,6,7,9，请用一个整数来表示这些四个数。
```js
var value = 0;
value = value | 1<<3; // 1000
value = value | 1<<6; // 1001000
value = value | 1<<7; // 11001000
value = value | 1<<9; // 1011001000
console.log(value); // 712
```

这样，十进制数 712 的二进制形式对应的位数为 1 的值便为数组中的数值。

## bitMap 的实现
通过上面的介绍，我们可以实现一个简单的 bitMap 类，有下面两个方法：

- `addMember` 添加成员
- `isExist` 成员是否存在

分析：

- 单个数值既能表示 0~32 的值，若以数组作为基础，bitMap 能容纳的成员由数组长度决定 `64 * 数组长度`
- `addMember` 添加成员：数组/位数向下取整表示所在索引，数组/位数取余表示所在二进制的位数
- `isExist` 成员是否存在：添加成员的反向计算

我们先实现基础读写位的方法：
```js
export const BIT_SIZE = 32;

// 设置位的值
export function setBit(bitMap, bit) {
  const arrIndex = Math.floor(bit / BIT_SIZE);
  const bitIndex = Math.floor(bit % BIT_SIZE);
  bitMap[arrIndex] |= (1 << bitIndex);
}

// 读取位的值
export function getBit(bitMap, bit) {
  const arrIndex = Math.floor(bit / BIT_SIZE);
  const bitIndex = Math.floor(bit % BIT_SIZE);
  return bitMap[arrIndex] & (1 << bitIndex);
}
```

进而根据上面的方法得到下面的类：
```js
class BitMap {
  constructor(size) {
    this._bitArr = Array.from({
      length: size
    }, () => 0);
  }

  addMember(member) {
    setBit(this._bitArr, member);
  }

  isExist(member) {
    const isExist = getBit(this._bitArr, member);
    return Boolean(isExist);
  }
}

// 验证
const bitMap = new BitMap(4);
const arr = [0, 3, 5, 6, 9, 34, 23, 78, 99];

for(var i = 0;i < arr.length;i++){
  bitMap.addMember(arr[i]);
}

console.log(bitMap.isExist(3)); // true
console.log(bitMap.isExist(7)); // false
console.log(bitMap.isExist(78)); // true
```

注意：这种结构也有其**局限性**：

1. 数据集要求较为紧凑，[1, 1000000]这种结构空间利用过低，不利于发挥bitMap的优势
1. 仅对整数有效（当然，我们可以通过哈希函数将字符串转换为整型）

## bitMap的应用
###（1）大数据排序
要求：有多达 10 亿无序整数，已知最大值为 15 亿，请对这个 10 亿个数进行排序。
分析：大数据的排序，传统的排序方式相对内存占用较大，使用 bitMap 仅占原内存的(JS 中为 1/64，Java 中为 1/32)。
实现：模拟大数据实现，如下（最大值为 99）。
```js
const arr = [0, 6, 88, 7, 73, 34, 10, 99, 22];
const MAX_NUMBER = 99;

const ret = [];
const bitMap = new BitMap(4);
arr.forEach(item => { bitMap.addMember(item); })

for (let i = 0; i <= MAX_NUMBER; i += 1) {
  if (bitMap.isExist(i)) ret.push(i);
}

console.log(ret); // [ 0, 6, 7, 10, 22, 34, 73, 88, 99 ]
```

###（2）两个集合取交集
要求：两个数组，内容分别为 [1, 4, 6, 8, 9, 10, 15], [6, 14, 9, 2, 0, 7]，请用 BitMap 计算他们的交集
分析：利用 `isExist()` 来筛选相同项
实现：
```js
const arr1 = [1, 4, 6, 8, 9, 10, 15];
const arr2 = [6, 14, 9, 2, 0, 7];
const intersectionArr = []

const bitMap = new BitMap();
arr1.forEach(item => bitMap.addMember(item))

arr2.forEach(item => {
  if (bitMap.isExist(item)) {
    intersectionArr.push(item);
  }
})

console.log(intersectionArr); // [6, 9]
```

BitMap 数据结构的用法原不止如此，我们可以通过哈希函数将字符串转换成整数，再进行处理。当然，我们应该始终牢记 BitMap 必须是相对较为紧密的数字，否则无法发挥 BitMap 的最大功效。
