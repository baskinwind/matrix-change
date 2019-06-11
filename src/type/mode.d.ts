export type modeType = {
  interval: number;
  duration: number;
  [propName: string]: any;
  init(row: number, col: number): void;
  check(i: number, j: number): boolean;
  next(): void;
  end(): boolean;
};
