export type eventGroup = {
  [propName: string]: Array<() => any>
}

export interface EventInterface {
  id: number,
  _events: eventGroup,
  $on: (eventName: string, fn: () => any) => this,
  $once: (eventName: string, fn: () => any) => this,
  $off: (eventName?: string, fn?: () => any) => this,
  $emit: (eventName: string, args?: Array<any>) => this
}
