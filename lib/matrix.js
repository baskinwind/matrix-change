import {Event} from './Event'

let uid = 0

export class Matrix extends Event {
  constructor(row = 7, col = 9) {
    super()
    this.id = uid++
    this.row = row
    this.col = col
    this.lock = false
  }

  movePoint(mode, option = {}) {
    if (this.lock === true) {
      return
    }
    let mc = this
    mode.init(this.row, this.col)
    mc.$emit('changeStart')
    this.lock = true
    let timer = setInterval(() => {
      for (let i = 0; i < mc.row; i++) {
        for (let j = 0; j < mc.col; j++) {
          if (mode.check(i, j)) {
            mc.$emit('hitPoint', {
              point: {
                x: i,
                y: j
              },
              mode: mode,
              option
            })
          }
        }
      }
      mode.next()
      if (mode.end()) {
        clearInterval(timer)
        mc.$emit('changeEnd')
        setTimeout(() => {
          this.lock = false
        }, 2000)
      }
    }, mode.interval)
  }
}