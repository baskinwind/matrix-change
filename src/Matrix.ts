import { MatrixInterface } from './types/matrix';
import { modeType } from './types/mode';

import { Event } from './Event';

export class Matrix extends Event implements MatrixInterface {

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
    this.$emit('changeStart');
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
              option
            });
          }
        }
      }
      mode.next();
      if (mode.end()) {
        clearInterval(timer);
        this.$emit('changeEnd');
        setTimeout(() => {
          this.lock = false;
        }, 2000);
      }
    }, mode.interval);
  }
}
