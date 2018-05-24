import {Event} from './Event'

export class MC extends Event {
  constructor(row = 7, col = 9) {
    super()
    this.row = row
    this.col = col
    this.lock = false
  }

  movePoint(mode) {
    if (this.lock === true) {
      console.log('动画执行中')
      return
    }
    let mc = this
    mode.init(this.row, this.col)
    mc.$emit('changeStart')
    this.lock = true
    let timer = setInterval(() => {
      for (let i = 1; i <= mc.row; i++) {
        for (let j = 1; j <= mc.col; j++) {
          if (mode.check(i, j)) {
            mc.$emit('hitPoint', {
              point: {
                x: i,
                y: j
              },
              mode: mode
            })
          }
        }
      }
      mode.next()
      if (mode.end()) {
        clearInterval(timer)
        mc.$emit('changeEnd')
        this.lock = false
      }
    }, mode.interval)
  }
}