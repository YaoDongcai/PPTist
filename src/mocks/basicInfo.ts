import {
  setTitleIcon,
  setTitle,
  setText,
  setImage
} from './utils'
  //  基本信息的页面参数
const standStyle = {
  left: 348,
  top: 67,
  width: 88,
  height: 20,
  step: 33,
  rightLeft: 415,
  descWidth: 251
}
const standPage = {
  'id': 'slide-stand',
  'elements': [
    setTitleIcon(),
    setTitle('基本信息'),
    setImage({
      'width': 263.5,
      'height': 313,
      'left': 44,
      'top': 67,
    }, 'whh'),
    setText({
      left: standStyle.left,
      top: standStyle.top,
      width: standStyle.width
    }, '姓名:'),
    setText({
      'left': standStyle.rightLeft,
      'top': standStyle.top,
      'width': standStyle.descWidth,
    }, '王小宝'),
    setText({
      'left': standStyle.left,
      'top': standStyle.top + standStyle.step,
      'width': standStyle.width,
    }, '性别:'),
    setText({
      'left': standStyle.rightLeft,
      'top': standStyle.top + standStyle.step,
      'width': standStyle.descWidth,
    }, '女'),
    setText({
      'left': standStyle.left,
      'top': standStyle.top + standStyle.step * 2,
      'width': standStyle.width,
    }, '年龄:'),
    setText({
      'left': standStyle.rightLeft,
      'top': standStyle.top + standStyle.step * 2,
      'width': standStyle.descWidth,
    }, '12岁'),
    setText({
      'left': standStyle.left,
      'top': standStyle.top + standStyle.step * 3,
      'width': standStyle.width,
    }, '出生日期:'),
    setText({
      'left': standStyle.rightLeft,
      'top': standStyle.top + standStyle.step * 3,
      'width': standStyle.descWidth,
    }, '2012年10月20日'),
    setText({
      'left': standStyle.left,
      'top': standStyle.top + standStyle.step * 4,
      'width': standStyle.width,
    }, '发育周期:'),
    setText({
      'left': standStyle.rightLeft,
      'top': standStyle.top + standStyle.step * 4,
      'width': standStyle.descWidth,
    }, '替牙期'),
    setText({
      'left': standStyle.left,
      'top': standStyle.top + standStyle.step * 5,
      'width': standStyle.width,
    }, '主诉'),
    setText({
      'left': standStyle.rightLeft,
      'top': standStyle.top + standStyle.step * 5,
      'width': standStyle.descWidth,
    }, '这里是主诉的内容，这里是主诉的内容，展示不下可以换行显示'),
  ],
  'background': {
    'type': 'solid',
    'color': '#fff'
  }
}
// 第一页
export default standPage