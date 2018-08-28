# matrixChange

<p>
  <a href="https://www.npmjs.com/package/matrixchange"><img src="https://img.shields.io/badge/matrixChange-1.2.1-blue.svg" alt="Version"></a>
  <a href="https://www.npmjs.com/package/matrixchange"><img src="https://img.shields.io/badge/license-MIT-green.svg" alt="License"></a>
</p>

### use plugin

Browser

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
// ...
// or
import matrixChange from 'matrixchange'
// ...
```

---

### demo

[Live Demo](http://acohome.cn/demo/matrix/index.html)

[jsfiddle](https://jsfiddle.net/acccco/pgff8k5j/)

### how to use

```
var app = document.getElementById('app')
var urls = ['http://7xse2z.com1.z0.glb.clouddn.com/257084.jpg',
  'http://7xse2z.com1.z0.glb.clouddn.com/257453.jpg',
  'http://7xse2z.com1.z0.glb.clouddn.com/285848.jpg',
  'http://7xse2z.com1.z0.glb.clouddn.com/3455%20%281%29.jpg']

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
// animation 需要提供两个类名，进场动画和出场动画，同时需要标志这个是 animation 动画
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

### 原理说明

1. 生成一个二维矩阵（ `Matrix` ），根据矩阵生成布局
2. 使用指定的运动形式，遍历二维矩阵，确定出需要运动的点，触发 `hitPoint` 事件
3. 在指定的时间间隔后，进行下一轮的运动
4. 使用指定的运动结束判断，通过的话执行步骤 `2` ，否则结束运动

### 方法说明

`mChange` 对象属性：

- containerLayout/Function: 用于生成布局样式，需传递 `3` 个参数（命名空间/行数/列数）
- initDom/Function: 用于生成 `DOM` 节点，需传递 `4` 个参数（挂载的节点/命名空间/行数/列数）
- mode/Array: 提供一组运动形式，目前有 `19` 种
- Matrix/Class: 生成一个矩阵对象
- makeMatrixChange/Function: 便捷生成动画的方法，内部包装了以上 `4` 个方法

#### `Matrix` 类

构造函数/属性/方法

- constructor: 对象生成时需传递行列信息（`row/col`）
- row/Number: 矩阵行数
- col/Number: 矩阵列数
- movePoint/Function: 根据提供的运动形式(`mode` 列表中的一项)和运动参数(`option`)，进行运动，确定需要运动的点后触发 `hitPoint` 事件

事件

- changeStart: 运动开始前触发
- hitPoint: `Matrix` 实例执行 `movePoint` 后触发，事件回调参数包含坐标(`e.point`)/运动形式(`e.mode`)/运动参数(`e.option`)
- changeEnd: 运动结束后触发

### makeMatrixChange 封装好的运动函数

参数说明

- 参一: 需要挂载的节点
- 参二: `option` 一些配置信息

`options` 说明

- row: 需要生成的行数
- col: 需要生成的列数
- images: 图片列表
- nameSpace: 指定类名，不传则随机生成一个

返回值说明

- movePoint/Function: 调用即开始运动
- changeImages/Function: 改变原始的图片列表，主要用于图片的懒加载，比如为了防止图片未加载好显示出来，在浏览器缓存好图片后，更换图片列表
- matrixChange: 原始的 `Matrix` 对象

### 扩展

1. `makeMatrixChange` 是使用 `mChange` 提供的方法写的一个函数，如果有需求自定义矩阵动画效果，可以使用提供的方法自己封装一个
2. 如果仅仅是不满足于当前的运动形式，也可以自定义运动形式

#### 自定义运动形式

运动形式是一个对象，对象下包含信息

- interval/Number: 每次运动的间隔时间
- init/Function: 用于初始化配置，在运动前会调用
- check/Function: 用于判断当次运动需要运动的点
- next/Function: 每次运动后对于下次运动的配置
- end/Function: 用于判断运动是否结束，每次运动后都会调用
- 其他: 可以配置一些其他的字段，`hitPoint` 事件会将当前的运动形式放在回调函数的参数中。比如，定义了 `duration` 字段用于生成过渡的事件 `dom.style.transition = mode.duration / 1000 + 's'` 。

一个简单的栗子，比如 `mChange.mode[4]` 的具体内容：

```
{
  interval: '140',
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

- `init` 函数参数即为 `Matrix` 实例初始化的行列信息
- `check` 函数参数即为每个二维矩阵的点，从 `0` 开始，当 `check` 返回 `true` 时，就会触发 `hitPoint` 事件

### 其他

由于库中的样式是通过 `js` 生成的，目的也是为了不让使用者关注于 `css` 的实现以及方便使用，但对于熟悉 `css` 的使用者来说，`lib` 目录下有单独的  `scss` 文件，用于生成样式，项目中 `initStyle` 生成的 `css` 和这个 `scss` 文件一致的，所以如果想自定义开发，看看这个 `scss` 文件。
