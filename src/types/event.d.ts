import { functionObject, arrayT } from './normal';

export type eventGroupType = {
  [propName: string]: Array<functionObject>;
};

export interface EventInterface {
  id: number;
  _events: eventGroupType;

  $on(eventName: arrayT<string>, fn: arrayT<functionObject>): this;

  $once(eventName: string, fn: () => any): this;

  $off(eventName?: arrayT<string>, fn?: arrayT<functionObject>): this;

  $emit(eventName: string, args?: Array<any>): this;
}
