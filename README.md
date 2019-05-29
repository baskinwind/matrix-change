# matrixChange

<p>
  <a href="https://www.npmjs.com/package/matrixchange"><img src="https://img.shields.io/badge/matrixChange-1.4.4-blue.svg" alt="Version"></a>
  <a href="https://www.npmjs.com/package/matrixchange"><img src="https://img.shields.io/badge/license-MIT-green.svg" alt="License"></a>
</p>

浏览器端

```
<script src="https://cdn.jsdelivr.net/npm/matrixchange/dist/matrixChange.js"></script>
```

npm

```
npm install matrixchange --save
```

yarn

```
yarn add matrixchange
```

```
let mChange = require('matrixchange')
// or
import * as mChange from 'matrixchange'
// or
import {makeMatrixChange, mode} from 'matrixchange'
// ...
```

---

## demo

![gif](http://blogcdn.acohome.cn/change.gif)

[Demo](http://acohome.cn/demo/matrix/index.html)

[jsfiddle](https://jsfiddle.net/acccco/pgff8k5j/)

## 使用

```javascript
var app = document.getElementById('app')
var urls = [
  'http://bgcdn.acohome.cn/100965.jpg',
  'http://bgcdn.acohome.cn/1501505.jpg',
  'http://bgcdn.acohome.cn/1501655.jpg'
];

// 该方法返回一个对象
var move = mChange.makeMatrixChange(app, {
  images: urls,
  row: 7,
  col: 9
})

// 使用默认的动画效果
move.movePoint(mChange.mode[0])

// 使用 transition 过渡，提供类名即可，eg: .test{transfrom:scale(0);}
move.movePoint(mChange.mode[0], {
    className: 'test'
})

// 使用 animation 动画，比如配合 animation.css 动画库
// animation 需要提供两个类名，进场动画和出场动画，同时需要标记这个是 animation 动画
move.movePoint(mChange.mode[0], {
    animate: true,
    classNameIn: 'animated flipInX',
    classNameOut: 'animated flipOutX'
})

// 使用特定的图片进行动画
// 不传 image 则随机取传入的图片列表中的一张图片
move.movePoint(mChange.mode[0], {
    animate: true,
    classNameIn: 'animated flipInX',
    classNameOut: 'animated flipOutX',
    image: urls[0]
})
```

## 方法说明

`mChange` 对象属性/方法：

- mode/Array:                 提供一组运动形式，目前有 `19` 种
- makeMatrixChange/Function:  用于初始化动画

## makeMatrixChange 方法说明

#### 参数

- 参一: 需要挂载的节点
- 参二: `option` 一些配置信息

#### option

- row:        需要生成的行数
- col:        需要生成的列数
- images:     图片列表
- nameSpace:  指定类名，不传则随机生成一个

#### 返回值

- movePoint/Function:     调用即开始运动
- changeImages/Function:  改变原始的图片列表，主要用于图片的懒加载，比如为了防止图片未加载好显示出来，在浏览器缓存好图片后，更换图片列表

## 自定义运动形式

运动形式是一个对象，对象下包含信息

- interval/Number:  每次运动的间隔时间
- init/Function:    用于初始化配置，在运动前会调用
- check/Function:   用于判断当次运动需要运动的点
- next/Function:    每次运动后对于下次运动的配置
- end/Function:     用于判断运动是否结束，每次运动后都会调用

如 `mChange.mode[4]` 的具体内容：

```
{
  interval: 140,
  duration: '1000',
  init: function (row, col) {
    this.row = row
    this.col = col
    this.num = 0
  },
  check: function (i, j) {
    return i + j === this.num
  },
  next: function () {
    this.num++
  },
  end: function () {
    return this.col + this.row + 1 === this.num
  }
}
```

代表矩阵从左上到右下，按照每一条斜线进行运动。

- `init`    函数参数即为初始化的行列信息
- `check`   函数参数即为每个二维矩阵的点，从 `0` 开始，当 `check` 返回 `true` 代表该点对于的块需要运动

## 其他

由于库中的样式是通过 `js` 生成的，目的也是为了不让使用者关注于 `css` 的实现以及方便使用，但对于熟悉 `css` 的使用者来说，`lib` 目录下有单独的  `scss` 文件，用于生成样式，项目中 `initStyle` 生成的 `css` 和这个 `scss` 文件一致的，所以如果想自定义开发，看看这个 `scss` 文件。
