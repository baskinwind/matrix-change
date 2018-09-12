export type modeType = {
  interval: string;
  init: (row: number, col: number) => void;
  check: (i: number, j: number) => boolean;
  next: () => void;
  end: () => boolean;
  [propName: string]: any;
};
