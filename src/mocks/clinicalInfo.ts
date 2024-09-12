// 临床检查
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
  width: 110,
  height: 20,
  step: 44,
  rightLeft: 151,
  descWidth: 80
}

// 第三页
const clinicalPage = {
  'id': 'slide-3',
  'elements': [
    setTitleIcon(),
    setTitle('临床检查'),
    setText({
      'left': 34,
      'top': 82,
      'width': 910,
      height: 31,
    }, '&nbsp;口内健康评价', {
      isBold: true,
      'fill': '#EEEEEE'
    }),
    setText({
      'left': 55,
      'top': 117,
      'width': standStyle.descWidth,
    }, '口腔卫生:',),
    setText({
      'left': 161,
      'top': 117,
      'width': standStyle.descWidth,
    }, '一般'),
    setText({
      'left': 369,
      'top': 117,
      'width': standStyle.descWidth,
    }, '牙列:'),
    setText({
      'left': 458,
      'top': 117,
      'width': 110,
    }, '左下7牙缺失'),
    setText({
      'left': 34,
      'top': 150,
      'width': 910,
      height: 31,
    }, '&nbsp;口内功能评价', {
      isBold: true,
      'fill': '#EEEEEE'
    }),
    setText({
      'left': 57,
      'top': 184,
      'width': standStyle.descWidth,
    }, '呼吸:'),
    setText({
      'left': 57,
      'top': 214,
      'width': standStyle.descWidth,
    }, '吮颊:'),
    setText({
      'left': 57,
      'top': 244,
      'width': standStyle.descWidth,
    }, '咬物:'),
    setText({
      'left': 57,
      'top': 273,
      'width': 110,
    }, '唇系带附着:'),
    setText({
      'left': 161,
      'top': 184,
      'width': 110,
    }, '正常呼吸'),
    setText({
      'left': 161,
      'top': 214,
      'width': 110,
    }, '基本正常'), setText({
      'left': 161,
      'top': 244,
      'width': 110,
    }, '基本正常'), setText({
      'left': 161,
      'top': 273,
      'width': 110,
    }, '基本正常'),
    setText({
      'left': 34,
      'top': 307,
      'width': 910,
      height: 31,
    }, '&nbsp;面部对称性', {
      isBold: true,
      'fill': '#EEEEEE'
    }),
    setText({
      'left': 55,
      'top': 341,
      'width': 110,
    }, '上中线'), setText({
      'left': 161,
      'top': 341,
      'width': 210,
    }, '上中线与面中线居中对齐'),

    setText({
      'left': 369,
      'top': 341,
      'width': 110,
    }, '下中线'), setText({
      'left': 458,
      'top': 341,
      'width': 210,
    }, '上中线与面中线居中对齐'),
    setText({
      'left': 665,
      'top': 341,
      'width': 110,
    }, '颊部:'), 
    setText({
      'left': 777,
      'top': 341,
      'width': 110,
    }, '居中'),
    setText({
      'left': 34,
      'top': 374,
      'width': 910,
      height: 31,
    }, '&nbsp;关节检查', {
      isBold: true,
      'fill': '#EEEEEE'
    }),
    setText({
      'left': 55,
      'top': 409,
      'width': 110,
    }, '张口度:'), 
    setText({
      'left': 161,
      'top': 409,
      'width': 110,
    }, '基本正常'),
    setText({
      'left': 55,
      'top': 439,
      'width': 110,
    }, '疼痛:'), 
    setText({
      'left': 161,
      'top': 439,
      'width': 120,
    }, '双侧关节无疼痛'),
    setText({
      'left': 369,
      'top': 409,
      'width': 110,
    }, '张口型：'), 
    setText({
      'left': 458,
      'top': 409,
      'width': 110,
    }, '基本正常'),
    setText({
      'left': 369,
      'top': 439,
      'width': 110,
    }, '弹响：'), 
    setText({
      'left': 458,
      'top': 439,
      'width': 120,
    }, '双侧关节无弹响'),
    setText({
      'left': 665,
      'top': 409,
      'width': 120,
    }, 'ICP与RCP位:'), 
    setText({
      'left': 777,
      'top': 409,
      'width': 110,
    }, '居中'),
  ],
  'background': {
    'type': 'solid',
    'color': '#fff'
  }
}


export default clinicalPage