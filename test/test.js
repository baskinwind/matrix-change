var app = document.getElementById('app')
var url = 'http://7xse2z.com1.z0.glb.clouddn.com/257084.jpg'

mMove.initStyle('m-move-wrap', 7, 9)
var doms = mMove.initDom(app, 'm-move-wrap', 7, 9)

var mc = new mMove.MC(7, 9)

var animateType = 'test'

mc.$on('movePoint', ({point, mode}) => {
  let dom = doms[point.x - 1][point.y - 1]
  if (dom.dataset.change) {
    return
  }
  let oldClass = dom.className
  dom.className = `${oldClass} ${animateType}`
  dom.dataset.change = '1'
  dom.style.transition = mode.duration / 1000 + 's'
  dom.addEventListener('transitionend', function listen() {
    dom.children[0].style.backgroundImage = `url(${url})`
    dom.className = oldClass
    dom.removeEventListener('transitionend', listen)
    dom.dataset.change = ''
  })
})

mc.movePoint(mMove.mode[0])

function getRandom(min, max) {
  return Math.round(Math.random() * (max - min)) + min
}

app.addEventListener('click', () => {
  mc.movePoint(mMove.mode[getRandom(0, 6)])
})
