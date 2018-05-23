let uid = 0

export class Event {
    constructor() {
        this.id = ++uid
        this._events = {}
    }

    $on(eventName, fn) {
        let ctx = this
        if (Array.isArray(eventName)) {
            eventName.forEach(name => this.$on(name, fn))
        } else {
            if (!Array.isArray(fn)) {
                fn = [fn]
            }
            (ctx._events[eventName] || (ctx._events[eventName] = [])).push(...fn)
        }
        return ctx
    }

    $once(eventName, fn) {
        let ctx = this

        function on() {
            ctx.$off(eventName, on)
            fn.apply(ctx, arguments)
        }

        on.fn = fn
        ctx.$on(eventName, on)
        return ctx
    }

    $off(eventName, fn) {
        let ctx = this
        // 清空所有事件
        if (!arguments.length) {
            ctx._events = {}
            return ctx
        }
        // 清空多个事件
        if (Array.isArray(eventName)) {
            eventName.forEach(name => this.$off(name, fn))
            return ctx
        }
        // 若没有事件对应的函数列表则不用处理
        const cbs = ctx._events[eventName]
        if (!cbs) {
            return ctx
        }
        // 清空特定事件
        if (!fn) {
            ctx._events[eventName] = null
            return ctx
        }
        // 取消特定事件的特定处理函数
        if (fn) {
            let cb
            let i = cbs.length
            // 处理一次取消多个的情况
            if (Array.isArray(fn)) {
                fn.forEach(fnc => this.$off(eventName, fnc))
                return
            }
            while (i--) {
                cb = cbs[i]
                if (cb === fn || cb.fn === fn) {
                    cbs.splice(i, 1)
                    break
                }
            }
        }
        return ctx
    }

    $emit(eventName, ...args) {
        let ctx = this
        let cbs = ctx._events[eventName]
        if (cbs) {
            cbs.forEach(func => func.apply(ctx, args))
        }
        return ctx
    }

}