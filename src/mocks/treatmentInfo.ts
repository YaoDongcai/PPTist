// 全景片分析
import {
  setTitleIcon,
  setTitle,
  setText,
  setLineType,
  setImage
} from './utils'
  //  基本信息的页面参数
const standStyle = {
  left: 348,
  top: 67,
  width: 120,
  height: 20,
  step: 33,
  rightLeft: 415,
  descWidth: 251
}
// 循环生成4个text 和line 的数据
const rows = []
for (let i = 0; i < 4; i += 1) {
  rows.push(setText({
    'left': 45,
    'top': 163 + i * 44,
    'width': 110,
  }, `${i + 1}、`, {
    isBold: true
  }),
  setLineType({
    'left': 55,
    'top': 206 + i * 44,
    'width': 894,
  }))
}
const treatmentPage = {
  'id': 'slide-treatment',
  'elements': [
    setTitleIcon(),
    setTitle('治疗方案'),

    setText({
      'left': 55,
      'top': 78,
      'width': 263,
      height: 31,
    }, '方案难度：中等', {
      isBold: true,
      'fill': '#EEEEEE',
      textAlign: 'center'
    }),
    setText({
      'left': 349,
      'top': 78,
      'width': 316,
      height: 31,

    }, '方案分险：中等', {
      isBold: true,
      'fill': '#EEEEEE',
      textAlign: 'center'
    }),
    setText({
      left: 45,
      top: 129,
      width: 110
    }, '方案内容', {
      isBold: true
    }),
    ...rows
  ],
  'background': {
    'type': 'solid',
    'color': '#fff'
  }
}
// 第一页
export default treatmentPage