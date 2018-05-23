var app = document.getElementById('app')
var url = 'http://7xse2z.com1.z0.glb.clouddn.com/257084.jpg'

mMove.initStyle('m-move-wrap', 7, 9)
var doms = mMove.initDom(app, 'm-move-wrap', 7, 9)

var mc = new mMove.MC(7, 9)

mc.$on('movePoint', ({point, mode}) => {
  doms[point.x - 1][point.y - 1].children[0].style = `background-image:url(${url});`
  doms[point.x - 1][point.y - 1].style = `background-image:url(${url});`
})

mc.movePoint(mMove.mode[0])

function getRandom(min, max) {
  return Math.ceil(Math.random() * (max - min)) + min
}

app.addEventListener('click', () => {
  mc.movePoint(mMove.mode[0])
})
