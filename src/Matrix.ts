import {MatrixInterface} from './type/matrix';
import {modeType} from './type/mode';

import {Event} from './Event';

export default class Matrix extends Event implements MatrixInterface {

  row: number;
  col: number;
  lock: boolean;

  constructor(row = 7, col = 9) {
    super();
    this.row = row;
    this.col = col;
    this.lock = false;
  }

  movePoint(mode: modeType, option: object = {}) {
    if (this.lock === true) {
      return;
    }
    mode.init(this.row, this.col);
    this.$emit('matrixChangeStart');
    this.lock = true;
    let timer = setInterval(() => {
      for (let i = 0; i < this.row; i++) {
        for (let j = 0; j < this.col; j++) {
          if (mode.check(i, j)) {
            this.$emit('hitPoint', {
              point: {
                x: i,
                y: j
              },
              mode: mode,
              option,
              end: mode.end(),
            });
          }
        }
      }
      if (mode.end()) {
        clearInterval(timer);
        this.$emit('matrixChangeEnd');
      }
      mode.next();
    }, mode.interval);
  }

  changeMatrix(row: number, col: number) {
    this.row = row;
    this.col = col
  }
}
