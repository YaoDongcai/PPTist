
import {
  setTitleIcon,
  setTitle,
  setText,
  setImage,
  setColWidthTable
} from './utils'
// 侧位图片分析
const textRows = []
const leftTitle = ['骨骼:', '牙齿:', '面部:']
for (let i = 0; i < leftTitle.length; i += 1) {
  textRows.push(setText({
    left: 55,
    top: 395 + i * (419 - 395),
    width: 50
  }, leftTitle[i], {
    isBold: true,
    fontSize: 12
  }))
}
const rightTitle = ['骨性I类；均角，生长方向正常。', '上前牙倾斜度正常，下前牙唇倾', '鼻唇角偏大，唇沟正常，上唇位于E线前1.7mm，下唇位于E线前2.4mm']
for (let i = 0; i < rightTitle.length; i += 1) {
  textRows.push(setText({
    left: 92,
    top: 395 + i * (419 - 395),
    width: 200
  }, rightTitle[i], {
    fontSize: 12
  }))
}
const rowsTable = [] // 放入table 的数据

const rowsData = []
const colWidths = [
  0.058716259861508156,
  0.25425238146095874,
  0.16260991345149803,
  0.14704087918486525,
  0.37738056604116993
]
const FONTSIZE = 8
const rowsTitle = [[{
  name: '测量项目', 
  'colspan': 2,
  'rowspan': 1,
}, {
  name: '测量项目', 
}, {
  name: '测量值', 

}, {
  name: '标准值',
}, {
  name: '结果分析',
}], 

[{
  'colspan': 1,
  'rowspan': 8,
  'name': '骨骼分析',
  backgroundColor: '#FFC919'
}, {
  'name': 'SNA',
}, {'name': '',}, {'name': '',}, {'name': '',}],
[{name: ''}, {
  'name': 'SNB',
}, {'name': '',}, {'name': '',}, {'name': '',}],
[{name: ''}, {
  'name': 'ANB',
}, {'name': '',}, {'name': '',}, {'name': '',}],
[{name: ''}, {
  'name': 'MP-SN',
}, {'name': '',}, {'name': '',}, {'name': '',}],
        
[{name: ''}, {
  'name': 'FMA',
}, {'name': '',}, {'name': '',}, {'name': '',}],
            
[{name: ''}, {
  'name': 'Y轴角',
}, {'name': '',}, {'name': '',}, {'name': '',}],
[{name: ''}, {
  'name': 'GO-S/Me-N(%)',
}, {'name': '',}, {'name': '',}, {'name': '',}],

[{name: ''}, {
  'name': 'AB-OP(mm)',
}, {'name': '',}, {'name': '',}, {'name': '',}],                        
]
for (let i = 0; i < rowsTitle.length; i += 1) {
  const rows = []
  for (let j = 0; j < rowsTitle[i].length; j += 1) {
    rows.push({
      'text': rowsTitle[i][j]?.name,
      colspan: rowsTitle[i][j]?.colspan || 1,
      rowspan: rowsTitle[i][j]?.rowspan || 1,
      'style': {
        'fontname': 'Microsoft Yahei',
        'color': '#333',
        'fontsize': FONTSIZE,
        'align': 'center',
        'backcolor': rowsTitle[i][j]?.backgroundColor ? rowsTitle[i][j]?.backgroundColor : 'rgb(255, 255, 255)'
      }  
    })
  }
  rowsData.push(rows)
}
// 第二段的数据
const rowsTwo = [[{
  'colspan': 1,
  'rowspan': 8,
  'name': '牙齿分析',
  backgroundColor: '#6CDD5E'
}, {
  'name': 'SNA',
}, {'name': '',}, {'name': '',}, {'name': '',}],
[{name: ''}, {
  'name': 'SNB',
}, {'name': '',}, {'name': '',}, {'name': '',}],
[{name: ''}, {
  'name': 'ANB',
}, {'name': '',}, {'name': '',}, {'name': '',}],
[{name: ''}, {
  'name': 'MP-SN',
}, {'name': '',}, {'name': '',}, {'name': '',}],
          
[{name: ''}, {
  'name': 'FMA',
}, {'name': '',}, {'name': '',}, {'name': '',}],
              
[{name: ''}, {
  'name': 'Y轴角',
}, {'name': '',}, {'name': '',}, {'name': '',}],
[{name: ''}, {
  'name': 'GO-S/Me-N(%)',
}, {'name': '',}, {'name': '',}, {'name': '',}],
  
[{name: ''}, {
  'name': 'AB-OP(mm)',
}, {'name': '',}, {'name': '',}, {'name': '',}]
]

for (let i = 0; i < rowsTwo.length; i += 1) {
  const rows = []
  for (let j = 0; j < rowsTwo[i].length; j += 1) {
    rows.push({
      'text': rowsTwo[i][j]?.name,
      colspan: rowsTwo[i][j]?.colspan || 1,
      rowspan: rowsTwo[i][j]?.rowspan || 1,
      'style': {
        'fontname': 'Microsoft Yahei',
        'color': '#333',
        'fontsize': FONTSIZE,
        'align': 'center',
        'backcolor': rowsTwo[i][j]?.backgroundColor ? rowsTwo[i][j]?.backgroundColor : 'rgb(255, 255, 255)'
      }  
    })
  }
  rowsData.push(rows)
}
// 第三段的数据
const rowsThree = [[{
  'colspan': 1,
  'rowspan': 8,
  'name': '软组织分析',
  backgroundColor: '#53CCF7'
}, {
  'name': 'SNA',
}, {'name': '',}, {'name': '',}, {'name': '',}],
[{name: ''}, {
  'name': 'SNB',
}, {'name': '',}, {'name': '',}, {'name': '',}],
[{name: ''}, {
  'name': 'ANB',
}, {'name': '',}, {'name': '',}, {'name': '',}],
[{name: ''}, {
  'name': 'MP-SN',
}, {'name': '',}, {'name': '',}, {'name': '',}],
          
[{name: ''}, {
  'name': 'FMA',
}, {'name': '',}, {'name': '',}, {'name': '',}],
              
[{name: ''}, {
  'name': 'Y轴角',
}, {'name': '',}, {'name': '',}, {'name': '',}],
[{name: ''}, {
  'name': 'GO-S/Me-N(%)',
}, {'name': '',}, {'name': '',}, {'name': '',}],
  
[{name: ''}, {
  'name': 'AB-OP(mm)',
}, {'name': '',}, {'name': '',}, {'name': '',}],]
for (let i = 0; i < rowsThree.length; i += 1) {
  const rows = []
  for (let j = 0; j < rowsThree[i].length; j += 1) {
    rows.push({
      'text': rowsThree[i][j]?.name,
      colspan: rowsThree[i][j]?.colspan || 1,
      rowspan: rowsThree[i][j]?.rowspan || 1,
      'style': {
        'fontname': 'Microsoft Yahei',
        'color': '#333',
        'fontsize': FONTSIZE,
        'align': 'center',
        'backcolor': rowsThree[i][j]?.backgroundColor ? rowsThree[i][j]?.backgroundColor : 'rgb(255, 255, 255)'
      }  
    })
  }
  rowsData.push(rows)
}
rowsTable.push(setColWidthTable({
  left: 311,
  top: 53,
  width: 617,
  height: 16,
  cellMinHeight: 16
}, colWidths, rowsData))


const laterPage = {
  'id': 'slide-later',
  'elements': [
    setTitleIcon(),
    setTitle('侧位图片分析'),
    setImage({
      'width': 224,
      'height': 268,
      'left': 55,
      'top': 73,
    }, 'whh'),  
    setText({
      left: 55,
      top: 371,
      width: 90
    }, '分析结论', {
      isBold: true,
      fontSize: 12
    }),
    ...textRows,
    ...rowsTable
  ],
  'background': {
    'type': 'solid',
    'color': '#fff'
  }
}


export default laterPage