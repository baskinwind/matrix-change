import {modeType} from '../type/mode';

/**
 *  根据随机值产生的动画归类
 */
import {getRandom} from "../util";

/**
 *  按照行划分，以 getRandom(row + col, 2) 为一组，每次运动每组一块
 *  从左到右运动组中的每一块
 */
export const rightRow: modeType = {
  interval: 140,
  duration: 1000,
  init(row, col) {
    this.row = row;
    this.col = col;
    this.base = getRandom(row + col, 3);
    this.count = 0;
  },
  check(i, j) {
    return (i * this.col + j) % this.base === this.count;
  },
  next() {
    this.count++;
  },
  end() {
    return this.count === this.base + 1;
  }
};

/**
 * 按照行划分，以 getRandom(row + col, 2) 为一组，每次运动每组一块
 * 从右到左运动组中的每一块
 */
export const leftRow: modeType = {
  interval: 140,
  duration: 1000,
  init(row, col) {
    this.row = row;
    this.col = col;
    this.base = getRandom(row + col, 3);
    this.count = this.base;
  },
  check(i, j) {
    return (i * this.col + j) % this.base === this.count;
  },
  next() {
    this.count--;
  },
  end() {
    return this.count === -1;
  }
};

/**
 * 按照列划分，以 getRandom(row + col, 2) 为一组，每次运动每组一块
 * 从上到下运动组中的每一块
 */
export const downCol: modeType = {
  interval: 140,
  duration: 1000,
  init(row, col) {
    this.row = row;
    this.col = col;
    this.base = getRandom(row + col, 3);
    this.count = 0;
  },
  check(i, j) {
    return (i + j * this.row) % this.base === this.count;
  },
  next() {
    this.count++;
  },
  end() {
    return this.count === this.base + 1;
  }
};

/**
 * 按照列划分，以 getRandom(row + col, 2) 为一组，每次运动每组一块
 * 从下到上运动组中的每一块
 */
export const upCol: modeType = {
  interval: 140,
  duration: 1000,
  init(row, col) {
    this.row = row;
    this.col = col;
    this.base = getRandom(row + col, 3);
    this.count = this.base;
  },
  check(i, j) {
    return (i + j * this.row) % this.base === this.count;
  },
  next() {
    this.count--;
  },
  end() {
    return this.count === -1;
  }
};
