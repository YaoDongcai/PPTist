
import {
  setTitleIcon,
  setTitle,
  setText,
  setImage,
  setColWidthTable
} from './utils'
const rowsTable = [] // 放入table 的数据

const rowsOneData = []
const colWidths = [
  0.2,
  0.4,
  0.4,
]
const FONTSIZE = 10
const rowsOneTitle = [[{
  name: '颜面美观', 
  'colspan': 3,
  'rowspan': 1,
  backgroundColor: '#EEEEEE'
}, {
  name: '颜面美观', 
}, {
  name: '颜面美观', 
}], 

[{
  'colspan': 1,
  'rowspan': 7,
  'name': '正貌',
  backgroundColor: '#FFF0F0'
}, {
  'name': '正面型',
}, {'name': '均面型',}],
[{name: ''}, {
  'name': 'SNB',
}, {'name': '',}],
[{name: ''}, {
  'name': 'ANB',
}, {'name': '',}],
[{name: ''}, {
  'name': 'MP-SN',
}, {'name': '',}],
        
[{name: ''}, {
  'name': 'FMA',
}, {'name': '',}],
            
[{name: ''}, {
  'name': 'Y轴角',
}, {'name': '',}],

[{
  'name': '',
  backgroundColor: '#FFF0F0'
}, {
  'name': '正面型',
}, {'name': '均面型',}],

// 第二段
[{
  'colspan': 1,
  'rowspan': 7,
  'name': '侧貌',
  backgroundColor: '#FFF9E7'
}, {
  'name': '正面型',
}, {'name': '均面型',}],
[{name: ''}, {
  'name': 'SNB',
}, {'name': '',}],
[{name: ''}, {
  'name': 'ANB',
}, {'name': '',}],
[{name: ''}, {
  'name': 'MP-SN',
}, {'name': '',}],
          
[{name: ''}, {
  'name': 'FMA',
}, {'name': '',}],
              
[{name: ''}, {
  'name': 'Y轴角',
}, {'name': '',}],
  
[{
  'name': '',
  backgroundColor: '#FFF0F0'
}, {
  'name': '正面型',
}, {'name': '均面型',}],       
]
for (let i = 0; i < rowsOneTitle.length; i += 1) {
  const rows = []
  for (let j = 0; j < rowsOneTitle[i].length; j += 1) {
    rows.push({
      'text': rowsOneTitle[i][j]?.name,
      colspan: rowsOneTitle[i][j]?.colspan || 1,
      rowspan: rowsOneTitle[i][j]?.rowspan || 1,
      'style': {
        'fontname': 'Microsoft Yahei',
        'color': '#333',
        'fontsize': FONTSIZE,
        'align': 'center',
        'backcolor': rowsOneTitle[i][j]?.backgroundColor ? rowsOneTitle[i][j]?.backgroundColor : 'rgb(255, 255, 255)'
      }  
    })
  }
  rowsOneData.push(rows)
}

rowsTable.push(setColWidthTable({
  left: 55,
  top: 118 + 30,
  width: 263,
  height: 22,
  cellMinHeight: 22
}, colWidths, rowsOneData))
// 中间的安氏分类

const rowsTwoData = []

const rowsTwoTitle = [[{
  name: '三维结构与功能评估', 
  'colspan': 3,
  'rowspan': 1,
  backgroundColor: '#EEEEEE'
}, {
  name: '三维结构与功能评估', 
}, {
  name: '三维结构与功能评估', 
}], 

[{
  'colspan': 1,
  'rowspan': 2,
  'name': '结构',
  backgroundColor: '#F2FCFF'
}, {
  'name': '骨骼',
}, {'name': '骨性I类(ANB=3.2°);均角(FMA=25.1°);生长型基本正常。',}],
[{name: ''}, {
  'name': '牙齿',
}, {'name': '上前牙倾斜度基本正常;下前牙唇倾。',}],


// 第二段
[{
  'colspan': 1,
  'rowspan': 5,
  'name': '咬合关系',
  backgroundColor: '#F5F2FF'
}, {
  'name': '矢状向',
}, {'name': '覆盖基本正常;左侧磨牙II类关系;右侧磨牙I类关系。',}],
[{name: ''}, {
  'name': '横向',
}, {'name': '上下颌牙弓宽度不协调。',}],
[{name: ''}, {
  'name': 'ANB',
}, {'name': '',}],
[{name: ''}, {
  'name': '中线',
}, {'name': '上中线与面中线居中对齐;下中线与面中线居中对齐:上下牙列中线基本正常。',}],
          
[{name: ''}, {
  'name': '拥挤度',
}, {'name': '上颌I度拥挤，2.48mm;下颌I度拥挤，4.81mm.',}],
              
// 功能评估   
[{
  'colspan': 1,
  'rowspan': 4,
  'name': '功能评估',
  backgroundColor: '#F3F9EE'
}, {
  'name': '矢状向',
}, {'name': '覆盖基本正常;左侧磨牙II类关系;右侧磨牙I类关系。',}],
[{name: ''}, {
  'name': '横向',
}, {'name': '上下颌牙弓宽度不协调。',}],
[{name: ''}, {
  'name': 'ANB',
}, {'name': '',}],
[{name: ''}, {
  'name': '中线',
}, {'name': '上中线与面中线居中对齐;下中线与面中线居中对齐:上下牙列中线基本正常。',}],
]
for (let i = 0; i < rowsTwoTitle.length; i += 1) {
  const rows = []
  for (let j = 0; j < rowsTwoTitle[i].length; j += 1) {
    rows.push({
      'text': rowsTwoTitle[i][j]?.name,
      colspan: rowsTwoTitle[i][j]?.colspan || 1,
      rowspan: rowsTwoTitle[i][j]?.rowspan || 1,
      'style': {
        'fontname': 'Microsoft Yahei',
        'color': '#333',
        'fontsize': FONTSIZE,
        'align': 'center',
        'backcolor': rowsTwoTitle[i][j]?.backgroundColor ? rowsTwoTitle[i][j]?.backgroundColor : 'rgb(255, 255, 255)'
      }  
    })
  }
  rowsTwoData.push(rows)
}
rowsTable.push(setColWidthTable({
  left: 349,
  top: 118 + 30,
  width: 316,
  height: 22,
  cellMinHeight: 22
}, [51 / 316, 57 / 316, 207 / 316], rowsTwoData))
// 第三段的数据
const rowsThreeData = []

const rowsThreeTitle = [[{
  name: '病理问题', 
  'colspan': 2,
  'rowspan': 1,
  backgroundColor: '#EEEEEE'
}, {
  name: '病理问题', 
}], 

[{
  'name': '骨关节',
}, {'name': '无特殊',}],
[{
  'name': '软组织',
}, {'name': '有牙龈炎:有牙周炎。',}],
[{
  'name': '硬组织',
}, {'name': '轻度牙槽骨吸收。',}],
[{
  'name': '气道',
}, {'name': '气道狭窄，',}],
[{
  'name': '牙体',
}, {'name': '',}],
[{
  'name': '牙列',
}, {'name': '上中线与面中线居中对齐;',}],
]
for (let i = 0; i < rowsThreeTitle.length; i += 1) {
  const rows = []
  for (let j = 0; j < rowsThreeTitle[i].length; j += 1) {
    rows.push({
      'text': rowsThreeTitle[i][j]?.name,
      colspan: rowsThreeTitle[i][j]?.colspan || 1,
      rowspan: rowsThreeTitle[i][j]?.rowspan || 1,
      'style': {
        'fontname': 'Microsoft Yahei',
        'color': '#333',
        'fontsize': FONTSIZE,
        'align': 'center',
        'backcolor': rowsThreeTitle[i][j]?.backgroundColor ? rowsThreeTitle[i][j]?.backgroundColor : 'rgb(255, 255, 255)'
      }  
    })
  }
  rowsThreeData.push(rows)
}
rowsTable.push(setColWidthTable({
  left: 697,
  top: 118 + 30,
  width: 263,
  height: 32,
  cellMinHeight: 32
}, [66 / 263, 196 / 263], rowsThreeData))
const titleFontSize = 14
const conclusionPage = {
  'id': 'slide-bone',
  'elements': [
    setTitleIcon(),
    setTitle('问题列表与诊断'),
    // 列表的标题
    setText({
      'left': 55,
      'top': 78,
      'width': 263,
      height: 31,
    }, '面部对称性', {
      isBold: true,
      fontSize: titleFontSize,
      textAlign: 'center',
      'fill': '#EEEEEE'
    }),
    setText({
      'left': 349,
      'top': 78,
      'width': 316,
      height: 31,
    }, '安氏分类:安氏I类', {
      isBold: true,
      fontSize: titleFontSize,
      textAlign: 'center',
      'fill': '#EEEEEE'
    }),
    setText({
      'left': 697,
      'top': 78,
      'width': 263,
      height: 31,
    }, '垂直向:均角(FMA=25.1°)', {
      isBold: true,
      textAlign: 'center',
      fontSize: titleFontSize,
      'fill': '#EEEEEE'
    }),

    ...rowsTable
  ],
  'background': {
    'type': 'solid',
    'color': '#fff'
  }
}
    
    
export default conclusionPage