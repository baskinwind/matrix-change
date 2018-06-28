var app = document.getElementById('app')
var urls = ['http://7xse2z.com1.z0.glb.clouddn.com/257084.jpg',
  'http://7xse2z.com1.z0.glb.clouddn.com/257453.jpg',
  'http://7xse2z.com1.z0.glb.clouddn.com/285848.jpg',
  'http://7xse2z.com1.z0.glb.clouddn.com/3455%20%281%29.jpg',
  'http://7xse2z.com1.z0.glb.clouddn.com/280752.jpg',
  'http://7xse2z.com1.z0.glb.clouddn.com/286477.jpg',
  'http://7xse2z.com1.z0.glb.clouddn.com/257508.jpg',
  'http://7xse2z.com1.z0.glb.clouddn.com/wallhaven-406224.png']

var move = mChange.makeMatrixChange(app, {
  images: urls,
  row: 7,
  col: 9
})

function getRandom(min, max) {
  return Math.round(Math.random() * (max - min)) + min
}

move.movePoint(mChange.mode[0])

new Vue({
  el: '#option',
  data: {
    inSelect: 'rollIn',
    inList: ['flash', 'rubberBand', 'shake', 'headShake', 'swing', 'tada', 'wobble', 'jello', 'bounceIn', 'bounceInDown', 'bounceInLeft', 'bounceInRight', 'bounceInUp', 'fadeIn', 'fadeInDown', 'fadeInDownBig', 'fadeInLeft', 'fadeInLeftBig', 'fadeInRight', 'fadeInRightBig', 'fadeInUp', 'fadeInUpBig', 'flipInX', 'flipInY', 'lightSpeedIn', 'rotateIn', 'rotateInDownLeft', 'rotateInDownRight', 'rotateInUpLeft', 'rotateInUpRight', 'rollIn', 'zoomIn', 'zoomInDown', 'zoomInLeft', 'zoomInRight', 'zoomInUp', 'slideInDown', 'slideInLeft', 'slideInRight', 'slideInUp'],
    outSelect: 'hinge',
    outList: ['flash', 'rubberBand', 'shake', 'headShake', 'swing', 'tada', 'wobble', 'jello', 'bounceOut', 'bounceOutDown', 'bounceOutLeft', 'bounceOutRight', 'bounceOutUp', 'fadeOut', 'fadeOutDown', 'fadeOutDownBig', 'fadeOutLeft', 'fadeOutLeftBig', 'fadeOutRight', 'fadeOutRightBig', 'fadeOutUp', 'fadeOutUpBig', 'flipOutX', 'flipOutY', 'lightSpeedOut', 'rotateOut', 'rotateOutDownLeft', 'rotateOutDownRight', 'rotateOutUpLeft', 'rotateOutUpRight', 'hinge', 'rollOut', 'zoomOut', 'zoomOutDown', 'zoomOutLeft', 'zoomOutRight', 'zoomOutUp', 'slideOutDown', 'slideOutLeft', 'slideOutRight', 'slideOutUp']
  },
  methods: {
    start() {
      move.movePoint(mChange.mode[getRandom(0, mChange.mode.length - 1)], {
        animate: true,
        classNameIn: 'animated ' + this.inSelect,
        classNameOut: 'animated ' + this.outSelect
      })
    }
  }
})
