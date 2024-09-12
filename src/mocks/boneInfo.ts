import {
  setTitleIcon,
  setTitle,
  setText,
  setImage,
  setColWidthTable
} from './utils'
const rowsTable = [] // 放入table 的数据

const rowsData = []
const colWidths = [
  0.2, 0.2, 0.2, 0.4
]
const FONTSIZE = 8
const rowsTitle = [[{
  name: '测量项目', 
  backgroundColor: '#EEEEEE'
}, {
  name: '测量值', 
  backgroundColor: '#EEEEEE'

}, {
  name: '标准值',
  backgroundColor: '#EEEEEE'
}, {
  name: '结果分析',
  backgroundColor: '#EEEEEE'
}], 

[{name: 'PNS-UPW(mm)'}, {
  'name': 'SNB',
}, {'name': '',}, {'name': '',}, {'name': '',}],
[{name: 'PNS-AD2(mm)'}, {
  'name': 'ANB',
}, {'name': '',}, {'name': '',}, {'name': '',}],
[{name: 'U-MPW(mm)'}, {
  'name': 'MP-SN',
}, {'name': '',}, {'name': '',}, {'name': '',}],
        
[{name: 'TB-TPPW(mm)'}, {
  'name': 'FMA',
}, {'name': '',}, {'name': '',}, {'name': '',}],
            
[{name: 'V-LPW(mm)'}, {
  'name': 'Y轴角',
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
rowsTable.push(setColWidthTable({
  left: 302,
  top: 308,
  width: 648,
  height: 32,
  cellMinHeight: 32
}, colWidths, rowsData))
const bonePage = {
  'id': 'slide-later',
  'elements': [
    setTitleIcon(),
    setTitle('侧位图片分析'),
    setImage({
      'width': 186,
      'height': 222,
      'left': 55,
      'top': 73,
    }, 'whh'),  
    setImage({
      'width': 186,
      'height': 222,
      'left': 55,
      'top': 308,
    }, 'whh'),
    ...rowsTable
  ],
  'background': {
    'type': 'solid',
    'color': '#fff'
  }
}
  
  
export default bonePage