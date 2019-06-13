import {modeType} from '../type/mode';

/**
 *  回字形运动，i-内部 o-外部
 */

/**
 * 回字形由内到外扩散
 * top bottom left right 表示当前需要运动的边
 */
export const i2o: modeType = {
  interval: 300,
  duration: 1400,
  init(row, col) {
    this.row = row;
    this.col = col;
    let rowCanDiv2 = this.row % 2 === 0;
    let colCanDiv2 = this.col % 2 === 0;
    if (row > col) {
      this.left = colCanDiv2 ? col / 2 - 1 : (col - 1) / 2;
      this.right = colCanDiv2 ? col / 2 : (col - 1) / 2;
      this.top = this.left;
      this.bottom = this.row - 1 - this.left;
    } else {
      this.top = rowCanDiv2 ? row / 2 - 1 : (row - 1) / 2;
      this.bottom = rowCanDiv2 ? row / 2 : (row - 1) / 2;
      this.left = this.top;
      this.right = this.col - this.top - 1;
    }
    console.log(this.top, this.bottom, this.left, this.right)
  },
  check(i, j) {
    return ((i === this.top || i === this.bottom) && j >= this.left && j <= this.right) ||
      ((j === this.left || j === this.right) && i >= this.top && i <= this.bottom)
  },
  next() {
    this.top--;
    this.bottom++;
    this.left--;
    this.right++;
  },
  end() {
    return this.top === -1;
  }
};

/**
 * 上述运动的反向
 */
export const o2i: modeType = {
  interval: 300,
  duration: 1400,
  init(row, col) {
    this.row = row;
    this.col = col;
    this.top = 0;
    this.bottom = row - 1;
    this.left = 0;
    this.right = col - 1;
  },
  check(i, j) {
    return ((i === this.top || i === this.bottom) && j >= this.left && j <= this.right) ||
      ((j === this.left || j === this.right) && i >= this.top && i <= this.bottom)
  },
  next() {
    this.top++;
    this.bottom--;
    this.left++;
    this.right--;
  },
  end() {
    return this.top > this.bottom;
  }
};
