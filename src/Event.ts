import {eventGroupType, EventInterface} from './type/event';

let uid = 0;

export class Event implements EventInterface {
  id: number;
  _events: eventGroupType;

  constructor() {
    this.id = uid++;
    this._events = {};
  }

  $on(eventName: string, fn: Function): this {
    if (!this._events[eventName]) {
      this._events[eventName] = []
    }
    this._events[eventName].push(fn);
    return this;
  }

  $once(eventName: string, fn: Function) {
    let proxyFun = (...args: []) => {
      this.$off(eventName, proxyFun);
      fn.apply(this, args);
    };
    // @ts-ignore
    proxyFun.fn = fn;

    this.$on(eventName, proxyFun);
    return this;
  }

  $off(eventName: string, fn: Function) {
    // 清空所有事件
    if (!arguments.length) {
      this._events = {};
      return this;
    }
    // 若没有事件对应的函数列表则不用处理
    const cbs = this._events[eventName];
    if (!cbs) {
      return this;
    }
    // 清空特定事件
    if (!fn) {
      this._events[eventName] = [];
      return this;
    }
    // 取消特定事件的特定处理函数
    if (fn) {
      let cb;
      let i = cbs.length;
      while (i--) {
        cb = cbs[i];
        // @ts-ignore
        if (cb === fn || cb.fn === fn) {
          cbs.splice(i, 1);
          break;
        }
      }
    }
    return this;
  }

  $emit(eventName: string, ...args: Array<any>) {
    let cbs = this._events[eventName];
    if (cbs) {
      cbs.forEach(func => func.apply(this, <[]>args));
    }
    return this;
  }
}
