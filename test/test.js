var app = document.getElementById('app')
var urls = ['http://7xse2z.com1.z0.glb.clouddn.com/257084.jpg',
  'http://7xse2z.com1.z0.glb.clouddn.com/257453.jpg',
  'http://7xse2z.com1.z0.glb.clouddn.com/285848.jpg',
  'http://7xse2z.com1.z0.glb.clouddn.com/3455%20%281%29.jpg']

var move = mMove.makeMatrixChange(app, {
  images: urls,
  row: 7,
  col: 9
})

function getRandom(min, max) {
  return Math.round(Math.random() * (max - min)) + min
}

move.movePoint(mMove.mode[5])

app.addEventListener('click', function () {
  move.movePoint(mMove.mode[getRandom(0, mMove.mode.length - 1)], {
    classNameIn: 'animated flipInX',
    classNameOut: 'animated flipOutX',
    animate: true
  })
})