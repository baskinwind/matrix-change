var app = document.getElementById('app');
var urls = [
  'http://wallpapercdn.acohome.cn/AKFox_ZH-CN8586782340_1920x1080.jpg?mageMogr2/thumbnail/640x/interlace/1/blur/1x0/quality/50',
  'http://wallpapercdn.acohome.cn/AKFox_ZH-CN8586782340_1920x1080.jpg?mageMogr2/thumbnail/640x/interlace/1/blur/1x0/quality/50',
  'http://wallpapercdn.acohome.cn/AberystwythSeafront_EN-AU9268158003_1920x1080.jpg?mageMogr2/thumbnail/640x/interlace/1/blur/1x0/quality/50',
  'http://wallpapercdn.acohome.cn/AbstractSaltBeds_ZH-CN8351691359_1920x1080.jpg?mageMogr2/thumbnail/640x/interlace/1/blur/1x0/quality/50',
  'http://wallpapercdn.acohome.cn/AddoElephants_ZH-CN13744097225_1920x1080.jpg?mageMogr2/thumbnail/640x/interlace/1/blur/1x0/quality/50'
];
var index = 0;
var move = mChange.makeMatrixChange(app, {
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
      index += 1;
      index %= urls.length;
      move.movePoint(mChange.mode[getRandom(0, mChange.mode.length - 1)], {
        classNameIn: 'animated ' + this.inSelect,
        classNameOut: 'animated ' + this.outSelect,
        image: urls[index]
      });
    }
  }
});
