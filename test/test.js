var app = document.getElementById('app')
var urls = ['http://7xse2z.com1.z0.glb.clouddn.com/257084.jpg',
  'http://7xse2z.com1.z0.glb.clouddn.com/257453.jpg',
  'http://7xse2z.com1.z0.glb.clouddn.com/285848.jpg',
  'http://7xse2z.com1.z0.glb.clouddn.com/3455%20%281%29.jpg']

var row = 7
var col = 9

mMove.initStyle('m-move-wrap', row, col)
var doms = mMove.initDom(app, 'm-move-wrap', row, col)

var mm = new mMove.Matrix(row, col)

var animateClass = 'test'

var url = urls[0]

function getRandom(min, max) {
  return Math.round(Math.random() * (max - min)) + min
}

mm.$on('changeStart', function () {
  url = urls[getRandom(0, urls.length - 1)]
})

mm.$on('hitPoint', function (e) {
  var point = e.point
  var mode = e.mode
  var dom = doms[point.x][point.y]
  if (dom.dataset.change) {
    return
  }
  var oldClass = dom.className
  dom.className = `${oldClass} ${animateClass}`
  dom.dataset.change = '1'
  dom.style.transition = mode.duration / 1000 + 's'
  dom.addEventListener('transitionend', function listen() {
    console.log(url)
    dom.children[0].style.backgroundImage = `url(${url})`
    dom.className = oldClass
    dom.removeEventListener('transitionend', listen)
    dom.dataset.change = ''
  })
})

mm.movePoint(mMove.mode[0])

app.addEventListener('click', function () {
  mm.movePoint(mMove.mode[getRandom(0, mMove.mode.length - 1)])
})
