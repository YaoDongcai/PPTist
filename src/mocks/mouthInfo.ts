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
    'width': 201,
    'height': 107,
    'left': 55 + i * (343 - 55),
    'top': 74,
  }, 'whh'),
  setText({
    'left': 139 - 20 + i * (427 - 139),
    'top': 189 - 10,
    'width': 110,
  }, `口内照`)
  )
}
// 渲染下面3个口内照
for (let i = 0;i < 3; i += 1) {
  rows.push(setImage({
    'width': 201,
    'height': 107,
    'left': 55 + i * (343 - 55),
    'top': 219,
  }, 'whh'),
  setText({
    'left': 139 - 20 + i * (427 - 139),
    'top': 352 - 25,
    'width': 110,
  }, `口内照`)
  )
}
// 渲染咬合部分数据
rows.push(setText({
  'left': 46,
  'top': 381,
  'width': 227,
  height: 31,
}, '咬合', {
  isBold: true,
  'fill': '#EEEEEE',
}))

for (let i = 0; i < 5; i += 1) {
  rows.push(setText({
    'left': 67 - 20,
    'top': 416 + i * 25,
    'width': 110,
  }, `${topArr[i].name}`), setText({
    'left': 187 - 20,
    'top': 416 + i * 25,
    'width': 110,
  }, `${topArr[i].desc}`, {
    isBold: true
  }))
}
rows.push(setText({
  'left': 343,
  'top': 381,
  'width': 227,
  height: 31,
      
}, '口内其他软硬组织', {
  isBold: true,
  'fill': '#EEEEEE',
}))
for (let i = 0; i < 5; i += 1) {
  rows.push(setText({
    'left': 364 - 20,
    'top': 416 + i * 25,
    'width': 110,
  }, `${topArr[i].name}`), setText({
    'left': 452 - 20,
    'top': 416 + i * 25,
    'width': 110,
  }, `${topArr[i].desc}`, {
    isBold: true
  }))
}
rows.push(setText({
  'left': 630,
  'top': 381,
  'width': 227,
  height: 31,
      
}, '牙体牙列', {
  isBold: true,
  'fill': '#EEEEEE',
}))
for (let i = 0; i < 5; i += 1) {
  rows.push(setText({
    'left': 651 - 20,
    'top': 416 + i * 25,
    'width': 110,
  }, `${topArr[i].name}`), setText({
    'left': 740 - 20,
    'top': 416 + i * 25,
    'width': 110,
  }, `${topArr[i].desc}`, {
    isBold: true
  }))
}

const mouthPage = {
  'id': 'slide-mouth',
  'elements': [
    setTitleIcon(),
    setTitle('口内照分析'),

    ...rows
  ],
  'background': {
    'type': 'solid',
    'color': '#fff'
  }
}
// 第一页
export default mouthPage