import { modeType } from "./mode/index";

import Matrix, { hitPointParams } from "./Matrix";
import { initContainerLayout, initDom } from "./initHtml";
import { getRandom, getRandomStr } from "./util";

interface matrixOption {
  images: string[];
  nameSpace?: string;
  row?: number;
  col?: number;
}

interface hitPointOption {
  image?: string;
  className?: string;
  animate?: boolean;
  classNameIn?: string;
  classNameOut?: string;
}

interface makeMatrixChangeReturn {
  matrixChange: Matrix;

  movePoint(mode: modeType, option?: hitPointOption): void;

  changeImages(images: string[]): void;
}

let defaultOption = {
  nameSpace: getRandomStr(8),
  row: 7,
  col: 9,
  images: [],
};

export function makeMatrixChange(
  dom: HTMLElement,
  optionIn: matrixOption,
): makeMatrixChangeReturn {
  let option = { ...defaultOption, ...optionIn };

  initContainerLayout(option.nameSpace, option.row, option.col);
  let domMatrix = initDom(dom, option.nameSpace, option.row, option.col);

  let matrix = new Matrix(option.row, option.col);
  let image = option.images[0];

  matrix.$on("matrixChangeStart", () => {
    let num = getRandom(option.images.length - 1);
    image = option.images[num];
    matrix.$emit("changeStart");
  });

  matrix.$on<hitPointParams<hitPointOption>>("hitPoint", (event) => {
    image = event.option.image ? event.option.image : image;
    let classNameIn = "";
    let classNameOut = "defaultChange";

    if (event.option.classNameIn && event.option.classNameOut) {
      event.option.animate = true;
      classNameIn = event.option.classNameIn;
      classNameOut = event.option.classNameOut;
    } else if (event.option.className) {
      classNameOut = event.option.className;
    }

    let dom = domMatrix[event.point.x][event.point.y];
    if (dom.dataset.mchange) {
      return;
    }

    let baseClass = dom.dataset.baseclass as string;

    if (event.option.animate) {
      let listenAnimation = () => {
        if (dom.dataset.mchange === "2") {
          dom.className = baseClass;
          dom.dataset.mchange = "";
          dom.removeEventListener("animationend", listenAnimation);
          if (event.end) {
            matrix.$emit("changeEnd");
            matrix.lock = false;
          }
          return;
        }
        // 当动画结束时，进行出场动画时，会有段时间的显示状态，当性能不佳时会显示出来，造成页面闪烁
        // 所以先将元素隐藏
        // 防止因为出场动画和入场动画一样而导致没有出场动画
        // 出场动画在下一个 event loop 内设置
        dom.className = baseClass + " mc-hidden";
        setTimeout(() => {
          dom.className = `${baseClass} ${classNameIn}`;
        }, 20);
        dom.dataset.mchange = "2";
        let child = <HTMLElement>dom.children[0];
        child.style.backgroundImage = `url(${image})`;
      };

      dom.addEventListener("animationend", listenAnimation);
    } else {
      let listenTransition = () => {
        dom.dataset.mchange = "";
        dom.className = baseClass;
        dom.removeEventListener("transitionend", listenTransition);
        let child = <HTMLElement>dom.children[0];
        child.style.backgroundImage = `url(${image})`;
        if (event.end) {
          matrix.$emit("changeEnd");
          matrix.lock = false;
        }
      };

      dom.addEventListener("transitionend", listenTransition);
    }

    dom.className = `${baseClass} ${classNameOut}`;
    dom.dataset.mchange = "1";
    dom.style.transition = event.mode.duration / 1000 + "s";
  });

  return {
    matrixChange: matrix,
    movePoint: (mode, option = {}) => {
      matrix.movePoint<hitPointOption>(mode, option);
    },
    changeImages(images) {
      option.images = images;
    },
  };
}
