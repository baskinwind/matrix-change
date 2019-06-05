import {modeType} from './type/mode';
import {matrixOption, MatrixInterface, hitPointFunParams, hitPointOption} from './type/matrix';

type returnType = {
  movePoint(mode: modeType, option?: hitPointOption): void;
  changeImages(images: Array<string>): void;
  matrixChange: MatrixInterface;
};

import {Matrix} from './Matrix';
import {initContainerLayout, initDom} from './initHtml';
import {getRandom, getRandomStr} from "./util";

let defaultOption = {
  nameSpace: getRandomStr(8),
  row: 7,
  col: 9,
  images: []
};

export function makeMatrixChange(dom: HTMLElement, optionIn: matrixOption): returnType {
  let option = {...defaultOption, ...optionIn};

  initContainerLayout(option.nameSpace, option.row, option.col);
  let domMatrix = initDom(dom, option.nameSpace, option.row, option.col);

  let ma = new Matrix(option.row, option.col);
  let image = option.images[0];

  ma.$on('changeStart', () => {
    let num = getRandom(option.images.length - 1);
    image = option.images[num];
  });

  ma.$on('hitPoint', ({point, mode, option}: hitPointFunParams) => {
    image = option.image ? option.image : image;
    let classNameIn = '';
    let classNameOut = 'defaultChange';

    if (option.classNameIn && option.classNameOut) {
      option.animate = true;
      classNameIn = option.classNameIn;
      classNameOut = option.classNameOut;
    } else if (option.className) {
      classNameOut = option.className;
    }

    let dom = domMatrix[point.x][point.y];
    if (dom.dataset.mchange) {
      return;
    }

    let baseClass = <string>dom.dataset.baseclass;

    if (option.animate) {
      let listenAnimation = () => {
        if (dom.dataset.mchange === '2') {
          dom.className = baseClass;
          dom.dataset.mchange = '';
          dom.removeEventListener('animationend', listenAnimation);
          return;
        }
        // 当动画结束时，进行出场动画时，会有段时间的显示状态，当性能不佳时会显示出来，造成页面闪烁
        // 所以先将元素隐藏
        // 防止因为出场动画和入场动画一样而导致没有出场动画
        // 出场动画在下一个 event loop 内设置
        dom.className = baseClass + ' mc-hidden';
        setTimeout(() => {
          dom.className = `${baseClass} ${classNameIn}`;
        }, 20);
        dom.dataset.mchange = '2';
        let child = <HTMLElement>dom.children[0];
        child.style.backgroundImage = `url(${image})`;
      };

      dom.addEventListener('animationend', listenAnimation);
    } else {
      let listenTransition = () => {
        dom.dataset.mchange = '';
        dom.className = baseClass;
        dom.removeEventListener('transitionend', listenTransition);
        let child = <HTMLElement>dom.children[0];
        child.style.backgroundImage = `url(${image})`;
      };

      dom.addEventListener('transitionend', listenTransition);
    }

    dom.className = `${baseClass} ${classNameOut}`;
    dom.dataset.mchange = '1';
    dom.style.transition = mode.duration / 1000 + 's';
  });

  return {
    movePoint: ma.movePoint.bind(ma),
    changeImages(images) {
      option.images = images;
    },
    matrixChange: ma
  };
}
