// 模型分析

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
// 渲染上3个口内照
for (let i = 0;i < 3; i += 1) {
  rows.push(setImage({
    'width': 173,
    'height': 92,
    'left': 55 + i * (302 - 55),
    'top': 79,
  }, 'whh')
  )
}
// 渲染下面3个口内照
for (let i = 0;i < 2; i += 1) {
  rows.push(setImage({
    'width': 173,
    'height': 107,
    'left': 179 + i * (426 - 179),
    'top': 181,
  }, 'whh')
  )
}
// 渲染咬合部分数据
rows.push(setText({
  'left': 55,
  'top': 314,
  'width': 225,
  height: 26,
}, '牙弓形态分析', {
  isBold: true,
  'fill': '#EEEEEE',
}))
  
for (let i = 0; i < 3; i += 1) {
  rows.push(setText({
    'left': 73 - 20,
    'top': 348 + i * 25,
    'width': 110,
  }, `${topArr[i].name}`), setText({
    'left': 145 - 20,
    'top': 348 + i * 25,
    'width': 110,
  }, `${topArr[i].desc}`, {
    isBold: true
  }))
}
rows.push(setText({
  'left': 327,
  'top': 314,
  'width': 225,
  height: 26,
        
}, '咬合关系分析', {
  isBold: true,
  'fill': '#EEEEEE',
}))
for (let i = 0; i < 5; i += 1) {
  rows.push(setText({
    'left': 345 - 20,
    'top': 348 + i * 25,
    'width': 110,
  }, `${topArr[i].name}`), setText({
    'left': 418 - 20,
    'top': 348 + i * 25,
    'width': 110,
  }, `${topArr[i].desc}`, {
    isBold: true
  }))
}
rows.push(setText({
  'left': 600,
  'top': 314,
  'width': 225,
  height: 26,
        
}, '牙体牙列分析', {
  isBold: true,
  'fill': '#EEEEEE',
}))
for (let i = 0; i < 5; i += 1) {
  rows.push(setText({
    'left': 614 - 20,
    'top': 348 + i * 25,
    'width': 110,
  }, `${topArr[i].desc}`, {
    isBold: true
  }))
}
  
const modelPage = {
  'id': 'slide-model',
  'elements': [
    setTitleIcon(),
    setTitle('模型分析'),
  
    ...rows
  ],
  'background': {
    'type': 'solid',
    'color': '#fff'
  }
}
// 第一页
export default modelPage