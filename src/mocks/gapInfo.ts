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
const rows1 = []
const rows1Title = ['    拥挤度分析', '', '', '', '']
for (let i = 0; i < 5; i += 1) {
  rows1.push({
    'text': rows1Title[i],
    'style': {
      'fontname': 'Microsoft Yahei',
      'color': '#333',
      'fontsize': 12,
      'align': i === 0 ? 'left' : 'center',
      'backcolor': '#eeece1',
      'bold': true
    }  
  })
}
const rows2 = []
const rows2Title = ['', '现有长度(mm)', '应用长度(mm)', '拥挤度(mm)', '分级']
for (let i = 0; i < 5; i += 1) {
  rows2.push({
    'text': rows2Title[i],
    'style': {
      'fontname': 'Microsoft Yahei',
      'color': '#333',
      'fontsize': 12,
      'align': 'center',
      'backcolor': 'rgb(255, 255, 255)'
    }  
  })
}
const rows3 = []
const rows3Title = ['    上颌', '119', '212', '112', '115']
for (let i = 0; i < 5; i += 1) {
  rows3.push({
    'text': rows3Title[i],
    'style': {
      'fontname': 'Microsoft Yahei',
      'color': '#333',
      'fontsize': 12,
      'align': i === 0 ? 'left' : 'center',
      'backcolor': 'rgb(255, 255, 255)'
    }  
  })
}
const rows4 = []
const rows4Title = ['    下颌', '119', '212', '112', '115']
for (let i = 0; i < 5; i += 1) {
  rows4.push({
    'text': rows4Title[i],
    'style': {
      'fontname': 'Microsoft Yahei',
      'color': '#333',
      'fontsize': 12,
      'align': i === 0 ? 'left' : 'center',
      'backcolor': 'rgb(255, 255, 255)'
    }  
  })
}
const rowOne = [], rowTwo = [], rowThree = []
const rows5 = []
const rows5Title = ['    Spee曲线', '', '']
for (let i = 0; i < 3; i += 1) {
  rows5.push({
    'text': rows5Title[i],
    'style': {
      'fontname': 'Microsoft Yahei',
      'color': '#333',
      'fontsize': 12,
      'align': i === 0 ? 'left' : 'center',
      'backcolor': '#eeece1',
      'bold': true
    }  
  })
}
const rows6 = []
const rows6Title = ['', '现有长度(mm)', '应有长度(mm)']
for (let i = 0; i < 3; i += 1) {
  rows6.push({
    'text': rows6Title[i],
    'style': {
      'fontname': 'Microsoft Yahei',
      'color': '#333',
      'fontsize': 12,
      'align': 'center',
      'backcolor': 'rgb(255, 255, 255)'
    }  
  })
}
const rows7 = []
const rows7Title = ['    左侧', '', '']
for (let i = 0; i < 3; i += 1) {
  rows7.push({
    'text': rows7Title[i],
    'style': {
      'fontname': 'Microsoft Yahei',
      'color': '#333',
      'fontsize': 12,
      'align': i === 0 ? 'left' : 'center',
      'backcolor': 'rgb(255, 255, 255)'
    }  
  })
}
const rows8 = []
const rows8Title = ['', '现有长度(mm)', '应有长度(mm)']
for (let i = 0; i < 3; i += 1) {
  rows8.push({
    'text': rows8Title[i],
    'style': {
      'fontname': 'Microsoft Yahei',
      'color': '#333',
      'fontsize': 12,
      'align': 'center',
      'backcolor': 'rgb(255, 255, 255)'
    }  
  })
}
rowOne.push(setTable({
  left: 55,
  top: 209,
  width: 827,
  height: 24,
  cellMinHeight: 24
}, 5, [
  rows1,
  rows2,
  rows3,
  rows4
]))
// 第二段的数据
rowTwo.push(setTable({
  left: 55,
  top: 305,
  width: 827,
  height: 24,
  cellMinHeight: 24
}, 3, [
  rows5,
  rows6,
  rows7,
  rows8
]))
const rows9 = []
const rows9Title = ['    牙弓宽度分析', '', '', '']
for (let i = 0; i < rows9Title.length; i += 1) {
  rows9.push({
    'text': rows9Title[i],
    'style': {
      'fontname': 'Microsoft Yahei',
      'color': '#333',
      'fontsize': 12,
      'align': i === 0 ? 'left' : 'center',
      'backcolor': '#eeece1',
      'bold': true
    }  
  })
}
const rows10 = []
const rows10Title = ['', '尖牙段宽度(mm)', '前磨牙段宽度(mm)', '磨牙段宽度(mm)']
for (let i = 0; i < rows10Title.length; i += 1) {
  rows10.push({
    'text': rows10Title[i],
    'style': {
      'fontname': 'Microsoft Yahei',
      'color': '#333',
      'fontsize': 12,
      'align': 'center',
      'backcolor': 'rgb(255, 255, 255)'
    }  
  })
}
const rows11 = []
const rows11Title = ['    上颌', '33.68', '34.14', '44.85']
for (let i = 0; i < rows11Title.length; i += 1) {
  rows11.push({
    'text': rows11Title[i],
    'style': {
      'fontname': 'Microsoft Yahei',
      'color': '#333',
      'fontsize': 12,
      'align': i === 0 ? 'left' : 'center',
      'backcolor': 'rgb(255, 255, 255)'
    }  
  })
}
const rows12 = []
const rows12Title = ['    下颌', '26.45', '27.9', '44.1']
for (let i = 0; i < rows12Title.length; i += 1) {
  rows12.push({
    'text': rows12Title[i],
    'style': {
      'fontname': 'Microsoft Yahei',
      'color': '#333',
      'fontsize': 12,
      'align': i === 0 ? 'left' : 'center',
      'backcolor': 'rgb(255, 255, 255)'
    }  
  })
}
const rows13 = []
const rows13Title = ['    协调', '上下尖牙段宽度协调', '下颌前磨牙段牙弓狭窄', '上下磨牙段宽度协调']
for (let i = 0; i < rows13Title.length; i += 1) {
  rows13.push({
    'text': rows13Title[i],
    'style': {
      'fontname': 'Microsoft Yahei',
      'color': '#333',
      'fontsize': 12,
      'align': i === 0 ? 'left' : 'center',
      'backcolor': 'rgb(255, 255, 255)'
    }  
  })
}
// 第三段的数据
rowThree.push(setTable({
  left: 55,
  top: 402,
  width: 827,
  height: 24,
  cellMinHeight: 24
}, 4, [
  rows9,
  rows10,
  rows11,
  rows12,
  rows13
]))
// 第三页
const gapPage = {
  'id': 'slide-gap',
  'elements': [
    setTitleIcon(),
    setTitle('模型测量：间隙分析'),
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
    setImage({
      'width': 209,
      'height': 111,
      'left': 736,
      'top': 73,
    }, 'whh'), 
    ...rowOne,
    ...rowTwo,
    ...rowThree
    // setTable({
    //   left: 55,
    //   top: 209,
    //   width: 827,
    //   height: 96
    // },[0.2,0.2,0.2,0.2, 0.2], [[{

    // }]]),
    // setTable({
    //   left: 55,
    //   top: 306,
    //   width: 827,
    //   height: 96
    // }),
    // setTable({
    //   left: 55,
    //   top: 403,
    //   width: 827,
    //   height: 96
    // })
  ],
  'background': {
    'type': 'solid',
    'color': '#fff'
  }
}
  
  
export default gapPage