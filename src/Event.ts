import {eventGroupType, EventInterface} from './types/event';
import {functionObject, arrayT} from './types/normal';

let uid = 0;

export class Event implements EventInterface {
  id: number;
  _events: eventGroupType;

  constructor() {
    this.id = uid++;
    this._events = {};
  }

  $on(eventName: arrayT<string>, fn: arrayT<functionObject>) {
    if (Array.isArray(eventName)) {
      eventName.forEach(name => this.$on(name, fn));
    } else {
      if (!Array.isArray(fn)) {
        fn = [fn];
      }
      (this._events[eventName] || (this._events[eventName] = [])).push(...(<[]>fn));
    }
    return this;
  }

  $once(eventName: string, fn: () => any) {
    let proxyFun: functionObject = (...args: []) => {
      this.$off(eventName, proxyFun);
      fn.apply(this, args);
    };
    proxyFun.fn = fn;

    this.$on(eventName, proxyFun);
    return this;
  }

  $off(eventName: arrayT<string>, fn: arrayT<functionObject>) {
    // 清空所有事件
    if (!arguments.length) {
      this._events = {};
      return this;
    }
    // 清空多个事件
    if (Array.isArray(eventName)) {
      eventName.forEach(name => this.$off(name, fn));
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
      // 处理一次取消多个的情况
      if (Array.isArray(fn)) {
        fn.forEach(fnc => this.$off(eventName, fnc));
        return this;
      }
      while (i--) {
        cb = cbs[i];
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
      cbs.forEach(func => func.apply(this, args));
    }
    return this;
  }
}
