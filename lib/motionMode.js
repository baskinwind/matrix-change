export let methods = [{
  duration: '1s',
  interval: '140',
  row: 0,
  col: 0,
  init: function (row, col) {
    this.row = row
    this.col = col
    this.num = 2;
  },
  check: function (i, j) {
    return i + j === this.num;
  },
  next: function () {
    this.num++;
  },
  end: function () {
    return this.col + this.row + 1 === this.num;
  }
}, {
  duration: '1s',
  interval: '140',
  row: 0,
  col: 0,
  init: function (row, col) {
    this.row = row
    this.col = col
    this.num = this.row - 1;
  },
  check: function (i, j) {
    return i - j === this.num;
  },
  next: function () {
    this.num--;
  },
  end: function () {
    return 1 - this.col - 1 === this.num;
  }
}];