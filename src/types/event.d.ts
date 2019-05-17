export type eventGroupType = {
  [propName: string]: Array<Function>;
};

export interface EventInterface {
  id: number;
  _events: eventGroupType;

  $on(eventName: string, fn: Function): this;

  $once(eventName: string, fn: Function): this;

  $off(eventName?: string, fn?: Function): this;

  $emit(eventName: string, args?: Array<any>): this;
}
