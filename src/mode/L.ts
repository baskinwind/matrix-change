import { modeType } from "./index";

/**
 *  L 形运动，t-上 b-下 l-左 r-右 R-前面代表的运动形式的反向
 */

/**
 * 从左上到右下进行 L 形运动
 */
export const lt2rb: modeType = {
  interval: 100,
  duration: 200,
  init(row, col) {
    this.row = row;
    this.col = col;
    if (row > col) {
      this.rowCount = row - col;
      this.colCount = 0;
    } else {
      this.rowCount = 0;
      this.colCount = col - row;
    }
  },
  check(i, j) {
    return (
      (i === this.rowCount && j <= this.colCount) ||
      (j === this.colCount && i <= this.rowCount)
    );
  },
  next() {
    this.rowCount++;
    this.colCount++;
  },
  end() {
    return this.rowCount === this.row - 1;
  },
};

/**
 * 为上述运动的反向
 */
export const lt2rbR: modeType = {
  interval: 100,
  duration: 200,
  init(row, col) {
    this.row = row;
    this.col = col;
    this.rowCount = row - 1;
    this.colCount = col - 1;
  },
  check(i, j) {
    return (
      (i === this.rowCount && j <= this.colCount) ||
      (j === this.colCount && i <= this.rowCount)
    );
  },
  next() {
    this.rowCount--;
    this.colCount--;
  },
  end() {
    return this.rowCount === 0 || this.colCount === 0;
  },
};

/**
 * 从左下到右上进行 L 形运动
 */
export const lb2rt: modeType = {
  interval: 100,
  duration: 200,
  init(row, col) {
    this.row = row;
    this.col = col;
    if (row > col) {
      this.rowCount = col - 1;
      this.colCount = 0;
    } else {
      this.rowCount = row - 1;
      this.colCount = col - row;
    }
  },
  check(i, j) {
    return (
      (i === this.rowCount && j <= this.colCount) ||
      (j === this.colCount && i >= this.rowCount)
    );
  },
  next() {
    this.rowCount--;
    this.colCount++;
  },
  end() {
    return this.rowCount === 0;
  },
};

/**
 * 为上述运动的反向
 */
export const lb2rtR: modeType = {
  interval: 100,
  duration: 200,
  init(row, col) {
    this.row = row;
    this.col = col;
    this.rowCount = 0;
    this.colCount = col - 1;
  },
  check(i, j) {
    return (
      (i === this.rowCount && j <= this.colCount) ||
      (j === this.colCount && i >= this.rowCount)
    );
  },
  next() {
    this.rowCount++;
    this.colCount--;
  },
  end() {
    return this.rowCount === this.row - 1 || this.colCount === 0;
  },
};

/**
 * 从右上到左下进行 L 形运动
 */
export const rt2lb: modeType = {
  interval: 100,
  duration: 200,
  init(row, col) {
    this.row = row;
    this.col = col;
    if (row > col) {
      this.rowCount = row - col;
      this.colCount = col - 1;
    } else {
      this.rowCount = 0;
      this.colCount = row - 1;
    }
  },
  check(i, j) {
    return (
      (i === this.rowCount && j >= this.colCount) ||
      (j === this.colCount && i <= this.rowCount)
    );
  },
  next() {
    this.rowCount++;
    this.colCount--;
  },
  end() {
    return this.rowCount === this.row - 1;
  },
};

/**
 * 为上述运动的反向
 */
export const rt2lbR: modeType = {
  interval: 100,
  duration: 200,
  init(row, col) {
    this.row = row;
    this.col = col;
    this.rowCount = row - 1;
    this.colCount = 0;
  },
  check(i, j) {
    return (
      (i === this.rowCount && j >= this.colCount) ||
      (j === this.colCount && i <= this.rowCount)
    );
  },
  next() {
    this.rowCount--;
    this.colCount++;
  },
  end() {
    return this.rowCount === 0 || this.colCount === this.col - 1;
  },
};

/**
 * 从右下到左上进行 L 形运动
 */
export const rb2lt: modeType = {
  interval: 100,
  duration: 200,
  init(row, col) {
    this.row = row;
    this.col = col;
    if (row > col) {
      this.rowCount = col - 1;
      this.colCount = col - 1;
    } else {
      this.rowCount = row - 1;
      this.colCount = row - 1;
    }
  },
  check(i, j) {
    return (
      (i === this.rowCount && j >= this.colCount) ||
      (j === this.colCount && i >= this.rowCount)
    );
  },
  next() {
    this.rowCount--;
    this.colCount--;
  },
  end() {
    return this.rowCount === 0;
  },
};

/**
 * 为上述运动的反向
 */
export const rb2ltR: modeType = {
  interval: 100,
  duration: 200,
  init(row, col) {
    this.row = row;
    this.col = col;
    this.rowCount = 0;
    this.colCount = 0;
  },
  check(i, j) {
    return (
      (i === this.rowCount && j >= this.colCount) ||
      (j === this.colCount && i >= this.rowCount)
    );
  },
  next() {
    this.rowCount++;
    this.colCount++;
  },
  end() {
    return this.rowCount === this.row - 1 || this.colCount === this.col - 1;
  },
};
