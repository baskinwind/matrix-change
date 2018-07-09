export let mode = [{
  interval: '140',
  duration: '1000',
  init: function (row, col) {
    this.row = row
    this.col = col
    this.num = Math.ceil(Math.random() * Math.ceil((row + col) / 2) + 2)
    this.baseNum = this.num
  },
  check: function (i, j) {
    return (i * this.col + j) % (this.baseNum + 1) === this.num
  },
  next: function () {
    this.num--
  },
  end: function () {
    return this.num === -1
  }
}, {
  interval: '140',
  duration: '1000',
  init: function (row, col) {
    this.row = row
    this.col = col
    this.num = Math.ceil(Math.random() * Math.max((row + col) / 2) + 2)
    this.baseNum = this.num
  },
  check: function (i, j) {
    return (i + j * this.row) % (this.baseNum + 1) === this.num
  },
  next: function () {
    this.num--
  },
  end: function () {
    return this.num === -1
  }
}, {
  interval: '140',
  duration: '1000',
  init: function (row, col) {
    this.row = row
    this.col = col
    this.num = Math.ceil(Math.random() * Math.ceil((row + col) / 2) + 2)
    this.baseNum = this.num
  },
  check: function (i, j) {
    return (i * this.col + j) % (this.baseNum + 1) === this.baseNum - this.num
  },
  next: function () {
    this.num--
  },
  end: function () {
    return this.num === -1
  }
}, {
  interval: '140',
  duration: '1000',
  init: function (row, col) {
    this.row = row
    this.col = col
    this.num = Math.ceil(Math.random() * Math.max((row + col) / 2) + 2)
    this.baseNum = this.num
  },
  check: function (i, j) {
    return (i + j * this.row) % (this.baseNum + 1) === this.baseNum - this.num
  },
  next: function () {
    this.num--
  },
  end: function () {
    return this.num === -1
  }
}, {
  interval: '140',
  duration: '1000',
  init: function (row, col) {
    this.row = row
    this.col = col
    this.num = 0
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
    return -this.col === this.num
  }
}, {
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
    return this.row === this.num
  }
}, {
  interval: '200',
  duration: '1200',
  init: function (row, col) {
    this.row = row
    this.col = col
    this.num = 0
  },
  check: function (i, j) {
    return i === this.num
  },
  next: function () {
    this.num++
  },
  end: function () {
    return this.row === this.num
  }
}, {
  interval: '200',
  duration: '1200',
  init: function (row, col) {
    this.row = row
    this.col = col
    this.num = 0
  },
  check: function (i, j) {
    return j === this.num
  },
  next: function () {
    this.num++
  },
  end: function () {
    return this.col === this.num
  }
}, {
  interval: '200',
  duration: '1200',
  init: function (row, col) {
    this.row = row
    this.col = col
    this.num = this.row - 1
  },
  check: function (i, j) {
    return i === this.num
  },
  next: function () {
    this.num--
  },
  end: function () {
    return this.num === -1
  }
}, {
  interval: '200',
  duration: '1200',
  init: function (row, col) {
    this.row = row
    this.col = col
    this.num = this.col - 1
  },
  check: function (i, j) {
    return j === this.num
  },
  next: function () {
    this.num--
  },
  end: function () {
    return this.num === -1
  }
}, {
  interval: '200',
  duration: '1200',
  init: function (row, col) {
    this.row = row
    this.col = col
    this.num = 0
  },
  check: function (i, j) {
    return (i === this.num && j >= this.num) || (j === this.num && i >= this.num)
  },
  next: function () {
    this.num++
  },
  end: function () {
    if (this.row > this.col) {
      return this.row - 1 === this.num
    } else {
      return this.col - 1 === this.num
    }
  }
}, {
  interval: '200',
  duration: '1200',
  init: function (row, col) {
    this.row = row
    this.col = col
    this.num = 0
  },
  check: function (i, j) {
    return (this.row - i - 1 === this.num && this.col - j - 1 >= this.num) ||
      (this.col - j - 1 === this.num && this.row - i - 1 >= this.num)
  },
  next: function () {
    this.num++
  },
  end: function () {
    if (this.row > this.col) {
      return this.num === this.row - 1
    } else {
      return this.num === this.col - 1
    }
  }
}, {
  interval: '200',
  duration: '1200',
  init: function (row, col) {
    this.row = row
    this.col = col
    this.num = 0
  },
  check: function (i, j) {
    return (i === this.num && this.col - j - 1 >= this.num) || (this.col - j - 1 === this.num && i >= this.num)
  },
  next: function () {
    this.num++
  },
  end: function () {
    if (this.row > this.col) {
      return this.row - 1 === this.num
    } else {
      return this.col - 1 === this.num
    }
  }
}, {
  interval: '200',
  duration: '1200',
  init: function (row, col) {
    this.row = row
    this.col = col
    this.num = 0
  },
  check: function (i, j) {
    return (this.row - i - 1 === this.num && j >= this.num) || (j === this.num && this.row - i - 1 >= this.num)
  },
  next: function () {
    this.num++
  },
  end: function () {
    if (this.row > this.col) {
      return this.row - 1 === this.num
    } else {
      return this.col - 1 === this.num
    }
  }
}, {
  interval: '300',
  duration: '1400',
  init: function (row, col) {
    this.row = row
    this.col = col
    this.num = 0
  },
  check: function (i, j) {
    return (i === this.num && j >= this.num && this.col - j - 1 >= this.num) ||
      (j === this.num && i >= this.num && this.row - i - 1 >= this.num) ||
      (this.row - i - 1 === this.num && j >= this.num && this.col - j - 1 >= this.num) ||
      (this.col - j - 1 === this.num && i >= this.num && this.row - i - 1 >= this.num)
  },
  next: function () {
    this.num++
  },
  end: function () {
    if (this.row > this.col) {
      return Math.ceil(this.col / 2) === this.num
    } else {
      return Math.ceil(this.row / 2) === this.num
    }
  }
}, {
  interval: '320',
  duration: '1800',
  init: function (row, col) {
    this.row = row
    this.col = col
    this.num = 0
    this.center = {
      x: (this.row - 1) / 2,
      y: (this.col - 1) / 2
    }
  },
  check: function (i, j) {
    let dis = Math.abs(i - this.center.x) + Math.abs(j - this.center.y)
    return (dis < this.num) && (dis >= this.num - 1)
  },
  next: function () {
    this.num++
  },
  end: function () {
    return this.num - 1 > this.center.x + this.center.y
  }
}, {
  interval: '300',
  duration: '1600',
  init: function (row, col) {
    this.row = row
    this.col = col
    this.num = this.row > this.col ? Math.ceil((this.col - 1) / 2) : Math.ceil((this.row - 1) / 2)
  },
  check: function (i, j) {
    return ((i === this.num || this.row - 1 - i === this.num) && j >= this.num && this.col - 1 - j >= this.num) ||
      ((j === this.num || this.col - 1 - j === this.num) && i >= this.num && this.row - 1 - i >= this.num)
  },
  next: function () {
    this.num--
  },
  end: function () {
    return this.num === -1
  }
}, {
  interval: '50',
  duration: '600',
  init: function (row, col) {
    this.row = row
    this.col = col
    this.point = [
      [1, 0],
      [0, this.col - 1],
      [this.row - 1, this.col - 1],
      [this.row - 1, 0]
    ]
    // 水平运动/垂直运动 row/col
    this.direction = 'row'
    // 正向/反向
    this.positive = true
    this.iNow = 0
    this.jNow = 0
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
        this.direction = 'col'
        this.positive = true
        this.point[1] = [this.point[1][0] + 1, this.point[1][1] - 1]
      }
    } else if (this.direction === 'col' && this.iNow < this.point[2][0] && this.positive) {
      this.iNow++
      if (this.iNow === this.point[2][0]) {
        this.direction = 'row'
        this.positive = false
        this.point[2] = [this.point[2][0] - 1, this.point[2][1] - 1]
      }
    } else if (this.direction === 'row' && this.jNow > this.point[3][1] && !this.positive) {
      this.jNow--
      if (this.jNow === this.point[3][1]) {
        this.direction = 'col'
        this.positive = false
        this.point[3] = [this.point[3][0] - 1, this.point[3][1] + 1]
      }
    } else if (this.direction === 'col' && this.iNow > this.point[0][0] && !this.positive) {
      this.iNow--
      if (this.iNow === this.point[0][0]) {
        this.direction = 'row'
        this.positive = true
        this.point[0] = [this.point[0][0] + 1, this.point[0][1] + 1]
      }
    }
  },
  end: function () {
    return this.allNum === 0
  }
}]
