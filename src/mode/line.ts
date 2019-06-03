import {modeType} from '../type/mode';

/**
 *  线性运动
 */


/**
 * 从上到下按照每一条斜线运动
 */
export const t2b: modeType = {
  interval: 140,
  duration: 1000,
  init(row) {
    this.row = row;
    this.count = 0;
  },
  check(i) {
    return i === this.count;
  },
  next() {
    this.count++;
  },
  end() {
    return this.count === this.row;
  }
};

/**
 * 从下到上按照每一条斜线运动
 */
export const b2t: modeType = {
  interval: 140,
  duration: 1000,
  init(row, col) {
    this.row = row;
    this.count = row;
  },
  check(i, j) {
    return i === this.count;
  },
  next() {
    this.count--;
  },
  end() {
    return this.count === -1;
  }
};

/**
 * 从左到右按照每一条斜线运动
 */
export const l2r: modeType = {
  interval: 140,
  duration: 1000,
  init(row, col) {
    this.col = col;
    this.count = 0;
  },
  check(i, j) {
    return j === this.count;
  },
  next() {
    this.count++;
  },
  end() {
    return this.count === this.col;
  }
};

/**
 * 从右到左按照每一条斜线运动
 */
export const r2l: modeType = {
  interval: 140,
  duration: 1000,
  init(row, col) {
    this.col = col;
    this.count = col;
  },
  check(i, j) {
    return j === this.count;
  },
  next() {
    this.count--;
  },
  end() {
    return this.count === -1;
  }
};

/**
 * 从左上到右下按照每一条斜线运动
 */
export const lt2rb: modeType = {
  interval: 140,
  duration: 1000,
  init(row, col) {
    this.row = row;
    this.col = col;
    this.count = 0;
  },
  check(i, j) {
    return i + j === this.count;
  },
  next() {
    this.count++;
  },
  end() {
    return this.count === this.row + this.col;
  }
};

/**
 * 从左下到右上按照每一条斜线运动
 */
export const lb2rt: modeType = {
  interval: 140,
  duration: 1000,
  init(row, col) {
    this.row = row;
    this.col = col;
    this.count = row;
  },
  check(i, j) {
    return i - j === this.count;
  },
  next() {
    this.count--;
  },
  end() {
    return this.count === -this.col;
  }
};

/**
 * 从右上到左下按照每一条斜线运动
 */
export const rt2lb: modeType = {
  interval: 140,
  duration: 1000,
  init(row, col) {
    this.row = row;
    this.col = col;
    this.count = col;
  },
  check(i, j) {
    return j - i === this.count;
  },
  next() {
    this.count--;
  },
  end() {
    return this.count === -this.row;
  }
};

/**
 * 从右下到左上按照每一条斜线运动
 */
export const rb2lt: modeType = {
  interval: 140,
  duration: 1000,
  init(row, col) {
    this.row = row;
    this.col = col;
    this.count = row + col;
  },
  check(i, j) {
    return j + i === this.count;
  },
  next() {
    this.count--;
  },
  end() {
    return this.count === -1;
  }
};
