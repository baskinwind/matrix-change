// 如果不想用 js 完成 style 的初始化，可以使用 matrixLayout.scss 效果一样
export function containerLayout(nameSpace, row, col) {
  let wrapSizeStyle = [
    `width:${100 / col}%;`,
    `height:${100 / row}%;`,
    'position: absolute;',
    'overflow: hidden;',
    'z-index: 2;'
  ].join('')

  let childSizeStyle = [
    `width:${100 * col}%;`,
    `height:${100 * row}%;`,
    'background-size: cover;',
    'display: block;',
    'position: absolute;',
    'z-index: 1;',
    'background-position: 50% 50%;'
  ].join('')

  let posiStyle = []
  for (let i = 1; i <= row; i++) {
    for (let j = 1; j <= col; j++) {
      let wrapStyle = [
        `top:${100 / row * (i - 1)}%;`,
        `left:${100 / col * (j - 1)}%;`
      ].join('')
      posiStyle.push(`.${nameSpace} .item-${i}-${j}{${wrapStyle}}`)
      let childStyle = [
        `top:${-100 * (i - 1)}%;`,
        `left:${-100 * (j - 1)}%;`
      ].join('')
      posiStyle.push(`.${nameSpace} .item-${i}-${j} .child{${childStyle}}`)
    }
  }

  let containStyle = [
    'position:relative'
  ].join('')

  let matrixChage = [
    `.${nameSpace}{${containStyle}}`,
    `.${nameSpace} .defaultChange{transform: scale(0);border-radius: 50%;}`,
    `.${nameSpace} .animation-item{${wrapSizeStyle}}`,
    `.${nameSpace} .animation-item .child{${childSizeStyle}}`,
    posiStyle.join('')
  ].join('')

  let styleDom = document.createElement('style')
  styleDom.innerHTML = matrixChage
  document.head.appendChild(styleDom)
}

export function initDom(dom, nameSpace, row, col) {
  let fragment = document.createDocumentFragment()
  let domMatrix = []
  for (let i = 1; i <= row; i++) {
    let rowDom = []
    for (let j = 1; j <= col; j++) {
      let dom = document.createElement('div')
      dom.className = `animation-item item-${i}-${j}`
      let domInner = document.createElement('div')
      domInner.className = `child`
      dom.appendChild(domInner)
      fragment.appendChild(dom)
      rowDom.push(dom)
    }
    domMatrix.push(rowDom)
  }
  dom.className += ' ' + nameSpace
  dom.appendChild(fragment)
  return domMatrix
}