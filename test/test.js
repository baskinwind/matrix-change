var app = document.getElementById('app')
var urls = ['http://7xse2z.com1.z0.glb.clouddn.com/257084.jpg',
  'http://7xse2z.com1.z0.glb.clouddn.com/257453.jpg',
  'http://7xse2z.com1.z0.glb.clouddn.com/285848.jpg',
  'http://7xse2z.com1.z0.glb.clouddn.com/3455%20%281%29.jpg']

var move = mChange.makeMatrixChange(app, {
  images: urls,
  row: 7,
  col: 9
})

function getRandom(min, max) {
  return Math.round(Math.random() * (max - min)) + min
}

move.movePoint(mChange.mode[5])

app.addEventListener('click', function () {
  move.movePoint(mChange.mode[getRandom(0, mChange.mode.length - 1)], {
    animate: true,
    classNameIn: 'animated flipInX',
    classNameOut: 'animated flipOutX'
  })
})