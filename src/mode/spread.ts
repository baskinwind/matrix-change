import {modeType} from './index';

type centerMakerType = (row: number, col: number) => [number, number];

import {getRandom} from "../util";

/**
 * 更具某一点进行扩散运动
 * @param {centerMakerType} centerMaker
 * @return {modeType}
 */
export function makeSpread(centerMaker: centerMakerType): modeType {
  return {
    interval: 100,
    duration: 200,
    init(row, col) {
      this.row = row;
      this.col = col;
      // 用于记录扩散的距离
      this.count = 0;
      // 确定扩散的中心点
      this.center = centerMaker(row, col);
    },
    check(i, j) {
      if (i < 0 || j < 0 || i > this.row || j > this.col) return false;
      let dis = Math.abs(i - this.center[0]) + Math.abs(j - this.center[1]);
      return dis >= this.count && dis < this.count + 1;
    },
    next() {
      this.count++;
    },
    end() {
      // 4个角落的距离是整个矩阵里确定好的中心点最远的，只要 4 个角落的距离都比 this.count 远即运动结束
      let ltDis = this.center[0] + this.center[1] + 1;
      let lbDis = this.center[0] + this.col - this.center[1];
      let rtDis = this.row - this.center[0] + this.center[1];
      let rbDis = this.row + this.col - ltDis;
      return ltDis < this.count + 2 && lbDis < this.count + 2 && rtDis < this.count + 2 && rbDis < this.count + 2;
    }
  }
}

/**
 *  由任意一点向周围扩散
 */
export const random: modeType = makeSpread((row, col) => [getRandom(row), getRandom((col))]);

/**
 *  由中心向外扩散
 */
export const center: modeType = makeSpread((row, col) => [(row - 1) / 2, (col - 1) / 2]);
