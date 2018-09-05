import { Event } from './Event'

export class Matrix extends Event {
  constructor(row = 7, col = 9) {
    super()
    this.row = row
    this.col = col
    this.lock = false
  }

  movePoint(mode, option = {}) {
    if (this.lock === true) {
      return
    }
    let ma = this
    mode.init(this.row, this.col)
    ma.$emit('changeStart')
    this.lock = true
    let timer = setInterval(() => {
      for (let i = 0; i < ma.row; i++) {
        for (let j = 0; j < ma.col; j++) {
          if (mode.check(i, j)) {
            ma.$emit('hitPoint', {
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
        ma.$emit('changeEnd')
        setTimeout(() => {
          this.lock = false
        }, 2000)
      }
    }, mode.interval)
  }
}
