export let mode = [{
  row: 0,
  col: 0,
  interval: '140',
  duration: '1000',
  init: function (row, col) {
    this.row = row
    this.col = col
    this.num = 2
  },
  check: function (i, j) {
    return i + j === this.num
  },
  next: function () {
    this.num++
  },
  end: function () {
    return this.col + this.row + 1 === this.num
  }
}, {
  row: 0,
  col: 0,
  interval: '140',
  duration: '1000',
  init: function (row, col) {
    this.row = row
    this.col = col
    this.num = this.row - 1
  },
  check: function (i, j) {
    return i - j === this.num
  },
  next: function () {
    this.num--
  },
  end: function () {
    return 1 - this.col - 1 === this.num
  }
}, {
  row: 0,
  col: 0,
  interval: '140',
  duration: '1000',
  init: function (row, col) {
    this.row = row
    this.col = col
    this.num = 1 - this.col
  },
  check: function (i, j) {
    return i - j === this.num
  },
  next: function () {
    this.num++
  },
  end: function () {
    return this.row - 1 + 1 === this.num
  }
}, {
  row: 0,
  col: 0,
  interval: '200',
  duration: '1200',
  init: function (row, col) {
    this.row = row
    this.col = col
    this.num = 1
  },
  check: function (i, j) {
    return i === this.num
  },
  next: function () {
    this.num++
  },
  end: function () {
    return this.row + 1 === this.num
  }
}, {
  row: 0,
  col: 0,
  interval: '200',
  duration: '1200',
  init: function (row, col) {
    this.row = row
    this.col = col
    this.num = 1
  },
  check: function (i, j) {
    return j === this.num
  },
  next: function () {
    this.num++
  },
  end: function () {
    return this.col + 1 === this.num
  }
}, {
  row: 0,
  col: 0,
  interval: '200',
  duration: '1200',
  init: function (row, col) {
    this.row = row
    this.col = col
    this.num = this.row
  },
  check: function (i, j) {
    return i === this.num
  },
  next: function () {
    this.num--
  },
  end: function () {
    return 0 === this.num
  }
}, {
  row: 0,
  col: 0,
  interval: '200',
  duration: '1200',
  init: function (row, col) {
    this.row = row
    this.col = col
    this.num = this.col
  },
  check: function (i, j) {
    return j === this.num
  },
  next: function () {
    this.num--
  },
  end: function () {
    return 0 === this.num
  }
}, {
  row: 0,
  col: 0,
  interval: '200',
  duration: '1200',
  init: function (row, col) {
    this.row = row
    this.col = col
    this.num = 1
  },
  check: function (i, j) {
    return (i === this.num && j >= this.num) || (j === this.num && i >= this.num)
  },
  next: function () {
    this.num++
  },
  end: function () {
    if (this.row > this.col) {
      return this.row === this.num
    } else {
      return this.col === this.num
    }
  }
}, {
  row: 0,
  col: 0,
  interval: '200',
  duration: '1200',
  init: function (row, col) {
    this.row = row
    this.col = col
    this.num = 1
  },
  check: function (i, j) {
    return (this.row - i + 1 === this.num && this.col - j + 1 >= this.num) ||
      (this.col - j + 1 === this.num && this.row - i + 1 >= this.num)
  },
  next: function () {
    this.num++
  },
  end: function () {
    if (this.row > this.col) {
      return this.num === this.row
    } else {
      return this.num === this.col
    }
  }
}, {
  row: 0,
  col: 0,
  interval: '200',
  duration: '1200',
  init: function (row, col) {
    this.row = row
    this.col = col
    this.num = 1
  },
  check: function (i, j) {
    return (i === this.num && this.col - j + 1 >= this.num) || (this.col - j + 1 === this.num && i >= this.num)
  },
  next: function () {
    this.num++
  },
  end: function () {
    if (this.row > this.col) {
      return this.row === this.num
    } else {
      return this.col === this.num
    }
  }
}, {
  row: 0,
  col: 0,
  interval: '200',
  duration: '1200',
  init: function (row, col) {
    this.row = row
    this.col = col
    this.num = 1
  },
  check: function (i, j) {
    return (this.row - i + 1 === this.num && j >= this.num) || (j === this.num && this.row - i + 1 >= this.num)
  },
  next: function () {
    this.num++
  },
  end: function () {
    if (this.row > this.col) {
      return this.row === this.num
    } else {
      return this.col === this.num
    }
  }
}, {
  row: 0,
  col: 0,
  interval: '300',
  duration: '1400',
  init: function (row, col) {
    this.row = row
    this.col = col
    this.num = 1
  },
  check: function (i, j) {
    return (i === this.num && j >= this.num && this.col - j + 1 >= this.num) ||
      (j === this.num && i >= this.num && this.row - i + 1 >= this.num) ||
      (this.row - i + 1 === this.num && j >= this.num && this.col - j + 1 >= this.num) ||
      (this.col - j + 1 === this.num && i >= this.num && this.row - i + 1 >= this.num)
  },
  next: function () {
    this.num++
  },
  end: function () {
    if (this.row > this.col) {
      return Math.floor(this.row / 2) + 1 === this.num
    } else {
      return Math.floor(this.col / 2) + 1 === this.num
    }
  }
}, {
  row: 0,
  col: 0,
  position: {},
  interval: '320',
  duration: '1800',
  init: function (row, col) {
    this.row = row
    this.col = col
    this.num = 1
    this.position.x = (this.row + 1) / 2
    this.position.y = (this.col + 1) / 2
  },
  check: function (i, j) {
    let dis = Math.abs(i - this.position.x) + Math.abs(j - this.position.y)
    return (dis < this.num) && (dis >= this.num - 1)
  },
  next: function () {
    this.num++
  },
  end: function () {
    return this.num > this.position.x + this.position.y
  }
}, {
  row: 0,
  col: 0,
  interval: '300',
  duration: '1600',
  init: function (row, col) {
    this.row = row
    this.col = col
    this.num = this.row > this.col ? Math.ceil(this.col / 2) : Math.ceil(this.row / 2)
  },
  check: function (i, j) {
    return ((i === this.num || this.row + 1 - i === this.num) && j >= this.num && this.col + 1 - j >= this.num) ||
      ((j === this.num || this.col + 1 - j === this.num) && i >= this.num && this.row + 1 - i >= this.num)
  },
  next: function () {
    this.num--
  },
  end: function () {
    return this.num === -1
  }
}, {
  row: 0,
  col: 0,
  interval: '50',
  duration: '600',
  init: function (row, col) {
    this.row = row
    this.col = col
    this.point = [
      [1, 1],
      [1, this.col],
      [this.row, this.col],
      [this.row, 1]
    ]
    this.point[0] = [2, 1]
    this.direction = 'row'
    this.positive = true
    this.iNow = 1
    this.jNow = 1
    this.allNum = this.col * this.row
  },
  check: function (i, j) {
    return i === this.iNow && j === this.jNow
  },
  next: function () {
    this.allNum--
    if (this.direction === 'row' && this.jNow < this.point[1][1] && this.positive) {
      this.jNow++
      if (this.jNow === this.point[1][1]) {
        this.point[1] = [this.point[1][0] + 1, this.point[1][1] - 1]
        this.direction = 'col'
        this.positive = true
      }
    } else if (this.direction === 'col' && this.iNow < this.point[2][0] && this.positive) {
      this.iNow++
      if (this.iNow === this.point[2][0]) {
        this.point[2] = [this.point[2][0] - 1, this.point[2][1] - 1]
        this.direction = 'row'
        this.positive = false
      }
    } else if (this.direction === 'row' && this.jNow > this.point[3][1] && !this.positive) {
      this.jNow--
      if (this.jNow === this.point[3][1]) {
        this.point[3] = [this.point[3][0] - 1, this.point[3][1] + 1]
        this.direction = 'col'
        this.positive = false
      }
    } else if (this.direction === 'col' && this.iNow > this.point[0][0] && !this.positive) {
      this.iNow--
      if (this.iNow === this.point[0][0]) {
        this.point[0] = [this.point[0][0] + 1, this.point[0][1] + 1]
        this.direction = 'row'
        this.positive = true
      }
    }
  },
  end: function () {
    return this.allNum === 0
  }
}]