import {modeType} from './types/mode';
import {matrixOption, MatrixInterface, hitPointFunParams, hitPointOption} from './types/matrix';

type returnType = {
  movePoint(mode: modeType, option: hitPointOption): void;
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
    image = option.images[getRandom(0, option.images.length - 1)];
  });

  ma.$on('hitPoint', ({point, mode, option}: hitPointFunParams) => {
    image = option.image ? option.image : image;
    let className = option.className ? option.className : 'defaultChange';
    let classNameIn = '';

    let dom = domMatrix[point.x][point.y];
    if (dom.dataset.mchange) {
      return;
    }

    if (option.animate) {
      className = <string>option.classNameOut;
      classNameIn = <string>(option.classNameIn ? option.classNameIn : option.classNameOut);

      let aniFlag = 0;

      let listenAnimation = () => {
        dom.className = <string>dom.dataset.oldclass;
        if (aniFlag === 1) {
          dom.dataset.mchange = '';
          dom.removeEventListener('animationend', listenAnimation);
          return;
        }
        setTimeout(() => {
          dom.className = `${oldClass} ${classNameIn}`;
        });
        aniFlag = 1;
        let child = <HTMLElement>dom.children[0];
        child.style.backgroundImage = `url(${image})`;
      };

      dom.addEventListener('animationend', listenAnimation);
    } else {
      let listenTransition = () => {
        dom.dataset.mchange = '';
        dom.className = <string>dom.dataset.oldclass;
        dom.removeEventListener('transitionend', listenTransition);
        let child = <HTMLElement>dom.children[0];
        child.style.backgroundImage = `url(${image})`;
      };

      dom.addEventListener('transitionend', listenTransition);
    }

    let oldClass = dom.dataset.oldclass;
    dom.className = `${oldClass} ${className}`;
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
