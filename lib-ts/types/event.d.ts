import { functionObject } from './normal';

export type eventGroup = {
  [propName: string]: Array<functionObject>;
};

export interface EventInterface {
  id: number;
  _events: eventGroup;
  $on: (eventName: string, fn: Array<() => any> | (() => any)) => this;
  $once: (eventName: string, fn: () => any) => this;
  $off: (eventName?: string, fn?: Array<() => any> | (() => any)) => this;
  $emit: (eventName: string, args?: Array<any>) => this;
}
