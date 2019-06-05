let app = document.getElementById('app');
let urls = [
  'http://bgcdn.acohome.cn/100965.jpg',
  'http://bgcdn.acohome.cn/1501505.jpg',
  'http://bgcdn.acohome.cn/1501655.jpg',
  'http://bgcdn.acohome.cn/286477.jpg',
  'http://bgcdn.acohome.cn/328845.jpg'
];

let move = mChange.makeMatrixChange(app, {
  images: urls,
  row: 7,
  col: 9
});

function getRandom(min, max) {
  return Math.round(Math.random() * (max - min)) + min;
}

move.movePoint(mChange.mode[0]);

new Vue({
  el: '#option',
  data: {
    inSelect: 'bounceIn',
    inList: [
      'flash',
      'bounceIn',
      'bounceInDown',
      'bounceInLeft',
      'bounceInRight',
      'bounceInUp',
      'fadeIn',
      'fadeInDown',
      'fadeInDownBig',
      'fadeInLeft',
      'fadeInLeftBig',
      'fadeInRight',
      'fadeInRightBig',
      'fadeInUp',
      'fadeInUpBig',
      'flipInX',
      'flipInY',
      'lightSpeedIn',
      'rotateIn',
      'rotateInDownLeft',
      'rotateInDownRight',
      'rotateInUpLeft',
      'rotateInUpRight',
      'rollIn',
      'zoomIn',
      'zoomInDown',
      'zoomInLeft',
      'zoomInRight',
      'zoomInUp',
      'slideInDown',
      'slideInLeft',
      'slideInRight',
      'slideInUp'
    ],
    outSelect: 'bounceOut',
    outList: [
      'flash',
      'bounceOut',
      'bounceOutDown',
      'bounceOutLeft',
      'bounceOutRight',
      'bounceOutUp',
      'fadeOut',
      'fadeOutDown',
      'fadeOutDownBig',
      'fadeOutLeft',
      'fadeOutLeftBig',
      'fadeOutRight',
      'fadeOutRightBig',
      'fadeOutUp',
      'fadeOutUpBig',
      'flipOutX',
      'flipOutY',
      'lightSpeedOut',
      'rotateOut',
      'rotateOutDownLeft',
      'rotateOutDownRight',
      'rotateOutUpLeft',
      'rotateOutUpRight',
      'hinge',
      'rollOut',
      'zoomOut',
      'zoomOutDown',
      'zoomOutLeft',
      'zoomOutRight',
      'zoomOutUp',
      'slideOutDown',
      'slideOutLeft',
      'slideOutRight',
      'slideOutUp'
    ]
  },
  methods: {
    start() {
      move.movePoint(mChange.mode[getRandom(0, mChange.mode.length - 1)], {
        classNameIn: 'animated ' + this.inSelect,
        classNameOut: 'animated ' + this.outSelect
      });
    }
  }
});
