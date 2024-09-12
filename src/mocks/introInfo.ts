// 方案总览

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
// 渲染咬合部分数据
rows.push(setText({
  'left': 61,
  'top': 43,
  'width': 400,
  height: 95,
}, '方案总览', {
  isBold: true,
  color: '#ffffff',
  fontSize: 68
}))
const titles = [
  '基本信息', '病历分析', '治疗方案'
]
// 渲染下面三个总览的背景图片
for (let i = 0;i < 3; i += 1) {
  rows.push(setImage({
    'width': 230,
    'height': 303,
    'left': 61 + i * (326 - 61),
    'top': 174,
  }, 'intro-context-bg', 'png'),
  setText({
    'left': 89 + i * (354 - 89),
    'top': 191,
    'width': 100,
    height: 49,
  }, `${'0' + (i + 1)}`, {
    isBold: true,
    color: '#007353',
    fontSize: 35
  }),
  setText({
    'left': 89 + i * (354 - 89),
    'top': 249,
    'width': 200,
    height: 40,
  }, titles[i], {
    isBold: true,
    color: '#000000',
    fontSize: 29
  }),
  setLineType({
    'left': 89 + 8 + i * (354 - 89),
    'top': 240 + 8,
    'width': 186 - 15,
  }, {
    color: '#007353',
    width: 4
  })
  )
}
// 增加文字
// 基本信息模块
const title1 = ['基本信息', '病史', '临床检查']
const title2 = ['面型分析', '口内照分析', '模型分析', '侧位片分析', '全景片分析']
const title3 = ['问题列表与诊断', '治疗方案']
for (let i = 0; i < title1.length; i += 1) {
  rows.push(setText({
    'left': 89,
    'top': 304 + i * (28),
    'width': 200,
    height: 23,
  }, title1[i], {
    isBold: true,
    color: '#000000',
    fontSize: 17
  }))
}
for (let i = 0; i < title2.length; i += 1) {
  rows.push(setText({
    'left': 354,
    'top': 304 + i * (28),
    'width': 200,
    height: 23,
  }, title2[i], {
    isBold: true,
    color: '#000000',
    fontSize: 17
  }))
}
for (let i = 0; i < title3.length; i += 1) {
  rows.push(setText({
    'left': 619,
    'top': 304 + i * (28),
    'width': 200,
    height: 23,
  }, title3[i], {
    isBold: true,
    color: '#000000',
    fontSize: 17
  }))
} 
const introPage = {
  'id': 'slide-intro',
  'elements': [
    //   setTitleIcon(),
    //   setTitle('方案总览'),
    
    ...rows
  ],
  'background': {
    'type': 'solid',
    'color': 'rgba(0,115,83,1)'
  }
}
// 第一页
export default introPage