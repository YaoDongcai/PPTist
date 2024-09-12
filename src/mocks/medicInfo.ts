import {
  setTitleIcon,
  setTitle,
  setText,
  setImage
} from './utils'
//  基本信息的页面参数
const standStyle = {
  left: 44,
  top: 66,
  width: 120,
  height: 20,
  step: 44,
  rightLeft: 151,
  descWidth: 251
}

// 第二页
const medicalPage = {
  'id': 'slide-medical',
  'elements': [
    setTitleIcon(),
    setTitle('病史'),
      
    setText({
      left: standStyle.left,
      top: standStyle.top,
      width: standStyle.width
    }, '全身病史:', {
      isBold: true
    }),
    setText({
      'left': standStyle.rightLeft,
      'top': standStyle.top,
      'width': standStyle.descWidth,
    }, '鼻炎、鼻窦炎'),
    setText({
      'left': standStyle.left,
      'top': standStyle.top + standStyle.step,
      'width': standStyle.width,
    }, '过敏史:', {
      isBold: true
    }),
    setText({
      'left': standStyle.rightLeft,
      'top': standStyle.top + standStyle.step,
      'width': standStyle.descWidth,
    }, '无'),
    setText({
      'left': standStyle.left,
      'top': standStyle.top + standStyle.step * 2,
      'width': standStyle.width,
    }, '药物史:', {
      isBold: true
    }),
    setText({
      'left': standStyle.rightLeft,
      'top': standStyle.top + standStyle.step * 2,
      'width': standStyle.descWidth,
    }, '无'),
    setText({
      'left': standStyle.left,
      'top': standStyle.top + standStyle.step * 3,
      'width': standStyle.width,
    }, '家族遗传史:', {
      isBold: true
    }),
    setText({
      'left': standStyle.rightLeft,
      'top': standStyle.top + standStyle.step * 3,
      'width': standStyle.descWidth,
    }, '无'),
    setText({
      'left': standStyle.left,
      'top': standStyle.top + standStyle.step * 4,
      'width': standStyle.width,
    }, '口腔病史:', {
      isBold: true
    }),
    setText({
      'left': standStyle.rightLeft,
      'top': standStyle.top + standStyle.step * 4,
      'width': standStyle.descWidth,
    }, '打鼾或呼吸困难，拔除过牙'),
    setText({
      'left': standStyle.left,
      'top': standStyle.top + standStyle.step * 5,
      'width': standStyle.width,
    }, '口腔不良习惯:', {
      isBold: true
    }),
    setText({
      'left': standStyle.rightLeft,
      'top': standStyle.top + standStyle.step * 5,
      'width': standStyle.descWidth,
    }, '偏侧咀嚼'),
  ],
  'background': {
    'type': 'solid',
    'color': '#fff'
  }
}


export default medicalPage