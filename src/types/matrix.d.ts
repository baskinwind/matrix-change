import {EventInterface} from './event';
import {modeType} from './mode';

export type matrixOption = {
  images: Array<string>;
  nameSpace?: string;
  row?: number;
  col?: number;
};

export interface MatrixInterface extends EventInterface {
  row: number;
  col: number;
  lock: boolean;

  movePoint(mode: modeType, option: object): void;
}

export type hitPointOption = {
  image?: string;
  className?: string;
  animate?: boolean;
  classNameIn?: string;
  classNameOut?: string;
};

export type hitPointFunParams = {
  point: {
    x: number;
    y: number;
  };
  mode: modeType;
  option: hitPointOption;
};
