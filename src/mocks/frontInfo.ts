// 正貌
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
const topArr = [{
  name: '正面型',
  desc: '一般'
}, {
  name: '对称性',
  desc: '左下7牙缺失'
}, {
  name: '下面高',
  desc: '一般'
}, {
  name: '唇齿位',
  desc: '一般'
}, {
  name: '人中',
  desc: '一般'
}, {
  name: '口角',
  desc: '一般'
}, {
  name: '絯部',
  desc: '一般'
}, {
  name: '颞部',
  desc: '一般'
}, {
  name: '颧骨',
  desc: '一般'
}]
const bottomArr = [{
  name: '笑弧',
  desc: '一般'
}, {
  name: '笑线',
  desc: '一般'
}, {
  name: '上中线',
  desc: '一般'
}]
//  渲染上数据
for (let i = 0; i < 9; i += 1) {
  rows.push(setText({
    'left': 669 - 20,
    'top': 121 + i * 25,
    'width': 110,
  }, `${topArr[i].name}`), setText({
    'left': 741 - 20,
    'top': 121 + i * 25,
    'width': 110,
  }, `${topArr[i].desc}`, {
    isBold: true
  }))
}
// 渲染下数据
for (let i = 0; i < 3; i += 1) {
  rows.push(setText({
    'left': 669 - 20,
    'top': 398 + i * 25,
    'width': 110,
  }, `${topArr[i].name}`), setText({
    'left': 741 - 20,
    'top': 398 + i * 25,
    'width': 110,
  }, `${topArr[i].desc}`, {
    isBold: true
  }))
}
const frontPage = {
  'id': 'slide-front',
  'elements': [
    setTitleIcon(),
    setTitle('面容分析：正貌'),
    setImage({
      'width': 272,
      'height': 336,
      'left': 55,
      'top': 98,
    }, 'whh'),
    setImage({
      'width': 272,
      'height': 336,
      'left': 344,
      'top': 98,
    }, 'whh'),
    setText({
      'left': 648,
      'top': 87,
      'width': 263,
      height: 31,
    }, '正貌', {
      isBold: true,
      'fill': '#EEEEEE',
    }),
    setText({
      'left': 648,
      'top': 364,
      'width': 263,
      height: 31,
  
    }, '正貌微笑', {
      isBold: true,
      'fill': '#EEEEEE',
    }),
    ...rows,
    setText({
      'left': 176,
      'top': 454,
      'width': 110,
      height: 31,
    }, '正貌', {
      isBold: true,
    }),
    setText({
      'left': 449,
      'top': 454,
      'width': 110,
      height: 31,
    
    }, '正貌微笑', {
      isBold: true,
    }),
  ],
  'background': {
    'type': 'solid',
    'color': '#fff'
  }
}
// 第一页
export default frontPage