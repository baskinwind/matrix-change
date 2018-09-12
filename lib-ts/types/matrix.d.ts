import { normalObject } from './normal';
import { EventInterface } from './event';
import { modeType } from './mode';

export interface MatrixInterface extends EventInterface {
  row: number;
  col: number;
  lock: boolean;
  movePoint: (mode: modeType, option: normalObject) => void;
}
