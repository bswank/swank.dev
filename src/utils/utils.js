export const alterHeadings = html =>
  html.replace(/(<h[1-6]>)(.*)(<\/h[1-6]>)/g, '$1<span>$2</span>$3')
