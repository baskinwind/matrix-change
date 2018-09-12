import { modeType } from '../types/mode';
import { MatrixInterface } from '../types/matrix';
import { normalObject, pointType, optionType } from '../types/normal';

type exportObj = {
  movePoint: (mode: modeType, option: optionType) => void;
  changeImages: (images: Array<string>) => void;
  matrixChange: MatrixInterface;
};

import { Matrix } from './Matrix';
import { containerLayout, initDom } from './initHtml';

function getRandom (min: number, max: number): number {
  return Math.round(Math.random() * (max - min)) + min;
}

function getRandomStr (num: number): string {
  let str = '';
  let arr = ['a', 'b', 'c', 'd', 'e', 'f', 'g', 'h', 'i', 'j', 'k', 'l', 'm', 'n', 'o', 'p', 'q', 'r', 's', 't', 'u', 'v', 'w', 'x', 'y', 'z', 'A', 'B', 'C', 'D', 'E', 'F', 'G', 'H', 'I', 'J', 'K', 'L', 'M', 'N', 'O', 'P', 'Q', 'R', 'S', 'T', 'U', 'V', 'W', 'X', 'Y', 'Z'];
  for (let i = 0; i < num; i++) {
    str += arr[getRandom(0, arr.length)];
  }
  return str;
}

let defaultOption = {
  nameSpace: getRandomStr(8),
  row: 7,
  col: 9
};

export function makeMatrixChange (dom: HTMLElement, option: normalObject): exportObj {
  option = Object.assign(defaultOption, option);

  containerLayout(option.nameSpace, option.row, option.col);
  let domMatrix = initDom(dom, option.nameSpace, option.row, option.col);

  let ma = new Matrix(option.row, option.col);
  let image = option.images[0];

  domMatrix.forEach(domArray => {
    domArray.forEach(dom => {
      dom.dataset.oldclass = dom.className;
    });
  });

  ma.$on('changeStart', () => {
    image = option.images[getRandom(0, option.images.length - 1)];
  });

  ma.$on('hitPoint', ({point, mode, option}: { point: pointType, mode: modeType, option: optionType }) => {
    image = option.image ? option.image : image;
    let className = option.className ? option.className : 'defaultChange';
    let classNameIn = '';

    let dom = domMatrix[point.x][point.y];
    if (dom.dataset.change) {
      return;
    }

    ma.$emit('changeStart');
    if (option.animate) {
      let aniFlag = 0;

      let listenAnimation = () => {
        dom.className = dom.dataset.oldclass;
        if (aniFlag === 1) {
          ma.$emit('changeEnd');
          dom.removeEventListener('animationend', listenAnimation);
          return;
        }
        setTimeout(() => {
          dom.className = `${oldClass} ${classNameIn}`;
        });
        aniFlag = 1;
        let child = dom.children[0] as HTMLElement;
        child.style.backgroundImage = `url(${image})`;
      };

      className = option.classNameOut;
      classNameIn = option.classNameIn ? option.classNameIn : option.classNameOut;

      dom.addEventListener('animationend', listenAnimation);
    } else {
      let listenTransition = () => {
        ma.$emit('changeEnd');
        dom.dataset.mchange = '';
        dom.className = dom.dataset.oldclass;
        dom.removeEventListener('transitionend', listenTransition);
        let child = dom.children[0] as HTMLElement;
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
    changeImages (images) {
      option.images = images;
    },
    matrixChange: ma
  };
}
