import Vue from 'vue/dist/vue';
import './index.css';

import { mode, makeMatrixChange } from '../src';

const urls = [
  'http://wallpapercdn.acohome.cn/AKFox_ZH-CN8586782340_1920x1080.jpg?mageMogr2/thumbnail/640x/interlace/1/blur/1x0/quality/50',
  'http://wallpapercdn.acohome.cn/AKFox_ZH-CN8586782340_1920x1080.jpg?mageMogr2/thumbnail/640x/interlace/1/blur/1x0/quality/50',
  'http://wallpapercdn.acohome.cn/AberystwythSeafront_EN-AU9268158003_1920x1080.jpg?mageMogr2/thumbnail/640x/interlace/1/blur/1x0/quality/50',
  'http://wallpapercdn.acohome.cn/AbstractSaltBeds_ZH-CN8351691359_1920x1080.jpg?mageMogr2/thumbnail/640x/interlace/1/blur/1x0/quality/50',
  'http://wallpapercdn.acohome.cn/AddoElephants_ZH-CN13744097225_1920x1080.jpg?mageMogr2/thumbnail/640x/interlace/1/blur/1x0/quality/50'
];

const move = makeMatrixChange(document.getElementById('app'), {
  images: urls,
  row: 10,
  col: 10
});

function getRandom(max, min = 0) {
  return Math.floor(Math.random() * (max - min + 1)) + min;
}

move.movePoint(mode[getRandom(mode.length)]);

new Vue({
  el: '#option',
  data: {
    inSelect: 'flipInX',
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
    outSelect: 'flipOutX',
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
      move.movePoint(mode[getRandom(mode.length)], {
        classNameIn: 'animated ' + this.inSelect,
        classNameOut: 'animated ' + this.outSelect
      });
    }
  }
});
