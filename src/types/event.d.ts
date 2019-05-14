import {arrayT} from './normal';

export type eventGroupType = {
  [propName: string]: Array<() => any>;
};

export interface EventInterface {
  id: number;
  _events: eventGroupType;

  $on(eventName: arrayT<string>, fn: arrayT<Function>): this;

  $once(eventName: string, fn: () => any): this;

  $off(eventName?: arrayT<string>, fn?: arrayT<Function>): this;

  $emit(eventName: string, args?: Array<any>): this;
}
