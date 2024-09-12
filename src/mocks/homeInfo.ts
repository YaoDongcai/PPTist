// 第一页的主页信息
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
rows.push(setImage({
  'width': 240,
  'height': 30,
  'left': 75,
  'top': 42,
}, 'logo', 'png')
)
// 渲染咬合部分数据
rows.push(setText({
  'left': 75,
  'top': 110,
  'width': 495,
  height: 101,
}, '正畸分析报告', {
  isBold: true,
  color: '#ffffff',
  fontSize: 72
}))
rows.push(
  setText({
    'left': 75,
    'top': 210,
    'width': 455,
    height: 55,
  }, `&nbsp; 刘德华&nbsp;|&nbsp; 男&nbsp;|&nbsp; 56岁&nbsp; |&nbsp;替牙期`, {
    color: '#000000',
    fill: '#ffffff',
    fontSize: 30
  })
)
const titles = [
  '主治医生', '病历号', '美亚美亚口腔门诊部', '2024年7月20号'
]
const icons = ['home-doc-icon', 'home-bingli-icon', 'home-menzhen-icon', 'home-date-icon']
// 渲染下面三个总览的背景图片
for (let i = 0;i < icons.length; i += 1) {
  rows.push(setImage({
    'width': 20,
    'height': 20,
    'left': 208,
    'top': 298 + i * (327 - 298),
  }, icons[i], 'png'),
  setText({
    'left': 238,
    'top': 298 + i * (327 - 298) - 12,
    'width': 160,
    height: 21,
  }, titles[i], {
    isBold: true,
    color: '#ffffff',
    fontSize: 15
  })
  )
}
// 增加文字
// 基本信息模块
rows.push(setText({
  'left': 75,
  'top': 468,
  'width': 160,
  height: 21,
}, '*说明:', {
  isBold: true,
  color: '#ffffff',
  fontSize: 10
}))
// 更新数据
const desc = ['1、本报告依据医生提供的患者基本信息、临床检查、影像资料进行综合分析，分析结论依赖资料完整性及准确性。', '2、本报告是基于有限的患者资料进行分析，若报告未提示异常的项目并不表示患者没有潜在问题，请主治医生综合患者信息进行临床判断。',
  '3、报告结论仅供临床专科医生参考，     分析结论不作为诊断依据，具体资料方案的采纳和实施由主治医生决定。']
for (let i = 0; i < desc.length; i += 1) {
  rows.push(setText({
    'left': 82,
    'top': 488 + i * 15,
    'width': 900,
    height: 21,
  }, desc[i], {
    isBold: true,
    color: '#ffffff',
    fontSize: 10
  }))
}

const homePage = {
  'id': 'slide-home',
  'elements': [
    ...rows
  ],
  'background': {
    'type': 'solid',
    'color': 'rgba(0,115,83,1)'
  }
}
// 第一页
export default homePage
