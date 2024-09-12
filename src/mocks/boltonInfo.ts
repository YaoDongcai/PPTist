// 第四页 模型测量：间隙分析
// 临床检查
import {
  setTitleIcon,
  setTitle,
  setText,
  setImage,
  setTable
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
const row1 = [{
  'text': '宽度',
  'style': {
    'fontname': 'Microsoft Yahei',
    'color': '#333',
    'align': 'center',
    'bold': true,
    'backcolor': 'rgb(238, 238, 238)'
  }  
}]
for (let i = 0; i < 10; i += 1) {
  row1.push({
    'text': '',
    'style': {
      'fontname': 'Microsoft Yahei',
      'color': '#333',
      'align': 'center',
    }  
  })
}
const row2 = [{
  'text': '牙位',
  'style': {
    'fontname': 'Microsoft Yahei',
    'color': '#333',
    'align': 'center',
    'bold': true,
    'backcolor': 'rgb(238, 238, 238)'
  }  
}]
for (let i = 0; i < 10; i += 1) {
  row2.push({
    'text': '',
    'style': {
      'fontname': 'Microsoft Yahei',
      'color': '#333',
      'align': 'center',
    }  
  })
}
const row3 = [{
  'text': '牙位',
  'style': {
    'fontname': 'Microsoft Yahei',
    'color': '#333',
    'align': 'center',
    'bold': true,
    'backcolor': 'rgb(238, 238, 238)'
  }  
}]
for (let i = 0; i < 10; i += 1) {
  row3.push({
    'text': '',
    'style': {
      'fontname': 'Microsoft Yahei',
      'color': '#333',
      'align': 'center',
    }  
  })
}
const row4 = [{
  'text': '宽度',
  'style': {
    'fontname': 'Microsoft Yahei',
    'color': '#333',
    'align': 'center',
    'bold': true,
    'backcolor': 'rgb(238, 238, 238)'
  }  
}]
for (let i = 0; i < 10; i += 1) {
  row4.push({
    'text': '',
    'style': {
      'fontname': 'Microsoft Yahei',
      'color': '#333',
      'align': 'center',
    }  
  })
}

const row5 = [{
  'text': '类别',
  'style': {
    'fontname': 'Microsoft Yahei',
    'color': '#333',
    'align': 'center',
    'bold': true,
    'backcolor': 'rgb(238, 238, 238)'
  }  
}]
const row5Title = ['上颌(mm)', '下颌(mm)', '差值(mm)', 'Bolton比', '标准差']
for (let i = 0; i < 5; i += 1) {
  row5.push({
    'text': row5Title[i],
    'style': {
      'fontname': 'Microsoft Yahei',
      'color': '#333',
      'align': 'center',
      'backcolor': 'rgb(255, 255, 255)'
    }  
  })
}

const row6 = [{
  'text': '全牙',
  'style': {
    'fontname': 'Microsoft Yahei',
    'color': '#333',
    'align': 'center',
    'bold': true,
    'backcolor': 'rgb(238, 238, 238)',

  }  
}]
for (let i = 0; i < 5; i += 1) {
  row6.push({
    'text': '',
    'style': {
      'fontname': 'Microsoft Yahei',
      'color': '#333',
      'align': 'center',
      'backcolor': 'rgb(255, 255, 255)'
    }  
  })
}

const row7 = [{
  'text': '前牙',
  'style': {
    'fontname': 'Microsoft Yahei',
    'color': '#333',
    'align': 'center',
    'bold': true,
    'backcolor': 'rgb(238, 238, 238)'
  }  
}]
for (let i = 0; i < 5; i += 1) {
  row7.push({
    'text': '',
    'style': {
      'fontname': 'Microsoft Yahei',
      'color': '#333',
      'align': 'center',
      'backcolor': 'rgb(255, 255, 255)'
    }  
  })
}
// 第四页
const boltonPage = {
  'id': 'slide-5',
  'elements': [
    setTitleIcon(),
    setTitle('模型测量：Bolton分析'),
    setImage({
      'width': 209,
      'height': 111,
      'left': 55,
      'top': 73,
    }, 'whh'),  
    setImage({
      'width': 209,
      'height': 111,
      'left': 282,
      'top': 73,
    }, 'whh'), 
    setImage({
      'width': 209,
      'height': 111,
      'left': 509,
      'top': 73,
    }, 'whh'),  
    setTable({
      left: 55,
      top: 209,
      width: 827,
      height: 96
    }, 11, [
      row1,
      row2,
      row3,
      row4
    ]),
    
    setTable({
      left: 55,
      top: 360,
      width: 827,
      height: 96
    }, 6, [
      row5,
      row6,
      row7,
    ]),
    
  ],
  'background': {
    'type': 'solid',
    'color': '#fff'
  }
}
    
    
export default boltonPage