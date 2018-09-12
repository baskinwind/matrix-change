export type normalObject = {
  [propName: string]: any;
};

export type functionObject = {
  (normalObject): any;
  [propName: string]: any;
};

export type pointType = {
  x: number;
  y: number;
};

export type optionType = {
  image?: string;
  className?: string;
  animate?: boolean;
  classNameIn?: string;
  classNameOut: string;
};

