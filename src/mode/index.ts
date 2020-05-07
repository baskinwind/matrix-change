import * as random from './random';
import * as line from './line';
import * as L from './L';
import * as circle from './circle';
import * as spread from './spread';
import * as loop from './loop';

export interface modeType {
  interval: number;
  duration: number;

  [propName: string]: any;

  init(row: number, col: number): void;

  check(i: number, j: number): boolean;

  next(): void;

  end(): boolean;
}

export {
  random,
  line,
  L,
  circle,
  spread,
  loop,
}

export default [
  random.t2b,
  random.b2t,
  random.l2r,
  random.r2l,
  line.t2b,
  line.b2t,
  line.l2r,
  line.r2l,
  line.lt2rb,
  line.lb2rt,
  line.rt2lb,
  line.rb2lt,
  L.lt2rb,
  L.lt2rbR,
  L.lb2rt,
  L.lb2rtR,
  L.rt2lb,
  L.rt2lbR,
  L.rb2lt,
  L.rb2ltR,
  circle.i2o,
  circle.o2i,
  spread.random,
  spread.center,
  loop.lt,
  loop.ltAnti,
  loop.lb,
  loop.lbAnti,
  loop.rt,
  loop.rtAnti,
  loop.rb,
  loop.rbAnti,
];
