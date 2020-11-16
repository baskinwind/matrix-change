import { modeType } from "./mode/index";

import { Event } from "./_event";

export interface hitPointParams<T> {
  point: {
    x: number;
    y: number;
  };
  mode: modeType;
  end: boolean;
  option: T;
}

export default class Matrix extends Event {
  row: number;
  col: number;
  lock: boolean = false;

  constructor(row = 7, col = 9) {
    super();
    this.row = row;
    this.col = col;
  }

  movePoint<T>(mode: modeType, option: T) {
    if (this.lock) {
      return;
    }

    mode.init(this.row, this.col);
    this.$emit("matrixChangeStart");
    this.lock = true;
    let timer = setInterval(() => {
      for (let i = 0; i < this.row; i++) {
        for (let j = 0; j < this.col; j++) {
          if (mode.check(i, j)) {
            this.$emit<hitPointParams<T>>("hitPoint", {
              point: {
                x: i,
                y: j,
              },
              mode: mode,
              end: mode.end(),
              option,
            });
          }
        }
      }
      if (mode.end()) {
        clearInterval(timer);
        this.$emit("matrixChangeEnd");
      }
      mode.next();
    }, mode.interval);
  }

  changeMatrix(row: number, col: number) {
    this.row = row;
    this.col = col;
  }
}
