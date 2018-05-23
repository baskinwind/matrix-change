import {Event} from './Event'

export class MC extends Event {
  constructor(row = 7, col = 9) {
    super()
    this.row = row
    this.col = col
  }

  movePoint(mode) {
    let mc = this
    mode.init(this.row, this.col)
    mc.$emit('changeStart')
    let timer = setInterval(() => {
      for (let i = 0; i < mc.row; i++) {
        for (let j = 0; j < mc.col; j++) {
          if (mode.check(i, j)) {
            mc.$emit('movePoint', {
              point: [i, j],
              mode: mode
            })
          }
        }
      }
      mode.next()
      if (mode.end()) {
        clearInterval(timer)
        mc.$emit('changeEnd')
      }
    }, mode.duration)
  }
}