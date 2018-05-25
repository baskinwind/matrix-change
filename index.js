let Matrix = require('./lib/Matrix')
let {containerLayout, initDom} = require('./lib/initHtml')
let mode = require('./lib/motionMode')
let makeMatrixChange = require('./lib/makeMatrixChange')

module.exports = {
  Matrix: Matrix,
  containerLayout: containerLayout,
  initDom: initDom,
  mode: mode,
  makeMatrixChange: makeMatrixChange,
}