import {
  setTable,
} from './utils'

const row1 = []
const row5Title = ['上颌(mm)', '下颌(mm)', '差值(mm)', 'Bolton比', '标准差']
for (let i = 0; i < 5; i += 1) {
  row1.push({
    'text': row5Title[i],
    'style': {
      'fontname': 'Microsoft Yahei',
      'color': '#333',
      'align': 'center',
      'backcolor': 'rgb(255, 255, 255)'
    }  
  })
}
const rows = []
rows.push(setTable({
  left: 55,
  top: 209,
  width: 600,
  height: 24
}, 5, [
  row1, row1
]))
const testTable = {
  'id': 'slide-5',
  'elements': [
    ...rows
  ]
}


export default testTable