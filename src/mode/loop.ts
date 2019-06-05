import {modeType} from '../type/mode';

type pointType = [number, number];

type pointMaker = (row: number, col: number) => pointType;

type optionType = {
  point: pointMaker;
  direction: string;
  adjustLoopPointName: string;
  adjustLoopPoint: pointMaker;
  loopDirection?: boolean;
}

/**
 *  绕圈运动，从某个角落开始向中心绕圈
 */

/**
 * 判断两点是否相等
 * @param {pointType} point1
 * @param {pointType} point2
 */
function pointEqual(point1: pointType, point2: pointType) {
  return point1[0] === point2[0] && point1[1] === point2[1]
}

/**
 * 顺时针旋转的下一步
 */
function nextClockwise() {
  // @ts-ignore
  let that: modeType = this;
  that.count--;
  if (that.type === 'rowRight') {
    if (pointEqual(that.point, that.loopPoint.rt)) {
      that.point[0]++;
      that.type = 'colDown';
      that.loopPoint.rt[0]++;
      that.loopPoint.rt[1]--;
    } else {
      that.point[1]++;
    }
    return
  }

  if (that.type === 'colDown') {
    if (pointEqual(that.point, that.loopPoint.rb)) {
      that.point[1]--;
      that.type = 'rowLeft';
      that.loopPoint.rb[0]--;
      that.loopPoint.rb[1]--;
    } else {
      that.point[0]++;
    }
    return
  }

  if (that.type === 'rowLeft') {
    if (pointEqual(that.point, that.loopPoint.lb)) {
      that.point[0]--;
      that.type = 'colUp';
      that.loopPoint.lb[0]--;
      that.loopPoint.lb[1]++;
    } else {
      that.point[1]--;
    }
    return
  }

  if (that.type === 'colUp') {
    if (pointEqual(that.point, that.loopPoint.lt)) {
      that.point[1]++;
      that.type = 'rowRight';
      that.loopPoint.lt[0]++;
      that.loopPoint.lt[1]++;
    } else {
      that.point[0]--;
    }
    return
  }
}

/**
 * 逆时针旋转的下一步
 */
function nextAntiClockwise() {
  // @ts-ignore
  let that: modeType = this;
  that.count--;
  if (that.type === 'colDown') {
    if (pointEqual(that.point, that.loopPoint.lb)) {
      that.point[1]++;
      that.type = 'rowRight';
      that.loopPoint.lb[0]--;
      that.loopPoint.lb[1]++;
    } else {
      that.point[0]++;
    }
    return
  }

  if (that.type === 'rowRight') {
    if (pointEqual(that.point, that.loopPoint.rb)) {
      that.point[0]--;
      that.type = 'colUp';
      that.loopPoint.rb[0]--;
      that.loopPoint.rb[1]--;
    } else {
      that.point[1]++;
    }
    return
  }

  if (that.type === 'colUp') {
    if (pointEqual(that.point, that.loopPoint.rt)) {
      that.point[1]--;
      that.type = 'rowLeft';
      that.loopPoint.rt[0]++;
      that.loopPoint.rt[1]--;
    } else {
      that.point[0]--;
    }
    return
  }

  if (that.type === 'rowLeft') {
    if (pointEqual(that.point, that.loopPoint.lt)) {
      that.point[0]++;
      that.type = 'colDown';
      that.loopPoint.lt[0]++;
      that.loopPoint.lt[1]++;
    } else {
      that.point[1]--;
    }
    return
  }
}

/**
 * 用于生成动画效果
 */
function makeLoop({point, direction, adjustLoopPointName, adjustLoopPoint, loopDirection = true}: optionType): modeType {
  return {
    interval: 50,
    duration: 600,
    init(row, col) {
      this.row = row;
      this.col = col;
      this.count = row * col;
      // 当前运动到的点
      this.point = point(row, col);
      // 需要进行转向的点，左上 右上 右下 左下
      this.loopPoint = {
        lt: [0, 0],
        rt: [0, col - 1],
        rb: [row - 1, col - 1],
        lb: [row - 1, 0]
      };
      // 根据不同的动画形式需要调整不同的转向点
      this.loopPoint[adjustLoopPointName] = adjustLoopPoint(row, col);
      // 设置初始的运动方向
      this.type = direction;
    },
    check(i, j) {
      return i === this.point[0] && j === this.point[1];
    },
    next: loopDirection ? nextClockwise : nextAntiClockwise,
    end() {
      return this.count === 0;
    }
  }
}

/**
 * 名称释义 l-左 r-右 t-上 b-下
 * 若无后缀则是从规定的顶点顺时针旋转
 * 若有 Anti 后缀则是从规定的顶点逆时针旋转
 */

export const lt: modeType = makeLoop({
  point: () => [0, 0],
  direction: 'rowRight',
  adjustLoopPointName: 'lt',
  adjustLoopPoint: () => [1, 0]
});

export const rt: modeType = makeLoop({
  point: (row, col) => [0, col - 1],
  direction: 'colDown',
  adjustLoopPointName: 'rt',
  adjustLoopPoint: (row, col) => [0, col - 2]
});

export const rb: modeType = makeLoop({
  point: (row, col) => [row - 1, col - 1],
  direction: 'rowLeft',
  adjustLoopPointName: 'rb',
  adjustLoopPoint: (row, col) => [row - 2, col - 1]
});

export const lb: modeType = makeLoop({
  point: (row) => [row - 1, 0],
  direction: 'colUp',
  adjustLoopPointName: 'lb',
  adjustLoopPoint: (row) => [row - 1, 1]
});

export const ltAnti: modeType = makeLoop({
  point: () => [0, 0],
  direction: 'colDown',
  adjustLoopPointName: 'lt',
  adjustLoopPoint: () => [0, 1],
  loopDirection: false
});

export const lbAnti: modeType = makeLoop({
  point: (row) => [row - 1, 0],
  direction: 'rowRight',
  adjustLoopPointName: 'lb',
  adjustLoopPoint: (row) => [row - 2, 0],
  loopDirection: false
});

export const rbAnti: modeType = makeLoop({
  point: (row, col) => [row - 1, col - 1],
  direction: 'colUp',
  adjustLoopPointName: 'rb',
  adjustLoopPoint: (row, col) => [row - 1, col - 2],
  loopDirection: false
});

export const rtAnti: modeType = makeLoop({
  point: (row, col) => [0, col - 1],
  direction: 'rowLeft',
  adjustLoopPointName: 'rt',
  adjustLoopPoint: (row, col) => [1, col - 1],
  loopDirection: false
});
