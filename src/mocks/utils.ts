import { FontSize } from '@icon-park/vue-next'

// 生成唯一的uuid
export const generateUUID = () => {
  return Math.random().toString(36).substr(2, 9)
}
  interface pptStyle {
    left: number,
    top: number,
    width: number
    height?: number
    cellMinHeight ?: number
  }
  // 头部文字标题
export const setTitle = (title: string) => {
  return {
    'type': 'text',
    'id': generateUUID(),
    'left': 37.636704119850187,
    'top': 16,
    'width': 600,
    'height': 48.796875,
    'lineHeight': 1.2,
    'content': `<p style=''><strong><span style='font-size: 24px'>${title}</span></strong></p>`,
    'rotate': 0,
    'defaultFontName': 'Microsoft Yahei',
    'defaultColor': '#000000'
  }
}
// 头部文字标题旁边有个icon 图片
export const setTitleIcon = () => {
  const style = {
    width: 7,
    height: 24,
    'left': 27.636704119850187,
    'top': 28.398437499999996,
  }
  return {
    'type': 'image',
    id: generateUUID(),
    'width': style.width,
    'height': style.height,
    'left': style.left,
    'top': style.top,
    'fixedRatio': true,
    'rotate': 0,
    src: getAssetsFile( 'titleIcon', 'png')
  }
}
// 返回文字的属性
export const setText = (pptStyle: pptStyle, text: string, textStyle?: {
  isBold?:boolean,
  color?: string,
  fill?: string
  fontSize?: number
  textAlign?: string
}) => {
  const defaultTextStyle = {
    isBold: false,
    color: '#333',
    fontSize: 14, // 默认为14
    textAlign: 'left'
  }
  Object.assign(defaultTextStyle, textStyle)
  const content = defaultTextStyle?.isBold ? `<p style="text-align: ${defaultTextStyle.textAlign}"><strong><span style=\"font-size: ${defaultTextStyle?.fontSize}px;\">${text}</span></strong></p>` :
    `<p style="text-align: ${defaultTextStyle.textAlign}"><span style="font-size: ${defaultTextStyle?.fontSize}px;">${text}</span></p>`
  if ( textStyle?.fill ) {
    return {
      'type': 'text',
      'id': generateUUID(),
      'left': pptStyle.left,
      'top': pptStyle.top,
      'width': pptStyle.width,
      'height': pptStyle?.height ?? 50,
      'content': content,
      'rotate': 0,
      'defaultFontName': 'Microsoft Yahei',
      'defaultColor': defaultTextStyle.color,
      'vertical': false,
      fill: textStyle?.fill,
      'lineHeight': 1
    }
    
  }
  return {
    'type': 'text',
    'id': generateUUID(),
    'left': pptStyle.left,
    'top': pptStyle.top,
    'width': pptStyle.width,
    'height': pptStyle?.height ?? 50,
    'content': content,
    'rotate': 0,
    'defaultFontName': 'Microsoft Yahei',
    'defaultColor': defaultTextStyle.color,
    'vertical': false,
    'lineHeight': 1
  }
}
// 获取assets静态资源
export const getAssetsFile = (fileName: string, type = 'png') => {
  const path = `/src/assets/ppt/${fileName}.${type}`
  const modules: Record<string, any> = import.meta.glob('@/assets/ppt/*.{png,svg,jpg,jpeg}', { eager: true })
  if (modules[path]) return modules[path].default
    
  // 地址错误

    
}
/**
   * 
   * @param style 图片的样式
   * @param imgUrl 图片在assets 里面的路径
   */
export const setImage = (style: pptStyle, imgUrl: string, type = 'jpg') => {
  // 利用这个路径获取到base64的图片
  return {
    'type': 'image',
    id: generateUUID(),
    'width': style.width,
    'height': style.height,
    'left': style.left,
    'top': style.top,
    'fixedRatio': true,
    'rotate': 0,
    src: getAssetsFile( imgUrl, type)
  }
}
interface Row { id: string; colspan: number; rowspan: number; text: string; style: { fontname: string; color: string; align: string; bold: boolean; backcolor: string } }
// const data = [[{
//   text: '拥挤度分析',
//   style: {
//     'fontname': 'Microsoft Yahei',
//     'color': '#333',
//     'align': 'center',
//     'bold': true,
//     'backcolor': 'rgb(238, 238, 238)'
//   }
// }]]
interface col {
    text: string;
    colspan?: number;
    rowspan?: number;
    style: {
        fontname?: string;
        color?: string;
        align?: string;
        bold?: boolean;
        backcolor?: string;
    };
}
function splitNumberIntoParts(number: number, parts: number): number[] {
  const partSize = 1 / parts
  const result: number[] = []

  for (let i = 0; i < parts; i++) {
    result.push(partSize)
  }

  return result
}
export const setTable = (style: pptStyle, colWidth : number, colData:col[][] ) => {
// 确定colWidths 分割了几份  然后看data里面的二维数组是否符合要求
  const tableData: Row[][] = []
  const colWidths = splitNumberIntoParts(1, colWidth)
   
  colData.map(item => {
    const row: Row[] = []
    item.map(col => {
      row.push({
        'id': generateUUID(),
        'colspan': 1,
        'rowspan': 1,
        text: col?.text,
        style: col.style
      })
    })
    tableData.push(row)
  })
  const result = {
    'type': 'table',
    'id': generateUUID(),
    'width': style.width,
    'height': style.height,
    'left': style.left,
    'top': style.top,
    colWidths,
    // 'colWidths': [
    //   0.2,
    //   0.2,
    //   0.2,
    //   0.2,
    //   0.2
    // ],
    'rotate': 0,
    'data': tableData,

    'outline': {
      'width': 2,
      'style': 'solid',
      'color': 'rgb(238, 238, 238)'
    },
    'cellMinHeight': style.cellMinHeight || 24
  }
  console.log('-----result', result)
  return result
}

export const setColWidthTable = (style: pptStyle, colWidths : number[], colData:col[][] ) => {
  // 确定colWidths 分割了几份  然后看data里面的二维数组是否符合要求
  const tableData: Row[][] = []
  // const colWidths = splitNumberIntoParts(1, colWidth)
  console.log('----colData', colData)
  colData.map(item => {
    const row: Row[] = []
    item.map(col => {
      row.push({
        'id': generateUUID(),
        'colspan': col.colspan,
        'rowspan': col.rowspan,
        text: col?.text,
        style: col.style
      })
    })
    tableData.push(row)
  })
  const result = {
    'type': 'table',
    'id': generateUUID(),
    'width': style.width,
    'height': style.height,
    'left': style.left,
    'top': style.top,
    colWidths,
    // 'colWidths': [
    //   0.2,
    //   0.2,
    //   0.2,
    //   0.2,
    //   0.2
    // ],
    'rotate': 0,
    'data': tableData,
  
    'outline': {
      'width': 1,
      'style': 'solid',
      'color': 'rgb(238, 238, 238)'
    },
    'cellMinHeight': style.cellMinHeight || 24
  }
  console.log('-----result', result)
  return result
}
// 填充线条
export const setLineType = (style: pptStyle, lineStyle = {
  width: 1,
  color: '#CBCBCB'
}) => {
  return {
    'type': 'line',
    'id': generateUUID(),
    'left': style.left,
    'top': style.top,
    'start': [
      0,
      0
    ],
    'end': [
      style.width,
      0
    ],
    'points': [
      '',
      ''
    ],
    'color': lineStyle.color,
    'style': 'solid',
    'width': lineStyle.width
  }
}