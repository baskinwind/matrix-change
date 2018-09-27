import { functionObject } from './normal';

export type eventNameType = Array<string> | string

export type eventEmitFunType = Array<functionObject> | functionObject

export type eventGroupType = {
  [propName: string]: Array<functionObject>
};

export interface EventInterface {
  id: number
  _events: eventGroupType

  $on (eventName: eventNameType, fn: eventEmitFunType): this

  $once (eventName: string, fn: () => any): this

  $off (eventName?: eventNameType, fn?: eventEmitFunType): this

  $emit (eventName: string, args?: Array<any>): this
}
