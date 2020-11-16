// 如果不想用 js 完成 style 的初始化，可以使用 matrixLayout.scss 效果一样
export function initContainerLayout(
  nameSpace: string,
  row: number,
  col: number,
): void {
  let wrapSizeStyle = [
    `width:${100 / col}%;`,
    `height:${100 / row}%;`,
    "position: absolute;",
    "overflow: hidden;",
    "z-index: 2;",
  ].join("");

  let childSizeStyle = [
    `width:${100 * col}%;`,
    `height:${100 * row}%;`,
    "background-size: cover;",
    "display: block;",
    "position: absolute;",
    "z-index: 1;",
    "background-position: 50% 50%;",
  ].join("");

  let posiStyle = [];
  for (let i = 1; i <= row; i++) {
    for (let j = 1; j <= col; j++) {
      let wrapStyle = [
        `top:${(100 / row) * (i - 1)}%;`,
        `left:${(100 / col) * (j - 1)}%;`,
      ].join("");
      posiStyle.push(`.${nameSpace} .mc-item-${i}-${j}{${wrapStyle}}`);
      let childStyle = [
        `top:${-100 * (i - 1)}%;`,
        `left:${-100 * (j - 1)}%;`,
      ].join("");
      posiStyle.push(
        `.${nameSpace} .mc-item-${i}-${j} .mc-child{${childStyle}}`,
      );
    }
  }

  let containStyle = ["position:relative;", "overflow: hidden;"].join("");

  let matrixChangeStyle = [
    `.${nameSpace}{${containStyle}}`,
    `.${nameSpace} .defaultChange{transform: scale(0);border-radius: 50%;}`,
    `.${nameSpace} .mc-animation-item{${wrapSizeStyle}}`,
    `.${nameSpace} .mc-animation-item .mc-child{${childSizeStyle}}`,
    `.${nameSpace} .mc-hidden{opacity:0}`,
    posiStyle.join(""),
  ].join("");

  let styleDom = document.createElement("style");
  styleDom.innerHTML = matrixChangeStyle;
  document.head.appendChild(styleDom);
}

export function initDom(
  dom: HTMLElement,
  nameSpace: string,
  row: number,
  col: number,
): HTMLElement[][] {
  let fragment = document.createDocumentFragment();
  let domMatrix = [];
  for (let i = 1; i <= row; i++) {
    let rowDom = [];
    for (let j = 1; j <= col; j++) {
      let dom = document.createElement("div");
      dom.className = `mc-animation-item mc-item-${i}-${j}`;
      dom.dataset.baseclass = dom.className;
      let domInner = document.createElement("div");
      domInner.className = `mc-child`;
      dom.appendChild(domInner);
      fragment.appendChild(dom);
      rowDom.push(dom);
    }
    domMatrix.push(rowDom);
  }
  dom.className += " " + nameSpace;
  dom.appendChild(fragment);
  return domMatrix;
}
