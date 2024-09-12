// 全景片分析
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
  width: 120,
  height: 20,
  step: 33,
  rightLeft: 415,
  descWidth: 251
}
const panoPage = {
  'id': 'slide-pano',
  'elements': [
    setTitleIcon(),
    setTitle('全景片分析'),
    setImage({
      'width': 463,
      'height': 237,
      'left': 55,
      'top': 126,
    }, 'whh'),
    setText({
      'left': 600,
      'top': 159,
      'width': 263,
      height: 40,
    }, '&nbsp;&nbsp;&nbsp;颞下颌关节', {
      isBold: true,
      'fill': '#EEEEEE'
    }),
    setText({
      left: 615,
      top: 106,
      width: 110
    }, '颞下颌关节:', {
      isBold: true
    }),
    setText({
      'left': 701,
      'top': 106,
      'width': 110,
    }, '恒牙期', {
      isBold: true
    }),
    setText({
      'left': 615,
      'top': 197,
      'width': standStyle.width,
    }, '髁突形态:', {
      isBold: true
    }),
    setText({
      'left': 701,
      'top': 197,
      'width': standStyle.descWidth,
    }, '左侧髁突形态异常'),
    setText({
      'left': 615,
      'top': 221,
      'width': standStyle.width,
    }, '髁突对称性:', {
      isBold: true
    }),
    setText({
      'left': 701,
      'top': 221,
      'width': standStyle.descWidth,
    }, '髁突不对称'),
    setText({
      'left': 600,
      'top': 255,
      'width': 263,
      height: 31,
    }, '&nbsp;&nbsp;&nbsp;牙体/牙列/硬组织', {
      isBold: true,
      'fill': '#EEEEEE'
    }),
    setText({
      'left': 615,
      'top': 293,
      'width': standStyle.width,
    }, '牙槽骨吸收:', {
      isBold: true
    }),
    setText({
      'left': 701,
      'top': 293,
      'width': standStyle.descWidth,
    }, '轻度'),
    setText({
      'left': 615,
      'top': 316,
      'width': standStyle.width,
    }, '牙缺失:', {
      isBold: true
    }),
    setText({
      'left': 701,
      'top': 316,
      'width': standStyle.descWidth,
    }, '37'),
    setText({
      'left': 615,
      'top': 340,
      'width': standStyle.width,
    }, '多生牙:', {
      isBold: true
    }),
    setText({
      'left': 701,
      'top': 340,
      'width': standStyle.descWidth,
    }, '26/23'),
    setText({
      'left': 615,
      'top': 364,
      'width': standStyle.width,
    }, '阻生牙:', {
      isBold: true
    }),
    setText({
      'left': 701,
      'top': 364,
      'width': standStyle.descWidth,
    }, '26/23'),
  ],
  'background': {
    'type': 'solid',
    'color': '#fff'
  }
}
// 第一页
export default panoPage